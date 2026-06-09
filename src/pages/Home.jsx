import React, { useCallback } from 'react';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import Navbar from '@/components/calculator/Navbar';
import HeroSection from '@/components/calculator/HeroSection';
import AdBanner from '@/components/calculator/AdBanner';
import CalculatorSection from '@/components/calculator/CalculatorSection';
import InfoSection from '@/components/calculator/InfoSection';
import FAQSection from '@/components/calculator/FAQSection';
import FooterSection from '@/components/calculator/FooterSection';

export default function Home() {
  const { isDark, toggleDarkMode } = useDarkMode();
  const [favorites, setFavorites] = useLocalStorage('calc-favorites', []);
  const [recentProducts, setRecentProducts] = useLocalStorage('calc-recent', []);

  const handleToggleFavorite = useCallback((productName) => {
    setFavorites(prev =>
      prev.includes(productName)
        ? prev.filter(n => n !== productName)
        : [...prev, productName]
    );
  }, [setFavorites]);

  const handleAddRecent = useCallback((productName) => {
    setRecentProducts(prev => {
      const filtered = prev.filter(n => n !== productName);
      return [productName, ...filtered].slice(0, 10);
    });
  }, [setRecentProducts]);

  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar isDark={isDark} onToggleDark={toggleDarkMode} />

      <main>
        <HeroSection onScrollToCalculator={scrollToCalculator} />

        <AdBanner className="pb-12 md:pb-16 px-4" />

        <CalculatorSection
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          recentProducts={recentProducts}
          onAddRecent={handleAddRecent}
        />

        <AdBanner className="py-4 px-4" />

        <InfoSection />

        <FAQSection />
      </main>

      <FooterSection />
    </div>
  );
}