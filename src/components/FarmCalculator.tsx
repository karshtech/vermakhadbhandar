import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Sprout, CheckCircle2, MessageCircle, HelpCircle, ArrowRight } from 'lucide-react';
import { businessConfig } from '../config/business';
import { Magnetic } from './common/MotionFX';
import { useLanguage } from '../i18n/LanguageProvider';

interface CropGuide {
  cropId: string;
  nameHi: string;
  nameEn: string;
  basalHi: string;
  basalEn: string;
  tilleringHi: string;
  tilleringEn: string;
  grainHi: string;
  grainEn: string;
  microTipHi: string;
  microTipEn: string;
}

const CROPS_DATA: CropGuide[] = [
  {
    cropId: 'wheat',
    nameHi: 'गेहूं',
    nameEn: 'Wheat',
    basalHi: 'बुवाई के समय: संतुलित डी.ए.पी. एवं पोटाश के साथ जिंक का उपयोग जड़ों को सशक्त बनाता है।',
    basalEn: 'Basal stage: Balanced DAP and Potash supplemented with Zinc for deep root initiation.',
    tilleringHi: 'पहली सिंचाई (21 दिन बाद): कल्ले फूटने के समय यूरिया का पहला छिड़काव और खरपतवार नियंत्रण आवश्यक है।',
    tilleringEn: 'Tillering (21 days): First split dose of Urea and timely weed management.',
    grainHi: 'गाभा एवं बालियां निकलते समय: 0:52:34 अथवा 13:0:45 का छिड़काव दानों की चमक और वजन बढ़ाता है।',
    grainEn: 'Booting/Flowering: Foliar spray of soluble PK/K fertilizers for plumper grain weight.',
    microTipHi: 'सल्फर एवं जिंक की कमी से पीलापन आ सकता है, इसकी समय पर पूर्ति करें।',
    microTipEn: 'Ensure adequate Sulphur and Zinc to prevent winter leaf yellowing.',
  },
  {
    cropId: 'paddy',
    nameHi: 'धान',
    nameEn: 'Paddy / Rice',
    basalHi: 'रोपाई के समय: मिट्टी में डी.ए.पी./एन.पी.के. और जिंक सल्फेट का संतुलित समावेश करें।',
    basalEn: 'Transplanting: Thorough basal incorporation of NPK and Zinc Sulphate in puddle soil.',
    tilleringHi: 'वानस्पतिक वृद्धि: कल्ले बनते समय यूरिया की शीर्ष प्रयोग (Top Dressing) और कीट निगरानी।',
    tilleringEn: 'Vegetative: Top dressing of Nitrogen for maximum productive tillers.',
    grainHi: 'फूल व बालियां आने पर: पोटाश एवं बोरॉन का पर्णीय छिड़काव दाना भराव में सुधार करता है।',
    grainEn: 'Heading: Foliar Potash and Boron to avoid empty husks.',
    microTipHi: 'खैरा रोग से बचाव हेतु जिंक सल्फेट का प्रयोग अवश्य करें।',
    microTipEn: 'Crucial Zinc application protects against Khaira disease.',
  },
  {
    cropId: 'mustard',
    nameHi: 'सरसों',
    nameEn: 'Mustard',
    basalHi: 'बुवाई पूर्व: सिंगल सुपर फॉस्फेट (SSP) और पोटाश से तेल की मात्रा और दाना आकार बढ़ता है।',
    basalEn: 'Basal: SSP is preferred for high Sulphur content vital for oil synthesis.',
    tilleringHi: 'शाखाएं निकलने पर: पहली सिंचाई के साथ हल्की यूरिया खुराक दें।',
    tilleringEn: 'Branching: Light Nitrogen top-dressing at first irrigation.',
    grainHi: 'फलियां बनते समय: माहो (चेपा) कीट से सुरक्षा और सूक्ष्म पोषक तत्वों का छिड़काव करें।',
    grainEn: 'Pod formation: Aphid monitoring and secondary nutrient foliar support.',
    microTipHi: 'सरसों में सल्फर सबसे महत्वपूर्ण तत्व है, जो तेल की प्रतिशत मात्रा बढ़ाता है।',
    microTipEn: 'Sulphur is essential for higher oil content and disease resistance.',
  },
  {
    cropId: 'potato',
    nameHi: 'आलू',
    nameEn: 'Potato',
    basalHi: 'बुवाई के समय: प्रचुर पोटाश और फॉस्फोरस कंदों की संख्या और छिलके की मजबूती के लिए जरूरी है।',
    basalEn: 'Planting: High Potash and Phosphate for tuber initiation and skin setting.',
    tilleringHi: 'मिट्टी चढ़ाते समय: यूरिया एवं सूक्ष्म पोषक तत्वों का संतुलित प्रयोग करें।',
    tilleringEn: 'Earthing up: Balanced Nitrogen and micronutrient spray for canopy vigour.',
    grainHi: 'कंद फुलाव अवस्था: 0:0:50 (एसओपी) का छिड़काव आलू का आकार एकसमान और बड़ा करता है।',
    grainEn: 'Bulking: Potassium spray ensures uniform, Grade-A tuber size.',
    microTipHi: 'झुलसा (ब्लाइट) रोग से बचाव हेतु पूर्व सुरक्षात्मक फफूंदनाशक का छिड़काव रखें।',
    microTipEn: 'Preventative fungicide spray protects against Late/Early Blight.',
  },
];

