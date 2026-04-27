import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function StrategicSolutionsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="strategic-solutions-section">
      <div className="manyone-grid">
        <div className="pillar-row-inner ai-bento-grid" style={{ alignItems: 'start' }}>

          <motion.div
            className="ai-bento-left-column"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2 className="ai-bento-headline">
              Bridge business goals with execution.
            </h2>
          </motion.div>

          <motion.div
            className="ai-bento-right-column"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          >
            <p className="ai-bento-description">
              Experience strategic excellence with our specialized advisory services — crafted to ensure full alignment between your commercial vision and technical reality.
            </p>
            <p className="ai-bento-body">
              At MAUS, our commitment to technical precision and business-centricity defines our advisory philosophy. We dive deep into your strategic planning and operational efficiency to deliver transformative business solutions that scale — whether you are a scaling fintech or an established healthcare enterprise.
            </p>

            <div className="ai-bento-list">
              <div className="ai-bento-list-item"><span>Technology Roadmapping</span></div>
              <div className="ai-bento-divider" />
              <div className="ai-bento-list-item"><span>Fractional CTO & Leadership</span></div>
              <div className="ai-bento-divider" />
              <div className="ai-bento-list-item"><span>Operational Efficiency</span></div>
              <div className="ai-bento-divider" />
              <div className="ai-bento-list-item"><span>Market Entry Strategy</span></div>
              <div className="ai-bento-divider" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
