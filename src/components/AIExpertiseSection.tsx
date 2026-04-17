import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Dot from './Dot';

interface ServiceCategory {
  title: string;
  content: string;
  details: string[];
}

const serviceCategories: ServiceCategory[] = [
  {
    title: 'Software Engineering',
    content: 'Custom software development tailored to your business needs, from concept to production.',
    details: [
      'Full-stack web and mobile application development',
      'API design and microservices architecture',
      'Cloud infrastructure and DevOps',
      'Quality assurance and automated testing'
    ]
  },
  {
    title: 'AI & Automation',
    content: 'Intelligent automation solutions that streamline operations and enhance decision-making.',
    details: [
      'AI assistants and chatbots',
      'Process automation and workflow optimization',
      'Intelligent data analysis and insights',
      'Machine learning model integration'
    ]
  },
  {
    title: 'Legacy Modernization',
    content: 'Transform outdated systems into modern, efficient, and secure applications.',
    details: [
      'System architecture assessment and planning',
      'Migration to cloud-native platforms',
      'Code refactoring and optimization',
      'Integration with modern tools and frameworks'
    ]
  }
];

export default function AIExpertiseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="ai-expertise-section-v2">
      <div className="manyone-grid">
        <motion.h2
          className="ai-expertise-headline-v2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          We are your AI conversation starters.
        </motion.h2>

        <motion.p
          className="ai-expertise-subheadline-v2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
        >
          From intelligent automation to predictive analytics, we build AI systems that transform raw data into competitive advantage.
        </motion.p>

        <motion.div
          className="ai-expertise-content-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="ai-expertise-text-block">
            <h5 className="ai-expertise-block-heading">What we do:</h5>
            <p className="ai-expertise-block-text">
              We build intelligent software that understands your business logic. We help you automate repetitive manual tasks, analyze complex data in seconds, and modernize your old systems to run faster and more securely. We take the "black box" of AI and turn it into a transparent, hardworking part of your team.
            </p>
          </div>

          <div className="ai-expertise-text-block">
            <h5 className="ai-expertise-block-heading">The Results:</h5>
            <p className="ai-expertise-block-text">
              By removing manual bottlenecks and reducing technical debt, we help you scale your business without scaling your costs. You get improved operational efficiency, fewer human errors, and a team that is free to focus on strategic growth rather than administrative maintenance. We turn Artificial Intelligence into real business value.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="ai-expertise-services-block"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
        >
          <h5 className="ai-expertise-services-heading">
            Our services within AI solutions include:
          </h5>

          <div className="ai-expertise-accordion-v2">
            {serviceCategories.map((category, index) => (
              <div key={index} className="ai-accordion-item-v2">
                <button
                  className={`ai-accordion-header-v2 ${expandedIndex === index ? 'active' : ''}`}
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
                      className="ai-accordion-content-wrapper-v2"
                    >
                      <div className="ai-accordion-content-v2">
                        <p className="ai-accordion-description-v2">
                          {category.content}
                        </p>
                        <ul className="ai-accordion-details-v2">
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
    </section>
  );
}
