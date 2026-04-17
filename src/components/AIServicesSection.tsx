import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { serviceCards } from '../data';

function AIServicesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const scrollServices = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.85;
    const targetScroll = direction === 'left'
      ? container.scrollLeft - scrollAmount
      : container.scrollLeft + scrollAmount;

    container.scrollTo({ left: targetScroll, behavior: 'smooth' });
  };

  const updateScrollState = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
    setScrollProgress(Math.min(progress, 100));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        scrollServices('right');
      } else {
        scrollServices('left');
      }
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    updateScrollState();
    container.addEventListener('scroll', updateScrollState);

    return () => container.removeEventListener('scroll', updateScrollState);
  }, []);

  return (
    <section className="solution-section solution-visible" style={{ backgroundColor: '#000020' }}>
      <div className="manyone-grid">
        <h2 className="solution-headline">Explore our services</h2>
        <p className="solution-subheadline">At MAUS, we don't just write code; we solve business complexity. Through Specs Driven Development (SDD) and a deep-dive Discovery phase, we transform legacy constraints into scalable, high-performance digital assets for ambitious enterprises.</p>

        <div
          className="service-cards-grid"
          ref={scrollContainerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {serviceCards.map((card, index) => (
            <Link key={index} to={card.linkUrl} className="service-card">
              <div className="service-card-content">
                <h3 className="service-card-title">{card.title}</h3>
                <p className="service-card-description">{card.description}</p>
                <div className="service-card-services">
                  {card.services.map((service, idx) => (
                    <span key={idx} className="service-item-text">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="service-controls">
          <button
            className="service-scroll-left"
            onClick={() => scrollServices('left')}
            aria-label="Scroll left"
            disabled={!canScrollLeft}
          >
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>

          <div className="service-progress-bar">
            <div
              className="service-progress-fill"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>

          <button
            className="service-scroll-right"
            onClick={() => scrollServices('right')}
            aria-label="Scroll right"
            disabled={!canScrollRight}
          >
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default AIServicesSection;
