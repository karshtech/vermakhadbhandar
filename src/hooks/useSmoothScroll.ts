import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let globalLenis: Lenis | null = null;

/**
 * Access the shared global Lenis instance anywhere in the application.
 * Enables buttery smooth programmatic scrolling from navigation, CTAs, and story cards.
 */
export function getLenis(): Lenis | null {
  return globalLenis;
}

/**
 * Master Smooth Scroll & GSAP ScrollTrigger Synchronization Hook
 * Single coordinated animation frame loop driving both Lenis and ScrollTrigger.
 */
export function useSmoothScroll() {
  useEffect(() => {
    // Respect user's reduced motion preferences
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    if (globalLenis) return; // Prevent duplicate instances

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Luxurious exponential deceleration tail
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.4,
    });

    globalLenis = lenis;

    // Synchronize Lenis scroll position with GSAP ScrollTrigger on every scroll update
    lenis.on('scroll', () => {
      ScrollTrigger.update();
    });

    // Drive Lenis exclusively from GSAP's internal high-performance ticker
    // Guarantees zero competing requestAnimationFrame loops
    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      globalLenis = null;
    };
  }, []);
}
