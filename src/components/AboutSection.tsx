import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, Award, ShieldCheck, Sprout, ArrowRight } from 'lucide-react';
import { businessConfig } from '../config/business';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#F7F6EF] text-[#14251A] overflow-hidden">
      {/* Subtle organic background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#83B83D]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8B94F]/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />
      <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            {/* Main Editorial Card */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#103D28] to-[#082B1C] text-white p-8 sm:p-12 shadow-2xl border border-[#1D603A]/30">
              {/* Decorative sun & field emblem */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#83B83D]/20 border border-[#83B83D]/40 flex items-center justify-center">
                  <Sprout className="w-8 h-8 text-[#B5D957]" />
                </div>
                <div className="text-right">
                  <span className="block text-[11px] uppercase tracking-widest text-[#E8B94F] font-bold">
                    TRUSTED PARTNER
                  </span>
                  <span className="font-hindi text-sm text-[#F7F6EF]/70">
                    विश्वसनीय कृषि सेवा
                  </span>
                </div>
              </div>

              {/* Central Graphic Composition */}
              <div className="my-6 py-8 border-y border-white/10 relative">
                <div className="text-center">
                  <span className="font-hindi text-2xl sm:text-3xl font-bold text-white block mb-2">
                    {businessConfig.name.hi}
                  </span>
                  <span className="text-xs uppercase tracking-[0.25em] text-[#B5D957] font-semibold block">
                    {businessConfig.name.en}
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <ShieldCheck className="w-6 h-6 text-[#83B83D] mx-auto mb-1" />
                    <span className="font-hindi text-xs font-semibold block text-white">शुद्ध एवं प्रामाणिक</span>
                    <span className="text-[10px] text-white/50 block">Authentic Supplies</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <HeartHandshake className="w-6 h-6 text-[#E8B94F] mx-auto mb-1" />
                    <span className="font-hindi text-xs font-semibold block text-white">किसान का साथ</span>
                    <span className="text-[10px] text-white/50 block">Dedicated Guidance</span>
                  </div>
                </div>
              </div>

              {/* Tagline footer */}
              <p className="font-hindi text-sm text-[#F7F6EF]/80 text-center italic">
                "{businessConfig.tagline.hi}"
              </p>
            </div>

            {/* Floating accent badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white rounded-2xl p-4 shadow-xl border border-[#83B83D]/20 max-w-xs hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#83B83D]/10 flex items-center justify-center text-[#103D28]">
                  <Award className="w-5 h-5 text-[#103D28]" />
                </div>
                <div>
                  <h4 className="font-hindi font-bold text-xs text-[#14251A]">
                    गुणवत्ता के प्रति समर्पण
                  </h4>
                  <p className="text-[11px] text-[#657266]">
                    Committed to farm excellence
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Section Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#103D28]/10 text-xs font-bold uppercase tracking-widest text-[#103D28] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#83B83D]" />
              <span>ABOUT US / हमारे बारे में</span>
            </div>

            {/* Section Titles */}
            <h2 className="font-hindi text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#14251A] leading-tight mb-2">
              {businessConfig.about.titleHi}
            </h2>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1D603A] mb-6">
              {businessConfig.about.titleEn}
            </h3>

            {/* Main Editorial Content */}
            <div className="relative pl-6 border-l-4 border-[#83B83D] mb-6">
              <p className="font-hindi text-lg sm:text-xl text-[#14251A] leading-relaxed font-medium">
                "{businessConfig.about.bodyHi}"
              </p>
            </div>

            <p className="text-base sm:text-lg text-[#657266] leading-relaxed mb-8">
              {businessConfig.about.bodyEn}
            </p>

            {/* Key commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              <div className="p-4 rounded-2xl bg-white border border-[#103D28]/10 shadow-sm">
                <span className="font-hindi font-bold text-base text-[#103D28] block mb-1">
                  पारदर्शी व्यवहार
                </span>
                <span className="text-xs text-[#657266] block">
                  Honest, transparent guidance for every farmer.
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#103D28]/10 shadow-sm">
                <span className="font-hindi font-bold text-base text-[#103D28] block mb-1">
                  उपयुक्त समाधान
                </span>
                <span className="text-xs text-[#657266] block">
                  Practical products aligned with local soil needs.
                </span>
              </div>
            </div>

            {/* Action link */}
            <a
              href="#products"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#103D28] hover:bg-[#1D603A] text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg group"
            >
              <span className="font-hindi font-bold">उत्पादों की जानकारी प्राप्त करें</span>
              <span className="text-xs text-[#B5D957]">/ View Products</span>
              <ArrowRight className="w-4 h-4 text-[#B5D957] group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
