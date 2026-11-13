import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../animations/motionVariants';
import { useLanguage } from '../../i18n/LanguageProvider';

interface SectionHeadingProps {
  eyebrowEn: string;
  eyebrowHi: string;
  titleHi: string;
  titleEn: string;
  subtitleHi?: string;
  subtitleEn?: string;
  align?: 'center' | 'left';
  theme?: 'dark' | 'light';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrowEn,
  eyebrowHi,
  titleHi,
  titleEn,
  subtitleHi,
  subtitleEn,
  align = 'center',
  theme = 'light',
}) => {
  const { language } = useLanguage();
  const isHindi = language === 'hi';
  const isDark = theme === 'dark';

  const eyebrow = isHindi ? eyebrowHi : eyebrowEn;
  const title = isHindi ? titleHi : titleEn;
  const subtitle = isHindi ? subtitleHi : subtitleEn;

  return (
    <div className={`max-w-3xl mb-12 sm:mb-16 ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}>
      {/* Eyebrow badge */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border ${
          isDark
            ? 'bg-white/10 text-[#B5D957] border-white/10'
            : 'bg-[#103D28]/10 text-[#103D28] border-[#103D28]/15'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#83B83D]" />
        <span className={isHindi ? 'font-hindi' : 'font-sans'}>{eyebrow}</span>
      </motion.div>

      {/* Main Headline */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={{ delay: 0.1 }}
        className={`${
          isHindi ? 'font-hindi leading-[1.38] sm:leading-[1.42]' : 'font-sans leading-tight'
        } text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 ${
          isDark ? 'text-white' : 'text-[#14251A]'
        }`}
      >
        {title}
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={{ delay: 0.2 }}
          className={`${
            isHindi ? 'font-hindi text-base sm:text-lg leading-relaxed' : 'font-sans text-base sm:text-lg leading-normal'
          } ${
            isDark ? 'text-[#F7F6EF]/85' : 'text-[#657266]'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
