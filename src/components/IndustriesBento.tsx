import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { industryCards } from '../data';
import { ImageWithSkeleton } from './ImageWithSkeleton';
import { VideoWithSkeleton } from './VideoWithSkeleton';

export default function IndustriesBento() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [revealedCards, setRevealedCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) {
              setRevealedCards((prev) => {
                if (prev.has(index)) return prev;
                return new Set(prev).add(index);
              });
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="industries"
      ref={sectionRef}
      className={`industries-bento-section ${visible ? 'industries-bento-visible' : ''}`}
    >
      <div className="manyone-grid">
        <div className="industries-bento-header">
          <p className="industries-bento-eyebrow">INDUSTRIES</p>
          <h2 className="industries-bento-headline">Industries we serve</h2>
          <p className="industries-bento-subheadline">
            Driving innovation across key industries with tailored solutions that solve real business challenges
          </p>
        </div>

        <div className="industries-bento-grid">
          {industryCards.map((industry, index) => {
            const isInternalLink = industry.linkUrl.startsWith('/') && industry.linkUrl !== '#';
            const cardClass = `industries-bento-card ${revealedCards.has(index) ? 'industries-bento-card-revealed' : ''}`;
            const cardStyle = { transitionDelay: revealedCards.has(index) ? `${index * 80}ms` : '0ms' };

            const inner = (
              <>
                <div className="industries-bento-card-image-wrapper">
                  {industry.videoUrl ? (
                    <VideoWithSkeleton
                      src={industry.videoUrl}
                      poster={industry.image}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="industries-bento-card-image"
                    />
                  ) : (
                    <ImageWithSkeleton
                      src={industry.image}
                      alt={industry.title}
                      className="industries-bento-card-image"
                    />
                  )}
                  <div className="industries-bento-card-overlay" />
                </div>
                <div className="industries-bento-card-content">
                  <span className="industries-bento-card-category">{industry.category}</span>
                  <h3 className="industries-bento-card-title">{industry.title}</h3>
                  <p className="industries-bento-card-description">{industry.description}</p>
                </div>
              </>
            );

            if (isInternalLink) {
              return (
                <Link
                  key={index}
                  to={industry.linkUrl}
                  ref={(el) => (cardRefs.current[index] = el as HTMLDivElement | null)}
                  className={cardClass}
                  style={cardStyle}
                >
                  {inner}
                </Link>
              );
            }

            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={cardClass}
                style={cardStyle}
              >
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
