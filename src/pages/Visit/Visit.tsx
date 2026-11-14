import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Store, MapPin, Clock, Phone, Navigation, ZoomIn, CheckCircle, ShieldCheck } from 'lucide-react';
import { PageTransition } from '../../components/common/PageTransition';
import { LightboxModal } from '../../components/common/LightboxModal';
import { businessConfig } from '../../config/business';
import { Tilt } from '../../components/common/MotionFX';
import { ROUTE_SEO } from '../../config/seo';
import { useLanguage } from '../../i18n/LanguageProvider';

export const Visit: React.FC = () => {
  const { language } = useLanguage();
  const isHindi = language === 'hi';
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const seoData = ROUTE_SEO['/visit'];

  return (
    <PageTransition
      seo={{
        title: isHindi ? seoData.titleHi : seoData.titleEn,
        description: isHindi ? seoData.descHi : seoData.descEn,
        keywords: isHindi ? seoData.keywordsHi : seoData.keywordsEn,
        canonicalPath: '/visit',
        ogImage: '/images/social/og-visit.jpg',
      }}
    >
      {/* Lightbox for high-resolution image inspection */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc="/images/shop-exterior.webp"
        imageAlt="Verma Khad Bhandar Storefront"
        title={
          isHindi
            ? 'वर्मा खाद भंडार — मूल दुकान परिसर'
            : 'Verma Khad Bhandar — Authentic Storefront'
        }
        subtitle={
          isHindi
            ? 'बेसमेंट प्रवेश द्वार, नालीदार टिन शेड और मुख्य बोर्ड'
            : 'Basement Level Entrance, Corrugated Metal Roof & Official Banner'
        }
      />

      {/* 1. The Real Store Experience Hero (Warm Natural Background) */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-24 bg-[#EDEFE5] text-[#14251A] overflow-hidden border-b border-[#103D28]/10">
        <div className="absolute inset-0 bg-grain opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Storefront Photograph (Desktop: lg:col-span-7 | Mobile: Stacks First) */}
            <div className="lg:col-span-7">
              <Tilt max={3} className="rounded-2xl">
                <div
                  onClick={() => setLightboxOpen(true)}
                  data-cursor="zoom"
                  className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#103D28]/20 bg-[#082B1C] cursor-pointer group"
                >
                  <img
                    src="/images/shop-exterior.webp"
                    alt="Verma Khad Bhandar Authentic Storefront"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
                  />

                  {/* Click to inspect overlay hint */}
                  <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[#103D28] font-bold text-xs shadow-lg">
                      <ZoomIn className="w-4 h-4 text-[#83B83D]" />
                      <span className={isHindi ? 'font-hindi' : 'font-sans'}>
                        {isHindi ? 'बड़ा फ़ोटो देखें' : 'Click to View Full Photo'}
                      </span>
                    </div>
                  </div>

                  {/* Bottom title banner */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#082B1C] via-[#082B1C]/75 to-transparent p-5 flex items-end justify-between">
                    <div>
                      <span
                        className={`${
                          isHindi ? 'font-hindi' : 'font-sans'
                        } text-lg sm:text-xl font-bold text-white block`}
                      >
                        {isHindi ? businessConfig.name.hi : businessConfig.name.en}
                      </span>
                    </div>
                    <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#103D28]/90 border border-[#83B83D]/40 text-xs text-[#F7F6EF]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#83B83D]" />
                      <span className={isHindi ? 'font-hindi' : 'font-sans'}>
                        {isHindi ? 'वास्तविक दुकान परिसर' : 'Authentic Storefront'}
                      </span>
                    </div>
                  </div>
                </div>
              </Tilt>

              <p
                className={`mt-2.5 text-xs text-[#657266] italic text-center sm:text-left ${
                  isHindi ? 'font-hindi' : 'font-sans'
                }`}
              >
                {isHindi
                  ? '* पहचान: सड़क किनारे बेसमेंट स्तर, नालीदार टिन शेड और सुस्पष्ट ग्रीन साइनबोर्ड।'
                  : '* Store Landmark: Ground/basement level entrance, corrugated metal canopy & green signboard.'}
              </p>
            </div>

            {/* Editorial Visiting Guide & Practical Details (lg:col-span-5) */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#103D28]/10 text-xs font-mono font-bold uppercase tracking-wider text-[#103D28] border border-[#103D28]/15 mb-4">
                <Store className="w-3.5 h-3.5 text-[#1D603A]" />
                <span>{isHindi ? 'दुकान पर पधारें' : 'VISIT OUR STORE'}</span>
              </div>

              <h1
                className={`${
                  isHindi ? 'font-hindi leading-[1.38] sm:leading-[1.42]' : 'font-sans leading-tight'
                } text-3xl sm:text-4xl font-extrabold text-[#082B1C] mb-4 tracking-tight`}
              >
                {isHindi ? 'हमारी दुकान पर आपका स्वागत है' : 'Welcome to Verma Khad Bhandar'}
              </h1>

              <p
                className={`${
                  isHindi ? 'font-hindi text-sm sm:text-base leading-relaxed' : 'font-sans text-sm sm:text-base'
                } text-[#657266] mb-6 leading-relaxed`}
              >
                {isHindi
                  ? 'सड़क किनारे बेसमेंट स्तर पर स्थित हमारा वास्तविक कृषि केंद्र — जहाँ किसान भाई स्वयं आकर खाद की बोरियों, प्रमाणित बीज पैकेटों और फसल सुरक्षा सामग्री का प्रत्यक्ष मुआयना कर सकते हैं।'
                  : 'Located at ground and basement level with a corrugated metal canopy and prominent green sign, farmers are always welcome to inspect certified seeds and fertilizer sacks in person.'}
              </p>

              {/* Verified Details Card */}
              <div className="w-full p-5 rounded-2xl bg-white border border-[#103D28]/10 shadow-sm space-y-4 mb-6">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#103D28]/10 flex items-center justify-center flex-shrink-0 text-[#103D28] mt-0.5">
                    <MapPin className="w-4 h-4 text-[#E8B94F]" />
                  </div>
                  <div>
                    <h4 className={`text-xs font-bold uppercase tracking-wider text-[#657266] mb-0.5 ${isHindi ? 'font-hindi' : 'font-sans'}`}>
                      {isHindi ? 'दुकान का पता' : 'Shop Address'}
                    </h4>
                    <p className={`text-xs sm:text-sm font-semibold text-[#14251A] ${isHindi ? 'font-hindi' : 'font-sans'}`}>
                      {isHindi ? businessConfig.contact.addressDisplay.hi : businessConfig.contact.addressDisplay.en}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3 pt-3 border-t border-[#103D28]/8">
                  <div className="w-8 h-8 rounded-lg bg-[#103D28]/10 flex items-center justify-center flex-shrink-0 text-[#103D28] mt-0.5">
                    <Clock className="w-4 h-4 text-[#83B83D]" />
                  </div>
                  <div>
                    <h4 className={`text-xs font-bold uppercase tracking-wider text-[#657266] mb-0.5 ${isHindi ? 'font-hindi' : 'font-sans'}`}>
                      {isHindi ? 'खुलने का समय' : 'Store Hours'}
                    </h4>
                    <p className={`text-xs sm:text-sm font-semibold text-[#14251A] ${isHindi ? 'font-hindi' : 'font-sans'}`}>
                      {isHindi ? businessConfig.contact.openingHours.hi : businessConfig.contact.openingHours.en}
                    </p>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-start gap-3 pt-3 border-t border-[#103D28]/8">
                  <div className="w-8 h-8 rounded-lg bg-[#103D28]/10 flex items-center justify-center flex-shrink-0 text-[#103D28] mt-0.5">
                    <Phone className="w-4 h-4 text-[#1D603A]" />
                  </div>
                  <div>
                    <h4 className={`text-xs font-bold uppercase tracking-wider text-[#657266] mb-0.5 ${isHindi ? 'font-hindi' : 'font-sans'}`}>
                      {isHindi ? 'सीधा संपर्क' : 'Direct Contact'}
                    </h4>
                    <a
                      href={`tel:${businessConfig.contact.phoneNumberRaw}`}
                      className="text-xs sm:text-sm font-bold text-[#103D28] hover:text-[#83B83D] transition-colors font-mono"
                    >
                      {businessConfig.contact.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              {/* Direction & Contact Actions */}
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <a
                  href={businessConfig.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-white bg-[#103D28] hover:bg-[#1D603A] transition-all shadow-md hover:shadow-lg group"
                >
                  <Navigation className="w-4 h-4 text-[#E8B94F] group-hover:rotate-45 transition-transform" />
                  <span className={isHindi ? 'font-hindi text-sm' : 'font-sans text-sm'}>
                    {isHindi ? 'Google Maps दिशा-निर्देश' : 'Get Directions on Google Maps'}
                  </span>
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-[#103D28] bg-white border border-[#103D28]/20 hover:border-[#83B83D] hover:bg-[#103D28]/5 transition-all shadow-sm"
                >
                  <span className={isHindi ? 'font-hindi text-sm font-bold' : 'font-sans text-sm font-semibold'}>
                    {isHindi ? 'हमसे संपर्क करें' : 'Contact Store Staff'}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Architectural Features & Physical Presence */}
      <section className="py-20 sm:py-24 bg-[#F7F6EF] text-[#14251A] relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-25 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-white border border-[#103D28]/10 shadow-sm">
              <span className="text-xs font-mono font-bold text-[#83B83D] block mb-2 uppercase">
                {isHindi ? 'सुगम पहुंच' : 'Direct Road Access'}
              </span>
              <h4 className={`${isHindi ? 'font-hindi font-bold' : 'font-sans font-bold'} text-base text-[#14251A] mb-2`}>
                {isHindi ? 'ट्रॉली व वाहन लोडिंग सुविधा' : 'Trolley & Vehicle Loading'}
              </h4>
              <p className={`${isHindi ? 'font-hindi' : 'font-sans'} text-xs text-[#657266] leading-relaxed`}>
                {isHindi
                  ? 'सड़क के किनारे स्थित होने से किसान भाइयों के लिए ट्रैक्टर-ट्रॉली अथवा पिकअप में खाद की बोरियां लोड करना अत्यंत सुविधाजनक है।'
                  : 'Located directly alongside the main road, making loading sacks into tractor-trolleys or utility vehicles quick and convenient.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#103D28]/10 shadow-sm">
              <span className="text-xs font-mono font-bold text-[#E8B94F] block mb-2 uppercase">
                {isHindi ? 'भौतिक पहचान' : 'Store Landmark'}
              </span>
              <h4 className={`${isHindi ? 'font-hindi font-bold' : 'font-sans font-bold'} text-base text-[#14251A] mb-2`}>
                {isHindi ? 'नालीदार टिन शेड व ग्रीन बोर्ड' : 'Corrugated Roof & Green Sign'}
              </h4>
              <p className={`${isHindi ? 'font-hindi' : 'font-sans'} text-xs text-[#657266] leading-relaxed`}>
                {isHindi
                  ? 'दुकान की मुख्य पहचान इसका नालीदार टिन शेड और सुस्पष्ट ग्रीन बोर्ड है, जिसे दूर से भी आसानी से पहचाना जा सकता है।'
                  : 'The shop is readily identified from afar by its corrugated metal canopy and prominent official green signboard.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#103D28]/10 shadow-sm">
              <span className="text-xs font-mono font-bold text-[#83B83D] block mb-2 uppercase">
                {isHindi ? 'सामग्री मुआयना' : 'Stock Inspection'}
              </span>
              <h4 className={`${isHindi ? 'font-hindi font-bold' : 'font-sans font-bold'} text-base text-[#14251A] mb-2`}>
                {isHindi ? 'स्वयं देखकर सामग्री का चयन' : 'In-Person Product Verification'}
              </h4>
              <p className={`${isHindi ? 'font-hindi' : 'font-sans'} text-xs text-[#657266] leading-relaxed`}>
                {isHindi
                  ? 'दुकान में यूरिया, डीएपी, पोटाश और प्रमाणित बीज उचित भंडारण में रहते हैं, ताकि किसान भाई स्वयं मुआयना कर सकें।'
                  : 'Fertilizers and certified seed packets are organized openly so farmers can inspect manufacture dates and seals directly.'}
              </p>
            </div>
          </div>

          {/* Architectural Authenticity Notice */}
          <div className="p-8 rounded-2xl bg-[#EDEFE5] border border-[#103D28]/10">
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-[#103D28] flex-shrink-0 mt-1" />
              <div>
                <h4 className={`${isHindi ? 'font-hindi' : 'font-sans'} font-bold text-base text-[#103D28] mb-1`}>
                  {isHindi ? 'दुकान की भौतिक संरचना व पहचान' : 'Physical Architecture & Identification'}
                </h4>
                <p className={`${isHindi ? 'font-hindi' : 'font-sans'} text-xs sm:text-sm text-[#657266] leading-relaxed`}>
                  {isHindi
                    ? 'वर्मा खाद भंडार सड़क के किनारे एक वास्तविक बेसमेंट स्तर पर स्थित है। दुकान के सामने नालीदार टिन शेड और सुस्पष्ट ग्रीन बोर्ड लगा हुआ है। दुकान में यूरिया, डीएपी, पोटाश, प्रमाणित बीज और फसल सुरक्षा रसायनों का उचित भंडारण रहता है ताकि किसान भाई सीधे आकर सामग्री का मुआयना कर सकें।'
                    : 'Verma Khad Bhandar is situated at ground/basement level alongside the main access road. Featuring a distinctive corrugated metal canopy and clear green signboard, our shop maintains orderly storage for fertilizers, certified seeds, and crop protection inputs so farmers can inspect bags and certifications in person.'}
                </p>
              </div>
            </div>
          </div>

          {/* Live Interactive Google Maps Section */}
          <div className="mt-12 rounded-3xl overflow-hidden border border-[#103D28]/15 shadow-xl bg-white">
            <div className="p-6 sm:p-8 bg-[#082B1C] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#B5D957] block mb-1">
                  {isHindi ? 'लाइव गूगल मैप लोकेशन' : 'LIVE GOOGLE MAPS LOCATION'}
                </span>
                <h3 className={`${isHindi ? 'font-hindi text-lg sm:text-xl' : 'font-sans text-base sm:text-lg font-bold'} text-white`}>
                  {isHindi
                    ? businessConfig.contact.addressDisplay.hi
                    : businessConfig.contact.addressDisplay.en}
                </h3>
              </div>
              <a
                href={businessConfig.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#B5D957] to-[#83B83D] hover:from-[#E8B94F] hover:to-[#B5D957] text-[#082B1C] text-xs font-bold transition-all shadow-md hover:shadow-lg flex-shrink-0"
              >
                <Navigation className="w-4 h-4 text-[#082B1C]" />
                <span className={isHindi ? 'font-hindi' : 'font-sans'}>
                  {isHindi ? 'Google Maps पर सीधे खोलें' : 'Open in Google Maps'}
                </span>
              </a>
            </div>

            <div className="relative w-full h-[380px] sm:h-[460px] bg-[#EDEFE5]">
              <iframe
                src={businessConfig.contact.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Verma Khad Bhandar Google Maps Embed"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
