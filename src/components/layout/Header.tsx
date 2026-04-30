import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Menu, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const INDUSTRIES = [
  {
    label: 'Healthcare',
    to: '/industries/healthcare',
    desc: 'Secure, compliant clinical systems and patient platforms.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
        <path d="M16 28S5 22 5 14a6 6 0 0 1 11-3.5A6 6 0 0 1 27 14c0 8-11 14-11 14z" />
        <path d="M13 16h2l1-3 2 6 1-3h2" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    label: 'Events & Ticketing',
    to: '/industries/events-ticketing',
    desc: 'Enterprise software for festivals, concerts, sports events and large conferences.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
        <rect x="4" y="8" width="24" height="18" rx="2" />
        <path d="M4 14h24M10 4v6M22 4v6" />
        <circle cx="11" cy="21" r="1" fill="currentColor" />
        <circle cx="16" cy="21" r="1" fill="currentColor" />
        <circle cx="21" cy="21" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Fintech & Payment Systems',
    to: '/industries/fintech-payment',
    desc: 'Fraud-resistant financial software with full compliance.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
        <rect x="3" y="9" width="26" height="16" rx="2" />
        <path d="M3 15h26M8 21h4M22 21h2" />
      </svg>
    ),
  },
  {
    label: 'Booking & Tourism',
    to: '/industries/booking-tourism',
    desc: 'Reservation platforms and tourism tech for modern hospitality.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
        <path d="M16 3C10.5 3 5 7.5 5 14c0 8 11 15 11 15s11-7 11-15c0-6.5-5.5-11-11-11z" />
        <circle cx="16" cy="14" r="3.5" />
      </svg>
    ),
  },
  {
    label: 'IoT & Smart Devices',
    to: '/industries/iot-smart-devices',
    desc: 'Connected device platforms and real-time sensor intelligence.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
        <rect x="10" y="10" width="12" height="12" rx="1.5" />
        <path d="M16 3v4M16 25v4M3 16h4M25 16h4M7.5 7.5l2.5 2.5M22 7.5l-2.5 2.5M7.5 24.5l2.5-2.5M22 24.5l-2.5-2.5" />
        <circle cx="16" cy="16" r="2" />
      </svg>
    ),
  },
  {
    label: 'Real Estate & PropTech',
    to: '/industries/real-estate-proptech',
    desc: 'Automated valuation and tenant management portals.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
        <path d="M4 14l12-9 12 9v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V14z" />
        <path d="M13 30v-8h6v8" />
      </svg>
    ),
  },
];

function Header() {
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [visible, setVisible]         = useState(true);
  const [lastY, setLastY]             = useState(0);
  const [isMobile, setIsMobile]       = useState(window.innerWidth < 1024);
  const [dropOpen, setDropOpen]       = useState(false);
  const [mobileIndOpen, setMobileInd] = useState(false);
  const triggerRef                    = useRef<HTMLButtonElement>(null);
  const megaRef                       = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => { setMobileOpen(false); setDropOpen(false); }, [location.pathname]);

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (y > 80 && Math.abs(y - lastY) > 10) setVisible(y < lastY);
      else if (y <= 80) setVisible(true);
      setLastY(y);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastY]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setDropOpen(false); setMobileOpen(false); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (
        triggerRef.current && !triggerRef.current.contains(e.target as Node) &&
        megaRef.current   && !megaRef.current.contains(e.target as Node)
      ) {
        setDropOpen(false);
      }
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, []);

  return (
    <header className={`premium-header ${scrolled ? 'scrolled' : ''} ${visible ? 'header-visible' : 'header-hidden'}`}>
      <div className="manyone-grid premium-header-inner">

        <Link className="premium-logo" to="/">
          <img src="/maus-logo-light.svg" className="maus-logo" alt="MAUS" />
        </Link>

        {!isMobile && (
          <>
            <nav className="premium-nav">
              <Link to="/services"  className="nav-link">Services</Link>
              <Link to="/expertise" className="nav-link">Expertise</Link>

              <button
                ref={triggerRef}
                className="industries-trigger"
                onClick={() => setDropOpen(o => !o)}
                aria-expanded={dropOpen}
                aria-haspopup="true"
              >
                Industries
                <ChevronDown
                  size={13}
                  strokeWidth={2.2}
                  style={{
                    marginLeft: 4,
                    transition: 'transform 0.2s ease',
                    transform: dropOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </button>

              <Link to="/cases"   className="nav-link">Cases</Link>
              <a    href="#about" className="nav-link">About Us</a>
            </nav>

            <Link className="premium-cta" to="/discovery">Let's Talk</Link>
          </>
        )}

        {isMobile && (
          <button
            className={`premium-burger ${mobileOpen ? 'menu-open' : ''}`}
            onClick={() => setMobileOpen(o => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen
              ? <><span className="premium-burger-label">CLOSE</span><X size={18} strokeWidth={2} /></>
              : <><span className="premium-burger-label">MENU</span><Menu size={18} strokeWidth={2} /></>
            }
          </button>
        )}
      </div>

      {/* ── Industries mega-dropdown — direct child of <header> so fixed pos works from viewport edge ── */}
      <AnimatePresence>
        {!isMobile && dropOpen && (
          <motion.div
            ref={megaRef}
            className="ind-mega"
            role="menu"
            aria-label="Industries submenu"
            initial={{ opacity: 0, x: '-50%', y: -8 }}
            animate={{ opacity: 1, x: '-50%', y: 0 }}
            exit={{ opacity: 0, x: '-50%', y: -8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            {/* Left: intro text */}
            <div className="ind-mega-left">
              <span className="ind-mega-rule" />
              <p className="ind-mega-eyebrow">INDUSTRIES</p>
              <h3 className="ind-mega-headline">
                Deep sector expertise across the industries{' '}
                <em>we know best</em>.
              </h3>
            </div>

            {/* Right: 3×2 grid */}
            <div className="ind-mega-grid">
              {INDUSTRIES.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  role="menuitem"
                  className="ind-mega-card"
                  onClick={() => setDropOpen(false)}
                >
                  <span className="ind-mega-icon">{item.icon}</span>
                  <span className="ind-mega-card-title">{item.label}</span>
                  <span className="ind-mega-card-desc">{item.desc}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mobile full-screen menu ── */}
      <AnimatePresence>
        {isMobile && mobileOpen && (
          <motion.div
            className="premium-mobile-menu menu-active"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to="/services"  onClick={() => setMobileOpen(false)}>Services</Link>
            <Link to="/expertise" onClick={() => setMobileOpen(false)}>Expertise</Link>

            <button
              className="mobile-ind-trigger"
              onClick={() => setMobileInd(o => !o)}
            >
              Industries
              <ChevronDown
                size={14}
                style={{ transition: 'transform 0.2s', transform: mobileIndOpen ? 'rotate(180deg)' : 'none' }}
              />
            </button>
            <AnimatePresence>
              {mobileIndOpen && (
                <motion.div
                  className="mobile-ind-list"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  style={{ overflow: 'hidden' }}
                >
                  {INDUSTRIES.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      className="mobile-ind-item"
                      onClick={() => { setMobileOpen(false); setMobileInd(false); }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <Link to="/cases"   onClick={() => setMobileOpen(false)}>Cases</Link>
            <a    href="#about" onClick={() => setMobileOpen(false)}>About Us</a>
            <Link className="premium-cta mobile" to="/discovery" onClick={() => setMobileOpen(false)}>
              Let's Talk
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
