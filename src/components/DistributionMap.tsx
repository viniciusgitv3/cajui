import React, { useState } from 'react';
import { BRAND_INFO } from '../data/brandInfo';
import { MapPin, Truck, CheckCircle2, Building2, PhoneCall, ShieldCheck, Navigation, Sparkles, Radio, Layers } from 'lucide-react';

interface StateMapCoord {
  uf: string;
  name: string;
  x: number;
  y: number;
  isHQ?: boolean;
  capital: string;
}

export const DistributionMap: React.FC = () => {
  const [selectedState, setSelectedState] = useState(BRAND_INFO.distributionStates[0]);

  // Coordinates calibrated for 3D Brazil Map projection (viewBox 0 0 600 600)
  const stateCoords: StateMapCoord[] = [
    { uf: 'CE', name: 'Ceará', x: 450, y: 175, isHQ: true, capital: 'Fortaleza' },
    { uf: 'PI', name: 'Piauí', x: 405, y: 215, capital: 'Teresina' },
    { uf: 'MA', name: 'Maranhão', x: 365, y: 185, capital: 'São Luís' },
    { uf: 'AM', name: 'Amazonas', x: 165, y: 195, capital: 'Manaus' },
    { uf: 'RR', name: 'Roraima', x: 205, y: 105, capital: 'Boa Vista' },
    { uf: 'PE', name: 'Pernambuco', x: 475, y: 228, capital: 'Recife' },
    { uf: 'SE', name: 'Sergipe', x: 462, y: 265, capital: 'Aracaju' },
    { uf: 'BA', name: 'Bahia', x: 430, y: 305, capital: 'Salvador' },
  ];

  const hqCoord = stateCoords.find(s => s.isHQ) || stateCoords[0];

  return (
    <section id="onde-estamos" className="py-24 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-[#176D05]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#FF9800]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#176D05]/10 text-[#176D05] text-xs font-bold uppercase tracking-widest">
            Logística & Cobertura Nacional
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
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-[#D6B58B]/50 shadow-xs flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#176D05] flex items-center gap-1.5">
                  <Radio className="w-3.5 h-3.5 text-[#176D05] animate-pulse" />
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
                    <div className="w-10 h-10 rounded-xl bg-[#176D05] text-white flex items-center justify-center font-bold text-sm shadow-xs">
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
                    ? 'Sede fabril e centro de distribuição principal em Fortaleza-CE. Saída imediata de fardos, caixas e pedidos fracionados ou em carga fechada para todo o Brasil.'
                    : `Rotas comerciais frequentes e parceiros atacadistas consolidados em ${selectedState.name}, garantindo reposição contínua com validade fresca e entrega ágil.`}
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
                className="text-xs font-bold text-[#176D05] hover:text-[#FF9800] uppercase tracking-wider flex items-center gap-1 transition-colors"
              >
                <span>Consultar frete</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3D Volumetric Projected Map of Brazil */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#0C240A] via-[#123E0E] to-[#081B06] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-[#D6B58B]/40 relative overflow-hidden flex flex-col justify-between">
            
            {/* Top Bar on 3D Map */}
            <div className="flex items-center justify-between z-20 relative border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF9800] animate-ping" />
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#FFA726]">
                  Mapa Logístico 3D • Brasil
                </span>
              </div>
              <span className="text-[11px] font-bold text-white/70 bg-white/10 px-2.5 py-1 rounded-full backdrop-blur-md">
                Hub Central: Fortaleza-CE
              </span>
            </div>

            {/* 3D Isometric / Projected Stage */}
            <div className="relative my-auto w-full py-4 flex items-center justify-center min-h-[380px]">
              
              {/* Radial Ambient Glow behind Map */}
              <div className="absolute w-72 h-72 bg-[#7DBD00]/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-[#FF9800]/20 rounded-full blur-2xl pointer-events-none" />

              {/* 3D Rotated Wrapper */}
              <div
                className="relative w-full max-w-[480px] aspect-square transition-transform duration-500 hover:scale-[1.03]"
                style={{
                  perspective: '1200px',
                  transformStyle: 'preserve-3d',
                }}
              >
                <div
                  className="w-full h-full relative"
                  style={{
                    transform: 'rotateX(22deg) rotateY(-8deg) rotateZ(2deg)',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  
                  {/* Layer 1: Volumetric Shadow & Extrusion Base */}
                  <svg
                    viewBox="0 0 600 600"
                    className="absolute inset-0 w-full h-full pointer-events-none opacity-40 translate-y-6 blur-xs"
                    fill="none"
                  >
                    <path
                      d="M 120,130 Q 180,70 240,60 Q 300,55 350,110 Q 420,130 480,160 Q 560,200 560,250 Q 550,330 490,410 Q 430,500 370,550 Q 300,570 260,510 Q 230,440 180,390 Q 110,330 80,260 Q 70,180 120,130 Z"
                      fill="#030B02"
                    />
                  </svg>

                  {/* Layer 2: Extrusion Thickness Side Wall */}
                  <svg
                    viewBox="0 0 600 600"
                    className="absolute inset-0 w-full h-full pointer-events-none opacity-80 translate-y-3"
                    fill="none"
                  >
                    <path
                      d="M 120,130 Q 180,70 240,60 Q 300,55 350,110 Q 420,130 480,160 Q 560,200 560,250 Q 550,330 490,410 Q 430,500 370,550 Q 300,570 260,510 Q 230,440 180,390 Q 110,330 80,260 Q 70,180 120,130 Z"
                      fill="#0E330A"
                      stroke="#176D05"
                      strokeWidth="2"
                    />
                  </svg>

                  {/* Layer 3: Top Volumetric Surface of Brazil */}
                  <svg
                    viewBox="0 0 600 600"
                    className="absolute inset-0 w-full h-full filter drop-shadow-lg"
                    fill="none"
                  >
                    <defs>
                      <linearGradient id="mapSurfaceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1B5212" />
                        <stop offset="50%" stopColor="#176D05" />
                        <stop offset="100%" stopColor="#0F3C08" />
                      </linearGradient>

                      <linearGradient id="activeRouteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFA726" />
                        <stop offset="100%" stopColor="#7DBD00" />
                      </linearGradient>
                    </defs>

                    {/* Main Brazil Country Polygon Shape */}
                    <path
                      d="M 120,130 Q 180,70 240,60 Q 300,55 350,110 Q 420,130 480,160 Q 560,200 560,250 Q 550,330 490,410 Q 430,500 370,550 Q 300,570 260,510 Q 230,440 180,390 Q 110,330 80,260 Q 70,180 120,130 Z"
                      fill="url(#mapSurfaceGrad)"
                      stroke="#7DBD00"
                      strokeWidth="2.5"
                      strokeOpacity="0.6"
                    />

                    {/* Regional Internal Grid & Territory Accents */}
                    {/* North outline */}
                    <path d="M 80,260 Q 200,240 340,220" stroke="#7DBD00" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.3" />
                    {/* Northeast outline */}
                    <path d="M 340,220 Q 410,230 480,160" stroke="#7DBD00" strokeWidth="1.2" strokeOpacity="0.4" />
                    <path d="M 340,220 Q 380,330 430,400" stroke="#7DBD00" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.3" />
                    {/* Center-West / Southeast lines */}
                    <path d="M 230,440 Q 350,380 490,410" stroke="#7DBD00" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.3" />

                    {/* Logistics Flow Routes from Fortaleza (CE) */}
                    {stateCoords.map((st) => {
                      if (st.isHQ) return null;
                      const isTargetActive = selectedState.uf === st.uf;
                      // Calculate curved quadratic route
                      const midX = (hqCoord.x + st.x) / 2 + (hqCoord.y - st.y) * 0.2;
                      const midY = (hqCoord.y + st.y) / 2 - Math.abs(hqCoord.x - st.x) * 0.15;
                      
                      return (
                        <g key={`route-${st.uf}`}>
                          {/* Outer Glow Route */}
                          <path
                            d={`M ${hqCoord.x},${hqCoord.y} Q ${midX},${midY} ${st.x},${st.y}`}
                            fill="none"
                            stroke={isTargetActive ? '#FFA726' : '#7DBD00'}
                            strokeWidth={isTargetActive ? 3.5 : 1.5}
                            strokeOpacity={isTargetActive ? 0.9 : 0.35}
                            strokeDasharray={isTargetActive ? '6 4' : '4 4'}
                          />
                        </g>
                      );
                    })}

                    {/* State Pins & Interactive Nodes */}
                    {stateCoords.map((st) => {
                      const isSelected = selectedState.uf === st.uf;
                      const isHQ = st.isHQ;

                      return (
                        <g
                          key={st.uf}
                          onClick={() => {
                            const found = BRAND_INFO.distributionStates.find(s => s.uf === st.uf);
                            if (found) setSelectedState(found);
                          }}
                          className="cursor-pointer group"
                        >
                          {/* Pulse Ring on active or HQ */}
                          {(isSelected || isHQ) && (
                            <circle
                              cx={st.x}
                              cy={st.y}
                              r={isHQ ? 18 : 12}
                              fill="none"
                              stroke={isHQ ? '#FFA726' : '#7DBD00'}
                              strokeWidth="1.5"
                              className="animate-ping opacity-60"
                            />
                          )}

                          {/* Outer Circle Ring */}
                          <circle
                            cx={st.x}
                            cy={st.y}
                            r={isHQ ? 12 : 8}
                            fill={isHQ ? '#FF9800' : isSelected ? '#7DBD00' : '#176D05'}
                            stroke="#FFFFFF"
                            strokeWidth={isHQ || isSelected ? 2.5 : 1.5}
                            className="transition-all duration-300 group-hover:scale-125"
                          />

                          {/* Center Node Dot */}
                          <circle
                            cx={st.x}
                            cy={st.y}
                            r={isHQ ? 4.5 : 3}
                            fill="#FFFFFF"
                          />

                          {/* 3D Vertical Floating Label Pin */}
                          <g transform={`translate(${st.x}, ${st.y - (isHQ ? 24 : 16)})`}>
                            {/* Pin Bubble */}
                            <rect
                              x={isHQ ? -32 : -18}
                              y="-16"
                              width={isHQ ? 64 : 36}
                              height="18"
                              rx="9"
                              fill={isHQ ? '#FF9800' : isSelected ? '#176D05' : 'rgba(0,0,0,0.75)'}
                              stroke="#FFFFFF"
                              strokeWidth="1"
                              className="filter drop-shadow-md"
                            />
                            <text
                              x="0"
                              y="-4"
                              textAnchor="middle"
                              fill="#FFFFFF"
                              fontSize={isHQ ? "10" : "9"}
                              fontWeight="900"
                              fontFamily="Montserrat, sans-serif"
                            >
                              {isHQ ? 'CE • HQ' : st.uf}
                            </text>
                          </g>
                        </g>
                      );
                    })}
                  </svg>

                </div>
              </div>
            </div>

            {/* Bottom Logistics Status Bar */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs z-20 relative">
              <div className="flex items-center gap-2 text-white/80">
                <Layers className="w-4 h-4 text-[#FFA726]" />
                <span>Rotas regulares para atacado, food service e distribuidores.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#7DBD00]" />
                <span className="font-bold text-[#FFA726]">Saída de Fortaleza • Entrega Brasil</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
