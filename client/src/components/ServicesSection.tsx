/**
 * 服務項目區塊 - 悅慶資訊
 * 設計: 科技感卡片 + 發光邊框 + 玻璃擬態
 */
import { useEffect, useRef } from 'react';

const services = [
  {
    icon: (
      <svg width="80" height="80" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="4" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M12 20L17 25L28 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.3" />
        <path d="M8 12h6M8 20h4M8 28h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
    title: '軟體專案開發',
    shortDesc: '端到端的軟體開發解決方案',
    description: '從需求分析到上線維護，提供端到端的軟體開發解決方案，確保每個環節的品質與效率。',
    features: ['需求分析與規劃', '系統架構設計', '敏捷開發實施', '品質保證與測試'],
    color: '#00BFFF',
  },
  {
    icon: (
      <svg width="80" height="80" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="14" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M8 34c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M28 18l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 22h-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: '軟體駐點服務',
    shortDesc: '長期技術支援與系統維護',
    description: '派遣專業技術人員到客戶現場，提供長期技術支援與系統維護，確保業務連續性與穩定運作。',
    features: ['技術諮詢顧問', '系統維護管理', '專業人力派遣', '技術培訓服務'],
    color: '#FF1493',
  },
  {
    icon: (
      <svg width="80" height="80" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="8" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="16" y="18" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M10 15h8M10 19h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22 25h8M22 29h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="28" cy="10" r="4" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1" />
        <path d="M26.5 10L28 11.5L30 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: '網頁與 APP 開發',
    shortDesc: '響應式網站與跨平台應用',
    description: '打造響應式網站與跨平台行動應用，以使用者體驗為核心，提升業務數位化競爭力。',
    features: ['響應式網頁設計', 'iOS 原生開發', 'Android 原生開發', 'UX/UI 設計規劃'],
    color: '#9370DB',
  },
  {
    icon: (
      <svg width="80" height="80" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="4" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="22" y="4" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="4" y="22" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="22" y="22" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M18 11h4M20 9v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 29h4M20 27v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="29" cy="11" r="2" fill="currentColor" opacity="0.5" />
        <circle cx="11" cy="29" r="2" fill="currentColor" opacity="0.5" />
      </svg>
    ),
    title: '系統導入與整合',
    shortDesc: 'ERP、CRM 等企業系統導入',
    description: '協助企業導入 ERP、CRM 等企業系統，實現業務流程優化，提升整體營運效率。',
    features: ['系統評估規劃', '導入專案管理', '資料遷移整合', '員工教育訓練'],
    color: '#00D9FF',
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} style={{ 
      padding: '100px 0', 
      background: 'linear-gradient(135deg, rgba(15, 20, 25, 0.95) 0%, rgba(45, 27, 78, 0.8) 50%, rgba(15, 20, 25, 0.95) 100%)',
      position: 'relative', 
      overflow: 'hidden' 
    }}>
      <style>{`
        @keyframes icon-float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }

        .service-icon-large {
          animation: icon-float 3s ease-in-out infinite;
        }

        .service-icon-large:nth-child(2) {
          animation-delay: 0.3s;
        }

        .service-icon-large:nth-child(3) {
          animation-delay: 0.6s;
        }

        .service-icon-large:nth-child(4) {
          animation-delay: 0.9s;
        }
      `}</style>

      {/* 背景裝飾 - 發光圓形 */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(0, 191, 255, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        filter: 'blur(40px)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(255, 20, 147, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        filter: 'blur(40px)',
      }} />

      <div className="container">
        {/* 標題 */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(0, 191, 255, 0.1)',
            border: '1px solid rgba(0, 191, 255, 0.3)',
            borderRadius: '100px',
            padding: '0.5rem 1.2rem',
            marginBottom: '1rem',
            boxShadow: '0 0 15px rgba(0, 191, 255, 0.15)',
          }}>
            <span style={{ color: '#00BFFF', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em' }}>
              OUR SERVICES
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            background: 'linear-gradient(135deg, #00BFFF 0%, #FF1493 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '1rem',
          }}>
            核心服務項目
          </h2>
          <div style={{ 
            width: '80px', 
            height: '3px', 
            background: 'linear-gradient(90deg, #00BFFF, #FF1493, transparent)',
            margin: '0 auto 1.5rem',
            boxShadow: '0 0 15px rgba(0, 191, 255, 0.5)',
          }} />
          <p style={{
            fontFamily: "'Open Sans', sans-serif",
            color: 'rgba(255,255,255,0.7)',
            fontSize: '1.05rem',
            maxWidth: '560px',
            margin: '0 auto',
            lineHeight: 1.8,
          }}>
            無論是網頁、APP 還是企業系統，我們提供完整的軟體開發與技術支援服務，
            協助您的企業實現數位轉型。
          </p>
        </div>

        {/* 服務項目網格 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem',
        }}>
          {services.map((service, index) => (
            <div
              key={index}
              className="reveal service-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDelay: `${index * 0.1}s`,
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(-15px) scale(1.02)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(0) scale(1)';
              }}
            >
              {/* 大型圖標 - 發光邊框 */}
              <div
                className="service-icon-large"
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '20px',
                  background: `rgba(${service.color === '#00BFFF' ? '0, 191, 255' : service.color === '#FF1493' ? '255, 20, 147' : service.color === '#9370DB' ? '147, 112, 219' : '0, 217, 255'}, 0.1)`,
                  border: `2px solid ${service.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  color: service.color,
                  transition: 'all 0.4s ease',
                  boxShadow: `0 0 30px ${service.color}40, inset 0 0 20px ${service.color}20`,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = `0 0 50px ${service.color}60, inset 0 0 30px ${service.color}30, 0 20px 40px rgba(0,0,0,0.3)`;
                  el.style.transform = 'scale(1.15)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = `0 0 30px ${service.color}40, inset 0 0 20px ${service.color}20`;
                  el.style.transform = 'scale(1)';
                }}
              >
                {service.icon}
              </div>

              {/* 標題 */}
              <h3 style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: '1.2rem',
                color: 'white',
                marginBottom: '0.5rem',
              }}>
                {service.title}
              </h3>

              {/* 簡短描述 */}
              <p style={{
                fontFamily: "'Open Sans', sans-serif",
                color: service.color,
                fontSize: '0.9rem',
                fontWeight: 600,
                marginBottom: '1rem',
                letterSpacing: '0.5px',
              }}>
                {service.shortDesc}
              </p>

              {/* 完整描述 */}
              <p style={{
                fontFamily: "'Open Sans', sans-serif",
                color: 'rgba(255,255,255,0.65)',
                fontSize: '0.85rem',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
              }}>
                {service.description}
              </p>

              {/* 功能標籤 */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.6rem',
                justifyContent: 'center',
              }}>
                {service.features.map((feature, i) => (
                  <span
                    key={i}
                    style={{
                      display: 'inline-block',
                      background: `${service.color}15`,
                      border: `1px solid ${service.color}40`,
                      color: service.color,
                      padding: '0.4rem 0.9rem',
                      borderRadius: '20px',
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      transition: 'all 0.3s ease',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = service.color;
                      el.style.color = 'white';
                      el.style.transform = 'translateY(-3px)';
                      el.style.boxShadow = `0 0 15px ${service.color}60`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = `${service.color}15`;
                      el.style.color = service.color;
                      el.style.transform = 'translateY(0)';
                      el.style.boxShadow = 'none';
                    }}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 技術棧 */}
        <div className="reveal" style={{ marginTop: '4rem', textAlign: 'center' }}>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            color: 'rgba(0, 191, 255, 0.7)',
            fontSize: '0.85rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
            fontWeight: 700,
          }}>
            核心技術棧
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            {['.NET / C#', 'Java / Spring', 'React / Vue / Angular', 'Node.js', 'AWS / Azure / GCP', 'iOS Swift', 'Android Kotlin', 'Docker / K8s', 'SQL / NoSQL'].map(tech => (
              <div key={tech} style={{
                background: 'rgba(0, 191, 255, 0.08)',
                border: '1px solid rgba(0, 191, 255, 0.3)',
                borderRadius: '6px',
                padding: '0.6rem 1.5rem',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#00BFFF',
                boxShadow: '0 0 15px rgba(0, 191, 255, 0.1)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = '#00BFFF';
                el.style.background = 'rgba(0, 191, 255, 0.15)';
                el.style.boxShadow = '0 0 25px rgba(0, 191, 255, 0.3)';
                el.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(0, 191, 255, 0.3)';
                el.style.background = 'rgba(0, 191, 255, 0.08)';
                el.style.boxShadow = '0 0 15px rgba(0, 191, 255, 0.1)';
                el.style.transform = 'translateY(0)';
              }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
