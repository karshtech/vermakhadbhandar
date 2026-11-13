import { useState, useEffect, useRef, useCallback } from 'react';

export interface FrameInfo {
  index: number;
  frameNumber: number;
  filename: string;
  path: string;
  timestamp: number;
  sizeBytes: number;
}

export interface SequenceManifest {
  version: string;
  sourceVideo: {
    filename: string;
    durationSeconds: number;
    originalWidth: number;
    originalHeight: number;
    originalFps: number;
    originalSizeBytes: number;
    codec: string;
  };
  sequence: {
    extractionFps: number;
    dimensions: {
      width: number;
      height: number;
      aspectRatio: string;
    };
    format: string;
    quality: number;
    totalFrames: number;
    durationSeconds: number;
    totalSizeBytes: number;
    averageFrameSizeBytes: number;
    contactSheet: string;
    frames: FrameInfo[];
  };
}

export interface UseSequencePreloaderOptions {
  manifestUrl?: string;
  initialPreloadCount?: number;
  chunkSize?: number;
  autoLoadRemaining?: boolean;
  maxCachedFrames?: number;
}

/**
 * Intelligent progressive preloader for scroll-driven video frame sequences.
 * 1. Loads first frame immediately for instant poster display.
 * 2. Preloads initial critical batch (12-15 frames).
 * 3. Progressively preloads subsequent frames in background chunks using decode().
 * 4. Gracefully falls back to nearest loaded frame during rapid scrubbing.
 * 5. Bounded sliding-window cache to prevent memory pressure on mobile devices.
 */
