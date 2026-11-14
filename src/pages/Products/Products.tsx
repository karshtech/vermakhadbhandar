import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Boxes, Sprout, ShieldCheck, Leaf, MessageCircle, ArrowUpRight, ArrowRight, HelpCircle, CheckCircle2 } from 'lucide-react';
import { PageTransition } from '../../components/common/PageTransition';
import { FarmCalculator } from '../../components/FarmCalculator';
import { productCategories } from '../../config/products';
import { businessConfig } from '../../config/business';
import { fadeUp, staggerContainer } from '../../animations/motionVariants';
import { Tilt, Magnetic } from '../../components/common/MotionFX';
import { ROUTE_SEO } from '../../config/seo';
import { useLanguage } from '../../i18n/LanguageProvider';

const iconMap = {
  Boxes,
  Sprout,
  ShieldCheck,
  Leaf,
};

export const Products: React.FC = () => {
  const { language } = useLanguage();
  const isHindi = language === 'hi';
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTabs = [
    { id: 'all', labelHi: 'सभी श्रेणियाँ', labelEn: 'All Categories' },
    { id: 'fertilizers', labelHi: 'खाद एवं उर्वरक', labelEn: 'Fertilizers' },
    { id: 'seeds', labelHi: 'उन्नत बीज', labelEn: 'Certified Seeds' },
    { id: 'pesticides', labelHi: 'कीटनाशक व फसल सुरक्षा', labelEn: 'Crop Protection' },
    { id: 'plant-nutrients', labelHi: 'पौध पोषक तत्व', labelEn: 'Plant Nutrients' },
  ];

  const filteredCategories = productCategories.filter((cat) => {
    const matchesFilter = selectedFilter === 'all' || cat.id === selectedFilter;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === '' ||
      cat.titleHi.toLowerCase().includes(query) ||
      cat.titleEn.toLowerCase().includes(query) ||
      cat.descriptionHi.toLowerCase().includes(query) ||
      cat.descriptionEn.toLowerCase().includes(query);
    return matchesFilter && matchesSearch;
  });

  const getWhatsAppLink = (catName: string) => {
    const text = encodeURIComponent(
      isHindi
        ? `नमस्ते वर्मा खाद भंडार, मैं ${catName} के संबंध में उत्पाद उपलब्धता व परामर्श लेना चाहता हूँ।`
        : `Hello Verma Khad Bhandar, I would like to inquire about ${catName} availability and guidance.`
    );
    return `https://wa.me/${businessConfig.contact.whatsappNumberRaw}?text=${text}`;
  };

  const seoData = ROUTE_SEO['/products'];

  return (
    <PageTransition
      seo={{
        title: isHindi ? seoData.titleHi : seoData.titleEn,
        description: isHindi ? seoData.descHi : seoData.descEn,
        keywords: isHindi ? seoData.keywordsHi : seoData.keywordsEn,
        canonicalPath: '/products',
        ogImage: '/images/social/og-products.jpg',
      }}
    >
      {/* 1. Agricultural Catalogue Asymmetrical Hero (Warm Off-White) */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 bg-[#F7F6EF] text-[#14251A] overflow-hidden border-b border-[#103D28]/10">
        <div className="absolute inset-0 bg-grain opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Catalogue Editorial Introduction (lg:col-span-7) */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#103D28]/10 text-xs font-mono font-bold uppercase tracking-wider text-[#103D28] border border-[#103D28]/15 mb-4">
                <Boxes className="w-3.5 h-3.5 text-[#1D603A]" />
                <span>{isHindi ? 'कृषि उत्पाद सूची • प्रमाणित आदान' : 'FARM INPUT CATALOGUE • CERTIFIED SUPPLIES'}</span>
              </div>

              <h1
                className={`${
                  isHindi ? 'font-hindi leading-[1.38] sm:leading-[1.42]' : 'font-sans leading-tight'
                } text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#082B1C] mb-4 tracking-tight`}
              >
                {isHindi ? 'खेती के हर चरण के लिए प्रामाणिक उत्पाद' : 'Essential Agricultural Inputs for Every Season'}
              </h1>

              <p
                className={`${
                  isHindi ? 'font-hindi text-base sm:text-lg font-semibold' : 'font-sans text-base sm:text-lg font-semibold'
                } text-[#1D603A] mb-3`}
              >
                {isHindi
                  ? 'उर्वरक, बीज, फसल सुरक्षा और पौध पोषण — सभी मूल उत्पाद एक ही केंद्र पर।'
                  : 'Fertilizers, certified seeds, crop protection, and plant nutrition under one roof.'}
              </p>

              <p
                className={`${
                  isHindi ? 'font-hindi text-sm sm:text-base leading-relaxed' : 'font-sans text-sm sm:text-base'
                } text-[#657266] mb-6 max-w-xl leading-relaxed`}
              >
                {isHindi
                  ? 'मिट्टी की उर्वरता बढ़ाने से लेकर बालियों में दाना भराव तक — वर्मा खाद भंडार पर उपलब्ध सभी सामग्री सीधे मान्यता प्राप्त कंपनियों से आती है, जिससे खेत में शत-प्रतिशत प्रभाव मिलता है।'
                  : 'From soil preparation to harvest grain filling — every product at Verma Khad Bhandar is sourced from certified manufacturers to guarantee complete field efficacy.'}
              </p>

              {/* 4 Category Quick Jump Badges */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#103D28]/10 w-full">
                {filterTabs.slice(1).map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setSelectedFilter(tab.id);
                      document.getElementById('catalog-view')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white border border-[#103D28]/12 text-[#103D28] hover:bg-[#103D28] hover:text-white transition-all shadow-2xs cursor-pointer"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#83B83D]" />
                    <span className={isHindi ? 'font-hindi' : 'font-sans'}>
                      {isHindi ? tab.labelHi : tab.labelEn}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Authentic Crop Rows & Sealed Product Window (lg:col-span-5) */}
            <div className="lg:col-span-5 w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#103D28]/15 group bg-[#082B1C]">
                <img
                  src="/images/hero/hero-crop-rows-soil.webp"
                  alt="Enriched soil furrows and agricultural inputs"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[320px] sm:h-[380px] lg:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082B1C] via-[#082B1C]/50 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                  <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/20 text-[#B5D957] mb-2">
                    {isHindi ? 'प्रामाणिक सीलबंद लॉट' : 'CERTIFIED SEALED BATCHES'}
                  </span>
                  <p className={`${isHindi ? 'font-hindi text-xs sm:text-sm' : 'font-sans text-xs'} text-[#F7F6EF]/90 font-medium leading-relaxed`}>
                    "{isHindi
                      ? 'हम केवल प्रामाणिक और सीलबंद कृषि सामग्री ही उपलब्ध कराते हैं, ताकि किसान को फसल की पूरी सुरक्षा मिले।'
                      : 'We supply only authentic, factory-sealed inputs so farmers can cultivate with complete confidence.'}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Catalog View */}
      <section id="catalog-view" className="py-20 sm:py-28 bg-[#EDEFE5] text-[#14251A] relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Controls Bar: Filter Tabs & Search */}
          <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-4 sm:p-6 rounded-2xl border border-[#103D28]/10 shadow-sm">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {filterTabs.map((tab) => {
                const isActive = selectedFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedFilter(tab.id)}
                    className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                      isActive ? 'text-white' : 'text-[#14251A] bg-[#F7F6EF] hover:bg-[#103D28]/10'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-product-filter"
                        className="absolute inset-0 bg-[#103D28] rounded-xl shadow-md"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className={`relative z-10 ${isHindi ? 'font-hindi' : 'font-sans'}`}>
                      {isHindi ? tab.labelHi : tab.labelEn}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#657266]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isHindi ? 'उत्पाद खोजें...' : 'Search products...'}
                className={`w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#103D28]/20 bg-[#F7F6EF]/60 text-sm ${
                  isHindi ? 'font-hindi' : 'font-sans'
                } focus:outline-none focus:border-[#83B83D]`}
              />
            </div>
          </div>

          {/* Grid Layout */}
          {filteredCategories.length > 0 ? (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
            >
              {filteredCategories.map((category) => {
                const Icon = iconMap[category.icon as keyof typeof iconMap] || Sprout;
                const activeCategoryTitle = isHindi ? category.titleHi : category.titleEn;
                const activeDescription = isHindi ? category.descriptionHi : category.descriptionEn;
                const activeTag = isHindi ? category.categoryTagHi : category.categoryTagEn;
                const activeHighlights = isHindi ? category.highlightsHi : category.highlightsEn;

                return (
                  <motion.div key={category.id} variants={fadeUp} className="h-full">
                    <Tilt max={3} className="h-full rounded-2xl">
                      <div className="rounded-2xl bg-white border border-[#103D28]/12 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full group hover:border-[#83B83D]/40">
                        {/* Photographic Header */}
                        <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-[#082B1C]">
                          <img
                            src={category.image}
                            alt={category.imageAlt}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#082B1C] via-[#082B1C]/55 to-black/30" />

                          <div className="absolute inset-x-6 top-6 flex items-center justify-between z-10">
                            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md border border-white/20 text-[#B5D957]">
                              {activeTag}
                            </span>
                            <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-[#B5D957] group-hover:text-[#082B1C] transition-colors">
                              <ArrowUpRight className="w-5 h-5" />
                            </div>
                          </div>

                          <div className="absolute inset-x-6 bottom-6 z-10">
                            <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center mb-2.5 text-[#E8B94F] border border-white/10">
                              <Icon className="w-5 h-5" />
                            </div>
                            <h3
                              className={`${
                                isHindi ? 'font-hindi leading-[1.38]' : 'font-sans leading-tight'
                              } text-2xl sm:text-3xl font-extrabold text-white`}
                            >
                              {activeCategoryTitle}
                            </h3>
                          </div>
                        </div>

                        {/* Editorial Product Details */}
                        <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                          <div>
                            <p
                              className={`${
                                isHindi ? 'font-hindi' : 'font-sans'
                              } text-sm sm:text-base text-[#14251A] leading-relaxed mb-6 font-medium`}
                            >
                              {activeDescription}
                            </p>

                            <div className="space-y-2 mb-6">
                              <span
                                className={`text-xs font-mono font-bold uppercase tracking-wider text-[#657266] block ${
                                  isHindi ? 'font-hindi' : 'font-sans'
                                }`}
                              >
                                {isHindi ? 'मुख्य विशेषताएं:' : 'Key Characteristics:'}
                              </span>
                              <div className="flex flex-wrap gap-2">
                                {activeHighlights.map((h, i) => (
                                  <span
                                    key={i}
                                    className={`px-3 py-1 rounded-full text-xs ${
                                      isHindi ? 'font-hindi' : 'font-sans'
                                    } font-medium bg-[#103D28]/5 text-[#103D28] border border-[#103D28]/10`}
                                  >
                                    {h}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="pt-4 border-t border-[#103D28]/10 flex items-center justify-between">
                            <Magnetic strength={0.2}>
                              <a
                                href={getWhatsAppLink(activeCategoryTitle)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#103D28] hover:text-[#83B83D] transition-colors"
                              >
                                <MessageCircle className="w-4 h-4 text-[#83B83D]" />
                                <span className={isHindi ? 'font-hindi' : 'font-sans'}>
                                  {isHindi
                                    ? 'उपलब्धता व परामर्श हेतु व्हाट्सएप करें'
                                    : 'Inquire Availability via WhatsApp'}
                                </span>
                              </a>
                            </Magnetic>
                          </div>
                        </div>
                      </div>
                    </Tilt>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl border border-[#103D28]/10">
              <HelpCircle className="w-12 h-12 text-[#657266] mx-auto mb-3" />
              <h4
                className={`${
                  isHindi ? 'font-hindi' : 'font-sans'
                } text-lg font-bold text-[#14251A] mb-1`}
              >
                {isHindi ? 'कोई उत्पाद श्रेणी नहीं मिली' : 'No product categories found'}
              </h4>
              <p className={`text-xs text-[#657266] ${isHindi ? 'font-hindi' : 'font-sans'}`}>
                {isHindi
                  ? 'कृपया अलग खोज शब्द या फ़िल्टर का प्रयास करें।'
                  : 'Please try different search terms or clear your filter.'}
              </p>
            </div>
          )}

          {/* Contextual Agronomic Guidance & Store Inquiries Callout */}
          <div className="mt-16 mb-16 p-8 rounded-3xl bg-white border border-[#103D28]/12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-left">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#83B83D] block mb-1">
                {isHindi ? 'फसल अनुसार सही उपयोग' : 'BALANCED NUTRIENT ADVICE'}
              </span>
              <h3 className={`${isHindi ? 'font-hindi text-xl sm:text-2xl font-bold' : 'font-sans text-lg sm:text-xl font-bold'} text-[#14251A] mb-2`}>
                {isHindi ? 'फसल अवस्था एवं मौसम अनुसार सलाह चाहिए?' : 'Need Crop-Stage Advice or Bulk Inquiries?'}
              </h3>
              <p className={`${isHindi ? 'font-hindi text-sm' : 'font-sans text-xs sm:text-sm'} text-[#657266] leading-relaxed`}>
                {isHindi
                  ? 'रबी, खरीफ और जायद की फसलों के लिए सही उर्वरक मात्रा व स्प्रे समय जानने के लिए हमारा कृषि मार्गदर्शन देखें, अथवा उपलब्धता हेतु सीधे संपर्क करें।'
                  : 'Explore our seasonal crop schedules and balanced NPK guidelines, or get in touch with our team directly for certified batch availability.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
              <Link
                to="/agriculture"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#103D28] hover:bg-[#1D603A] text-white text-xs sm:text-sm font-bold shadow-sm transition-colors"
              >
                <span>{isHindi ? 'कृषि मार्गदर्शन देखें' : 'Agriculture Guidance'}</span>
                <ArrowRight className="w-4 h-4 text-[#B5D957]" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#F7F6EF] hover:bg-[#103D28]/10 text-[#103D28] text-xs sm:text-sm font-bold border border-[#103D28]/20 transition-colors"
              >
                <span>{isHindi ? 'संपर्क करें' : 'Contact Verma Khad Bhandar'}</span>
              </Link>
            </div>
          </div>

          {/* Interactive Farm Guidance Calculator Widget */}
          <FarmCalculator />
        </div>
      </section>
    </PageTransition>
  );
};
