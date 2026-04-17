import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const bulletPoints = [
  {
    title: 'Real-Time Monitoring',
    description: 'Comprehensive observability with custom dashboards that track the metrics that matter most to your business.',
  },
  {
    title: 'Predictive Analytics',
    description: 'Machine learning models that predict capacity needs and performance issues before they impact users.',
  },
  {
    title: 'Continuous Improvement',
    description: 'Iterative optimization based on data insights, ensuring your platform gets faster and more efficient over time.',
  },
];

export default function ScalePerformanceDataSection() {
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
            <h2 className="process-step-headline">Data-driven optimization</h2>
            <p className="process-step-paragraph">
              You cannot improve what you cannot measure. We implement comprehensive monitoring and analytics that give you complete visibility into your system's performance, enabling informed decisions and continuous improvement.
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
              src="/data.webp"
              alt="Data Analytics Dashboard"
              className="process-step-image"
              style={{ y }}
            />
            <div className="process-step-image-overlay">
              <h3 className="process-step-image-headline">Performance analytics</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
