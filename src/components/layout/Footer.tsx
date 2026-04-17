import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-divider-line"></div>
      <div className="manyone-grid footer-container">
        <div className="footer-logo">
          <img src="/maus-logo-light.svg" alt="MAUS" />
        </div>

        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-contact-group">
              <p className="footer-label">New project?</p>
              <a href="/discovery" className="footer-link">Get in touch</a>
            </div>
            <div className="footer-contact-group">
              <p className="footer-label">Need inspiration?</p>
              <a href="/cases" className="footer-link">Clients results</a>
            </div>
            <div className="footer-contact-group">
              <p className="footer-label">Our locations</p>
              <a href="#locations" className="footer-link">Aarhus (Denmark) - Sarajevo (Bosnia and Herzegovina)</a>
            </div>
          </div>

          <div className="footer-right">
            <div className="footer-accordion">
              <div className="footer-accordion-item">
                <a href="#about" className="footer-accordion-trigger footer-no-submenu">
                  <span>About MAUS</span>
                </a>
              </div>

              <details className="footer-accordion-item">
                <summary className="footer-accordion-trigger">
                  <span>Services</span>
                  <Plus className="footer-accordion-icon" size={20} strokeWidth={1.5} />
                </summary>
                <div className="footer-accordion-content">
                  <a href="#ai-automation" className="footer-tag">AI & Automation</a>
                  <a href="#strategic-advisory" className="footer-tag">Strategic Advisory</a>
                  <a href="#digital-experience" className="footer-tag">Digital Experience</a>
                  <a href="/services/scale-and-performance" className="footer-tag">Optimization & Scale</a>
                </div>
              </details>

              <div className="footer-accordion-item">
                <Link to="/expertise" className="footer-accordion-trigger footer-no-submenu">
                  <span>Expertise</span>
                </Link>
              </div>

              <details className="footer-accordion-item">
                <summary className="footer-accordion-trigger">
                  <span>Industries</span>
                  <Plus className="footer-accordion-icon" size={20} strokeWidth={1.5} />
                </summary>
                <div className="footer-accordion-content">
                  <a href="#industries" className="footer-tag">Fintech & Payment Systems</a>
                  <a href="#industries" className="footer-tag">Healthcare</a>
                  <a href="#industries" className="footer-tag">Booking and ticketing</a>
                  <a href="#industries" className="footer-tag">Sustainability and water cycle</a>
                  <a href="#industries" className="footer-tag">Manufacturing</a>
                  <a href="#industries" className="footer-tag">Smart Home</a>
                </div>
              </details>

              <div className="footer-accordion-item">
                <Link to="/cases" className="footer-accordion-trigger footer-no-submenu">
                  <span>Cases</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <a href="https://linkedin.com/company/maus" target="_blank" rel="noopener noreferrer" className="footer-bottom-link">LinkedIn</a>
          <a href="#privacy" className="footer-bottom-link">Privacy policy</a>
          <button className="footer-bottom-link">Cookie preferences</button>
          <span className="footer-copyright">© 2025</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
