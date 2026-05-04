import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ImageWithSkeleton } from './ImageWithSkeleton';

interface ModernizationBox {
  title: string;
  description: string;
}

const modernizationAreas: ModernizationBox[] = [
  {
    title: 'API-First Modernization',
    description: 'Wrapping legacy .NET and SQL cores in modern APIs to enable LLM and Agentic AI integration.'
  },
  {
    title: 'Cloud-Native Transition',
    description: 'Seamless migration to AWS/Azure managed services to reduce OpEx and increase system resilience.'
  },
  {
    title: 'Zero-Downtime Execution',
    description: 'Implementing incremental migration strategies that protect your current revenue streams while building your future stack.'
  }
];

export default function LegacyModernizationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="legacy-modernization-section">
      <div className="manyone-grid">
        <motion.div
          className="legacy-modernization-top-label"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          LEGACY MODERNIZATION
        </motion.div>

        <div className="legacy-modernization-hero-grid">
          <motion.div
            className="legacy-modernization-hero-text"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2 className="legacy-modernization-hero-headline">
              Bridge the Gap Between Technical Debt and Innovation
            </h2>
            <p className="legacy-modernization-hero-description">
              Don't let legacy infrastructure stall your intelligence strategy. We specialize in re-engineering monolithic systems into AI-ready, cloud-native architectures.
            </p>
          </motion.div>

          <motion.div
            className="legacy-modernization-hero-visual"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="legacy-modernization-image-wrapper">
              <ImageWithSkeleton
                src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Cloud Computing Infrastructure"
                className="legacy-modernization-image"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="legacy-modernization-framework-label"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
        >
          OUR MODERNIZATION FRAMEWORK
        </motion.div>

        <div className="legacy-modernization-grid">
          {modernizationAreas.map((area, index) => (
            <motion.div
              key={index}
              className="legacy-modernization-box"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 + (index * 0.1) }}
            >
              <h3 className="legacy-modernization-box-title">{area.title}</h3>
              <p className="legacy-modernization-box-description">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
