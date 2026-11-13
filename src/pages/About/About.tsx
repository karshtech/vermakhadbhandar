import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sprout, ShieldCheck, HeartHandshake, Eye, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PageTransition } from '../../components/common/PageTransition';
import { SectionHeading } from '../../components/common/SectionHeading';
import { businessConfig } from '../../config/business';
import { fadeUp, staggerContainer } from '../../animations/motionVariants';
import { Magnetic } from '../../components/common/MotionFX';
import { ROUTE_SEO } from '../../config/seo';
import { useLanguage } from '../../i18n/LanguageProvider';

export const About: React.FC = () => {
  const { language } = useLanguage();
  const isHindi = language === 'hi';
  const seoData = ROUTE_SEO['/about'];

  const missionPoints = isHindi
    ? [
        'गुणवत्तायुक्त खाद एवं उर्वरक का प्रदाय',
        'प्रमाणित व उच्च अंकुरण वाले बीज',
        'फसल की स्थिति अनुसार व्यावहारिक मार्गदर्शन',
      ]
    : [
        'Supply of premium-grade certified fertilizers',
        'High-germination certified seed varieties',
        'Practical crop-stage agronomic guidance',
      ];

  const values = isHindi
    ? [
        {
          icon: ShieldCheck,
          title: 'गुणवत्ता पर कोई समझौता नहीं',
          desc: 'दुकान में उपलब्ध सभी खाद, बीज और कीटनाशक प्रतिष्ठित निर्माताओं से ही संकलित किए जाते हैं ताकि किसान को शत-प्रतिशत प्रामाणिक सामग्री मिले।',
        },
        {
          icon: HeartHandshake,
          title: 'ईमानदार व निष्पक्ष व्यवहार',
          desc: 'हर ग्राहक हमारे परिवार का हिस्सा है। हम पारदर्शिता और निष्ठा से संवाद करते हैं और अनावश्यक उत्पादों की कभी अनुशंसा नहीं करते।',
        },
        {
          icon: Eye,
          title: 'सतत सहयोग व उपलब्धता',
          desc: 'बुवाई के पीक सीजन से लेकर कटाई के समय तक, आवश्यक कृषि आदानों की समय पर उपलब्धता सुनिश्चित करना हमारा प्राथमिक कर्तव्य है।',
        },
      ]
    : [
        {
          icon: ShieldCheck,
          title: 'Uncompromised Quality',
          desc: 'Every fertilizer, seed, and crop protection input is sourced directly from trusted, verified manufacturers to ensure complete field efficacy.',
        },
        {
          icon: HeartHandshake,
          title: 'Farmer-First Integrity',
          desc: 'Every farmer is treated like family. We provide honest, straightforward advice and never recommend unneeded chemical applications.',
        },
        {
          icon: Eye,
          title: 'Seasonal Reliability & Support',
          desc: 'From high-demand sowing windows to harvest maturity, ensuring consistent stock of critical farm supplies is our unwavering commitment.',
        },
      ];

  return (
    <PageTransition
      seo={{
        title: isHindi ? seoData.titleHi : seoData.titleEn,
        description: isHindi ? seoData.descHi : seoData.descEn,
        keywords: isHindi ? seoData.keywordsHi : seoData.keywordsEn,
        canonicalPath: '/about',
        ogImage: '/images/social/og-about.jpg',
      }}
    >
      {/* 1. Agricultural Editorial Split Hero (Warm Off-White) */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-24 bg-[#F7F6EF] text-[#14251A] overflow-hidden border-b border-[#103D28]/10">
        <div className="absolute inset-0 bg-grain opacity-25 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Prominent Heading & Editorial Narrative (lg:col-span-7) */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#103D28]/10 text-xs font-mono font-bold uppercase tracking-wider text-[#103D28] border border-[#103D28]/15 mb-5">
                <Sprout className="w-3.5 h-3.5 text-[#1D603A]" />
                <span>{isHindi ? 'हमारा परिचय • सच्चा संकल्प' : 'OUR STORY • GROUNDED IN THE FIELD'}</span>
              </div>

              <h1
                className={`${
                  isHindi ? 'font-hindi leading-[1.38] sm:leading-[1.42]' : 'font-sans leading-tight'
                } text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#082B1C] mb-5 tracking-tight`}
              >
                {isHindi
                  ? 'किसानों की जरूरतों को समझने वाला आपका साथी।'
                  : 'An Agricultural Partner That Truly Understands Your Needs.'}
              </h1>

              <p
                className={`${
                  isHindi ? 'font-hindi text-base sm:text-lg leading-relaxed' : 'font-sans text-base sm:text-lg leading-normal'
                } text-[#1D603A] font-semibold mb-4`}
              >
                {isHindi
                  ? 'खेती केवल एक व्यवसाय नहीं, बल्कि जीवन की जीवनरेखा है।'
                  : 'Farming is not just an occupation, but the heartbeat of our rural community.'}
              </p>

              <p
                className={`${
                  isHindi ? 'font-hindi text-sm sm:text-base leading-relaxed' : 'font-sans text-sm sm:text-base'
                } text-[#657266] max-w-2xl mb-8 leading-relaxed`}
              >
                {isHindi ? businessConfig.about.bodyHi : businessConfig.about.bodyEn}
              </p>

              {/* 3 Core Commitments Preview */}
              <div className="flex flex-wrap gap-2.5 w-full pt-5 border-t border-[#103D28]/10">
                {missionPoints.map((point, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-white border border-[#103D28]/10 text-[#14251A] shadow-xs"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#83B83D]" />
                    <span className={isHindi ? 'font-hindi' : 'font-sans'}>{point}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Authentic Indian Agricultural Photography (lg:col-span-5) */}
            <div className="lg:col-span-5 relative w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#103D28]/15 group bg-[#082B1C]">
                <img
                  src="/images/hero/hero-tractor-field.webp"
                  alt="Indian farmer preparing the soil in morning light"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[360px] sm:h-[420px] lg:h-[480px] object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082B1C]/90 via-[#082B1C]/30 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                  <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/20 text-[#B5D957] mb-2">
                    {isHindi ? 'मृदा संवर्धन एवं तैयारी' : 'SOIL PREPARATION & VITALITY'}
                  </span>
                  <p className={`${isHindi ? 'font-hindi text-xs sm:text-sm' : 'font-sans text-xs'} text-[#F7F6EF]/90 font-medium leading-relaxed`}>
                    "{isHindi
                      ? 'किसानों तक शुद्ध, असरदार और प्रमाणित कृषि सामग्री पहुँचाना ताकि प्रत्येक खेत से सर्वोत्तम पैदावार मिल सके।'
                      : 'Delivering unadulterated, certified, and effective agricultural inputs so every farm achieves its full potential.'}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Philosophy & Agronomic Integrity */}
      <section className="py-20 sm:py-28 bg-[#EDEFE5] text-[#14251A] relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-25 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <SectionHeading
              eyebrowEn="OUR PHILOSOPHY"
              eyebrowHi="हमारा दृष्टिकोण"
              titleHi="पारदर्शिता एवं किसान का हित सर्वोपरि"
              titleEn="Integrity and Practical Advice First"
              subtitleHi="वर्मा खाद भंडार पर हमारा प्रयास सदैव यही रहता है कि किसान को उनकी फसल की वास्तविक स्थिति और मिट्टी की मांग के अनुरूप सही सलाह दी जाए।"
              subtitleEn="We advise farmers based on the actual condition of their crop and soil, prioritizing balanced nutrition over wasteful chemical overuse."
            />

            <div className="p-5 rounded-2xl bg-white border border-[#103D28]/10 shadow-sm flex items-start gap-4 text-left mt-6">
              <Compass className="w-6 h-6 text-[#103D28] flex-shrink-0 mt-1" />
              <div>
                <h4
                  className={`${
                    isHindi ? 'font-hindi font-bold' : 'font-sans font-bold'
                  } text-sm text-[#14251A] mb-1`}
                >
                  {isHindi ? 'संतुलित कृषि सलाह' : 'Balanced Agronomic Guidance'}
                </h4>
                <p
                  className={`${
                    isHindi ? 'font-hindi' : 'font-sans'
                  } text-xs text-[#657266] leading-relaxed`}
                >
                  {isHindi
                    ? 'हम किसानों को केवल आवश्यकतानुसार संतुलित खाद और कीटनाशक उपयोग की सलाह देते हैं, जिससे लागत कम और फसल सुरक्षित रहे।'
                    : 'We advise farmers on the balanced use of fertilizers and crop protection tailored to need, minimizing expenses while protecting yield.'}
                </p>
              </div>
            </div>
          </div>

          {/* 3. Core Values — 3 Column Pillar Grid */}
          <SectionHeading
            eyebrowEn="OUR PILLARS"
            eyebrowHi="हमारे मूल सिद्धांत"
            titleHi="जिन मूल्यों पर टिका है हमारा रिश्ता"
            titleEn="Foundations of Our Farmer Partnerships"
            subtitleHi="सच्ची सेवा, उचित सलाह और प्रमाणित गुणवत्ता — हमारे अटल मानक।"
            subtitleEn="Dependable service, sound agricultural advice, and certified input standards."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {values.map((val, idx) => {
              const VIcon = val.icon;
              const pillarAccents = ['#83B83D', '#E8B94F', '#B5D957'];
              const accent = pillarAccents[idx] || '#83B83D';

              return (
                <motion.div key={idx} variants={fadeUp} className="h-full">
                  <div className="p-8 rounded-2xl bg-white border border-[#103D28]/10 shadow-sm hover:shadow-xl transition-all h-full flex flex-col justify-between hover:-translate-y-1">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center text-[#103D28]"
                          style={{ backgroundColor: `${accent}20` }}
                        >
                          <VIcon className="w-6 h-6 text-[#103D28]" />
                        </div>
                        <span className="font-mono text-xs font-bold text-[#657266]">
                          0{idx + 1}
                        </span>
                      </div>

                      <h4
                        className={`${
                          isHindi ? 'font-hindi text-xl' : 'font-sans text-lg font-bold'
                        } text-[#14251A] mb-3`}
                      >
                        {val.title}
                      </h4>
                      <p
                        className={`${
                          isHindi ? 'font-hindi text-sm leading-relaxed' : 'font-sans text-xs leading-normal'
                        } text-[#657266]`}
                      >
                        {val.desc}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#103D28]/10 flex items-center gap-2 text-xs font-bold text-[#103D28]">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accent }} />
                      <span className={isHindi ? 'font-hindi' : 'font-sans'}>
                        {isHindi ? 'प्रामाणिक मानक' : 'Verified Standard'}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Explore Products Action */}
          <div className="mt-16 flex justify-center">
            <Magnetic strength={0.25}>
              <Link
                to="/products"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white bg-[#103D28] hover:bg-[#1D603A] transition-all shadow-md hover:shadow-lg group"
              >
                <span className={isHindi ? 'font-hindi text-base' : 'font-sans text-base font-bold'}>
                  {isHindi ? 'हमारे उत्पाद एवं श्रेणियाँ देखें' : 'Explore Products & Catalog'}
                </span>
                <ArrowRight className="w-4 h-4 text-[#B5D957] group-hover:translate-x-1 transition-transform" />
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
