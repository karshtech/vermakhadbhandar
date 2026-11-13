import React from 'react';
import { ArrowUp, Phone, MapPin, Clock, Sprout, Heart } from 'lucide-react';
import { businessConfig } from '../config/business';
import { productCategories } from '../config/products';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = 2026;

  return (
    <footer className="relative bg-[#082B1C] text-[#F7F6EF] border-t border-[#1D603A]/40 pt-16 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Brand Info Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#83B83D] to-[#103D28] flex items-center justify-center p-2 shadow-md">
                <Sprout className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-extrabold text-xl text-white block leading-tight">
                  {businessConfig.name.en}
                </span>
                <span className="font-hindi text-sm text-[#B5D957] font-semibold block">
                  {businessConfig.name.hi}
                </span>
              </div>
            </div>

            <p className="font-hindi text-sm text-[#F7F6EF]/80 leading-relaxed mb-3 max-w-sm">
              {businessConfig.about.bodyHi}
            </p>

            <p className="text-xs text-[#F7F6EF]/60 leading-relaxed mb-6 max-w-sm">
              {businessConfig.about.bodyEn}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#E8B94F]">
              <Sprout className="w-3.5 h-3.5 text-[#83B83D]" />
              <span>Growing Together. Naturally.</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#B5D957] mb-4">
              Quick Links / नेविगेशन
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#hero" className="text-[#F7F6EF]/70 hover:text-white transition-colors flex items-center gap-2">
                  <span className="font-hindi">होम</span>
                  <span className="text-xs text-white/40">/ Home</span>
                </a>
              </li>
              <li>
                <a href="#story" className="text-[#F7F6EF]/70 hover:text-white transition-colors flex items-center gap-2">
                  <span className="font-hindi">कृषि यात्रा</span>
                  <span className="text-xs text-white/40">/ Story</span>
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#F7F6EF]/70 hover:text-white transition-colors flex items-center gap-2">
                  <span className="font-hindi">हमारे बारे में</span>
                  <span className="text-xs text-white/40">/ About</span>
                </a>
              </li>
              <li>
                <a href="#products" className="text-[#F7F6EF]/70 hover:text-white transition-colors flex items-center gap-2">
                  <span className="font-hindi">उत्पाद</span>
                  <span className="text-xs text-white/40">/ Products</span>
                </a>
              </li>
              <li>
                <a href="#visit" className="text-[#F7F6EF]/70 hover:text-white transition-colors flex items-center gap-2">
                  <span className="font-hindi">दुकान देखें</span>
                  <span className="text-xs text-white/40">/ Visit</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#F7F6EF]/70 hover:text-white transition-colors flex items-center gap-2">
                  <span className="font-hindi">संपर्क</span>
                  <span className="text-xs text-white/40">/ Contact</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Product Categories Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#B5D957] mb-4">
              Categories / श्रेणियाँ
            </h4>
            <ul className="space-y-2.5 text-sm">
              {productCategories.map((p) => (
                <li key={p.id}>
                  <a href="#products" className="text-[#F7F6EF]/70 hover:text-white transition-colors">
                    <span className="font-hindi block">{p.titleHi}</span>
                    <span className="text-[11px] text-white/40 block">{p.titleEn}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#B5D957] mb-4">
              Contact / संपर्क
            </h4>
            <div className="space-y-3.5 text-xs text-[#F7F6EF]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E8B94F] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-hindi block text-white">{businessConfig.contact.addressDisplay.hi}</span>
                  <span className="text-[11px] text-white/50 block">{businessConfig.contact.addressDisplay.en}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#83B83D] flex-shrink-0" />
                <a
                  href={`tel:${businessConfig.contact.phoneNumberRaw}`}
                  className="font-hindi text-white hover:text-[#B5D957] transition-colors"
                >
                  {businessConfig.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#83B83D] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-hindi block text-white">{businessConfig.contact.openingHours.hi}</span>
                  <span className="text-[11px] text-white/50 block">{businessConfig.contact.openingHours.en}</span>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <a
                href={businessConfig.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-xs text-white font-medium transition-colors border border-white/10"
              >
                <span>Google Maps दिशा निर्देश</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span>© {currentYear} {businessConfig.name.en} ({businessConfig.name.hi}). सर्वाधिकार सुरक्षित।</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1 text-[#83B83D]">
              खेती की खुशहाली के लिए समर्पित <Heart className="w-3 h-3 text-[#E8B94F] fill-[#E8B94F]" />
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all"
            aria-label="Back to top"
          >
            <span className="text-[11px] uppercase tracking-wider font-semibold">ऊपर जाएँ</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#B5D957] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
