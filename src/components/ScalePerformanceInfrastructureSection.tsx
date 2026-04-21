import PillarRow from './PillarRow';

const bulletPoints = [
  {
    title: 'Auto-Scaling Architecture',
    description: 'Infrastructure that grows with demand. We design systems that automatically scale up during peak traffic and down to save costs.',
  },
  {
    title: 'Container Orchestration',
    description: 'Kubernetes and Docker deployments that ensure high availability, zero-downtime updates, and efficient resource utilization.',
  },
  {
    title: 'Cloud Cost Optimization',
    description: 'Right-size your cloud spend. We identify waste and implement strategies that reduce costs while maintaining performance.',
  },
];

export default function ScalePerformanceInfrastructureSection() {
  return (
    <PillarRow
      variant="light"
      bgOverride="#FCFCFC"
      reverse
      headline="Infrastructure built for growth"
      intro="Scalability is not just about handling more users—it is about doing so efficiently. We architect infrastructure that scales horizontally and vertically, ensuring your platform can handle 10x growth without 10x the cost."
      bulletsTitled={bulletPoints}
      image="/hardwareanalytics.webp"
      imageAlt="Infrastructure Scaling"
      imageOverlayTitle="Scalable infrastructure"
    />
  );
}
