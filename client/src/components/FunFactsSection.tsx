/**
 * Fun Facts 區塊 - 悅慶資訊
 * 設計: 深藍色背景, 幾何裝飾, 數字計數器動畫
 */
import { useEffect, useRef, useState } from 'react';

const facts = [
  {
    number: 15,
    suffix: '+',
    label: '年業界經驗',
    description: '深耕軟體開發領域超過 15 年',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="rgba(233,30,99,0.6)" strokeWidth="1.5" fill="none" />
        <path d="M16 8v8l5 3" stroke="#E91E63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="16" r="2" fill="#E91E63" />
      </svg>
    ),
  },
  {
    number: 50,
    suffix: '+',
    label: '合作客戶',
    description: '服務涵蓋金融、保險、電商等產業',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4 26c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="rgba(233,30,99,0.6)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <circle cx="14" cy="10" r="5" stroke="#E91E63" strokeWidth="1.5" fill="none" />
        <path d="M22 16c2.761 0 5 2.239 5 5" stroke="#E91E63" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="22" cy="10" r="3.5" stroke="#E91E63" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    number: 200,
    suffix: '+',
    label: '完成專案',
    description: '橫跨各產業的成功交付案例',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="3" stroke="rgba(233,30,99,0.6)" strokeWidth="1.5" fill="none" />
        <path d="M10 16l5 5 8-8" stroke="#E91E63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: 98,
    suffix: '%',
    label: '客戶滿意度',
    description: '持續提供高品質的技術服務',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z" stroke="rgba(233,30,99,0.6)" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        <path d="M16 4l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z" fill="#E91E63" opacity="0.15" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function CountUp({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span>
      {count}{suffix}
    </span>
  );
}

export default function FunFactsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // 也處理 reveal 元素
            entry.target.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        padding: '100px 0',
        background: 'linear-gradient(135deg, #0A1628 0%, #1C2C45 50%, #0d1f35 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 背景圖片 */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663555912533/Ht5wYqH4kwjKWwDCopdJpC/services-bg_964dcd25.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.15,
      }} />

      {/* 幾何裝飾 */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        left: '-50px',
        width: '300px',
        height: '300px',
        border: '1px solid rgba(233, 30, 99, 0.1)',
        borderRadius: '50%',
        animation: 'geo-rotate 30s linear infinite',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-80px',
        right: '-80px',
        width: '400px',
        height: '400px',
        border: '1px solid rgba(100, 160, 255, 0.08)',
        borderRadius: '50%',
        animation: 'geo-rotate-reverse 25s linear infinite',
      }} />

      {/* 斜切頂部 */}
      <div style={{
        position: 'absolute',
        top: -2,
        left: 0,
        right: 0,
        height: '80px',
        background: '#F8FAFC',
        clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* 標題 */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(233, 30, 99, 0.15)',
            border: '1px solid rgba(233, 30, 99, 0.3)',
            borderRadius: '100px',
            padding: '0.3rem 1rem',
            marginBottom: '1rem',
          }}>
            <span style={{ color: '#E91E63', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.1em' }}>
              FUN FACTS
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            color: 'white',
            marginBottom: '1rem',
          }}>
            我們的成績單
          </h2>
          <div style={{ width: '60px', height: '4px', background: '#E91E63', margin: '0 auto 1.5rem' }} />
          <p style={{
            fontFamily: "'Open Sans', sans-serif",
            color: 'rgba(255,255,255,0.65)',
            fontSize: '1rem',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: 1.8,
          }}>
            透過多年的專業積累，我們以數字見證每一個里程碑
          </p>
        </div>

        {/* 數字卡片 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2rem',
        }}>
          {facts.map((fact, index) => (
            <div
              key={index}
              className="reveal fact-card"
              style={{
                padding: '2.5rem 2rem',
                borderRadius: '12px',
                textAlign: 'center',
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              {/* 圖示 */}
              <div style={{
                width: '64px',
                height: '64px',
                background: 'rgba(233, 30, 99, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                border: '1px solid rgba(233, 30, 99, 0.2)',
              }}>
                {fact.icon}
              </div>

              {/* 數字 */}
              <div style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: '3rem',
                color: 'white',
                lineHeight: 1,
                marginBottom: '0.5rem',
                background: 'linear-gradient(135deg, white, #E91E63)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                <CountUp target={fact.number} suffix={fact.suffix} isVisible={isVisible} />
              </div>

              {/* 標籤 */}
              <div style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: '1rem',
                color: 'white',
                marginBottom: '0.5rem',
              }}>
                {fact.label}
              </div>

              {/* 說明 */}
              <div style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: '0.85rem',
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.6,
              }}>
                {fact.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 斜切底部 */}
      <div style={{
        position: 'absolute',
        bottom: -2,
        left: 0,
        right: 0,
        height: '80px',
        background: 'white',
        clipPath: 'polygon(0 100%, 100% 0, 100% 100%)',
      }} />
    </section>
  );
}
