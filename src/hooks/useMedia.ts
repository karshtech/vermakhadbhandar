import { useSyncExternalStore } from 'react';

/**
 * Universal SSR-safe media query hook powered by React 18's useSyncExternalStore.
 */
export function useMedia(query: string, fallback = false): boolean {
  return useSyncExternalStore(
    (callback) => {
      if (typeof window === 'undefined') return () => {};
      const mql = window.matchMedia(query);
      mql.addEventListener('change', callback);
      return () => mql.removeEventListener('change', callback);
    },
    () => {
      if (typeof window === 'undefined') return fallback;
      return window.matchMedia(query).matches;
    },
    () => fallback
  );
}

/** True on desktop/laptop devices with a mouse or precision trackpad */
export const useFinePointer = (): boolean => useMedia('(hover: hover) and (pointer: fine)');

/** True when the user explicitly requests reduced motion */
export const useReducedMotionPref = (): boolean => useMedia('(prefers-reduced-motion: reduce)');

/** True on desktop viewports (>= 1024px) */
export const useDesktop = (): boolean => useMedia('(min-width: 1024px)');
