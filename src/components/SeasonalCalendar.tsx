import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Sun, CloudRain, Sparkles, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { businessConfig } from '../config/business';
import { Magnetic } from './common/MotionFX';
import { useLanguage } from '../i18n/LanguageProvider';

interface SeasonData {
  id: string;
  nameHi: string;
  nameEn: string;
  subHi: string;
  subEn: string;
  icon: typeof Sun;
  periodHi: string;
  periodEn: string;
  harvestHi: string;
  harvestEn: string;
  cropsHi: string[];
  cropsEn: string[];
  stages: {
    stageHi: string;
    stageEn: string;
    adviceHi: string;
    adviceEn: string;
  }[];
}

const SEASONS: SeasonData[] = [
  {
    id: 'rabi',
    nameHi: 'रबी सीजन (शीतकालीन फसलें)',
    nameEn: 'Rabi Season (Winter Crops)',
    subHi: 'शीतकालीन फसलें',
    subEn: 'Winter Crops',
    icon: Sun,
    periodHi: 'अक्टूबर से दिसंबर (बुवाई)',
    periodEn: 'October – December (Sowing)',
    harvestHi: 'फरवरी से अप्रैल (कटाई)',
    harvestEn: 'February – April (Harvesting)',
    cropsHi: ['गेहूं', 'सरसों', 'चना', 'आलू', 'मटर', 'मसूर'],
    cropsEn: ['Wheat', 'Mustard', 'Gram', 'Potato', 'Peas', 'Lentils'],
    stages: [
      {
        stageHi: 'बुवाई के समय (बेसल डोज)',
        stageEn: 'Sowing (Basal Application)',
        adviceHi: 'डीएपी (DAP) व पोटाश (MOP) का मिट्टी में संतुलित समावेश। सरसों व आलू में सल्फर का प्रयोग अनिवार्य रखें।',
        adviceEn: 'Balanced incorporation of DAP & Potash into soil. Sulphur is essential for mustard and potato oil/tuber development.',
      },
      {
        stageHi: 'पहली सिंचाई व कल्ले (CRI अवस्था)',
        stageEn: 'First Irrigation (Crown Root / Tillering)',
        adviceHi: 'गेहूं में पहली सिंचाई (CRI स्टेज) पर यूरिया की पहली टॉप-ड्रेसिंग करें और चौड़ी व संकरी पत्ती के खरपतवारों का नियंत्रण करें।',
        adviceEn: 'First split dose of Urea at CRI stage alongside selective weed control.',
      },
      {
        stageHi: 'गाभा व बालियां निकलने पर (फूल अवस्था)',
        stageEn: 'Booting & Flowering Stage',
        adviceHi: 'घुलनशील एनपीके (0:52:34 या 13:0:45) का पर्णीय छिड़काव दानेदार भराव और वजन में वृद्धि करता है।',
        adviceEn: 'Foliar spray of water-soluble NPK boosts grain plumpness, weight, and helps resist weather stress.',
      },
    ],
  },
  {
    id: 'kharif',
    nameHi: 'खरीफ सीजन (मानसूनी फसलें)',
    nameEn: 'Kharif Season (Monsoon Crops)',
    subHi: 'मानसूनी फसलें',
    subEn: 'Monsoon Crops',
    icon: CloudRain,
    periodHi: 'जून से जुलाई (बुवाई/रोपाई)',
    periodEn: 'June – July (Sowing / Transplanting)',
    harvestHi: 'सितंबर से नवंबर (कटाई)',
    harvestEn: 'September – November (Harvesting)',
    cropsHi: ['धान', 'मक्का', 'बाजरा', 'सोयाबीन', 'कपास', 'मूंगफली'],
    cropsEn: ['Paddy', 'Maize', 'Bajra', 'Soybean', 'Cotton', 'Groundnut'],
    stages: [
      {
        stageHi: 'खेत की तैयारी व रोपाई',
        stageEn: 'Field Preparation & Transplanting',
        adviceHi: 'धान के लेव (Puddling) के समय डीएपी या एनपीके के साथ जिंक सल्फेट (21% या 33%) का प्रयोग खैरा रोग से बचाता है।',
        adviceEn: 'Basal application with Zinc Sulphate is critical to prevent Khaira disease in paddy.',
      },
      {
        stageHi: 'कल्ले फूटने व बढ़वार के समय',
        stageEn: 'Active Tillering & Growth',
        adviceHi: 'यूरिया की किस्तों में आपूर्ति, जल प्रबंधन और तना छेदक या पत्ती लपेटक कीटों की समय पर निगरानी।',
        adviceEn: 'Staggered Urea top-dressing and vigilant scouting for stem borers and leaf folders.',
      },
      {
        stageHi: 'फूल व बालियां आने की अवस्था',
        stageEn: 'Heading & Grain Filling',
        adviceHi: 'बोरॉन व पोटाश का छिड़काव खाली दानों (पैया) की समस्या को दूर कर चमकदार उपज सुनिश्चित करता है।',
        adviceEn: 'Foliar Boron and Potassium minimize empty grains and enhance grain lustre.',
      },
    ],
  },
  {
    id: 'zaid',
    nameHi: 'जायद सीजन (ग्रीष्मकालीन फसलें)',
    nameEn: 'Zaid Season (Summer Crops)',
    subHi: 'ग्रीष्मकालीन फसलें',
    subEn: 'Summer Crops',
    icon: Sparkles,
    periodHi: 'मार्च से अप्रैल (बुवाई)',
    periodEn: 'March – April (Sowing)',
    harvestHi: 'मई से जून (तुड़ाई/कटाई)',
    harvestEn: 'May – June (Harvesting)',
    cropsHi: ['उड़द', 'मूंग', 'तरबूज', 'खरबूजा', 'खीरा', 'हरी सब्जियां'],
    cropsEn: ['Urad', 'Moong', 'Watermelon', 'Muskmelon', 'Cucumber', 'Vegetables'],
    stages: [
      {
        stageHi: 'बुवाई व अंकुरण',
        stageEn: 'Sowing & Germination',
        adviceHi: 'हल्की और नियमित सिंचाई, प्रमाणित कम अवधि वाली किस्मों का उपयोग व बीज शोधन।',
        adviceEn: 'Light, frequent irrigations with short-duration certified seed varieties and proper seed treatment.',
      },
      {
        stageHi: 'वानस्पतिक विकास व सुरक्षा',
        stageEn: 'Vegetative Growth & Protection',
        adviceHi: 'गर्मी में रस चूसक कीटों (सफेद मक्खी, थ्रिप्स) और पीला मोजेक वायरस से बचाव हेतु अनुशंसित कीटनाशक का छिड़काव।',
        adviceEn: 'Protection against sucking pests (whiteflies/thrips) to prevent Yellow Mosaic Virus.',
      },
      {
        stageHi: 'फल व फली विकास',
        stageEn: 'Fruiting & Pod Development',
        adviceHi: 'सूक्ष्म पोषक तत्वों और अमीनो एसिड टॉनिक का छिड़काव फूलों को झड़ने से रोकता है।',
        adviceEn: 'Micronutrient and bio-stimulant foliar spray prevents flower drop during peak summer heat.',
      },
    ],
  },
];

