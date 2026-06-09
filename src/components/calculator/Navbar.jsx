import React from 'react';
import { ChefHat } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

export default function Navbar({ isDark, onToggleDark }) {
  return (
    <nav className="sticky top-0 z-40 backdrop-blur-xl bg-background/80 border-b border-border/30">
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <ChefHat className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-playfair font-semibold text-foreground text-sm md:text-base">
            Virtuves Kalkulators
          </span>
        </a>
        <div className="flex items-center gap-2">
          <a href="#calculator" className="hidden md:inline-flex text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-lg hover:bg-muted/50">
            Kalkulators
          </a>
          <a href="#info" className="hidden md:inline-flex text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-lg hover:bg-muted/50">
            Ceļvedis
          </a>
          <a href="#faq" className="hidden md:inline-flex text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-lg hover:bg-muted/50">
            BUJ
          </a>
          <DarkModeToggle isDark={isDark} onToggle={onToggleDark} />
        </div>
      </div>
    </nav>
  );
}