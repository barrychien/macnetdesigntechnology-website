/**
 * Header 元件 - 悅慶資訊
 * 設計: 深藍色 (#1C2C45) 背景, 固定頂部, 滾動時加深背景
 * 左側: LOGO + 悅慶資訊, 右側: 導航連結
 */
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: '關於悅慶', href: '#about' },
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

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? 'rgba(10, 22, 40, 0.97)' : '#1C2C45',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
        transition: 'all 0.3s ease',
        borderBottom: scrolled ? '1px solid rgba(233, 30, 99, 0.2)' : '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div className="container" style={{ maxWidth: '1280px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
          {/* LOGO */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}
          >
            {/* LOGO 圖示 */}
            <div style={{
              width: '44px',
              height: '44px',
              background: 'linear-gradient(135deg, #E91E63, #c2185b)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(233, 30, 99, 0.4)',
              flexShrink: 0,
            }}>
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                <path d="M4 13L13 4L22 13L13 22L4 13Z" stroke="white" strokeWidth="2" fill="rgba(255,255,255,0.2)" />
                <path d="M13 4L22 13" stroke="white" strokeWidth="1.5" opacity="0.6" />
                <circle cx="13" cy="13" r="3" fill="white" />
              </svg>
            </div>
            <div>
              <div style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: '1.2rem',
                color: 'white',
                lineHeight: 1.2,
                letterSpacing: '0.02em',
              }}>
                悅慶資訊
              </div>
              <div style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: '0.65rem',
                color: 'rgba(255,255,255,0.5)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}>
                Macnet Technology
              </div>
            </div>
          </a>

          {/* 桌面導航 */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              style={{
                background: '#E91E63',
                color: 'white',
                padding: '0.5rem 1.25rem',
                borderRadius: '4px',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: '0.85rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                letterSpacing: '0.03em',
              }}
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
          </nav>

          {/* 手機選單按鈕 */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: 'white', background: 'none', border: 'none', padding: '8px' }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 手機選單 */}
      {mobileOpen && (
        <div style={{
          background: 'rgba(10, 22, 40, 0.98)',
          borderTop: '1px solid rgba(233, 30, 99, 0.2)',
          padding: '1rem 0',
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
          </div>
        </div>
      )}
    </header>
  );
}
