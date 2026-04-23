/**
 * 團隊介紹區塊 - 悅慶資訊
 * 設計: 白色背景, 彩色頂部條卡片, 豐富設計, 完整文字介紹
 */
import { useEffect, useRef } from 'react';
import { Code2, Smartphone, Users, Palette } from 'lucide-react';

const teams = [
  {
    id: 1,
    title: 'Web Team',
    subtitle: '網站平台開發團隊',
    description: '專門從事企業級網站和 Web 應用開發。我們使用最新的前端技術框架（React、Vue）和後端技術（.NET、Java、Node.js），為客戶打造高性能、高可用的網站平台。從需求分析、架構設計、開發實施到上線維護，提供全方位的專業服務。',
    skills: ['.NET', 'Java', 'React', 'Vue', 'Node.js'],
    icon: Code2,
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderColor: '#667eea',
    stats: '50+ 專案',
  },
  {
    id: 2,
    title: 'Mobile Team',
    subtitle: '手機平台開發團隊',
    description: '致力於 iOS 和 Android 原生應用開發。我們擁有豐富的跨平台開發經驗，能夠為企業和消費者開發功能完整、性能優異的行動應用。從 UI/UX 設計、應用開發、測試到上架發佈，全程提供專業的技術支援和優化建議。',
    skills: ['iOS Swift', 'Android Kotlin', 'React Native', 'Flutter', 'UX/UI'],
    icon: Smartphone,
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    borderColor: '#f093fb',
    stats: '30+ 應用',
  },
  {
    id: 3,
    title: 'Work Team',
    subtitle: '專業駐點/派遣/顧問',
    description: '提供專業的技術人力派遣和駐點服務。我們的技術顧問和工程師可以直接駐點於客戶現場，協助企業解決複雜的技術問題、進行系統維護、提供技術培訓，以及協助企業實現數位轉型和技術升級。',
    skills: ['技術顧問', '系統維護', '人力派遣', '技術培訓', '專案管理'],
    icon: Users,
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    borderColor: '#4facfe',
    stats: '100+ 客戶',
  },
  {
    id: 4,
    title: 'Design Team',
    subtitle: '設計團隊',
    description: '專業的 UI/UX 設計和品牌視覺設計團隊。我們致力於為企業打造獨特的品牌形象和優秀的用戶體驗。從品牌策略、視覺設計、交互設計到設計系統建立，提供完整的設計解決方案，確保產品既美觀又易用。',
    skills: ['UI/UX 設計', '品牌設計', '視覺設計', '交互設計', '設計系統'],
    icon: Palette,
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    borderColor: '#fa709a',
    stats: '80+ 案例',
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
        background: '#ffffff',
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
          background: 'radial-gradient(circle, rgba(233, 30, 99, 0.03) 0%, transparent 70%)',
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
                  borderRadius: '16px',
                  padding: 'clamp(1.5rem, 3vw, 2rem)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  opacity: 0,
                  transform: 'translateY(20px)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  border: '1px solid rgba(233, 30, 99, 0.1)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-8px)';
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    '0 16px 32px rgba(233, 30, 99, 0.15)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    '0 4px 12px rgba(0, 0, 0, 0.08)';
                }}
              >
                {/* 上方彩色漸層條 */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '6px',
                    background: team.gradient,
                  }}
                />

                {/* 圖示 */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '64px',
                    height: '64px',
                    background: team.gradient,
                    borderRadius: '14px',
                    marginBottom: '1.25rem',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                  }}
                >
                  <IconComponent
                    size={32}
                    style={{ color: 'white', strokeWidth: 1.5 }}
                  />
                </div>

                {/* 標題 */}
                <h3
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    fontSize: '1.35rem',
                    color: '#1C2C45',
                    marginBottom: '0.35rem',
                    lineHeight: 1.2,
                  }}
                >
                  {team.title}
                </h3>

                {/* 副標題 */}
                <p
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: '0.9rem',
                    color: team.borderColor,
                    fontWeight: 600,
                    marginBottom: '0.75rem',
                  }}
                >
                  {team.subtitle}
                </p>

                {/* 完整描述 */}
                <p
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: '0.95rem',
                    color: '#555',
                    marginBottom: '1.25rem',
                    lineHeight: 1.6,
                    minHeight: '4.5rem',
                  }}
                >
                  {team.description}
                </p>

                {/* 統計數據 */}
                <div
                  style={{
                    marginBottom: '1rem',
                    paddingBottom: '1rem',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '1rem',
                      fontWeight: 700,
                      background: team.gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
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
                  }}
                >
                  {team.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      style={{
                        display: 'inline-block',
                        background: `rgba(233, 30, 99, 0.08)`,
                        color: '#1C2C45',
                        padding: '0.4rem 0.75rem',
                        borderRadius: '16px',
                        fontFamily: "'Open Sans', sans-serif",
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        whiteSpace: 'nowrap',
                        border: '1px solid rgba(233, 30, 99, 0.2)',
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
            background: 'linear-gradient(135deg, rgba(233, 30, 99, 0.08) 0%, rgba(233, 30, 99, 0.04) 100%)',
            borderRadius: '16px',
            border: '1px solid rgba(233, 30, 99, 0.15)',
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
              background: 'linear-gradient(135deg, #E91E63 0%, #c2185b 100%)',
              color: 'white',
              padding: '0.85rem 2.25rem',
              borderRadius: '8px',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: '0.95rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              letterSpacing: '0.02em',
              boxShadow: '0 4px 15px rgba(233, 30, 99, 0.3)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
              (e.currentTarget as HTMLElement).style.boxShadow =
                '0 8px 25px rgba(233, 30, 99, 0.4)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow =
                '0 4px 15px rgba(233, 30, 99, 0.3)';
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
