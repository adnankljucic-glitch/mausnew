import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { serviceCards } from '../data';
import { ImageWithSkeleton } from './ImageWithSkeleton';

export default function ServiceCardsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section ref={sectionRef} className="kontrapunkt-services-section">
      <div className="manyone-grid">
        <motion.h2
          className="kontrapunkt-services-headline"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Explore our services
        </motion.h2>

        <div className="kontrapunkt-services-grid">
          {serviceCards.map((card, index) => (
            <motion.div
              key={index}
              className="kontrapunkt-service-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.1 }}
            >
              <Link to={card.linkUrl} className="kontrapunkt-card-link">
                <div className="kontrapunkt-card-image-wrapper">
                  <ImageWithSkeleton
                    src={card.image}
                    alt={card.title}
                    className="kontrapunkt-card-image"
                  />
                  <div className="kontrapunkt-card-overlay"></div>
                </div>

                <div className="kontrapunkt-card-content">
                  <h4 className="kontrapunkt-card-title">{card.title}</h4>
                  <p className="kontrapunkt-card-description">{card.description}</p>

                  <ul className="kontrapunkt-card-services">
                    {card.services.map((service, idx) => (
                      <li key={idx} className="kontrapunkt-service-item">
                        {service}
                      </li>
                    ))}
                  </ul>

                  <div className="kontrapunkt-card-cta">
                    <span className="kontrapunkt-cta-text">Read case study</span>
                    <svg
                      className="kontrapunkt-cta-arrow"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 8H15M15 8L8 1M15 8L8 15"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
