import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Menu, Heart, Calendar, ShoppingCart, Zap, Building2, Droplets } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface IndustryItem {
  label: string;
  to: string;
  icon: React.ReactNode;
  desc: string;
}

const industries: IndustryItem[] = [
  { label: 'Healthcare', to: '/industries/healthcare', icon: <Heart size={18} strokeWidth={1.5} />, desc: 'Secure, compliant clinical systems and patient platforms.' },
  { label: 'Booking & Ticketing', to: '/#industries', icon: <Calendar size={18} strokeWidth={1.5} />, desc: 'High-concurrency reservation platforms built to scale.' },
  { label: 'Fintech & Payments', to: '/#industries', icon: <ShoppingCart size={18} strokeWidth={1.5} />, desc: 'Fraud-resistant financial software with full compliance.' },
  { label: 'Energy & Utilities', to: '/#industries', icon: <Droplets size={18} strokeWidth={1.5} />, desc: 'Smart grid and resource management systems.' },
  { label: 'AI & Manufacturing', to: '/#industries', icon: <Zap size={18} strokeWidth={1.5} />, desc: 'Predictive IoT systems and smart factory automation.' },
  { label: 'Real Estate & PropTech', to: '/#industries', icon: <Building2 size={18} strokeWidth={1.5} />, desc: 'Automated valuation and tenant management portals.' },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: -6, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.18, ease: 'easeOut' } },
  exit: { opacity: 0, y: -4, scale: 0.98, transition: { duration: 0.13, ease: 'easeIn' } },
};

const mobileExpandVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: 'auto', opacity: 1, transition: { duration: 0.25, ease: 'easeOut' } },
  exit: { height: 0, opacity: 0, transition: { duration: 0.18, ease: 'easeIn' } },
};

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close dropdown when navigating
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
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 40);
      if (currentScrollY > 80) {
        if (Math.abs(currentScrollY - lastScrollY) > 10) {
          setHeaderVisible(currentScrollY < lastScrollY);
        }
      } else {
        setHeaderVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setIndustriesOpen(false);
    }
  }, []);

  useEffect(() => {
    if (industriesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [industriesOpen, handleClickOutside]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIndustriesOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className={`premium-header ${scrolled ? 'scrolled' : ''} ${headerVisible ? 'header-visible' : 'header-hidden'}`}>
      <div className="manyone-grid premium-header-inner">
        <Link className="premium-logo" to="/">
          <img src="/maus-logo-light.svg" className="maus-logo" alt="MAUS" />
        </Link>

        {!isMobile && (
          <>
            <nav className="premium-nav">
              <Link to="/services" className="nav-link">Services</Link>
              <Link to="/expertise" className="nav-link">Expertise</Link>

              {/* Industries dropdown */}
              <div className="nav-industries-wrapper" ref={dropdownRef}>
                <button
                  className={`nav-link nav-industries-trigger ${industriesOpen ? 'active' : ''}`}
                  onClick={() => setIndustriesOpen(o => !o)}
                  aria-expanded={industriesOpen}
                  aria-haspopup="true"
                >
                  Industries
                </button>

                <AnimatePresence>
                  {industriesOpen && (
                    <motion.div
                      className="nav-dropdown"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      role="menu"
                    >
                      <div className="nav-dropdown-inner">
                        {/* Left editorial panel */}
                        <div className="nav-dropdown-panel">
                          <span className="nav-dropdown-eyebrow">Industries</span>
                          <p className="nav-dropdown-headline">
                            Deep sector expertise across the industries{' '}
                            <em>we know best</em>.
                          </p>
                        </div>

                        {/* Right grid */}
                        <div className="nav-dropdown-grid">
                          {industries.map((item) => (
                            <Link
                              key={item.label}
                              to={item.to}
                              className="nav-dropdown-item"
                              role="menuitem"
                              onClick={() => setIndustriesOpen(false)}
                            >
                              <span className="nav-dropdown-icon">{item.icon}</span>
                              <span className="nav-dropdown-text">
                                <span className="nav-dropdown-label">{item.label}</span>
                                <span className="nav-dropdown-desc">{item.desc}</span>
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/cases" className="nav-link">Cases</Link>
              <a href="#about" className="nav-link">About Us</a>
            </nav>

            <Link className="premium-cta" to="/discovery">Let's Talk</Link>
          </>
        )}

        {isMobile && (
          <button
            className={`premium-burger ${mobileMenuOpen ? 'menu-open' : ''}`}
            onClick={() => setMobileMenuOpen(o => !o)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <>
                <span className="premium-burger-label">CLOSE</span>
                <X size={18} strokeWidth={2} />
              </>
            ) : (
              <>
                <span className="premium-burger-label">MENU</span>
                <Menu size={18} strokeWidth={2} />
              </>
            )}
          </button>
        )}
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobile && mobileMenuOpen && (
          <motion.div
            className="premium-mobile-menu menu-active"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link to="/expertise" onClick={() => setMobileMenuOpen(false)}>Expertise</Link>

            {/* Mobile industries expandable */}
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
                        <span className="mobile-industry-icon">{item.icon}</span>
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/cases" onClick={() => setMobileMenuOpen(false)}>Cases</Link>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About Us</a>
            <Link className="premium-cta mobile" to="/discovery" onClick={() => setMobileMenuOpen(false)}>Let's Talk</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
