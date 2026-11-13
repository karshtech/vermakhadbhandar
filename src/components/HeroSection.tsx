import React, { useRef, useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HeroScene } from './HeroScene';
import { HeroSequenceCanvas } from './common/HeroSequenceCanvas';
import { HeroTypography } from './HeroTypography';
import { FARMING_STAGES, getStageIndexForProgress } from '../config/farmingJourney';
import { getLenis } from '../hooks/useSmoothScroll';
import { useReducedMotionPref } from '../hooks/useMedia';

gsap.registerPlugin(ScrollTrigger);

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinViewportRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<number>(0);
  const currentStageIndexRef = useRef<number>(0);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const reducedMotion = useReducedMotionPref();

  useEffect(() => {
    const container = containerRef.current;
    const pinViewport = pinViewportRef.current;
    if (!container || !pinViewport) return;

    if (reducedMotion) {
      progressRef.current = 0;
      setActiveStageIndex(0);
      return;
    }

    const st = ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: '+=450%', // Comfortable reading and visual plateau across all 6 stages
      pin: pinViewport,
      scrub: 0.6,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        // Continuous progress for Canvas sequence & Three.js camera (Zero React re-render)
        progressRef.current = self.progress;

        // Discrete stage index update for typography transitions aligned with exact frame ranges
        const stageIdx = getStageIndexForProgress(self.progress);

        if (stageIdx !== currentStageIndexRef.current) {
          currentStageIndexRef.current = stageIdx;
          setActiveStageIndex(stageIdx);
        }
      },
    });

    scrollTriggerRef.current = st;

    return () => {
      st.kill();
      scrollTriggerRef.current = null;
    };
  }, [reducedMotion]);

  // Jump smoothly to a specific farming stage on pill click
  const handleSelectStage = (index: number) => {
    const targetStage = FARMING_STAGES[index] || FARMING_STAGES[0];
    const targetProgress = (targetStage.startProgress + targetStage.endProgress) / 2;

    if (reducedMotion) {
      setActiveStageIndex(index);
      currentStageIndexRef.current = index;
      progressRef.current = targetProgress;
      return;
    }

    const st = scrollTriggerRef.current;
    if (!st) return;

    const targetScroll = st.start + (st.end - st.start) * targetProgress;

    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(targetScroll, { duration: 1.2 });
    } else {
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
    }
  };

  const scrollToStory = () => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo('#story', { offset: -70, duration: 1.2 });
    } else {
      const el = document.querySelector('#story');
      if (el) {
        const topOffset = 70;
        const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - topOffset,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className={`relative bg-[#082B1C] text-white ${
        reducedMotion ? 'min-h-screen' : ''
      }`}
    >
      {/* Pinned Viewport Container */}
      <div
        ref={pinViewportRef}
        className="relative h-[100dvh] w-full overflow-hidden"
      >
        {/* Layer 1: Photographic 120-Frame WebP Sequence on HTML5 Canvas (Full Viewport Coverage) */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
          <HeroSequenceCanvas progressRef={progressRef} className="w-full h-full" />
        </div>

        {/* Layer 2: 3D WebGL Atmospheric Enhancement Layer (Pollen Spores, Golden Sun Halo) */}
        <div className="absolute inset-0 w-full h-full z-[1] pointer-events-none overflow-hidden">
          <Suspense fallback={null}>
            <HeroScene progressRef={progressRef} />
          </Suspense>
        </div>

        {/* Layer 3: Subtle Brand Overlays for Text Legibility (Keeps footage clear and vibrant) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#082B1C]/65 via-[#082B1C]/25 to-[#082B1C]/75 pointer-events-none z-[2]" />
        <div className="absolute inset-0 cinematic-vignette pointer-events-none opacity-25 z-[2]" />

        {/* Layer 4: Foreground Hero Storyboard Typography, Navigation & Controls */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-between">
          <HeroTypography
            activeStageIndex={activeStageIndex}
            onSelectStage={handleSelectStage}
          />

          {/* Layer 5: Bottom Scroll / Stage Progress Track */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-20 pointer-events-none">
            <div className="w-36 sm:w-48 h-1 rounded-full bg-white/20 overflow-hidden backdrop-blur-sm">
              <motion.div
                className="h-full bg-gradient-to-r from-[#B5D957] via-[#83B83D] to-[#E8B94F]"
                style={{
                  width: `${((activeStageIndex + 1) / FARMING_STAGES.length) * 100}%`,
                }}
                transition={{ ease: 'easeOut', duration: 0.3 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
