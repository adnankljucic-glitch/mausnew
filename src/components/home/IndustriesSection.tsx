import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { industryCards } from '../../data';

interface IndustriesSectionProps {
  visible: boolean;
}

function IndustriesSection({ visible }: IndustriesSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [revealedCards, setRevealedCards] = useState<Set<number>>(new Set());
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const scrollWork = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const firstCard = container.firstElementChild;
    if (!firstCard) return;

    const cardWidth = firstCard.getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(container).gap);
    const scrollAmount = cardWidth + gap;

    const newScrollLeft = direction === 'left'
      ? container.scrollLeft - scrollAmount
      : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
  };

  const updateScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 1
    );

    const maxScroll = container.scrollWidth - container.clientWidth;
    const progress = maxScroll > 0 ? (container.scrollLeft / maxScroll) * 100 : 0;
    setScrollProgress(progress);
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
        scrollWork('right');
      } else {
        scrollWork('left');
      }
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      updateScrollButtons();
    };

    const handleWheel = (e: WheelEvent) => {
      if (e.shiftKey) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener('scroll', handleScroll);
    container.addEventListener('wheel', handleWheel, { passive: false });
    updateScrollButtons();

    return () => {
      container.removeEventListener('scroll', handleScroll);
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1 && !revealedCards.has(index)) {
              setRevealedCards((prev) => new Set(prev).add(index));
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, [revealedCards]);

  return (
    <section id="industries" className={`work-section industries-light ${visible ? 'work-visible' : ''}`} style={{ background: '#FFFFFF' }}>
      <div className="manyone-grid">
        <p className="work-eyebrow" style={{ color: '#020817' }}>INDUSTRIES</p>
        <h2 className="work-headline" style={{ color: '#020817' }}>Industries we serve</h2>
        <p className="work-subheadline" style={{ color: '#4a5568' }}>Driving innovation across key industries</p>

        <div className="work-scroll-wrapper">
          <div
            className="work-cards-wrapper"
            ref={scrollContainerRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {industryCards.map((card, index) => {
              const isInternal = card.linkUrl.startsWith('/');
              const cardContent = (
                <>
                  <img src={card.image} alt={card.title} className="work-card-bg-image" />
                  <div className="work-card-overlay"></div>
                  <div className="work-card-content">
                    <span className="work-card-category">{card.category}</span>
                    <h4 className="work-card-title">{card.title}</h4>
                    <p className="work-card-description">{card.description}</p>
                  </div>
                </>
              );

              return isInternal ? (
                <Link
                  key={index}
                  to={card.linkUrl}
                  className={`work-card ${revealedCards.has(index) ? 'work-card-revealed' : ''}`}
                  ref={(el) => (cardRefs.current[index] = el)}
                  style={{
                    transitionDelay: revealedCards.has(index) ? `${index * 90}ms` : '0ms'
                  }}
                >
                  {cardContent}
                </Link>
              ) : (
                <a
                  key={index}
                  href={card.linkUrl}
                  className={`work-card ${revealedCards.has(index) ? 'work-card-revealed' : ''}`}
                  ref={(el) => (cardRefs.current[index] = el)}
                  style={{
                    transitionDelay: revealedCards.has(index) ? `${index * 90}ms` : '0ms'
                  }}
                >
                  {cardContent}
                </a>
              );
            })}
          </div>

          <div className="work-controls">
            <button
              className="work-scroll-left"
              onClick={() => scrollWork('left')}
              aria-label="Scroll left"
              disabled={!canScrollLeft}
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>

            <div className="work-progress-bar">
              <div className="work-progress-track"></div>
              <div
                className="work-progress-fill"
                style={{ width: `${scrollProgress}%` }}
              ></div>
            </div>

            <button
              className="work-scroll-right"
              onClick={() => scrollWork('right')}
              aria-label="Scroll right"
              disabled={!canScrollRight}
            >
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndustriesSection;
