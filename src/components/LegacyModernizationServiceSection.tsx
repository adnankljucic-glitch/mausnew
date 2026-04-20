import PillarRow from './PillarRow';

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
  return (
    <PillarRow
      variant="light"
      reverse
      headline="Engineered for High-Volume reliability"
      intro="Managing complex bookings and transactions requires more than a simple interface—it requires a robust backend architecture. We specialize in building custom ticketing engines that handle high traffic, complex availability logic, and secure payment integrations."
      bulletsTitled={bulletPoints}
      image="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      imageOverlayTitle="Enterprise ticketing & booking solutions"
      imageAlt="Legacy Modernization"
    />
  );
}
