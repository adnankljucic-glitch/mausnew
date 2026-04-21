import PillarRow from './PillarRow';

const bulletPoints = [
  {
    title: 'Real-Time Monitoring',
    description: 'Comprehensive observability with custom dashboards that track the metrics that matter most to your business.',
  },
  {
    title: 'Predictive Analytics',
    description: 'Machine learning models that predict capacity needs and performance issues before they impact users.',
  },
  {
    title: 'Continuous Improvement',
    description: 'Iterative optimization based on data insights, ensuring your platform gets faster and more efficient over time.',
  },
];

export default function ScalePerformanceDataSection() {
  return (
    <PillarRow
      variant="light"
      bgOverride="#F7F8FA"
      headline="Data-driven optimization"
      intro="You cannot improve what you cannot measure. We implement comprehensive monitoring and analytics that give you complete visibility into your system's performance, enabling informed decisions and continuous improvement."
      bulletsTitled={bulletPoints}
      image="/data.webp"
      imageAlt="Data Analytics Dashboard"
      imageOverlayTitle="Performance analytics"
    />
  );
}
