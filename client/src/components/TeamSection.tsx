/**
 * 團隊介紹區塊 - 悅慶資訊
 * 設計: 淺灰色背景, 四欄卡片, 每張卡片有加入悅慶按鈕
 */
import { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const teamMembers = [
  {
    name: '陳建宏',
    role: '技術總監',
    department: '研發部門',
    description: '擁有超過 15 年軟體開發經驗，專精 .NET 與 Java 企業級應用，帶領技術團隊完成多個大型金融系統專案。',
    skills: ['.NET', 'Java', 'Azure', '系統架構'],
    photo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555912533/Ht5wYqH4kwjKWwDCopdJpC/team-placeholder_b1ec1c06.png',
  },
  {
    name: '林雅婷',
    role: '前端工程師',
    department: '開發部門',
    description: '專注於現代化前端技術，擅長 React、Vue 等框架，致力於打造流暢的使用者體驗與響應式介面設計。',
    skills: ['React', 'Vue', 'TypeScript', 'UX/UI'],
    photo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555912533/Ht5wYqH4kwjKWwDCopdJpC/team-2_ebac060b.png',
  },
  {
    name: '王志明',
    role: '專案經理',
    department: '專案管理',
    description: '具備 PMP 認證，擅長敏捷開發管理，成功主導多個跨部門整合專案，確保專案準時高品質交付。',
    skills: ['PMP', 'Agile', 'Scrum', '風險管理'],
    photo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555912533/Ht5wYqH4kwjKWwDCopdJpC/team-3_9adb9362.png',
  },
  {
    name: '張美玲',
    role: '業務顧問',
    department: '業務部門',
    description: '深耕 IT 服務業多年，熟悉各產業需求，提供客戶最適合的技術解決方案，建立長期合作夥伴關係。',
    skills: ['業務開發', '客戶關係', '需求分析', '解決方案'],
    photo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555912533/Ht5wYqH4kwjKWwDCopdJpC/team-4_b4f41e97.png',
  },
];

export default function TeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="team" ref={sectionRef} style={{ padding: '100px 0', background: '#F8FAFC', position: 'relative' }}>
      {/* 背景裝飾 */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '250px',
        height: '250px',
        background: 'radial-gradient(circle, rgba(28, 44, 69, 0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        {/* 標題 */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(233, 30, 99, 0.08)',
            border: '1px solid rgba(233, 30, 99, 0.2)',
            borderRadius: '100px',
            padding: '0.3rem 1rem',
            marginBottom: '1rem',
          }}>
            <span style={{ color: '#E91E63', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.1em' }}>
              OUR TEAM
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            color: '#1C2C45',
            marginBottom: '1rem',
          }}>
            專業團隊介紹
          </h2>
          <div style={{ width: '60px', height: '4px', background: '#E91E63', margin: '0 auto 1.5rem' }} />
          <p style={{
            fontFamily: "'Open Sans', sans-serif",
            color: '#64748B',
            fontSize: '1.05rem',
            maxWidth: '560px',
            margin: '0 auto',
            lineHeight: 1.8,
          }}>
            我們的團隊由經驗豐富的技術專家組成，致力於為客戶提供最優質的軟體服務
          </p>
        </div>

        {/* 團隊卡片 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2rem',
        }}>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="reveal"
              style={{
                background: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(28, 44, 69, 0.08)',
                transition: 'all 0.3s ease',
                transitionDelay: `${index * 0.1}s`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-8px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 40px rgba(28, 44, 69, 0.15)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(28, 44, 69, 0.08)';
              }}
            >
              {/* 照片 */}
              <div style={{ position: 'relative', overflow: 'hidden', height: '240px' }}>
                <img
                  src={member.photo}
                  alt={member.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseEnter={(e) => (e.target as HTMLImageElement).style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => (e.target as HTMLImageElement).style.transform = 'scale(1)'}
                />
                {/* 部門標籤 */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(233, 30, 99, 0.9)',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '100px',
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '0.75rem',
                  fontWeight: 600,
                }}>
                  {member.department}
                </div>
              </div>

              {/* 內容 */}
              <div style={{ padding: '1.75rem' }}>
                <h3 style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: '1.15rem',
                  color: '#1C2C45',
                  marginBottom: '0.25rem',
                }}>
                  {member.name}
                </h3>
                <div style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 500,
                  fontSize: '0.85rem',
                  color: '#E91E63',
                  marginBottom: '0.875rem',
                }}>
                  {member.role}
                </div>
                <p style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: '0.875rem',
                  color: '#64748B',
                  lineHeight: 1.7,
                  marginBottom: '1.25rem',
                }}>
                  {member.description}
                </p>

                {/* 技能標籤 */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {member.skills.map((skill, i) => (
                    <span key={i} style={{
                      background: 'rgba(28, 44, 69, 0.06)',
                      color: '#1C2C45',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '4px',
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '0.75rem',
                      fontWeight: 500,
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>

                {/* 加入悅慶按鈕 */}
                <a
                  href="https://www.104.com.tw/company/7p14sk0?jobsource=google"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    width: '100%',
                    padding: '0.75rem',
                    background: 'linear-gradient(135deg, #1C2C45, #2d4a7a)',
                    color: 'white',
                    borderRadius: '6px',
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    letterSpacing: '0.03em',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #E91E63, #c2185b)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 15px rgba(233, 30, 99, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #1C2C45, #2d4a7a)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  <ExternalLink size={14} />
                  加入悅慶
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 招募橫幅 */}
        <div className="reveal" style={{
          marginTop: '4rem',
          padding: '3rem',
          background: 'linear-gradient(135deg, #1C2C45, #0A1628)',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '2rem',
        }}>
          <div>
            <h3 style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: '1.5rem',
              color: 'white',
              marginBottom: '0.5rem',
            }}>
              加入我們的團隊
            </h3>
            <p style={{
              fontFamily: "'Open Sans', sans-serif",
              color: 'rgba(255,255,255,0.7)',
              fontSize: '0.95rem',
            }}>
              我們正在尋找充滿熱情的技術人才，一起打造更好的軟體世界
            </p>
          </div>
          <a
            href="https://www.104.com.tw/company/7p14sk0?jobsource=google"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: '#E91E63',
              color: 'white',
              padding: '0.875rem 2rem',
              borderRadius: '6px',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: '0.95rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = '#c2185b';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 25px rgba(233, 30, 99, 0.4)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = '#E91E63';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
            }}
          >
            <ExternalLink size={16} />
            查看職缺
          </a>
        </div>
      </div>
    </section>
  );
}
