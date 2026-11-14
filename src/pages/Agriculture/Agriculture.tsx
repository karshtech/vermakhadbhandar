import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Sprout, ShieldCheck, SunMedium, BookOpen, ChevronDown, AlertCircle, ArrowDown, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PageTransition } from '../../components/common/PageTransition';
import { SectionHeading } from '../../components/common/SectionHeading';
import { SeasonalCalendar } from '../../components/SeasonalCalendar';
import { fadeUp, staggerContainer } from '../../animations/motionVariants';
import { ROUTE_SEO } from '../../config/seo';
import { useLanguage } from '../../i18n/LanguageProvider';

interface KnowledgeTopic {
  id: string;
  icon: typeof Layers;
  image: string;
  titleHi: string;
  titleEn: string;
  descHi: string;
  descEn: string;
  tipsHi: string[];
  tipsEn: string[];
}

const TOPICS: KnowledgeTopic[] = [
  {
    id: 'soil',
    icon: Layers,
    image: '/images/hero/hero-crop-rows-soil.webp',
    titleHi: 'मृदा स्वास्थ्य एवं प्रबंधन',
    titleEn: 'Soil Health & Fertility Management',
    descHi: 'स्वस्थ मिट्टी ही अधिक पैदावार की नींव है। रासायनिक खादों के साथ जैविक तत्वों का संतुलन मिट्टी में जलधारण क्षमता और केंचुओं की गतिविधि को बढ़ाता है।',
    descEn: 'Healthy soil with balanced pH, organic matter, and proper aeration forms the enduring foundation for resilient crop root systems.',
    tipsHi: [
      'नियमित अंतराल पर मिट्टी की जांच कराएं और पोषक तत्वों की कमी समझें।',
      'संतुलित रूप से गोबर की सड़ी खाद या वर्मीकम्पोस्ट का प्रयोग करें।',
      'गहरी जुताई के बाद खेत को धूप लगने दें जिससे हानिकारक कीट नष्ट हों।',
    ],
    tipsEn: [
      'Conduct periodic soil tests to understand nutrient deficiencies and pH levels.',
      'Incorporate well-decomposed farmyard manure or vermicompost to enrich organic matter.',
      'Allow deep summer plowing to expose soil to sunlight and eliminate soil-borne pests.',
    ],
  },
  {
    id: 'nutrition',
    icon: Sprout,
    image: '/images/hero/hero-crops-close-up.webp',
    titleHi: 'फसल पोषण एवं NPK संतुलन',
    titleEn: 'Balanced Crop Nutrition (NPK)',
    descHi: 'फसल को विभिन्न अवस्थाओं में नाइट्रोजन (N), फॉस्फोरस (P) और पोटाश (K) के साथ जिंक, सल्फर और बोरॉन जैसे सूक्ष्म तत्वों की संतुलित आवश्यकता होती है।',
    descEn: 'Crops require timely ratios of Nitrogen (N), Phosphorus (P), and Potash (K), supplemented with secondary elements like Zinc, Sulphur, and Boron.',
    tipsHi: [
      'केवल यूरिया पर निर्भर रहने की बजाय फॉस्फोरस और पोटाश का समय पर समावेश करें।',
      'सूक्ष्म पोषक तत्वों (जिंक, सल्फर) की कमी से होने वाले पीलेपन पर नजर रखें।',
      'फूल व फल बनते समय पर्णीय छिड़काव (Foliar Spray) अत्यंत लाभकारी होता है।',
    ],
    tipsEn: [
      'Avoid sole reliance on Urea; integrate basal Phosphorus and Potassium at recommended timings.',
      'Monitor foliage closely for zinc or sulphur shortages indicated by early leaf yellowing.',
      'Apply water-soluble foliar sprays during flowering and pod development for rapid nutrient uptake.',
    ],
  },
  {
    id: 'seeds',
    icon: SunMedium,
    image: '/images/hero/stages/stage2-sowing-seeds.webp',
    titleHi: 'प्रमाणित बीज चयन एवं उपचार',
    titleEn: 'Certified Seed Selection & Seed Treatment',
    descHi: 'सही किस्म और उच्च अंकुरण क्षमता वाले प्रमाणित बीज फसल को शुरुआत से ही मजबूती और रोगों से लड़ने की शक्ति प्रदान करते हैं।',
    descEn: 'Certified, rigorously tested seed varieties provide higher germination rates and early disease tolerance for uniform emergence.',
    tipsHi: [
      'हमेशा विश्वसनीय स्रोत से प्रमाणित (Certified) बीज ही खरीदें।',
      'बुवाई से पूर्व बीज को अनुशंसित फफूंदनाशक से उपचारित (Seed Treatment) अवश्य करें।',
      'क्षेत्र की जलवायु और सिंचाई साधनों के अनुकूल किस्मों का ही चयन करें।',
    ],
    tipsEn: [
      'Always purchase authentic, certified seed lots from authorized agricultural distributors.',
      'Treat seed batches with recommended fungicides or bio-agents prior to field sowing.',
      'Select seed cultivars matched to regional rainfall, temperature, and irrigation availability.',
    ],
  },
  {
    id: 'protection',
    icon: ShieldCheck,
    image: '/images/hero/stages/stage3-irrigation-water.webp',
    titleHi: 'सुरक्षित फसल सुरक्षा एवं कीट प्रबंधन',
    titleEn: 'Responsible Crop Protection (IPM)',
    descHi: 'कीटनाशकों का प्रयोग केवल आवश्यकता पड़ने पर, सही मात्रा और उचित समय पर ही करना चाहिए ताकि मित्र कीट सुरक्षित रहें और लागत कम हो।',
    descEn: 'Integrated Pest Management emphasizes regular scouting, preventative measures, and strict label compliance to protect beneficial insects.',
    tipsHi: [
      'कीट दिखने पर तुरंत अत्यधिक मात्रा में दवा न डालें, पहले प्रकोप का स्तर समझें।',
      'स्प्रे करते समय सुरक्षा उपकरण (मास्क, दस्ताने) का प्रयोग अनिवार्य रूप से करें।',
      'दवा की शीशी पर लिखे निर्देशों और प्रतीक्षा अवधि (Waiting Period) का पालन करें।',
    ],
    tipsEn: [
      'Scout crop foliage before spraying; avoid preventative chemical overdose if thresholds are low.',
      'Always equip safety masks and gloves when handling and spraying agricultural chemicals.',
      'Strictly observe manufacturer dosage charts and required harvest waiting intervals.',
    ],
  },
];

