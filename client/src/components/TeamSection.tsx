/**
 * 團隊介紹區塊 - 悅慶資訊
 * 設計: 淺灰色背景, 四欄團隊卡片, 展示不同團隊類別與技能
 */
import { useEffect, useRef } from 'react';
import { Code2, Smartphone, Users, Palette } from 'lucide-react';

const teams = [
  {
    id: 1,
    title: 'Web Team',
    description: '網站平台開發團隊',
    skills: ['.NET', 'Java', '資料庫', '雲端', '微服務'],
    icon: Code2,
    color: '#E91E63',
  },
  {
    id: 2,
    title: 'Mobile Team',
    description: '手機平台開發團隊',
    skills: ['Swift', 'Kotlin', 'Android', 'iOS', 'Flutter'],
    icon: Smartphone,
    color: '#E91E63',
  },
  {
    id: 3,
    title: 'Work Team',
    description: '專業駐點/派遣/顧問',
    skills: ['專案經理', '系統分析', '系統架構', '程式開發'],
    icon: Users,
    color: '#E91E63',
  },
  {
    id: 4,
    title: 'Design Team',
    description: '設計團隊',
    skills: ['UX/UI', 'Illustrator', 'Figma', 'Zeplin'],
    icon: Palette,
    color: '#E91E63',
  },
];

export default function TeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.team-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="team"
      ref={sectionRef}
      style={{
        padding: 'clamp(3rem, 8vw, 6rem) 0',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 背景裝飾 */}
      <div
        style={{
          position: 'absolute',
          top: '-50%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(233, 30, 99, 0.05) 0%, transparent 70%)',
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
              background: 'rgba(233, 30, 99, 0.1)',
              color: '#E91E63',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: '0.85rem',
              letterSpacing: '0.05em',
              marginBottom: '1rem',
              textTransform: 'uppercase',
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
              color: '#666',
              lineHeight: 1.6,
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            我們的團隊由各領域專家組成，致力於為客戶提供最優質的軟體開發與技術服務
          </p>
          {/* 紅色分隔線 */}
          <div
            style={{
              width: '60px',
              height: '3px',
              background: '#E91E63',
              margin: '1.5rem auto 0',
            }}
          />
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
                  background: 'white',
                  borderRadius: '12px',
                  padding: 'clamp(1.5rem, 3vw, 2rem)',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  opacity: 0,
                  transform: 'translateY(20px)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-8px)';
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    '0 12px 24px rgba(233, 30, 99, 0.15)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    '0 2px 8px rgba(0, 0, 0, 0.08)';
                }}
              >
                {/* 上方彩色條 */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: team.color,
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
                    background: 'rgba(233, 30, 99, 0.1)',
                    borderRadius: '12px',
                    marginBottom: '1rem',
                  }}
                >
                  <IconComponent
                    size={28}
                    style={{ color: team.color, strokeWidth: 1.5 }}
                  />
                </div>

                {/* 標題 */}
                <h3
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    fontSize: '1.25rem',
                    color: '#1C2C45',
                    marginBottom: '0.5rem',
                    lineHeight: 1.2,
                  }}
                >
                  {team.title}
                </h3>

                {/* 描述 */}
                <p
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: '0.95rem',
                    color: '#666',
                    marginBottom: '1.25rem',
                    lineHeight: 1.5,
                  }}
                >
                  {team.description}
                </p>

                {/* 技能標籤 */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                  }}
                >
                  {team.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      style={{
                        display: 'inline-block',
                        background: 'rgba(233, 30, 99, 0.08)',
                        color: '#E91E63',
                        padding: '0.4rem 0.75rem',
                        borderRadius: '16px',
                        fontFamily: "'Open Sans', sans-serif",
                        fontSize: '0.8rem',
                        fontWeight: 500,
                        whiteSpace: 'nowrap',
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
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
            textAlign: 'center',
          }}
        >
          <h3
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
              color: '#1C2C45',
              marginBottom: '0.75rem',
            }}
          >
            加入我們的團隊
          </h3>
          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: '1rem',
              color: '#666',
              marginBottom: '1.5rem',
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
              background: '#E91E63',
              color: 'white',
              padding: '0.75rem 2rem',
              borderRadius: '4px',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: '0.95rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              letterSpacing: '0.02em',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = '#c2185b';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLElement).style.boxShadow =
                '0 4px 15px rgba(233, 30, 99, 0.4)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = '#E91E63';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
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
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
