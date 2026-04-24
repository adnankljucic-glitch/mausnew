import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// ── Types ──────────────────────────────────────────────────────────────────

interface IndustryItem {
  label: string;
  to: string;
  icon: React.ReactNode;
  desc: string;
}

// ── Arrow icon ─────────────────────────────────────────────────────────────

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      style={{ width: 13, height: 13 }}
    >
      <path d="M3 11L11 3M6 3h5v5" />
    </svg>
  );
}

// ── Industry data ──────────────────────────────────────────────────────────

const industries: IndustryItem[] = [
  {
    label: 'Healthcare',
    to: '/industries/healthcare',
    desc: 'Secure, compliant clinical systems and patient platforms.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
        <path d="M16 28s-11-6-11-14a6 6 0 0 1 11-3.5A6 6 0 0 1 27 14c0 8-11 14-11 14z" />
        <path d="M13 16h2l1-3 2 6 1-3h2" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    label: 'Booking & Ticketing',
    to: '/#industries',
    desc: 'High-concurrency reservation platforms built to scale.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
        <rect x="4" y="8" width="24" height="18" rx="2" />
        <path d="M4 14h24M10 4v6M22 4v6" />
        <circle cx="11" cy="19" r="1" fill="currentColor" />
        <circle cx="16" cy="19" r="1" fill="currentColor" />
        <circle cx="21" cy="19" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Fintech & Payments',
    to: '/#industries',
    desc: 'Fraud-resistant financial software with full compliance.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
        <rect x="3" y="9" width="26" height="16" rx="2" />
        <path d="M3 15h26" />
        <path d="M8 20h4M20 20h4" />
        <circle cx="16" cy="20" r="2" />
      </svg>
    ),
  },
  {
    label: 'Energy & Utilities',
    to: '/#industries',
    desc: 'Smart grid and resource management systems.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
        <path d="M18 3L6 18h8l-2 11 12-15h-8l2-11z" />
      </svg>
    ),
  },
  {
    label: 'AI & Manufacturing',
    to: '/#industries',
    desc: 'Predictive IoT systems and smart factory automation.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
        <rect x="10" y="10" width="12" height="12" rx="1.5" />
        <path d="M16 3v4M16 25v4M3 16h4M25 16h4M7 7l3 3M22 7l-3 3M7 25l3-3M22 25l-3-3" />
        <circle cx="16" cy="16" r="2" />
      </svg>
    ),
  },
  {
    label: 'Real Estate & PropTech',
    to: '/#industries',
    desc: 'Automated valuation and tenant management portals.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
        <path d="M4 14l12-9 12 9v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V14z" />
        <path d="M13 30v-8h6v8" />
      </svg>
    ),
  },
];

// ── Framer Motion variants ─────────────────────────────────────────────────

