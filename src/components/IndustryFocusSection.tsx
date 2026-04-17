import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface IndustryColumn {
  title: string;
  description: string;
}

const industries: IndustryColumn[] = [
  {
    title: 'IoT & Advanced Manufacturing',
    description: 'Our AI solutions optimize production lines through real-time monitoring and predictive maintenance. We enable manufacturers to anticipate equipment failures before they happen, reduce downtime, and maximize operational efficiency through intelligent data analysis of sensor networks and production metrics.'
  },
  {
    title: 'Booking, Tourism & Real Estate',
    description: 'We build data-driven booking engines and high-concurrency scheduling systems that handle peak demand without compromising performance. Our solutions streamline reservation management, optimize pricing strategies, and deliver seamless user experiences across booking platforms and property management systems.'
  },
  {
    title: 'Utilities & Sustainability',
    description: 'We modernize water and energy management systems by integrating AI-powered analytics and automation. Our solutions enable utilities to optimize resource distribution, detect anomalies in consumption patterns, and transition legacy infrastructure into intelligent, sustainable operations that meet modern regulatory and environmental standards.'
  }
];

export default function IndustryFocusSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="industry-focus-section">
      <div className="manyone-grid">
        <motion.div
          className="industry-focus-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="industry-focus-label">STRATEGIC AUTOMATION ACROSS KEY VERTICALS</p>
        </motion.div>

        <div className="industry-focus-columns">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="industry-focus-column"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 + (index * 0.15) }}
            >
              <h3 className="industry-focus-title">{industry.title}</h3>
              <p className="industry-focus-description">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
