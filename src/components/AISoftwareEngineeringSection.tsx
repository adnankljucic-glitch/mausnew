import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const bulletPoints = [
  {
    title: 'Scalable Backend Architecture',
    description: 'Distributed systems on .NET 8 and Azure that handle AI workloads without bottlenecks, from inference pipelines to batch processing.',
  },
  {
    title: 'Event-Driven Integration',
    description: 'Message-based architectures that connect AI services to business systems in real time, using Azure Service Bus and Kafka.',
  },
  {
    title: 'Production Observability',
    description: 'Logging, tracing, and monitoring built in from day one so you can debug AI behavior in the wild with full context.',
  },
];

export default function AISoftwareEngineeringSection() {
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
            <h2 className="process-step-headline">Architecture that carries AI workloads</h2>
            <p className="process-step-paragraph">
              AI systems fail at scale when the underlying engineering is weak. We build the software foundations that let intelligent features run reliably in production — event-driven backends, observable data pipelines, and infrastructure that doesn't buckle when you double your traffic.
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
              src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Software engineering for AI"
              className="process-step-image"
              style={{ y }}
            />
            <div className="process-step-image-overlay">
              <h3 className="process-step-image-headline">Engineered for AI at scale</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
