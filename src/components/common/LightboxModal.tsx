import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageProvider';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  title,
  subtitle,
}) => {
  const { language } = useLanguage();
  const isHindi = language === 'hi';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-50 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col rounded-3xl overflow-hidden bg-[#082B1C] border border-[#83B83D]/30 shadow-2xl"
          >
            {/* Header */}
            <div className="p-4 sm:p-6 bg-[#103D28] border-b border-white/10 flex items-center justify-between">
              <div>
                <h3
                  className={`${
                    isHindi ? 'font-hindi' : 'font-sans'
                  } text-lg sm:text-xl font-bold text-white`}
                >
                  {title}
                </h3>
                {subtitle && (
                  <p
                    className={`text-xs text-[#B5D957] ${
                      isHindi ? 'font-hindi' : 'font-sans'
                    }`}
                  >
                    {subtitle}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-2 text-xs text-[#E8B94F] bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                <CheckCircle className="w-4 h-4 text-[#83B83D]" />
                <span className={isHindi ? 'font-hindi' : 'font-sans'}>
                  {isHindi ? 'वास्तविक दुकान परिसर' : 'Authentic Storefront'}
                </span>
              </div>
            </div>

            {/* Image viewport */}
            <div className="relative flex-1 overflow-auto bg-black/60 flex items-center justify-center p-2 sm:p-4">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-lg"
              />
            </div>

            {/* Footer */}
            <div className="p-4 bg-[#082B1C] text-xs text-white/60 text-center border-t border-white/10">
              <span className={isHindi ? 'font-hindi' : 'font-sans'}>
                {isHindi
                  ? 'वर्मा खाद भंडार — बेसमेंट लेवल, नालीदार टिन शेड छत और मुख्य बोर्ड दृश्य।'
                  : 'Verma Khad Bhandar — Basement level entrance, corrugated metal roof, and official storefront.'}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
