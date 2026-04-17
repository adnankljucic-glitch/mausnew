import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ScalePerformanceBentoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="ai-bento-section">
      <div className="manyone-grid">
        <div className="ai-bento-grid">
          <motion.div
            className="ai-bento-text-column"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2 className="ai-bento-headline text-white">
              Eliminating technical debt through architectural integrity
            </h2>
            <p className="ai-bento-description text-white/80">
              In a world of complex Legacy Systems, performance is not optional. At MAUS, we combine deep technical analysis with proven optimization strategies to transform sluggish platforms into high-performance systems that scale with your business.
            </p>
          </motion.div>

          <motion.div
            className="ai-bento-main-image"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          >
            <img
              src="/devanalytics.webp"
              alt="Developer analytics"
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
                src="/analytucs.webp"
                alt="Abstract technology cubes"
              />
            </motion.div>

            <motion.div
              className="ai-bento-accent-card"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            >
              <p className="ai-bento-quote-text">
                Transforming bottlenecks into breakthrough performance
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
