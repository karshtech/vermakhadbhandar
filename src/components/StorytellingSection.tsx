import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { getLenis } from '../hooks/useSmoothScroll';
import { useReducedMotionPref } from '../hooks/useMedia';
import { useLanguage } from '../i18n/LanguageProvider';

gsap.registerPlugin(ScrollTrigger);

interface StageData {
  id: string;
  stageNumber: string;
  stageNameEn: string;
  stageNameHi: string;
  taglineHi: string;
  taglineEn: string;
  headlineHi: string;
  headlineEn: string;
  subtextHi: string;
  subtextEn: string;
  image: string;
  imageAlt: string;
  photoBadgeHi: string;
  photoBadgeEn: string;
  accentColor: string;
  bgGradient: string;
  details: { labelEn: string; labelHi: string; valueEn: string; valueHi: string }[];
}

const STAGES: StageData[] = [
  {
    id: 'soil',
    stageNumber: '01',
    stageNameEn: 'SOIL FOUNDATION',
    stageNameHi: 'मृदा तैयारी एवं पोषण',
    taglineHi: 'प्रथम अध्याय • भूमि शोधन',
    taglineEn: 'CHAPTER 01 • LAND PREPARATION',
    headlineHi: 'अच्छी खेती की शुरुआत, सशक्त मिट्टी से।',
    headlineEn: 'Every Great Harvest Begins in the Soil.',
    subtextHi:
      'संतुलित खाद, जैविक तत्व और उपयुक्त मृदा सुधारक मिट्टी की उर्वरा शक्ति को पुनर्जीवित करते हैं, जिससे फसल की जड़ें गहरी और सशक्त बनती हैं।',
    subtextEn:
      'Balanced organic enrichment and certified fertilizers restore soil microbial vitality, creating the deep root foundation essential for weather resilience.',
    image: '/images/hero/stages/stage1-ploughing-tractor.webp',
    imageAlt: 'Tractor ploughing fertile Indian agricultural soil',
    photoBadgeHi: 'गहरी जुताई एवं पाटा • समृद्ध दोमट मिट्टी',
    photoBadgeEn: 'Deep Ploughing & Tilth • Rich Loamy Soil',
    accentColor: '#E8B94F',
    bgGradient: 'linear-gradient(135deg, #1C120B 0%, #120B06 60%, #082B1C 100%)',
    details: [
      {
        labelHi: 'मृदा वातन',
        labelEn: 'Soil Aeration',
        valueHi: 'उत्तम भुरभुरापन व वायु संचार',
        valueEn: 'Optimal Porosity & Gas Exchange',
      },
      {
        labelHi: 'संतुलित जैविक संरचना',
        labelEn: 'Organic Structure',
        valueHi: 'गोबर खाद व सूक्ष्म जीवाणु संवर्धन',
        valueEn: 'Microbial & Humus Enrichment',
      },
      {
        labelHi: 'जड़ विकास क्षेत्र',
        labelEn: 'Rooting Zone',
        valueHi: 'गहरी व मजबूत प्राथमिक जड़ों का आधार',
        valueEn: 'Deep Primary Taproot Stability',
      },
    ],
  },
  {
    id: 'growth',
    stageNumber: '02',
    stageNameEn: 'VIGOROUS GROWTH',
    stageNameHi: 'सशक्त वानस्पतिक विकास',
    taglineHi: 'द्वितीय अध्याय • फसल सुरक्षा व पोषण',
    taglineEn: 'CHAPTER 02 • NUTRITION & DEFENSE',
    headlineHi: 'समयबद्ध पोषण से फसल बने रोगमुक्त व घनी।',
    headlineEn: 'Targeted Nutrition for Dense, Resilient Canopies.',
    subtextHi:
      'उचित NPK संतुलन, जिंक, सल्फर और सही समय पर रोग नियंत्रण से पौधे विपरीत मौसम में भी तेजी से कल्ले फोड़ते हैं और सशक्त रहते हैं।',
    subtextEn:
      'Timely macronutrient top-dressing, secondary zinc and sulphur delivery, and vigilant scouting protect tillers and promote lush green chlorophyll.',
    image: '/images/hero/stages/stage5-crop-growth.webp',
    imageAlt: 'Vibrant green healthy standing crop field',
    photoBadgeHi: 'सक्रिय कल्ले फूटने की अवस्था • सघन हरियाली',
    photoBadgeEn: 'Active Tillering Stage • Chlorophyll Rich',
    accentColor: '#83B83D',
    bgGradient: 'linear-gradient(135deg, #0A2417 0%, #061A10 60%, #04140C 100%)',
    details: [
      {
        labelHi: 'कल्ले व शाखाएं',
        labelEn: 'Productive Tillers',
        valueHi: 'मजबूत तना व अधिकतम कल्ले',
        valueEn: 'Sturdy Stalks & High Tiller Count',
      },
      {
        labelHi: 'पर्णीय पोषण',
        labelEn: 'Foliar Energy',
        valueHi: 'सूक्ष्म पोषक तत्वों का त्वरित छिड़काव',
        valueEn: 'Rapid Micronutrient Assimilation',
      },
      {
        labelHi: 'फसल सुरक्षा',
        labelEn: 'Crop Defense',
        valueHi: 'कीट-फफूंद से समयबद्ध रक्षा',
        valueEn: 'Targeted Pest & Fungal Control',
      },
    ],
  },
  {
    id: 'harvest',
    stageNumber: '03',
    stageNameEn: 'BOUNTIFUL HARVEST',
    stageNameHi: 'समृद्ध एवं चमकदार पैदावार',
    taglineHi: 'तृतीय अध्याय • मेहनत का फल',
    taglineEn: 'CHAPTER 03 • PROSPERITY & YIELD',
    headlineHi: 'चमकदार दाने, वजनदार उपज, संपन्न किसान।',
    headlineEn: 'Plump Grain Weight and Enduring Farmer Prosperity.',
    subtextHi:
      'सच्ची मेहनत और प्रामाणिक कृषि आदानों का सुखद परिणाम — दानेदार भराव, उत्तम चमक, मंडी में सर्वोच्च भाव और किसान परिवार की मुस्कान।',
    subtextEn:
      'The proud culmination of genuine agricultural inputs: complete grain filling, superior test weight, premium market realization, and farm family security.',
    image: '/images/hero/stages/stage6-harvest-golden.webp',
    imageAlt: 'Golden ripe crops ready for harvest under golden hour sun',
    photoBadgeHi: 'परिपक्व बालियां • 100% दाना भराव',
    photoBadgeEn: 'Ripe Golden Heads • 100% Grain Filling',
    accentColor: '#E8B94F',
    bgGradient: 'linear-gradient(135deg, #241804 0%, #170F02 60%, #082B1C 100%)',
    details: [
      {
        labelHi: 'दाना भराव',
        labelEn: 'Grain Plumpness',
        valueHi: 'बिना पैया के ठोस व भारी दाने',
        valueEn: 'Dense, Uniform Kernel Formation',
      },
      {
        labelHi: 'उत्तम चमक व रंग',
        labelEn: 'Produce Lustre',
        valueHi: 'पोटाश-बोरॉन से आकर्षक दमक',
        valueEn: 'Natural Sheen & Golden Hue',
      },
      {
        labelHi: 'मंडी में सर्वोच्च भाव',
        labelEn: 'Market Value',
        valueHi: 'ग्रेड-ए गुणवत्ता व लाभप्रद बिक्री',
        valueEn: 'Grade-A Realization & Farmer Profit',
      },
    ],
  },
];