export const FarmCalculator: React.FC = () => {
  const { language } = useLanguage();
  const isHindi = language === 'hi';

  const [selectedCrop, setSelectedCrop] = useState<string>('wheat');
  const [fieldArea, setFieldArea] = useState<string>('2 बीघा (Bigha)');
  const [selectedStage, setSelectedStage] = useState<'basal' | 'tillering' | 'grain'>('basal');

  const activeCrop = CROPS_DATA.find((c) => c.cropId === selectedCrop) || CROPS_DATA[0];

  const getStageContent = () => {
    switch (selectedStage) {
      case 'basal':
        return {
          text: isHindi ? activeCrop.basalHi : activeCrop.basalEn,
          label: isHindi ? 'बुवाई अवस्था' : 'Basal / Sowing Stage',
        };
      case 'tillering':
        return {
          text: isHindi ? activeCrop.tilleringHi : activeCrop.tilleringEn,
          label: isHindi ? 'कल्ले / वृद्धि' : 'Vegetative / Growth Stage',
        };
      case 'grain':
        return {
          text: isHindi ? activeCrop.grainHi : activeCrop.grainEn,
          label: isHindi ? 'दाना भराव / परिपक्वता' : 'Grain Filling / Maturation',
        };
    }
  };

  const currentStage = getStageContent();

  const handleConsultWhatsApp = () => {
    const text = encodeURIComponent(
      isHindi
        ? `नमस्ते वर्मा खाद भंडार, मैं अपनी ${activeCrop.nameHi} की फसल (${fieldArea}) की ${currentStage.label} के लिए खाद व पोषक तत्वों की उपलब्धता व सही मात्रा जानना चाहता हूँ।`
        : `Hello Verma Khad Bhandar, I would like to inquire about fertilizer requirements for ${activeCrop.nameEn} during ${currentStage.label} (${fieldArea}).`
    );
    window.open(`https://wa.me/${businessConfig.contact.whatsappNumberRaw}?text=${text}`, '_blank');
  };

  return (
    <div className="mt-16 rounded-3xl bg-[#082B1C] text-white p-6 sm:p-10 lg:p-12 border border-[#83B83D]/30 shadow-2xl relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#83B83D]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E8B94F]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#103D28] border border-[#83B83D]/30 text-xs font-bold uppercase tracking-wider text-[#B5D957] mb-2">
            <Calculator className="w-3.5 h-3.5 text-[#E8B94F]" />
            <span>{isHindi ? 'फसल पोषण मार्गदर्शिका' : 'FARM GUIDANCE CALCULATOR'}</span>
          </div>
          <h3 className={`${isHindi ? 'font-hindi leading-tight' : 'font-sans leading-snug'} text-2xl sm:text-3xl font-extrabold text-white`}>
            {isHindi ? 'अपनी फसल के लिए सही खाद व पोषण समझें' : 'Understand the Right Fertilizer & Nutrition for Your Crop'}
          </h3>
          <p className="text-xs sm:text-sm text-[#F7F6EF]/70 font-sans mt-0.5">
            {isHindi
              ? 'फसल और विकास अवस्था चुनकर व्यक्तिगत कृषि सलाह प्राप्त करें।'
              : 'Select your crop and growth phase for personalized agronomic guidance.'}
          </p>
        </div>

        <div className="hidden md:flex items-center gap-2 text-xs text-[#B5D957] bg-white/5 px-4 py-2 rounded-xl border border-white/10">
          <Sprout className="w-4 h-4" />
          <span className={isHindi ? 'font-hindi' : 'font-sans'}>
            {isHindi ? 'सटीक जानकारी • बेहतर पैदावार' : 'Accurate Inputs • Higher Yields'}
          </span>
        </div>
      </div>

      {/* Selector Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-8">
        {/* Crop Selector */}
        <div>
          <label className={`block ${isHindi ? 'font-hindi' : 'font-sans'} text-xs font-bold uppercase tracking-wider text-[#B5D957] mb-2`}>
            {isHindi ? '1. फसल चुनें' : '1. Select Crop'}
          </label>
          <select
            value={selectedCrop}
            onChange={(e) => setSelectedCrop(e.target.value)}
            className={`w-full px-4 py-3 rounded-xl bg-[#103D28] border border-[#83B83D]/30 text-white ${isHindi ? 'font-hindi' : 'font-sans'} text-sm focus:outline-none focus:border-[#83B83D] transition-all cursor-pointer`}
          >
            {CROPS_DATA.map((crop) => (
              <option key={crop.cropId} value={crop.cropId}>
                {isHindi ? crop.nameHi : crop.nameEn}
              </option>
            ))}
          </select>
        </div>

        {/* Field Area Selector */}
        <div>
          <label className={`block ${isHindi ? 'font-hindi' : 'font-sans'} text-xs font-bold uppercase tracking-wider text-[#B5D957] mb-2`}>
            {isHindi ? '2. खेत का क्षेत्रफल' : '2. Field Area'}
          </label>
          <select
            value={fieldArea}
            onChange={(e) => setFieldArea(e.target.value)}
            className={`w-full px-4 py-3 rounded-xl bg-[#103D28] border border-[#83B83D]/30 text-white ${isHindi ? 'font-hindi' : 'font-sans'} text-sm focus:outline-none focus:border-[#83B83D] transition-all cursor-pointer`}
          >
            <option value="1 बीघा (Bigha)">{isHindi ? '1 बीघा' : '1 Bigha'}</option>
            <option value="2 बीघा (Bigha)">{isHindi ? '2 बीघा' : '2 Bigha'}</option>
            <option value="5 बीघा (Bigha)">{isHindi ? '5 बीघा' : '5 Bigha'}</option>
            <option value="1 एकड़ (Acre)">{isHindi ? '1 एकड़' : '1 Acre'}</option>
            <option value="2 एकड़ (Acre)">{isHindi ? '2 एकड़' : '2 Acre'}</option>
            <option value="5 एकड़ (Acre)">{isHindi ? '5 एकड़' : '5 Acre'}</option>
          </select>
        </div>

        {/* Stage Selector */}
        <div>
          <label className={`block ${isHindi ? 'font-hindi' : 'font-sans'} text-xs font-bold uppercase tracking-wider text-[#B5D957] mb-2`}>
            {isHindi ? '3. फसल की अवस्था' : '3. Growth Stage'}
          </label>
          <div className="grid grid-cols-3 gap-1 bg-[#103D28] p-1 rounded-xl border border-[#83B83D]/30">
            {(
              [
                { id: 'basal', labelHi: 'बुवाई', labelEn: 'Basal' },
                { id: 'tillering', labelHi: 'वृद्धि', labelEn: 'Growth' },
                { id: 'grain', labelHi: 'बालियां', labelEn: 'Grain' },
              ] as const
            ).map((st) => {
              const isActive = selectedStage === st.id;
              return (
                <button
                  key={st.id}
                  type="button"
                  onClick={() => setSelectedStage(st.id)}
                  className={`relative py-2 px-1 rounded-lg text-xs ${isHindi ? 'font-hindi' : 'font-sans'} font-semibold transition-colors cursor-pointer ${
                    isActive ? 'text-[#082B1C]' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-calc-stage"
                      className="absolute inset-0 bg-[#83B83D] rounded-lg shadow-sm"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{isHindi ? st.labelHi : st.labelEn}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Result Guidance Card with Smooth AnimatePresence */}
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCrop}-${selectedStage}-${fieldArea}-${language}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#83B83D]/20 border border-[#83B83D]/40 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-[#B5D957]" />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className={`${isHindi ? 'font-hindi' : 'font-sans'} text-lg font-bold text-white`}>
                    {isHindi ? activeCrop.nameHi : activeCrop.nameEn} — {currentStage.label} ({fieldArea})
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#E8B94F]/20 text-[#E8B94F] font-semibold">
                    {isHindi ? 'अनुशंसित पोषण' : 'Recommended Nutrition'}
                  </span>
                </div>

                <p className={`${isHindi ? 'font-hindi text-base sm:text-lg leading-relaxed' : 'font-sans text-sm sm:text-base leading-normal'} text-[#F7F6EF] mb-4 font-medium`}>
                  {currentStage.text}
                </p>

                {/* Micro nutrient tip */}
                <div className="p-3 rounded-xl bg-[#103D28]/80 border border-[#83B83D]/20 text-xs text-[#B5D957] flex items-center gap-2.5">
                  <HelpCircle className="w-4 h-4 flex-shrink-0 text-[#E8B94F]" />
                  <span className={isHindi ? 'font-hindi' : 'font-sans'}>
                    <strong>{isHindi ? 'विशेष सुझाव:' : 'Agronomic Tip:'}</strong>{' '}
                    {isHindi ? activeCrop.microTipHi : activeCrop.microTipEn}
                  </span>
                </div>
              </div>
            </div>

            {/* WhatsApp consult action */}
            <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-white/50 text-center sm:text-left">
                {isHindi
                  ? '* यह सामान्य वैज्ञानिक दिशा-निर्देश हैं। मिट्टी की जाँच व सटीक ब्रांड उपलब्धता हेतु संपर्क करें।'
                  : '* General scientific agronomic guidelines. Contact us for soil-specific advice and product availability.'}
              </span>

              <Magnetic strength={0.2}>
                <button
                  onClick={handleConsultWhatsApp}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-[#082B1C] bg-gradient-to-r from-[#B5D957] to-[#83B83D] hover:from-[#E8B94F] hover:to-[#B5D957] transition-all shadow-md group cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#082B1C]" />
                  <span className={isHindi ? 'font-hindi' : 'font-sans'}>
                    {isHindi ? 'दुकान से इस मात्रा हेतु परामर्श लें' : 'Consult Store on WhatsApp'}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Magnetic>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
