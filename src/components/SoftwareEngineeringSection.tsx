import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const bulletPoints = [
  {
    title: 'Logic-First Design',
    description: 'Our UI is built on the technical blueprints from our SDD phase, ensuring that what we design can actually be built and scaled.',
  },
  {
    title: 'User Journey Mapping',
    description: 'We identify friction points in your current digital ecosystem and eliminate them through data-driven UX research.',
  },
  {
    title: 'Prototyping & Validation',
    description: 'High-fidelity prototypes that allow stakeholders to experience the product flow before a single line of code is written.',
  },
];

export default function SoftwareEngineeringSection() {
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
            <h2 className="process-step-headline">Where business logic meets Human Centricity</h2>
            <p className="process-step-paragraph">
              We don't just design for aesthetics; we design for conversion and operational efficiency. For larger organizations, this means creating design systems that can scale across departments and platforms while maintaining a seamless brand experience.
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
              src="https://eheonmwcbdtoosllhgku.supabase.co/storage/v1/object/public/images/digital-products/ux2.webp"
              alt="High-Fidelity UX/UI Design"
              className="process-step-image"
              style={{ y }}
            />
            <div className="process-step-image-overlay">
              <h3 className="process-step-image-headline">High-Fidelity UX/UI Design</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
