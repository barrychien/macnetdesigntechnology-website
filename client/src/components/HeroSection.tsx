/**
 * Hero 區塊 - 悅慶資訊
 * 設計: 全螢幕深藍色背景, 幾何動畫, 左側文字右側圖形
 * 非對稱佈局, 動態粒子效果
 */
import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; color: string;
    }> = [];

    const colors = ['rgba(233, 30, 99, 0.6)', 'rgba(100, 160, 255, 0.4)', 'rgba(255, 255, 255, 0.3)'];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 繪製連線
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(100, 160, 255, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // 繪製粒子
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      animId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      id="about"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0A1628 0%, #1C2C45 40%, #0d1f35 100%)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* 背景圖片 */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663555912533/Ht5wYqH4kwjKWwDCopdJpC/hero-bg_cf49547c.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.25,
      }} />

      {/* 粒子 Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      />

      {/* 幾何裝飾 */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '400px',
        height: '400px',
        border: '1px solid rgba(233, 30, 99, 0.15)',
        borderRadius: '50%',
        animation: 'geo-rotate 25s linear infinite',
      }} />
      <div style={{
        position: 'absolute',
        top: '15%',
        right: '8%',
        width: '280px',
        height: '280px',
        border: '1px solid rgba(100, 160, 255, 0.2)',
        borderRadius: '50%',
        animation: 'geo-rotate-reverse 18s linear infinite',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '3%',
        width: '200px',
        height: '200px',
        border: '1px solid rgba(233, 30, 99, 0.1)',
        transform: 'rotate(45deg)',
      }} />

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

      {/* 主要內容 */}
      <div className="container" style={{ position: 'relative', zIndex: 10, paddingTop: '100px', paddingBottom: '120px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
        }} className="hero-grid">
          {/* 左側文字 */}
          <div className="animate-slide-in-left">
            {/* 標籤 */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(233, 30, 99, 0.15)',
              border: '1px solid rgba(233, 30, 99, 0.3)',
              borderRadius: '100px',
              padding: '0.4rem 1rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{ width: '6px', height: '6px', background: '#E91E63', borderRadius: '50%', animation: 'pulse-glow 2s infinite' }} />
              <span style={{ color: '#E91E63', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.1em' }}>
                SOFTWARE DEVELOPMENT EXPERT
              </span>
            </div>

            <h1 style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
              color: 'white',
              lineHeight: 1.15,
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
            }}>
              專業軟體開發<br />
              <span style={{ color: '#E91E63' }}>驅動企業成長</span>
            </h1>

            <p style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: '1.05rem',
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.8,
              marginBottom: '2.5rem',
              maxWidth: '480px',
            }}>
              悅慶資訊有限公司，提供專業的軟體駐點服務與專案開發。
              以 .NET、Java、前端、雲端技術為核心，協助企業實現數位轉型。
            </p>

            {/* 技術標籤 */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2.5rem' }}>
              {['.NET', 'Java', 'React', 'Vue', 'Cloud', 'iOS', 'Android'].map(tech => (
                <span key={tech} style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: 'rgba(255,255,255,0.8)',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '4px',
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '0.8rem',
                  fontWeight: 500,
                }}>
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA 按鈕 */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="#services"
                onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-primary"
                style={{ borderRadius: '4px', textDecoration: 'none', display: 'inline-block' }}
              >
                了解服務項目
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-outline-white"
                style={{ borderRadius: '4px', textDecoration: 'none', display: 'inline-block' }}
              >
                立即聯絡我們
              </a>
            </div>
          </div>

          {/* 右側圖形 */}
          <div className="animate-slide-in-right" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '480px' }}>
              {/* 主圖 */}
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.1)',
                animation: 'float 6s ease-in-out infinite',
              }}>
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663555912533/Ht5wYqH4kwjKWwDCopdJpC/hero-illustration_1cffcd28.png"
                  alt="軟體開發技術"
                  style={{ width: '100%', display: 'block' }}
                />
              </div>

              {/* 浮動統計卡片 */}
              <div style={{
                position: 'absolute',
                bottom: '-20px',
                left: '-30px',
                background: 'rgba(10, 22, 40, 0.95)',
                border: '1px solid rgba(233, 30, 99, 0.3)',
                borderRadius: '12px',
                padding: '1rem 1.25rem',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              }}>
                <div style={{ color: '#E91E63', fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: '1.8rem' }}>15+</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontFamily: "'Open Sans', sans-serif", fontSize: '0.8rem' }}>年業界經驗</div>
              </div>

              <div style={{
                position: 'absolute',
                top: '-15px',
                right: '-20px',
                background: 'rgba(10, 22, 40, 0.95)',
                border: '1px solid rgba(100, 160, 255, 0.3)',
                borderRadius: '12px',
                padding: '1rem 1.25rem',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              }}>
                <div style={{ color: '#64A0FF', fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: '1.8rem' }}>50+</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontFamily: "'Open Sans', sans-serif", fontSize: '0.8rem' }}>成功合作客戶</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .hero-grid > div:last-child {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
