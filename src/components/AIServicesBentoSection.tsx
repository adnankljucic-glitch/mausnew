import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AIServicesBentoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="ai-bento-section" style={{ background: '#040d1f' }}>
      <div className="manyone-grid">
        <div className="ai-bento-grid">
          <motion.div
            className="ai-bento-text-column"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2 className="ai-bento-headline">From complex data to scalable business logic</h2>
            <div className="ai-bento-list">
              <h4>Custom AI Layer</h4>
              <div className="ai-bento-divider" />
              <h4>Enterprise Integration</h4>
              <div className="ai-bento-divider" />
              <h4>Cloud & Scalability</h4>
              <div className="ai-bento-divider" />
              <h4>Legacy Modernization</h4>
            </div>
                      </motion.div>

          <motion.div
            className="ai-bento-main-image"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          >
            <img
              src="/aibusiness.webp"
              alt="AI and automation technology"
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
                src="/image_7.png"
                alt="AI processor chip"
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
                By combining modern cloud-native architectures with a deep understanding of legacy environments, we ensure AI becomes a stable, high-performance asset for your operations.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
