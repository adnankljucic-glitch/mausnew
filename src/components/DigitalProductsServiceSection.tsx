import PillarRow from './PillarRow';

const bulletPoints = [
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
  return (
    <PillarRow
      variant="light"
      bgOverride="#F7F8FA"
      headline="Optimizing the end-to-end Customer Ecosystem."
      intro='Digital products do not exist in a vacuum. Service Design is about looking at the entire lifecycle of a customer interaction—from the first touchpoint to the backend fulfillment. We help you map and optimize the "invisible" processes that make your digital products successful.'
      bulletsTitled={bulletPoints}
      image="/designservice.webp"
      imageOverlayTitle="Strategic service design"
      imageAlt="Digital Products & Experiences"
    />
  );
}
