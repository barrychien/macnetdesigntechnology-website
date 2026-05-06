import { useEffect, useRef, useState } from 'react';
import { Code2, Smartphone, Users, Palette, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TeamSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

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

  // 自動輪播
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teams.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, teams.length]);

  // 滑動到對應的卡片
  useEffect(() => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  const handlePrev = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + teams.length) % teams.length);
  };

  const handleNext = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % teams.length);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
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

  const currentTeam = teams[currentIndex];

  return (
    <section
      ref={containerRef}
      id="team"
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

      <div className="container" style={{ maxWidth: '1200px', position: 'relative', zIndex: 1 }}>
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

        {/* 輪播容器 */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            marginBottom: '2rem',
          }}
        >
          {/* 左箭頭 */}
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: '-60px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              background: 'white',
              border: `2px solid ${currentTeam.accentColor}`,
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = currentTeam.accentColor;
              (e.currentTarget as HTMLElement).style.color = 'white';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'white';
              (e.currentTarget as HTMLElement).style.color = currentTeam.accentColor;
            }}
          >
            <ChevronLeft size={24} color={currentTeam.accentColor} />
          </button>

          {/* 輪播卡片容器 */}
          <div
            ref={scrollContainerRef}
            style={{
              display: 'flex',
              overflowX: 'auto',
              scrollBehavior: 'smooth',
              scrollSnapType: 'x mandatory',
              gap: '1.5rem',
              width: '100%',
              paddingBottom: '0.5rem',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            {teams.map((team) => {
              const IconComponent = team.icon;
              const isActive = team.id === currentTeam.id;

              return (
                <div
                  key={team.id}
                  style={{
                    flex: '0 0 100%',
                    minWidth: '100%',
                    scrollSnapAlign: 'start',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div
                    style={{
                      padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                      background: '#ffffff',
                      border: `3px solid ${team.borderColor}`,
                      borderRadius: '16px',
                      boxShadow: isActive
                        ? `0 12px 32px ${team.accentColor}30`
                        : '0 4px 12px rgba(0, 0, 0, 0.08)',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {/* 背景裝飾 */}
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '150px',
                        height: '150px',
                        background: `radial-gradient(circle, ${team.accentColor}15 0%, transparent 70%)`,
                        borderRadius: '50%',
                        pointerEvents: 'none',
                      }}
                    />

                    {/* 內容 */}
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      {/* 標題區 */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1.5rem',
                          marginBottom: '1.5rem',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '72px',
                            height: '72px',
                            background: `${team.accentColor}15`,
                            borderRadius: '12px',
                            border: `2px solid ${team.accentColor}`,
                            flexShrink: 0,
                          }}
                        >
                          <IconComponent
                            size={36}
                            style={{
                              color: team.accentColor,
                              strokeWidth: 1.5,
                            }}
                          />
                        </div>

                        <div>
                          <h3
                            style={{
                              fontFamily: "'Montserrat', sans-serif",
                              fontWeight: 700,
                              fontSize: '1.5rem',
                              color: '#1C2C45',
                              marginBottom: '0.35rem',
                              lineHeight: 1.2,
                            }}
                          >
                            {team.title}
                          </h3>
                          <p
                            style={{
                              fontFamily: "'Open Sans', sans-serif",
                              fontSize: '0.9rem',
                              color: team.accentColor,
                              fontWeight: 600,
                              textTransform: 'uppercase',
                              letterSpacing: '0.05em',
                            }}
                          >
                            {team.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* 描述 */}
                      <p
                        style={{
                          fontFamily: "'Open Sans', sans-serif",
                          fontSize: '0.95rem',
                          color: '#555555',
                          lineHeight: 1.7,
                          marginBottom: '1.5rem',
                        }}
                      >
                        {team.description}
                      </p>

                      {/* 技能標籤 */}
                      <div style={{ marginBottom: '1.5rem' }}>
                        <p
                          style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: 600,
                            fontSize: '0.85rem',
                            color: '#1C2C45',
                            marginBottom: '0.75rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                          }}
                        >
                          核心技能
                        </p>
                        <div
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '0.75rem',
                          }}
                        >
                          {team.skills.map((skill) => (
                            <span
                              key={skill}
                              style={{
                                display: 'inline-block',
                                padding: '0.5rem 1rem',
                                background: `${team.accentColor}15`,
                                border: `1.5px solid ${team.accentColor}`,
                                borderRadius: '6px',
                                fontFamily: "'Open Sans', sans-serif",
                                fontSize: '0.8rem',
                                color: team.accentColor,
                                fontWeight: 600,
                                transition: 'all 0.2s ease',
                                cursor: 'default',
                              }}
                              onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.background = team.accentColor;
                                (e.currentTarget as HTMLElement).style.color = 'white';
                              }}
                              onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.background = `${team.accentColor}15`;
                                (e.currentTarget as HTMLElement).style.color = team.accentColor;
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* 統計數據 */}
                      <div
                        style={{
                          padding: '1rem',
                          background: `${team.accentColor}08`,
                          border: `1px solid ${team.borderColor}30`,
                          borderRadius: '8px',
                          textAlign: 'center',
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: 700,
                            fontSize: '1.8rem',
                            color: team.accentColor,
                            marginBottom: '0.25rem',
                          }}
                        >
                          {team.stats}
                        </p>
                        <p
                          style={{
                            fontFamily: "'Open Sans', sans-serif",
                            fontSize: '0.85rem',
                            color: '#666666',
                            fontWeight: 600,
                          }}
                        >
                          成功交付
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 右箭頭 */}
          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: '-60px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              background: 'white',
              border: `2px solid ${currentTeam.accentColor}`,
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = currentTeam.accentColor;
              (e.currentTarget as HTMLElement).style.color = 'white';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'white';
              (e.currentTarget as HTMLElement).style.color = currentTeam.accentColor;
            }}
          >
            <ChevronRight size={24} color={currentTeam.accentColor} />
          </button>
        </div>

        {/* 進度指示器 */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '2rem',
          }}
        >
          {teams.map((team, index) => (
            <button
              key={team.id}
              onClick={() => {
                setAutoPlay(false);
                setCurrentIndex(index);
              }}
              style={{
                width: index === currentIndex ? '32px' : '12px',
                height: '12px',
                background: index === currentIndex ? currentTeam.accentColor : '#ddd',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                if (index !== currentIndex) {
                  (e.currentTarget as HTMLElement).style.background = '#bbb';
                }
              }}
              onMouseLeave={(e) => {
                if (index !== currentIndex) {
                  (e.currentTarget as HTMLElement).style.background = '#ddd';
                }
              }}
            />
          ))}
        </div>
      </div>

      {/* 加入我們的團隊 */}
      <div
        style={{
          marginTop: 'clamp(3rem, 8vw, 6rem)',
          padding: 'clamp(2rem, 5vw, 4rem)',
          background: 'linear-gradient(135deg, #1C2C45 0%, #2a3f5f 100%)',
          borderRadius: '16px',
          textAlign: 'center',
          color: 'white',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <h3
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            marginBottom: '1rem',
            lineHeight: 1.2,
          }}
        >
          加入我們的團隊
        </h3>
        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: '1rem',
            marginBottom: '1.5rem',
            opacity: 0.9,
            lineHeight: 1.6,
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
            padding: '0.75rem 2rem',
            background: '#E91E63',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '6px',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: '0.95rem',
            transition: 'all 0.3s ease',
            border: 'none',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = '#d81b60';
            (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = '#E91E63';
            (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
          }}
        >
          查看職缺
        </a>
      </div>

      <style>{`
        div[style*="scrollbarWidth"] {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        div[style*="scrollbarWidth"]::-webkit-scrollbar {
          display: none;
        }

        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
