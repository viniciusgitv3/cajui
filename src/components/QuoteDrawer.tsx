import React, { useState } from 'react';
import { QuoteItem } from '../types';
import { BRAND_INFO } from '../data/brandInfo';
import { ShoppingBag, Trash2, Plus, Minus, Send, X, CheckCircle, MessageSquare, Building2, MapPin } from 'lucide-react';

interface QuoteDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: QuoteItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onClearQuote: () => void;
}

export const QuoteDrawer: React.FC<QuoteDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearQuote
}) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [cityState, setCityState] = useState('');
  const [businessType, setBusinessType] = useState('Açaiteria / Sorveteria');
  const [comments, setComments] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const totalItemsCount = items.reduce((acc, curr) => acc + curr.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare formatted WhatsApp text
    const itemsListText = items.map((it, idx) => 
      `${idx + 1}. *${it.productName}* (${it.variant}) - Qtd: ${it.quantity}`
    ).join('%0A');

    const whatsappMessage = `*SOLICITAÇÃO DE COTAÇÃO - CAJUÍ ALIMENTOS*%0A%0A` +
      `*Nome:* ${encodeURIComponent(name || 'Cliente Comercial')}%0A` +
      `*Empresa:* ${encodeURIComponent(company || 'Não informado')}%0A` +
      `*Segmento:* ${encodeURIComponent(businessType)}%0A` +
      `*Cidade/UF:* ${encodeURIComponent(cityState || 'Fortaleza-CE')}%0A` +
      `*WhatsApp:* ${encodeURIComponent(phone || 'Não informado')}%0A%0A` +
      `*PRODUTOS SELECIONADOS:*%0A${itemsListText}%0A%0A` +
      `*Observações:* ${encodeURIComponent(comments || 'Solicito tabela de preços e condições de frete.')}`;

    setSubmitted(true);

    // Open WhatsApp
    const whatsappUrl = `https://wa.me/${BRAND_INFO.contact.whatsapp}?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-[#D6B58B]/50">
          
          {/* Drawer Header */}
          <div className="p-6 bg-[#176D05] text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-[#FF9800]" />
              </div>
              <div>
                <h3 className="text-lg font-black leading-tight">Orçamento Comercial</h3>
                <p className="text-xs text-[#D6B58B]">{items.length} produto(s) adicionados</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#176D05]/10 text-[#176D05] flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-[#1E271D]">Cotação Encaminhada!</h4>
                <p className="text-xs text-[#556352] max-w-xs mx-auto">
                  Sua lista de produtos foi enviada para o WhatsApp oficial da Cajuí <strong>{BRAND_INFO.contact.phone}</strong>. Nossa equipe entrará em contato em instantes com os melhores valores.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      onClearQuote();
                      onClose();
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#176D05] text-white font-bold text-xs"
                  >
                    Concluir e Voltar
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* Items List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#637060]">
                    <span>Itens Selecionados</span>
                    {items.length > 0 && (
                      <button
                        onClick={onClearQuote}
                        className="text-[#A96C1D] hover:underline flex items-center gap-1 text-[11px]"
                      >
                        <Trash2 className="w-3 h-3" /> Limpar tudo
                      </button>
                    )}
                  </div>

                  {items.length === 0 ? (
                    <div className="bg-[#FAF7F2] p-8 rounded-2xl border border-dashed border-[#D6B58B] text-center space-y-2">
                      <ShoppingBag className="w-8 h-8 text-[#A96C1D] mx-auto opacity-50" />
                      <p className="text-xs font-bold text-[#1E271D]">Sua lista de orçamento está vazia.</p>
                      <p className="text-[11px] text-[#556352]">
                        Navegue pelo catálogo e clique em <strong>"Cotar"</strong> no produto desejado.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                      {items.map((item, idx) => (
                        <div
                          key={`${item.productId}-${item.variant}-${idx}`}
                          className="bg-[#FAF7F2] p-3 rounded-xl border border-[#D6B58B]/40 flex items-center justify-between gap-2"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-bold text-[#1E271D] truncate">{item.productName}</div>
                            <div className="text-[11px] text-[#A96C1D] font-medium truncate">{item.variant}</div>
                          </div>

                          <div className="flex items-center gap-1.5 bg-white px-2 py-1 rounded-lg border border-[#D6B58B]/50">
                            <button
                              onClick={() => onUpdateQuantity(idx, item.quantity - 1)}
                              className="p-0.5 text-stone-500 hover:text-[#176D05]"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-bold px-1.5">{item.quantity}</span>
                            <button
                              onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                              className="p-0.5 text-stone-500 hover:text-[#176D05]"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <button
                            onClick={() => onRemoveItem(idx)}
                            className="p-1.5 text-stone-400 hover:text-red-600 transition-colors"
                            title="Remover"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Form Data */}
                <form onSubmit={handleSubmit} className="space-y-3 pt-4 border-t border-[#D6B58B]/30">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#176D05]">
                    Dados para Cotação Rápida
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#1E271D] mb-1">Seu Nome / Responsável *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: João da Silva"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl text-xs border border-[#D6B58B]/60 focus:border-[#176D05] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-bold text-[#1E271D] mb-1">Nome da Empresa</label>
                      <input
                        type="text"
                        placeholder="Ex: Sorveteria Tropical"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl text-xs border border-[#D6B58B]/60 focus:border-[#176D05] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-[#1E271D] mb-1">Cidade / UF *</label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Fortaleza - CE"
                        value={cityState}
                        onChange={(e) => setCityState(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl text-xs border border-[#D6B58B]/60 focus:border-[#176D05] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#1E271D] mb-1">WhatsApp de Contato *</label>
                    <input
                      type="tel"
                      required
                      placeholder="(85) 99999-9999"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl text-xs border border-[#D6B58B]/60 focus:border-[#176D05] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#1E271D] mb-1">Segmento do Estabelecimento</label>
                    <select
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl text-xs border border-[#D6B58B]/60 focus:border-[#176D05] focus:outline-none bg-white"
                    >
                      <option>Açaiteria / Sorveteria</option>
                      <option>Panificação / Confeitaria</option>
                      <option>Supermercado / Empório Natural</option>
                      <option>Buffet / Restaurante / Bar</option>
                      <option>Distribuidor Atacadista</option>
                      <option>Consumidor Final</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#1E271D] mb-1">Observações adicionais</label>
                    <textarea
                      rows={2}
                      placeholder="Dúvidas sobre frete, prazo de entrega ou faturamento..."
                      value={comments}
                      onChange={(e) => setComments(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl text-xs border border-[#D6B58B]/60 focus:border-[#176D05] focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={items.length === 0}
                    className="w-full mt-4 py-3.5 px-4 rounded-xl bg-[#176D05] hover:bg-[#0F4803] disabled:opacity-50 disabled:cursor-not-allowed text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#7DBD00]" />
                    <span>Enviar Cotação via WhatsApp</span>
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Drawer Footer Info */}
          <div className="p-4 bg-[#FAF7F2] border-t border-[#D6B58B]/30 text-center text-[11px] text-[#637060]">
            Cajuí Alimentos • Fortaleza-CE • (85) 9.9717-9237
          </div>
        </div>
      </div>
    </div>
  );
};
