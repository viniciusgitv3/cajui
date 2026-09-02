import React, { useState, useMemo, useEffect } from 'react';
import { PRODUCTS } from '../data/products';
import { ProductItem, ProductCategory } from '../types';
import { 
  Search, Filter, Check, ShoppingBag, Eye, Table as TableIcon, 
  LayoutGrid, Sparkles, Shield, ChevronDown, ChevronUp, Copy, CheckCheck,
  PackageCheck, ArrowRight, ArrowUp
} from 'lucide-react';

interface ProductsCatalogProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onAddToQuote: (product: ProductItem, variant: string) => void;
  onOpenQuote: () => void;
}

export const ProductsCatalog: React.FC<ProductsCatalogProps> = ({
  selectedCategory,
  onSelectCategory,
  onAddToQuote,
  onOpenQuote
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [selectedProductModal, setSelectedProductModal] = useState<ProductItem | null>(null);
  const [copiedBarcode, setCopiedBarcode] = useState<string | null>(null);
  const [addedItemNotice, setAddedItemNotice] = useState<string | null>(null);



  const categories = [
    { id: 'all', label: 'Todos os Produtos', count: PRODUCTS.length },
    { id: 'castanha', label: 'Castanhas de Caju', count: PRODUCTS.filter(p => p.category === 'castanha').length },
    { id: 'amendoim', label: 'Amendoins & Paçoca', count: PRODUCTS.filter(p => p.category === 'amendoim').length },
    { id: 'granola', label: 'Granolas Crocantes', count: PRODUCTS.filter(p => p.category === 'granola').length }
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.code.toLowerCase().includes(q) ||
        item.specs.some(s => s.codBarras?.includes(q) || s.unidade.toLowerCase().includes(q));

      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedBarcode(text);
    setTimeout(() => setCopiedBarcode(null), 2000);
  };

  const handleAdd = (product: ProductItem, variant: string) => {
    onAddToQuote(product, variant);
    setAddedItemNotice(`${product.name} (${variant}) adicionado!`);
    setTimeout(() => setAddedItemNotice(null), 2500);
  };

  const toggleCatalog = () => {
    setIsExpanded(prev => !prev);
    if (!isExpanded) {
      setTimeout(() => {
        const target = document.getElementById('nossos-produtos');
        target?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <section id="nossos-produtos" className="py-20 bg-white relative overflow-hidden">
      {/* Toast Notice */}
      {addedItemNotice && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#176D05] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border-2 border-white/20 animate-fade-in">
          <Check className="w-5 h-5 text-[#7DBD00]" />
          <span className="text-sm font-bold">{addedItemNotice}</span>
          <button
            onClick={onOpenQuote}
            className="ml-2 text-xs bg-[#FF9800] text-white px-3 py-1 rounded-full font-extrabold uppercase hover:bg-white hover:text-[#176D05] transition-colors"
          >
            Ver Pedido
          </button>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#176D05]/10 text-[#176D05] text-xs font-bold uppercase tracking-widest">
            Catálogo Oficial de Produtos
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E271D] tracking-tight">
            Nossos Produtos, Variações e Embalagens
          </h2>
          <p className="text-base sm:text-lg text-[#556352] leading-relaxed">
            Consulte gramaturas, especificações técnicas de fardos e caixas, códigos de barras e solicite cotações imediatas no atacado ou varejo.
          </p>
        </div>

        {/* Master Toggle Accordion Banner */}
        <div className="mb-10 flex flex-col items-center">
          {!isExpanded ? (
            /* Minimized State Card */
            <div className="w-full max-w-4xl bg-gradient-to-r from-[#FAF7F2] via-[#F5EFE6] to-[#FAF7F2] p-6 sm:p-8 rounded-3xl border-2 border-[#D6B58B]/50 hover:border-[#176D05] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row items-center justify-between gap-6">
              
              <div className="space-y-2 text-center md:text-left">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                  <span className="px-3 py-1 bg-[#176D05] text-white text-xs font-bold rounded-full">
                    17 Itens Disponíveis
                  </span>
                  <span className="px-3 py-1 bg-[#176D05]/10 text-[#176D05] text-xs font-bold rounded-full">
                    Atacado & Food Service
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-[#1E271D]">
                  Catálogo completo com fotos, gramaturas e códigos
                </h3>
                <p className="text-xs text-[#637060]">
                  Castanhas de Caju (9 variações) • Amendoins & Paçoca (4 tipos) • Granolas Nobres (4 sabores)
                </p>
              </div>

              <button
                onClick={toggleCatalog}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white bg-[#176D05] hover:bg-[#0F4803] shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer shrink-0"
              >
                <span>Abrir Catálogo Completo</span>
                <ChevronDown className="w-5 h-5 animate-bounce" />
              </button>
            </div>
          ) : (
            /* Expanded Top Bar with Collapse Option */
            <div className="w-full flex items-center justify-between pb-4 border-b border-[#D6B58B]/40 mb-8">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#176D05]" />
                <span className="text-sm font-bold text-[#1E271D]">Catálogo Expandido ({filteredProducts.length} itens)</span>
              </div>

              <button
                onClick={toggleCatalog}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold text-[#176D05] bg-[#176D05]/10 hover:bg-[#176D05] hover:text-white transition-all cursor-pointer"
              >
                <span>Recolher Catálogo</span>
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* EXPANDABLE CATALOG CONTENT */}
        {isExpanded && (
          <div className="animate-fade-in space-y-10">
            {/* Filter Bar & Search */}
            <div className="bg-[#FAF7F2] p-4 sm:p-6 rounded-3xl border border-[#D6B58B]/50 space-y-4 shadow-xs">
              
              {/* Category Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                {categories.map((cat) => {
                  const active = (selectedCategory === cat.id) || (selectedCategory === '' && cat.id === 'all');
                  return (
                    <button
                      key={cat.id}
                      onClick={() => onSelectCategory(cat.id)}
                      className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                        active
                          ? 'bg-[#176D05] text-white shadow-sm'
                          : 'bg-white text-[#3A4538] hover:bg-[#D6B58B]/20 border border-[#D6B58B]/40'
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-black ${active ? 'bg-white/20 text-white' : 'bg-stone-200 text-stone-700'}`}>
                        {cat.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Search Input & View Switcher */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-[#D6B58B]/30">
                <div className="relative w-full sm:w-80">
                  <Search className="w-4 h-4 text-[#A96C1D] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Buscar por produto, corte ou código..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white pl-9 pr-4 py-2 rounded-full text-xs font-medium border border-[#D6B58B]/60 focus:outline-none focus:border-[#176D05] focus:ring-1 focus:ring-[#176D05]"
                  />
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  <span className="text-xs font-bold text-[#637060] hidden sm:inline">
                    {filteredProducts.length} itens encontrados
                  </span>
                  <div className="inline-flex bg-white p-1 rounded-xl border border-[#D6B58B]/50">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                        viewMode === 'grid' ? 'bg-[#176D05] text-white' : 'text-[#3A4538] hover:bg-stone-100'
                      }`}
                      title="Visualização em Grade"
                    >
                      <LayoutGrid className="w-4 h-4" />
                      <span className="hidden sm:inline text-[11px]">Grade</span>
                    </button>
                    <button
                      onClick={() => setViewMode('table')}
                      className={`p-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                        viewMode === 'table' ? 'bg-[#176D05] text-white' : 'text-[#3A4538] hover:bg-stone-100'
                      }`}
                      title="Visualização em Tabela Técnica"
                    >
                      <TableIcon className="w-4 h-4" />
                      <span className="hidden sm:inline text-[11px]">Tabela Técnica</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* View Mode 1: Editorial Cards Grid */}
            {viewMode === 'grid' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-[#FAF7F2] rounded-3xl overflow-hidden border border-[#D6B58B]/50 hover:border-[#176D05] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Card Image Showcase (Official AWS S3 Mockup) */}
                      <div className="relative w-full h-56 bg-white border-b border-[#D6B58B]/30 flex items-center justify-center p-4 overflow-hidden">
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500 select-none"
                          loading="lazy"
                        />

                        {/* Floating Badges */}
                        <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
                          <span className="bg-[#176D05] text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                            Cód: {product.code}
                          </span>
                        </div>

                        {product.isHighlighted && (
                          <div className="absolute top-3 right-3 z-10">
                            <span className="bg-[#FF9800] text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                              <Sparkles className="w-3 h-3" />
                              Destaque
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Card Title & Subtitle */}
                      <div className="p-6 pb-3 space-y-1">
                        <h3 className="text-xl font-black text-[#1E271D] leading-tight group-hover:text-[#176D05] transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-xs text-[#A96C1D] font-bold">
                          {product.subtitle}
                        </p>
                      </div>

                      {/* Card Body */}
                      <div className="px-6 pb-6 space-y-4">
                        <p className="text-xs text-[#556352] leading-relaxed line-clamp-2">
                          {product.description}
                        </p>

                        {/* Technical Specs Preview (Fardos / Caixas) */}
                        <div className="bg-white p-3.5 rounded-2xl border border-[#D6B58B]/40 space-y-2">
                          <div className="flex items-center justify-between text-[11px] font-bold text-[#1E271D]">
                            <span className="text-[#176D05]">Embalagens & Logística:</span>
                            <span className="text-[#A96C1D]">Validade: {product.specs[0]?.validade}</span>
                          </div>
                          <div className="space-y-1">
                            {product.specs.slice(0, 3).map((spec, i) => (
                              <div key={i} className="flex items-center justify-between text-[11px] text-[#3A4538] border-b border-stone-100 last:border-0 py-0.5">
                                <span className="font-semibold">{spec.unidade}</span>
                                {spec.codBarras && (
                                  <span className="text-[10px] font-mono text-[#637060] bg-stone-100 px-1 rounded">
                                    {spec.codBarras}
                                  </span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Ideal For tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {product.idealFor.map((tag, i) => (
                            <span key={i} className="text-[10px] font-semibold text-[#176D05] bg-[#176D05]/10 px-2 py-0.5 rounded-md">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer Actions */}
                    <div className="p-6 pt-0 flex items-center gap-2">
                      <button
                        onClick={() => setSelectedProductModal(product)}
                        className="flex-1 py-2.5 px-3 rounded-xl bg-white hover:bg-stone-50 border border-[#D6B58B] text-[#1E271D] font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Eye className="w-4 h-4 text-[#A96C1D]" />
                        <span>Detalhes</span>
                      </button>

                      <button
                        onClick={() => handleAdd(product, product.specs[0]?.unidade || 'Padrão')}
                        className="py-2.5 px-4 rounded-xl bg-[#176D05] hover:bg-[#0F4803] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                        title="Adicionar ao Orçamento"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span>Cotar</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* View Mode 2: Technical Table */}
            {viewMode === 'table' && (
              <div className="bg-white rounded-3xl border border-[#D6B58B]/50 overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#176D05] text-white text-xs uppercase tracking-wider font-extrabold">
                        <th className="py-4 px-4">Foto</th>
                        <th className="py-4 px-6">Código / Produto</th>
                        <th className="py-4 px-4">Gramatura</th>
                        <th className="py-4 px-4">Unidade / Embalagem</th>
                        <th className="py-4 px-4">Cód. Barras</th>
                        <th className="py-4 px-4">Validade</th>
                        <th className="py-4 px-4 text-center">Ação</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#D6B58B]/30 text-xs">
                      {filteredProducts.map((product) => (
                        <React.Fragment key={product.id}>
                          {product.specs.map((spec, specIdx) => (
                            <tr
                              key={`${product.id}-${specIdx}`}
                              className={`hover:bg-[#FAF7F2] transition-colors ${
                                specIdx === 0 ? 'bg-stone-50/50 font-medium' : ''
                              }`}
                            >
                              {specIdx === 0 ? (
                                <>
                                  <td rowSpan={product.specs.length} className="py-4 px-4 align-top border-r border-[#D6B58B]/20 w-20">
                                    <div className="w-16 h-16 bg-white rounded-xl border border-[#D6B58B]/40 p-1 flex items-center justify-center overflow-hidden shadow-2xs">
                                      <img src={product.imageUrl} alt={product.name} className="w-full h-full object-contain" />
                                    </div>
                                  </td>
                                  <td rowSpan={product.specs.length} className="py-4 px-6 align-top border-r border-[#D6B58B]/20">
                                    <div className="font-extrabold text-sm text-[#1E271D]">{product.name}</div>
                                    <div className="text-[11px] text-[#A96C1D] font-semibold">{product.subtitle}</div>
                                    <div className="text-[10px] text-[#637060] mt-1 line-clamp-2 max-w-xs">{product.description}</div>
                                    <span className="inline-block mt-2 text-[10px] font-bold px-2 py-0.5 bg-[#176D05]/10 text-[#176D05] rounded">
                                      Cód: {product.code}
                                    </span>
                                  </td>
                                </>
                              ) : null}
                              <td className="py-3 px-4 font-bold text-[#1E271D]">
                                {spec.gramatura}
                              </td>
                              <td className="py-3 px-4 text-[#3A4538] font-semibold">
                                {spec.unidade}
                              </td>
                              <td className="py-3 px-4 font-mono text-[#176D05]">
                                {spec.codBarras ? (
                                  <button
                                    onClick={() => copyToClipboard(spec.codBarras!)}
                                    className="inline-flex items-center gap-1.5 px-2 py-1 bg-stone-100 hover:bg-[#176D05]/10 rounded border border-stone-200 transition-colors"
                                    title="Clique para copiar o código"
                                  >
                                    <span>{spec.codBarras}</span>
                                    {copiedBarcode === spec.codBarras ? (
                                      <CheckCheck className="w-3 h-3 text-[#176D05]" />
                                    ) : (
                                      <Copy className="w-3 h-3 text-stone-400" />
                                    )}
                                  </button>
                                ) : (
                                  <span className="text-stone-400">—</span>
                                )}
                              </td>
                              <td className="py-3 px-4 font-bold text-[#A96C1D]">
                                {spec.validade}
                              </td>
                              <td className="py-3 px-4 text-center">
                                <button
                                  onClick={() => handleAdd(product, spec.unidade)}
                                  className="px-3 py-1.5 rounded-lg bg-[#176D05] hover:bg-[#0F4803] text-white font-bold text-[11px] inline-flex items-center gap-1 cursor-pointer transition-colors shadow-2xs"
                                >
                                  <ShoppingBag className="w-3.5 h-3.5" />
                                  <span>Cotar</span>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Bottom Collapse Button */}
            <div className="flex items-center justify-center pt-6">
              <button
                onClick={toggleCatalog}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-[#176D05] bg-[#176D05]/10 hover:bg-[#176D05] hover:text-white transition-all cursor-pointer border border-[#176D05]/30 shadow-xs"
              >
                <ChevronUp className="w-4 h-4" />
                <span>Recolher Catálogo de Produtos</span>
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Product Detail Modal */}
      {selectedProductModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-[#D6B58B] relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProductModal(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center font-bold text-sm cursor-pointer z-10"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 pb-6 border-b border-[#D6B58B]/30">
              {/* Product Mockup Image */}
              <div className="sm:col-span-4 bg-[#FAF7F2] rounded-2xl border border-[#D6B58B]/40 p-4 flex items-center justify-center">
                <img
                  src={selectedProductModal.imageUrl}
                  alt={selectedProductModal.name}
                  className="w-full h-48 object-contain"
                />
              </div>

              {/* Product Meta */}
              <div className="sm:col-span-8 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#176D05] text-white">
                    Cód: {selectedProductModal.code}
                  </span>
                  {selectedProductModal.isHighlighted && (
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FF9800] text-white flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Destaque
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-2xl font-black text-[#1E271D]">
                    {selectedProductModal.name}
                  </h3>
                  <p className="text-xs font-bold text-[#A96C1D]">
                    {selectedProductModal.subtitle}
                  </p>
                </div>

                <p className="text-xs text-[#556352] leading-relaxed pt-1">
                  {selectedProductModal.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {selectedProductModal.idealFor.map((tag, i) => (
                    <span key={i} className="text-[10px] font-semibold text-[#176D05] bg-[#176D05]/10 px-2 py-0.5 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Specifications Full Table */}
            <div className="mt-6 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#176D05]">
                Grade Completa de Embalagens e Códigos
              </h4>
              <div className="border border-[#D6B58B]/50 rounded-xl overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#FAF7F2] text-[#1E271D] font-bold border-b border-[#D6B58B]/30">
                    <tr>
                      <th className="p-2.5">Gramatura</th>
                      <th className="p-2.5">Unidade</th>
                      <th className="p-2.5">Cód. Barras</th>
                      <th className="p-2.5">Validade</th>
                      <th className="p-2.5 text-right">Ação</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#D6B58B]/20">
                    {selectedProductModal.specs.map((spec, i) => (
                      <tr key={i} className="hover:bg-[#FAF7F2]">
                        <td className="p-2.5 font-bold">{spec.gramatura}</td>
                        <td className="p-2.5 font-medium">{spec.unidade}</td>
                        <td className="p-2.5 font-mono text-[#176D05]">{spec.codBarras || '—'}</td>
                        <td className="p-2.5">{spec.validade}</td>
                        <td className="p-2.5 text-right">
                          <button
                            onClick={() => {
                              handleAdd(selectedProductModal, spec.unidade);
                              setSelectedProductModal(null);
                            }}
                            className="px-2.5 py-1 rounded bg-[#176D05] text-white text-[10px] font-bold hover:bg-[#0F4803]"
                          >
                            + Cotar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#D6B58B]/30 flex justify-end">
              <button
                onClick={() => setSelectedProductModal(null)}
                className="px-5 py-2 rounded-xl bg-stone-100 text-stone-800 font-bold text-xs hover:bg-stone-200"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
