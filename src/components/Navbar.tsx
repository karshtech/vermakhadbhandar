import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Sparkles } from 'lucide-react';
import { businessConfig } from '../config/business';

interface NavItem {
  id: string;
  labelEn: string;
  labelHi: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'hero', labelEn: 'Home', labelHi: 'होम', href: '#hero' },
  { id: 'story', labelEn: 'Story', labelHi: 'कृषि यात्रा', href: '#story' },
  { id: 'about', labelEn: 'About', labelHi: 'परिचय', href: '#about' },
  { id: 'products', labelEn: 'Products', labelHi: 'उत्पाद', href: '#products' },
  { id: 'why-us', labelEn: 'Why Us', labelHi: 'विशेषताएँ', href: '#why-us' },
  { id: 'visit', labelEn: 'Visit Shop', labelHi: 'दुकान देखें', href: '#visit' },
  { id: 'contact', labelEn: 'Contact', labelHi: 'संपर्क', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#082B1C]/90 backdrop-blur-md py-3 shadow-lg shadow-black/20 border-b border-[#83B83D]/20'
          : 'bg-gradient-to-b from-[#082B1C]/80 via-[#082B1C]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Title */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="group flex items-center space-x-3 text-white transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#83B83D] to-[#103D28] flex items-center justify-center p-2 shadow-md shadow-[#83B83D]/20 group-hover:shadow-[#83B83D]/40 transition-shadow">
              <svg viewBox="0 0 40 40" className="w-full h-full fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 5 C12 15 8 25 20 35 C32 25 28 15 20 5 Z" fill="#E8B94F" opacity="0.9" />
                <path d="M12 22 C6 28 14 36 20 35 C15 30 14 26 12 22 Z" fill="#F7F6EF" />
                <circle cx="20" cy="18" r="4" fill="#082B1C" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight leading-tight text-white group-hover:text-[#B5D957] transition-colors">
                {businessConfig.name.en}
              </span>
              <span className="font-hindi text-xs sm:text-sm text-[#B5D957] font-medium tracking-wide">
                {businessConfig.name.hi}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="group relative px-3 py-2 rounded-lg text-sm transition-all duration-200 text-[#F7F6EF]/90 hover:text-white hover:bg-white/10"
              >
                <div className="flex flex-col items-center">
                  <span className="font-medium tracking-wide text-[13px]">{item.labelEn}</span>
                  <span className="font-hindi text-[11px] text-[#B5D957]/80 group-hover:text-[#B5D957] transition-colors leading-none">
                    {item.labelHi}
                  </span>
                </div>
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#83B83D] transition-all duration-300 group-hover:w-3/4 rounded-full" />
              </a>
            ))}
          </nav>

          {/* Call / Contact CTA Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-[#082B1C] bg-gradient-to-r from-[#B5D957] to-[#83B83D] hover:from-[#E8B94F] hover:to-[#B5D957] transition-all duration-300 shadow-md hover:shadow-lg shadow-[#83B83D]/20 transform hover:-translate-y-0.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#082B1C]" />
              <div className="flex flex-col items-start leading-tight">
                <span>संपर्क करें</span>
                <span className="text-[9px] lowercase tracking-normal font-medium opacity-90">contact us</span>
              </div>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#B5D957]" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#082B1C]/98 backdrop-blur-xl border-b border-[#83B83D]/20 px-4 pt-3 pb-6 transition-all duration-300">
          <div className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-white hover:bg-white/10 border border-transparent hover:border-[#83B83D]/20 transition-all"
              >
                <div className="flex flex-col">
                  <span className="font-semibold text-base text-[#F7F6EF]">{item.labelEn}</span>
                  <span className="font-hindi text-sm text-[#B5D957]">{item.labelHi}</span>
                </div>
                <Sparkles className="w-4 h-4 text-[#83B83D]/40" />
              </a>
            ))}

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-[#082B1C] bg-gradient-to-r from-[#B5D957] to-[#83B83D]"
              >
                <Phone className="w-4 h-4" />
                <span>संपर्क करें / Get In Touch</span>
              </a>
              <a
                href={businessConfig.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-medium text-[#F7F6EF] bg-white/10 hover:bg-white/15"
              >
                <MapPin className="w-3.5 h-3.5 text-[#E8B94F]" />
                <span>Google Maps पर देखें</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
