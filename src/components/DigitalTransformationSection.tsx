import PillarRow from './PillarRow';

const bulletPoints = [
  {
    title: 'Legacy Modernization',
    description: 'Seamlessly migrating outdated systems to modern, cloud-native architectures without disrupting mission-critical operations.',
  },
  {
    title: 'AI Integration',
    description: 'Embedding intelligent automation into existing workflows without operational disruption.',
  },
  {
    title: 'Change Management',
    description: 'Guiding teams through technology transitions with comprehensive training and support.',
  },
];

export default function DigitalTransformationSection() {
  return (
    <PillarRow
      variant="light"
      headline="Future-proofing the enterprise"
      intro="Navigating digital transformation requires a steady hand. We provide the strategic blueprint and the senior talent needed to transition legacy operations into agile, AI-ready ecosystems — with zero disruption to your current mission-critical services."
      bulletsTitled={bulletPoints}
      image="/future_strategy.webp"
      imageOverlayTitle="Digital transformation"
      imageOverlaySubtitle="Navigating digital transformation requires a steady hand and the strategic blueprint to transition legacy operations into agile, AI-ready ecosystems."
      imageAlt="Digital transformation"
    />
  );
}
