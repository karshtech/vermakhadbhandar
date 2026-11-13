import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Compass, HeartHandshake, Sprout, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PageTransition } from '../../components/common/PageTransition';
import { SectionHeading } from '../../components/common/SectionHeading';
import { fadeUp, staggerContainer } from '../../animations/motionVariants';
import { Tilt, Magnetic } from '../../components/common/MotionFX';
import { ROUTE_SEO } from '../../config/seo';
import { useLanguage } from '../../i18n/LanguageProvider';

interface CoreValue {
  id: string;
  icon: typeof ShieldCheck;
  image: string;
  imageAlt: string;
  titleHi: string;
  titleEn: string;
  descHi: string;
  descEn: string;
  pointsHi: string[];
  pointsEn: string[];
}

const CORE_VALUES: CoreValue[] = [
  {
    id: 'quality',
    icon: ShieldCheck,
    image: '/images/hero/hero-crop-rows-soil.webp',
    imageAlt: 'Rich furrowed agricultural land prepared with quality inputs',
    titleHi: 'गुणवत्तापूर्ण कृषि उत्पाद',
    titleEn: 'Quality Agricultural Products',
    descHi: 'विश्वसनीय गुणवत्ता वाले खाद, बीज और पौध संरक्षण उत्पाद जो आपकी फसल को दें मजबूत शुरुआत और सुरक्षित विकास। प्रत्येक उत्पाद आधिकारिक एवं प्रमाणित स्रोतों से ही लिया जाता है।',
    descEn: 'Authentic fertilizers, certified seeds, and proven crop protection formulated for genuine agricultural effectiveness without adulteration.',
    pointsHi: [
      'विश्वसनीय एवं मानक गुणवत्ता',
      'प्रमाणित कंपनियों से आपूर्ति',
      'फसल की प्रारंभिक अवस्था से सशक्त सुरक्षा',
    ],
    pointsEn: [
      'Authentic, standard-compliant inputs',
      'Sourced from certified manufacturers',
      'Protection from seedling to harvest',
    ],
  },
  {
    id: 'guidance',
    icon: Compass,
    image: '/images/hero/stages/stage3-irrigation-water.webp',
    imageAlt: 'Irrigation and scientific crop water management',
    titleHi: 'सही व व्यावहारिक मार्गदर्शन',
    titleEn: 'Helpful Agronomic Guidance',
    descHi: 'फसल की अवस्था और स्थानीय मिट्टी की आवश्यकता के अनुसार उपयुक्त कृषि सामग्री के चयन में किसानों को व्यावहारिक सलाह। केवल बिक्री नहीं, बल्कि फसल सुधार हमारा उद्देश्य है।',
    descEn: 'Thoughtful advice on input selection based on crop growth stages, seasonal weather, and specific regional soil demands.',
    pointsHi: [
      'मौसम व मिट्टी के अनुकूल सलाह',
      'अनावश्यक रसायनों से बचाव',
      'सटीक खुराक व छिड़काव का सही समय',
    ],
    pointsEn: [
      'Stage-specific seasonal advice',
      'Prevention of wasteful chemical overuse',
      'Accurate dosage and timing guidance',
    ],
  },
  {
    id: 'trust',
    icon: HeartHandshake,
    image: '/images/shop-exterior.webp',
    imageAlt: 'Authentic Verma Khad Bhandar storefront where farmers meet with trust',
    titleHi: 'ग्राहकों का अटूट विश्वास',
    titleEn: 'Enduring Customer Trust',
    descHi: 'ईमानदार संवाद और पारदर्शी व्यवहार के माध्यम से हर किसान भाई के साथ एक स्थायी और भरोसेमंद संबंध का निर्माण। किसान की संतुष्टि ही हमारी वास्तविक पहचान है।',
    descEn: 'Building enduring farmer relationships grounded in straightforward conversations, integrity, and reliable support.',
    pointsHi: [
      'पारदर्शी एवं निष्पक्ष लेन-देन',
      'वर्षों का निरंतर किसान संबंध',
      'सहानुभूतिपूर्ण और सम्मानजनक व्यवहार',
    ],
    pointsEn: [
      'Transparent and honest dealings',
      'Decades of lasting farmer relationships',
      'Respectful, farmer-first hospitality',
    ],
  },
  {
    id: 'support',
    icon: Sprout,
    image: '/images/hero/stages/stage5-crop-growth.webp',
    imageAlt: 'Lush healthy standing wheat crop field',
    titleHi: 'खेती के हर कदम पर सहयोग',
    titleEn: 'Continuous Farming Support',
    descHi: 'बुवाई से लेकर कटाई तक, हर चरण में किसान की जरूरत को प्राथमिकता देकर खेती के सफर में सहभागी बनना। पीक सीजन में सामग्री की उपलब्धता सुनिश्चित करना।',
    descEn: 'Standing by farmers across the entire cultivation cycle with dependable availability of vital inputs during critical farming windows.',
    pointsHi: [
      'बुवाई के समय खाद-बीज की तत्परता',
      'कीट-रोग आने पर त्वरित समाधान',
      'दाना भराव तक निरंतर साथ',
    ],
    pointsEn: [
      'Prompt input availability at sowing',
      'Rapid solutions during pest outbreaks',
      'Companionship until final harvest',
    ],
  },
];

