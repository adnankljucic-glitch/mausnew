import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AIStrategicIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      className="ai-strategic-intro"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <div className="manyone-grid">
        <div className="ai-strategic-intro-content">
          <h2 className="ai-strategic-intro-headline">
            Beyond the hype: AI as your engineering force multiplier
          </h2>

          <div className="ai-strategic-intro-text">
            <p>
              Artificial Intelligence is the most significant shift in technology since the cloud. But for most businesses, it remains a "black box" of undefined potential and security risks.
            </p>

            <p>
              At Maus, we are Pragmatic Innovators. We believe AI isn't magic—it's engineering. We use Microsoft Azure AI and Semantic Kernel to integrate intelligence directly into your existing business systems. Whether you need to liberate data from a 15-year-old legacy application or automate complex document handling, our agile teams use AI to deliver value faster, safer, and with higher precision than traditional development.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
