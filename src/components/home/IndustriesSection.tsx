import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { industryCards } from '../../data';

interface IndustriesSectionProps {
  visible: boolean;
}

function CardLink({ card, className }: { card: typeof industryCards[0]; className: string }) {
  const inner = (
    <>
      {card.videoUrl ? (
        <video
          src={card.videoUrl}
          poster={card.image}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="industries-grid-card-img"
        />
      ) : (
        <img src={card.image} alt={card.title} className="industries-grid-card-img" />
      )}
      <div className="industries-grid-card-overlay" />
      <div className="industries-grid-card-content">
        <span className="industries-grid-card-cat">{card.category}</span>
        <h3 className="industries-grid-card-title">{card.title}</h3>
      </div>
    </>
  );
  if (card.linkUrl.startsWith('/')) {
    return <Link to={card.linkUrl} className={className}>{inner}</Link>;
  }
  return <a href={card.linkUrl} className={className}>{inner}</a>;
}

function IndustriesSection({ visible }: IndustriesSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  const topRow = [industryCards[1], industryCards[2]];
  const bottomRow = [industryCards[0], industryCards[3], industryCards[4], industryCards[6]];

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
          <div className="industries-grid-top-row">
            {topRow.map((card, i) => (
              <CardLink key={i} card={card} className="industries-grid-card industries-grid-card--tall" />
            ))}
          </div>

          <div className="industries-grid-bottom-row industries-grid-bottom-row--4">
            {bottomRow.map((card, i) => (
              <CardLink key={i} card={card} className="industries-grid-card industries-grid-card--short" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndustriesSection;
