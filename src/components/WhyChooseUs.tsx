import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Compass, HeartHandshake, Sprout, CheckCircle2 } from 'lucide-react';

interface Principle {
  id: string;
  icon: typeof ShieldCheck;
  titleHi: string;
  titleEn: string;
  descHi: string;
  descEn: string;
  pointHi: string;
}

const PRINCIPLES: Principle[] = [
  {
    id: 'quality',
    icon: ShieldCheck,
    titleHi: 'गुणवत्तापूर्ण कृषि उत्पाद',
    titleEn: 'Quality Agricultural Products',
    descHi: 'विश्वसनीय गुणवत्ता वाले खाद, बीज और पौध संरक्षण उत्पाद जो आपकी फसल को दें मजबूत शुरुआत और सुरक्षित विकास।',
    descEn: 'Authentic fertilizers, dependable seeds, and proven crop protection formulated for genuine agricultural effectiveness.',
    pointHi: 'विश्वसनीय एवं प्रामाणिक उत्पाद',
  },
  {
    id: 'guidance',
    icon: Compass,
    titleHi: 'सही मार्गदर्शन',
    titleEn: 'Helpful Guidance',
    descHi: 'फसल की अवस्था और स्थानीय मिट्टी की आवश्यकता के अनुसार उपयुक्त कृषि सामग्री के चयन में किसानों को व्यावहारिक सलाह।',
    descEn: 'Thoughtful advice on input selection based on crop growth stages, seasonal conditions, and specific soil demands.',
    pointHi: 'फसल अनुसार व्यावहारिक सलाह',
  },
  {
    id: 'trust',
    icon: HeartHandshake,
    titleHi: 'ग्राहकों का विश्वास',
    titleEn: 'Customer Trust',
    descHi: 'ईमानदार संवाद और पारदर्शी व्यवहार के माध्यम से हर किसान भाई के साथ एक स्थायी और भरोसेमंद संबंध का निर्माण।',
    descEn: 'Building enduring farmer relationships grounded in straightforward conversations, integrity, and reliable support.',
    pointHi: 'पारदर्शी एवं निष्ठावान व्यवहार',
  },
  {
    id: 'support',
    icon: Sprout,
    titleHi: 'खेती में सहयोग',
    titleEn: 'Farming Support',
    descHi: 'बुवाई से लेकर कटाई तक, हर चरण में किसान की जरूरत को प्राथमिकता देकर खेती के सफर में सहभागी बनना।',
    descEn: 'Standing by farmers across the entire cultivation cycle with timely availability of vital agricultural inputs.',
    pointHi: 'बुवाई से कटाई तक निरंतर साथ',
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="relative py-24 sm:py-32 bg-[#103D28] text-white overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#83B83D]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E8B94F]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-xs font-bold uppercase tracking-widest text-[#B5D957] mb-4 border border-white/10"
          >
            <span className="w-2 h-2 rounded-full bg-[#E8B94F]" />
            <span>OUR CORE PRINCIPLES / हमारे मूल्य</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-hindi text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-3"
          >
            किसान का भरोसा, हमारी पहचान।
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-2xl font-semibold text-[#B5D957] font-sans tracking-wide"
          >
            Built Around Your Agricultural Needs.
          </motion.p>
        </div>

        {/* 4 Core Principles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PRINCIPLES.map((principle, index) => {
            const Icon = principle.icon;

            return (
              <motion.div
                key={principle.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                whileHover={{ y: -6 }}
                className="group relative p-6 sm:p-8 rounded-3xl bg-[#082B1C]/60 border border-[#83B83D]/20 hover:border-[#83B83D]/60 backdrop-blur-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1D603A] to-[#103D28] border border-[#83B83D]/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#B5D957] transition-all duration-300 shadow-md">
                    <Icon className="w-7 h-7 text-[#B5D957]" />
                  </div>

                  {/* Hindi & English Titles */}
                  <h3 className="font-hindi text-xl sm:text-2xl font-bold text-white mb-1">
                    {principle.titleHi}
                  </h3>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#E8B94F] mb-4">
                    {principle.titleEn}
                  </h4>

                  {/* Hindi Description */}
                  <p className="font-hindi text-sm sm:text-base text-[#F7F6EF]/80 leading-relaxed mb-3">
                    {principle.descHi}
                  </p>

                  {/* English Description */}
                  <p className="text-xs text-[#F7F6EF]/50 leading-relaxed font-sans">
                    {principle.descEn}
                  </p>
                </div>

                {/* Bottom Highlight Point */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-hindi text-[#B5D957]">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-[#83B83D]" />
                  <span>{principle.pointHi}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
