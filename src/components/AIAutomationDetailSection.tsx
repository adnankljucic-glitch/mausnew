import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const pillars = [
  {
    title: 'Healthcare & Life Sciences',
    description: 'We develop secure, HIPAA-compliant systems that leverage AI for patient data interoperability and automated diagnostics. Our experience with Scandinavia\'s largest firms ensures we understand the nuances of large-scale hospital system integration.'
  },
  {
    title: 'Fintech & Financial Services',
    description: 'Beyond basic payments, we build AI-driven fraud detection and smart transaction monitoring. Our solutions are engineered to handle millions of secure transactions with sub-second latency on robust Azure/AWS backends.'
  },
  {
    title: 'IoT & Advanced Manufacturing',
    description: 'We bridge the gap between physical machinery and digital intelligence. Using real-time monitoring and predictive AI, we transform manufacturing lines into "smart factories," reducing downtime through proactive maintenance.'
  },
  {
    title: 'Booking, Tourism & Real Estate',
    description: 'We optimize complex logistics through data-driven booking engines and automated valuation models. Our AI agents handle high-concurrency scheduling and personalized user experiences to maximize operational efficiency.'
  },
  {
    title: 'Utilities & Sustainability',
    description: 'Modernizing the water cycle and energy management. We replace legacy data silos with intelligent, real-time management solutions that prioritize resource efficiency and long-term sustainability.'
  }
];

export default function AIAutomationDetailSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="ai-automation-section">
      <div className="manyone-grid">
        <motion.div
          className="cross-industry-label"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          AI & Automation
        </motion.div>

        <div className="cross-industry-hero-grid">
          <motion.div
            className="cross-industry-hero-visual"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="cross-industry-image-wrapper">
              <img
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="AI Neural Network"
                className="cross-industry-image"
              />
              <div className="cross-industry-image-overlay" />
            </div>
            <motion.div
              className="cross-industry-left-description"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
            >
              <p>
                From healthcare compliance and fintech security to IoT-driven manufacturing, we integrate advanced automation directly into your .NET and Cloud infrastructure (AWS/Azure). We specialize in building the "intelligence layer" that scales your team's output while maintaining the highest standards of data integrity.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="cross-industry-hero-text"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          >
            <h2 className="cross-industry-headline">
              Intelligence applied to complexity
            </h2>
          </motion.div>
        </div>

        <motion.div
          className="cross-industry-pillars-label"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
        >
          STRATEGIC AUTOMATION ACROSS KEY VERTICALS
        </motion.div>

        <div className="cross-industry-pillars-grid">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              className="cross-industry-pillar"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.8 + (index * 0.1) }}
            >
              <h3 className="cross-industry-pillar-title">{pillar.title}</h3>
              <p className="cross-industry-pillar-description">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
