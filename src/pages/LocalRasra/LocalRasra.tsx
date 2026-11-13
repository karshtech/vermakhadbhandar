import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Sprout,
  Navigation,
  Compass,
  CheckCircle2,
  ChevronDown,
  HelpCircle,
  Truck,
  Sparkles,
} from 'lucide-react';
import { PageTransition } from '../../components/common/PageTransition';
import { SectionHeading } from '../../components/common/SectionHeading';
import { businessConfig } from '../../config/business';
import { LOCAL_GEO_DATA, AEO_FAQS, ROUTE_SEO } from '../../config/seo';
import { productCategories } from '../../config/products';
import { useLanguage } from '../../i18n/LanguageProvider';

export const LocalRasra: React.FC = () => {
  const { language } = useLanguage();
  const isHindi = language === 'hi';
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  const seoData = ROUTE_SEO['/fertilizer-shop-rasra'];

  return (
    <PageTransition
      seo={{
        title: isHindi ? seoData.titleHi : seoData.titleEn,
        description: isHindi ? seoData.descHi : seoData.descEn,
        keywords: isHindi ? seoData.keywordsHi : seoData.keywordsEn,
        canonicalPath: '/fertilizer-shop-rasra',
        ogImage: '/images/social/og-fertilizer-shop-rasra.jpg',
      }}
    >
      {/* 1. Hero Section: Rasra & Kurem Local Agricultural Identity */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-24 bg-[#082B1C] text-white overflow-hidden">
        {/* Subtle Background Ambience */}
        <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#83B83D]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#E8B94F]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            {/* Location Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#83B83D]/30 backdrop-blur-md mb-6">
              <Compass className="w-4 h-4 text-[#E8B94F]" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#B5D957]">
                {isHindi ? 'रसड़ा एवं कुरेम स्थानीय कृषि केंद्र' : 'LOCAL AGRICULTURAL HUB • RASRA & KUREM'}
              </span>
            </div>

            <h1
              className={`${
                isHindi ? 'font-hindi leading-[1.32]' : 'font-sans leading-tight'
              } text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 tracking-tight`}
            >
              {isHindi
                ? 'रसड़ा एवं कुरेम क्षेत्र के लिए प्रामाणिक खाद, बीज व फसल सुरक्षा केंद्र'
                : 'Fertilizer & Seed Center for Rasra, Kurem & Nearby Farming Communities'}
            </h1>

            <p
              className={`${
                isHindi ? 'font-hindi text-base sm:text-lg' : 'font-sans text-sm sm:text-base'
              } text-[#F7F6EF]/85 leading-relaxed mb-8 max-w-2xl`}
            >
              {isHindi
                ? 'वर्मा खाद भंडार, रसड़ा-कासिमाबाद रोड स्थित बाधुबांध मार्केट (दुलहपाह) में सेवारत है। यहाँ किसानों को विश्वसनीय यूरिया, डीएपी, एनपीके, पोटाश, प्रमाणित बीज और फसल सुरक्षा उत्पाद सही सलाह के साथ उपलब्ध कराए जाते हैं।'
                : 'Verma Khad Bhandar operates on Rasra-Kasimabad Road at Badhubandh Market, Dulahpah. Serving farmers of Rasra, Kurem, and nearby villages with certified fertilizers, high-yield seeds, and trusted crop advice.'}
            </p>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`tel:${LOCAL_GEO_DATA.telephone}`}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#83B83D] hover:bg-[#95CB46] text-white font-bold text-sm shadow-lg shadow-[#83B83D]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-4 h-4" />
                <span>{isHindi ? 'दुकान पर कॉल करें' : 'Call Store Now'}</span>
              </a>

              <a
                href={`https://wa.me/${LOCAL_GEO_DATA.whatsappNumberRaw}?text=${encodeURIComponent(
                  isHindi
                    ? 'नमस्ते वर्मा खाद भंडार, मैं खाद और बीज की उपलब्धता के बारे में जानकारी चाहता हूँ।'
                    : 'Hello Verma Khad Bhandar, I would like to inquire about fertilizer and seed availability.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 backdrop-blur-md transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#83B83D]" />
                <span>{isHindi ? 'व्हाट्सएप पूछताछ' : 'WhatsApp Inquiry'}</span>
              </a>

              <a
                href={LOCAL_GEO_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-xs font-semibold text-[#E8B94F] hover:text-white transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#E8B94F]" />
                <span>{isHindi ? 'गूगल मैप्स दिशा-निर्देश' : 'Google Maps Directions'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Real Geography & Travel Context Section */}
      <section className="py-20 sm:py-24 bg-[#F7F6EF] text-[#14251A] relative border-b border-[#103D28]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Explicit Single Storefront Notice */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#082B1C]/5 border border-[#103D28]/15 mb-10 flex items-start gap-3.5">
            <MapPin className="w-5 h-5 text-[#83B83D] flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-[#14251A]/85 leading-relaxed">
              <strong className="text-[#103D28] block mb-0.5">
                {isHindi ? 'एकमात्र प्रमाणित दुकान स्थिति:' : 'Single Physical Store Location:'}
              </strong>
              <span>
                {isHindi
                  ? 'वर्मा खाद भंडार की एकमात्र अधिकृत दुकान बाधुबांध मार्केट, दुलहपाह (रसड़ा-कासिमाबाद रोड, पिन: 221712) पर स्थित है। हम कुरेम, रसड़ा नगर और निकटवर्ती ग्राम पंचायतों के किसान भाइयों को अपनी इस दुकान से सेवा प्रदान करते हैं। कुरेम या रसड़ा शहर में हमारी कोई अन्य शाखा नहीं है।'
                  : 'Verma Khad Bhandar operates exclusively from its single physical store at Badhubandh Market, Dulahpah on the Rasra-Kasimabad Road (PIN 221712). We proudly serve visiting farmers from Kurem, Rasra town, and neighboring panchayats from this location, and do not maintain separate branch outlets in Kurem or Rasra town.'}
              </span>
            </div>
          </div>

          <SectionHeading
            eyebrowEn="GEOGRAPHIC & TRAVEL GUIDE"
            eyebrowHi="भौगोलिक स्थिति एवं यात्रा मार्ग"
            titleHi="रसड़ा व आसपास से दुकान तक पहुँचने का आसान मार्ग"
            titleEn="Convenient Location on Rasra-Kasimabad Road"
            subtitleHi="रसड़ा तहसील, कुरेम ग्राम पंचायत और दुलहपाह के किसान भाइयों के लिए मुख्य मार्ग पर स्थित सुविधाजनक केंद्र।"
            subtitleEn="Directly accessible along the main highway corridor connecting Rasra mandi and surrounding farming villages."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {LOCAL_GEO_DATA.verifiedNearbyLocalities.map((loc, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#103D28]/10 shadow-sm hover:border-[#83B83D]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#103D28]/10 text-[#103D28]">
                      {loc.distanceKm}
                    </span>
                    <span className="text-xs text-[#14251A]/60 flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#83B83D]" />
                      {loc.travelTime}
                    </span>
                  </div>

                  <h3
                    className={`${
                      isHindi ? 'font-hindi' : 'font-sans'
                    } text-lg font-bold text-[#14251A] mb-2`}
                  >
                    {isHindi ? loc.nameHi : loc.nameEn}
                  </h3>

                  <p
                    className={`${
                      isHindi ? 'font-hindi text-sm' : 'font-sans text-xs'
                    } text-[#14251A]/75 leading-relaxed`}
                  >
                    {isHindi ? loc.routeDescriptionHi : loc.routeDescriptionEn}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#103D28]/10 flex items-center justify-between text-xs font-semibold text-[#103D28]">
                  <span>{isHindi ? 'मुख्य सड़क संपर्क' : 'Main Road Access'}</span>
                  <CheckCircle2 className="w-4 h-4 text-[#83B83D]" />
                </div>
              </div>
            ))}

            {/* Transport & Loading Advantage Card */}
            <div className="p-6 rounded-2xl bg-[#082B1C] text-white border border-[#83B83D]/20 shadow-md flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#83B83D]/20 flex items-center justify-center text-[#B5D957] mb-4">
                  <Truck className="w-5 h-5" />
                </div>
                <h3
                  className={`${
                    isHindi ? 'font-hindi' : 'font-sans'
                  } text-lg font-bold text-white mb-2`}
                >
                  {isHindi ? 'ट्रैक्टर एवं वाहन लोडिंग सुविधा' : 'Easy Tractor & Vehicle Loading'}
                </h3>
                <p
                  className={`${
                    isHindi ? 'font-hindi text-sm' : 'font-sans text-xs'
                  } text-[#F7F6EF]/80 leading-relaxed`}
                >
                  {isHindi
                    ? 'दुकान मुख्य सड़क पर स्थित होने के कारण ट्रैक्टर-ट्रॉली, ऑटो या बाइक से खाद की बोरियों को लोड और परिवहन करना बेहद सुगम है।'
                    : 'Located directly on the wide road front, making it hassle-free to park, load fertilizer sacks onto tractors, trolleys, or two-wheelers.'}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 text-xs font-mono text-[#E8B94F]">
                {LOCAL_GEO_DATA.address.street}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. In-Stock Products Showcase */}
      <section className="py-20 sm:py-24 bg-white text-[#14251A] relative border-b border-[#103D28]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrowEn="AGRICULTURAL PRODUCT RANGE"
            eyebrowHi="कृषि उत्पाद श्रेणियाँ"
            titleHi="खेती की हर ज़रूरत के लिए आवश्यक सामग्री"
            titleEn="Essential Agricultural Supplies for Every Season"
            subtitleHi="रासायनिक एवं जैविक खाद, प्रमाणित बीज, कीटनाशक और फसल पोषण के लिए आवश्यक उत्पाद।"
            subtitleEn="Standard agricultural fertilizers, certified seed varieties, crop protection solutions, and micro-nutrients."
          />

          {/* Practical Stock Inquiries Guidance */}
          <div className="mt-6 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-medium text-[#103D28]/80 bg-[#103D28]/5 px-4 py-2 rounded-full border border-[#103D28]/10">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#83B83D]" />
              <span>
                {isHindi
                  ? 'मौसमी बुवाई के अनुसार विशिष्ट किस्मों की उपलब्धता जानने हेतु कृपया दुकान आने से पहले फोन या व्हाट्सएप पर संपर्क करें।'
                  : 'Due to seasonal planting schedules, please call or WhatsApp to confirm specific batch or variety availability before traveling.'}
              </span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {productCategories.map((cat) => (
              <div
                key={cat.id}
                className="group rounded-2xl bg-[#F7F6EF] border border-[#103D28]/10 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={cat.image}
                    alt={cat.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#B5D957] block mb-0.5">
                      {isHindi ? cat.categoryTagHi : cat.categoryTagEn}
                    </span>
                    <h4
                      className={`${
                        isHindi ? 'font-hindi text-base' : 'font-sans text-sm'
                      } font-extrabold text-white leading-tight`}
                    >
                      {isHindi ? cat.titleHi : cat.titleEn}
                    </h4>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <p
                    className={`${
                      isHindi ? 'font-hindi text-xs' : 'font-sans text-xs'
                    } text-[#14251A]/80 mb-4 leading-relaxed line-clamp-3`}
                  >
                    {isHindi ? cat.descriptionHi : cat.descriptionEn}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-[#103D28]/10 mb-4">
                    {(isHindi ? cat.highlightsHi : cat.highlightsEn).slice(0, 3).map((item, idx) => (
                      <div
                        key={idx}
                        className="text-[11px] text-[#14251A]/70 flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#83B83D]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/products"
                    className="inline-flex items-center justify-between text-xs font-bold text-[#103D28] hover:text-[#83B83D] transition-colors pt-2"
                  >
                    <span>{isHindi ? 'उत्पाद विवरण देखें' : 'View Products'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Local Crops & Agronomic Advisory for Rasra / Ballia Region */}
      <section className="py-20 sm:py-24 bg-[#F7F6EF] text-[#14251A] relative border-b border-[#103D28]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrowEn="LOCAL AGRONOMY"
            eyebrowHi="रसड़ा व बलिया फसल सलाह"
            titleHi="क्षेत्रीय मिट्टी और फसलों के अनुकूल सही पोषण"
            titleEn="Crop Nutrition Tailored to Regional Soils"
            subtitleHi="गंगा-घाघरा दोआब की बलिया और रसड़ा क्षेत्र की मिट्टी के अनुसार रबी, खरीफ व जायद फसलों का प्रबंधन।"
            subtitleEn="Seasonal guidance and nutrient recommendations aligned with the alluvial farming ecosystem of eastern Uttar Pradesh."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {LOCAL_GEO_DATA.regionalCrops.map((crop, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#103D28]/10 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#83B83D]/10 text-[#103D28] mb-3">
                    <Sprout className="w-3.5 h-3.5 text-[#83B83D]" />
                    <span>{isHindi ? crop.seasonHi : crop.seasonEn}</span>
                  </div>

                  <h3
                    className={`${
                      isHindi ? 'font-hindi' : 'font-sans'
                    } text-base font-bold text-[#14251A] mb-2`}
                  >
                    {isHindi ? crop.cropsHi : crop.cropsEn}
                  </h3>

                  <div className="mt-4 p-3.5 rounded-xl bg-[#F7F6EF] border border-[#103D28]/10">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#103D28]/70 block mb-1">
                      {isHindi ? 'सिफारिशित उर्वरक एवं सामग्री:' : 'Key Recommended Inputs:'}
                    </span>
                    <p
                      className={`${
                        isHindi ? 'font-hindi text-xs' : 'font-sans text-xs'
                      } text-[#14251A]/85 leading-relaxed`}
                    >
                      {crop.keyInputs}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#103D28]/10">
                  <Link
                    to="/agriculture"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#83B83D] hover:text-[#103D28] transition-colors"
                  >
                    <span>{isHindi ? 'विस्तृत कृषि कैलेंडर देखें' : 'View Full Crop Calendar'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Interactive Map & Physical Storefront Verification */}
      <section className="py-20 sm:py-24 bg-white text-[#14251A] relative border-b border-[#103D28]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Store Information Column */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#103D28]/10 text-[#103D28] mb-4">
                <MapPin className="w-3.5 h-3.5 text-[#83B83D]" />
                <span>{isHindi ? 'प्रमाणित दुकान स्थिति' : 'VERIFIED STORE LOCATION'}</span>
              </span>

              <h2
                className={`${
                  isHindi ? 'font-hindi leading-[1.35]' : 'font-sans leading-tight'
                } text-2xl sm:text-3xl font-extrabold text-[#14251A] mb-4`}
              >
                {isHindi
                  ? 'बाधुबांध मार्केट, रसड़ा-कासिमाबाद रोड पर स्थित'
                  : 'Located at Badhubandh Market, Rasra-Kasimabad Road'}
              </h2>

              <p
                className={`${
                  isHindi ? 'font-hindi text-sm' : 'font-sans text-xs'
                } text-[#14251A]/80 leading-relaxed mb-6`}
              >
                {isHindi ? businessConfig.contact.addressDisplay.hi : businessConfig.contact.addressDisplay.en}
              </p>

              <div className="space-y-3.5 w-full mb-8 text-xs sm:text-sm">
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#F7F6EF] border border-[#103D28]/10">
                  <Clock className="w-4 h-4 text-[#83B83D] flex-shrink-0" />
                  <div>
                    <span className="font-bold text-[#14251A] block">
                      {isHindi ? 'दुकान खुलने का समय:' : 'Store Hours:'}
                    </span>
                    <span className="text-[#14251A]/75">
                      {isHindi ? businessConfig.contact.openingHours.hi : businessConfig.contact.openingHours.en}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#F7F6EF] border border-[#103D28]/10">
                  <Phone className="w-4 h-4 text-[#83B83D] flex-shrink-0" />
                  <div>
                    <span className="font-bold text-[#14251A] block">
                      {isHindi ? 'कॉल एवं व्हाट्सएप:' : 'Direct Phone & WhatsApp:'}
                    </span>
                    <span className="text-[#14251A]/75 font-mono">{LOCAL_GEO_DATA.phoneDisplay}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={LOCAL_GEO_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#103D28] hover:bg-[#1A5338] text-white font-bold text-xs shadow-md transition-colors"
                >
                  <Navigation className="w-4 h-4 text-[#E8B94F]" />
                  <span>{isHindi ? 'गूगल मैप्स नेविगेशन शुरू करें' : 'Open in Google Maps'}</span>
                </a>

                <Link
                  to="/visit"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#F7F6EF] hover:bg-[#EBE9DE] text-[#14251A] font-bold text-xs border border-[#103D28]/15 transition-colors"
                >
                  <span>{isHindi ? 'दुकान की तस्वीरें देखें' : 'View Store Photos'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Embedded Live Google Maps Iframe */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-[#103D28]/15 bg-white relative">
                <iframe
                  title="Verma Khad Bhandar Store Location on Google Maps"
                  src={LOCAL_GEO_DATA.googleMapsEmbedUrl}
                  width="100%"
                  height="420"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[380px] sm:h-[420px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. AEO (Answer Engine Optimization) Comprehensive FAQs Section */}
      <section className="py-20 sm:py-24 bg-[#F7F6EF] text-[#14251A] relative border-b border-[#103D28]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrowEn="FARMER QUESTIONS & ANSWERS"
            eyebrowHi="किसान भाइयों के अक्सर पूछे जाने वाले सवाल"
            titleHi="खाद, बीज व दुकान से जुड़ी प्रमुख जानकारियां"
            titleEn="Frequently Asked Questions by Farmers"
            subtitleHi="रसड़ा, कुरेम और आसपास के किसान भाइयों द्वारा पूछे जाने वाले आवश्यक प्रश्नों के सीधे और सटीक उत्तर।"
            subtitleEn="Clear and factual answers regarding our product availability, shop timings, and travel directions."
          />

          <div className="mt-12 space-y-4">
            {AEO_FAQS.map((faq) => {
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
        </div>
      </section>

      {/* 7. Final Callout Banner */}
      <section className="py-16 bg-[#082B1C] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h3
            className={`${
              isHindi ? 'font-hindi' : 'font-sans'
            } text-2xl sm:text-3xl font-extrabold text-white mb-4`}
          >
            {isHindi
              ? 'इस बार अपनी फसल को दें सही पोषण और सुरक्षा'
              : 'Empower Your Farm with Genuine Agricultural Supplies'}
          </h3>
          <p
            className={`${
              isHindi ? 'font-hindi text-sm sm:text-base' : 'font-sans text-xs sm:text-sm'
            } text-[#F7F6EF]/85 max-w-2xl mx-auto mb-8`}
          >
            {isHindi
              ? 'अपनी जरूरत के अनुसार खाद, बीज या कीटनाशक की जानकारी के लिए अभी संपर्क करें या दुकान पर आएं।'
              : 'Contact our team for current stock availability or visit the store on Rasra-Kasimabad Road.'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${LOCAL_GEO_DATA.telephone}`}
              className="px-6 py-3.5 rounded-xl bg-[#83B83D] hover:bg-[#95CB46] text-white font-bold text-sm shadow-lg transition-transform hover:-translate-y-0.5"
            >
              {isHindi ? 'कॉल करें: +91 87262 48752' : 'Call: +91 87262 48752'}
            </a>
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-colors"
            >
              {isHindi ? 'दुकान से संपर्क करें' : 'Contact Store'}
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
