import React from 'react';
import { BrandLogo } from './BrandLogo';
import { ArrowRight, ShieldCheck, Sparkles, PackageCheck } from 'lucide-react';
import { BRAND_INFO } from '../data/brandInfo';

interface HeroProps {
  onOpenPresentation?: () => void;
  onExploreCatalog: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPresentation, onExploreCatalog }) => {
  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#FAF7F2]">
      {/* Editorial Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[55vw] h-[55vw] max-w-[800px] max-h-[800px] bg-gradient-to-br from-[#FF9800]/10 via-[#7DBD00]/8 to-transparent rounded-full blur-3xl pointer-events-none -mr-40 -mt-20" />
      <div className="absolute bottom-0 left-0 w-[45vw] h-[45vw] max-w-[650px] max-h-[650px] bg-gradient-to-tr from-[#176D05]/10 via-[#D6B58B]/15 to-transparent rounded-full blur-3xl pointer-events-none -ml-40 -mb-20" />
      
      {/* Subtle organic pattern dots */}
      <div className="absolute inset-0 pattern-dots pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Statement & Editorial Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Origin & Quality Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#176D05]/10 border border-[#176D05]/20 text-[#176D05] text-xs sm:text-sm font-bold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#FF9800] animate-ping" />
              <span>Direto de Fortaleza, Ceará • Desde 2019</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1E271D] tracking-tight leading-[1.1]">
                O sabor autêntico e a energia pura da <span className="text-[#176D05] relative inline-block">
                  castanha nobre
                  <svg className="absolute -bottom-2 left-0 w-full text-[#7DBD00]/60" viewBox="0 0 250 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9C60 3 190 3 247 9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>.
              </h1>
              <p className="text-lg sm:text-xl text-[#3A4538] font-normal leading-relaxed max-w-2xl pt-2">
                Produzimos castanhas de caju selecionadas e amendoins nobres de alto padrão. Embalagens a vácuo com até <strong>24 meses de crocância</strong> preservada para o seu negócio e paladar.
              </p>
            </div>

            {/* Direct Value Drivers Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-xl pt-2">
              <div className="bg-white/80 backdrop-blur-sm border border-[#D6B58B]/40 rounded-xl p-3.5 flex items-start gap-2.5 shadow-xs">
                <PackageCheck className="w-5 h-5 text-[#176D05] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-[#1E271D]">Embalagem a Vácuo</div>
                  <div className="text-[11px] text-[#637060]">Até 24 meses crocante</div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm border border-[#D6B58B]/40 rounded-xl p-3.5 flex items-start gap-2.5 shadow-xs">
                <Sparkles className="w-5 h-5 text-[#FF9800] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-[#1E271D]">100% Selecionado</div>
                  <div className="text-[11px] text-[#637060]">Grãos nobres e puros</div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm border border-[#D6B58B]/40 rounded-xl p-3.5 flex items-start gap-2.5 shadow-xs col-span-2 sm:col-span-1">
                <ShieldCheck className="w-5 h-5 text-[#7DBD00] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-[#1E271D]">Padrão Food Service</div>
                  <div className="text-[11px] text-[#637060]">Fardos, caixas & granel</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                id="hero-explore-catalog-btn"
                onClick={onExploreCatalog}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white bg-[#176D05] hover:bg-[#0F4803] shadow-md hover:shadow-lg transition-all cursor-pointer group"
              >
                <span>Explorar Catálogo Completo</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Merged Organically */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Ambient Warm Glow */}
            <div className="absolute -inset-10 bg-gradient-to-tr from-[#FF9800]/15 via-[#7DBD00]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Organic Unboxed Visual Presentation */}
            <div className="relative w-full max-w-[480px] lg:max-w-[540px] flex items-center justify-center">
              <img
                src="/caju-tela-inicio.jpeg"
                alt="Sabor que tem a nossa cara - Cajuí"
                className="w-full h-auto object-cover rounded-3xl shadow-xl select-none hover:scale-[1.02] transition-transform duration-700"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