export function useSequencePreloader(options: UseSequencePreloaderOptions = {}) {
  const {
    manifestUrl = '/images/hero/sequence/manifest.json',
    initialPreloadCount = 15,
    chunkSize = 10,
    autoLoadRemaining = true,
    maxCachedFrames = 42,
  } = options;

  const [manifest, setManifest] = useState<SequenceManifest | null>(null);
  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [isFirstFrameLoaded, setIsFirstFrameLoaded] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const imagesCacheRef = useRef<Map<number, HTMLImageElement>>(new Map());
  const loadingIndicesRef = useRef<Set<number>>(new Set());
  const lastActiveIndexRef = useRef<number>(0);
  const isDestroyedRef = useRef<boolean>(false);

  // Fetch manifest
  useEffect(() => {
    isDestroyedRef.current = false;
    let cancelled = false;

    fetch(manifestUrl)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status} fetching sequence manifest`);
        return res.json() as Promise<SequenceManifest>;
      })
      .then((data) => {
        if (!cancelled) setManifest(data);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      });

    return () => {
      cancelled = true;
      isDestroyedRef.current = true;
    };
  }, [manifestUrl]);

  // Load a single frame with off-thread decode and bounded sliding-window memory control
  const loadSingleFrame = useCallback(
    (index: number, frames: FrameInfo[]): Promise<HTMLImageElement | null> => {
      if (imagesCacheRef.current.has(index)) {
        return Promise.resolve(imagesCacheRef.current.get(index)!);
      }
      if (loadingIndicesRef.current.has(index) || index < 0 || index >= frames.length) {
        return Promise.resolve(null);
      }

      loadingIndicesRef.current.add(index);
      const frameInfo = frames[index];

      return new Promise((resolve) => {
        const img = new Image();
        img.src = frameInfo.path;

        const onDone = async () => {
          if (isDestroyedRef.current) return resolve(null);
          try {
            if ('decode' in img) {
              await img.decode();
            }
          } catch {
            // Ignore decode failures on older browsers
          }
          if (isDestroyedRef.current) return resolve(null);

          // Evict furthest non-poster frames if cache size exceeds limit
          if (imagesCacheRef.current.size >= maxCachedFrames) {
            let furthestIdx = -1;
            let maxDist = -1;
            const current = lastActiveIndexRef.current;
            for (const cachedIdx of imagesCacheRef.current.keys()) {
              if (cachedIdx === 0) continue; // Keep poster frame 0 always pinned
              const dist = Math.abs(cachedIdx - current);
              if (dist > maxDist) {
                maxDist = dist;
                furthestIdx = cachedIdx;
              }
            }
            if (furthestIdx !== -1 && maxDist > 14) {
              imagesCacheRef.current.delete(furthestIdx);
            }
          }

          imagesCacheRef.current.set(index, img);
          loadingIndicesRef.current.delete(index);
          setLoadedCount(imagesCacheRef.current.size);
          if (index === 0) setIsFirstFrameLoaded(true);
          resolve(img);
        };

        img.onload = onDone;
        img.onerror = () => {
          loadingIndicesRef.current.delete(index);
          resolve(null);
        };
      });
    },
    [maxCachedFrames]
  );

  // Preload a window of frames around the current scrubbing position
  const preloadWindow = useCallback(
    (centerIndex: number, frames: FrameInfo[]) => {
      const total = frames.length;
      const start = Math.max(0, centerIndex - 5);
      const end = Math.min(total, centerIndex + 10);
      for (let i = start; i < end; i++) {
        if (!imagesCacheRef.current.has(i) && !loadingIndicesRef.current.has(i)) {
          loadSingleFrame(i, frames);
        }
      }
    },
    [loadSingleFrame]
  );

  // Progressive background chunk loader
  useEffect(() => {
    if (!manifest) return;
    const frames = manifest.sequence.frames;
    const total = frames.length;
    let isCancelled = false;

    async function loadProgressively() {
      // 1. Load frame 0 immediately (poster)
      await loadSingleFrame(0, frames);

      // 2. Load initial burst around opening
      const initialBatch = Math.min(initialPreloadCount, total);
      for (let i = 1; i < initialBatch; i++) {
        if (isCancelled) return;
        await loadSingleFrame(i, frames);
      }

      // 3. Load remaining frames progressively in background idle chunks
      if (!autoLoadRemaining) return;

      let currentStart = initialBatch;
      while (currentStart < total && !isCancelled) {
        const end = Math.min(currentStart + chunkSize, total);
        const promises: Promise<HTMLImageElement | null>[] = [];
        for (let i = currentStart; i < end; i++) {
          promises.push(loadSingleFrame(i, frames));
        }
        await Promise.all(promises);

        // Small yielding delay to ensure main thread stays responsive for 120 FPS scrolling
        await new Promise((r) => setTimeout(r, 60));
        currentStart = end;
      }
    }

    loadProgressively();

    return () => {
      isCancelled = true;
    };
  }, [manifest, initialPreloadCount, chunkSize, autoLoadRemaining, loadSingleFrame]);

  // Retrieve best available frame (exact or nearest loaded fallback)
  const getFrame = useCallback(
    (targetIndex: number): HTMLImageElement | null => {
      if (!manifest) return null;
      const total = manifest.sequence.totalFrames;
      const clampedIndex = Math.min(total - 1, Math.max(0, Math.round(targetIndex)));
      const frames = manifest.sequence.frames;

      lastActiveIndexRef.current = clampedIndex;

      // Exact match
      if (imagesCacheRef.current.has(clampedIndex)) {
        preloadWindow(clampedIndex, frames);
        return imagesCacheRef.current.get(clampedIndex)!;
      }

      // If requested frame isn't loaded yet, find nearest loaded frame to prevent visual blanking
      let bestDist = Infinity;
      let bestImg: HTMLImageElement | null = null;

      for (const [idx, img] of imagesCacheRef.current.entries()) {
        const dist = Math.abs(idx - clampedIndex);
        if (dist < bestDist) {
          bestDist = dist;
          bestImg = img;
        }
      }

      // Trigger lazy load of target frame and surrounding window
      preloadWindow(clampedIndex, frames);

      return bestImg;
    },
    [manifest, preloadWindow]
  );

  return {
    manifest,
    isReady: isFirstFrameLoaded,
    totalFrames: manifest?.sequence.totalFrames || 0,
    loadedCount,
    loadProgress: manifest ? loadedCount / manifest.sequence.totalFrames : 0,
    error,
    getFrame,
  };
}
