import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { pageTransitionVariants } from '../../animations/pageTransitions';
import { usePageSEO, SEOProps } from '../../hooks/usePageSEO';

interface PageTransitionProps {
  children: React.ReactNode;
  title?: string;
  seo?: SEOProps;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children, title, seo }) => {
  usePageSEO(seo || (title ? { title } : undefined));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <motion.div
      variants={pageTransitionVariants}
      initial="initial"
      animate="enter"
      exit="exit"
      className="w-full flex-1"
    >
      {children}
    </motion.div>
  );
};
