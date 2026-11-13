import React from 'react';
import { motion } from 'framer-motion';
import { Boxes, Sprout, ShieldCheck, Leaf, ArrowUpRight, MessageCircle } from 'lucide-react';
import { productCategories } from '../config/products';
import { businessConfig } from '../config/business';
import { Tilt, Magnetic } from './common/MotionFX';

const iconMap = {
  Boxes,
  Sprout,
  ShieldCheck,
  Leaf,
};

export const ProductsSection: React.FC = () => {
  const getWhatsAppLink = (categoryName: string) => {
    const text = encodeURIComponent(
      `नमस्ते! मैं वर्मा खाद भंडार से ${categoryName} के बारे में जानकारी प्राप्त करना चाहता हूँ।`
    );
    return `https://wa.me/${businessConfig.contact.whatsappNumberRaw}?text=${text}`;
  };

  return (
    <section id="products" className="relative py-24 sm:py-32 bg-[#EDEFE5] text-[#14251A] overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#103D28]/10 text-xs font-bold uppercase tracking-widest text-[#103D28] mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#83B83D]" />
            <span>AGRICULTURAL SUPPLIES / कृषि सामग्री</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-hindi text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#14251A] leading-tight mb-3"
          >
            हमारे उत्पाद
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-2xl font-semibold text-[#1D603A] font-sans tracking-wide mb-4"
          >
            Everything Your Farm Needs.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-hindi text-base sm:text-lg text-[#657266] leading-relaxed"
          >
            आपकी फसलों के बेहतर विकास और सुरक्षा के लिए आवश्यक सभी मुख्य कृषि उत्पाद एक ही स्थान पर उपलब्ध हैं।
          </motion.p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {productCategories.map((category, index) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap] || Sprout;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="h-full"
              >
                <Tilt max={5} className="h-full rounded-3xl">
                  <div
                    data-cursor="view"
                    className="group relative h-full rounded-3xl bg-white border border-[#103D28]/10 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                  >
                {/* Visual Header / Banner */}
                <div
                  className={`relative h-48 sm:h-56 bg-gradient-to-br ${category.colorGradient} p-6 sm:p-8 flex flex-col justify-between overflow-hidden text-white`}
                >
                  <div className="absolute -right-6 -bottom-6 w-40 h-40 opacity-15 transform rotate-12 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-full h-full text-white" />
                  </div>

                  <div className="flex items-center justify-between z-10">
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/30 backdrop-blur-md border border-white/20 text-[#F7F6EF]">
                      {category.categoryTag}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-white group-hover:text-[#103D28] transition-colors duration-300">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="z-10">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-[#E8B94F]" />
                    </div>
                    <h3 className="font-hindi text-2xl sm:text-3xl font-extrabold text-white">
                      {category.titleHi}
                    </h3>
                    <p className="text-sm font-semibold text-[#B5D957] font-sans">
                      {category.titleEn}
                    </p>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="font-hindi text-base sm:text-lg text-[#14251A] leading-relaxed mb-3 font-medium">
                      {category.descriptionHi}
                    </p>
                    <p className="text-sm text-[#657266] leading-relaxed mb-6 font-sans">
                      {category.descriptionEn}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {category.highlightsHi.map((item, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full text-xs font-hindi font-medium bg-[#103D28]/5 text-[#103D28] border border-[#103D28]/10"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#103D28]/10 flex items-center justify-between">
                    <Magnetic strength={0.25}>
                      <a
                        href={getWhatsAppLink(`${category.titleHi} (${category.titleEn})`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="call"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#103D28] hover:text-[#83B83D] transition-colors group/btn"
                      >
                        <MessageCircle className="w-4 h-4 text-[#83B83D]" />
                        <span className="font-hindi">उपलब्धता व परामर्श हेतु व्हाट्सएप करें</span>
                        <span className="text-[11px] text-[#657266]">/ Inquire</span>
                      </a>
                    </Magnetic>
                  </div>
                </div>
                  </div>
                </Tilt>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
