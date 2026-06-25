import React from 'react';
import { ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-card/50">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <ChefHat className="w-5 h-5 text-primary" />
              <span className="font-playfair font-semibold text-foreground">
                Virtuves Kalkulators
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ērts un precīzs virtuves mērvienību kalkulators latviešu valodā. Pārvērtiet glāzes, ēdamkarotes un tējkarotes gramos.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm text-foreground mb-3">Navigācija</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#calculator" className="hover:text-primary transition-colors">Kalkulators</a></li>
              <li><a href="#info" className="hover:text-primary transition-colors">Mērvienību ceļvedis</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">Biežāk uzdotie jautājumi</a></li>
              <li><Link to="/privatuma-politika" className="hover:text-primary transition-colors">Privātuma politika</Link></li>
            </ul>
          </div>

          {/* SEO text */}
          <div>
            <h4 className="font-semibold text-sm text-foreground mb-3">Par kalkulatoru</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Mūsu virtuves kalkulators palīdz pārvērst glāzes, ēdamkarotes un tējkarotes gramos vairāk nekā 35 populārākajiem pārtikas produktiem.
            </p>
          </div>
        </div>

        <div className="border-t border-border/40 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted-foreground">
            © {year} Virtuves Kalkulators. Visas tiesības aizsargātas.
          </p>
          <p className="text-xs text-muted-foreground">
            Dati ir orientējoši un var atšķirties atkarībā no produkta ražotāja.
          </p>
        </div>
      </div>
    </footer>
  );
}