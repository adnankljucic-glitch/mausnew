import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Menu } from 'lucide-react';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentScrollY > 80) {
        const scrollDifference = Math.abs(currentScrollY - lastScrollY);

        if (scrollDifference > 10) {
          if (currentScrollY > lastScrollY) {
            setHeaderVisible(false);
          } else {
            setHeaderVisible(true);
          }
        }
      } else {
        setHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
              <Link to="/industries" className="nav-link">Industries</Link>
              <Link to="/cases" className="nav-link">Cases</Link>
              <a href="#about" className="nav-link">About Us</a>
            </nav>

            <Link className="premium-cta" to="/discovery">Let's Talk</Link>
          </>
        )}

        {isMobile && (
          <button
            className={`premium-burger ${mobileMenuOpen ? 'menu-open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
          </button>
        )}
      </div>

      {isMobile && mobileMenuOpen && (
        <div className={`premium-mobile-menu ${mobileMenuOpen ? 'menu-active' : ''}`}>
          <Link to="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link to="/expertise" onClick={() => setMobileMenuOpen(false)}>Expertise</Link>
          <Link to="/industries" onClick={() => setMobileMenuOpen(false)}>Industries</Link>
          <Link to="/cases" onClick={() => setMobileMenuOpen(false)}>Cases</Link>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About Us</a>
          <Link className="premium-cta mobile" to="/discovery" onClick={() => setMobileMenuOpen(false)}>Let's Talk</Link>
        </div>
      )}
    </header>
  );
}

export default Header;
