import React, { useState, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import ProductSearch from './ProductSearch';
import QuantityInput from './QuantityInput';
import UnitSelector from './UnitSelector';
import ResultsDisplay from './ResultsDisplay';

export default function CalculatorSection({
  favorites,
  onToggleFavorite,
  recentProducts,
  onAddRecent
}) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState('glaze');
  const sectionRef = useRef(null);

  const handleSelectProduct = useCallback((product) => {
    setSelectedProduct(product);
    if (product) {
      onAddRecent(product.produkts);
      // Auto-select first available unit
      if (!product[unit]) {
        if (product.glaze) setUnit('glaze');
        else if (product.edamkarote) setUnit('edamkarote');
        else if (product.tejakarote) setUnit('tejakarote');
      }
    }
  }, [unit, onAddRecent]);

  const isFavorite = selectedProduct ? favorites.includes(selectedProduct.produkts) : false;

  return (
    <section ref={sectionRef} id="calculator" className="px-4 pb-16 md:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <Card className="border-border/40 shadow-2xl shadow-primary/5 rounded-2xl overflow-hidden">
          <div className="p-5 md:p-8 space-y-6">
            <ProductSearch
              selectedProduct={selectedProduct}
              onSelect={handleSelectProduct}
              favorites={favorites}
              recentProducts={recentProducts}
            />

            <UnitSelector
              selectedUnit={unit}
              onSelect={setUnit}
              product={selectedProduct}
            />

            <QuantityInput
              value={quantity}
              onChange={setQuantity}
            />

            <Separator className="bg-border/40" />

            <ResultsDisplay
              product={selectedProduct}
              unit={unit}
              quantity={quantity}
              isFavorite={isFavorite}
              onToggleFavorite={() => selectedProduct && onToggleFavorite(selectedProduct.produkts)}
            />
          </div>
        </Card>
      </motion.div>
    </section>
  );
}