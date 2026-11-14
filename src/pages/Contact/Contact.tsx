import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Clock, Send, CheckCircle2, AlertCircle, Navigation, ArrowRight } from 'lucide-react';
import { PageTransition } from '../../components/common/PageTransition';
import { businessConfig } from '../../config/business';
import { Tilt, Magnetic } from '../../components/common/MotionFX';
import { ROUTE_SEO } from '../../config/seo';
import { useLanguage } from '../../i18n/LanguageProvider';

export const Contact: React.FC = () => {
  const { language } = useLanguage();
  const isHindi = language === 'hi';
  const seoData = ROUTE_SEO['/contact'];

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<{ name?: string; phone?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const topicsHi = [
    'खाद एवं उर्वरक',
    'उन्नत बीज',
    'कीटनाशक एवं फसल सुरक्षा',
    'पौध पोषक एवं टॉनिक',
    'सामान्य कृषि परामर्श',
  ];

  const topicsEn = [
    'Fertilizers & Soil Enrichers',
    'Certified Crop Seeds',
    'Pesticides & Crop Protection',
    'Plant Nutrients & Boosters',
    'General Agronomic Guidance',
  ];

  const topics = isHindi ? topicsHi : topicsEn;
  const currentTopic = topics.includes(topic) ? topic : topics[0];

  const validate = () => {
    const errs: { name?: string; phone?: string; message?: string } = {};
    if (!name.trim()) {
      errs.name = isHindi ? 'कृपया अपना नाम दर्ज करें' : 'Please enter your name';
    }
    if (!phone.trim()) {
      errs.phone = isHindi
        ? 'कृपया अपना 10 अंकों का मोबाइल नंबर दर्ज करें'
        : 'Please enter your 10-digit mobile number';
    } else if (!/^[6-9]\d{9}$/.test(phone.trim().replace(/\D/g, ''))) {
      errs.phone = isHindi
        ? 'अमान्य मोबाइल नंबर, कृपया सही 10 अंक दर्ज करें'
        : 'Invalid mobile number, please enter valid 10 digits';
    }
    if (!message.trim()) {
      errs.message = isHindi
        ? 'कृपया अपनी आवश्यकता अथवा संदेश दर्ज करें'
        : 'Please enter your message or requirement';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Dispatch to WhatsApp after validation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);

      const text = encodeURIComponent(
        isHindi
          ? `नमस्ते वर्मा खाद भंडार,\nनाम: ${name}\nमोबाइल: ${phone}\nविषय: ${currentTopic}\nसंदेश: ${message}`
          : `Hello Verma Khad Bhandar,\nName: ${name}\nMobile: ${phone}\nTopic: ${currentTopic}\nMessage: ${message}`
      );
      window.open(`https://wa.me/${businessConfig.contact.whatsappNumberRaw}?text=${text}`, '_blank');
    }, 500);
  };

  return (
    <PageTransition
      seo={{
        title: isHindi ? seoData.titleHi : seoData.titleEn,
        description: isHindi ? seoData.descHi : seoData.descEn,
        keywords: isHindi ? seoData.keywordsHi : seoData.keywordsEn,
        canonicalPath: '/contact',
        ogImage: '/images/social/og-contact.jpg',
      }}
    >
      {/* 1. Direct Human Connection Split Hero (Warm Off-White Background) */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 bg-[#F7F6EF] text-[#14251A] overflow-hidden border-b border-[#103D28]/10">
        <div className="absolute inset-0 bg-grain opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Side: Welcoming Editorial Copy (lg:col-span-7) */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#103D28]/10 text-xs font-mono font-bold uppercase tracking-wider text-[#103D28] border border-[#103D28]/15 mb-4">
                <Phone className="w-3.5 h-3.5 text-[#1D603A]" />
                <span>{isHindi ? 'सीधा संपर्क सूत्र • किसान सहायता' : 'DIRECT CONTACT • FARMER SUPPORT'}</span>
              </div>

              <h1
                className={`${
                  isHindi ? 'font-hindi leading-[1.38] sm:leading-[1.42]' : 'font-sans leading-tight'
                } text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#082B1C] mb-4 tracking-tight`}
              >
                {isHindi ? 'आइए, सीधे जुड़ें हमारे साथ।' : "We'd Love to Hear From You."}
              </h1>

              <p
                className={`${
                  isHindi ? 'font-hindi text-base sm:text-lg font-semibold' : 'font-sans text-base sm:text-lg font-semibold'
                } text-[#1D603A] mb-4`}
              >
                {isHindi
                  ? 'खेती में किसी भी सलाह या उत्पाद जानकारी के लिए सीधे संपर्क करें।'
                  : 'Reach Out for Farming Inquiries & Product Availability.'}
              </p>

              <p
                className={`${
                  isHindi ? 'font-hindi text-sm sm:text-base leading-relaxed' : 'font-sans text-sm sm:text-base'
                } text-[#657266] mb-6 max-w-xl leading-relaxed`}
              >
                {isHindi
                  ? 'खाद-बीज की उपलब्धता, फसल सुरक्षा की जानकारी अथवा किसी भी प्रकार के कृषि परामर्श के लिए आप सीधे फ़ोन कर सकते हैं, व्हाट्सएप पर संदेश भेज सकते हैं अथवा दुकान पर पधार सकते हैं।'
                  : 'Connect with us directly for seed and fertilizer availability, crop protection guidance, or tailored agronomic advice.'}
              </p>

              <div className="flex items-center gap-2 text-xs font-bold text-[#103D28]">
                <Clock className="w-4 h-4 text-[#83B83D]" />
                <span className={isHindi ? 'font-hindi' : 'font-sans'}>
                  {isHindi
                    ? 'दुकान का समय: प्रातः 8:00 बजे से सायं 7:30 बजे तक (प्रतिदिन)'
                    : 'Store Hours: 8:00 AM – 7:30 PM (Monday to Sunday)'}
                </span>
              </div>
            </div>

            {/* Right Side: Fast Contact Channels Card (lg:col-span-5) */}
            <div className="lg:col-span-5 w-full">
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#103D28]/12 shadow-xl space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#657266] block mb-1">
                  {isHindi ? 'त्वरित संपर्क साधन' : 'INSTANT CHANNELS'}
                </span>

                {/* Direct Phone Dial */}
                <a
                  href={`tel:${businessConfig.contact.phoneNumberRaw}`}
                  className="p-4 rounded-xl bg-[#103D28] text-white flex items-center justify-between group hover:bg-[#1D603A] transition-all shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#B5D957]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-white/70 block">
                        {isHindi ? 'सीधा कॉल करें' : 'Call Directly'}
                      </span>
                      <span className="font-mono font-bold text-base sm:text-lg text-white">
                        {businessConfig.contact.phoneDisplay}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#B5D957] group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Direct WhatsApp Chat */}
                <a
                  href={`https://wa.me/${businessConfig.contact.whatsappNumberRaw}?text=${encodeURIComponent(
                    isHindi
                      ? 'नमस्ते वर्मा खाद भंडार, मुझे अपनी खेती के लिए उत्पाद और सलाह चाहिए।'
                      : 'Hello Verma Khad Bhandar, I need information regarding agricultural inputs and advice.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white flex items-center justify-between group hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-black/15 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-white/80 block">
                        {isHindi ? 'व्हाट्सएप सहायता' : 'WhatsApp Chat'}
                      </span>
                      <span className="font-mono font-bold text-base sm:text-lg text-white">
                        {businessConfig.contact.whatsappDisplay}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Google Maps Route */}
                <a
                  href={businessConfig.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#EDEFE5] border border-[#103D28]/10 text-[#14251A] flex items-center justify-between hover:bg-[#103D28]/5 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#103D28]/10 flex items-center justify-center flex-shrink-0 text-[#103D28]">
                      <MapPin className="w-5 h-5 text-[#E8B94F]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#657266] block">
                        {isHindi ? 'दुकान का स्थान' : 'Store Location'}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-[#14251A] line-clamp-1">
                        {isHindi ? 'Google Maps पर दिशा-निर्देश' : 'Get Directions on Google Maps'}
                      </span>
                    </div>
                  </div>
                  <Navigation className="w-4 h-4 text-[#103D28] group-hover:rotate-45 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Inquiry Form & Verified Store Details Section */}
      <section className="py-20 sm:py-28 bg-[#EDEFE5] text-[#14251A] relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left Column: Store Details & Map Landmark */}
            <div className="lg:col-span-5 flex flex-col space-y-6">
              {/* Store Address & Hours Card */}
              <div className="p-8 rounded-3xl bg-[#082B1C] text-white shadow-xl border border-[#83B83D]/30">
                <div className="flex items-start gap-3.5 mb-6">
                  <MapPin className="w-5 h-5 text-[#E8B94F] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className={`text-base font-bold text-white mb-1 ${isHindi ? 'font-hindi' : 'font-sans'}`}>
                      {isHindi ? 'दुकान का पता व पहचान' : 'Store Location & Landmark'}
                    </h4>
                    <p className={`text-xs text-[#F7F6EF]/90 leading-relaxed ${isHindi ? 'font-hindi' : 'font-sans'}`}>
                      {isHindi ? businessConfig.contact.addressDisplay.hi : businessConfig.contact.addressDisplay.en}
                    </p>
                    <span className="inline-block mt-2 text-[11px] font-mono text-[#B5D957] bg-white/10 px-2.5 py-0.5 rounded">
                      {isHindi ? 'पहचान: बेसमेंट स्तर, टिन शेड व हरा साइनबोर्ड' : 'Landmark: Basement Entrance & Green Board'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-4 border-t border-white/15 mb-6">
                  <Clock className="w-5 h-5 text-[#83B83D] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className={`text-base font-bold text-white mb-1 ${isHindi ? 'font-hindi' : 'font-sans'}`}>
                      {isHindi ? 'दुकान का समय' : 'Store Hours'}
                    </h4>
                    <p className={`text-xs text-[#F7F6EF]/90 ${isHindi ? 'font-hindi' : 'font-sans'}`}>
                      {isHindi ? businessConfig.contact.openingHours.hi : businessConfig.contact.openingHours.en}
                    </p>
                  </div>
                </div>

                <a
                  href={businessConfig.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-[#082B1C] bg-gradient-to-r from-[#B5D957] to-[#83B83D] hover:from-[#E8B94F] hover:to-[#B5D957] transition-all shadow-md mb-4"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span className={isHindi ? 'font-hindi' : 'font-sans'}>
                    {isHindi ? 'Google Maps पर नेविगेट करें' : 'Navigate on Google Maps'}
                  </span>
                </a>

                {/* Embedded Map */}
                <div className="rounded-xl overflow-hidden border border-white/20 h-48 sm:h-56 bg-[#051C12]">
                  <iframe
                    src={businessConfig.contact.googleMapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Verma Khad Bhandar Map"
                    className="w-full h-full"
                  />
                </div>

                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                  <Link
                    to="/visit"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E8B94F] hover:text-white transition-colors"
                  >
                    <span>{isHindi ? 'दुकान की तस्वीरें व पूर्ण विवरण देखें' : 'View Store Photos & Details'}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E8B94F]" />
                  </Link>
                </div>
              </div>

              {/* Verified Commitment Card */}
              <div className="p-6 rounded-2xl bg-white border border-[#103D28]/10 shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-xs font-mono font-bold text-[#103D28] uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-[#83B83D]" />
                  <span>{isHindi ? 'सच्ची कृषि सेवा' : 'FARMER PROMISE'}</span>
                </div>
                <p className={`${isHindi ? 'font-hindi' : 'font-sans'} text-xs text-[#657266] leading-relaxed`}>
                  {isHindi
                    ? 'हम अनावश्यक रसायनों की बिक्री से बचते हैं। किसान भाइयों को केवल वही सलाह दी जाती है जो उनकी फसल और मिट्टी के अनुकूल हो।'
                    : 'We avoid recommending unnecessary chemical treatments. Guidance is strictly tailored to actual crop condition and soil health.'}
                </p>
              </div>
            </div>

            {/* Right Column: Contact Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#103D28]/10 shadow-xl">
                <div className="mb-6">
                  <h3 className={`${isHindi ? 'font-hindi' : 'font-sans'} text-2xl sm:text-3xl font-extrabold text-[#14251A] mb-1`}>
                    {isHindi ? 'संदेश अथवा पूछताछ भेजें' : 'Send an Inquiry'}
                  </h3>
                  <p className={`text-xs text-[#657266] ${isHindi ? 'font-hindi' : 'font-sans'}`}>
                    {isHindi
                      ? 'नीचे विवरण भरें, सीधे व्हाट्सएप पर आपकी आवश्यकता प्राप्त होगी।'
                      : 'Fill in your details below to send an instant inquiry to our shop via WhatsApp.'}
                  </p>
                </div>

                {submittedSuccess ? (
                  <div className="p-6 rounded-2xl bg-[#83B83D]/10 border border-[#83B83D]/30 text-center">
                    <CheckCircle2 className="w-12 h-12 text-[#103D28] mx-auto mb-3" />
                    <h4 className={`${isHindi ? 'font-hindi' : 'font-sans'} text-xl font-bold text-[#103D28] mb-1`}>
                      {isHindi ? 'आपका संदेश तैयार हो गया!' : 'Your inquiry is ready!'}
                    </h4>
                    <p className={`${isHindi ? 'font-hindi' : 'font-sans'} text-xs sm:text-sm text-[#14251A] mb-4`}>
                      {isHindi
                        ? 'व्हाट्सएप चैट विंडो खोल दी गई है। आप सीधे हमसे संवाद कर सकते हैं।'
                        : 'WhatsApp chat window has been opened. You can communicate directly with us.'}
                    </p>
                    <button
                      onClick={() => setSubmittedSuccess(false)}
                      className={`px-6 py-2.5 rounded-xl bg-[#103D28] text-white text-xs ${isHindi ? 'font-hindi' : 'font-sans'} font-bold cursor-pointer`}
                    >
                      {isHindi ? 'अन्य संदेश भेजें' : 'Send Another Inquiry'}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                      <label className={`block text-sm font-bold text-[#14251A] mb-1 ${isHindi ? 'font-hindi' : 'font-sans'}`}>
                        {isHindi ? 'आपका नाम' : 'Your Name'} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder={isHindi ? 'उदा. रामेश्वर सिंह' : 'e.g. Rameshwar Singh'}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.name ? 'border-red-500 bg-red-50/50' : 'border-[#103D28]/20'
                        } bg-[#F7F6EF]/60 text-sm ${isHindi ? 'font-hindi' : 'font-sans'} focus:outline-none focus:border-[#83B83D] transition-all`}
                      />
                      {errors.name && (
                        <p className={`mt-1 text-xs text-red-600 ${isHindi ? 'font-hindi' : 'font-sans'} flex items-center gap-1`}>
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className={`block text-sm font-bold text-[#14251A] mb-1 ${isHindi ? 'font-hindi' : 'font-sans'}`}>
                        {isHindi ? 'मोबाइल नंबर' : 'Mobile Number'} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        placeholder={isHindi ? 'उदा. 8726248752' : 'e.g. 8726248752'}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.phone ? 'border-red-500 bg-red-50/50' : 'border-[#103D28]/20'
                        } bg-[#F7F6EF]/60 text-sm font-mono focus:outline-none focus:border-[#83B83D] transition-all`}
                      />
                      {errors.phone && (
                        <p className={`mt-1 text-xs text-red-600 ${isHindi ? 'font-hindi' : 'font-sans'} flex items-center gap-1`}>
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Topic */}
                    <div>
                      <label className={`block text-sm font-bold text-[#14251A] mb-1 ${isHindi ? 'font-hindi' : 'font-sans'}`}>
                        {isHindi ? 'पूछताछ का विषय' : 'Topic of Inquiry'}
                      </label>
                      <select
                        value={currentTopic}
                        onChange={(e) => setTopic(e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl border border-[#103D28]/20 bg-[#F7F6EF]/60 text-sm ${isHindi ? 'font-hindi' : 'font-sans'} focus:outline-none focus:border-[#83B83D] transition-all`}
                      >
                        {topics.map((t, idx) => (
                          <option key={idx} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className={`block text-sm font-bold text-[#14251A] mb-1 ${isHindi ? 'font-hindi' : 'font-sans'}`}>
                        {isHindi ? 'संदेश अथवा आवश्यकता' : 'Message or Requirement'} <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={4}
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                          if (errors.message) setErrors({ ...errors, message: undefined });
                        }}
                        placeholder={
                          isHindi
                            ? 'अपनी फसल, एकड़ और आवश्यक खाद-बीज का विवरण दर्ज करें...'
                            : 'Describe your crop, acreage, or required inputs...'
                        }
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.message ? 'border-red-500 bg-red-50/50' : 'border-[#103D28]/20'
                        } bg-[#F7F6EF]/60 text-sm ${isHindi ? 'font-hindi' : 'font-sans'} focus:outline-none focus:border-[#83B83D] transition-all`}
                      />
                      {errors.message && (
                        <p className={`mt-1 text-xs text-red-600 ${isHindi ? 'font-hindi' : 'font-sans'} flex items-center gap-1`}>
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Magnetic strength={0.2}>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl font-bold text-white bg-[#103D28] hover:bg-[#1D603A] transition-all shadow-md hover:shadow-lg disabled:opacity-60 cursor-pointer"
                      >
                        <Send className="w-4 h-4 text-[#B5D957]" />
                        <span className={isHindi ? 'font-hindi text-base font-extrabold' : 'font-sans text-base font-bold'}>
                          {isSubmitting
                            ? isHindi ? 'संदेश तैयार हो रहा है...' : 'Preparing Inquiry...'
                            : isHindi ? 'व्हाट्सएप पर भेजें' : 'Send via WhatsApp'}
                        </span>
                      </button>
                    </Magnetic>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
