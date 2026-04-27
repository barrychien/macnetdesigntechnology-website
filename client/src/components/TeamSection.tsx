import React, { useEffect, useRef, useState } from 'react';
import { Code2, Smartphone, Users, Palette } from 'lucide-react';

export default function TeamSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredTeamId, setHoveredTeamId] = useState<number | null>(null);

  const teams = [
    {
      id: 1,
      title: 'Web Team',
      subtitle: '網站平台開發團隊',
      description:
        '專注於企業級網站和 Web 應用開發。我們使用最新的前端技術框架（React、Vue、Angular）和後端解決方案，為客戶打造高效、安全、可擴展的 Web 平台。',
      skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker'],
      stats: '50+ 專案',
      icon: Code2,
      accentColor: '#C97A9A',
      borderColor: '#C97A9A',
    },
    {
      id: 2,
      title: 'Mobile Team',
      subtitle: '手機平台開發團隊',
      description:
        '專精於 iOS 和 Android 原生應用開發。我們掌握最新的移動開發技術，提供流暢的用戶體驗和高效的應用性能，滿足各種複雜的移動應用需求。',
      skills: ['Swift', 'Kotlin', 'React Native', 'Firebase', 'Xcode'],
      stats: '30+ 應用',
      icon: Smartphone,
      accentColor: '#8B9DC3',
      borderColor: '#8B9DC3',
    },
    {
      id: 3,
      title: 'Work Team',
      subtitle: '專業駐點/派遣/顧問',
      description:
        '提供技術人力派遣、駐點服務和技術顧問支持。我們的專業團隊可以快速融入客戶環境，提供高效的技術支持和解決方案，幫助企業加速數位轉型。',
      skills: ['技術顧問', '系統架構', '團隊管理', '項目管理', '技術培訓'],
      stats: '100+ 客戶',
      icon: Users,
      accentColor: '#7ECCC4',
      borderColor: '#7ECCC4',
    },
    {
      id: 4,
      title: 'Design Team',
      subtitle: '設計團隊',
      description:
        '提供 UI/UX 設計和品牌視覺設計服務。我們的設計師具有豐富的設計經驗，能夠創造出既美觀又易用的用戶界面，提升產品的市場競爭力。',
      skills: ['UI/UX', 'Figma', '品牌設計', '動畫設計', '用戶研究'],
      stats: '80+ 案例',
      icon: Palette,
      accentColor: '#D4B896',
      borderColor: '#D4B896',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.team-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-in');
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      style={{
        padding: 'clamp(3rem, 8vw, 6rem) 1rem',
        background: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 背景裝飾 - 淡色漸層圓形 */}
      <div
        style={{
          position: 'absolute',
          top: '-40%',
          right: '-20%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(233, 30, 99, 0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-30%',
          left: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ maxWidth: '1280px', position: 'relative', zIndex: 1 }}>
        {/* 標題區塊 */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
          <div
            style={{
              display: 'inline-block',
              background: '#E91E63',
              color: 'white',
              padding: '0.6rem 1.2rem',
              borderRadius: '6px',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: '0.85rem',
              letterSpacing: '0.05em',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              border: 'none',
            }}
          >
            OUR TEAM
          </div>
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
              color: '#1C2C45',
              marginBottom: '1rem',
              lineHeight: 1.2,
            }}
          >
            專業團隊介紹
          </h2>
          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: '1rem',
              color: '#666666',
              lineHeight: 1.6,
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            我們的團隊由各領域專家組成，致力於為客戶提供最優質的軟體開發與技術服務
          </p>
        </div>

        {/* 團隊卡片網格 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2rem)',
          }}
        >
          {teams.map((team) => {
            const IconComponent = team.icon;
            return (
              <div
                key={team.id}
                className="team-card"
                style={{
                  background: '#ffffff',
                  borderRadius: '12px',
                  padding: 'clamp(1.5rem, 3vw, 2rem)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  opacity: 0,
                  transform: 'translateY(20px)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  border: `2px solid ${team.borderColor}`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    `0 12px 28px ${team.accentColor}30`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    '0 4px 16px rgba(0, 0, 0, 0.08)';
                }}
              >
                {/* 上方彩色邊框 */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: team.accentColor,
                    boxShadow: `0 0 15px ${team.accentColor}80`,
                  }}
                />

                {/* 圖示 */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '56px',
                    height: '56px',
                    background: `${team.accentColor}15`,
                    borderRadius: '10px',
                    marginBottom: '1.25rem',
                    transition: 'all 0.3s ease',
                    border: `2px solid ${team.accentColor}`,
                    position: 'relative',
                    zIndex: 1,
                  }}
                  onMouseEnter={(e) => {
                    const container = e.currentTarget as HTMLElement;
                    container.style.background = team.accentColor;
                    container.style.transform = 'scale(1.1)';
                    const svg = container.querySelector('svg') as SVGElement;
                    if (svg) {
                      svg.style.color = 'white';
                      // 更新所有 stroke 屬性
                      svg.querySelectorAll('*').forEach((el) => {
                        (el as SVGElement).style.stroke = 'white';
                      });
                    }
                  }}
                  onMouseLeave={(e) => {
                    const container = e.currentTarget as HTMLElement;
                    container.style.background = `${team.accentColor}15`;
                    container.style.transform = 'scale(1)';
                    const svg = container.querySelector('svg') as SVGElement;
                    if (svg) {
                      svg.style.color = team.accentColor;
                      // 恢復所有 stroke 屬性
                      svg.querySelectorAll('*').forEach((el) => {
                        (el as SVGElement).style.stroke = team.accentColor;
                      });
                    }
                  }}
                >
                  <IconComponent
                    size={28}
                    style={{
                      color: team.accentColor,
                      strokeWidth: 2,
                      transition: 'all 0.3s ease',
                    }}
                  />
                </div>

                {/* 標題 */}
                <h3
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 700,
                      fontSize: '1.25rem',
                      color: '#1C2C45',
                      marginBottom: '0.35rem',
                      lineHeight: 1.2,
                      position: 'relative',
                      zIndex: 1,
                      letterSpacing: '0.5px',
                    }}
                  >
                    {team.title}
                  </h3>

                {/* 副標題 */}
                <p
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: '0.85rem',
                    color: team.accentColor,
                    fontWeight: 600,
                    marginBottom: '0.75rem',
                    position: 'relative',
                    zIndex: 1,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {team.subtitle}
                </p>

                {/* 完整描述 */}
                <p
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: '0.9rem',
                    color: '#666666',
                    marginBottom: '1.25rem',
                    lineHeight: 1.7,
                    minHeight: '4.2rem',
                    position: 'relative',
                    zIndex: 1,
                    fontWeight: 400,
                  }}
                >
                  {team.description}
                </p>

                {/* 統計數據 */}
                <div
                  style={{
                    marginBottom: '1rem',
                    paddingBottom: '1rem',
                    borderBottom: `2px solid ${team.accentColor}20`,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: team.accentColor,
                      letterSpacing: '0.5px',
                    }}
                  >
                    {team.stats}
                  </p>
                </div>

                {/* 技能標籤 */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {team.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      style={{
                        display: 'inline-block',
                        background: `${team.accentColor}12`,
                        color: team.accentColor,
                        padding: '0.45rem 0.85rem',
                        borderRadius: '6px',
                        fontFamily: "'Open Sans', sans-serif",
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        whiteSpace: 'nowrap',
                        border: `1.5px solid ${team.accentColor}`,
                        transition: 'all 0.3s ease',
                        letterSpacing: '0.3px',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = team.accentColor;
                        (e.currentTarget as HTMLElement).style.color = 'white';
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = `${team.accentColor}12`;
                        (e.currentTarget as HTMLElement).style.color = team.accentColor;
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* 加入我們區塊 */}
        <div
          style={{
            marginTop: 'clamp(3rem, 6vw, 5rem)',
            padding: 'clamp(2rem, 4vw, 3rem)',
            background: '#1C2C45',
            borderRadius: '12px',
            border: 'none',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 8px 24px rgba(28, 44, 69, 0.15)',
          }}
        >
          <h3
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
              color: '#ffffff',
              marginBottom: '0.75rem',
              position: 'relative',
              zIndex: 1,
            }}
          >
            加入我們的團隊
          </h3>
          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: '1rem',
              color: 'rgba(255, 255, 255, 0.85)',
              marginBottom: '1.5rem',
              lineHeight: 1.6,
              position: 'relative',
              zIndex: 1,
            }}
          >
            我們正在尋找充滿熱情的技術人才，一起打造更好的軟體世界
          </p>
          <a
            href="https://www.104.com.tw/company/7p14sk0?jobsource=google"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: '#E91E63',
              color: 'white',
              padding: '0.85rem 2.25rem',
              borderRadius: '6px',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: '0.95rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              letterSpacing: '0.02em',
              boxShadow: '0 4px 15px rgba(233, 30, 99, 0.4)',
              position: 'relative',
              zIndex: 1,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
              (e.currentTarget as HTMLElement).style.boxShadow =
                '0 8px 25px rgba(233, 30, 99, 0.6)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow =
                '0 4px 15px rgba(233, 30, 99, 0.4)';
            }}
          >
            查看職缺
          </a>
        </div>
      </div>

      <style>{`
        .team-card.animate-in {
          animation: slideUp 0.6s ease forwards;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .team-card {
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
