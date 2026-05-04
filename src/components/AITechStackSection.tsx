import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ImageWithSkeleton } from './ImageWithSkeleton';

interface FeatureItem {
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    title: 'Custom AI Layer',
    description: 'Modular systems powered by frameworks like TensorFlow and PyTorch, tailored to your specific business workflows.'
  },
  {
    title: 'Enterprise Integration',
    description: 'Seamless connectivity with ERP and CRM systems via robust APIs and event-driven architectures.'
  },
  {
    title: 'Cloud & Scalability',
    description: 'High-availability solutions on AWS, Azure, or GCP, built to handle mission-critical workloads.'
  },
  {
    title: 'Legacy Modernization',
    description: 'We eliminate technical debt and automate manual bottlenecks without disrupting existing operations.'
  }
];

export default function AITechStackSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section ref={sectionRef} className="ai-expertise-section-v2" style={{ background: '#000020' }}>
      <div className="manyone-grid">
        <motion.h2
          className="ai-expertise-headline-v2 ai-tech-stack-headline-full"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          AI technology stack & enterprise integration
        </motion.h2>

        <div className="ai-tech-stack-layout">
          <motion.div
            className="ai-tech-stack-left"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          >
            <div className="ai-tech-stack-image-wrapper">
              <ImageWithSkeleton
                src="/llm.png"
                alt="AI technology and data visualization"
                className="ai-tech-stack-image"
              />
              <div className="ai-tech-stack-image-overlay" />
            </div>
          </motion.div>

          <motion.div
            className="ai-tech-stack-right"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          >
            <h4 className="ai-tech-stack-subheading">
              From complex data to scalable business logic
            </h4>
            <p className="ai-tech-stack-paragraph">
              By combining modern cloud-native architectures with a deep understanding of legacy environments, we ensure AI becomes a stable, high-performance asset for your operations.
            </p>

            <div className="ai-tech-stack-features">
              {features.map((feature, index) => (
                <div key={index} className="ai-tech-stack-feature">
                  <div className="ai-tech-stack-feature-divider" />
                  <div className="ai-tech-stack-feature-content">
                    <strong>{feature.title}:</strong> {feature.description}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