interface FAQItem {
  qHi: string;
  qEn: string;
  aHi: string;
  aEn: string;
}

const FAQS: FAQItem[] = [
  {
    qHi: 'यूरिया और डीएपी का प्रयोग किस समय करना सबसे उपयुक्त होता है?',
    qEn: 'What is the optimal timing for DAP and Urea application?',
    aHi: 'डीएपी (DAP) का उपयोग सामान्यतः बुवाई के समय बेसल डोज के रूप में मिट्टी में मिलाकर किया जाता है ताकि जड़ों को शुरू से ही फॉस्फोरस मिले। यूरिया को फसल की वृद्धि अवस्थाओं में टुकड़ों में (Split Doses) सिंचाई के साथ देना सर्वोत्तम माना जाता है।',
    aEn: 'DAP is applied as a basal application during sowing so roots receive early phosphorus. Urea is most effectively delivered in split doses during active vegetative growth accompanied by irrigation.',
  },
  {
    qHi: 'फसल की पत्तियों में पीलापन आने का क्या कारण हो सकता है?',
    qEn: 'What causes yellowing in crop leaves?',
    aHi: 'पत्तियों का पीलापन नाइट्रोजन की कमी, जिंक या सल्फर की अनुपलब्धता, अत्यधिक जलभराव अथवा फफूंद जनित रोगों के कारण हो सकता है। सटीक कारण जानने हेतु दुकान पर आकर अथवा कृषि विशेषज्ञ से परामर्श लें।',
    aEn: 'Yellowing can stem from nitrogen depletion, zinc or sulphur unavailability, standing waterlogging, or early fungal infection. Consulting our store helps pinpoint the precise corrective action.',
  },
  {
    qHi: 'बीज उपचार (Seed Treatment) क्यों आवश्यक है?',
    qEn: 'Why is seed treatment important before sowing?',
    aHi: 'बीज उपचार से मिट्टी में मौजूद हानिकारक फफूंद और भूमिगत कीट अंकुरित हो रहे पौधे को नुकसान नहीं पहुँचा पाते, जिससे अंकुरण प्रतिशत बढ़ता है और शुरुआती फसल स्वस्थ रहती है।',
    aEn: 'Seed treatment coats delicate embryos, preventing soil-borne pathogens and subterranean insects from damaging seedlings and guaranteeing high germination percentage.',
  },
];

