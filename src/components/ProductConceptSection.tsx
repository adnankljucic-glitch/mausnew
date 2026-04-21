import PillarRow from './PillarRow';

const bulletPoints = [
  {
    title: 'Rapid Prototyping',
    description: 'Accelerating concept validation through high-fidelity technical prototypes and MVPs that minimize time-to-market.',
  },
  {
    title: 'Regulated Product Design',
    description: 'Expertise in building products that meet strict HIPAA, GDPR, and financial compliance standards from day one.',
  },
  {
    title: 'User-Centric Engineering',
    description: 'Building robust solutions optimized for the end-user on modern AWS and Azure ecosystems.',
  },
];

export default function ProductConceptSection() {
  return (
    <PillarRow
      variant="light"
      reverse
      headline="From vision to production-ready"
      intro="Bringing a complex product to market requires more than code — it requires deep domain insight. We combine experience from Healthcare, Fintech, and Manufacturing with structured development to minimize your time-to-market without compromising on quality or security."
      bulletsTitled={bulletPoints}
      image="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      imageOverlayTitle="Product & concept development"
      imageOverlaySubtitle="Bringing a complex product to market requires more than code; it requires deep domain insight and structured development."
      imageAlt="Product and concept development"
    />
  );
}
