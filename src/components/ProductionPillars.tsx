import React from 'react';
import { BRAND_INFO } from '../data/brandInfo';
import { Package, Sparkles, Flame, Shield, ArrowUpRight, CheckCircle, Clock, Truck, ShieldCheck } from 'lucide-react';

interface ProductionPillarsProps {
  onSelectCategory: (cat: string) => void;
}

export const ProductionPillars: React.FC<ProductionPillarsProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      id: 'castanha',
      title: 'Castanhas de Caju Nobres',
      subtitle: 'Da Farinha à Castanha Inteira Premium',
      desc: 'Processadas com rigor técnico para entregar padronização de tamanho, cor e ponto de torra impecável.',
      tag: 'Mais Vendido',
      tagColor: 'bg-[#176D05] text-white',
      items: ['Granulados XT, GT e SPT (Xerém)', 'Farinha FT 100% pura', 'Bandas B (Crua) e BT (Torrada)', 'Inteiras W, WT (Torrada) e WTS (Salgada)'],
      image: '/Castanhas de Caju Nobres.jfif',
    },
    {
      id: 'amendoim',
      title: 'Amendoins Selecionados',
      subtitle: 'Grãos Nobres e Textura Estaladiça',
      desc: 'Ideal para açaiterias, sorveterias e confeitaria. Alto rendimento operacional e padronização.',
      tag: 'Alta Demanda',
      tagColor: 'bg-[#A96C1D] text-white',
      items: ['Amendoim em Bandas sem pele', 'Amendoim Granulado (Xerém)', 'Farinha de Amendoim Puro', 'Paçoca Doce & Granel 25kg'],
      image: '/Amendoins Selecionados.jfif',
    },
    {
      id: 'granola',
      title: 'Granolas Artesanais',
      subtitle: 'Mix de Cereais Nobres e Frutas',
      desc: 'Cereais crocantes tostados em 4 sabores irresistíveis para cafeterias, açaiterias e empórios.',
      tag: 'Novidade',
      tagColor: 'bg-[#FF9800] text-white',
      items: ['Granola Banana com pedaços', 'Granola Cacau 100% puro', 'Granola Mel tradicional', 'Granola Tradicional Crocante'],
      image: '/Granolas Artesanais.jfif',
    }
  ];

  return (
    <section id="o-que-produzimos" className="py-24 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#176D05]/10 text-[#176D05] text-xs font-bold uppercase tracking-widest">
              O que produzimos
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E271D] tracking-tight">
              Linhas desenvolvidas para paladares exigentes e food service.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#556352] max-w-md font-medium">
            Da matéria-prima colhida com esmero ao beneficiamento tecnológico com fardos, caixas fracionadas e embalagens a vácuo.
          </p>
        </div>

        {/* Categories 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#D6B58B]/50 hover:border-[#176D05] shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Card Image Showcase */}
              <div className="relative w-full h-64 bg-[#F5EFE6] overflow-hidden border-b border-[#D6B58B]/30">
                <img
                  src={encodeURI(cat.image)}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 block select-none"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className={`text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full ${cat.tagColor} shadow-md`}>
                    {cat.tag}
                  </span>
                </div>
              </div>

              {/* Card Header Content */}
              <div className="p-6 sm:p-7 pb-4 space-y-2 border-b border-[#D6B58B]/20">
                <h3 className="text-2xl font-black text-[#1E271D] leading-tight group-hover:text-[#176D05] transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs text-[#A96C1D] font-bold">
                  {cat.subtitle}
                </p>
              </div>

              {/* Content & Feature Checklist */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <p className="text-sm text-[#556352] leading-relaxed">
                  {cat.desc}
                </p>

                <div className="space-y-2.5 pt-2 border-t border-[#D6B58B]/30">
                  <span className="text-xs font-bold text-[#1E271D] uppercase tracking-wider block mb-2">
                    Principais formatos e cortes:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {cat.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#3A4538] font-medium">
                        <CheckCircle className="w-3.5 h-3.5 text-[#176D05] shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onSelectCategory(cat.id)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#FAF7F2] hover:bg-[#176D05] text-[#176D05] hover:text-white font-bold text-xs uppercase tracking-wider transition-colors border border-[#D6B58B]/60 hover:border-transparent cursor-pointer"
                  >
                    <span>Ver Tabela & Códigos de Barras</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Spotlight: Embalagens a Vácuo (From Catalog Page 09) */}
        <div className="bg-gradient-to-br from-[#176D05] to-[#0A3803] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          
          {/* Subtle Arch Decor */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#FF9800]/15 blur-2xl pointer-events-none" />
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <ShieldCheck className="w-64 h-64 text-white" />
          </div>

          <div className="relative z-10 max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-extrabold tracking-widest text-[#FF9800] uppercase bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full inline-block border border-[#FF9800]/30">
                Diferencial Tecnológico Exclusivo
              </span>
              <h3 className="text-3xl sm:text-4xl font-black leading-tight">
                Embalagens a Vácuo: 24 meses de crocância e sabor sem aditivos químicos.
              </h3>
              <p className="text-base text-white/90 leading-relaxed max-w-3xl">
                Todos os nossos produtos utilizam processo de vácuo de alta barreira. A remoção do oxigênio inibe a proliferação de fungos e bactérias, mantendo o sabor original e aumentando a vida útil no seu estoque.
              </p>
            </div>

            {/* 4 Vacuum Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              {BRAND_INFO.vacuumTech.benefits.map((b, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 hover:bg-white/15 transition-all">
                  <div className="text-lg font-black text-[#FFA726] mb-1.5">
                    0{idx + 1}.
                  </div>
                  <h4 className="text-base font-bold text-white mb-1 leading-snug">
                    {b.title}
                  </h4>
                  <p className="text-xs text-white/80 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
