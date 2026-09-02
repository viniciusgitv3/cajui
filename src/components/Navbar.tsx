import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Menu, X, ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../data/brandInfo';

interface NavbarProps {
  onOpenPresentation?: () => void;
  onOpenQuote?: () => void;
  quoteCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenPresentation,
  onOpenQuote,
  quoteCount
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'A Cajuí, quem somos', href: '#quem-somos' },
    { name: 'O que produzimos', href: '#o-que-produzimos' },
    { name: 'Nossos produtos', href: '#nossos-produtos' },
    { name: 'Onde estamos', href: '#onde-estamos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#D6B58B]/30 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#inicio" className="group flex items-center focus:outline-none py-1" aria-label="Cajuí Início">
            <BrandLogo variant="full" size="md" className="transition-transform group-hover:scale-105" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-[#1E271D] hover:text-[#176D05] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#176D05] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#nossos-produtos"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase text-white bg-[#176D05] hover:bg-[#0F4803] shadow-sm transition-all cursor-pointer"
            >
              <span>Ver Produtos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              id="btn-mobile-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1E271D] hover:text-[#176D05] hover:bg-black/5 focus:outline-none"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FAF7F2] border-b border-[#D6B58B]/30 px-4 pt-2 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-[#1E271D] hover:bg-[#176D05]/10 hover:text-[#176D05]"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-[#D6B58B]/30 flex flex-col gap-2">
            <a
              href="#nossos-produtos"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white bg-[#176D05]"
            >
              <span>Ver Produtos</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
