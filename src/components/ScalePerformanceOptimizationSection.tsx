import PillarRow from './PillarRow';

const bulletPoints = [
  {
    title: 'Performance Profiling',
    description: 'We identify and eliminate bottlenecks through comprehensive analysis of your application stack, from database queries to API response times.',
  },
  {
    title: 'Load Testing & Capacity Planning',
    description: 'Stress-test your systems before your users do. We simulate real-world traffic to ensure your platform handles peak demand.',
  },
  {
    title: 'Caching & CDN Strategy',
    description: 'Implement intelligent caching layers and content delivery networks to reduce latency and server load across global audiences.',
  },
];

export default function ScalePerformanceOptimizationSection() {
  return (
    <PillarRow
      variant="light"
      bgOverride="#FFFFFF"
      headline="Speed that drives conversion"
      intro="Every millisecond matters. Slow applications lose users and revenue. We optimize every layer of your stack to deliver sub-second response times that keep users engaged and conversions flowing."
      bulletsTitled={bulletPoints}
      image="/dashboard.webp"
      imageAlt="Performance Optimization"
      imageOverlayTitle="Performance optimization"
    />
  );
}
