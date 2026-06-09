import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const units = [
  { key: 'glaze', label: 'Glāze', sub: '250 ml', icon: '🥛' },
  { key: 'edamkarote', label: 'Ēdamkarote', sub: '~15 ml', icon: '🥄' },
  { key: 'tejakarote', label: 'Tējkarote', sub: '~5 ml', icon: '☕' },
];

export default function UnitSelector({ selectedUnit, onSelect, product }) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-2">
        Mērvienība
      </label>
      <div className="grid grid-cols-3 gap-2">
        {units.map((unit) => {
          const isAvailable = product ? product[unit.key] !== null : true;
          const isSelected = selectedUnit === unit.key;

          return (
            <button
              key={unit.key}
              onClick={() => isAvailable && onSelect(unit.key)}
              disabled={!isAvailable}
              className={cn(
                'relative flex flex-col items-center gap-1 p-3 md:p-4 rounded-xl border-2 transition-all duration-200',
                isSelected
                  ? 'border-primary bg-primary/5 shadow-sm'
                  : isAvailable
                    ? 'border-border/40 hover:border-border hover:bg-muted/30'
                    : 'border-border/20 opacity-40 cursor-not-allowed'
              )}
            >
              {isSelected && (
                <motion.div
                  layoutId="unit-indicator"
                  className="absolute inset-0 border-2 border-primary rounded-xl"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="text-xl md:text-2xl">{unit.icon}</span>
              <span className={cn(
                'text-xs md:text-sm font-medium',
                isSelected ? 'text-primary' : 'text-foreground'
              )}>
                {unit.label}
              </span>
              <span className="text-[10px] text-muted-foreground">{unit.sub}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}