const megaVariants = {
  hidden:  { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0,   transition: { duration: 0.22, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -8,  transition: { duration: 0.15, ease: 'easeIn' } },
};

const mobileExpandVariants = {
  hidden:  { height: 0, opacity: 0 },
  visible: { height: 'auto', opacity: 1, transition: { duration: 0.25, ease: 'easeOut' } },
  exit:    { height: 0, opacity: 0, transition: { duration: 0.18, ease: 'easeIn' } },
};

// ── MegaCard ──────────────────────────────────────────────────────────────

function MegaCard({ item, onClick, isLast3 }: { item: IndustryItem; onClick: () => void; isLast3: boolean }) {
  return (
    <Link
      to={item.to}
      onClick={onClick}
      role="menuitem"
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        padding: '32px 28px 28px',
        textDecoration: 'none',
        transition: 'background 0.15s ease',
        cursor: 'pointer',
        borderRight: '1px solid rgba(0,0,0,0.08)',
        borderBottom: isLast3 ? 'none' : '1px solid rgba(0,0,0,0.08)',
        overflow: 'visible',
      }}
      className="mega-card-hover group"
    >
      {/* Arrow — top right */}
      <span
        className="group-hover:opacity-100 group-hover:text-[#002395]"
        style={{
          position: 'absolute',
          top: 16,
          right: 16,
          opacity: 0,
          color: 'rgba(0,0,0,0.2)',
          transition: 'opacity 0.15s ease, color 0.15s ease',
          lineHeight: 0,
        }}
      >
        <ArrowIcon />
      </span>

      {/* Icon */}
      <span
        className="group-hover:text-[#002395]"
        style={{
          width: 28,
          height: 28,
          flexShrink: 0,
          color: '#0d1b3e',
          transition: 'color 0.15s ease',
          display: 'block',
        }}
      >
        {item.icon}
      </span>

      {/* Title */}
      <span
        className="group-hover:text-[#002395]"
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontSize: 14,
          fontWeight: 700,
          color: '#0d1b3e',
          lineHeight: 1.25,
          letterSpacing: '0.01em',
          transition: 'color 0.15s ease',
          whiteSpace: 'normal',
          wordBreak: 'normal',
        }}
      >
        {item.label}
      </span>

      {/* Description */}
      <span
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontSize: 12.5,
          fontWeight: 400,
          color: 'rgba(0,0,0,0.48)',
          lineHeight: 1.6,
          whiteSpace: 'normal',
          wordBreak: 'normal',
          overflow: 'visible',
        }}
      >
        {item.desc}
      </span>
    </Link>
  );
}

