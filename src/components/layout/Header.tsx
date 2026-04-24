import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled]             = useState(false);
  const [headerVisible, setHeaderVisible]   = useState(true);
  const [lastScrollY, setLastScrollY]       = useState(0);
  const [isMobile, setIsMobile]             = useState(window.innerWidth < 1024);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (y > 80 && Math.abs(y - lastScrollY) > 10) setHeaderVisible(y < lastScrollY);
      else if (y <= 80) setHeaderVisible(true);
      setLastScrollY(y);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMobileMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
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
              <Link to="/services"   className="nav-link">Services</Link>
              <Link to="/expertise"  className="nav-link">Expertise</Link>
              <Link to="/industries" className="nav-link">Industries</Link>
              <Link to="/cases"      className="nav-link">Cases</Link>
              <a    href="#about"    className="nav-link">About Us</a>
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
            {mobileMenuOpen
              ? <><span className="premium-burger-label">CLOSE</span><X size={18} strokeWidth={2} /></>
              : <><span className="premium-burger-label">MENU</span><Menu size={18} strokeWidth={2} /></>
            }
          </button>
        )}
      </div>

      <AnimatePresence>
        {isMobile && mobileMenuOpen && (
          <motion.div
            className="premium-mobile-menu menu-active"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to="/services"   onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link to="/expertise"  onClick={() => setMobileMenuOpen(false)}>Expertise</Link>
            <Link to="/industries" onClick={() => setMobileMenuOpen(false)}>Industries</Link>
            <Link to="/cases"      onClick={() => setMobileMenuOpen(false)}>Cases</Link>
            <a    href="#about"    onClick={() => setMobileMenuOpen(false)}>About Us</a>
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
