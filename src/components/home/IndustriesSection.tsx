import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { industryCards } from '../../data';

interface IndustriesSectionProps {
  visible: boolean;
}

function IndustriesSection({ visible }: IndustriesSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  const featured = industryCards[0];
  const rest = industryCards.slice(1, 5);

  return (
    <section
      id="industries"
      ref={sectionRef}
      className={`industries-grid-section ${visible ? 'industries-grid-visible' : ''}`}
    >
      <div className="manyone-grid">
        <div className="industries-grid-header">
          <div>
            <p className="industries-grid-eyebrow">INDUSTRIES</p>
            <h2 className="industries-grid-headline">Industries we serve</h2>
            <p className="industries-grid-sub">Driving innovation across key industries</p>
          </div>
        </div>

        <div className="industries-grid-layout">
          {featured.linkUrl.startsWith('/') ? (
            <Link to={featured.linkUrl} className="industries-grid-card industries-grid-card--featured">
              <img src={featured.image} alt={featured.title} className="industries-grid-card-img" />
              <div className="industries-grid-card-overlay" />
              <div className="industries-grid-card-content">
                <span className="industries-grid-card-cat">{featured.category}</span>
                <h3 className="industries-grid-card-title">{featured.title}</h3>
              </div>
            </Link>
          ) : (
            <a href={featured.linkUrl} className="industries-grid-card industries-grid-card--featured">
              <img src={featured.image} alt={featured.title} className="industries-grid-card-img" />
              <div className="industries-grid-card-overlay" />
              <div className="industries-grid-card-content">
                <span className="industries-grid-card-cat">{featured.category}</span>
                <h3 className="industries-grid-card-title">{featured.title}</h3>
              </div>
            </a>
          )}

          <div className="industries-grid-secondary">
            {rest.map((card, i) =>
              card.linkUrl.startsWith('/') ? (
                <Link key={i} to={card.linkUrl} className="industries-grid-card industries-grid-card--small">
                  <img src={card.image} alt={card.title} className="industries-grid-card-img" />
                  <div className="industries-grid-card-overlay" />
                  <div className="industries-grid-card-content">
                    <span className="industries-grid-card-cat">{card.category}</span>
                    <h3 className="industries-grid-card-title">{card.title}</h3>
                  </div>
                </Link>
              ) : (
                <a key={i} href={card.linkUrl} className="industries-grid-card industries-grid-card--small">
                  <img src={card.image} alt={card.title} className="industries-grid-card-img" />
                  <div className="industries-grid-card-overlay" />
                  <div className="industries-grid-card-content">
                    <span className="industries-grid-card-cat">{card.category}</span>
                    <h3 className="industries-grid-card-title">{card.title}</h3>
                  </div>
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndustriesSection;
