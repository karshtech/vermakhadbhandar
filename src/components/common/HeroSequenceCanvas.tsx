import React, { useRef, useEffect } from 'react';
import { useSequencePreloader } from '../../hooks/useSequencePreloader';

export interface HeroSequenceCanvasProps {
  progress?: number;
  progressRef?: React.MutableRefObject<number>;
  className?: string;
  fitMode?: 'cover' | 'contain';
}

/**
 * High-performance HTML5 Canvas renderer for scroll-driven video frame playback.
 * Automatically samples progressRef (or progress prop) to draw the active WebP frame
 * with zero DOM thrashing and native 120 FPS performance.
 */
export const HeroSequenceCanvas: React.FC<HeroSequenceCanvasProps> = ({
  progress = 0,
  progressRef,
  className = '',
  fitMode = 'cover',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { manifest, getFrame, isReady } = useSequencePreloader();

  const lastDrawnIndexRef = useRef<number>(-1);
  const lastDrawnImgRef = useRef<HTMLImageElement | null>(null);

  // Render loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    let animId: number;

    const render = () => {
      const currentProgress = progressRef ? progressRef.current : progress;
      const totalFrames = manifest?.sequence.totalFrames || 120;
      const targetIndex = Math.min(
        totalFrames - 1,
        Math.max(0, Math.floor(currentProgress * (totalFrames - 1)))
      );

      const img = getFrame(targetIndex);

      if (img && (targetIndex !== lastDrawnIndexRef.current || img !== lastDrawnImgRef.current)) {
        lastDrawnIndexRef.current = targetIndex;
        lastDrawnImgRef.current = img;

        const w = canvas.width;
        const h = canvas.height;

        if (w > 0 && h > 0) {
          // Re-enforce high-quality smoothing in case context was reset by dimensions change
          if (!ctx.imageSmoothingEnabled) ctx.imageSmoothingEnabled = true;
          if (ctx.imageSmoothingQuality !== 'high') ctx.imageSmoothingQuality = 'high';

          const imgW = img.naturalWidth || img.width || 1920;
          const imgH = img.naturalHeight || img.height || 1080;
          const imgRatio = imgW / imgH;
          const canvasRatio = w / h;

          let renderW = w;
          let renderH = h;
          let offsetX = 0;
          let offsetY = 0;

          if (fitMode === 'cover') {
            if (canvasRatio > imgRatio) {
              renderW = w;
              renderH = w / imgRatio;
              offsetX = 0;
              offsetY = (h - renderH) / 2;
            } else {
              renderH = h;
              renderW = h * imgRatio;
              offsetY = 0;
              offsetX = (w - renderW) / 2;
            }
          } else {
            // contain
            if (canvasRatio > imgRatio) {
              renderH = h;
              renderW = h * imgRatio;
              offsetY = 0;
              offsetX = (w - renderW) / 2;
            } else {
              renderW = w;
              renderH = w / imgRatio;
              offsetX = 0;
              offsetY = (h - renderH) / 2;
            }
          }

          // Crisp pixel alignment to prevent fractional blur
          ctx.drawImage(
            img,
            Math.round(offsetX),
            Math.round(offsetY),
            Math.round(renderW),
            Math.round(renderH)
          );
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [manifest, getFrame, progress, progressRef, fitMode]);

  // Handle canvas resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateSize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const targetW = Math.round((rect.width || window.innerWidth) * dpr);
      const targetH = Math.round((rect.height || window.innerHeight) * dpr);
      if (targetW > 0 && targetH > 0 && (canvas.width !== targetW || canvas.height !== targetH)) {
        canvas.width = targetW;
        canvas.height = targetH;
        lastDrawnIndexRef.current = -1; // Force redraw on resize
        lastDrawnImgRef.current = null;
      }
    };

    updateSize();
    const ro = new ResizeObserver(updateSize);
    ro.observe(canvas);
    window.addEventListener('resize', updateSize);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full block object-cover transition-opacity duration-700 ${
          isReady ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ width: '100%', height: '100%' }}
      />
      {/* Loading Poster Fallback */}
      {!isReady && (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero/sequence/frame_0001.webp')",
          }}
        />
      )}
    </div>
  );
};
