/**
 * 聯絡我們區塊 - 悅慶資訊
 * 設計: 深藍色背景, 左側資訊+地圖, 右側聯絡表單
 * 表單發送到 barry.chien@macnetdesign.com (透過 Formspree)
 * 使用 Google Maps 嵌入
 */
import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 驗證必填欄位
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('請填寫所有必填欄位');
      return;
    }

    setStatus('sending');

    try {
      // 發送到 Formspree
      const response = await fetch('https://formspree.io/f/mdayeagn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || '來自悅慶資訊網站的詢問',
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        toast.success('訊息已成功發送！我們將盡快回覆您。');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('發送失敗');
      }
    } catch (error) {
      console.error('表單提交錯誤:', error);
      setStatus('error');
      toast.error('發送失敗，請直接聯繫 barry.chien@macnetdesign.com');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        padding: '100px 0',
        background: 'linear-gradient(135deg, #0A1628 0%, #1C2C45 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 幾何裝飾 */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-100px',
        width: '400px',
        height: '400px',
        border: '1px solid rgba(233, 30, 99, 0.08)',
        borderRadius: '50%',
        animation: 'geo-rotate 30s linear infinite',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '5%',
        left: '-80px',
        width: '300px',
        height: '300px',
        border: '1px solid rgba(100, 160, 255, 0.06)',
        borderRadius: '50%',
        animation: 'geo-rotate-reverse 20s linear infinite',
      }} />

      {/* 斜切頂部 */}
      <div style={{
        position: 'absolute',
        top: -2,
        left: 0,
        right: 0,
        height: '80px',
        background: '#F8FAFC',
        clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* 標題 */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(233, 30, 99, 0.15)',
            border: '1px solid rgba(233, 30, 99, 0.3)',
            borderRadius: '100px',
            padding: '0.3rem 1rem',
            marginBottom: '1rem',
          }}>
            <span style={{ color: '#E91E63', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.1em' }}>
              CONTACT US
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            color: 'white',
            marginBottom: '1rem',
          }}>
            聯絡我們
          </h2>
          <div style={{ width: '60px', height: '4px', background: '#E91E63', margin: '0 auto 1.5rem' }} />
          <p style={{
            fontFamily: "'Open Sans', sans-serif",
            color: 'rgba(255,255,255,0.65)',
            fontSize: '1rem',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: 1.8,
          }}>
            有任何問題或合作需求，歡迎隨時與我們聯繫，我們將盡快回覆您
          </p>
        </div>

        {/* 主要內容 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'start',
        }} className="contact-grid">
          {/* 左側資訊 */}
          <div className="reveal-left">
            {/* 聯絡資訊 */}
            <div style={{ marginBottom: '2.5rem' }}>
              {[
                {
                  icon: <MapPin size={20} color="#E91E63" />,
                  label: '地址',
                  value: '台北市松山區南京東路五段16號11樓之三',
                },
                {
                  icon: <Phone size={20} color="#E91E63" />,
                  label: '電話',
                  value: '(02)2718-1248',
                },
                {
                  icon: <Mail size={20} color="#E91E63" />,
                  label: '電子郵件',
                  value: 'barry.chien@macnetdesign.com',
                },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  gap: '1rem',
                  padding: '1.25rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    background: 'rgba(233, 30, 99, 0.1)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    border: '1px solid rgba(233, 30, 99, 0.2)',
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                      fontSize: '0.8rem',
                      color: '#E91E63',
                      letterSpacing: '0.05em',
                      marginBottom: '0.25rem',
                    }}>
                      {item.label}
                    </div>
                    <div style={{
                      fontFamily: "'Open Sans', sans-serif",
                      color: 'rgba(255,255,255,0.8)',
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                      whiteSpace: 'pre-line',
                    }}>
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Map */}
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.6789!2d121.5456!3d25.0505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a8f5c5c5c5c5%3A0x0!2z5Y-w5YyX5biC5Lit5bGx5Y2A5rCR5peP5YyX6Lev17k1aDAx!5e0!3m2!1szh-TW!2stw!4v1713000000001!5m2!1szh-TW!2stw"
                width="100%"
                height="280"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="悅慶資訊地址"
              />
            </div>
          </div>

          {/* 右側表單 */}
          <div className="reveal-right">
            <div style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '16px',
              padding: '2.5rem',
              backdropFilter: 'blur(10px)',
            }}>
              <h3 style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: '1.3rem',
                color: 'white',
                marginBottom: '0.5rem',
              }}>
                傳送訊息
              </h3>
              <p style={{
                fontFamily: "'Open Sans', sans-serif",
                color: 'rgba(255,255,255,0.5)',
                fontSize: '0.875rem',
                marginBottom: '2rem',
              }}>
                填寫以下表單，我們將盡快與您聯繫
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'rgba(255,255,255,0.7)',
                      marginBottom: '0.5rem',
                      letterSpacing: '0.05em',
                    }}>
                      姓名 *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="您的姓名"
                      required
                      className="contact-input"
                      style={{ borderRadius: '6px' }}
                    />
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'rgba(255,255,255,0.7)',
                      marginBottom: '0.5rem',
                      letterSpacing: '0.05em',
                    }}>
                      電子郵件 *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="contact-input"
                      style={{ borderRadius: '6px' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.7)',
                    marginBottom: '0.5rem',
                    letterSpacing: '0.05em',
                  }}>
                    主旨
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="詢問主旨"
                    className="contact-input"
                    style={{ borderRadius: '6px' }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.7)',
                    marginBottom: '0.5rem',
                    letterSpacing: '0.05em',
                  }}>
                    訊息內容 *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="請描述您的需求或問題..."
                    required
                    rows={5}
                    className="contact-input"
                    style={{ borderRadius: '6px', resize: 'vertical', minHeight: '120px' }}
                  />
                </div>

                {/* 狀態訊息 */}
                {status === 'success' && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.875rem 1rem',
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    borderRadius: '6px',
                    color: '#10B981',
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: '0.875rem',
                  }}>
                    <CheckCircle size={16} />
                    訊息已成功發送！我們將盡快回覆您。
                  </div>
                )}

                {status === 'error' && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.875rem 1rem',
                    background: 'rgba(233, 30, 99, 0.1)',
                    border: '1px solid rgba(233, 30, 99, 0.3)',
                    borderRadius: '6px',
                    color: '#E91E63',
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: '0.875rem',
                  }}>
                    <AlertCircle size={16} />
                    發送失敗，請直接聯繫 barry.chien@macnetdesign.com
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    background: status === 'sending' ? '#c2185b' : '#E91E63',
                    color: 'white',
                    padding: '1rem 2rem',
                    borderRadius: '6px',
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    border: 'none',
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    letterSpacing: '0.05em',
                    opacity: status === 'sending' ? 0.8 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (status !== 'sending') {
                      (e.currentTarget as HTMLElement).style.background = '#c2185b';
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 25px rgba(233, 30, 99, 0.4)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = '#E91E63';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  {status === 'sending' ? (
                    <>
                      <div style={{
                        width: '16px',
                        height: '16px',
                        border: '2px solid rgba(255,255,255,0.3)',
                        borderTopColor: 'white',
                        borderRadius: '50%',
                        animation: 'spin 0.8s linear infinite',
                      }} />
                      發送中...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      發送訊息
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* 響應式調整 */}
        <style>{`
          @media (max-width: 768px) {
            .contact-grid {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
