import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const digitalProductsBulletPoints = [
  {
    title: 'Holistic Discovery',
    description: 'We look beyond the screen to understand how your internal teams and legacy workflows impact the user experience.',
  },
  {
    title: 'Blueprint for Efficiency',
    description: 'We create service blueprints that align your technical infrastructure with your business operations.',
  },
  {
    title: 'Future-Proofing',
    description: 'By identifying gaps in your current service delivery, we provide a roadmap for digital transformation that lasts.',
  },
];

export default function DigitalProductsServiceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

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
    hidden: { opacity: 0, scale: 1.02 },
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
      ref={sectionRef}
      className="process-step-section"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <div className="manyone-grid">
        <div className="process-step-wrapper">
          <motion.div className="process-step-text-content" variants={textVariants}>
            <h2 className="process-step-headline">Optimizing the end-to-end Customer Ecosystem.</h2>
            <p className="process-step-paragraph">
              Digital products do not exist in a vacuum. Service Design is about looking at the entire lifecycle of a customer interaction—from the first touchpoint to the backend fulfillment. We help you map and optimize the "invisible" processes that make your digital products successful.
            </p>

            <div className="process-step-capabilities">
              <div className="process-step-list">
                {digitalProductsBulletPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    className="process-step-capability-card"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 + index * 0.1 }}
                  >
                    <div className="process-step-capability-icon">
                      <ChevronRight size={16} strokeWidth={1.5} />
                    </div>
                    <div className="process-step-bullet-content">
                      <span className="process-step-bullet-title">{point.title}</span>
                      <span className="process-step-bullet-description">{point.description}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={imageRef}
            className="process-step-image-wrapper"
            variants={imageVariants}
          >
            <motion.img
              src="/designservice.webp"
              alt="Digital Products & Experiences"
              className="process-step-image"
              style={{ y }}
            />
            <div className="process-step-image-overlay">
              <h3 className="process-step-image-headline">Strategic service design</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
