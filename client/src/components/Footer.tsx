/**
 * Footer 元件 - 悅慶資訊
 * 設計: 深藍色背景, 版權資訊
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
          gap: '1rem',
        }}>
          {/* LOGO */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '32px',
              height: '32px',
              background: 'linear-gradient(135deg, #E91E63, #c2185b)',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <svg width="18" height="18" viewBox="0 0 26 26" fill="none">
                <path d="M4 13L13 4L22 13L13 22L4 13Z" stroke="white" strokeWidth="2" fill="rgba(255,255,255,0.2)" />
                <circle cx="13" cy="13" r="2.5" fill="white" />
              </svg>
            </div>
            <span style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: '1rem',
              color: 'white',
            }}>
              悅慶資訊
            </span>
          </div>

          {/* 版權 */}
          <div style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: '0.85rem',
            color: 'rgba(255,255,255,0.4)',
            textAlign: 'center',
          }}>
            All rights reserved © 2026 | from 悅慶有限公司
          </div>

          {/* 快速連結 */}
          <div style={{ display: 'flex', gap: '1.5rem' }}>
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
