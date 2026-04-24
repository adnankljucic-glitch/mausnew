import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function DigitalProductsBentoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="ai-bento-section">
      <div className="manyone-grid">
        <div className="ai-bento-grid">

          {/* Left column — headline + description */}
          <motion.div
            className="ai-bento-left-column"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2 className="ai-bento-headline">
              Digital product design & Strategic UX
            </h2>
            <p className="ai-bento-description">
              In a world of complex legacy systems, the interface is only as good as the logic behind it — we combine deep discovery with engineering to build products that perform.
            </p>
          </motion.div>

          {/* Right column — body copy + list */}
          <motion.div
            className="ai-bento-right-column"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          >
            <p className="ai-bento-body-copy">
              At MAUS, we combine deep Discovery with Specs Driven Development (SDD) to design digital products that aren't just intuitive — they are engineered to perform. Every interface decision is grounded in research, validated through iteration, and built to scale alongside your business.
            </p>

            <div className="ai-bento-list">
              <div className="ai-bento-list-item"><span>UX Research & Discovery</span></div>
              <div className="ai-bento-divider" />
              <div className="ai-bento-list-item"><span>Specs Driven Development</span></div>
              <div className="ai-bento-divider" />
              <div className="ai-bento-list-item"><span>Design Systems</span></div>
              <div className="ai-bento-divider" />
              <div className="ai-bento-list-item"><span>Product Strategy</span></div>
              <div className="ai-bento-divider" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
