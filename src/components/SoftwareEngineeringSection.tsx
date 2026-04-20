import PillarRow from './PillarRow';

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
  return (
    <PillarRow
      variant="light"
      headline="Design that works as hard as your product"
      intro="We don't just design for aesthetics; we design for conversion and operational efficiency. For larger organizations, this means creating design systems that can scale across departments and platforms while maintaining a seamless brand experience."
      bulletsTitled={bulletPoints}
      image="https://eheonmwcbdtoosllhgku.supabase.co/storage/v1/object/public/images/digital-products/ux2.webp"
      imageOverlayTitle="UX/UI Design"
      imageAlt="UX/UI Design"
    />
  );
}
