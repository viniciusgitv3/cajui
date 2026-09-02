import React, { useState } from 'react';
import { BRAND_INFO } from '../data/brandInfo';
import { MapPin, Phone, Mail, Instagram, Send, CheckCircle2, Clock, MessageSquare, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSentSuccess(true);

    const msg = `*MENSAGEM VIA SITE CAJUÍ*%0A%0A` +
      `*Nome:* ${encodeURIComponent(formName)}%0A` +
      `*E-mail:* ${encodeURIComponent(formEmail)}%0A` +
      `*Telefone:* ${encodeURIComponent(formPhone)}%0A` +
      `*Mensagem:* ${encodeURIComponent(formMessage)}`;

    window.open(`https://wa.me/${BRAND_INFO.contact.whatsapp}?text=${msg}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#176D05]/10 text-[#176D05] text-xs font-bold uppercase tracking-widest">
            Fale Conosco • Comercial & Atendimento
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E271D] tracking-tight">
            Vamos conversar sobre o abastecimento do seu negócio?
          </h2>
          <p className="text-base sm:text-lg text-[#556352] leading-relaxed">
            Seja para provar os produtos Cajuí ou solicitar uma tabela com condições especiais para revenda e indústria, nosso time está pronto para atender.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Direct Official Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="bg-[#FAF7F2] p-8 rounded-3xl border border-[#D6B58B]/50 space-y-6">
              <h3 className="text-2xl font-black text-[#176D05]">Canais Oficiais Cajuí</h3>
              
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#176D05] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#A96C1D]">Fábrica & Escritório</h4>
                    <p className="text-sm font-bold text-[#1E271D] mt-0.5">{BRAND_INFO.address.street} — {BRAND_INFO.address.neighborhood}</p>
                    <p className="text-xs text-[#556352]">{BRAND_INFO.address.city} - {BRAND_INFO.address.state} • CEP: {BRAND_INFO.address.cep}</p>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#FF9800] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#A96C1D]">Telefone & WhatsApp Comercial</h4>
                    <a
                      href={`https://wa.me/${BRAND_INFO.contact.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-extrabold text-[#176D05] hover:underline flex items-center gap-1 mt-0.5"
                    >
                      <span>{BRAND_INFO.contact.phone}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                    <p className="text-xs text-[#556352]">Atendimento de Seg a Sex, das 07:30 às 17:30</p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#A96C1D] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#A96C1D]">Instagram Oficial</h4>
                    <a
                      href={BRAND_INFO.contact.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-[#1E271D] hover:text-[#176D05] flex items-center gap-1 mt-0.5"
                    >
                      <span>{BRAND_INFO.contact.instagram}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                    <p className="text-xs text-[#556352]">Acompanhe receitas, bastidores e novidades</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Prompt Card */}
            <div className="bg-gradient-to-r from-[#176D05] to-[#0A3803] text-white p-6 rounded-3xl shadow-md flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-[#FFA726] uppercase">Atendimento Comercial</div>
                <div className="text-sm font-black mt-0.5">Precisa de envio rápido?</div>
                <div className="text-xs text-white/80">Fale direto com a gerência comercial.</div>
              </div>
              <a
                href={`https://wa.me/${BRAND_INFO.contact.whatsapp}?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20o%20setor%20comercial%20da%20Caju%C3%AD`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full bg-[#FF9800] hover:bg-[#E68500] text-white text-xs font-extrabold uppercase tracking-wider transition-all"
              >
                Abrir WhatsApp
              </a>
            </div>

          </div>

          {/* Right Column: Contact & Message Form */}
          <div className="lg:col-span-7 bg-[#FAF7F2] p-8 sm:p-10 rounded-3xl border border-[#D6B58B]/50 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black text-[#1E271D] mb-2">Envie uma Mensagem</h3>
              <p className="text-xs text-[#556352] mb-6">
                Preencha os campos abaixo para solicitar catálogo em alta resolução, amostras ou tirar dúvidas técnicas.
              </p>

              {sentSuccess ? (
                <div className="bg-white p-8 rounded-2xl border border-[#176D05]/30 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#176D05] mx-auto" />
                  <h4 className="text-lg font-bold text-[#1E271D]">Mensagem pronta para envio!</h4>
                  <p className="text-xs text-[#556352]">
                    Você foi redirecionado para o nosso canal de WhatsApp. Se a conversa não abriu automaticamente,{' '}
                    <a href={`https://wa.me/${BRAND_INFO.contact.whatsapp}`} className="text-[#176D05] font-bold underline">
                      clique aqui
                    </a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#1E271D] mb-1.5">Seu Nome *</label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Carlos Eduardo"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        className="w-full bg-white px-4 py-3 rounded-xl text-xs border border-[#D6B58B]/60 focus:border-[#176D05] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1E271D] mb-1.5">Seu Telefone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="(85) 99999-9999"
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        className="w-full bg-white px-4 py-3 rounded-xl text-xs border border-[#D6B58B]/60 focus:border-[#176D05] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1E271D] mb-1.5">Seu E-mail</label>
                    <input
                      type="email"
                      placeholder="carlos@empresa.com.br"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      className="w-full bg-white px-4 py-3 rounded-xl text-xs border border-[#D6B58B]/60 focus:border-[#176D05] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1E271D] mb-1.5">Como podemos ajudar? *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Descreva sua necessidade (quantidades, entrega, produtos de interesse)..."
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      className="w-full bg-white px-4 py-3 rounded-xl text-xs border border-[#D6B58B]/60 focus:border-[#176D05] focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-[#176D05] hover:bg-[#0F4803] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#7DBD00]" />
                    <span>Enviar Mensagem Comercial</span>
                  </button>
                </form>
              )}
            </div>

            <div className="pt-6 mt-6 border-t border-[#D6B58B]/30 flex items-center justify-between text-[11px] text-[#637060]">
              <span>CNPJ e dados cadastrais emitidos com nota fiscal.</span>
              <span className="font-bold text-[#176D05]">Fortaleza - CE</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
