import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Dot from './Dot';
import { ImageWithSkeleton } from './ImageWithSkeleton';

interface ServiceCategory {
  title: string;
  content: string;
  details: string[];
}

const serviceCategories: ServiceCategory[] = [
  {
    title: 'Business Development',
    content: 'Strategic growth initiatives that identify new opportunities and drive sustainable business expansion.',
    details: [
      'Market analysis and opportunity assessment',
      'Partnership and alliance development',
      'Revenue model design and optimization',
      'Go-to-market strategy development'
    ]
  },
  {
    title: 'Product and Concept Development',
    content: 'From ideation to launch, we help you build products that solve real problems and resonate with your market.',
    details: [
      'Product strategy and roadmap planning',
      'User research and validation',
      'Prototyping and MVP development',
      'Product-market fit optimization'
    ]
  },
  {
    title: 'Digital Transformation',
    content: 'Guide your organization through meaningful digital change that delivers measurable business impact.',
    details: [
      'Digital strategy and transformation roadmap',
      'Process optimization and automation',
      'Technology stack evaluation and selection',
      'Change management and organizational alignment'
    ]
  }
];

export default function StrategyExpertiseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="ai-expertise-section">
      <div className="manyone-grid">
        <motion.h2
          className="ai-expertise-headline-centered"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Bridging the gap between business vision and technical execution
        </motion.h2>

        <div className="ai-expertise-grid">
          <motion.div
            className="ai-expertise-left"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="ai-expert-card">
              <div className="ai-expert-image-wrapper">
                <ImageWithSkeleton
                  src="/davor.webp"
                  alt="Davor Zlotrg, MAUS CEO"
                  className="ai-expert-image"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="ai-expertise-right"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
          >

            <p className="ai-expertise-intro">
              In a landscape cluttered with buzzwords, clarity is your competitive advantage. At MAUS, we move beyond theoretical slide decks. We combine deep technical expertise with commercial acumen to validate ideas, mitigate risks, and define the most efficient path to market. We ensure you are solving the right problems with the right technology.
            </p>

            <h4 className="ai-expertise-services-label">
              Our services within Business and Strategy include:
            </h4>

            <div className="ai-expertise-accordion">
              {serviceCategories.map((category, index) => (
                <div key={index} className="ai-accordion-item">
                  <button
                    className={`ai-accordion-header ${expandedIndex === index ? 'active' : ''}`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <span>{category.title}</span>
                    {expandedIndex === index ? (
                      <Minus size={20} strokeWidth={2} />
                    ) : (
                      <Plus size={20} strokeWidth={2} />
                    )}
                  </button>

                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="ai-accordion-content-wrapper"
                      >
                        <div className="ai-accordion-content">
                          <p className="ai-accordion-description">
                            {category.content}
                          </p>
                          <ul className="ai-accordion-details">
                            {category.details.map((detail, idx) => (
                              <li key={idx}><Dot />{detail}</li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
