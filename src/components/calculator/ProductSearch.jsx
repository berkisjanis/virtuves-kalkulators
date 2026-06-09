import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search, X, Star, Clock, TrendingUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { products, categories, popularProducts } from '@/data/products';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductSearch({
  selectedProduct,
  onSelect,
  favorites,
  recentProducts
}) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const filtered = useMemo(() => {
    let list = products;
    if (activeCategory) {
      list = list.filter(p => p.kategorija === activeCategory);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(p => p.produkts.toLowerCase().includes(q));
    }
    return list;
  }, [query, activeCategory]);

  const recentList = useMemo(() =>
    recentProducts
      .map(name => products.find(p => p.produkts === name))
      .filter(Boolean)
      .slice(0, 5),
    [recentProducts]
  );

  const popularList = useMemo(() =>
    popularProducts
      .map(name => products.find(p => p.produkts === name))
      .filter(Boolean),
    []);

  const handleSelect = (product) => {
    onSelect(product);
    setQuery('');
    setIsOpen(false);
  };

  const showSuggestions = false;

  return (
    <div ref={containerRef} className="relative">
      <label className="block text-sm font-medium text-foreground mb-2">
        Produkts
      </label>
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Meklēt produktu..."
          value={query || (selectedProduct && !isOpen ? selectedProduct.produkts : '')}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => {
            setIsOpen(true);
            if (selectedProduct) setQuery('');
          }}
          className="pl-10 pr-10 h-12 rounded-xl bg-background border-border/60 text-base"
        />
        {(query || selectedProduct) && (
          <button
            onClick={() => {
              setQuery('');
              onSelect(null);
              setIsOpen(false);
            }}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 w-full mt-2 bg-card border border-border/60 rounded-xl shadow-xl overflow-hidden max-h-[360px] flex flex-col"
          >
            {/* Category pills */}
            <div className="flex gap-1.5 p-3 pb-2 overflow-x-auto flex-shrink-0 border-b border-border/40">
              <Badge
                variant={activeCategory === null ? "default" : "outline"}
                className="cursor-pointer shrink-0 rounded-full text-xs"
                onClick={() => setActiveCategory(null)}
              >
                Visi
              </Badge>
              {categories.map(cat => (
                <Badge
                  key={cat}
                  variant={activeCategory === cat ? "default" : "outline"}
                  className="cursor-pointer shrink-0 rounded-full text-xs"
                  onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </Badge>
              ))}
            </div>

            <div className="overflow-y-auto flex-1">
              {/* Suggestions when no query */}
              {showSuggestions && (
                <>
                  {recentList.length > 0 && (
                    <div className="p-2">
                      <p className="px-2 py-1 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                        <Clock className="w-3 h-3" /> Nesen izmantotie
                      </p>
                      {recentList.map(p => (
                        <ProductRow key={p.produkts} product={p} onSelect={handleSelect} isFavorite={favorites.includes(p.produkts)} />
                      ))}
                    </div>
                  )}
                  <div className="p-2">
                    <p className="px-2 py-1 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                      <TrendingUp className="w-3 h-3" /> Populārākie
                    </p>
                    {popularList.map(p => (
                      <ProductRow key={p.produkts} product={p} onSelect={handleSelect} isFavorite={favorites.includes(p.produkts)} />
                    ))}
                  </div>
                </>
              )}

              {/* Search results */}
              {!showSuggestions && (
                <div className="p-2">
                  {filtered.length > 0 ? (
                    filtered.map(p => (
                      <ProductRow key={p.produkts} product={p} onSelect={handleSelect} isFavorite={favorites.includes(p.produkts)} />
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground text-center py-8">
                      Produkts nav atrasts
                    </p>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ProductRow({ product, onSelect, isFavorite }) {
  return (
    <button
      onClick={() => onSelect(product)}
      className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-muted/60 transition-colors text-left group"
    >
      <div>
        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
          {product.produkts}
        </span>
        <span className="ml-2 text-[11px] text-muted-foreground">
          {product.kategorija.charAt(0).toUpperCase() + product.kategorija.slice(1)}
        </span>
      </div>
      {isFavorite && <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />}
    </button>
  );
}