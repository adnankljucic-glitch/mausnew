import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

interface BulletPoint {
  title: string;
  description: string;
}

interface ProcessStep {
  id: number;
  label: string;
  title: string;
  description: string;
  bulletPoints: BulletPoint[];
  image: string;
  imageAlt: string;
  imageHeadline: string;
  imageSubheadline: string;
  caseSlug?: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    label: 'STRATEGIC ADVISORY',
    title: 'Architecting for market leadership',
    description: "We don't just build software; we align your technical roadmap with your commercial objectives. We help you identify new revenue streams through automation and ensure your digital infrastructure supports long-term business growth. Our approach ensures that every technical decision is a strategic step toward your organization's primary KPIs.",
    bulletPoints: [
      {
        title: 'Commercial Alignment',
        description: 'Translating complex business goals into executable technical architectures.',
      },
      {
        title: 'ROI-Driven Innovation',
        description: 'Identifying high-value areas where AI and software provide the fastest return on investment.',
      },
      {
        title: 'Scalable Strategy',
        description: 'Ensuring your systems handle growth in both data and users without accumulating technical debt.',
      },
    ],
    image: '/MAUS_54.jpg',
    imageAlt: 'Strategic Advisory',
    imageHeadline: 'Strategic advisory',
    imageSubheadline: 'From market analysis to goal-setting, we craft a roadmap that aligns with your vision, ensuring every move is purposeful and impactful.',
  },
  {
    id: 2,
    label: 'PRODUCT AND CONCEPT DEVELOPMENT',
    title: 'From Vision to Production-Ready',
    description: 'Bringing a complex product to market requires more than code; it requires deep domain insight. We combine experience from Healthcare, Fintech, and Manufacturing with structured development to minimize your time-to-market without compromising on quality or security.',
    bulletPoints: [
      {
        title: 'Rapid Prototyping',
        description: 'Accelerating concept validation through high-fidelity technical prototypes and MVPs.',
      },
      {
        title: 'Regulated Product Design',
        description: 'Expertise in building products that meet strict HIPAA, GDPR, and financial compliance standards from day one.',
      },
      {
        title: 'User-Centric Engineering',
        description: 'Building robust solutions optimized for the end-user on modern AWS and Azure ecosystems.',
      },
    ],
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt: 'Product Development',
    imageHeadline: 'Product & concept development',
    imageSubheadline: 'Bringing a complex product to market requires more than code; it requires deep domain insight and structured development.',
  },
  {
    id: 3,
    label: 'DIGITAL TRANSFORMATION',
    title: 'Future-proofing the enterprise',
    description: 'Navigating digital transformation requires a steady hand. We provide the strategic blueprint and the senior talent needed to transition legacy operations into agile, AI-ready ecosystems. Our focus is on ensuring zero disruption to your current mission-critical services during the evolution.',
    bulletPoints: [
      {
        title: 'Legacy Modernization',
        description: 'Seamlessly migrating outdated systems to modern, cloud-native architectures.',
      },
      {
        title: 'AI Integration',
        description: 'Embedding intelligent automation into existing workflows without operational disruption.',
      },
      {
        title: 'Change Management',
        description: 'Guiding teams through technology transitions with comprehensive training and support.',
      },
    ],
    image: '/future_strategy.webp',
    imageAlt: 'Digital Transformation',
    imageHeadline: 'Digital transformation',
    imageSubheadline: 'Navigating digital transformation requires a steady hand and the strategic blueprint to transition legacy operations into agile, AI-ready ecosystems.',
  },
];

function ProcessStepSection({ step, reverse }: { step: ProcessStep; reverse: boolean }) {
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
        <div className={`process-step-wrapper ${reverse ? 'process-step-reverse' : ''}`}>
          <motion.div className="process-step-text-content" variants={textVariants}>
            <h2 className="process-step-headline">{step.title}</h2>
            <p className="process-step-paragraph">{step.description}</p>

            <div className="process-step-capabilities">
              <div className="process-step-list">
                {step.bulletPoints.map((point, index) => (
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

          {step.caseSlug ? (
            <Link to={`/cases/${step.caseSlug}`} style={{ textDecoration: 'none' }}>
              <motion.div
                ref={imageRef}
                className="process-step-image-wrapper process-step-image-link"
                variants={imageVariants}
              >
                <motion.img
                  src={step.image}
                  alt={step.imageAlt}
                  className="process-step-image"
                  style={{ y }}
                />
                <div className="process-step-image-overlay">
                  <h3 className="process-step-image-headline">{step.imageHeadline}</h3>
                  <p className="process-step-image-subheadline">{step.imageSubheadline}</p>
                </div>
              </motion.div>
            </Link>
          ) : (
            <motion.div
              ref={imageRef}
              className="process-step-image-wrapper"
              variants={imageVariants}
            >
              <motion.img
                src={step.image}
                alt={step.imageAlt}
                className="process-step-image"
                style={{ y }}
              />
              <div className="process-step-image-overlay">
                <h3 className="process-step-image-headline">{step.imageHeadline}</h3>
                <p className="process-step-image-subheadline">{step.imageSubheadline}</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
}

export default function ProcessSection() {
  return (
    <div className="process-section-container">
      {processSteps.map((step, index) => (
        <ProcessStepSection key={step.id} step={step} reverse={index % 2 === 1} />
      ))}
    </div>
  );
}