export const SeasonalCalendar: React.FC = () => {
  const { language } = useLanguage();
  const isHindi = language === 'hi';
  const [activeSeasonId, setActiveSeasonId] = useState<string>('rabi');

  const currentSeason = SEASONS.find((s) => s.id === activeSeasonId) || SEASONS[0];

  const handleWhatsAppInquiry = () => {
    const seasonName = isHindi ? currentSeason.nameHi : currentSeason.nameEn;
    const text = encodeURIComponent(
      isHindi
        ? `नमस्ते वर्मा खाद भंडार, मैं ${seasonName} के लिए अनुशंसित खाद, बीज व दवाओं की उपलब्धता जानना चाहता हूँ।`
        : `Hello Verma Khad Bhandar, I would like to inquire about recommended fertilizers, seeds, and crop protection for ${seasonName}.`
    );
    window.open(`https://wa.me/${businessConfig.contact.whatsappNumberRaw}?text=${text}`, '_blank');
  };

  return (
    <div className="mt-16 rounded-3xl bg-white border border-[#103D28]/10 p-6 sm:p-10 shadow-xl overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#103D28]/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#103D28]/10 text-xs font-bold uppercase tracking-wider text-[#103D28] mb-2">
            <Calendar className="w-3.5 h-3.5 text-[#83B83D]" />
            <span>{isHindi ? 'मौसमी फसल कैलेंडर' : 'SEASONAL CROP CALENDAR'}</span>
          </div>
          <h3
            className={`${
              isHindi ? 'font-hindi' : 'font-sans'
            } text-2xl sm:text-3xl font-extrabold text-[#14251A]`}
          >
            {isHindi
              ? 'ऋतु अनुसार फसल प्रबंधन एवं पोषण समय-सारणी'
              : 'Seasonal Crop Management & Nutrition Schedule'}
          </h3>
          <p
            className={`text-xs sm:text-sm text-[#657266] ${
              isHindi ? 'font-hindi' : 'font-sans'
            } mt-0.5`}
          >
            {isHindi
              ? 'रबी, खरीफ और जायद फसलों के लिए प्रमुख पोषण चरण व वैज्ञानिक पद्धतियां।'
              : 'Key input stages and agronomic practices for Rabi, Kharif, and Zaid crops.'}
          </p>
        </div>
      </div>

      {/* Season Tabs with Fluid Spring Indicator */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
        {SEASONS.map((season) => {
          const SIcon = season.icon;
          const isActive = season.id === activeSeasonId;

          return (
            <button
              key={season.id}
              onClick={() => setActiveSeasonId(season.id)}
              className={`relative p-4 rounded-2xl border text-left transition-colors cursor-pointer flex items-center gap-3.5 overflow-hidden ${
                isActive
                  ? 'text-white border-[#103D28] shadow-md'
                  : 'bg-[#F7F6EF] text-[#14251A] border-[#103D28]/10 hover:bg-[#103D28]/5'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-season-tab"
                  className="absolute inset-0 bg-[#103D28] rounded-2xl"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <div
                className={`relative z-10 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                  isActive ? 'bg-[#83B83D] text-[#082B1C]' : 'bg-[#103D28]/10 text-[#103D28]'
                }`}
              >
                <SIcon className="w-5 h-5" />
              </div>
              <div className="relative z-10">
                <span
                  className={`${
                    isHindi ? 'font-hindi' : 'font-sans'
                  } font-bold text-sm block leading-tight`}
                >
                  {isHindi
                    ? season.nameHi.split(' ')[0] + ' ' + season.nameHi.split(' ')[1]
                    : season.nameEn.split(' ')[0] + ' Season'}
                </span>
                <span
                  className={`text-[11px] block mt-0.5 ${
                    isActive ? 'text-[#B5D957]' : 'text-[#657266]'
                  } ${isHindi ? 'font-hindi' : 'font-sans'}`}
                >
                  {isHindi ? season.subHi : season.subEn}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Season Overview Card with Smooth AnimatePresence */}
      <div className="rounded-2xl bg-[#EDEFE5] border border-[#103D28]/10 p-6 sm:p-8 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSeasonId}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#103D28]/10">
              <div>
                <h4
                  className={`${
                    isHindi ? 'font-hindi' : 'font-sans'
                  } text-xl font-bold text-[#14251A]`}
                >
                  {isHindi ? currentSeason.nameHi : currentSeason.nameEn}
                </h4>
                <div
                  className={`flex flex-wrap items-center gap-4 text-xs text-[#657266] mt-2 ${
                    isHindi ? 'font-hindi' : 'font-sans'
                  }`}
                >
                  <span>
                    <strong>{isHindi ? 'बुवाई काल:' : 'Sowing Period:'}</strong>{' '}
                    {isHindi ? currentSeason.periodHi : currentSeason.periodEn}
                  </span>
                  <span>•</span>
                  <span>
                    <strong>{isHindi ? 'कटाई काल:' : 'Harvest Period:'}</strong>{' '}
                    {isHindi ? currentSeason.harvestHi : currentSeason.harvestEn}
                  </span>
                </div>
              </div>

              {/* Crops Pills */}
              <div className="flex flex-wrap gap-1.5">
                {(isHindi ? currentSeason.cropsHi : currentSeason.cropsEn).map((c, i) => (
                  <span
                    key={i}
                    className={`px-2.5 py-1 rounded-full text-xs ${
                      isHindi ? 'font-hindi' : 'font-sans'
                    } font-semibold bg-[#103D28] text-white`}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* 3 Stage Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
              {currentSeason.stages.map((st, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-white border border-[#103D28]/10 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#83B83D] mb-2 font-sans uppercase">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{isHindi ? `चरण 0${i + 1}` : `Stage 0${i + 1}`}</span>
                    </span>
                    <h5
                      className={`${
                        isHindi ? 'font-hindi' : 'font-sans'
                      } font-bold text-base text-[#14251A] mb-2`}
                    >
                      {isHindi ? st.stageHi : st.stageEn}
                    </h5>
                    <p
                      className={`${
                        isHindi ? 'font-hindi' : 'font-sans'
                      } text-xs sm:text-sm text-[#14251A] leading-relaxed`}
                    >
                      {isHindi ? st.adviceHi : st.adviceEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Inquire Action Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span
                className={`text-xs text-[#657266] ${
                  isHindi ? 'font-hindi' : 'font-sans'
                } text-center sm:text-left`}
              >
                {isHindi
                  ? '* स्थानीय मौसम व मिट्टी परीक्षण के आधार पर खाद व कीटनाशक की मात्रा समायोजित करें।'
                  : '* Adjust fertilizer and protection dosage based on local soil tests and crop conditions.'}
              </span>

              <Magnetic strength={0.2}>
                <button
                  onClick={handleWhatsAppInquiry}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#103D28] hover:bg-[#1D603A] transition-all shadow-md group cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#83B83D]" />
                  <span className={isHindi ? 'font-hindi' : 'font-sans'}>
                    {isHindi
                      ? 'इस मौसम के खाद-बीज हेतु संपर्क करें'
                      : 'Consult for Seasonal Inputs'}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B5D957] group-hover:translate-x-1 transition-transform" />
                </button>
              </Magnetic>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
