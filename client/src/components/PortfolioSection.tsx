/**
 * 成功案例區塊 - 悅慶資訊
 * 設計: 白色背景, 無限滾動 LOGO 輪播, 簡約呈現
 */
import { useEffect, useRef } from 'react';

const clients = [
  { name: '國泰人壽', logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555912533/Ht5wYqH4kwjKWwDCopdJpC/cathay-life_df5a34f4.png' },
  { name: '富邦人壽', logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555912533/Ht5wYqH4kwjKWwDCopdJpC/fubon-life_03db2650.png' },
  { name: '凱基人壽', logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555912533/Ht5wYqH4kwjKWwDCopdJpC/kgi-life_d8d91168.jpg' },
  { name: '明台產險', logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555912533/Ht5wYqH4kwjKWwDCopdJpC/mingtai_93f1682e.png' },
  { name: '兆豐產險', logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555912533/Ht5wYqH4kwjKWwDCopdJpC/mega-insurance_f188051c.png' },
  { name: '和泰產險', logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555912533/Ht5wYqH4kwjKWwDCopdJpC/hotai_2a92bbd5.png' },
  { name: 'MOMO富邦媒體', logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555912533/Ht5wYqH4kwjKWwDCopdJpC/momo_ee9b1a29.jpg' },
  { name: '遊戲橘子', logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555912533/Ht5wYqH4kwjKWwDCopdJpC/gamania_d548160b.png' },
  { name: '宏碁資訊', logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555912533/Ht5wYqH4kwjKWwDCopdJpC/acer_c0846d96.png' },
  { name: '精誠資訊', logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555912533/Ht5wYqH4kwjKWwDCopdJpC/systex_36e6ff61.jpg' },
  { name: '中小企業信保基金', logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555912533/Ht5wYqH4kwjKWwDCopdJpC/smeg_def6af0e.png' },
  { name: '關貿網路', logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555912533/Ht5wYqH4kwjKWwDCopdJpC/tradevan_f8a7139c.png' },
  { name: '1111人力銀行', logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555912533/Ht5wYqH4kwjKWwDCopdJpC/1111_3970e9ac.png' },
  { name: '統一資訊', logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663555912533/Ht5wYqH4kwjKWwDCopdJpC/uni-pic_2dd01c6c.jpg' },
];

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
  const allClients = [...clients, ...clients];

  return (
    <section id="portfolio" ref={sectionRef} style={{ padding: '100px 0', background: 'white', overflow: 'hidden' }}>
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
          {allClients.map((client, index) => (
            <div
              key={index}
              style={{
                flexShrink: 0,
                width: '160px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem',
                background: 'white',
                border: '1px solid #F1F5F9',
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
                el.style.borderColor = '#F1F5F9';
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
            animationDirection: 'reverse',
          }}
        >
          {[...allClients].reverse().map((client, index) => (
            <div
              key={index}
              style={{
                flexShrink: 0,
                width: '160px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem',
                background: '#FAFAFA',
                border: '1px solid #F1F5F9',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = '#E91E63';
                el.style.boxShadow = '0 8px 25px rgba(233, 30, 99, 0.15)';
                el.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = '#F1F5F9';
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
