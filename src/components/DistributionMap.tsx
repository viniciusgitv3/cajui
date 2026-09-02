import React, { useState } from 'react';
import { BRAND_INFO } from '../data/brandInfo';
import { BRAZIL_STATES_PATHS, BrazilStatePath } from '../data/brazilStatesSvg';
import { MapPin, Truck, CheckCircle2, Building2, PhoneCall, ShieldCheck, Navigation, Sparkles, Radio, Layers, Info } from 'lucide-react';

export const DistributionMap: React.FC = () => {
  const [selectedUf, setSelectedUf] = useState<string>('CE');
  const [hoveredState, setHoveredState] = useState<BrazilStatePath | null>(null);

  // Find selected state object
  const activeStateObj = BRAZIL_STATES_PATHS.find(s => s.uf === selectedUf) || BRAZIL_STATES_PATHS.find(s => s.uf === 'CE')!;
  const displayState = hoveredState || activeStateObj;

  const hqState = BRAZIL_STATES_PATHS.find(s => s.isHQ) || BRAZIL_STATES_PATHS[0];

  // Distribution structured states info from brand
  const distributionUfs = new Set(['CE', 'PI', 'MA', 'AM', 'RO', 'RR', 'PE', 'SE', 'BA']);

  return (
    <section id="onde-estamos" className="py-24 bg-[#FAF7F2] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#176D05]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FF9800]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#176D05]/10 text-[#176D05] text-xs font-bold uppercase tracking-widest">
            Logística & Cobertura Nacional
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E271D] tracking-tight">
            Onde Estamos • Presentes em Diversos Estados do Brasil
          </h2>
          <p className="text-base sm:text-lg text-[#556352] leading-relaxed">
            Com base industrial própria em Fortaleza-CE, fornecemos castanhas de caju nobres, amendoins e granolas para grandes redes, food service e atacado em todo o território nacional.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive State Selector & Summary Details */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#D6B58B]/50 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#D6B58B]/30 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#176D05] flex items-center gap-1.5">
                  <Radio className="w-4 h-4 text-[#176D05] animate-pulse" />
                  Regiões Atendidas
                </span>
                <span className="text-xs font-bold text-[#A96C1D]">
                  Pólos Estruturados & Frete Nacional
                </span>
              </div>

              {/* Quick Select Buttons Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {BRAZIL_STATES_PATHS.filter(s => distributionUfs.has(s.uf)).map((st) => {
                  const isSelected = selectedUf === st.uf;
                  return (
                    <button
                      key={st.uf}
                      onClick={() => setSelectedUf(st.uf)}
                      className={`p-2.5 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center ${
                        isSelected
                          ? 'bg-[#176D05] text-white border-[#176D05] shadow-md scale-[1.03]'
                          : 'bg-[#FAF7F2] text-[#1E271D] border-[#D6B58B]/40 hover:border-[#176D05]'
                      }`}
                    >
                      <span className={`text-xs font-black px-2 py-0.5 rounded-md ${isSelected ? 'bg-white/20 text-white' : 'bg-[#176D05]/10 text-[#176D05]'}`}>
                        {st.uf}
                      </span>
                      <span className="text-[11px] font-bold mt-1 truncate w-full">
                        {st.name}
                      </span>
                      {st.isHQ && (
                        <span className={`text-[8px] font-black uppercase tracking-wider mt-0.5 ${isSelected ? 'text-[#FFD580]' : 'text-[#FF9800]'}`}>
                          ★ Fábrica
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Dynamic State Info Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#FAF7F2] to-[#F5EFE6] border border-[#D6B58B]/60 space-y-3 shadow-2xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center font-black text-base shadow-sm ${
                      displayState.isHQ
                        ? 'bg-[#FF9800] text-white'
                        : displayState.isActive
                        ? 'bg-[#176D05] text-white'
                        : 'bg-[#A96C1D] text-white'
                    }`}>
                      {displayState.uf}
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-[#1E271D]">
                        {displayState.name}
                      </h4>
                      <p className="text-xs text-[#556352] font-semibold">
                        {displayState.isHQ ? 'Sede Matriz & Parque Fabril' : 'Polo de Atendimento Regional'}
                      </p>
                    </div>
                  </div>

                  <span className={`text-xs font-extrabold px-3 py-1 rounded-full ${
                    displayState.isHQ
                      ? 'bg-[#FF9800] text-white shadow-xs'
                      : displayState.isActive
                      ? 'bg-[#176D05]/15 text-[#176D05]'
                      : 'bg-[#A96C1D]/15 text-[#A96C1D]'
                  }`}>
                    {displayState.isHQ ? 'Matriz' : displayState.isActive ? 'Rota Regular' : 'Despacho'}
                  </span>
                </div>

                <p className="text-xs text-[#556352] leading-relaxed">
                  {displayState.isHQ
                    ? 'Sede fabril e centro de distribuição principal em Fortaleza-CE. Processamento com maquinário de ponta, torrefação precisa e expedição imediata para transportadoras.'
                    : displayState.isActive
                    ? `Fluxo contínuo de cargas fechadas e pedidos fracionados para ${displayState.name}. Garantia de validade estendida com embalagens herméticas a vácuo.`
                    : `Despachamos pedidos para distribuidoras e comércios em ${displayState.name} com parceria com as principais transportadoras rodoviárias do país.`}
                </p>

                <div className="flex flex-wrap gap-3 pt-2 text-[11px] font-semibold text-[#176D05]">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#7DBD00]" />
                    <span>Embalagens a vácuo de alta barreira</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#7DBD00]" />
                    <span>Rastreabilidade por lote</span>
                  </div>
                </div>
              </div>

              {/* Quality & Factory Micro-Specs */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="bg-white p-3 rounded-xl border border-[#D6B58B]/40 flex items-center gap-2.5 shadow-2xs">
                  <Building2 className="w-5 h-5 text-[#176D05] shrink-0" />
                  <div>
                    <div className="text-[11px] font-bold text-[#1E271D]">Fábrica Fortaleza-CE</div>
                    <div className="text-[10px] text-[#637060]">Rua Maria de Jesus, 490</div>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-[#D6B58B]/40 flex items-center gap-2.5 shadow-2xs">
                  <ShieldCheck className="w-5 h-5 text-[#FF9800] shrink-0" />
                  <div>
                    <div className="text-[11px] font-bold text-[#1E271D]">Laudos & Auditoria</div>
                    <div className="text-[10px] text-[#637060]">Controle sanitário rigoroso</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#D6B58B]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-[#556352]">
                <Truck className="w-4 h-4 text-[#176D05]" />
                <span>Despacho ágil para todo o território nacional.</span>
              </div>
              <a
                href="#contato"
                className="text-xs font-bold text-[#176D05] hover:text-[#FF9800] uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>Consultar cotação de frete</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Sophisticated Vector Brazil Map with Geographic States */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#D6B58B]/50 shadow-md relative overflow-hidden flex flex-col justify-between group">
            
            {/* Map Header & Legend */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 z-20 relative border-b border-[#D6B58B]/30 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#176D05] animate-pulse" />
                  <h3 className="text-sm font-black text-[#1E271D] uppercase tracking-wider">
                    Mapa de Distribuição e Presença Nacional
                  </h3>
                </div>
                <p className="text-[11px] text-[#637060] mt-0.5">
                  Passe o mouse ou clique nos estados para ver a cobertura
                </p>
              </div>

              {/* Clean Legend Badges */}
              <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#176D05] text-white shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  Distribuição Estruturada
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#F59E0B] text-white shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  Cobertura & Frete Nacional
                </span>
              </div>
            </div>

            {/* Vector SVG Brazil Stage */}
            <div className="relative my-auto w-full py-4 flex items-center justify-center">
              
              <svg
                viewBox="0 0 740 700"
                className="w-full h-auto max-h-[560px] select-none filter drop-shadow-md overflow-visible"
              >
                <defs>
                  {/* Subtle Filter Shadow for Active Hover State */}
                  <filter id="stateGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#176D05" floodOpacity="0.4" />
                  </filter>
                  <filter id="hqGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#FF9800" floodOpacity="0.6" />
                  </filter>

                  {/* Gradient for Active Cajuí States */}
                  <linearGradient id="activeStateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1E7E0A" />
                    <stop offset="100%" stopColor="#125704" />
                  </linearGradient>

                  {/* Gradient for National Coverage States */}
                  <linearGradient id="nationalStateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#D97706" />
                  </linearGradient>

                  {/* Gradient for HQ Ceará */}
                  <linearGradient id="hqStateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#176D05" />
                    <stop offset="100%" stopColor="#0B4002" />
                  </linearGradient>
                </defs>

                {/* 1. STATE PATHS LAYER */}
                {BRAZIL_STATES_PATHS.map((st) => {
                  const isSelected = selectedUf === st.uf;
                  const isHovered = hoveredState?.uf === st.uf;
                  const isActive = st.isActive;
                  const isHQ = st.isHQ;

                  let fillColor = isActive ? 'url(#activeStateGrad)' : 'url(#nationalStateGrad)';
                  if (isHQ) fillColor = 'url(#hqStateGrad)';

                  return (
                    <path
                      key={st.uf}
                      d={st.path}
                      fill={fillColor}
                      stroke="#FFFFFF"
                      strokeWidth={isSelected || isHovered ? 2.5 : 1.2}
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      className="transition-all duration-300 cursor-pointer"
                      style={{
                        opacity: isSelected || isHovered ? 1 : 0.95,
                        filter: isHQ ? 'url(#hqGlow)' : (isSelected || isHovered) ? 'url(#stateGlow)' : 'none',
                        transform: (isSelected || isHovered) ? 'scale(1.008)' : 'scale(1)',
                        transformOrigin: `${st.cx}px ${st.cy}px`
                      }}
                      onMouseEnter={() => setHoveredState(st)}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedUf(st.uf)}
                    />
                  );
                })}

                {/* 2. LOGISTICS LOGISTICS ARCS FROM CEARÁ TO ACTIVE REGIONS */}
                {BRAZIL_STATES_PATHS.filter(s => s.isActive && !s.isHQ).map((st) => {
                  const isTarget = selectedUf === st.uf || hoveredState?.uf === st.uf;
                  const midX = (hqState.cx + st.cx) / 2 + (hqState.cy - st.cy) * 0.15;
                  const midY = (hqState.cy + st.cy) / 2 - Math.abs(hqState.cx - st.cx) * 0.12;

                  return (
                    <path
                      key={`arc-${st.uf}`}
                      d={`M ${hqState.cx},${hqState.cy} Q ${midX},${midY} ${st.cx},${st.cy}`}
                      fill="none"
                      stroke={isTarget ? '#FFFFFF' : '#FFD580'}
                      strokeWidth={isTarget ? 3 : 1.5}
                      strokeDasharray={isTarget ? '5 3' : '3 3'}
                      strokeOpacity={isTarget ? 1 : 0.65}
                      className="pointer-events-none transition-all duration-300"
                    />
                  );
                })}

                {/* 3. UF LABELS ON STATES */}
                {BRAZIL_STATES_PATHS.map((st) => {
                  // For states with external callout pills (small coastal states), don't draw text over polygon
                  if (st.callout) return null;

                  const isSelected = selectedUf === st.uf;
                  const isHovered = hoveredState?.uf === st.uf;
                  const isHQ = st.isHQ;

                  return (
                    <g
                      key={`label-${st.uf}`}
                      className="pointer-events-none select-none"
                    >
                      {/* Optional subtle backdrop badge for large states */}
                      <text
                        x={st.cx}
                        y={st.cy + 4}
                        textAnchor="middle"
                        fill="#FFFFFF"
                        fontSize={isHQ ? "15" : isSelected ? "14" : "12"}
                        fontWeight="900"
                        fontFamily="Montserrat, sans-serif"
                        className="transition-all duration-300"
                        style={{
                          textShadow: '0px 1px 3px rgba(0,0,0,0.6)'
                        }}
                      >
                        {st.uf}
                      </text>
                    </g>
                  );
                })}

                {/* 4. CALLOUT BADGES & LEADER LINES FOR COASTAL/SMALL STATES */}
                {BRAZIL_STATES_PATHS.filter(s => s.callout).map((st) => {
                  const callout = st.callout!;
                  const isSelected = selectedUf === st.uf;
                  const isHovered = hoveredState?.uf === st.uf;
                  const isActive = st.isActive;

                  const pillBg = isActive ? '#176D05' : '#F59E0B';

                  return (
                    <g
                      key={`callout-${st.uf}`}
                      onClick={() => setSelectedUf(st.uf)}
                      onMouseEnter={() => setHoveredState(st)}
                      onMouseLeave={() => setHoveredState(null)}
                      className="cursor-pointer group"
                    >
                      {/* Leader Line */}
                      <path
                        d={`M ${st.cx},${st.cy} L ${callout.pillX - 16},${callout.pillY}`}
                        stroke="#D6B58B"
                        strokeWidth="1.2"
                        strokeDasharray="2 2"
                      />
                      
                      {/* Node Dot on State */}
                      <circle
                        cx={st.cx}
                        cy={st.cy}
                        r="2.5"
                        fill="#FFFFFF"
                      />

                      {/* Floating Callout Pill */}
                      <circle
                        cx={callout.pillX}
                        cy={callout.pillY}
                        r={isSelected || isHovered ? 16 : 14}
                        fill={isSelected || isHovered ? '#1E271D' : pillBg}
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        className="transition-all duration-300 filter drop-shadow-md"
                      />

                      <text
                        x={callout.pillX}
                        y={callout.pillY + 4}
                        textAnchor="middle"
                        fill="#FFFFFF"
                        fontSize="10"
                        fontWeight="900"
                        fontFamily="Montserrat, sans-serif"
                        className="pointer-events-none select-none"
                      >
                        {st.uf}
                      </text>
                    </g>
                  );
                })}

                {/* 5. HQ CEARÁ SPECIAL RADAR BEACON */}
                <g className="pointer-events-none">
                  <circle
                    cx={hqState.cx}
                    cy={hqState.cy}
                    r="22"
                    fill="none"
                    stroke="#FF9800"
                    strokeWidth="2"
                    className="animate-ping opacity-60"
                  />
                  <circle
                    cx={hqState.cx}
                    cy={hqState.cy}
                    r="12"
                    fill="#FF9800"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                  />
                  <text
                    x={hqState.cx}
                    y={hqState.cy + 3.5}
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="8"
                    fontWeight="900"
                  >
                    ★
                  </text>
                </g>
              </svg>

            </div>

            {/* Bottom Floating Bar */}
            <div className="pt-4 border-t border-[#D6B58B]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#556352]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#176D05]" />
                <span className="font-bold text-[#1E271D]">Fortaleza-CE:</span>
                <span>Matriz de Torrefação, Empacotamento e Distribuição</span>
              </div>
              <div className="flex items-center gap-1.5 font-bold text-[#176D05]">
                <Sparkles className="w-4 h-4 text-[#FF9800]" />
                <span>Atendimento B2B, Varejo e Food Service</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