// ── Header ────────────────────────────────────────────────────────────────

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen]             = useState(false);
  const [scrolled, setScrolled]                         = useState(false);
  const [headerVisible, setHeaderVisible]               = useState(true);
  const [lastScrollY, setLastScrollY]                   = useState(0);
  const [isMobile, setIsMobile]                         = useState(window.innerWidth < 1024);
  const [industriesOpen, setIndustriesOpen]             = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location   = useLocation();

  const openMenu      = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setIndustriesOpen(true); };
  const scheduleClose = () => { closeTimer.current = setTimeout(() => setIndustriesOpen(false), 120); };

  useEffect(() => {
    setIndustriesOpen(false);
    setMobileMenuOpen(false);
    setMobileIndustriesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (y > 80 && Math.abs(y - lastScrollY) > 10) setHeaderVisible(y < lastScrollY);
      else if (y <= 80) setHeaderVisible(true);
      setLastScrollY(y);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') { setIndustriesOpen(false); setMobileMenuOpen(false); }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Split industries into two rows of 3 for border handling
  const row1 = industries.slice(0, 3);
  const row2 = industries.slice(3, 6);

  return (
    <header className={`premium-header ${scrolled ? 'scrolled' : ''} ${headerVisible ? 'header-visible' : 'header-hidden'}`}>
      <div className="manyone-grid premium-header-inner">

        {/* Logo */}
        <Link className="premium-logo" to="/">
          <img src="/maus-logo-light.svg" className="maus-logo" alt="MAUS" />
        </Link>

        {/* Desktop nav */}
        {!isMobile && (
          <>
            <nav className="premium-nav">
              <Link to="/services"  className="nav-link">Services</Link>
              <Link to="/expertise" className="nav-link">Expertise</Link>

              {/* Industries trigger */}
              <div
                style={{ position: 'relative' }}
                onMouseEnter={openMenu}
                onMouseLeave={scheduleClose}
              >
                <button
                  className={`nav-link nav-industries-trigger ${industriesOpen ? 'active' : ''}`}
                  aria-expanded={industriesOpen}
                  aria-haspopup="true"
                >
                  Industries
                </button>

                {/* ── MEGA PANEL ── */}
                <AnimatePresence>
                  {industriesOpen && (
                    <motion.div
                      variants={megaVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      role="menu"
                      aria-label="Industries menu"
                      onMouseEnter={openMenu}
                      onMouseLeave={scheduleClose}
                      style={{
                        position: 'fixed',
                        top: 72,
                        left: 0,
                        right: 0,
                        width: '100%',
                        zIndex: 200,
                        background: '#f5f5f3',
                        borderTop: '1px solid rgba(0,0,0,0.08)',
                        borderBottom: '1px solid rgba(0,0,0,0.08)',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
                        overflow: 'visible',
                      }}
                    >
                      {/* Inner layout: aside + 3-col grid */}
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '260px 1fr',
                          maxWidth: 1280,
                          margin: '0 auto',
                          padding: '0 48px',
                        }}
                      >
                        {/* Left aside */}
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            gap: 18,
                            padding: '40px 36px 40px 0',
                            borderRight: '1px solid rgba(0,0,0,0.08)',
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "'Barlow', sans-serif",
                              fontSize: 10,
                              fontWeight: 600,
                              letterSpacing: '0.2em',
                              textTransform: 'uppercase',
                              color: 'rgba(0,0,0,0.38)',
                            }}
                          >
                            Industries
                          </span>
                          <p
                            style={{
                              fontFamily: "'Barlow', sans-serif",
                              fontSize: 24,
                              fontWeight: 700,
                              color: '#0d1b3e',
                              lineHeight: 1.3,
                              margin: 0,
                            }}
                          >
                            Deep sector expertise across the industries{' '}
                            <em
                              style={{
                                fontStyle: 'italic',
                                fontWeight: 400,
                                color: '#6b7a99',
                              }}
                            >
                              we know best
                            </em>
                            .
                          </p>
                        </div>

                        {/* Right: 2 rows × 3 cols */}
                        <div>
                          {/* Row 1 */}
                          <div
                            style={{
                              display: 'grid',
                              gridTemplateColumns: 'repeat(3, 1fr)',
                            }}
                          >
                            {row1.map((item, i) => (
                              <MegaCard
                                key={item.label}
                                item={item}
                                isLast3={false}
                                onClick={() => setIndustriesOpen(false)}
                              />
                            ))}
                          </div>

                          {/* Row 2 — no bottom border on cards */}
                          <div
                            style={{
                              display: 'grid',
                              gridTemplateColumns: 'repeat(3, 1fr)',
                            }}
                          >
                            {row2.map((item, i) => (
                              <MegaCard
                                key={item.label}
                                item={item}
                                isLast3={true}
                                onClick={() => setIndustriesOpen(false)}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/cases"  className="nav-link">Cases</Link>
              <a href="#about"   className="nav-link">About Us</a>
            </nav>

            <Link className="premium-cta" to="/discovery">Let's Talk</Link>
          </>
        )}

        {/* Mobile burger */}
        {isMobile && (
          <button
            className={`premium-burger ${mobileMenuOpen ? 'menu-open' : ''}`}
            onClick={() => setMobileMenuOpen(o => !o)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <><span className="premium-burger-label">CLOSE</span><X size={18} strokeWidth={2} /></>
            ) : (
              <><span className="premium-burger-label">MENU</span><Menu size={18} strokeWidth={2} /></>
            )}
          </button>
        )}
      </div>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {isMobile && mobileMenuOpen && (
          <motion.div
            className="premium-mobile-menu menu-active"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to="/services"  onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link to="/expertise" onClick={() => setMobileMenuOpen(false)}>Expertise</Link>

            {/* Industries accordion */}
            <div className="mobile-industries-section">
              <button
                className="mobile-industries-trigger"
                onClick={() => setMobileIndustriesOpen(o => !o)}
                aria-expanded={mobileIndustriesOpen}
              >
                Industries
              </button>

              <AnimatePresence>
                {mobileIndustriesOpen && (
                  <motion.div
                    className="mobile-industries-list"
                    variants={mobileExpandVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {industries.map((item) => (
                      <Link
                        key={item.label}
                        to={item.to}
                        className="mobile-industry-item"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span
                          style={{ width: 18, height: 18, display: 'block', color: '#0d1b3e', flexShrink: 0 }}
                        >
                          {item.icon}
                        </span>
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/cases" onClick={() => setMobileMenuOpen(false)}>Cases</Link>
            <a href="#about"  onClick={() => setMobileMenuOpen(false)}>About Us</a>
            <Link className="premium-cta mobile" to="/discovery" onClick={() => setMobileMenuOpen(false)}>
              Let's Talk
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
