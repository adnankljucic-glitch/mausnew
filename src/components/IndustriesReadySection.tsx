import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

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
      className="ready-section"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <div className="manyone-grid">
        <div className="ready-content-wrapper">
          <motion.div className="ready-text-content" variants={textVariants}>
            <h2 className="ready-headline">
              Would you like to know more?
            </h2>
            <p className="ready-paragraph" style={{ marginBottom: '32px' }}>
              You are always welcome to contact us to find out more about what we can offer you. We are ready to hear about your business and advise based on your needs
            </p>
            <p className="ready-paragraph">
              Reach out to
            </p>
            <div style={{ marginTop: '12px' }}>
              <h2 style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#ffffff',
                marginBottom: '4px'
              }}>
                Davor Zlotrg
              </h2>
              <h3 className="ready-subheadline" style={{ marginBottom: '8px', color: '#ffffff' }}>
                CEO
              </h3>
              <h3 className="ready-subheadline" style={{
                color: '#ffffff',
                textDecoration: 'underline'
              }}>
                <a
                  href="mailto:davor@maus.ba"
                  style={{
                    color: 'inherit',
                    textDecoration: 'inherit'
                  }}
                >
                  davor@maus.ba
                </a>
              </h3>
            </div>
          </motion.div>

          <motion.div className="ready-image-wrapper" variants={imageVariants}>
            <img
              src="/MAUS_54.jpg"
              alt="Team member at work"
              className="ready-image"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
