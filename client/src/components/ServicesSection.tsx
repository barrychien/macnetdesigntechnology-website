/**
 * 服務項目區塊 - 悅慶資訊
 * 設計: 大型彩色圖標 + 簡潔文字，類似功能特性展示
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
    color: '#C97A9A',
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
    color: '#8B9DC3',
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
    color: '#7ECCC4',
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
    color: '#D4B896',
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
    <section id="services" ref={sectionRef} style={{ padding: '100px 0', background: '#F8FAFC', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @keyframes icon-float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
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

      {/* 背景裝飾 */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(233, 30, 99, 0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        {/* 標題 */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(201, 122, 154, 0.08)',
            border: '1px solid rgba(201, 122, 154, 0.2)',
            borderRadius: '100px',
            padding: '0.3rem 1rem',
            marginBottom: '1rem',
          }}>
            <span style={{ color: '#C97A9A', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.1em' }}>
              OUR SERVICES
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            color: '#1C2C45',
            marginBottom: '1rem',
          }}>
            核心服務項目
          </h2>
          <div style={{ width: '60px', height: '4px', background: '#C97A9A', margin: '0 auto 1.5rem' }} />
          <p style={{
            fontFamily: "'Open Sans', sans-serif",
            color: '#64748B',
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem',
        }}>
          {services.map((service, index) => (
            <div
              key={index}
              className="reveal"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                transitionDelay: `${index * 0.1}s`,
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(-12px)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(0)';
              }}
            >
              {/* 大型圖標 */}
              <div
                className="service-icon-large"
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '20px',
                  background: `linear-gradient(135deg, ${service.color}20 0%, ${service.color}05 100%)`,
                  border: `2px solid ${service.color}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  color: service.color,
                  transition: 'all 0.3s ease',
                  boxShadow: `0 8px 24px ${service.color}15`,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = `linear-gradient(135deg, ${service.color}30 0%, ${service.color}15 100%)`;
                  el.style.borderColor = service.color;
                  el.style.boxShadow = `0 12px 32px ${service.color}30`;
                  el.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = `linear-gradient(135deg, ${service.color}20 0%, ${service.color}05 100%)`;
                  el.style.borderColor = `${service.color}30`;
                  el.style.boxShadow = `0 8px 24px ${service.color}15`;
                  el.style.transform = 'scale(1)';
                }}
              >
                {service.icon}
              </div>

              {/* 標題 */}
              <h3 style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: '1.15rem',
                color: '#1C2C45',
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
                color: '#64748B',
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
                      background: `${service.color}12`,
                      border: `1px solid ${service.color}30`,
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
                      el.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = `${service.color}12`;
                      el.style.color = service.color;
                      el.style.transform = 'translateY(0)';
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
            fontFamily: "'Open Sans', sans-serif",
            color: '#94A3B8',
            fontSize: '0.85rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}>
            核心技術棧
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            {['.NET / C#', 'Java / Spring', 'React / Vue', 'Node.js', 'AWS / Azure', 'iOS Swift', 'Android Kotlin', 'Docker / K8s', 'SQL / NoSQL'].map(tech => (
              <div key={tech} style={{
                background: 'white',
                border: '1px solid #E2E8F0',
                borderRadius: '6px',
                padding: '0.5rem 1.25rem',
                fontFamily: "'Poppins', sans-serif",
                fontSize: '0.85rem',
                fontWeight: 500,
                color: '#1C2C45',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = '#C97A9A';
                (e.currentTarget as HTMLElement).style.color = '#C97A9A';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = '#E2E8F0';
                (e.currentTarget as HTMLElement).style.color = '#1C2C45';
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
