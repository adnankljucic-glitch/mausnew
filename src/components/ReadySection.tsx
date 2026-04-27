import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface ReadySectionProps {
  headline?: string;
}

export default function ReadySection({ headline = "Ready for our customer-centric agility and adaptability?" }: ReadySectionProps) {
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

  const textVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: 0.1,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 0.2,
      },
    },
  };

  return (
    <motion.section
      id="ready"
      ref={sectionRef}
      className="ready-section"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <div className="manyone-grid">
        <div className="ready-content-wrapper">
          <motion.div className="ready-text-content" variants={textVariants}>
            <h2 className="ready-headline">
              {headline}
            </h2>
            <p className="ready-paragraph">
              We break down your project into manageable sprints, delivering a potentially shippable product increment after each cycle.
            </p>
            <p className="ready-paragraph">
              Let's embark on this journey together for your success, adapting quickly with tangible results that evolve based on your feedback and changing requirements. It's not just our goal; it's our commitment.
            </p>
            <a href="/discovery" className="ready-cta-button">
              Contact us
              <ArrowRight size={20} strokeWidth={1.5} />
            </a>
          </motion.div>

          <motion.div className="ready-image-wrapper" variants={imageVariants}>
            <img
              src="/davor.webp"
              alt="Team member at work"
              className="ready-image"
            />
            <div className="ready-image-overlay" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
