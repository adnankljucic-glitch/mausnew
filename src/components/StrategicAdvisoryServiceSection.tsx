import PillarRow from './PillarRow';

const bulletPoints = [
  {
    title: 'Commercial Alignment',
    description: 'Translating complex business goals into executable technical architectures that directly serve your KPIs.',
  },
  {
    title: 'ROI-Driven Innovation',
    description: 'Identifying high-value areas where AI and software provide the fastest return on investment.',
  },
  {
    title: 'Scalable Strategy',
    description: 'Ensuring your systems handle growth in both data and users without accumulating technical debt.',
  },
];

export default function StrategicAdvisoryServiceSection() {
  return (
    <PillarRow
      variant="light"
      headline="Architecting for market leadership"
      intro="We don't just build software — we align your technical roadmap with your commercial objectives. We help you identify new revenue streams through automation and ensure your digital infrastructure supports long-term business growth. Every technical decision is a strategic step toward your organization's primary KPIs."
      bulletsTitled={bulletPoints}
      image="/MAUS_54.jpg"
      imageOverlayTitle="Strategic advisory"
      imageOverlaySubtitle="From market analysis to goal-setting, we craft a roadmap that aligns with your vision, ensuring every move is purposeful and impactful."
      imageAlt="Strategic advisory"
    />
  );
}
