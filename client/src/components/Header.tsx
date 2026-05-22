/**
 * Header 元件 - 悅慶資訊
 * 設計: 深藍色 (#1C2C45) 背景, 固定頂部, 滾動時加深背景
 * 左側: 去背 LOGO 圖示 + 「Macnet 悅慶資訊」文字
 * 右側: 導航連結
 * RWD: 完全響應式設計，下拉選單背景色一致
 */
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: '悅慶資訊', href: '#about' },
  { label: '服務項目', href: '#services' },
  { label: '成功案例', href: '#portfolio' },
  { label: '團隊介紹', href: '#team' },
  { label: '聯絡我們', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // 更新 active section
      const sections = navItems.map(item => item.href.slice(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 計算背景顏色 - 確保下拉時也是同樣的顏色
  const headerBgColor = scrolled ? 'rgba(10, 22, 40, 0.97)' : '#1C2C45';
  const headerBgColorDarker = scrolled ? 'rgba(10, 22, 40, 0.97)' : 'rgba(10, 22, 40, 0.95)';

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: headerBgColor,
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
        transition: 'all 0.3s ease',
        borderBottom: scrolled ? '1px solid rgba(233, 30, 99, 0.2)' : '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div className="container" style={{ maxWidth: '1280px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px', gap: '1rem' }}>
          {/* LOGO 區塊 */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
              minWidth: 0,
              flex: '0 1 auto',
            }}
          >
            {/* LOGO 圖示 */}
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663555912533/xsBjmOKYNDBMqbGC.png"
              alt="Macnet Logo"
              style={{
                height: '48px',
                width: 'auto',
                objectFit: 'contain',
                flexShrink: 0,
              }}
            />
            {/* 文字已移除 */}
          </a>

          {/* 桌面導航 */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            marginLeft: 'auto',
          }} className="hidden lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                style={{
                  color: activeSection === item.href.slice(1) ? '#E91E63' : 'rgba(255,255,255,0.8)',
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 500,
                  fontSize: '1.05rem',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  letterSpacing: '0.02em',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#E91E63'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = activeSection === item.href.slice(1) ? '#E91E63' : 'rgba(255,255,255,0.8)'}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA 按鈕 - 桌面版 */}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            style={{
              display: 'block',
              background: '#E91E63',
              color: 'white',
              padding: '0.5rem 1.25rem',
              borderRadius: '4px',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              letterSpacing: '0.03em',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
            className="hidden lg:block"
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background = '#c2185b';
              (e.target as HTMLElement).style.transform = 'translateY(-1px)';
              (e.target as HTMLElement).style.boxShadow = '0 4px 15px rgba(233, 30, 99, 0.4)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background = '#E91E63';
              (e.target as HTMLElement).style.transform = 'translateY(0)';
              (e.target as HTMLElement).style.boxShadow = 'none';
            }}
          >
            立即諮詢
          </a>

          {/* 手機選單按鈕 */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              color: 'white',
              background: 'none',
              border: 'none',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 手機選單 */}
      {mobileOpen && (
        <div style={{
          background: headerBgColorDarker,
          borderTop: '1px solid rgba(233, 30, 99, 0.2)',
          padding: '1rem 0',
          display: 'block',
          animation: 'slideDown 0.3s ease',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
        }}>
          <div className="container">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                style={{
                  display: 'block',
                  padding: '0.875rem 0',
                  color: 'rgba(255,255,255,0.85)',
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#E91E63'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.85)'}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              style={{
                display: 'block',
                marginTop: '1rem',
                background: '#E91E63',
                color: 'white',
                padding: '0.75rem 1rem',
                borderRadius: '4px',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: '0.9rem',
                textDecoration: 'none',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                letterSpacing: '0.03em',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = '#c2185b';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = '#E91E63';
              }}
            >
              立即諮詢
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 640px) {
          .hidden.sm\\:flex {
            display: flex !important;
          }
        }
        @media (min-width: 1024px) {
          .hidden.lg\\:flex {
            display: flex !important;
          }
          .hidden.lg\\:block {
            display: block !important;
          }
          .lg\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
