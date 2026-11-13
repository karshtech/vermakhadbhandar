import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { businessConfig } from '../config/business';

export const ContactSection: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState('खाद एवं उर्वरक (Fertilizers)');
  const [farmerName, setFarmerName] = useState('');
  const [farmerMessage, setFarmerMessage] = useState('');

  const topics = [
    'खाद एवं उर्वरक (Fertilizers)',
    'उन्नत बीज (Quality Seeds)',
    'कीटनाशक एवं फसल सुरक्षा (Crop Protection)',
    'पौध पोषक एवं टॉनिक (Plant Nutrients)',
    'अन्य कृषि परामर्श (General Farming Inquiry)',
  ];

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const greeting = farmerName ? `नमस्ते, मेरा नाम ${farmerName} है।` : 'नमस्ते वर्मा खाद भंडार,';
    const topicText = `विषय: ${selectedTopic}`;
    const customText = farmerMessage ? `संदेश: ${farmerMessage}` : 'मुझे इस संबंध में जानकारी चाहिए।';
    const fullText = encodeURIComponent(`${greeting}\n${topicText}\n${customText}`);

    window.open(`https://wa.me/${businessConfig.contact.whatsappNumberRaw}?text=${fullText}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#EDEFE5] text-[#14251A] overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#103D28]/10 text-xs font-bold uppercase tracking-widest text-[#103D28] mb-4"
          >
            <Phone className="w-3.5 h-3.5 text-[#83B83D]" />
            <span>CONTACT US / संपर्क सूत्र</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-hindi text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#14251A] leading-tight mb-3"
          >
            आइए, जुड़ें हमारे साथ।
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-2xl font-semibold text-[#1D603A] font-sans tracking-wide"
          >
            We'd Love to Hear From You.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Quick Contact Channels */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {/* Phone Card */}
            <div className="p-6 rounded-3xl bg-white border border-[#103D28]/10 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#103D28] text-white flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#B5D957]" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#657266] block mb-1">
                    Direct Call / सीधा संपर्क
                  </span>
                  <a
                    href={`tel:${businessConfig.contact.phoneNumberRaw}`}
                    className="font-hindi text-base sm:text-lg font-bold text-[#14251A] hover:text-[#103D28] transition-colors block"
                  >
                    {businessConfig.contact.phoneDisplay}
                  </a>
                  <span className="text-xs text-[#657266] mt-1 block">
                    सोमवार से रविवार उपलब्ध
                  </span>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="p-6 rounded-3xl bg-white border border-[#103D28]/10 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1D603A] text-white flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-[#83B83D]" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#657266] block mb-1">
                    WhatsApp Chat / व्हाट्सएप संदेश
                  </span>
                  <p className="font-hindi text-base sm:text-lg font-bold text-[#14251A] block">
                    {businessConfig.contact.whatsappDisplay}
                  </p>
                  <a
                    href={`https://wa.me/${businessConfig.contact.whatsappNumberRaw}?text=${encodeURIComponent(
                      'नमस्ते वर्मा खाद भंडार, मुझे कृषि उत्पादों की जानकारी चाहिए।'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-[#1D603A] hover:text-[#83B83D] transition-colors"
                  >
                    <span>व्हाट्सएप पर तुरंत चैट शुरू करें</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Address & Hours Summary */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#103D28] to-[#082B1C] text-white shadow-xl">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 text-[#E8B94F] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-hindi text-sm font-bold text-white mb-0.5">
                    दुकान का पता
                  </h4>
                  <p className="font-hindi text-xs text-[#F7F6EF]/80">
                    {businessConfig.contact.addressDisplay.hi}
                  </p>
                  <p className="text-[11px] text-[#F7F6EF]/60">
                    {businessConfig.contact.addressDisplay.en}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-white/10">
                <Clock className="w-5 h-5 text-[#83B83D] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-hindi text-sm font-bold text-white mb-0.5">
                    खुलने का समय
                  </h4>
                  <p className="font-hindi text-xs text-[#F7F6EF]/80">
                    {businessConfig.contact.openingHours.hi}
                  </p>
                  <p className="text-[11px] text-[#F7F6EF]/60">
                    {businessConfig.contact.openingHours.en}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct WhatsApp Farming Inquiry Builder */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#103D28]/10 shadow-xl">
              <div className="mb-6">
                <h3 className="font-hindi text-2xl font-extrabold text-[#14251A] mb-1">
                  कृषि परामर्श एवं उत्पाद जानकारी
                </h3>
                <p className="text-xs text-[#657266] font-sans">
                  Send a direct inquiry via WhatsApp for quick assistance.
                </p>
              </div>

              <form onSubmit={handleWhatsAppSend} className="space-y-5">
                {/* Farmer Name */}
                <div>
                  <label className="block font-hindi text-sm font-bold text-[#14251A] mb-1.5">
                    आपका नाम (वैकल्पिक) / Your Name
                  </label>
                  <input
                    type="text"
                    value={farmerName}
                    onChange={(e) => setFarmerName(e.target.value)}
                    placeholder="उदा. रामेश्वर सिंह"
                    className="w-full px-4 py-3 rounded-xl border border-[#103D28]/20 bg-[#F7F6EF]/60 text-[#14251A] focus:outline-none focus:border-[#83B83D] focus:ring-2 focus:ring-[#83B83D]/20 text-sm font-hindi transition-all"
                  />
                </div>

                {/* Inquiry Topic Selection */}
                <div>
                  <label className="block font-hindi text-sm font-bold text-[#14251A] mb-1.5">
                    किस उत्पाद अथवा विषय के बारे में जानकारी चाहिए? / Select Topic
                  </label>
                  <select
                    value={selectedTopic}
                    onChange={(e) => setSelectedTopic(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#103D28]/20 bg-[#F7F6EF]/60 text-[#14251A] focus:outline-none focus:border-[#83B83D] focus:ring-2 focus:ring-[#83B83D]/20 text-sm font-hindi transition-all"
                  >
                    {topics.map((t, idx) => (
                      <option key={idx} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Optional Message */}
                <div>
                  <label className="block font-hindi text-sm font-bold text-[#14251A] mb-1.5">
                    विस्तृत संदेश / फसल की जानकारी / Message
                  </label>
                  <textarea
                    rows={3}
                    value={farmerMessage}
                    onChange={(e) => setFarmerMessage(e.target.value)}
                    placeholder="अपनी फसल अथवा आवश्यकता के बारे में लिखें..."
                    className="w-full px-4 py-3 rounded-xl border border-[#103D28]/20 bg-[#F7F6EF]/60 text-[#14251A] focus:outline-none focus:border-[#83B83D] focus:ring-2 focus:ring-[#83B83D]/20 text-sm font-hindi transition-all"
                  />
                </div>

                {/* Submit to WhatsApp Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-[#1D603A] to-[#103D28] hover:from-[#103D28] hover:to-[#082B1C] transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <MessageCircle className="w-5 h-5 text-[#83B83D]" />
                  <span className="font-hindi text-base">व्हाट्सएप पर संदेश भेजें</span>
                  <span className="text-xs text-[#B5D957] font-sans">/ Send Inquiry</span>
                  <Send className="w-4 h-4 text-[#E8B94F] group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-[11px] text-[#657266] text-center">
                  * आपके द्वारा चुना गया विवरण व्हाट्सएप चैट में स्वतः भर जाएगा।
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
