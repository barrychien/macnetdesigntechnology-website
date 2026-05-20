/**
 * 成功案例區塊 - 悅慶資訊
 * 設計: 白色背景, 分行無重複輪播, 簡約呈現
 */
import { useEffect, useRef } from 'react';

// 按用戶提供的順序排列
const clients = [
  { name: '國泰人壽', logo: 'https://static.104.com.tw/b_profile/cust_picture/7615/130000000157615/logo.png?v=20241126225105' },
  { name: '富邦人壽', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0GrjWRHw7UZycWeNMjUM4B1tM_PyU2sAO2g&s' },
  { name: '凱基人壽', logo: 'https://sso.kgilife.com.tw/SSOA/images/logo.png' },
  { name: '明台產險', logo: 'https://ec.msig-mingtai.com.tw/SP/FrontWebNew/Images/08LOGOB_S.png' },
  { name: '兆豐產險', logo: 'https://upload.wikimedia.org/wikipedia/zh/thumb/f/fb/Mega_Holdings.svg/500px-Mega_Holdings.svg.png' },
  { name: '和泰產險', logo: 'https://images.ctee.com.tw/newsphoto/2023-06-06/1024/20230606700051.jpg' },
  { name: 'MOMO富邦媒體科技', logo: 'https://www.netpro.com.tw/wp-content/uploads/customer_09200_momo%E5%AF%8C%E9%82%A6%E5%AA%92%E9%AB%94%E7%A7%91%E6%8A%80.png' },
  { name: '遊戲橘子', logo: 'https://ir.gamania.com/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdUFJIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--44951e9c4179234709ac507bc7c6ff1c0b785c2d/gamania_logo_h_black.png' },
  { name: '宏碁資訊', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcC1NAQ6duSxqnYFkIup-JKvcG8xJYfB2RGg&s' },
  { name: '精誠資訊', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyZXkHo8Aofy-vWAsodP6yrZKPUuMgU94oSw&s' },
  { name: '財團法人中小企業信用保證基金', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsF1HzEp-2Bd50ccWJaplSvKoW40vKGtaDxQ&s' },
  { name: '關貿網路', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6a1um28NS071mRgl3jI_7s7qtysEPO8N_Zg&s' },
  { name: '1111人力銀行', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYS3bP4y71cqovA4p6NkZ0dZpopxxwxUBHaw&s' },
  { name: '買保險', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ18q874jSdiR6E5EEwzI8x_IyWmbzBU3ZuTg&s' },
  { name: '統一資訊', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJvz1Zmnor3YQv_1Oq88ZvPhS2eHniMbuRoA&s' },
  { name: '寬聯資訊', logo: 'https://www.kli.com.tw/images/logo.svg' },
  { name: '資拓宏宇', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtDE2P6l8kW0kOSYfE-4bPg5x-DwhQ6sigSw&s' },
  { name: '中租迪和', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOfijon3LCiJCpFrEye5KMMBZ2nWkzBVrwyg&s' },
  { name: '資通電腦', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ilFxgLYZ5Y5-gi8qmHVOw9HNiP_iyg5XiQ&s' },
  { name: '碩益科技', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT686MOdlq65wfxjN-klXEoMdHdO0ki23Esyg&s' },
];

// 分成兩行：奇數索引為第一行，偶數索引為第二行
const row1 = clients.filter((_, i) => i % 2 === 0);
const row2 = clients.filter((_, i) => i % 2 === 1);

export default function PortfolioSection() {
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

  // 複製一份以實現無縫滾動
  const allRow1 = [...row1, ...row1];
  const allRow2 = [...row2, ...row2];

  const LogoCard = ({ client }: { client: typeof clients[0] }) => (
    <div
      style={{
        flexShrink: 0,
        width: '160px',
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        background: 'white',
        border: '1px solid #E8E8E8',
        borderRadius: '8px',
        transition: 'all 0.3s ease',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = '#E91E63';
        el.style.boxShadow = '0 8px 25px rgba(233, 30, 99, 0.15)';
        el.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = '#E8E8E8';
        el.style.boxShadow = 'none';
        el.style.transform = 'translateY(0)';
      }}
    >
      <img
        src={client.logo}
        alt={client.name}
        style={{
          maxWidth: '130px',
          maxHeight: '55px',
          objectFit: 'contain',
          filter: 'grayscale(30%)',
          transition: 'filter 0.3s ease',
        }}
        onMouseEnter={(e) => (e.target as HTMLImageElement).style.filter = 'grayscale(0%)'}
        onMouseLeave={(e) => (e.target as HTMLImageElement).style.filter = 'grayscale(30%)'}
      />
    </div>
  );

  return (
    <section id="portfolio" ref={sectionRef} style={{ padding: '100px 0', background: 'white', overflow: 'hidden' }}>
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .logo-track {
          display: flex;
          gap: 1.5rem;
          animation: scroll-left 60s linear infinite;
          width: fit-content;
        }

        .logo-track:hover {
          animation-play-state: paused;
        }
      `}</style>

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
              SUCCESS STORIES
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            color: '#1C2C45',
            marginBottom: '1rem',
          }}>
            成功合作案例
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
            我們榮幸地與台灣各大產業領導企業合作，共同推動數位轉型
          </p>
        </div>
      </div>

      {/* LOGO 輪播 - 第一排 */}
      <div style={{ overflow: 'hidden', marginBottom: '2rem', position: 'relative' }}>
        {/* 左側漸層遮罩 */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '150px',
          background: 'linear-gradient(90deg, white, transparent)',
          zIndex: 10,
          pointerEvents: 'none',
        }} />
        {/* 右側漸層遮罩 */}
        <div style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '150px',
          background: 'linear-gradient(-90deg, white, transparent)',
          zIndex: 10,
          pointerEvents: 'none',
        }} />

        <div className="logo-track" style={{ padding: '1rem 0' }}>
          {allRow1.map((client, index) => (
            <LogoCard key={index} client={client} />
          ))}
        </div>
      </div>

      {/* 第二排 (反向) */}
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '150px',
          background: 'linear-gradient(90deg, white, transparent)',
          zIndex: 10,
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '150px',
          background: 'linear-gradient(-90deg, white, transparent)',
          zIndex: 10,
          pointerEvents: 'none',
        }} />

        <div
          className="logo-track"
          style={{
            padding: '1rem 0',
            animation: 'scroll-left 60s linear infinite reverse',
          }}
        >
          {allRow2.map((client, index) => (
            <LogoCard key={index} client={client} />
          ))}
        </div>
      </div>

      {/* 底部統計 */}
      <div className="container">
        <div className="reveal" style={{
          marginTop: '4rem',
          padding: '2.5rem',
          background: 'linear-gradient(135deg, #1C2C45, #0A1628)',
          borderRadius: '16px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          textAlign: 'center',
        }}>
          {[
            { label: '服務產業', value: '金融、保險、電商、科技' },
            { label: '合作企業規模', value: '中小企業至上市公司' },
            { label: '服務地區', value: '台灣全島' },
          ].map((item, i) => (
            <div key={i}>
              <div style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: '1rem',
                color: '#E91E63',
                marginBottom: '0.5rem',
              }}>
                {item.label}
              </div>
              <div style={{
                fontFamily: "'Open Sans', sans-serif",
                color: 'rgba(255,255,255,0.8)',
                fontSize: '0.9rem',
              }}>
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
