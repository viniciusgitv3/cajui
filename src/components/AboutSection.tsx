import React from 'react';
import { BRAND_INFO } from '../data/brandInfo';
import { Target, Eye, Award, CheckCircle2, Sparkles, HeartHandshake, Leaf, Zap } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="quem-somos" className="py-24 bg-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pattern-dots pointer-events-none opacity-40" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#7DBD00]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#176D05]/10 text-[#176D05] text-xs font-bold uppercase tracking-widest">
            A Cajuí • Quem Somos
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E271D] tracking-tight">
            Nascida da paixão pelo sabor autêntico e nutritivo da nossa terra.
          </h2>
          <p className="text-base sm:text-lg text-[#556352] leading-relaxed">
            Localizados em Fortaleza, Ceará, atuamos no mercado desde 2019. Unimos qualidade rigorosa, sabor inconfundível e sustentabilidade para levar o melhor da natureza até você e seus clientes.
          </p>
        </div>

        {/* Narrative & Photo Spotlight Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-20">
          
          {/* Visual Showcase Card with Official Brand Poster */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-2xl min-h-[420px] flex items-center justify-center border-2 border-[#D6B58B]/40 group bg-[#162B12]">
            <img
              src="/a-verdadeira-qualidade.jpeg"
              alt="A verdadeira qualidade está nos detalhes - Cajuí"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 block select-none"
              loading="lazy"
            />
          </div>

          {/* Personality Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BRAND_INFO.personality.map((item, idx) => {
              const icons = [
                <Leaf className="w-6 h-6 text-[#176D05]" />,
                <ShieldCheckIcon className="w-6 h-6 text-[#176D05]" />,
                <HeartHandshake className="w-6 h-6 text-[#FF9800]" />,
                <Zap className="w-6 h-6 text-[#FF9800]" />
              ];
              const accents = ['#176D05', '#176D05', '#FF9800', '#FF9800'];

              return (
                <div
                  key={item.title}
                  className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#D6B58B]/50 flex flex-col justify-between hover:shadow-md transition-all hover:border-[#176D05]/40"
                >
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-xs mb-4">
                    {icons[idx]}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1E271D] mb-1.5 flex items-center gap-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-[#556352] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Missão, Visão e Valores (Three Core Cards from Brand Manual) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Missão */}
          <div className="bg-[#FAF7F2] rounded-3xl p-8 border-2 border-[#176D05]/20 flex flex-col justify-between hover:shadow-lg transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#176D05]/5 rounded-bl-full pointer-events-none" />
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#176D05] text-white flex items-center justify-center shadow-sm">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-[#176D05]">
                {BRAND_INFO.pillars.missao.title}
              </h3>
              <p className="text-sm text-[#3A4538] leading-relaxed font-medium">
                {BRAND_INFO.pillars.missao.text}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#D6B58B]/40 text-xs font-bold text-[#176D05] uppercase tracking-wider">
              Compromisso Sustentável
            </div>
          </div>

          {/* Visão */}
          <div className="bg-gradient-to-br from-[#176D05] to-[#0E4203] text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FF9800]/20 rounded-full blur-xl pointer-events-none" />
            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#FF9800] text-white flex items-center justify-center shadow-md">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-white">
                {BRAND_INFO.pillars.visao.title}
              </h3>
              <p className="text-sm text-white/90 leading-relaxed font-medium">
                {BRAND_INFO.pillars.visao.text}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/20 text-xs font-bold text-[#FF9800] uppercase tracking-wider relative z-10">
              Inovação & Qualidade
            </div>
          </div>

          {/* Valores */}
          <div className="bg-[#FAF7F2] rounded-3xl p-8 border-2 border-[#FF9800]/30 flex flex-col justify-between hover:shadow-lg transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF9800]/5 rounded-bl-full pointer-events-none" />
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FF9800] text-white flex items-center justify-center shadow-sm">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-[#A96C1D]">
                {BRAND_INFO.pillars.valores.title}
              </h3>
              <ul className="space-y-2.5 text-sm text-[#3A4538]">
                {BRAND_INFO.pillars.valores.items.map((val, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#176D05] shrink-0 mt-0.5" />
                    <span>{val}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-[#D6B58B]/40 text-xs font-bold text-[#A96C1D] uppercase tracking-wider">
              Ética & Parceria
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

function ShieldCheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
