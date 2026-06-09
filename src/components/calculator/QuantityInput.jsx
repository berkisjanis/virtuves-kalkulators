import React from 'react';
import { Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';

export default function QuantityInput({ value, onChange, max = 20 }) {
  const handleChange = (newVal) => {
    const clamped = Math.max(0.25, Math.min(max, newVal));
    onChange(Math.round(clamped * 4) / 4);
  };

  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-2">
        Daudzums
      </label>
      <div className="flex items-center gap-3 mb-3">
        <Button
          variant="outline"
          size="icon"
          onClick={() => handleChange(value - 0.25)}
          disabled={value <= 0.25}
          className="h-12 w-12 rounded-xl shrink-0 border-border/60"
        >
          <Minus className="w-4 h-4" />
        </Button>
        <Input
          type="number"
          min={0.25}
          max={max}
          step={0.25}
          value={value}
          onChange={(e) => handleChange(parseFloat(e.target.value) || 1)}
          className="h-12 text-center text-xl font-semibold rounded-xl bg-background border-border/60"
        />
        <Button
          variant="outline"
          size="icon"
          onClick={() => handleChange(value + 0.25)}
          disabled={value >= max}
          className="h-12 w-12 rounded-xl shrink-0 border-border/60"
        >
          <Plus className="w-4 h-4" />
        </Button>
      </div>
      <Slider
        value={[value]}
        min={0.25}
        max={max}
        step={0.25}
        onValueChange={([v]) => onChange(v)}
        className="py-2"
      />
      <div className="flex justify-between text-[11px] text-muted-foreground mt-1">
        <span>0.25</span>
        <span>{max}</span>
      </div>
    </div>
  );
}