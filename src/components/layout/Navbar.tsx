import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Phone, Globe, Volume2, VolumeX } from 'lucide-react';
import { NAV_ITEMS } from '../../config/navigation';
import { businessConfig } from '../../config/business';
import { useLanguage } from '../../i18n/LanguageProvider';
import { useFarmAmbiance } from '../../hooks/useFarmAmbiance';
import { VermaKhadLogo } from '../common/VermaKhadLogo';
import { Magnetic, EASE } from '../common/MotionFX';

export const Navbar: React.FC = () => {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const { isPlaying: isAudioPlaying, toggleAmbiance } = useFarmAmbiance();
  const location = useLocation();

  // Smart hide-on-scroll down, reveal-on-scroll up (optimized to prevent duplicate renders)
  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    const isSolid = y > 30;
    const isHidden = y > 350 && y > prev && !mobileMenuOpen;
    setSolid((s) => (s !== isSolid ? isSolid : s));
    setHidden((h) => (h !== isHidden ? isHidden : h));
  });

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  return (
    <motion.header
      animate={{ y: hidden ? '-100%' : '0%' }}
      transition={{ duration: 0.45, ease: EASE }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        solid || !isHome || mobileMenuOpen
          ? 'bg-[#082B1C]/95 backdrop-blur-md py-3 shadow-lg shadow-black/20 border-b border-[#83B83D]/20'
          : 'bg-gradient-to-b from-[#082B1C]/85 via-[#082B1C]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Title - Directly faithful to physical signboard */}
          <NavLink
            to="/"
            className="group flex items-center space-x-3 text-white transition-transform duration-300 hover:scale-[1.02]"
            aria-label="Verma Khad Bhandar Home"
          >
            <div className="relative transform group-hover:rotate-6 transition-transform duration-300">
              <VermaKhadLogo size={42} variant="emblem" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 leading-none">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-white font-sans">
                  VERMA
                </span>
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-[#FDB813] font-sans">
                  KHAD BHANDAR
                </span>
              </div>
              <span className="font-hindi text-[11px] sm:text-xs text-[#B5D957] font-semibold tracking-wide mt-0.5">
                वर्मा खाद भंडार
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  `group relative px-3.5 py-2 rounded-xl text-sm transition-all duration-200 flex items-center justify-center ${
                    isActive
                      ? 'bg-white/10 text-white font-semibold'
                      : 'text-[#F7F6EF]/85 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className={`${language === 'hi' ? 'font-hindi' : 'font-sans'} text-[13px] tracking-wide`}>
                      {language === 'hi' ? item.labelHi : item.labelEn}
                    </span>
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#83B83D] rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Actions: Language Switcher + Audio Ambiance + Call CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Audio Ambiance Synthesizer */}
            <button
              onClick={toggleAmbiance}
              aria-label={
                language === 'hi'
                  ? isAudioPlaying ? 'खेतों की शांत हवा बंद करें' : 'खेतों की शांत हवा चालू करें'
                  : isAudioPlaying ? 'Mute farm nature audio' : 'Play peaceful farm nature audio'
              }
              className={`p-2 rounded-full border transition-all cursor-pointer ${
                isAudioPlaying
                  ? 'bg-[#83B83D] border-[#83B83D] text-[#082B1C] shadow-md shadow-[#83B83D]/30 scale-105'
                  : 'bg-[#103D28]/80 border-[#83B83D]/40 text-[#F7F6EF] hover:border-[#83B83D]'
              }`}
              title={
                language === 'hi'
                  ? isAudioPlaying ? 'खेतों की शांत हवा बंद करें' : 'खेतों की शांत हवा चालू करें'
                  : isAudioPlaying ? 'Mute farm nature audio' : 'Play peaceful farm nature audio'
              }
            >
              {isAudioPlaying ? <Volume2 className="w-4 h-4 animate-pulse" /> : <VolumeX className="w-4 h-4 opacity-70" />}
            </button>

            {/* Language Switcher: Active language on left, Alternate language on right */}
            <button
              onClick={toggleLanguage}
              aria-label={language === 'hi' ? 'Switch to English' : 'हिंदी में बदलें'}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border border-[#83B83D]/40 bg-[#103D28]/80 text-[#F7F6EF] hover:border-[#83B83D] hover:bg-[#1D603A] transition-all cursor-pointer shadow-sm"
            >
              <Globe className="w-3.5 h-3.5 text-[#E8B94F]" />
              {language === 'hi' ? (
                <>
                  <span className="text-[#B5D957] font-extrabold tracking-wide">हिंदी</span>
                  <span className="text-white/30">|</span>
                  <span className="text-white/60 hover:text-white">EN</span>
                </>
              ) : (
                <>
                  <span className="text-[#B5D957] font-extrabold tracking-wide">EN</span>
                  <span className="text-white/30">|</span>
                  <span className="text-white/60 hover:text-white">हिंदी</span>
                </>
              )}
            </button>

            {/* Direct Contact Button */}
            <Magnetic>
              <NavLink
                to="/contact"
                data-cursor="call"
                className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-[#082B1C] bg-gradient-to-r from-[#B5D957] to-[#83B83D] hover:from-[#E8B94F] hover:to-[#B5D957] transition-all duration-300 shadow-md hover:shadow-lg shadow-[#83B83D]/20 transform hover:-translate-y-0.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#082B1C]" />
                <span className={language === 'hi' ? 'font-hindi' : 'font-sans font-bold'}>{t.nav.callNow}</span>
              </NavLink>
            </Magnetic>
          </div>

          {/* Mobile Right Controls: Language + Hamburger */}
          <div className="flex xl:hidden items-center space-x-2">
            <button
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold border border-[#83B83D]/40 bg-[#103D28] text-white cursor-pointer"
            >
              {language === 'hi' ? (
                <>
                  <span className="text-[#B5D957]">हिंदी</span>
                  <span className="text-white/30">|</span>
                  <span className="text-white/60">EN</span>
                </>
              ) : (
                <>
                  <span className="text-[#B5D957]">EN</span>
                  <span className="text-white/30">|</span>
                  <span className="text-white/60">हिंदी</span>
                </>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-white hover:bg-white/10 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#B5D957]" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#082B1C]/98 backdrop-blur-2xl border-b border-[#83B83D]/20 px-4 pt-3 pb-6 transition-all duration-300 shadow-2xl">
          <div className="flex flex-col space-y-1.5">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-2xl border transition-all ${
                    isActive
                      ? 'bg-[#1D603A] border-[#83B83D] text-white font-bold'
                      : 'border-transparent text-[#F7F6EF]/90 hover:bg-white/5'
                  }`
                }
              >
                <span className={`text-base font-semibold ${language === 'hi' ? 'font-hindi' : 'font-sans'}`}>
                  {language === 'hi' ? item.labelHi : item.labelEn}
                </span>
                <span className="text-white/40">→</span>
              </NavLink>
            ))}

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
              <NavLink
                to="/contact"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-[#082B1C] bg-gradient-to-r from-[#B5D957] to-[#83B83D]"
              >
                <Phone className="w-4 h-4" />
                <span className={language === 'hi' ? 'font-hindi' : 'font-sans font-bold'}>{t.nav.callNow}</span>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </motion.header>
  );
};
