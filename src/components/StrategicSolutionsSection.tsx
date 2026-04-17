import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function StrategicSolutionsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="strategic-solutions-section">
      <div className="manyone-grid">
        <div className="strategic-solutions-grid">
          <motion.div
            className="strategic-solutions-left"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2 className="strategic-solutions-headline">
              Bridge business goals with execution.
            </h2>
          </motion.div>

          <motion.div
            className="strategic-solutions-right"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          >
            <p className="strategic-solutions-intro">
              Experience strategic excellence with our specialized advisory services. Our guidance is crafted to meet the unique demands of high-stakes industries, ensuring full alignment between your commercial vision and technical reality. From cutting-edge technology roadmaps to senior-level team integration, we prioritize your path to operational dominance.
            </p>
            <p className="strategic-solutions-detail">
              At MAUS, our commitment to technical precision and business-centricity defines our advisory philosophy. We dive deep into your strategic planning and operational efficiency to deliver transformative business solutions that scale.
            </p>
            <p className="strategic-solutions-detail">
              Whether you are a scaling fintech or an established healthcare enterprise, our advisory services are designed to elevate your performance, amplify your engineering strengths, and guide you toward sustained market leadership.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
