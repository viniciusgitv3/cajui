import React, { useState, useEffect, useRef } from 'react';
import { BrandLogo } from './BrandLogo';
import { BRAND_INFO } from '../data/brandInfo';
import { PRODUCTS } from '../data/products';
import {
  ChevronLeft, ChevronRight, Maximize2, Minimize2, X, Download,
  Layers, CheckCircle, ShieldCheck, MapPin, Phone, Instagram,
  Sparkles, PackageCheck, Award, Eye, Target, Share2, Printer, Truck
} from 'lucide-react';

interface CatalogPresentation1920Props {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const CatalogPresentation1920: React.FC<CatalogPresentation1920Props> = ({
  isOpen,
  onClose,
  onOpenQuote
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalSlides = 9;

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
      } else if (e.key === 'Escape') {
        if (document.fullscreenElement) {
          document.exitFullscreen();
        } else {
          onClose();
        }
      } else if (e.key.toLowerCase() === 'f') {
        toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, totalSlides, onClose]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  if (!isOpen) return null;

  const castanhas1 = PRODUCTS.filter(p => ['granulado-xt', 'granulado-gt', 'granulado-spt'].includes(p.id));
  const castanhas2 = PRODUCTS.filter(p => ['farinha-ft', 'bandas-b', 'bandas-bt', 'inteira-w'].includes(p.id));
  const castanhas3 = PRODUCTS.filter(p => ['inteira-wt', 'inteira-wts'].includes(p.id));
  const amendoins = PRODUCTS.filter(p => p.category === 'amendoim');

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-[#121811] text-white flex flex-col justify-between overflow-hidden animate-fade-in select-none"
    >
      {/* Top Floating Control Bar */}
      <div className="flex items-center justify-between px-6 py-3 bg-black/60 backdrop-blur-md border-b border-white/10 z-20">
        <div className="flex items-center gap-4">
          <BrandLogo variant="horizontal" size="sm" className="brightness-125" />
          <div className="h-4 w-px bg-white/20 hidden sm:block" />
          <span className="text-xs font-bold text-[#D6B58B] hidden sm:block tracking-wider uppercase">
            Catálogo Editorial 1920 × 1080 (16:9)
          </span>
        </div>

        {/* Slide Selector & Counter */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
            disabled={currentSlide === 0}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            title="Slide Anterior (Seta Esquerda)"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <span className="text-xs font-mono font-bold text-white px-2 py-0.5 bg-white/10 rounded-md">
            {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
          </span>

          <button
            onClick={() => setCurrentSlide(prev => Math.min(totalSlides - 1, prev + 1))}
            disabled={currentSlide === totalSlides - 1}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            title="Próximo Slide (Seta Direita / Espaço)"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Alternar Tela Cheia (F)"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          <button
            onClick={() => {
              window.print();
            }}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors hidden md:flex"
            title="Imprimir / Salvar PDF"
          >
            <Printer className="w-4 h-4" />
          </button>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#FF9800] hover:bg-[#E68500] text-white transition-colors ml-2 font-bold flex items-center gap-1.5 text-xs"
            title="Fechar Visualizador"
          >
            <X className="w-4 h-4" />
            <span className="hidden sm:inline">Sair</span>
          </button>
        </div>
      </div>

      {/* Main 16:9 Presentation Stage (Auto-Scaled & Centered) */}
      <div className="flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden relative">
        <div className="w-full max-w-[1720px] aspect-presentation max-h-[85vh] bg-[#FAF7F2] text-[#1E271D] rounded-2xl shadow-2xl overflow-hidden relative flex flex-col justify-between border-2 border-[#D6B58B]/40">
          
          {/* ========================================================================= */}
          {/* SLIDE 0: CAPA DO CATÁLOGO                                                 */}
          {/* ========================================================================= */}
          {currentSlide === 0 && (
            <div className="w-full h-full p-8 sm:p-14 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-[#FAF7F2] via-[#F5ECE0] to-[#FAF7F2]">
              {/* Organic Arch Motif in Background */}
              <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#176D05]/15 via-[#7DBD00]/10 to-transparent pointer-events-none blur-2xl" />
              <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#FF9800]/15 to-transparent pointer-events-none blur-2xl" />

              {/* Header Info */}
              <div className="flex items-center justify-between relative z-10">
                <span className="text-xs font-black tracking-widest text-[#176D05] uppercase bg-[#176D05]/10 px-4 py-1.5 rounded-full border border-[#176D05]/20">
                  Catálogo Oficial de Produtos • B2B & Food Service
                </span>
                <span className="text-xs font-bold text-[#A96C1D]">
                  Fortaleza, Ceará • 2026/2027
                </span>
              </div>

              {/* Center Content: Huge Brandmark & Editorial Statement */}
              <div className="my-auto text-center flex flex-col items-center justify-center relative z-10 py-4">
                <div className="p-6 bg-white rounded-3xl shadow-xl border border-[#D6B58B]/60 mb-6 transform hover:scale-105 transition-transform">
                  <BrandLogo size="xl" />
                </div>
                
                <h1 className="text-4xl sm:text-6xl font-black text-[#1E271D] tracking-tight max-w-4xl leading-[1.1]">
                  Castanhas de Caju, Amendoins & Linhas Nobres
                </h1>
                
                <p className="text-base sm:text-xl text-[#556352] max-w-2xl mt-3 font-medium">
                  {BRAND_INFO.slogan}
                </p>

                <div className="inline-flex items-center gap-3 mt-6 px-5 py-2 rounded-full bg-[#176D05] text-white text-xs font-bold uppercase tracking-wider shadow-md">
                  <Sparkles className="w-4 h-4 text-[#7DBD00]" />
                  <span>Embalagens a Vácuo • Até 24 Meses de Crocância</span>
                </div>
              </div>

              {/* Footer Bar */}
              <div className="flex items-center justify-between text-xs font-semibold text-[#637060] border-t border-[#D6B58B]/40 pt-4 relative z-10">
                <span>Cajuí Alimentos do Brasil Ltda</span>
                <span>(85) 9.9717-9237 • @cajuicastanhas</span>
                <span>01</span>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* SLIDE 1: QUEM SOMOS                                                      */}
          {/* ========================================================================= */}
          {currentSlide === 1 && (
            <div className="w-full h-full p-8 sm:p-12 flex flex-col justify-between bg-white relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-[#D6B58B]/40 pb-4">
                <div className="flex items-center gap-3">
                  <BrandLogo variant="symbol" size="sm" />
                  <h2 className="text-3xl font-black text-[#176D05]">Quem Somos</h2>
                </div>
                <span className="text-xs font-bold text-[#A96C1D] uppercase tracking-wider">02 • Institucional</span>
              </div>

              <div className="grid grid-cols-12 gap-8 my-auto items-center">
                <div className="col-span-12 lg:col-span-5 space-y-4">
                  <p className="text-base sm:text-lg text-[#1E271D] leading-relaxed font-semibold">
                    A Cajuí nasceu da paixão pelo sabor autêntico e nutritivo das castanhas de caju e dos amendoins.
                  </p>
                  <p className="text-sm text-[#556352] leading-relaxed">
                    Estamos localizados na cidade de Fortaleza, Ceará, e atuamos no mercado desde 2019. Unimos qualidade, sabor e sustentabilidade para levar o melhor da natureza até você.
                  </p>
                  <div className="p-4 bg-[#FAF7F2] rounded-2xl border border-[#D6B58B]/50 flex items-center gap-3">
                    <ShieldCheck className="w-8 h-8 text-[#176D05] shrink-0" />
                    <span className="text-xs font-bold text-[#1E271D]">
                      Rigoroso controle de seleção de matéria-prima e padrão sanitário de excelência.
                    </span>
                  </div>
                </div>

                <div className="col-span-12 lg:col-span-7 grid grid-cols-3 gap-4">
                  {/* Missão */}
                  <div className="bg-[#FAF7F2] p-5 rounded-2xl border-2 border-[#176D05]/20 flex flex-col justify-between">
                    <div>
                      <div className="w-9 h-9 rounded-xl bg-[#176D05] text-white flex items-center justify-center mb-3">
                        <Target className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-black text-[#176D05] mb-2">{BRAND_INFO.pillars.missao.title}</h3>
                      <p className="text-xs text-[#556352] leading-relaxed">{BRAND_INFO.pillars.missao.text}</p>
                    </div>
                  </div>

                  {/* Visão */}
                  <div className="bg-gradient-to-br from-[#176D05] to-[#0A3803] text-white p-5 rounded-2xl shadow-md flex flex-col justify-between">
                    <div>
                      <div className="w-9 h-9 rounded-xl bg-[#FF9800] text-white flex items-center justify-center mb-3">
                        <Eye className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-black text-white mb-2">{BRAND_INFO.pillars.visao.title}</h3>
                      <p className="text-xs text-white/90 leading-relaxed">{BRAND_INFO.pillars.visao.text}</p>
                    </div>
                  </div>

                  {/* Valores */}
                  <div className="bg-[#FAF7F2] p-5 rounded-2xl border-2 border-[#FF9800]/30 flex flex-col justify-between">
                    <div>
                      <div className="w-9 h-9 rounded-xl bg-[#FF9800] text-white flex items-center justify-center mb-3">
                        <Award className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-black text-[#A96C1D] mb-2">{BRAND_INFO.pillars.valores.title}</h3>
                      <ul className="text-[11px] text-[#556352] space-y-1.5">
                        {BRAND_INFO.pillars.valores.items.map((v, i) => (
                          <li key={i} className="flex items-start gap-1 font-medium">
                            <span className="text-[#176D05] font-bold">•</span>
                            <span>{v}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-semibold text-[#637060] border-t border-[#D6B58B]/40 pt-3">
                <span>Cajuí Alimentos • Origem & Sustentabilidade</span>
                <span>02</span>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* SLIDE 2: CASTANHAS DE CAJU I (XT, GT, SPT)                                 */}
          {/* ========================================================================= */}
          {currentSlide === 2 && (
            <div className="w-full h-full p-8 sm:p-12 flex flex-col justify-between bg-[#FAF7F2] relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-[#D6B58B]/40 pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black px-3 py-1 bg-[#176D05] text-white rounded-full">Linha Tradicional</span>
                  <h2 className="text-3xl font-black text-[#176D05]">Castanhas de Caju (Xerém XT, GT & SPT)</h2>
                </div>
                <span className="text-xs font-bold text-[#A96C1D] uppercase tracking-wider">03 • Granulados</span>
              </div>

              <div className="grid grid-cols-3 gap-6 my-auto">
                {castanhas1.map((item) => (
                  <div key={item.id} className="bg-white p-5 rounded-2xl border border-[#D6B58B]/60 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-black px-2.5 py-0.5 bg-[#176D05]/10 text-[#176D05] rounded-md">
                          CÓD: {item.code}
                        </span>
                        <span className="text-[11px] font-bold text-[#A96C1D]">Validade 12M</span>
                      </div>
                      <h3 className="text-lg font-black text-[#1E271D] leading-tight">{item.name}</h3>
                      <p className="text-xs text-[#A96C1D] font-bold mb-3">{item.subtitle}</p>
                      
                      {/* Specs Table */}
                      <table className="w-full text-left text-[11px] mb-3">
                        <thead className="bg-stone-50 text-stone-600 font-bold border-b border-stone-200">
                          <tr>
                            <th className="p-1">Unidade</th>
                            <th className="p-1">Cód. Barras</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-100 text-stone-700">
                          {item.specs.slice(0, 3).map((s, idx) => (
                            <tr key={idx}>
                              <td className="p-1 font-semibold">{s.unidade}</td>
                              <td className="p-1 font-mono text-[#176D05]">{s.codBarras}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-[#FAF7F2] p-2 rounded-xl text-[10px] font-semibold text-[#556352] flex items-center justify-between">
                      <span>Opção Granel: 25KG e 15KG</span>
                      <span className="text-[#176D05] font-bold">Embalagem a Vácuo</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs font-semibold text-[#637060] border-t border-[#D6B58B]/40 pt-3">
                <span>Ideal para sorveterias, açaiterias, confeitaria e panificação</span>
                <span>03</span>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* SLIDE 3: CASTANHAS DE CAJU II (FT, B, BT, W)                               */}
          {/* ========================================================================= */}
          {currentSlide === 3 && (
            <div className="w-full h-full p-8 sm:p-12 flex flex-col justify-between bg-white relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-[#D6B58B]/40 pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black px-3 py-1 bg-[#176D05] text-white rounded-full">Linha Técnica & Nobre</span>
                  <h2 className="text-3xl font-black text-[#176D05]">Castanhas de Caju (Farinha, Bandas & Inteira W)</h2>
                </div>
                <span className="text-xs font-bold text-[#A96C1D] uppercase tracking-wider">04 • Farinhas & Bandas</span>
              </div>

              <div className="grid grid-cols-4 gap-4 my-auto">
                {castanhas2.map((item) => (
                  <div key={item.id} className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#D6B58B]/50 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-black px-2 py-0.5 bg-[#176D05] text-white rounded">
                          {item.code}
                        </span>
                        <span className="text-[10px] font-bold text-[#A96C1D]">12 Meses</span>
                      </div>
                      <h3 className="text-base font-black text-[#1E271D] leading-tight">{item.name}</h3>
                      <p className="text-[11px] text-[#A96C1D] font-bold mb-2">{item.subtitle}</p>
                      
                      <div className="space-y-1 text-[10px] text-[#556352] mb-3 bg-white p-2.5 rounded-xl border border-stone-200">
                        <div className="font-bold text-[#1E271D]">Fardos 30x1KG | Cx 22x1KG | Cx 12x1KG</div>
                        <div className="font-mono text-[#176D05]">EAN: {item.specs[0]?.codBarras}</div>
                      </div>
                    </div>
                    <div className="text-[10px] text-[#637060] font-medium border-t border-stone-200 pt-1.5">
                      Granel: 25KG e 15KG
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs font-semibold text-[#637060] border-t border-[#D6B58B]/40 pt-3">
                <span>Padronização e pureza sem quebras excessivas</span>
                <span>04</span>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* SLIDE 4: CASTANHAS DE CAJU III (WT & WTS)                                  */}
          {/* ========================================================================= */}
          {currentSlide === 4 && (
            <div className="w-full h-full p-8 sm:p-12 flex flex-col justify-between bg-[#FAF7F2] relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-[#D6B58B]/40 pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black px-3 py-1 bg-[#FF9800] text-white rounded-full">Destaques Nobres</span>
                  <h2 className="text-3xl font-black text-[#176D05]">Castanhas Inteiras Torradas (WT & WTS)</h2>
                </div>
                <span className="text-xs font-bold text-[#A96C1D] uppercase tracking-wider">05 • Premium</span>
              </div>

              <div className="grid grid-cols-2 gap-8 my-auto max-w-5xl mx-auto w-full">
                {castanhas3.map((item) => (
                  <div key={item.id} className="bg-white p-6 rounded-3xl border-2 border-[#176D05]/20 shadow-md flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-black px-3 py-1 bg-[#176D05] text-white rounded-full">
                          CÓD: {item.code}
                        </span>
                        <span className="text-xs font-bold text-[#FF9800] bg-[#FF9800]/10 px-2.5 py-0.5 rounded-full">
                          Validade 12 Meses
                        </span>
                      </div>
                      <h3 className="text-2xl font-black text-[#1E271D]">{item.name}</h3>
                      <p className="text-sm font-bold text-[#A96C1D] mb-3">{item.subtitle}</p>
                      <p className="text-xs text-[#556352] leading-relaxed mb-4">{item.description}</p>
                      
                      <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#D6B58B]/50 space-y-2 text-xs">
                        <div className="flex justify-between font-bold text-[#1E271D]">
                          <span>Fardos & Caixas:</span>
                          <span className="text-[#176D05]">30x1KG, 22x1KG, 12x1KG</span>
                        </div>
                        <div className="flex justify-between font-mono text-[#176D05]">
                          <span>Cód. Barras:</span>
                          <span className="font-bold">{item.specs[0]?.codBarras}</span>
                        </div>
                        <div className="flex justify-between text-[#637060]">
                          <span>Embalagens Granel:</span>
                          <span>25 KG e 15 KG</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs font-semibold text-[#637060] border-t border-[#D6B58B]/40 pt-3">
                <span>Torra artesanal e crocância suprema</span>
                <span>05</span>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* SLIDE 5: AMENDOINS                                                        */}
          {/* ========================================================================= */}
          {currentSlide === 5 && (
            <div className="w-full h-full p-8 sm:p-12 flex flex-col justify-between bg-[#FAF7F2] relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-[#D6B58B]/40 pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black px-3 py-1 bg-[#A96C1D] text-white rounded-full">Linha Amendoins</span>
                  <h2 className="text-3xl font-black text-[#176D05]">Amendoins Selecionados</h2>
                </div>
                <span className="text-xs font-bold text-[#A96C1D] uppercase tracking-wider">06 • Amendoins</span>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-auto">
                {amendoins.map((item) => (
                  <div key={item.id} className="bg-white p-5 rounded-3xl border border-[#D6B58B]/60 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-black px-2.5 py-0.5 bg-[#A96C1D] text-white rounded-md">
                          {item.code}
                        </span>
                        <span className="text-xs font-bold text-[#176D05]">Validade 12M</span>
                      </div>
                      <h3 className="text-lg font-black text-[#1E271D] leading-tight">{item.name}</h3>
                      <p className="text-[11px] text-[#A96C1D] font-bold mb-2">{item.subtitle}</p>
                      <p className="text-[11px] text-[#556352] leading-relaxed mb-3 line-clamp-3">{item.description}</p>

                      <div className="bg-[#FAF7F2] p-2.5 rounded-2xl border border-[#D6B58B]/40 space-y-1 text-[11px]">
                        <div className="font-semibold text-[#1E271D]">Fardos: 30x1KG | Cx: 22x1KG</div>
                        <div className="font-mono text-[#176D05]">EAN: {item.specs[0]?.codBarras}</div>
                      </div>
                    </div>

                    <div className="text-[11px] text-[#637060] font-medium border-t border-stone-100 pt-2.5 mt-3">
                      Granel: 25 KG e 15 KG
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs font-semibold text-[#637060] border-t border-[#D6B58B]/40 pt-3">
                <span>Rendimento superior para o food service</span>
                <span>06</span>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* SLIDE 6: EMBALAGENS A VÁCUO                                               */}
          {/* ========================================================================= */}
          {currentSlide === 6 && (
            <div className="w-full h-full p-8 sm:p-12 flex flex-col justify-between bg-gradient-to-br from-[#176D05] to-[#093302] text-white relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/20 pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black px-3 py-1 bg-[#FF9800] text-white rounded-full">Tecnologia</span>
                  <h2 className="text-3xl font-black text-white">Embalagens a Vácuo Cajuí</h2>
                </div>
                <span className="text-xs font-bold text-[#D6B58B] uppercase tracking-wider">07 • Conservação</span>
              </div>

              <div className="my-auto space-y-6 max-w-5xl mx-auto w-full">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-black text-[#FFA726]">
                    Conservam a crocância e o sabor por até 24 meses sem a necessidade de aditivo químico.
                  </h3>
                  <p className="text-sm text-white/80 max-w-2xl mx-auto">
                    A embalagem a vácuo remove o oxigênio, o que inibe o crescimento de bactérias e fungos de forma 100% natural.
                  </p>
                </div>

                <div className="grid grid-cols-4 gap-4">
                  {BRAND_INFO.vacuumTech.benefits.map((b, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15">
                      <div className="text-lg font-black text-[#FFA726] mb-1">0{i + 1}</div>
                      <h4 className="text-sm font-bold text-white mb-1">{b.title}</h4>
                      <p className="text-xs text-white/80">{b.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-semibold text-white/70 border-t border-white/20 pt-3">
                <span>Tecnologia que valoriza o produto e protege o seu estoque</span>
                <span>07</span>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* SLIDE 7: ONDE ESTAMOS                                                     */}
          {/* ========================================================================= */}
          {currentSlide === 7 && (
            <div className="w-full h-full p-8 sm:p-12 flex flex-col justify-between bg-white relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-[#D6B58B]/40 pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black px-3 py-1 bg-[#176D05] text-white rounded-full">Cobertura</span>
                  <h2 className="text-3xl font-black text-[#176D05]">Onde Estamos • Presença Nacional</h2>
                </div>
                <span className="text-xs font-bold text-[#A96C1D] uppercase tracking-wider">08 • Distribuição</span>
              </div>

              <div className="grid grid-cols-12 gap-8 my-auto items-center">
                <div className="col-span-6 space-y-4">
                  <h3 className="text-2xl font-black text-[#1E271D]">
                    A Cajuí atua em diversos estados do Brasil com logística ágil e pontual.
                  </h3>
                  <p className="text-sm text-[#556352] leading-relaxed">
                    Com sede industrial em Fortaleza-CE, abastecemos redes de distribuição, atacadistas e food service com segurança de entrega e estoque regular.
                  </p>
                  <div className="p-4 bg-[#FAF7F2] rounded-2xl border border-[#D6B58B]/50 text-xs font-bold text-[#176D05] flex items-center gap-2">
                    <Truck className="w-5 h-5" />
                    <span>Frota e parceiros logísticos especializados em transporte de alimentos.</span>
                  </div>
                </div>

                <div className="col-span-6 grid grid-cols-2 gap-3">
                  {BRAND_INFO.distributionStates.map((st) => (
                    <div
                      key={st.uf}
                      className={`p-3.5 rounded-xl border flex items-center justify-between ${
                        st.isHQ
                          ? 'bg-[#176D05] text-white border-[#176D05]'
                          : 'bg-[#FAF7F2] text-[#1E271D] border-[#D6B58B]/50'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-black w-7 h-7 rounded-lg flex items-center justify-center ${st.isHQ ? 'bg-[#FF9800] text-white' : 'bg-[#176D05]/10 text-[#176D05]'}`}>
                          {st.uf}
                        </span>
                        <span className="text-xs font-bold">{st.name}</span>
                      </div>
                      {st.isHQ && <span className="text-[10px] uppercase font-bold tracking-wider text-[#FFA726]">Sede</span>}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-semibold text-[#637060] border-t border-[#D6B58B]/40 pt-3">
                <span>Fortaleza • CE | Atendimento nacional</span>
                <span>08</span>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* SLIDE 8: CONTATO & ENCERRAMENTO                                          */}
          {/* ========================================================================= */}
          {currentSlide === 8 && (
            <div className="w-full h-full p-8 sm:p-14 flex flex-col justify-between bg-gradient-to-br from-[#176D05] via-[#125804] to-[#0A3302] text-white relative overflow-hidden">
              <div className="flex items-center justify-between relative z-10">
                <BrandLogo variant="horizontal" size="sm" className="brightness-125" />
                <span className="text-xs font-bold text-[#D6B58B]">09 • Contato</span>
              </div>

              <div className="my-auto text-center space-y-6 max-w-3xl mx-auto relative z-10">
                <div className="inline-block p-4 bg-white rounded-3xl shadow-xl">
                  <BrandLogo size="lg" />
                </div>

                <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
                  Leve os produtos da Cajuí para o seu comércio.
                </h2>
                <p className="text-base text-white/90 font-medium">
                  Entre em contato com o nosso departamento comercial e solicite uma tabela de preços personalizada para o seu volume.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15">
                    <div className="text-[10px] uppercase font-bold text-[#FFA726]">Endereço Fábrica</div>
                    <div className="text-xs font-semibold mt-1">Rua Maria de Jesus, 490 - Siqueira</div>
                    <div className="text-[11px] text-white/80">Fortaleza - CE | CEP: 60731-710</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15">
                    <div className="text-[10px] uppercase font-bold text-[#FFA726]">Telefone / WhatsApp</div>
                    <div className="text-sm font-bold text-white mt-1">(85) 9.9717-9237</div>
                    <div className="text-[11px] text-[#7DBD00]">Atendimento B2B Ágil</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15">
                    <div className="text-[10px] uppercase font-bold text-[#FFA726]">Instagram Oficial</div>
                    <div className="text-sm font-bold text-white mt-1">@cajuicastanhas</div>
                    <div className="text-[11px] text-white/80">Acompanhe nossas novidades</div>
                  </div>
                </div>

                <div className="pt-4 flex justify-center gap-4">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenQuote();
                    }}
                    className="px-8 py-3.5 rounded-full bg-[#FF9800] hover:bg-[#E68500] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg transition-all cursor-pointer"
                  >
                    Montar Pedido / Solicitar Cotação
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-semibold text-white/70 border-t border-white/20 pt-3 relative z-10">
                <span>Qualidade e sabor que fortalecem bons negócios.</span>
                <span>09</span>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Bottom Thumbnail Strip */}
      <div className="px-6 py-3 bg-black/80 backdrop-blur-md border-t border-white/10 flex items-center justify-between gap-4 overflow-x-auto">
        <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                currentSlide === idx
                  ? 'bg-[#FF9800] text-white shadow-sm'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              Slide {String(idx + 1).padStart(2, '0')}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3 text-xs text-white/60">
          <span>Use as <strong>Setas ◄ ►</strong> do teclado para navegar</span>
        </div>
      </div>
    </div>
  );
};
