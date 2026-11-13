import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingActions } from '../common/FloatingActions';
import { CustomCursor } from '../common/CustomCursor';
import { useSmoothScroll, getLenis } from '../../hooks/useSmoothScroll';

export const PageLayout: React.FC = () => {
  useSmoothScroll();
  const location = useLocation();
  const { scrollYProgress } = useScroll();

  // Scroll to top and refresh ScrollTrigger instances smoothly on route change
  useEffect(() => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
    // Allow React DOM layout to settle before recalculating scroll trigger thresholds
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6EF] text-[#14251A] selection:bg-[#83B83D] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Precision spring custom cursor (desktop only, disabled for touch & reduced-motion) */}
      <CustomCursor />

      {/* Global Scroll Progress Bar - Compositor-only scaleX transform with zero React re-renders */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 origin-left bg-gradient-to-r from-[#83B83D] via-[#B5D957] to-[#E8B94F] z-50 pointer-events-none"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Shared Navigation */}
      <Navbar />

      {/* Page Content with AnimatePresence */}
      <main className="flex-1 flex flex-col">
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>

      {/* Shared Footer */}
      <Footer />

      {/* Quick Action Floating Controls */}
      <FloatingActions />
    </div>
  );
};
