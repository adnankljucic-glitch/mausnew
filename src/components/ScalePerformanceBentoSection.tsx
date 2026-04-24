import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ScalePerformanceBentoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="ai-bento-section ai-bento-section--warm">
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
              Eliminating technical debt through architectural integrity
            </h2>
            <p className="ai-bento-description">
              Performance is not optional — we combine deep technical analysis with proven optimization strategies to transform sluggish platforms into systems that scale.
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
              At MAUS, we go beyond surface-level fixes. Our engineering teams diagnose root causes — from database bottlenecks to infrastructure misconfigurations — and rebuild the foundations that allow your product to handle growth without compromise in reliability, speed, or cost.
            </p>

            <div className="ai-bento-list">
              <div className="ai-bento-list-item"><span>Performance Auditing</span></div>
              <div className="ai-bento-divider" />
              <div className="ai-bento-list-item"><span>Infrastructure Optimization</span></div>
              <div className="ai-bento-divider" />
              <div className="ai-bento-list-item"><span>Database & API Scaling</span></div>
              <div className="ai-bento-divider" />
              <div className="ai-bento-list-item"><span>Cloud Architecture</span></div>
              <div className="ai-bento-divider" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
