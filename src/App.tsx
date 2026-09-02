import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProductionPillars } from './components/ProductionPillars';
import { ProductsCatalog } from './components/ProductsCatalog';
import { DistributionMap } from './components/DistributionMap';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CatalogPresentation1920 } from './components/CatalogPresentation1920';
import { QuoteDrawer } from './components/QuoteDrawer';
import { ProductItem, QuoteItem } from './types';
import { ShoppingBag } from 'lucide-react';
import { WhatsAppIcon } from './components/WhatsAppIcon';
import { BRAND_INFO } from './data/brandInfo';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isPresentationOpen, setIsPresentationOpen] = useState<boolean>(false);
  const [isQuoteDrawerOpen, setIsQuoteDrawerOpen] = useState<boolean>(false);
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([]);

  const handleAddToQuote = (product: ProductItem, variant: string) => {
    setQuoteItems((prev) => {
      const existingIdx = prev.findIndex(
        (it) => it.productId === product.id && it.variant === variant
      );
      if (existingIdx >= 0) {
        const copy = [...prev];
        copy[existingIdx].quantity += 1;
        return copy;
      }
      return [
        ...prev,
        {
          productId: product.id,
          productName: product.name,
          variant: variant,
          quantity: 1
        }
      ];
    });
  };

  const handleUpdateQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveQuoteItem(index);
      return;
    }
    setQuoteItems((prev) => {
      const copy = [...prev];
      copy[index].quantity = newQty;
      return copy;
    });
  };

  const handleRemoveQuoteItem = (index: number) => {
    setQuoteItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearQuote = () => {
    setQuoteItems([]);
  };

  const handleCategorySelectFromPillars = (catId: string) => {
    setSelectedCategory(catId);
    const target = document.getElementById('nossos-produtos');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreCatalogFromHero = () => {
    setSelectedCategory('all');
    const target = document.getElementById('nossos-produtos');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalQuoteCount = quoteItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1E271D] flex flex-col selection:bg-[#7DBD00]/30 selection:text-[#176D05]">
      
      {/* Top Navbar */}
      <Navbar
        onOpenPresentation={() => setIsPresentationOpen(true)}
        onOpenQuote={() => setIsQuoteDrawerOpen(true)}
        quoteCount={totalQuoteCount}
      />

      {/* Main Landing Sections */}
      <main className="flex-1">
        {/* Section 1: Início */}
        <Hero
          onOpenPresentation={() => setIsPresentationOpen(true)}
          onExploreCatalog={handleExploreCatalogFromHero}
        />

        {/* Section 2: A Cajuí, quem somos */}
        <AboutSection />

        {/* Section 3: O que produzimos */}
        <ProductionPillars
          onSelectCategory={handleCategorySelectFromPillars}
        />

        {/* Section 4: Nossos produtos */}
        <ProductsCatalog
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onAddToQuote={handleAddToQuote}
          onOpenQuote={() => setIsQuoteDrawerOpen(true)}
        />

        {/* Section 5: Onde estamos */}
        <DistributionMap />

        {/* Section 6: Contato */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenPresentation={() => setIsPresentationOpen(true)}
      />

      {/* Floating Action Buttons for Quick Access */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <a
          href={`https://wa.me/${BRAND_INFO.contact.whatsapp}?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20os%20produtos%20Caju%C3%AD`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#1EBE5D] text-white p-3.5 rounded-full shadow-xl hover:scale-110 transition-all flex items-center justify-center cursor-pointer"
          title="Conversar no WhatsApp Oficial"
        >
          <WhatsAppIcon className="w-6 h-6" />
        </a>

        {totalQuoteCount > 0 && (
          <button
            onClick={() => setIsQuoteDrawerOpen(true)}
            className="bg-[#176D05] hover:bg-[#0F4803] text-white px-4 py-3.5 rounded-full shadow-xl hover:scale-105 transition-all flex items-center gap-2 font-bold text-xs cursor-pointer border-2 border-white/20 animate-pulse"
          >
            <ShoppingBag className="w-4 h-4 text-[#FF9800]" />
            <span>Cotação ({totalQuoteCount})</span>
          </button>
        )}
      </div>

      {/* 1920x1080 Interactive Slide Deck Modal */}
      <CatalogPresentation1920
        isOpen={isPresentationOpen}
        onClose={() => setIsPresentationOpen(false)}
        onOpenQuote={() => {
          setIsPresentationOpen(false);
          setIsQuoteDrawerOpen(true);
        }}
      />

      {/* B2B Quote Drawer */}
      <QuoteDrawer
        isOpen={isQuoteDrawerOpen}
        onClose={() => setIsQuoteDrawerOpen(false)}
        items={quoteItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveQuoteItem}
        onClearQuote={handleClearQuote}
      />

    </div>
  );
}
