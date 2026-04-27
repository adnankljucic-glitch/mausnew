import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface OutcomeCard {
  id: number;
  image: string;
  video?: string;
  title: string;
  description: string;
}

const outcomeCards: OutcomeCard[] = [
  {
    id: 1,
    image: '/discovery.webp',
    video: 'https://ttycsupkjrsqjvqaxtca.supabase.co/storage/v1/object/public/MAUS%20VIDEOS/runevents_intro.mp4',
    title: "Discovery",
    description: "We map your legacy systems and business logic."
  },
  {
    id: 2,
    image: '/sdd1.webp',
    title: "Specification (SDD)",
    description: "We define the full technical blueprint."
  },
  {
    id: 3,
    image: '/devanalytics.webp',
    video: 'https://ttycsupkjrsqjvqaxtca.supabase.co/storage/v1/object/public/MAUS%20VIDEOS/hospital.mp4',
    title: "Development",
    description: "We execute with surgical precision and maximum speed."
  },
  {
    id: 4,
    image: '/mobile.png',
    title: "Delivery",
    description: "You receive a product that works as intended, no surprises."
  }
];

interface OutcomesSectionProps {
  backgroundColor?: string;
}

export default function OutcomesSection({ backgroundColor }: OutcomesSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % outcomeCards.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isMobile]);

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
        setCurrentSlide(prev => (prev + 1) % outcomeCards.length);
      } else {
        setCurrentSlide(prev => (prev - 1 + outcomeCards.length) % outcomeCards.length);
      }
    }
  };

  return (
    <section className="outcomes-section" style={backgroundColor ? { backgroundColor } : undefined}>
      <div className="manyone-grid">
        <div className="outcomes-header">
          <motion.h2
            className="outcomes-headline"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Measure twice, code once: Architecting for velocity and scale
          </motion.h2>
          <motion.p
            className="outcomes-subheadline"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            In enterprise software, the most expensive code is the code you have to write twice. At MAUS, we eliminate "Development Drift" by shifting the complexity from the build phase to the discovery phase.
          </motion.p>
        </div>
      </div>

      <div className="outcomes-grid-desktop">
        {outcomeCards.map((card, index) => (
          <motion.div
            key={card.id}
            className="outcome-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="outcome-card-image-wrapper">
              {card.video ? (
                <motion.video
                  src={card.video}
                  className="outcome-card-image"
                  autoPlay
                  loop
                  muted
                  playsInline
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
              ) : (
                <motion.img
                  src={card.image}
                  alt={card.title}
                  className="outcome-card-image"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
              )}
            </div>
            <div className="outcome-card-overlay" />
            <div className="outcome-card-content">
              <h3 className="outcome-card-title">{card.title}</h3>
              <p className="outcome-card-description">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="manyone-grid">
        <div
          className="outcomes-slideshow-mobile"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="outcome-slide-mobile"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {outcomeCards[currentSlide].video ? (
                <motion.video
                  src={outcomeCards[currentSlide].video}
                  className="outcome-slide-image"
                  autoPlay
                  loop
                  muted
                  playsInline
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.05 }}
                  transition={{ duration: 8, ease: "linear" }}
                />
              ) : (
                <motion.img
                  src={outcomeCards[currentSlide].image}
                  alt={outcomeCards[currentSlide].title}
                  className="outcome-slide-image"
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.05 }}
                  transition={{ duration: 8, ease: "linear" }}
                />
              )}
              <div className="outcome-slide-overlay" />
              <div className="outcome-slide-content">
                <h3 className="outcome-slide-title">
                  {outcomeCards[currentSlide].title}
                </h3>
                <p className="outcome-slide-description">
                  {outcomeCards[currentSlide].description}
                </p>
                <div className="outcome-slide-dots">
                  {outcomeCards.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`outcome-slide-dot ${
                        index === currentSlide ? 'outcome-slide-dot-active' : ''
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          className="outcomes-cta-wrapper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="/discovery" className="outcomes-cta">
            Book consulting call
            <ArrowRight size={20} strokeWidth={1.5} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
