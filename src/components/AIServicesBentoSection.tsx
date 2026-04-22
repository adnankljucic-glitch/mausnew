import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AIServicesBentoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="ai-bento-section">
      <div className="manyone-grid">
        <div className="ai-bento-grid">

          <motion.div
            className="ai-bento-label-column"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="ai-bento-section-label">01 — AI Services</div>
          </motion.div>

          <motion.div
            className="ai-bento-content-column"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          >
            <h2 className="ai-bento-headline">
              From complex data to<br />
              scalable business logic
            </h2>

            <div className="ai-bento-body">
              <p className="ai-bento-subheadline">
                We turn raw data and legacy systems into intelligent, production-ready AI — built to perform at enterprise scale.
              </p>

              <div className="ai-bento-list">
                <div className="ai-bento-list-item"><span>Custom AI Layer</span></div>
                <div className="ai-bento-divider" />
                <div className="ai-bento-list-item"><span>Enterprise Integration</span></div>
                <div className="ai-bento-divider" />
                <div className="ai-bento-list-item"><span>Cloud &amp; Scalability</span></div>
                <div className="ai-bento-divider" />
                <div className="ai-bento-list-item"><span>Legacy Modernization</span></div>
                <div className="ai-bento-divider" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
