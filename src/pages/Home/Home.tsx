import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  HeartHandshake,
  Sprout,
  Store,
  ArrowRight,
  Clock,
  MapPin,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  ChevronDown,
  Compass,
  Navigation,
} from 'lucide-react';
import { HeroSection } from '../../components/HeroSection';
import { StorytellingSection } from '../../components/StorytellingSection';
import { CTASection } from '../../components/CTASection';
import { PageTransition } from '../../components/common/PageTransition';
import { SectionHeading } from '../../components/common/SectionHeading';
import { productCategories } from '../../config/products';
import { businessConfig } from '../../config/business';
import { LOCAL_GEO_DATA, AEO_FAQS, ROUTE_SEO } from '../../config/seo';
import { useLanguage } from '../../i18n/LanguageProvider';

export const Home: React.FC = () => {
  const { language } = useLanguage();
  const isHindi = language === 'hi';
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  const featuredCategory = productCategories.find((c) => c.id === 'fertilizers') || productCategories[0];
  const supportingCategories = productCategories.filter((c) => c.id !== 'fertilizers');

  const homeSeo = ROUTE_SEO['/'];

  return (
    <PageTransition
      seo={{
        title: isHindi ? homeSeo.titleHi : homeSeo.titleEn,
        description: isHindi ? homeSeo.descHi : homeSeo.descEn,
        keywords: isHindi ? homeSeo.keywordsHi : homeSeo.keywordsEn,
        canonicalPath: '/',
        ogImage: '/images/social/og-home.jpg',
      }}
    >
      {/* 3D Cinematic Agricultural Hero Section */}
      <HeroSection />

      {/* Pinned Cinematic Storytelling (Soil -> Growth -> Harvest) */}
      <StorytellingSection />

      {/* Brand Introduction — Authentic Agricultural Editorial */}
      <section className="py-24 sm:py-32 bg-[#F7F6EF] text-[#14251A] relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-35 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Photographic Story Anchor */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#103D28]/15 group">
                <img
                  src="/images/hero/hero-crop-rows-soil.webp"
                  alt="Fertile crop rows and enriched agricultural soil"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[420px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082B1C] via-[#082B1C]/40 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md border border-white/20 text-[#B5D957] mb-3">
                    <Sprout className="w-3.5 h-3.5 text-[#E8B94F]" />
                    <span>{isHindi ? 'भरोसेमंद कृषि केंद्र' : 'TRUSTED AGRICULTURAL HUB'}</span>
                  </span>

                  <h3
                    className={`${
                      isHindi ? 'font-hindi leading-[1.38]' : 'font-sans leading-snug'
                    } text-2xl sm:text-3xl font-extrabold text-white mb-2`}
                  >
                    {isHindi ? businessConfig.about.titleHi : businessConfig.about.titleEn}
                  </h3>

                  <p
                    className={`${
                      isHindi ? 'font-hindi' : 'font-sans'
                    } text-xs sm:text-sm text-[#F7F6EF]/90 line-clamp-3 mb-4`}
                  >
                    "{isHindi ? businessConfig.about.bodyHi : businessConfig.about.bodyEn}"
                  </p>

                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#E8B94F] hover:text-white transition-colors group/link"
                  >
                    <span className={isHindi ? 'font-hindi' : 'font-sans'}>
                      {isHindi ? 'हमारे बारे में और जानें' : 'Read Our Full Story'}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#B5D957] group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Editorial Commitment Column */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <SectionHeading
                eyebrowEn="OUR COMMITMENT"
                eyebrowHi="हमारा संकल्प"
                titleHi="किसान के परिश्रम का सच्चा सम्मान"
                titleEn="Empowering Every Season with Genuine Supplies"
                subtitleHi="हमारा लक्ष्य केवल उत्पाद बेचना नहीं, बल्कि किसान भाइयों को उनकी मिट्टी और फसल के अनुसार सही सामग्री उपलब्ध कराना है।"
                subtitleEn="We are dedicated to offering dependable fertilizers, verified seeds, and guidance to maximize farm health."
                align="left"
              />

              <div className="space-y-4 w-full mb-8">
                <div className="p-5 rounded-2xl bg-white border border-[#103D28]/10 shadow-sm flex items-start gap-4 hover:border-[#83B83D]/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#103D28]/10 flex items-center justify-center flex-shrink-0 text-[#103D28]">
                    <ShieldCheck className="w-5 h-5 text-[#83B83D]" />
                  </div>
                  <div>
                    <h4
                      className={`${
                        isHindi ? 'font-hindi' : 'font-sans'
                      } font-bold text-base text-[#14251A] mb-1`}
                    >
                      {isHindi ? '100% प्रामाणिक कृषि आदान' : '100% Genuine Agricultural Inputs'}
                    </h4>
                    <p
                      className={`${
                        isHindi ? 'font-hindi' : 'font-sans'
                      } text-xs sm:text-sm text-[#657266] leading-relaxed`}
                    >
                      {isHindi
                        ? 'दुकान पर उपलब्ध सभी खाद व बीज सीधे मान्यता प्राप्त कंपनियों से आते हैं, जिससे खेत में शत-प्रतिशत प्रभाव मिलता है।'
                        : 'Every bag of fertilizer and seed lot is sourced directly from certified manufacturers, ensuring full efficacy in the field.'}
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#103D28]/10 shadow-sm flex items-start gap-4 hover:border-[#83B83D]/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#103D28]/10 flex items-center justify-center flex-shrink-0 text-[#103D28]">
                    <HeartHandshake className="w-5 h-5 text-[#E8B94F]" />
                  </div>
                  <div>
                    <h4
                      className={`${
                        isHindi ? 'font-hindi' : 'font-sans'
                      } font-bold text-base text-[#14251A] mb-1`}
                    >
                      {isHindi ? 'व्यावहारिक व निष्पक्ष मार्गदर्शन' : 'Field-Tested Practical Guidance'}
                    </h4>
                    <p
                      className={`${
                        isHindi ? 'font-hindi' : 'font-sans'
                      } text-xs sm:text-sm text-[#657266] leading-relaxed`}
                    >
                      {isHindi
                        ? 'फसल की उम्र और मिट्टी की आवश्यकता समझकर ही सलाह दी जाती है। अनावश्यक रसायनों से बचाना ही हमारी प्राथमिकता है।'
                        : 'Recommendations are customized to your crop growth stage and soil condition, eliminating wasteful chemical expenditures.'}
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/why-choose-us"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#103D28] hover:text-[#83B83D] transition-colors group"
              >
                <span className={isHindi ? 'font-hindi' : 'font-sans'}>
                  {isHindi ? 'चार मुख्य कारण — किसान हमें क्यों चुनते हैं' : 'Discover Four Enduring Reasons Farmers Trust Us'}
                </span>
                <ArrowRight className="w-4 h-4 text-[#83B83D] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 1. PRODUCT CATEGORIES — Editorial Agricultural Showcase */}
      <section className="py-24 sm:py-32 bg-[#EDEFE5] text-[#14251A] relative overflow-hidden border-t border-[#103D28]/10">
        <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrowEn="OUR CATALOGUE"
            eyebrowHi="उत्पाद श्रेणियाँ"
            titleHi="खेती के हर चरण के लिए आवश्यक आदान"
            titleEn="Essential Farm Inputs for Maximum Yield"
            subtitleHi="मिट्टी की उर्वरता से लेकर दाना भराव तक — सभी श्रेणियाँ विश्वसनीय व प्रमाणित।"
            subtitleEn="Explore our carefully curated categories designed to elevate farm production across every season."
          />

          {/* Asymmetrical Editorial Composition: 1 Large Featured + 3 Supporting Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-12">
            {/* Featured Category: Fertilizers & Soil Enrichers (lg:col-span-6) */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#103D28]/20 group flex-1 min-h-[500px] sm:min-h-[540px] flex flex-col justify-between bg-[#082B1C]">
                {/* Full-bleed soil background photography */}
                <img
                  src={featuredCategory.image}
                  alt={featuredCategory.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
                />

                {/* Editorial Duotone and Vignette Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#082B1C] via-[#082B1C]/65 to-[#082B1C]/35" />

                {/* Top Badge Area */}
                <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md border border-white/20 text-[#B5D957]">
                    <Sprout className="w-3.5 h-3.5 text-[#E8B94F]" />
                    <span>{isHindi ? 'प्राथमिक मृदा आधार' : 'SOIL FOUNDATION'}</span>
                  </span>

                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#E8B94F] font-bold px-2.5 py-1 rounded-md bg-[#082B1C]/80 border border-[#E8B94F]/30 backdrop-blur-sm">
                    {isHindi ? 'प्रमुख श्रेणी' : 'FEATURED'}
                  </span>
                </div>

                {/* Bottom Content Area */}
                <div className="relative z-10 p-6 sm:p-8 text-white">
                  <h3
                    className={`${
                      isHindi ? 'font-hindi leading-[1.38]' : 'font-sans leading-tight'
                    } text-2xl sm:text-3xl font-extrabold text-white mb-3`}
                  >
                    {isHindi ? featuredCategory.titleHi : featuredCategory.titleEn}
                  </h3>

                  <p
                    className={`${
                      isHindi ? 'font-hindi text-sm sm:text-base' : 'font-sans text-sm'
                    } text-[#F7F6EF]/90 leading-relaxed mb-6 max-w-xl`}
                  >
                    {isHindi ? featuredCategory.descriptionHi : featuredCategory.descriptionEn}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {(isHindi ? featuredCategory.highlightsHi : featuredCategory.highlightsEn).map((h, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-black/50 border border-white/15 text-[#F7F6EF]"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#83B83D]" />
                        <span className={isHindi ? 'font-hindi' : 'font-sans'}>{h}</span>
                      </span>
                    ))}
                  </div>

                  {/* Directional Action */}
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#B5D957] to-[#83B83D] hover:from-[#E8B94F] hover:to-[#B5D957] text-[#082B1C] text-xs sm:text-sm font-extrabold transition-all shadow-md group/btn"
                  >
                    <span className={isHindi ? 'font-hindi' : 'font-sans'}>
                      {isHindi ? 'खाद उत्पाद एवं विवरण देखें' : 'Explore Fertilizer Range'}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#082B1C] group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Supporting 3 Categories (lg:col-span-6 stacked) */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-5 sm:gap-6">
              {supportingCategories.map((cat) => {
                const activeTitle = isHindi ? cat.titleHi : cat.titleEn;
                const activeDesc = isHindi ? cat.descriptionHi : cat.descriptionEn;
                const activeTag = isHindi ? cat.categoryTagHi : cat.categoryTagEn;

                // Category specific visual styling
                const categoryAccents: Record<string, { badgeColor: string; img: string }> = {
                  seeds: {
                    badgeColor: 'text-[#83B83D] border-[#83B83D]/30',
                    img: '/images/hero/stages/stage2-sowing-seeds.webp',
                  },
                  pesticides: {
                    badgeColor: 'text-[#E8B94F] border-[#E8B94F]/30',
                    img: '/images/hero/hero-crops-close-up.webp',
                  },
                  'plant-nutrients': {
                    badgeColor: 'text-[#B5D957] border-[#B5D957]/30',
                    img: '/images/hero/stages/stage5-crop-growth.webp',
                  },
                };

                const accent = categoryAccents[cat.id] || {
                  badgeColor: 'text-[#83B83D] border-[#83B83D]/30',
                  img: cat.image,
                };

                return (
                  <div
                    key={cat.id}
                    className="rounded-2xl bg-white border border-[#103D28]/12 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row group hover:border-[#83B83D]/40"
                  >
                    {/* Photographic Thumbnail */}
                    <div className="sm:w-44 md:w-48 h-40 sm:h-auto relative overflow-hidden flex-shrink-0 bg-[#082B1C]/5">
                      <img
                        src={accent.img}
                        alt={cat.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/40 to-transparent" />
                      <span className="sm:hidden absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-black/60 text-[#F7F6EF] backdrop-blur-sm border border-white/20">
                        {activeTag}
                      </span>
                    </div>

                    {/* Content Details */}
                    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="hidden sm:flex items-center gap-2 mb-2">
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#103D28]/5 border ${accent.badgeColor}`}
                          >
                            {activeTag}
                          </span>
                        </div>

                        <h4
                          className={`${
                            isHindi ? 'font-hindi text-lg font-bold' : 'font-sans text-base font-bold'
                          } text-[#14251A] mb-1.5`}
                        >
                          {activeTitle}
                        </h4>

                        <p
                          className={`${
                            isHindi ? 'font-hindi text-xs sm:text-sm' : 'font-sans text-xs'
                          } text-[#657266] leading-relaxed mb-3 line-clamp-2`}
                        >
                          {activeDesc}
                        </p>
                      </div>

                      {/* Highlights & Link */}
                      <div className="pt-3 border-t border-[#103D28]/8 flex items-center justify-between">
                        <div className="flex flex-wrap gap-1.5">
                          {(isHindi ? cat.highlightsHi : cat.highlightsEn).slice(0, 2).map((h, i) => (
                            <span
                              key={i}
                              className={`px-2 py-0.5 rounded text-[11px] ${
                                isHindi ? 'font-hindi' : 'font-sans'
                              } bg-[#103D28]/5 text-[#103D28] font-medium`}
                            >
                              {h}
                            </span>
                          ))}
                        </div>

                        <Link
                          to="/products"
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#103D28] hover:text-[#83B83D] transition-colors group/link ml-2 flex-shrink-0"
                        >
                          <span className={isHindi ? 'font-hindi' : 'font-sans'}>
                            {isHindi ? 'विवरण' : 'Details'}
                          </span>
                          <ChevronRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Full Catalog Action */}
          <div className="text-center pt-2">
            <Link
              to="/products"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-[#082B1C] bg-gradient-to-r from-[#B5D957] to-[#83B83D] hover:from-[#E8B94F] hover:to-[#B5D957] transition-all shadow-md hover:shadow-xl hover:scale-105 cursor-pointer"
            >
              <span
                className={
                  isHindi ? 'font-hindi text-base font-extrabold' : 'font-sans text-base font-bold'
                }
              >
                {isHindi ? 'संपूर्ण कृषि उत्पाद सूची देखें' : 'View Complete Agricultural Catalog'}
              </span>
              <ArrowRight className="w-5 h-5 text-[#082B1C]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STOREFRONT WELCOME — The Real Shop Experience */}
      <section className="py-24 sm:py-32 bg-[#F7F6EF] text-[#14251A] relative overflow-hidden border-t border-[#103D28]/10">
        <div className="absolute inset-0 bg-grain opacity-25 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column — Authentic Storefront Photography */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#103D28]/15 shadow-xl group bg-[#082B1C]/5">
                <img
                  src="/images/shop-exterior.webp"
                  alt="Verma Khad Bhandar Storefront with basement entrance, corrugated metal canopy, and green signboard"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-700"
                />

                {/* Authentic Storefront Pill */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md border border-white/20 text-[#B5D957]">
                    <Store className="w-3 h-3 text-[#E8B94F]" />
                    <span>{isHindi ? 'वास्तविक दुकान' : 'AUTHENTIC STOREFRONT'}</span>
                  </span>
                </div>

                {/* Architectural Landmark Caption */}
                <div className="p-4 bg-white/95 backdrop-blur-sm border-t border-[#103D28]/10 text-xs text-[#14251A] flex items-center justify-between">
                  <span className={`${isHindi ? 'font-hindi' : 'font-sans'} text-[#657266]`}>
                    {isHindi
                      ? 'पहचान: बेसमेंट स्तर, नालीदार टिन शेड व हरा साइनबोर्ड'
                      : 'Landmark: Basement Entrance, Corrugated Metal Canopy & Green Sign'}
                  </span>
                  <span className="font-mono text-[10px] text-[#103D28] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#103D28]/10">
                    {isHindi ? 'सीधा संपर्क' : 'IN-PERSON'}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column — Shop Introduction & Practical Information */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#103D28]/10 text-[#103D28] border border-[#103D28]/15 mb-4">
                <Store className="w-3.5 h-3.5 text-[#103D28]" />
                <span>{isHindi ? 'दुकान पर पधारें' : 'VISIT OUR STORE'}</span>
              </div>

              <h3
                className={`${
                  isHindi ? 'font-hindi leading-[1.38]' : 'font-sans leading-tight'
                } text-3xl sm:text-4xl font-extrabold text-[#14251A] mb-4`}
              >
                {isHindi ? 'वास्तविक दुकान — किसान का अपना केंद्र' : 'Step Inside: An Authentic Agricultural Storefront'}
              </h3>

              <p
                className={`${
                  isHindi ? 'font-hindi text-base sm:text-lg' : 'font-sans text-base'
                } text-[#657266] leading-relaxed mb-6`}
              >
                {isHindi
                  ? 'वर्मा खाद भंडार कोई काल्पनिक शोरूम नहीं, बल्कि जमीन से जुड़ा हुआ किसान भाइयों का विश्वसनीय केंद्र है। सड़क किनारे बेसमेंट स्तर पर स्थित हमारी दुकान पर आप स्वयं आकर खाद की बोरियों, प्रमाणित बीज पैकेटों और फसल सुरक्षा रसायनों की प्रामाणिकता की जांच कर सकते हैं।'
                  : 'Verma Khad Bhandar is not a fictional showroom, but a genuine local store rooted in the farming community. Located at ground and basement level along the main road, farmers are welcome to inspect sealed seed lots, certified fertilizer sacks, and crop protection supplies in person.'}
              </p>

              {/* Supporting Verified Shop Details */}
              <div className="space-y-3.5 w-full mb-8">
                <div className="p-4 rounded-xl bg-white border border-[#103D28]/10 flex items-start gap-3.5 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-[#103D28]/10 flex items-center justify-center flex-shrink-0 text-[#103D28] mt-0.5">
                    <ShieldCheck className="w-4 h-4 text-[#83B83D]" />
                  </div>
                  <div>
                    <h5 className={`${isHindi ? 'font-hindi' : 'font-sans'} font-bold text-sm text-[#14251A] mb-0.5`}>
                      {isHindi ? 'प्रत्यक्ष स्टॉक निरीक्षण' : 'In-Person Stock Verification'}
                    </h5>
                    <p className={`${isHindi ? 'font-hindi' : 'font-sans'} text-xs text-[#657266] leading-relaxed`}>
                      {isHindi
                        ? 'खाद की बोरियों पर मुद्रित बैच नंबर और निर्माता सील का स्वयं मिलान करें।'
                        : 'Examine manufacturer batch seals, expiry dates, and lot numbers directly before purchase.'}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#103D28]/10 flex items-start gap-3.5 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-[#103D28]/10 flex items-center justify-center flex-shrink-0 text-[#103D28] mt-0.5">
                    <Clock className="w-4 h-4 text-[#E8B94F]" />
                  </div>
                  <div>
                    <h5 className={`${isHindi ? 'font-hindi' : 'font-sans'} font-bold text-sm text-[#14251A] mb-0.5`}>
                      {isHindi ? 'दुकान खुलने का समय' : 'Store Opening Hours'}
                    </h5>
                    <p className={`${isHindi ? 'font-hindi' : 'font-sans'} text-xs text-[#657266]`}>
                      {isHindi ? businessConfig.contact.openingHours.hi : businessConfig.contact.openingHours.en}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#103D28]/10 flex items-start gap-3.5 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-[#103D28]/10 flex items-center justify-center flex-shrink-0 text-[#103D28] mt-0.5">
                    <MapPin className="w-4 h-4 text-[#1D603A]" />
                  </div>
                  <div>
                    <h5 className={`${isHindi ? 'font-hindi' : 'font-sans'} font-bold text-sm text-[#14251A] mb-0.5`}>
                      {isHindi ? 'दुकान का पता' : 'Store Location'}
                    </h5>
                    <p className={`${isHindi ? 'font-hindi' : 'font-sans'} text-xs text-[#657266]`}>
                      {isHindi ? businessConfig.contact.addressDisplay.hi : businessConfig.contact.addressDisplay.en}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/visit"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#103D28] hover:bg-[#1D603A] text-white text-sm font-bold transition-all shadow-md hover:shadow-lg"
                >
                  <span className={isHindi ? 'font-hindi' : 'font-sans'}>
                    {isHindi ? 'दुकान का पता व समय-सारणी देखें' : 'View Store Address & Hours'}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#B5D957]" />
                </Link>

                <a
                  href={businessConfig.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[#103D28]/20 bg-white hover:bg-[#103D28]/5 text-xs font-bold text-[#103D28] transition-colors"
                >
                  <span>{isHindi ? 'Google Maps पर देखें' : 'View on Google Maps'}</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Community & Service Area Section */}
      <section className="py-20 sm:py-24 bg-white text-[#14251A] relative border-b border-[#103D28]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrowEn="LOCAL AGRICULTURAL SERVICE"
            eyebrowHi="स्थानीय कृषि सेवा क्षेत्र"
            titleHi="रसड़ा, कुरेम एवं आसपास के किसान भाइयों का भरोसेमंद केंद्र"
            titleEn="Serving Farmers Across Rasra, Kurem & Nearby Farming Communities"
            subtitleHi="रसड़ा-कासिमाबाद रोड पर बाधुबांध मार्केट (दुलहपाह) में स्थित। रसड़ा मंडी, कुरेम और सीमावर्ती गांवों के किसानों के लिए सुगम पहुंच।"
            subtitleEn="Directly positioned along the main agricultural corridor connecting Rasra mandi and surrounding rural villages."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {LOCAL_GEO_DATA.verifiedNearbyLocalities.slice(0, 3).map((loc, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F7F6EF] border border-[#103D28]/10 shadow-sm flex flex-col justify-between hover:border-[#83B83D]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#103D28]/10 text-[#103D28]">
                      {loc.distanceKm}
                    </span>
                    <span className="text-xs text-[#14251A]/60 flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#83B83D]" />
                      {loc.travelTime}
                    </span>
                  </div>
                  <h4 className={`${isHindi ? 'font-hindi' : 'font-sans'} text-lg font-bold text-[#14251A] mb-2`}>
                    {isHindi ? loc.nameHi : loc.nameEn}
                  </h4>
                  <p className={`${isHindi ? 'font-hindi text-sm' : 'font-sans text-xs'} text-[#14251A]/75 leading-relaxed`}>
                    {isHindi ? loc.routeDescriptionHi : loc.routeDescriptionEn}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#103D28]/10 flex items-center justify-between text-xs font-semibold text-[#103D28]">
                  <span>{isHindi ? 'सीधा संपर्क मार्ग' : 'Direct Highway Link'}</span>
                  <CheckCircle2 className="w-4 h-4 text-[#83B83D]" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/fertilizer-shop-rasra"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#103D28] hover:bg-[#1D603A] text-white text-xs sm:text-sm font-bold shadow-md transition-all"
            >
              <span>{isHindi ? 'रसड़ा एवं कुरेम स्थानीय केंद्र का विस्तृत विवरण देखें' : 'Explore Rasra & Kurem Local Guide'}</span>
              <ArrowRight className="w-4 h-4 text-[#B5D957]" />
            </Link>
          </div>
        </div>
      </section>

      {/* AEO Farmer Questions & Answers (FAQ) */}
      <section className="py-20 sm:py-24 bg-[#F7F6EF] text-[#14251A] relative border-b border-[#103D28]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrowEn="FARMER INQUIRIES & GUIDANCE"
            eyebrowHi="किसान भाइयों के प्रमुख सवाल"
            titleHi="खाद, बीज और दुकान से जुड़ी आवश्यक जानकारियां"
            titleEn="Common Questions About Fertilizers & Store Guidance"
            subtitleHi="रसड़ा और आसपास के किसान भाइयों द्वारा पूछे जाने वाले आवश्यक प्रश्नों के सीधे और सटीक उत्तर।"
            subtitleEn="Clear and factual answers to frequently asked questions about our location, supplies, and hours."
          />

          <div className="mt-12 space-y-4">
            {AEO_FAQS.slice(0, 5).map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl bg-white border border-[#103D28]/10 shadow-sm overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer hover:bg-[#F7F6EF]/50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-[#83B83D] flex-shrink-0 mt-0.5" />
                      <span
                        className={`${
                          isHindi ? 'font-hindi text-base sm:text-lg font-bold' : 'font-sans text-sm sm:text-base font-bold'
                        } text-[#14251A]`}
                      >
                        {isHindi ? faq.questionHi : faq.questionEn}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#103D28]/60 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#83B83D]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-[#103D28]/5">
                      <p
                        className={`${
                          isHindi ? 'font-hindi text-sm sm:text-base' : 'font-sans text-xs sm:text-sm'
                        } text-[#14251A]/85 leading-relaxed pt-3`}
                      >
                        {isHindi ? faq.answerHi : faq.answerEn}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/fertilizer-shop-rasra"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#83B83D] hover:text-[#103D28] transition-colors"
            >
              <span>{isHindi ? 'सभी सवाल और जवाब देखें' : 'View All Farmer FAQs & Travel Guide'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. FINAL CTA — A Meaningful Agricultural Closing */}
      <CTASection />
    </PageTransition>
  );
};