export const WhyChooseUs: React.FC = () => {
  const { language } = useLanguage();
  const isHindi = language === 'hi';

  const previewPillars = isHindi
    ? ['प्रामाणिक सामग्री', 'व्यावहारिक सलाह', 'पारदर्शी व्यवहार', 'निरंतर सहयोग']
    : ['Authentic Inputs', 'Agronomic Advice', 'Fair Dealings', 'Seasonal Support'];

  const seoData = ROUTE_SEO['/why-choose-us'];

  return (
    <PageTransition
      seo={{
        title: isHindi ? seoData.titleHi : seoData.titleEn,
        description: isHindi ? seoData.descHi : seoData.descEn,
        keywords: isHindi ? seoData.keywordsHi : seoData.keywordsEn,
        canonicalPath: '/why-choose-us',
        ogImage: '/images/social/og-why-choose-us.jpg',
      }}
    >
      {/* 1. Trust Through Agriculture: Immersive Asymmetric Panoramic Hero */}
      <section className="relative pt-36 sm:pt-44 pb-24 sm:pb-32 bg-[#082B1C] text-white overflow-hidden border-b border-[#1D603A]/40">
        {/* Full-width agricultural photograph background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            src="/images/hero/hero-landscape-golden-hour.webp"
            alt="Golden-hour agricultural landscape"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-center opacity-45 transform scale-105"
          />
          {/* Asymmetrical gradient scrim for crystal clear contrast on left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#082B1C] via-[#082B1C]/90 to-[#082B1C]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#082B1C] via-transparent to-[#082B1C]/70" />
          <div className="absolute inset-0 bg-grain opacity-25" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 border border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-[#B5D957] mb-5 backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E8B94F]" />
              <span>{isHindi ? 'किसान का भरोसा • हमारा संकल्प' : 'FARMER TRUST • OUR ENDURING PROMISE'}</span>
            </div>

            {/* Headline with Anti-Clipping line-height */}
            <h1
              className={`${
                isHindi ? 'font-hindi leading-[1.38] sm:leading-[1.42]' : 'font-sans leading-tight'
              } text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 tracking-tight`}
            >
              {isHindi ? 'किसान का भरोसा, हमारी असली पहचान।' : 'Farmer Trust is Our Enduring Identity.'}
            </h1>

            {/* Subtitle */}
            <p
              className={`${
                isHindi ? 'font-hindi text-lg sm:text-xl font-bold' : 'font-sans text-lg sm:text-xl font-semibold'
              } text-[#E8B94F] mb-4`}
            >
              {isHindi
                ? 'खेती की हर आवश्यकता, एक ही भरोसेमंद स्थान पर।'
                : 'Reliable Agricultural Supplies for Every Growing Season.'}
            </p>

            {/* Concise Supporting Statement */}
            <p
              className={`${
                isHindi ? 'font-hindi text-sm sm:text-base leading-relaxed' : 'font-sans text-sm sm:text-base leading-normal'
              } text-[#F7F6EF]/85 mb-8 max-w-xl`}
            >
              {isHindi
                ? 'हम जानते हैं कि किसान की मेहनत में एक-एक दिन का महत्व होता है। इसलिए हम केवल वही सामग्री अनुशंसित करते हैं जो आपकी मिट्टी और फसल के लिए वास्तव में उपयोगी हो।'
                : 'We know every day of hard work counts in the field. That is why we recommend only genuine agricultural inputs tailored to your specific soil and seasonal needs.'}
            </p>

            {/* Scannable Pillars Preview */}
            <div className="flex flex-wrap gap-2.5 pt-4 border-t border-white/15">
              {previewPillars.map((pillar, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-black/40 border border-white/15 text-[#F7F6EF] backdrop-blur-sm"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#83B83D]" />
                  <span className={isHindi ? 'font-hindi' : 'font-sans'}>{pillar}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Four Pillars Detailed Editorial Walkthrough */}
      <section className="py-24 sm:py-32 bg-[#F7F6EF] text-[#14251A] relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrowEn="CORE ADVANTAGES"
            eyebrowHi="हमारी मुख्य विशेषताएं"
            titleHi="चार मजबूत आधार, जो हमें बनाते हैं अलग"
            titleEn="Four Enduring Values That Guide Us Every Day"
            subtitleHi="गुणवत्ता, मार्गदर्शन, विश्वास और निरंतर सहयोग — हमारे अटूट संकल्प।"
            subtitleEn="Quality, agronomic guidance, enduring trust, and dedicated farming support."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8 lg:space-y-12 mb-20"
          >
            {CORE_VALUES.map((val, idx) => {
              const Icon = val.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div key={val.id} variants={fadeUp}>
                  <div className="rounded-3xl bg-white border border-[#103D28]/10 shadow-lg overflow-hidden hover:border-[#83B83D]/40 transition-all">
                    <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                      {/* Photographic Feature */}
                      <div className={`lg:col-span-5 relative ${isEven ? '' : 'lg:col-start-8'}`}>
                        <div className="relative h-64 sm:h-80 lg:h-96 w-full overflow-hidden">
                          <img
                            src={val.image}
                            alt={val.imageAlt}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                          <div className="absolute top-4 left-4">
                            <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-black/60 text-[#B5D957] backdrop-blur-md border border-white/20">
                              0{idx + 1}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Content Column */}
                      <div className={`p-8 lg:p-12 lg:col-span-7 ${isEven ? '' : 'lg:col-start-1'}`}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-[#103D28]/10 flex items-center justify-center text-[#103D28]">
                            <Icon className="w-5 h-5 text-[#103D28]" />
                          </div>
                          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#83B83D]">
                            {isHindi ? 'मूल सिद्धांत' : 'PILLAR VALUE'}
                          </span>
                        </div>

                        <h3 className={`${isHindi ? 'font-hindi text-2xl sm:text-3xl font-extrabold' : 'font-sans text-xl sm:text-2xl font-bold'} text-[#14251A] mb-4`}>
                          {isHindi ? val.titleHi : val.titleEn}
                        </h3>

                        <p className={`${isHindi ? 'font-hindi text-sm sm:text-base leading-relaxed' : 'font-sans text-sm sm:text-base'} text-[#657266] mb-6 leading-relaxed`}>
                          {isHindi ? val.descHi : val.descEn}
                        </p>

                        <div className="space-y-2.5 pt-4 border-t border-[#103D28]/10">
                          {(isHindi ? val.pointsHi : val.pointsEn).map((pt, i) => (
                            <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#14251A]">
                              <CheckCircle2 className="w-4 h-4 text-[#83B83D] flex-shrink-0 mt-0.5" />
                              <span className={isHindi ? 'font-hindi' : 'font-sans'}>{pt}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Action to Contact / Store */}
          <div className="text-center">
            <Magnetic strength={0.25}>
              <Link
                to="/visit"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white bg-[#103D28] hover:bg-[#1D603A] transition-all shadow-md hover:shadow-lg group"
              >
                <span className={isHindi ? 'font-hindi text-base' : 'font-sans text-base font-bold'}>
                  {isHindi ? 'हमारी दुकान पर पधारें' : 'Visit Our Store in Person'}
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
