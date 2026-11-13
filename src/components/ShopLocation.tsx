import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Navigation, Store, CheckCircle } from 'lucide-react';
import { businessConfig } from '../config/business';

export const ShopLocation: React.FC = () => {
  return (
    <section id="visit" className="relative py-24 sm:py-32 bg-[#F7F6EF] text-[#14251A] overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#103D28]/10 text-xs font-bold uppercase tracking-widest text-[#103D28] mb-4"
          >
            <Store className="w-4 h-4 text-[#83B83D]" />
            <span>AUTHENTIC PREMISES / दुकान पर पधारें</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-hindi text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#14251A] leading-tight mb-3"
          >
            हमारी दुकान पर आपका स्वागत है।
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-2xl font-semibold text-[#1D603A] font-sans tracking-wide"
          >
            Visit Verma Khad Bhandar.
          </motion.p>
        </div>

        {/* Main Content Grid: Real Photo & Shop Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Authentic Shop Exterior Photography */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative group"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#103D28]/15 bg-[#082B1C]">
              {/* Actual Shop Image */}
              <img
                src="/images/shop-exterior.webp"
                alt="Verma Khad Bhandar - Original Shop Exterior"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
              />

              {/* Gentle bottom gradient badge */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#082B1C] via-[#082B1C]/60 to-transparent p-6 sm:p-8 flex items-end justify-between">
                <div>
                  <span className="font-hindi text-xl sm:text-2xl font-bold text-white block">
                    {businessConfig.name.hi}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#B5D957]">
                    {businessConfig.name.en}
                  </span>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#103D28]/80 border border-[#83B83D]/40 text-[11px] text-[#F7F6EF] backdrop-blur-md">
                  <CheckCircle className="w-3.5 h-3.5 text-[#83B83D]" />
                  <span>मूल दुकान परिसर / Original Storefront</span>
                </div>
              </div>
            </div>

            {/* Note badge */}
            <p className="mt-3 text-xs text-[#657266] italic text-center sm:text-left">
              * वास्तविक दुकान का दृश्य — खाद, बीज और कृषि रक्षा सामग्री के साथ आपकी सेवा में तत्पर।
            </p>
          </motion.div>

          {/* Shop Details & Visit Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col space-y-6"
          >
            {/* Business Badge */}
            <div className="p-6 rounded-3xl bg-white border border-[#103D28]/10 shadow-lg">
              <h3 className="font-hindi text-2xl font-extrabold text-[#14251A] mb-1">
                {businessConfig.name.hi}
              </h3>
              <p className="text-sm font-semibold text-[#1D603A] uppercase tracking-wider mb-6">
                {businessConfig.name.en}
              </p>

              {/* Info Items List */}
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#103D28]/10 flex items-center justify-center flex-shrink-0 text-[#103D28]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#657266] mb-0.5">
                      दुकान का पता / Shop Address
                    </h4>
                    <p className="font-hindi text-sm font-semibold text-[#14251A]">
                      {businessConfig.contact.addressDisplay.hi}
                    </p>
                    <p className="text-xs text-[#657266]">
                      {businessConfig.contact.addressDisplay.en}
                    </p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#103D28]/10 flex items-center justify-center flex-shrink-0 text-[#103D28]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#657266] mb-0.5">
                      कार्य समय / Business Hours
                    </h4>
                    <p className="font-hindi text-sm font-semibold text-[#14251A]">
                      {businessConfig.contact.openingHours.hi}
                    </p>
                    <p className="text-xs text-[#657266]">
                      {businessConfig.contact.openingHours.en}
                    </p>
                  </div>
                </div>

                {/* Contact Number */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#103D28]/10 flex items-center justify-center flex-shrink-0 text-[#103D28]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#657266] mb-0.5">
                      फ़ोन नंबर / Contact Number
                    </h4>
                    <a
                      href={`tel:${businessConfig.contact.phoneNumberRaw}`}
                      className="font-hindi text-sm font-semibold text-[#103D28] hover:text-[#83B83D] transition-colors"
                    >
                      {businessConfig.contact.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              {/* Directions Button */}
              <div className="mt-8 pt-6 border-t border-[#103D28]/10">
                <a
                  href={businessConfig.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 py-3.5 px-6 rounded-xl font-bold text-white bg-[#103D28] hover:bg-[#1D603A] transition-all duration-300 shadow-md hover:shadow-lg group"
                >
                  <Navigation className="w-4 h-4 text-[#E8B94F] group-hover:rotate-45 transition-transform" />
                  <span className="font-hindi">Google Maps पर दिशा-निर्देश प्राप्त करें</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
