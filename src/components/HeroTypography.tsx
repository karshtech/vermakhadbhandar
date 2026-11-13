import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Sparkles, Layers, Sprout, ShieldCheck, Leaf, ArrowRight } from 'lucide-react';
import { VermaKhadLogo } from './common/VermaKhadLogo';
import { TypingText } from './common/TypingText';
import { Magnetic, EASE } from './common/MotionFX';
import { FARMING_STAGES } from '../config/farmingJourney';
import { useLanguage } from '../i18n/LanguageProvider';

export interface HeroTypographyProps {
  activeStageIndex: number;
  onSelectStage?: (index: number) => void;
}

export const HeroTypography: React.FC<HeroTypographyProps> = ({
  activeStageIndex,
  onSelectStage,
}) => {
  const { language } = useLanguage();
  const isHindi = language === 'hi';

  const currentStage = FARMING_STAGES[activeStageIndex] || FARMING_STAGES[0];
  const isFinalStage = activeStageIndex === 5;

  const headlineLine1 = isHindi ? currentStage.headlineLine1 : currentStage.headlineLine1En;
  const headlineLine2 = isHindi ? currentStage.headlineLine2 : currentStage.headlineLine2En;
  const supportingText = isHindi ? currentStage.supportingHi : currentStage.supportingEn;
  const stageName = isHindi ? currentStage.nameHi : currentStage.nameEn;
  const stageBadge = isHindi
    ? `चरण ${currentStage.stageNumber} • ${currentStage.nameHi}`
    : `STAGE ${currentStage.stageNumber} • ${currentStage.nameEn}`;

  const typingPhrases = isHindi
    ? [
        `वर्मा खाद भंडार • ${currentStage.nameHi}`,
        `गुणवत्तापूर्ण कृषि उत्पाद • ${currentStage.shortLabel}`,
      ]
    : [
        `VERMA KHAD BHANDAR • ${currentStage.nameEn}`,
        `Your Trusted Agricultural Partner • Stage ${currentStage.stageNumber}`,
      ];

  const pillars = isHindi
    ? [
        { icon: Layers, label: 'खाद एवं उर्वरक' },
        { icon: Sprout, label: 'प्रमाणित बीज' },
        { icon: ShieldCheck, label: 'कीटनाशक व रक्षा' },
        { icon: Leaf, label: 'पौध पोषक तत्व' },
      ]
    : [
        { icon: Layers, label: 'Fertilizers' },
        { icon: Sprout, label: 'Certified Seeds' },
        { icon: ShieldCheck, label: 'Crop Protection' },
        { icon: Leaf, label: 'Plant Nutrients' },
      ];

  return (
    <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-center flex flex-col items-center justify-between min-h-[92vh] sm:min-h-[88vh] pointer-events-auto">
      {/* TOP: Brand Emblem & Stage Indicator Pill Bar */}
      <div className="flex flex-col items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="flex flex-col items-center mb-4 sm:mb-5"
        >
          <div className="mb-3 transform hover:scale-105 transition-transform duration-300 drop-shadow-xl">
            <VermaKhadLogo size={62} variant="emblem" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#103D28]/90 border border-[#83B83D]/40 backdrop-blur-md shadow-lg shadow-black/30">
            <Sparkles className="w-3.5 h-3.5 text-[#E8B94F] flex-shrink-0" />
            <TypingText
              key={`${currentStage.id}-${language}`}
              phrases={typingPhrases}
              typeSpeed={55}
              deleteSpeed={30}
              pauseDuration={2800}
              className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#B5D957]"
              cursorClassName="text-[#E8B94F]"
            />
          </div>
        </motion.div>

        {/* 6-Stage Interactive Storyboard Indicator Bar */}
        <div className="w-full overflow-x-auto pb-2 scrollbar-none flex justify-center">
          <nav
            aria-label="Farming Journey Stages"
            className="inline-flex items-center gap-1 sm:gap-2 p-1 sm:p-1.5 rounded-full bg-[#082B1C]/85 border border-[#83B83D]/30 backdrop-blur-md shadow-xl"
          >
            {FARMING_STAGES.map((stg, idx) => {
              const isActive = idx === activeStageIndex;
              const isPast = idx < activeStageIndex;
              const label = isHindi ? stg.shortLabel : stg.shortLabelEn;

              return (
                <button
                  key={stg.id}
                  onClick={() => onSelectStage?.(idx)}
                  className={`relative flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'text-white shadow-md'
                      : isPast
                      ? 'text-[#B5D957]/80 hover:text-white'
                      : 'text-white/45 hover:text-white/80'
                  }`}
                  aria-label={`Jump to stage: ${isHindi ? stg.nameHi : stg.nameEn}`}
                  aria-current={isActive ? 'step' : undefined}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-journey-pill"
                      className="absolute inset-0 bg-gradient-to-r from-[#103D28] to-[#1D603A] border border-[#83B83D] rounded-full shadow-lg"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-10 ${isHindi ? 'font-hindi' : 'font-sans'} flex items-center gap-1`}>
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isActive
                          ? 'bg-[#E8B94F] animate-pulse'
                          : isPast
                          ? 'bg-[#83B83D]'
                          : 'bg-white/30'
                      }`}
                    />
                    <span>{label}</span>
                  </span>
                  {idx < FARMING_STAGES.length - 1 && (
                    <span className="relative z-10 text-[10px] text-white/20 select-none hidden sm:inline ml-0.5">
                      →
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* MIDDLE: Stage-Synchronized Headline with Anti-Clipping Headroom */}
      <div className="w-full my-auto py-6 sm:py-8 flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentStage.id}-${language}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="flex flex-col items-center max-w-4xl"
          >
            {/* Stage Identification Tag */}
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#E8B94F] mb-3 font-sans">
              <span>{stageBadge}</span>
            </span>

            {/* Main Stage Headline with Devanagari Anti-Clipping Padding */}
            <h1
              className={`${
                isHindi
                  ? 'font-hindi leading-[1.38] sm:leading-[1.42]'
                  : 'font-sans leading-[1.2] sm:leading-[1.25]'
              } text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-normal text-white drop-shadow-xl`}
              aria-label={isHindi ? currentStage.headlineHi : currentStage.headlineEn}
            >
              {/* Line 1 */}
              <span className="block mb-1 sm:mb-2 overflow-visible">
                {headlineLine1.map((word, idx) => (
                  <span
                    key={idx}
                    className="inline-block overflow-hidden pt-[0.28em] pb-[0.16em] -mt-[0.28em] align-bottom mr-[0.22em]"
                  >
                    <motion.span
                      className="inline-block pt-[0.05em]"
                      initial={{ y: '105%', opacity: 0, filter: 'blur(8px)' }}
                      animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
                      transition={{
                        duration: 0.75,
                        delay: 0.1 + idx * 0.06,
                        ease: EASE,
                      }}
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </span>

              {/* Line 2 with Radiant Golden-Lime Accent */}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#B5D957] via-[#83B83D] to-[#E8B94F] py-[0.18em] -my-[0.18em] overflow-visible">
                {headlineLine2.map((word, idx) => (
                  <span
                    key={idx}
                    className="inline-block overflow-hidden pt-[0.28em] pb-[0.16em] -mt-[0.28em] align-bottom mr-[0.22em]"
                  >
                    <motion.span
                      className="inline-block pt-[0.05em]"
                      initial={{ y: '105%', opacity: 0, filter: 'blur(8px)' }}
                      animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
                      transition={{
                        duration: 0.75,
                        delay: 0.35 + idx * 0.06,
                        ease: EASE,
                      }}
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </span>
            </h1>

            {/* Stage Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
              className={`mt-4 sm:mt-6 max-w-2xl text-base sm:text-xl text-[#F7F6EF]/90 ${
                isHindi ? 'font-hindi leading-relaxed' : 'font-sans leading-normal'
              } font-normal drop-shadow-md`}
            >
              {supportingText}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* BOTTOM: Final Stage Action CTAs & Storefront Pillars */}
      <div className="w-full flex flex-col items-center">
        {isFinalStage ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            className="flex flex-col items-center w-full"
          >
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-8">
              <Magnetic strength={0.25}>
                <Link
                  to="/products"
                  data-cursor="view"
                  className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-[#082B1C] bg-gradient-to-r from-[#B5D957] to-[#83B83D] hover:from-[#E8B94F] hover:to-[#B5D957] active:scale-95 transition-all duration-300 shadow-xl shadow-[#83B83D]/30 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#83B83D]"
                >
                  <span className={isHindi ? 'font-hindi text-base font-extrabold' : 'font-sans text-base font-bold'}>
                    {isHindi ? 'हमारे उत्पाद देखें' : 'Explore Products'}
                  </span>
                  <ChevronRight className="w-5 h-5 text-[#082B1C] group-hover:translate-x-1 transition-transform" />
                </Link>
              </Magnetic>

              <Magnetic strength={0.25}>
                <Link
                  to="/contact"
                  data-cursor="call"
                  className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-semibold text-[#F7F6EF] bg-[#103D28]/90 hover:bg-[#1D603A] border border-[#83B83D]/45 backdrop-blur-md active:scale-95 transition-all duration-300 shadow-lg hover:border-[#83B83D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#83B83D]"
                >
                  <span className={isHindi ? 'font-hindi text-base font-bold' : 'font-sans text-base font-semibold'}>
                    {isHindi ? 'हमसे संपर्क करें' : 'Contact Us'}
                  </span>
                </Link>
              </Magnetic>
            </div>

            {/* 4 Official Storefront Signboard Pillars */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 w-full max-w-3xl">
              {pillars.map((pillar, idx) => {
                const PIcon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-full bg-white/95 text-[#082B1C] shadow-lg shadow-black/25 border border-white/20 transform hover:-translate-y-0.5 transition-transform"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#103D28] text-[#83B83D] flex items-center justify-center flex-shrink-0">
                      <PIcon className="w-3.5 h-3.5" />
                    </div>
                    <span className={`${isHindi ? 'font-hindi text-xs font-semibold' : 'font-sans text-xs font-bold'} text-[#082B1C]`}>
                      {pillar.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ) : (
          /* Subtle Scroll Down Prompt for Stages 1-5 */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`flex items-center gap-2 text-xs ${isHindi ? 'font-hindi' : 'font-sans font-semibold'} text-[#B5D957]/80 mb-2`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8B94F] animate-pulse" />
            <span>{isHindi ? 'स्क्रॉल करें और आगे बढ़ें' : 'Scroll down to continue farming journey'}</span>
            <ArrowRight className="w-3.5 h-3.5 animate-bounce" />
          </motion.div>
        )}
      </div>
    </div>
  );
};
