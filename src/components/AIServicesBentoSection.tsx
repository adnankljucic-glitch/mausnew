import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AIServicesBentoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="ai-bento-section">
      <div className="manyone-grid">
        <div className="pillar-row-inner ai-bento-grid">

          {/* Left column — headline only */}
          <motion.div
            className="ai-bento-left-column"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2 className="ai-bento-headline">
              From complex data to scalable business logic
            </h2>
          </motion.div>

          {/* Right column — description + body copy + list */}
          <motion.div
            className="ai-bento-right-column"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          >
            <p className="ai-bento-description">
              From EHR systems and patient portals to telemedicine and AI-assisted diagnostics — we build secure, compliant, human-centered software for hospitals, clinics, and healthtech companies.
            </p>
            <p className="ai-bento-body">
              We turn raw data and legacy systems into intelligent, production-ready AI. Our engineering teams work directly alongside your operations — embedding automation where it matters, reducing friction across workflows, and ensuring every system we build is stable, secure, and built to last at enterprise scale.
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
          </motion.div>

        </div>
      </div>
    </section>
  );
}
