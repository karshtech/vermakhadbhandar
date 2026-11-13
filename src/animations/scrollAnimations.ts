import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

/**
 * Creates a standard staggered entrance animation for child elements
 */
export const createStaggerReveal = (
  container: HTMLElement | string,
  targets: string = '.stagger-item',
  delay: number = 0
) => {
  return gsap.fromTo(
    typeof container === 'string' ? container : targets,
    { opacity: 0, y: 35 },
    {
      opacity: 1,
      y: 0,
      duration: 0.85,
      ease: 'power3.out',
      stagger: 0.15,
      delay,
      scrollTrigger: {
        trigger: container,
        start: 'top 82%',
        toggleActions: 'play none none reverse',
      },
    }
  );
};
