import PillarRow from './PillarRow';

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

export default function ProcessSection() {
  return (
    <>
      {processSteps.map((step, index) => {
        const bgColors = ['#F7F8FA', '#FCFCFC', '#FFFFFF'];
        return (
          <PillarRow
            key={step.id}
            variant="light"
            bgOverride={bgColors[index]}
            reverse={index % 2 === 1}
            headline={step.title}
            intro={step.description}
            bulletsTitled={step.bulletPoints}
            image={step.image}
            imageAlt={step.imageAlt}
            imageOverlayTitle={step.imageHeadline}
            imageOverlaySubtitle={step.imageSubheadline}
          />
        );
      })}
    </>
  );
}
