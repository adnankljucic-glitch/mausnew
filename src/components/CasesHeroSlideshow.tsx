import { useState, useEffect, useRef } from 'react';

interface Slide {
  id: number;
  backgroundImage: string;
  eyebrow?: string;
  headline: string;
  supportingText: string;
  ctaText: string;
  ctaUrl: string;
}

const slides: Slide[] = [
  {
    id: 1,
    backgroundImage: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920',
    eyebrow: 'Healthcare',
    headline: 'Intelligence that scales care',
    supportingText: 'Partnering with Scandinavia\'s largest healthcare providers to build systems that work.',
    ctaText: 'View case',
    ctaUrl: '#'
  },
  {
    id: 2,
    backgroundImage: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1920',
    eyebrow: 'Web Design',
    headline: 'Inet Design',
    supportingText: 'Modern web platform delivering exceptional user experience and performance.',
    ctaText: 'View case',
    ctaUrl: '#'
  },
  {
    id: 3,
    backgroundImage: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1920',
    eyebrow: 'Manufacturing',
    headline: 'Engineering precision at scale',
    supportingText: 'Delivering advanced automation solutions for industrial operations.',
    ctaText: 'View case',
    ctaUrl: '#'
  },
  {
    id: 4,
    backgroundImage: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920',
    eyebrow: 'Utilities',
    headline: 'Modernizing critical infrastructure',
    supportingText: 'Data-driven solutions for sustainable water management and operations.',
    ctaText: 'Explore work',
    ctaUrl: '#'
  },
  {
    id: 5,
    backgroundImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1920',
    eyebrow: 'IoT',
    headline: 'Connected systems that deliver',
    supportingText: 'Smart home technology with precision control and seamless integration.',
    ctaText: 'View case',
    ctaUrl: '#'
  }
];

export default function CasesHeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setIsPaused(true);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setTimeout(() => setIsTransitioning(false), 800);
      }
      setIsPaused(true);
    }
  };

  useEffect(() => {
    if (!isPaused) {
      autoplayRef.current = setInterval(() => {
        nextSlide();
      }, 6500);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isPaused, currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setIsPaused(true);
        setTimeout(() => setIsTransitioning(false), 800);
      } else if (e.key === 'ArrowRight') {
        nextSlide();
        setIsPaused(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section
      className="cases-hero-slideshow"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label="Featured case studies"
    >
      <div className="cases-hero-slides">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`cases-hero-slide ${index === currentSlide ? 'active' : ''} ${index < currentSlide ? 'prev' : ''}`}
            aria-hidden={index !== currentSlide}
          >
            <div
              className="cases-hero-slide-bg"
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
            />
            <div className="cases-hero-slide-overlay" />

            <div className="manyone-grid cases-hero-slide-content">
              {slide.eyebrow && (
                <p className="cases-hero-eyebrow">{slide.eyebrow}</p>
              )}
              <h1 className="cases-hero-headline">{slide.headline}</h1>
              <p className="cases-hero-supporting">{slide.supportingText}</p>
              <a href={slide.ctaUrl} className="cases-hero-cta">
                {slide.ctaText}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="manyone-grid cases-hero-nav-wrapper">
        <nav className="cases-hero-nav" aria-label="Slide navigation">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`cases-hero-nav-item ${index === currentSlide ? 'active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide ? 'true' : 'false'}
            >
              {String(index + 1).padStart(2, '0')}
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
}
