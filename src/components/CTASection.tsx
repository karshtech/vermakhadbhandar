import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, ShieldCheck, CheckCircle2, Store } from 'lucide-react';
import { businessConfig } from '../config/business';
import { useLanguage } from '../i18n/LanguageProvider';

export const CTASection: React.FC = () => {
  const { language } = useLanguage();
  const isHindi = language === 'hi';

  return (
    <section className="relative py-20 sm:py-28 lg:py-32 bg-[#082B1C] text-[#F7F6EF] overflow-hidden border-t border-[#1D603A]/40">
      {/* Background grain and subtle earthy atmospheric gradients */}
      <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none" />
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-[#E8B94F]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-10 w-96 h-96 bg-[#103D28]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Zone — Main Message & Action (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Subtle Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#E8B94F]" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B5D957]">
                {isHindi ? 'खेती की नई शुरुआत' : 'A BETTER BEGINNING'}
              </span>
            </div>

            {/* Clear Headline with Anti-Clipping line-height */}
            <h2
              className={`${
                isHindi ? 'font-hindi leading-[1.38] sm:leading-[1.4]' : 'font-sans leading-tight'
              } text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight`}
            >
              {isHindi ? 'इस बार खेती को दें एक नई दिशा।' : 'Give Your Farming a New Direction.'}
            </h2>

            {/* Concise Supporting Description */}
            <p
              className={`${
                isHindi ? 'font-hindi text-base sm:text-lg leading-relaxed' : 'font-sans text-base sm:text-lg leading-normal'
              } text-[#F7F6EF]/85 max-w-2xl mb-8`}
            >
              {isHindi
                ? 'मिट्टी की तैयारी से लेकर दाना भराव तक — अपनी फसल के बेहतर स्वास्थ्य और उत्तम पैदावार के लिए सही मार्गदर्शन व प्रमाणित सामग्री प्राप्त करें।'
                : 'From soil preparation to harvest maturity — ensure optimal crop health and higher yield with authentic agricultural inputs and reliable field guidance.'}
            </p>

            {/* Two Distinct Tactile Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              {/* Primary Action: Contact Us */}
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl text-sm font-bold text-[#082B1C] bg-gradient-to-r from-[#B5D957] to-[#83B83D] hover:from-[#E8B94F] hover:to-[#B5D957] transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
              >
                <span className={isHindi ? 'font-hindi font-extrabold text-base' : 'font-sans font-bold'}>
                  {isHindi ? 'हमसे संपर्क करें' : 'Contact Us'}
                </span>
                <ArrowRight className="w-4 h-4 text-[#082B1C]" />
              </Link>

              {/* Secondary Action: Chat on WhatsApp */}
              <a
                href={`https://wa.me/${businessConfig.contact.whatsappNumberRaw}?text=${encodeURIComponent(
                  isHindi
                    ? 'नमस्ते वर्मा खाद भंडार, मैं अपनी खेती के लिए परामर्श और उत्पाद जानकारी चाहता हूँ।'
                    : 'Hello Verma Khad Bhandar, I would like to inquire about agricultural products and farming advice.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-medium text-[#F7F6EF] bg-[#103D28] hover:bg-[#1D603A] border border-[#83B83D]/30 transition-all duration-300 shadow-sm hover:border-[#83B83D]/60 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#83B83D]" />
                <span className={isHindi ? 'font-hindi font-bold' : 'font-sans font-semibold'}>
                  {isHindi ? 'व्हाट्सएप पर बात करें' : 'Chat on WhatsApp'}
                </span>
              </a>
            </div>

            {/* Refined Trust Indicators: Integrated Editorial Strip (No individual pills, no circular badges) */}
            <div className="w-full pt-6 border-t border-white/10">
              <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm text-[#F7F6EF]/75">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#83B83D] flex-shrink-0" />
                  <span className={isHindi ? 'font-hindi font-medium' : 'font-sans'}>
                    {isHindi ? 'प्रामाणिक खाद व बीज' : 'Verified Seeds & Fertilizers'}
                  </span>
                </div>

                <span className="hidden sm:inline text-white/20">•</span>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E8B94F] flex-shrink-0" />
                  <span className={isHindi ? 'font-hindi font-medium' : 'font-sans'}>
                    {isHindi ? 'व्यावहारिक कृषि परामर्श' : 'Practical Crop Consultation'}
                  </span>
                </div>

                <span className="hidden sm:inline text-white/20">•</span>

                <div className="flex items-center gap-2">
                  <Store className="w-4 h-4 text-[#B5D957] flex-shrink-0" />
                  <span className={isHindi ? 'font-hindi font-medium' : 'font-sans'}>
                    {isHindi ? 'दुकान पर सीधा स्वागत' : 'In-Person Store Welcome'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Zone — Authentic Agricultural Harvest Photography (lg:col-span-5) */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative rounded-2xl overflow-hidden border border-[#83B83D]/25 shadow-2xl group bg-[#103D28]/30">
              <img
                src="/images/hero/stages/stage6-harvest-golden.webp"
                alt={isHindi ? 'स्वर्णिम धूप में तैयार लहलहाती फसल' : 'Golden mature crops under sunlight'}
                loading="lazy"
                decoding="async"
                className="w-full h-[320px] sm:h-[400px] lg:h-[440px] object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              {/* Editorial gradient vignettes */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#082B1C]/90 via-[#082B1C]/25 to-transparent" />
              <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#082B1C]/45 via-transparent to-transparent" />

              {/* Natural editorial caption */}
              <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#E8B94F] block mb-1">
                  {isHindi ? 'फसल की परिपक्वता' : 'HARVEST MATURITY'}
                </span>
                <p className={`${isHindi ? 'font-hindi text-sm' : 'font-sans text-xs'} text-[#F7F6EF]/90 font-medium`}>
                  {isHindi ? 'मेहनत और सही पोषण से तैयार स्वर्णिम उपज' : 'Bountiful harvest nurtured through balanced nutrition.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
