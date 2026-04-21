import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function StrategicBentoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="ai-bento-section" style={{ background: '#040F39' }}>
      <div className="manyone-grid">
        <div className="ai-bento-grid">
          <motion.div
            className="ai-bento-text-column"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2 className="ai-bento-headline">From business vision to executable strategy</h2>
            <p className="ai-bento-subheadline">We combine commercial acumen with deep technical expertise to turn ambition into a clear, actionable roadmap — built for your market reality.</p>
            <div className="ai-bento-list">
              <h4>Technology Roadmapping</h4>
              <div className="ai-bento-divider" />
              <h4>Business Development</h4>
              <div className="ai-bento-divider" />
              <h4>Digital Transformation</h4>
              <div className="ai-bento-divider" />
              <h4>Senior Team Integration</h4>
            </div>
          </motion.div>

          <motion.div
            className="ai-bento-main-image"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          >
            <img
              src="/MAUS_54.jpg"
              alt="Strategic advisory session"
            />
          </motion.div>

          <div className="ai-bento-right-column">
            <motion.div
              className="ai-bento-small-image"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            >
              <img
                src="/future_strategy.webp"
                alt="Future strategy planning"
              />
            </motion.div>

            <motion.div
              className="ai-bento-accent-card"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            >
              <span className="ai-bento-quote-mark">"</span>
              <p className="ai-bento-quote-text">
                By combining deep technical expertise with commercial acumen, we ensure every strategic decision is both visionary and grounded in operational reality.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
