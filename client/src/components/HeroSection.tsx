/**
 * Hero 區塊 - 悅慶資訊
 * 設計: 數據流動美學 - 深邃藍紫背景, 動態粒子效果, 發光邊框
 * 非對稱佈局, 科技感強烈
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

    // 科技感色彩 - 電光藍、洋紅、紫色
    const colors = ['rgba(0, 191, 255, 0.7)', 'rgba(255, 20, 147, 0.5)', 'rgba(147, 112, 219, 0.4)', 'rgba(255, 255, 255, 0.3)'];

    for (let i = 0; i < 100; i++) {
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
          if (dist < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 191, 255, ${0.25 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.8;
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
        backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663555912533/Ht5wYqH4kwjKWwDCopdJpC/tech-hero-bg-jw8C4mfjJuGBi6tusEjUaK.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* 背景遮罩層 - 深邃藍紫漸變 */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(15, 20, 25, 0.75) 0%, rgba(45, 27, 78, 0.65) 50%, rgba(15, 20, 25, 0.75) 100%)',
        zIndex: 1,
      }} />

      {/* 動態粒子畫布 */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 2,
          opacity: 0.7,
        }}
      />

      {/* 幾何裝飾 - 發光邊框 */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '400px',
        height: '400px',
        border: '2px solid rgba(0, 191, 255, 0.2)',
        borderRadius: '50%',
        animation: 'geo-rotate 25s linear infinite',
        boxShadow: '0 0 30px rgba(0, 191, 255, 0.15)',
        zIndex: 1,
      }} />
      <div style={{
        position: 'absolute',
        top: '15%',
        right: '8%',
        width: '280px',
        height: '280px',
        border: '2px solid rgba(255, 20, 147, 0.2)',
        borderRadius: '50%',
        animation: 'geo-rotate-reverse 18s linear infinite',
        boxShadow: '0 0 20px rgba(255, 20, 147, 0.15)',
        zIndex: 1,
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '3%',
        width: '200px',
        height: '200px',
        border: '2px solid rgba(0, 191, 255, 0.15)',
        transform: 'rotate(45deg)',
        boxShadow: '0 0 20px rgba(0, 191, 255, 0.1)',
        zIndex: 1,
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
        zIndex: 5,
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
            {/* 標籤 - 發光效果 */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(0, 191, 255, 0.1)',
              border: '1px solid rgba(0, 191, 255, 0.4)',
              borderRadius: '100px',
              padding: '0.5rem 1.2rem',
              marginBottom: '1.5rem',
              boxShadow: '0 0 15px rgba(0, 191, 255, 0.2)',
            }}>
              <div style={{ width: '8px', height: '8px', background: '#00BFFF', borderRadius: '50%', animation: 'pulse-glow 2s infinite', boxShadow: '0 0 10px #00BFFF' }} />
              <span style={{ color: '#00BFFF', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em' }}>
                SOFTWARE DEVELOPMENT EXPERT
              </span>
            </div>

            <h1 style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
              background: 'linear-gradient(135deg, #ffffff 0%, #00BFFF 50%, #FF1493 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1.15,
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
            }}>
              駕馭數據洪流<br />
              <span style={{ background: 'linear-gradient(135deg, #00BFFF 0%, #FF1493 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>釋放無限潛能</span>
            </h1>

            <p style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: '1.05rem',
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.8,
              marginBottom: '2.5rem',
              maxWidth: '480px',
            }}>
              悅慶資訊有限公司，提供專業的軟體專案開發與駐點服務。
              以 .NET、Java、前端、雲端技術為核心，協助企業實現數位轉型。
            </p>

            {/* 技術標籤 - 科技感 */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2.5rem' }}>
              {['.NET', 'Java', 'React', 'Vue', 'Cloud', 'iOS', 'Android'].map(tech => (
                <span key={tech} style={{
                  background: 'rgba(0, 191, 255, 0.08)',
                  border: '1px solid rgba(0, 191, 255, 0.3)',
                  color: 'rgba(0, 191, 255, 0.9)',
                  padding: '0.4rem 0.9rem',
                  borderRadius: '4px',
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  boxShadow: '0 0 10px rgba(0, 191, 255, 0.1)',
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
              {/* 主圖 - 發光邊框 */}
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 0 40px rgba(0, 191, 255, 0.3), 0 30px 80px rgba(0,0,0,0.5)',
                border: '2px solid rgba(0, 191, 255, 0.4)',
                animation: 'float 6s ease-in-out infinite',
              }}>
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663555912533/Ht5wYqH4kwjKWwDCopdJpC/hero-illustration_1cffcd28.png"
                  alt="軟體開發技術"
                  style={{ width: '100%', display: 'block' }}
                />
              </div>

              {/* 浮動統計卡片 - 玻璃擬態 */}
              <div style={{
                position: 'absolute',
                bottom: '-20px',
                left: '-30px',
                background: 'rgba(0, 191, 255, 0.08)',
                border: '1px solid rgba(0, 191, 255, 0.3)',
                borderRadius: '12px',
                padding: '1rem 1.25rem',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 0 20px rgba(0, 191, 255, 0.15), 0 10px 30px rgba(0,0,0,0.3)',
              }}>
                <div style={{ color: '#00BFFF', fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '1.8rem' }}>15+</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontFamily: "'Open Sans', sans-serif", fontSize: '0.8rem' }}>年業界經驗</div>
              </div>

              <div style={{
                position: 'absolute',
                top: '-15px',
                right: '-20px',
                background: 'rgba(255, 20, 147, 0.08)',
                border: '1px solid rgba(255, 20, 147, 0.3)',
                borderRadius: '12px',
                padding: '1rem 1.25rem',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 0 20px rgba(255, 20, 147, 0.15), 0 10px 30px rgba(0,0,0,0.3)',
              }}>
                <div style={{ color: '#FF1493', fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '1.8rem' }}>50+</div>
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
