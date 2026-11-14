import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Phone, MapPin, Clock, MessageCircle, ExternalLink } from 'lucide-react';
import { businessConfig } from '../../config/business';
import { productCategories } from '../../config/products';
import { useLanguage } from '../../i18n/LanguageProvider';
import { VermaKhadLogo } from '../common/VermaKhadLogo';

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const isHindi = language === 'hi';

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = 2026;

  return (
    <footer className="relative bg-[#051C12] text-[#F7F6EF] border-t border-white/10 pt-16 sm:pt-20 pb-12 overflow-hidden">
      {/* Background grain texture */}
      <div className="absolute inset-0 bg-grain opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetrical 12-Column Architectural Grid with Mobile Re-ordering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Zone A: Brand Identity (Desktop: lg:col-span-4 | Mobile: order-1) */}
          <div className="order-1 lg:order-1 lg:col-span-4 flex flex-col items-start">
            <Link to="/" className="flex items-center space-x-3 mb-5 group" aria-label="Verma Khad Bhandar Home">
              <div className="transform group-hover:scale-105 transition-transform duration-300">
                <VermaKhadLogo size={44} variant="emblem" />
              </div>
              <div>
                <div className="flex items-center gap-1.5 leading-tight">
                  <span className="font-extrabold text-xl text-white font-sans tracking-tight">
                    VERMA
                  </span>
                  <span className="font-extrabold text-xl text-[#FDB813] font-sans tracking-tight">
                    KHAD BHANDAR
                  </span>
                </div>
                <span className="font-hindi text-sm text-[#B5D957] font-semibold block mt-0.5">
                  वर्मा खाद भंडार
                </span>
              </div>
            </Link>

            <p className={`${isHindi ? 'font-hindi text-sm' : 'font-sans text-xs'} text-[#F7F6EF]/80 leading-relaxed mb-5 max-w-sm`}>
              {isHindi ? businessConfig.about.bodyHi : businessConfig.about.bodyEn}
            </p>

            <div className="text-xs text-[#E8B94F] font-medium tracking-wide">
              <span>{isHindi ? 'हर खेत की तरक्की, हमारी जिम्मेदारी।' : 'Growing Together. Naturally.'}</span>
            </div>
          </div>

          {/* Zone D: Contact & Location (Desktop: lg:col-span-3, lg:order-4 | Mobile: order-2 for quick farmer access!) */}
          <div className="order-2 lg:order-4 lg:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#B5D957] mb-5">
              {isHindi ? 'दुकान व संपर्क' : 'Store & Contact'}
            </h4>
            <div className="space-y-3.5 text-xs text-[#F7F6EF]/85">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E8B94F] flex-shrink-0 mt-0.5" />
                <div>
                  <span className={`${isHindi ? 'font-hindi' : 'font-sans'} block text-white leading-relaxed`}>
                    {isHindi ? businessConfig.contact.addressDisplay.hi : businessConfig.contact.addressDisplay.en}
                  </span>
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

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#83B83D] flex-shrink-0" />
                <a
                  href={`https://wa.me/${businessConfig.contact.whatsappNumberRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#B5D957] transition-colors"
                >
                  {businessConfig.contact.whatsappDisplay}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#83B83D] flex-shrink-0 mt-0.5" />
                <div>
                  <span className={`${isHindi ? 'font-hindi' : 'font-sans'} block text-white`}>
                    {isHindi ? businessConfig.contact.openingHours.hi : businessConfig.contact.openingHours.en}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <a
                href={businessConfig.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-xs text-white font-medium transition-colors border border-white/15 hover:border-[#83B83D]/40"
              >
                <span>{isHindi ? 'Google Maps दिशा निर्देश' : 'Google Maps Directions'}</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#B5D957]" />
              </a>
            </div>
          </div>

          {/* Zone B: Explore Website (Desktop: lg:col-span-2, lg:order-2 | Mobile: order-3) */}
          <div className="order-3 lg:order-2 lg:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#B5D957] mb-5">
              {isHindi ? 'वेबसाइट नेविगेशन' : 'Navigation'}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/" className="text-[#F7F6EF]/75 hover:text-white transition-colors block py-0.5">
                  <span className={isHindi ? 'font-hindi' : 'font-sans'}>{t.nav.home}</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#F7F6EF]/75 hover:text-white transition-colors block py-0.5">
                  <span className={isHindi ? 'font-hindi' : 'font-sans'}>{t.nav.about}</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-[#F7F6EF]/75 hover:text-white transition-colors block py-0.5">
                  <span className={isHindi ? 'font-hindi' : 'font-sans'}>{t.nav.products}</span>
                </Link>
              </li>
              <li>
                <Link to="/agriculture" className="text-[#F7F6EF]/75 hover:text-white transition-colors block py-0.5">
                  <span className={isHindi ? 'font-hindi' : 'font-sans'}>{t.nav.agriculture}</span>
                </Link>
              </li>
              <li>
                <Link to="/why-choose-us" className="text-[#F7F6EF]/75 hover:text-white transition-colors block py-0.5">
                  <span className={isHindi ? 'font-hindi' : 'font-sans'}>{t.nav.whyChooseUs}</span>
                </Link>
              </li>
              <li>
                <Link to="/visit" className="text-[#F7F6EF]/75 hover:text-white transition-colors block py-0.5">
                  <span className={isHindi ? 'font-hindi' : 'font-sans'}>{t.nav.visit}</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#F7F6EF]/75 hover:text-white transition-colors block py-0.5">
                  <span className={isHindi ? 'font-hindi' : 'font-sans'}>{t.nav.contact}</span>
                </Link>
              </li>
              <li>
                <Link to="/fertilizer-shop-rasra" className="text-[#E8B94F] hover:text-[#B5D957] transition-colors block py-0.5">
                  <span className={isHindi ? 'font-hindi font-semibold text-xs' : 'font-sans font-semibold text-xs'}>
                    {isHindi ? 'रसड़ा-कुरेम कृषि केंद्र' : 'Fertilizer Shop in Rasra'}
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Zone C: Product Categories (Desktop: lg:col-span-3, lg:order-3 | Mobile: order-4) */}
          <div className="order-4 lg:order-3 lg:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#B5D957] mb-5">
              {isHindi ? 'कृषि उत्पाद श्रेणियाँ' : 'Product Categories'}
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              {productCategories.map((p) => (
                <li key={p.id}>
                  <Link
                    to="/products"
                    className="text-[#F7F6EF]/75 hover:text-white hover:translate-x-0.5 transition-all block py-0.5"
                  >
                    <span className={`block font-medium ${isHindi ? 'font-hindi text-sm' : 'font-sans text-xs'}`}>
                      {isHindi ? p.titleHi : p.titleEn}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Strip: Copyright & Karsh Tech Attribution (Desktop: Single Row | Mobile: Wrapped) */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#F7F6EF]/70 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left flex-wrap">
            <span>
              © {currentYear} {businessConfig.name.en} ({businessConfig.name.hi}). {t.footer.rightsReserved}
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="text-[#F7F6EF]/80">
              {isHindi ? 'डिज़ाइन एवं विकास:' : 'Designed & Developed by:'}{' '}
              <a
                href="https://tech.aadirishi.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E8B94F] hover:text-[#B5D957] font-semibold underline-offset-4 hover:underline transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#83B83D] rounded-sm px-0.5"
              >
                karsh Tech
              </a>
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all cursor-pointer shadow-sm hover:border-[#83B83D]/40"
            aria-label={isHindi ? 'शीर्ष पर जाएँ' : 'Back to top'}
          >
            <span className="text-[11px] uppercase tracking-wider font-semibold">
              {isHindi ? 'ऊपर जाएँ' : 'Back to Top'}
            </span>
            <ArrowUp className="w-3.5 h-3.5 text-[#B5D957] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
