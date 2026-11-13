import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Home } from 'lucide-react';
import { PageTransition } from '../../components/common/PageTransition';
import { useLanguage } from '../../i18n/LanguageProvider';

export const NotFound: React.FC = () => {
  const { language } = useLanguage();
  const isHindi = language === 'hi';

  return (
    <PageTransition
      title={
        isHindi
          ? '404 — पृष्ठ उपलब्ध नहीं | वर्मा खाद भंडार'
          : '404 — Page Not Found | Verma Khad Bhandar'
      }
    >
      <section className="min-h-[80vh] flex items-center justify-center py-32 px-4 sm:px-6 lg:px-8 bg-[#082B1C] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none" />

        <div className="max-w-xl w-full text-center relative z-10">
          <div className="w-20 h-20 rounded-3xl bg-[#103D28] border-2 border-[#83B83D]/40 flex items-center justify-center mx-auto mb-6 shadow-xl">
            <Sprout className="w-10 h-10 text-[#B5D957]" />
          </div>

          <span
            className={`text-xs uppercase font-mono tracking-widest text-[#E8B94F] font-bold block mb-2 ${
              isHindi ? 'font-hindi' : 'font-sans'
            }`}
          >
            {isHindi ? 'त्रुटि 404 • पृष्ठ उपलब्ध नहीं' : 'ERROR 404 • PAGE NOT FOUND'}
          </span>

          <h1
            className={`${
              isHindi ? 'font-hindi' : 'font-sans'
            } text-3xl sm:text-4xl font-extrabold text-white mb-4`}
          >
            {isHindi ? 'यह पृष्ठ उपलब्ध नहीं है' : 'This Page Could Not Be Found'}
          </h1>

          <p
            className={`${
              isHindi ? 'font-hindi' : 'font-sans'
            } text-sm text-[#F7F6EF]/75 leading-relaxed mb-8 max-w-md mx-auto`}
          >
            {isHindi
              ? 'जिस पृष्ठ को आप खोज रहे हैं, वह स्थानांतरित हो गया है या पता गलत है। कृपया मुख्य पृष्ठ पर लौटें अथवा हमारे उत्पादों की सूची देखें।'
              : 'The page you are looking for might have been moved, deleted, or the URL address is incorrect. Please return to the homepage or explore our catalog.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-[#082B1C] bg-gradient-to-r from-[#B5D957] to-[#83B83D] hover:from-[#E8B94F] hover:to-[#B5D957] transition-all shadow-md"
            >
              <Home className="w-4 h-4" />
              <span className={isHindi ? 'font-hindi' : 'font-sans'}>
                {isHindi ? 'मुख्य पृष्ठ पर जाएँ' : 'Back to Home'}
              </span>
            </Link>

            <Link
              to="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all"
            >
              <span className={isHindi ? 'font-hindi' : 'font-sans'}>
                {isHindi ? 'उत्पाद देखें' : 'View Products'}
              </span>
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
