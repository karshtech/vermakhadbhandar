import { Variants } from 'framer-motion';

// Premium fluid bezier easing [0.16, 1, 0.3, 1]
const fluidEase = [0.16, 1, 0.3, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom.duration || 0.75,
      delay: custom.delay || 0,
      ease: fluidEase,
    },
  }),
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: (custom = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom.duration || 0.7,
      delay: custom.delay || 0,
      ease: fluidEase,
    },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (custom = {}) => ({
    opacity: 1,
    transition: {
      duration: custom.duration || 0.6,
      delay: custom.delay || 0,
      ease: 'easeOut',
    },
  }),
};

export const scaleReveal: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (custom = {}) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: custom.duration || 0.7,
      delay: custom.delay || 0,
      ease: fluidEase,
    },
  }),
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

export const cardHover: Variants = {
  rest: { y: 0, scale: 1, transition: { duration: 0.35, ease: fluidEase } },
  hover: { y: -6, scale: 1.015, transition: { duration: 0.35, ease: fluidEase } },
};
