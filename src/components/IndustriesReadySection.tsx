import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ImageWithSkeleton } from './ImageWithSkeleton';

export default function IndustriesReadySection() {
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
      className="ready-section pillar-row-dark"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <div className="manyone-grid">
        <div className="pillar-row-inner">
          <motion.div className="pillar-row-content" variants={textVariants}>
            <h2 className="pillar-row-headline">Would you like to know more?</h2>
            <p className="pillar-row-body">
              You are always welcome to contact us to find out more about what we can offer you. We are ready to hear about your business and advise based on your needs.
            </p>
            <div className="ready-contact-block">
              <p className="ready-contact-label">Reach out to</p>
              <p className="ready-contact-name">Davor Zlotrg</p>
              <p className="ready-contact-title">CEO</p>
              <a href="mailto:davor@maus.ba" className="ready-contact-email">davor@maus.ba</a>
            </div>
          </motion.div>

          <motion.div className="pillar-row-media" variants={imageVariants}>
            <ImageWithSkeleton
              src="/davor.webp"
              alt="Team member at work"
              className="pillar-row-image"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
