import React, { useMemo } from 'react';
import { Copy, Star, Check, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { unitShortLabels } from '@/data/products';
import { toast } from 'sonner';

export default function ResultsDisplay({
  product,
  unit,
  quantity,
  isFavorite,
  onToggleFavorite
}) {
  const [copied, setCopied] = React.useState(false);

  const result = useMemo(() => {
    if (!product || !product[unit]) return null;
    return Math.round(product[unit] * quantity * 100) / 100;
  }, [product, unit, quantity]);

  const equivalents = useMemo(() => {
    if (!product || !result) return [];
    const eqs = [];
    const allUnits = ['glaze', 'edamkarote', 'tejakarote'];
    for (const u of allUnits) {
      if (u === unit || !product[u]) continue;
      const eq = Math.round((result / product[u]) * 100) / 100;
      eqs.push({ unit: u, value: eq });
    }
    return eqs;
  }, [product, unit, result]);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 rounded-2xl bg-muted/60 flex items-center justify-center mb-4">
          <Scale className="w-7 h-7 text-muted-foreground/50" />
        </div>
        <p className="text-muted-foreground text-sm">
          Izvēlieties produktu, lai redzētu rezultātu
        </p>
      </div>
    );
  }

  if (!product[unit]) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-muted-foreground text-sm">
          Šim produktam nav pieejama izvēlētā mērvienība
        </p>
      </div>
    );
  }

  const handleCopy = () => {
    const text = `${product.produkts}: ${quantity} ${unitShortLabels[unit]} = ${result} g`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success('Nokopēts!');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      {/* Main result */}
      <div className="text-center py-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2 font-medium">
          Rezultāts
        </p>
        <AnimatePresence mode="wait">
          <motion.div
            key={result}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <span className="font-playfair text-5xl md:text-6xl font-bold text-primary">
              {result}
            </span>
            <span className="text-xl md:text-2xl text-muted-foreground ml-2 font-medium">g</span>
          </motion.div>
        </AnimatePresence>
        <p className="text-sm text-muted-foreground mt-2">
          {quantity} {unitShortLabels[unit]} {product.produkts.toLowerCase()}
        </p>
      </div>

      {/* Equivalents */}
      {equivalents.length > 0 && (
        <div className="bg-muted/30 rounded-xl p-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3 font-medium">
            Ekvivalents citās mērvienībās
          </p>
          <div className="space-y-2">
            {equivalents.map(eq => (
              <div key={eq.unit} className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground capitalize">
                  {eq.unit === 'glaze' ? 'Glāzes' : eq.unit === 'edamkarote' ? 'Ēdamkarotes' : 'Tējkarotes'}
                </span>
                <span className="font-semibold text-foreground">
                  {eq.value} {unitShortLabels[eq.unit]}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-2 pt-2">
        <Button
          variant="outline"
          onClick={handleCopy}
          className="flex-1 rounded-xl h-11 border-border/60"
        >
          {copied ? (
            <Check className="w-4 h-4 mr-2 text-primary" />
          ) : (
            <Copy className="w-4 h-4 mr-2" />
          )}
          {copied ? 'Nokopēts' : 'Kopēt'}
        </Button>
        <Button
          variant="outline"
          onClick={onToggleFavorite}
          className="rounded-xl h-11 border-border/60 px-4"
        >
          <Star className={`w-4 h-4 ${isFavorite ? 'fill-amber-400 text-amber-400' : ''}`} />
        </Button>
      </div>
    </div>
  );
}