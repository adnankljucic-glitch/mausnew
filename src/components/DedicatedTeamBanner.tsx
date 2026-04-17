import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function DedicatedTeamBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const videoVariants = {
    hidden: { opacity: 0, y: 12, scale: 1.03 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        opacity: { duration: 0.6, ease: 'easeOut', delay: 0.08 },
        y: { duration: 0.6, ease: 'easeOut', delay: 0.08 },
        scale: { duration: 0.9, ease: 'easeOut', delay: 0.08 },
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 1, y: 20 },
    visible: {
      opacity: 0.75,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 0.08,
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
        delay: 0.16,
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      className="dedicated-team-section"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <div className="manyone-grid">
        <div className="dedicated-team-container">
          <motion.div
            className="dedicated-team-video-wrapper"
            variants={videoVariants}
          >
            <video
              className="dedicated-team-video"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="https://media.maus.ba/media/ffejihy4/services_nofade.mp4" type="video/mp4" />
            </video>
            <motion.div
              className="dedicated-team-overlay"
              variants={overlayVariants}
            ></motion.div>
          </motion.div>

          <div className="dedicated-team-content">
            <motion.div variants={textVariants}>
              <h2 className="dedicated-team-headline">Engineering the future of business logic</h2>
              <p className="dedicated-team-subline">
                We bridge the gap between vision and production-ready software. By automating complex logic and modernizing legacy systems, we build the resilient foundation for your next stage of growth.
              </p>
              <motion.a
                href="/discovery"
                className="dedicated-team-cta"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Book technical consultation
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
