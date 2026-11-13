import React, { useState } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { businessConfig } from '../../config/business';
import { Magnetic } from './MotionFX';
import { useLanguage } from '../../i18n/LanguageProvider';

export const FloatingActions: React.FC = () => {
  const { language } = useLanguage();
  const isHindi = language === 'hi';
  const [showScrollTop, setShowScrollTop] = useState(false);

  React.useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(
    isHindi
      ? 'नमस्ते वर्मा खाद भंडार, मुझे अपनी फसल के लिए खाद व कृषि उत्पाद की जानकारी चाहिए।'
      : 'Hello Verma Khad Bhandar, I would like information regarding fertilizers and agricultural products.'
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Magnetic strength={0.4}>
          <button
            onClick={scrollToTop}
            aria-label={isHindi ? 'शीर्ष पर स्क्रॉल करें' : 'Scroll to top of page'}
            className="w-10 h-10 rounded-full bg-[#103D28]/90 hover:bg-[#1D603A] text-white flex items-center justify-center shadow-lg backdrop-blur-md border border-white/20 transition-all hover:scale-110 cursor-pointer"
          >
            <ArrowUp className="w-5 h-5 text-[#B5D957]" />
          </button>
        </Magnetic>
      )}

      {/* Direct Phone Call Button */}
      <Magnetic strength={0.35}>
        <a
          href={`tel:${businessConfig.contact.phoneNumberRaw}`}
          data-cursor="call"
          aria-label={isHindi ? 'वर्मा खाद भंडार को कॉल करें' : 'Call Verma Khad Bhandar'}
          className="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#103D28] text-white shadow-xl border border-[#83B83D]/40 hover:bg-[#1D603A] transition-all hover:scale-105"
        >
          <div className="w-7 h-7 rounded-full bg-[#83B83D]/20 flex items-center justify-center">
            <Phone className="w-3.5 h-3.5 text-[#B5D957]" />
          </div>
          <span className={`${isHindi ? 'font-hindi' : 'font-sans'} text-xs font-bold hidden sm:inline`}>
            {isHindi ? 'सीधा कॉल करें' : 'Call Directly'}
          </span>
        </a>
      </Magnetic>

      {/* Floating WhatsApp Action with Glow & Pulse */}
      <Magnetic strength={0.35}>
        <a
          href={`https://wa.me/${businessConfig.contact.whatsappNumberRaw}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="call"
          aria-label={isHindi ? 'व्हाट्सएप पर संपर्क करें' : 'Chat on WhatsApp with Verma Khad Bhandar'}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white shadow-2xl hover:shadow-[#25D366]/40 transition-all hover:scale-105"
        >
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 group-hover:opacity-60 blur-sm animate-pulse -z-10" />
          <MessageCircle className="w-5 h-5 fill-white text-transparent" />
          <span className={`${isHindi ? 'font-hindi' : 'font-sans'} text-xs font-bold pr-1`}>
            {isHindi ? 'व्हाट्सएप सहायता' : 'WhatsApp Inquiry'}
          </span>
        </a>
      </Magnetic>
    </div>
  );
};
