import React from 'react';

export default function AdBanner({ className = '' }) {
  return (
    <div className={`w-full ${className}`}>
      <div className="max-w-4xl mx-auto">
        <p className="text-[10px] text-muted-foreground/50 uppercase tracking-widest mb-1.5 text-center">
          Reklāma
        </p>
        <div className="w-full min-h-[90px] md:min-h-[100px] bg-muted/40 border border-border/50 rounded-xl flex items-center justify-center">
          {/* Google AdSense kods tiks ievietots šeit */}
          <div className="text-xs text-muted-foreground/40 font-medium">
            Reklāmas vieta
          </div>
        </div>
      </div>
    </div>
  );
}