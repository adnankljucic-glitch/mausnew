import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const bulletPoints = [
  {
    title: 'Legacy Integration',
    description: 'We connect modern booking interfaces with your existing databases and ERP systems, ensuring real-time data synchronization.',
  },
  {
    title: 'Custom Logic Engines',
    description: "Whether it's dynamic pricing, seat allocation, or complex scheduling, we build the \"brain\" that powers your transactions.",
  },
  {
    title: 'Security & Compliance',
    description: 'Built with enterprise-grade security to ensure data privacy and transaction integrity at every step.',
  },
];

export default function LegacyModernizationServiceSection() {
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
        <div className="process-step-wrapper process-step-reverse">
          <motion.div className="process-step-text-content" variants={textVariants}>
            <h2 className="process-step-headline">Engineered for High-Volume reliability</h2>
            <p className="process-step-paragraph">
              Managing complex bookings and transactions requires more than a simple interface—it requires a robust backend architecture. We specialize in building custom ticketing engines that handle high traffic, complex availability logic, and secure payment integrations.
            </p>

            <div className="process-step-capabilities">
              <div className="process-step-list">
                {bulletPoints.map((point, index) => (
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
              src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Legacy Modernization"
              className="process-step-image"
              style={{ y }}
            />
            <div className="process-step-image-overlay">
              <h3 className="process-step-image-headline">Enterprise ticketing & booking solutions</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