export const StorytellingSection: React.FC = () => {
  const { language } = useLanguage();
  const isHindi = language === 'hi';

  const sectionRef = useRef<HTMLDivElement>(null);
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const reduced = useReducedMotionPref();

  useEffect(() => {
    if (reduced) return;

    const section = sectionRef.current;
    const pinContainer = pinContainerRef.current;
    const card1 = card1Ref.current;
    const card2 = card2Ref.current;
    const card3 = card3Ref.current;

    if (!section || !pinContainer || !card1 || !card2 || !card3) return;

    const ctx = gsap.context(() => {
      gsap.set([card1, card2, card3], {
        force3D: true,
        backfaceVisibility: 'hidden',
        transformPerspective: 1200,
        willChange: 'transform, opacity, filter',
      });

      // Initial card placements:
      gsap.set(card1, { yPercent: 0, opacity: 1, scale: 1, filter: 'brightness(1)' });
      gsap.set(card2, { yPercent: 110, opacity: 1, scale: 1, filter: 'brightness(1)' });
      gsap.set(card3, { yPercent: 110, opacity: 1, scale: 1, filter: 'brightness(1)' });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=2800',
          pin: pinContainer,
          pinSpacing: true,
          scrub: 1.0,
          anticipatePin: 1,
          fastScrollEnd: true,
          preventOverlaps: true,
          onUpdate: (self) => {
            const p = self.progress;
            const newStep = p < 0.35 ? 0 : p < 0.7 ? 1 : 2;
            setActiveStep((prev) => (prev !== newStep ? newStep : prev));
          },
        },
      });

      scrollTriggerRef.current = tl.scrollTrigger || null;

      // Phase 1: Card 1 Reading Plateau
      tl.to({}, { duration: 0.8 });

      // Phase 2: Card 2 covers Card 1
      tl.to(
        card1,
        {
          scale: 0.94,
          opacity: 0.35,
          y: -18,
          filter: 'brightness(0.7)',
          ease: 'power1.inOut',
          duration: 1.4,
        },
        'card2Cover'
      ).to(
        card2,
        {
          yPercent: 0,
          ease: 'power1.inOut',
          duration: 1.4,
        },
        'card2Cover'
      );

      // Phase 3: Card 2 Reading Plateau
      tl.to({}, { duration: 0.9 });

      // Phase 4: Card 3 covers Card 2
      tl.to(
        card1,
        {
          scale: 0.88,
          opacity: 0.15,
          y: -32,
          filter: 'brightness(0.5)',
          ease: 'power1.inOut',
          duration: 1.4,
        },
        'card3Cover'
      )
        .to(
          card2,
          {
            scale: 0.94,
            opacity: 0.35,
            y: -18,
            filter: 'brightness(0.7)',
            ease: 'power1.inOut',
            duration: 1.4,
          },
          'card3Cover'
        )
        .to(
          card3,
          {
            yPercent: 0,
            ease: 'power1.inOut',
            duration: 1.4,
          },
          'card3Cover'
        );

      // Phase 5: Card 3 Reading Plateau
      tl.to({}, { duration: 0.9 });

      // Phase 6: Exit buffer
      tl.to({}, { duration: 0.6 });
    }, section);

    return () => {
      ctx.revert();
    };
  }, [reduced]);

  const handleStageClick = (index: number) => {
    const st = scrollTriggerRef.current;
    if (!st) return;

    const progressTargets = [0.08, 0.5, 0.88];
    const targetProgress = progressTargets[index];
    const targetScroll = st.start + (st.end - st.start) * targetProgress;

    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(targetScroll, { duration: 1.2 });
    } else {
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
    }
  };

  const cardRefs = [card1Ref, card2Ref, card3Ref];

  return (
    <section id="story" ref={sectionRef} className="relative bg-[#05170F] text-[#F7F6EF]">
      {/* Pinned Screen Viewport */}
      <div
        ref={pinContainerRef}
        className={`relative ${
          reduced ? 'py-16' : 'h-[100dvh]'
        } w-full flex flex-col items-center justify-between overflow-hidden py-3 sm:py-5 lg:py-6`}
      >
        {/* Subtle Atmospheric Depth */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#83B83D]/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-grain opacity-15 pointer-events-none" />

        {/* Top Header & Interactive Editorial Nav */}
        <div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-1 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-center md:text-left">
            <span
              className={`text-[11px] font-mono font-bold uppercase tracking-widest text-[#B5D957] block mb-0.5 ${
                isHindi ? 'font-hindi' : 'font-sans'
              }`}
            >
              {isHindi ? 'कृषि यात्रा • तीन प्रमुख अध्याय' : 'AGRICULTURAL JOURNEY • THREE CHAPTERS'}
            </span>
            <h2
              className={`${
                isHindi ? 'font-hindi leading-snug' : 'font-sans leading-tight'
              } text-xl sm:text-2xl lg:text-3xl font-extrabold text-white`}
            >
              {isHindi
                ? 'बीज से लेकर समृद्ध फसल तक का संपूर्ण चक्र'
                : 'From Sown Seed to Bountiful Harvest'}
            </h2>
          </div>

          {/* Stepper Tabs - Clean Chapter Selectors */}
          <div className="flex items-center gap-1.5 sm:gap-2 bg-black/40 p-1 rounded-full border border-white/10 backdrop-blur-md">
            {STAGES.map((stg, idx) => {
              const isActive = idx === activeStep;
              return (
                <button
                  key={stg.id}
                  onClick={() => handleStageClick(idx)}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full transition-all duration-300 text-xs font-semibold cursor-pointer ${
                    isActive
                      ? 'bg-[#103D28] text-white border border-[#83B83D]/60 shadow-md scale-102'
                      : 'text-white/60 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                  aria-label={`Jump to ${isHindi ? stg.stageNameHi : stg.stageNameEn}`}
                >
                  <span className="font-mono text-[10px] text-[#E8B94F] font-bold">
                    0{idx + 1}
                  </span>
                  <span className={`${isHindi ? 'font-hindi' : 'font-sans'} text-xs hidden xs:inline`}>
                    {isHindi ? stg.stageNameHi.split(' ')[0] : stg.stageNameEn.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Pinned Stacking Deck Container */}
        <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6 lg:px-8 h-[520px] sm:h-[490px] md:h-[500px] flex items-center justify-center my-auto">
          {STAGES.map((stage, i) => {
            const cardRef = cardRefs[i];
            const isSoil = stage.id === 'soil';
            const isGrowth = stage.id === 'growth';
            const isHarvest = stage.id === 'harvest';

            return (
              <div
                key={stage.id}
                ref={cardRef}
                style={{
                  background: stage.bgGradient,
                  boxShadow:
                    '0 30px 80px -20px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.08)',
                  zIndex: (i + 1) * 10,
                }}
                className={`absolute inset-x-2 sm:inset-x-4 top-0 bottom-0 rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between text-white shadow-2xl origin-top backdrop-blur-xl ${
                  reduced ? 'relative mb-6' : ''
                }`}
              >
                {/* Editorial Inner Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 h-full w-full">
                  {/* Photo Section: Asymmetrical Editorial Framing */}
                  <div
                    className={`relative lg:col-span-5 h-44 sm:h-52 lg:h-full overflow-hidden ${
                      isGrowth ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <img
                      src={stage.image}
                      alt={stage.imageAlt}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                    />

                    {/* Gradient Overlay for seamless blend */}
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-black/20 to-[#0A1A11]/90" />

                    {/* Photo Captions / Field Identifier Pill */}
                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-black/65 backdrop-blur-md border border-white/20 text-[#F7F6EF]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B5D957]" />
                        <span className={isHindi ? 'font-hindi' : 'font-sans'}>
                          {isHindi ? stage.photoBadgeHi : stage.photoBadgeEn}
                        </span>
                      </span>
                    </div>

                    {/* Top Chapter Tag */}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                      <span className="font-mono text-[10px] font-bold tracking-wider px-2.5 py-0.5 rounded-md bg-black/50 text-[#E8B94F] border border-[#E8B94F]/30 uppercase">
                        {isHindi ? `अध्याय 0${i + 1}` : `CHAPTER 0${i + 1}`}
                      </span>
                    </div>
                  </div>

                  {/* Typography & Editorial Content Section */}
                  <div
                    className={`lg:col-span-7 p-5 sm:p-7 lg:p-8 flex flex-col justify-between ${
                      isGrowth ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    {/* Header Row */}
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                        <span
                          className={`text-xs font-mono font-bold uppercase tracking-wider text-[#B5D957] ${
                            isHindi ? 'font-hindi' : 'font-sans'
                          }`}
                        >
                          {isHindi ? stage.taglineHi : stage.taglineEn}
                        </span>
                        <span className="font-mono text-sm font-bold text-white/50">
                          0{i + 1} / 03
                        </span>
                      </div>

                      {/* Main Headline */}
                      <h3
                        className={`${
                          isHindi ? 'font-hindi leading-[1.38]' : 'font-sans leading-tight'
                        } text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-2.5`}
                      >
                        {isHindi ? stage.headlineHi : stage.headlineEn}
                      </h3>

                      {/* Descriptive Narrative */}
                      <p
                        className={`${
                          isHindi ? 'font-hindi leading-relaxed text-xs sm:text-sm' : 'font-sans leading-normal text-xs sm:text-sm'
                        } text-[#F7F6EF]/85 max-w-xl mb-4 font-normal`}
                      >
                        {isHindi ? stage.subtextHi : stage.subtextEn}
                      </p>
                    </div>

                    {/* Tactile Farm Detail Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-3 border-t border-white/10">
                      {stage.details.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col justify-between"
                        >
                          <span
                            className={`text-[11px] font-bold text-[#E8B94F] block mb-1 ${
                              isHindi ? 'font-hindi' : 'font-sans'
                            }`}
                          >
                            {isHindi ? item.labelHi : item.labelEn}
                          </span>
                          <span
                            className={`text-[11px] text-[#F7F6EF]/75 leading-tight ${
                              isHindi ? 'font-hindi' : 'font-sans'
                            }`}
                          >
                            {isHindi ? item.valueHi : item.valueEn}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Subtle Scroll Instruction Bar */}
        <div
          className={`relative z-20 pb-1 text-center text-xs text-[#B5D957]/80 flex items-center justify-center gap-1.5 ${
            isHindi ? 'font-hindi' : 'font-sans font-medium'
          }`}
        >
          <span>
            {isHindi
              ? 'स्क्रॉल करें: अगला कृषि अध्याय ऊपर आकर इसे कवर करेगा'
              : 'Scroll to progress through the agricultural chapters'}
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#E8B94F]" />
        </div>
      </div>
    </section>
  );
};
