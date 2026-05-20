/**
 * Footer 元件 - 悅慶資訊
 * 設計: 深藍色背景, 版權資訊
 * 佈局: LOGO 靠左縮小, 版權文字置於中間, 快速連結靠右
 */

export default function Footer() {
  return (
    <footer style={{
      background: '#050E1A',
      borderTop: '1px solid rgba(233, 30, 99, 0.2)',
      padding: '2rem 0',
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '2rem',
        }}>
          {/* LOGO - 靠左縮小 */}
          <div style={{ display: 'flex', alignItems: 'center', flex: '0 0 auto' }}>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663555912533/Ht5wYqH4kwjKWwDCopdJpC/footer-logo-transparent_3e220dc8.png"
              alt="Macnet 悅慶資訊"
              style={{
                height: '35px',
                width: 'auto',
                objectFit: 'contain',
              }}
            />
          </div>

          {/* 版權 - 中間 */}
          <div style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: '0.85rem',
            color: 'rgba(255,255,255,0.4)',
            textAlign: 'center',
            flex: '1 1 auto',
            minWidth: '200px',
          }}>
            All rights reserved © 2026 | from 悅慶有限公司
          </div>

          {/* 快速連結 - 靠右 */}
          <div style={{ display: 'flex', gap: '1.5rem', flex: '0 0 auto' }}>
            {[
              { label: '關於悅慶', href: '#about' },
              { label: '服務項目', href: '#services' },
              { label: '聯絡我們', href: '#contact' },
            ].map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' }); }}
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: '0.8rem',
                  color: 'rgba(255,255,255,0.4)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#E91E63'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.4)'}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
