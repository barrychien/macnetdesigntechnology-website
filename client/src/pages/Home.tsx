/**
 * 悅慶資訊 - 主頁面
 * 整合所有區塊: Header, Hero, Services, FunFacts, Portfolio, Team, Contact, Footer
 * 設計風格: 數位脈衝 (Digital Pulse) - 深藍色科技感
 */
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import FunFactsSection from '@/components/FunFactsSection';
import PortfolioSection from '@/components/PortfolioSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

export default function Home() {
  // 全域滾動動畫觀察器
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // 延遲初始化確保 DOM 已渲染
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
        observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div style={{ minHeight: '100vh', fontFamily: "'Open Sans', sans-serif" }}>
      <Header />
      <HeroSection />
      <ServicesSection />
      <FunFactsSection />
      <PortfolioSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
