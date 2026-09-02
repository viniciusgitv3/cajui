import React from 'react';
import { BrandLogo } from './BrandLogo';
import { BRAND_INFO } from '../data/brandInfo';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenPresentation?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121E10] text-[#D6B58B] pt-16 pb-12 border-t-4 border-[#176D05] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info & Motto */}
          <div className="md:col-span-5 space-y-4">
            <BrandLogo variant="white" size="lg" className="mb-2" />
            <p className="text-xs text-stone-300 max-w-sm leading-relaxed">
              {BRAND_INFO.slogan}
            </p>
            <div className="pt-2">
              <span className="text-[11px] font-bold text-[#FFA726] uppercase tracking-wider block mb-1">
                Fábrica & Centro de Distribuição
              </span>
              <p className="text-xs text-stone-400">
                {BRAND_INFO.address.street} - {BRAND_INFO.address.neighborhood}<br />
                {BRAND_INFO.address.city} - {BRAND_INFO.address.state} • CEP: {BRAND_INFO.address.cep}
              </p>
            </div>
          </div>

          {/* Quick Navigation Menu */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">Navegação</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#quem-somos" className="hover:text-white transition-colors">A Cajuí, quem somos</a></li>
              <li><a href="#o-que-produzimos" className="hover:text-white transition-colors">O que produzimos</a></li>
              <li><a href="#nossos-produtos" className="hover:text-white transition-colors">Nossos produtos</a></li>
              <li><a href="#onde-estamos" className="hover:text-white transition-colors">Onde estamos</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Catalog & Commercial */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">Catálogo & Atendimento</h4>
            <p className="text-xs text-stone-300">
              Conheça nossa linha completa de castanhas de caju nobres e amendoins selecionados.
            </p>
            <div className="pt-2 text-xs text-stone-300 space-y-1">
              <div>WhatsApp: <strong className="text-white">{BRAND_INFO.contact.phone}</strong></div>
              <div>Instagram: <a href={BRAND_INFO.contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-[#FFA726] hover:underline">{BRAND_INFO.contact.instagram}</a></div>
            </div>
          </div>

        </div>

        {/* Subfooter */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-400">
          <div>
            © {new Date().getFullYear()} Cajuí Alimentos • Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6">
            <span>Fortaleza, Ceará — Brasil</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1 cursor-pointer"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase">Topo</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
