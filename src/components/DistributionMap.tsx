import React, { useState } from 'react';
import { BRAND_INFO } from '../data/brandInfo';
import { MapPin, Truck, CheckCircle2, Building2, PhoneCall, ShieldCheck, Navigation } from 'lucide-react';

export const DistributionMap: React.FC = () => {
  const [selectedState, setSelectedState] = useState(BRAND_INFO.distributionStates[0]);

  return (
    <section id="onde-estamos" className="py-24 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#176D05]/10 text-[#176D05] text-xs font-bold uppercase tracking-widest">
            Logística & Cobertura
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E271D] tracking-tight">
            Onde Estamos • Presentes em Diversos Estados do Brasil
          </h2>
          <p className="text-base sm:text-lg text-[#556352] leading-relaxed">
            Com base operacional e industrial em Fortaleza-CE, conectamos a riqueza do Nordeste aos principais centros gastronômicos e comerciais do país.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive State Selector & Map Summary */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#D6B58B]/50 shadow-xs flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#176D05]">
                  Selecione uma Região Atendida
                </span>
                <span className="text-xs font-semibold text-[#A96C1D]">
                  8 Estados Estruturados
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
                {BRAND_INFO.distributionStates.map((st) => {
                  const isSelected = selectedState.uf === st.uf;
                  return (
                    <button
                      key={st.uf}
                      onClick={() => setSelectedState(st)}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#176D05] text-white border-[#176D05] shadow-md scale-[1.02]'
                          : 'bg-[#FAF7F2] text-[#1E271D] border-[#D6B58B]/40 hover:border-[#176D05]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-black px-1.5 py-0.5 rounded ${isSelected ? 'bg-white/20 text-white' : 'bg-[#176D05]/10 text-[#176D05]'}`}>
                          {st.uf}
                        </span>
                        {st.isHQ && (
                          <span className={`text-[9px] font-bold uppercase ${isSelected ? 'text-[#FFA726]' : 'text-[#FF9800]'}`}>
                            Fábrica
                          </span>
                        )}
                      </div>
                      <div className="text-xs font-bold mt-2 truncate">{st.name}</div>
                    </button>
                  );
                })}
              </div>

              {/* Highlight Card for the Selected State */}
              <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#D6B58B]/50 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-[#176D05] text-white flex items-center justify-center font-bold text-sm">
                      {selectedState.uf}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#1E271D]">{selectedState.name}</h4>
                      <p className="text-xs text-[#556352]">Polo Regional: {selectedState.capital}</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 bg-[#176D05]/10 text-[#176D05] rounded-full">
                    Atendimento Regular
                  </span>
                </div>

                <p className="text-xs text-[#556352] leading-relaxed">
                  {selectedState.isHQ
                    ? 'Sede fabril e centro de distribuição principal em Fortaleza-CE. Saída imediata de fardos, caixas e pedidos fracionados ou em carga fechada.'
                    : `Rotas comerciais frequentes e parceiros atacadistas consolidados em ${selectedState.name}, garantindo reposição contínua com validade fresca.`}
                </p>

                <div className="flex flex-wrap gap-3 pt-2 text-[11px] font-semibold text-[#176D05]">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#7DBD00]" />
                    <span>Embalagens a vácuo com barreira UV</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#7DBD00]" />
                    <span>Rastreabilidade de lote</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#D6B58B]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-[#556352]">
                <Truck className="w-4 h-4 text-[#176D05]" />
                <span>Despachamos para transportadoras de todo o país.</span>
              </div>
              <a
                href="#contato"
                className="text-xs font-bold text-[#176D05] hover:text-[#FF9800] uppercase tracking-wider flex items-center gap-1"
              >
                <span>Consultar frete para sua cidade</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Right Column: HQ Factory Spotlight & Logistics Pillars */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#176D05] via-[#125504] to-[#0A3302] text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FFA726] text-xs font-extrabold uppercase tracking-wider">
                Sede & Parque Fabril
              </div>
              <h3 className="text-2xl font-black text-white leading-tight">
                Estrutura industrial própria e moderna no Ceará.
              </h3>
              <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                Nossa fábrica em Fortaleza-CE conta com maquinário de torrefação precisa, salas climatizadas e linhas automáticas de empacotamento a vácuo.
              </p>

              <div className="space-y-3 pt-2">
                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/10 flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-[#FF9800] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">Fábrica Fortaleza</div>
                    <div className="text-[11px] text-white/80">{BRAND_INFO.address.street} - {BRAND_INFO.address.neighborhood}</div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/10 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#7DBD00] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">Controle Sanitário & Laudos</div>
                    <div className="text-[11px] text-white/80">Lotes auditados e certificados para uso industrial e varejo</div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/10 flex items-start gap-3">
                  <Navigation className="w-5 h-5 text-[#FFA726] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">Capilaridade Nacional</div>
                    <div className="text-[11px] text-white/80">Atendimento a açaiterias, sorveterias, buffets e supermercados</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs text-white/80">
              <span>Telefone: {BRAND_INFO.contact.phone}</span>
              <span className="font-bold text-[#FFA726]">Fortaleza • CE</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