export const Agriculture: React.FC = () => {
  const { language } = useLanguage();
  const isHindi = language === 'hi';
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const seoData = ROUTE_SEO['/agriculture'];

  return (
    <PageTransition
      seo={{
        title: isHindi ? seoData.titleHi : seoData.titleEn,
        description: isHindi ? seoData.descHi : seoData.descEn,
        keywords: isHindi ? seoData.keywordsHi : seoData.keywordsEn,
        canonicalPath: '/agriculture',
        ogImage: '/images/social/og-agriculture.jpg',
      }}
    >
      {/* 1. Knowledge Magazine Spread Hero (Deep Forest Editorial Spread) */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-24 bg-[#082B1C] text-white overflow-hidden border-b border-[#1D603A]/40">
        <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none" />
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-[#83B83D]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Zone: Magazine Editorial Article Heading (lg:col-span-7) */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/45 border border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-[#B5D957] mb-4 backdrop-blur-md">
                <BookOpen className="w-3.5 h-3.5 text-[#E8B94F]" />
                <span>{isHindi ? 'कृषि ज्ञान पत्रिका • व्यावहारिक सूत्र' : 'FARMING JOURNAL • FIELD-TESTED ADVISORY'}</span>
              </div>

              <h1
                className={`${
                  isHindi ? 'font-hindi leading-[1.38] sm:leading-[1.42]' : 'font-sans leading-tight'
                } text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight`}
              >
                {isHindi ? 'खेती में समझदारी, अधिक पैदावार की तैयारी' : 'Smart Agronomic Decisions for Bountiful Harvests'}
              </h1>

              <p
                className={`${
                  isHindi ? 'font-hindi text-lg sm:text-xl font-bold' : 'font-sans text-lg sm:text-xl font-semibold'
                } text-[#E8B94F] mb-4`}
              >
                {isHindi
                  ? 'हर मौसम, हर फसल के लिए व्यावहारिक कृषि मार्गदर्शन।'
                  : 'Practical Agronomic Guidance for Healthier Crops.'}
              </p>

              <p
                className={`${
                  isHindi ? 'font-hindi text-sm sm:text-base leading-relaxed' : 'font-sans text-sm sm:text-base leading-normal'
                } text-[#F7F6EF]/85 mb-8 max-w-xl leading-relaxed`}
              >
                {isHindi
                  ? 'मौसम के अनुसार बुवाई, संतुलित खाद-बीज का प्रयोग और समय पर कीट नियंत्रण ही अच्छी फसल की कुंजी है। जानिए आधुनिक व वैज्ञानिक कृषि पद्धतियां जो आपकी लागत कम कर पैदावार बढ़ाएं।'
                  : 'Timely sowing, balanced nutrient application, and responsible pest scouting are the keys to a flourishing harvest. Explore seasonal recommendations and agronomic guides designed for farm prosperity.'}
              </p>

              {/* Magazine Table of Contents Anchors */}
              <div className="flex flex-wrap gap-2.5 pt-4 border-t border-white/15 w-full">
                <a
                  href="#agronomic-pillars"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-black/40 border border-white/15 text-[#F7F6EF] hover:border-[#83B83D] transition-colors"
                >
                  <span className="font-mono text-[#B5D957] font-bold">01.</span>
                  <span className={isHindi ? 'font-hindi' : 'font-sans'}>
                    {isHindi ? 'चार कृषि स्तंभ' : '4 Agronomic Pillars'}
                  </span>
                </a>

                <a
                  href="#crop-calendar"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-black/40 border border-white/15 text-[#F7F6EF] hover:border-[#83B83D] transition-colors"
                >
                  <span className="font-mono text-[#E8B94F] font-bold">02.</span>
                  <span className={isHindi ? 'font-hindi' : 'font-sans'}>
                    {isHindi ? 'मौसमी फसल कैलेंडर' : 'Seasonal Calendar'}
                  </span>
                </a>

                <a
                  href="#farmer-faqs"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-black/40 border border-white/15 text-[#F7F6EF] hover:border-[#83B83D] transition-colors"
                >
                  <span className="font-mono text-[#83B83D] font-bold">03.</span>
                  <span className={isHindi ? 'font-hindi' : 'font-sans'}>
                    {isHindi ? 'किसान प्रश्नोत्तरी' : 'Farmer Inquiries'}
                  </span>
                </a>
              </div>
            </div>

            {/* Right Zone: Knowledge Feature Photographic Spread (lg:col-span-5) */}
            <div className="lg:col-span-5 w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#83B83D]/30 group bg-[#103D28]">
                <img
                  src="/images/hero/stages/stage3-irrigation-water.webp"
                  alt="Irrigation management in agricultural crops"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[320px] sm:h-[380px] lg:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082B1C] via-[#082B1C]/50 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                  <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/20 text-[#B5D957] mb-2">
                    {isHindi ? 'अध्याय: जल एवं पोषण प्रबंधन' : 'CHAPTER: WATER & NUTRIENT FLOW'}
                  </span>
                  <p className={`${isHindi ? 'font-hindi text-xs sm:text-sm' : 'font-sans text-xs'} text-[#F7F6EF]/90 font-medium leading-relaxed`}>
                    "{isHindi
                      ? 'संतुलित जल प्रबंधन और सही समय पर उर्वरक का प्रयोग पौधे की जड़ों को मजबूत बनाता है।'
                      : 'Balanced irrigation combined with timely basal fertilization builds robust root architectures.'}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Topics Grid */}
      <section id="agronomic-pillars" className="py-24 sm:py-32 bg-[#F7F6EF] text-[#14251A] relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrowEn="AGRONOMIC PILLARS"
            eyebrowHi="कृषि प्रबंधन"
            titleHi="सफल खेती के चार प्रमुख चरण"
            titleEn="Four Essential Pillars of Crop Management"
            subtitleHi="प्रत्येक चरण पर सही निर्णय ही अंत में बंपर उपज और गुणवत्ता सुनिश्चित करता है।"
            subtitleEn="Sound decisions at each growth phase guarantee bumper yields and premium crop quality."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-20"
          >
            {TOPICS.map((topic) => {
              const Icon = topic.icon;
              const activeTitle = isHindi ? topic.titleHi : topic.titleEn;
              const activeDesc = isHindi ? topic.descHi : topic.descEn;
              const activeTips = isHindi ? topic.tipsHi : topic.tipsEn;

              return (
                <motion.div
                  key={topic.id}
                  variants={fadeUp}
                  className="rounded-3xl bg-white border border-[#103D28]/12 overflow-hidden shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    {/* Magazine Photographic Header */}
                    <div className="relative h-48 sm:h-52 overflow-hidden">
                      <img
                        src={topic.image}
                        alt={activeTitle}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

                      <div className="absolute top-4 left-4 z-10">
                        <div className="w-10 h-10 rounded-xl bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                          <Icon className="w-5 h-5 text-[#B5D957]" />
                        </div>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 z-10">
                        <h3
                          className={`${
                            isHindi ? 'font-hindi leading-[1.38]' : 'font-sans leading-tight'
                          } text-xl sm:text-2xl font-extrabold text-white`}
                        >
                          {activeTitle}
                        </h3>
                      </div>
                    </div>

                    {/* Magazine Text Content */}
                    <div className="p-6 sm:p-7">
                      <p
                        className={`${
                          isHindi ? 'font-hindi' : 'font-sans'
                        } text-sm sm:text-base text-[#14251A] leading-relaxed mb-6 font-medium`}
                      >
                        {activeDesc}
                      </p>

                      <div className="space-y-2.5 pt-4 border-t border-[#103D28]/10">
                        <span
                          className={`${
                            isHindi ? 'font-hindi' : 'font-sans'
                          } text-xs font-mono font-bold text-[#103D28] uppercase tracking-wider block`}
                        >
                          {isHindi ? 'महत्वपूर्ण कृषि सुझाव:' : 'Key Agronomic Practices:'}
                        </span>
                        {activeTips.map((tip, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-[#657266]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#83B83D] mt-1.5 flex-shrink-0" />
                            <span className={`${isHindi ? 'font-hindi' : 'font-sans'} leading-relaxed`}>
                              {tip}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Safety Disclaimer Banner */}
          <div className="mb-20 p-6 sm:p-8 rounded-3xl bg-[#EDEFE5] border-2 border-[#83B83D]/40 flex items-start gap-4">
            <AlertCircle className="w-7 h-7 text-[#103D28] flex-shrink-0 mt-1" />
            <div>
              <h4 className={`${isHindi ? 'font-hindi' : 'font-sans'} font-bold text-base text-[#103D28] mb-1`}>
                {isHindi ? 'जिम्मेदार उपयोग एवं सुरक्षा निर्देश' : 'Responsible Usage & Safety Notice'}
              </h4>
              <p className={`${isHindi ? 'font-hindi' : 'font-sans'} text-xs sm:text-sm text-[#14251A] leading-relaxed`}>
                {isHindi
                  ? 'कृषि रसायनों व उर्वरकों का प्रयोग करते समय हमेशा उत्पाद के पैकेट पर अंकित सरकारी निर्देशों एवं सुरक्षा मानकों का अक्षरशः पालन करें। किसी भी दवा की मात्रा मौसम, फसल की उम्र और मिट्टी की स्थिति पर निर्भर करती है। विस्तृत सलाह हेतु दुकान पर पधारें।'
                  : 'Always strictly observe manufacturer safety instructions and certified dosage guidelines printed on product packaging. Application rates depend on weather, plant maturity, and soil condition. Visit our store for tailored advice.'}
              </p>
            </div>
          </div>

          {/* Seasonal Crop Calendar */}
          <div id="crop-calendar" className="mb-24">
            <SeasonalCalendar />
          </div>

          {/* Frequently Asked Questions */}
          <div id="farmer-faqs">
            <SectionHeading
              eyebrowEn="FARMER QUESTIONS"
              eyebrowHi="अक्सर पूछे जाने वाले सवाल"
              titleHi="किसानों के प्रमुख प्रश्न और समाधान"
              titleEn="Common Inquiries & Expert Guidance"
              subtitleHi="कृषि उत्पादों और फसल प्रबंधन से जुड़े सामान्य संशयों का स्पष्ट समाधान।"
              subtitleEn="Clear answers to common questions regarding crop nutrition and protection."
            />

            <div className="max-w-3xl mx-auto space-y-4">
              {FAQS.map((faq, index) => {
                const isOpen = openFaq === index;
                const question = isHindi ? faq.qHi : faq.qEn;
                const answer = isHindi ? faq.aHi : faq.aEn;

                return (
                  <div key={index} className="rounded-2xl bg-white border border-[#103D28]/10 overflow-hidden shadow-sm">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-[#F7F6EF]/50 transition-colors"
                    >
                      <div>
                        <h4 className={`${isHindi ? 'font-hindi' : 'font-sans'} text-base sm:text-lg font-bold text-[#14251A]`}>
                          {question}
                        </h4>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-[#103D28] transition-transform duration-300 flex-shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-5 pb-5 pt-2 border-t border-[#103D28]/10 bg-[#F7F6EF]/30">
                            <p className={`${isHindi ? 'font-hindi' : 'font-sans'} text-sm text-[#14251A] leading-relaxed font-medium`}>
                              {answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contextual Link to Agricultural Products */}
          <div className="mt-20 p-8 rounded-3xl bg-[#082B1C] text-white border border-[#83B83D]/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-left">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#B5D957] block mb-1">
                {isHindi ? 'प्रमाणित कृषि आदान' : 'CERTIFIED AGRICULTURAL INPUTS'}
              </span>
              <h3 className={`${isHindi ? 'font-hindi text-xl sm:text-2xl font-bold' : 'font-sans text-lg sm:text-xl font-bold'} text-white mb-2`}>
                {isHindi ? 'सलाह अनुसार आवश्यक खाद व बीज खोज रहे हैं?' : 'Looking for Recommended Fertilizers & Seeds?'}
              </h3>
              <p className={`${isHindi ? 'font-hindi text-sm' : 'font-sans text-xs sm:text-sm'} text-[#F7F6EF]/85 leading-relaxed`}>
                {isHindi
                  ? 'यूरिया, डीएपी, एनपीके, पोटाश, प्रमाणित बीज और फसल सुरक्षा रसायनों की संपूर्ण सूची एवं विवरण हमारे उत्पाद कैटलॉग में देखें।'
                  : 'Explore our complete catalog of certified fertilizers, seed varieties, insecticides, and plant nutrition tonics.'}
              </p>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-[#082B1C] bg-gradient-to-r from-[#B5D957] to-[#83B83D] hover:from-[#E8B94F] hover:to-[#B5D957] transition-all shadow-md hover:shadow-lg flex-shrink-0"
            >
              <span className={isHindi ? 'font-hindi text-sm font-extrabold' : 'font-sans text-sm font-bold'}>
                {isHindi ? 'कृषि उत्पाद कैटलॉग देखें' : 'View Products Catalog'}
              </span>
              <ArrowRight className="w-4 h-4 text-[#082B1C]" />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
