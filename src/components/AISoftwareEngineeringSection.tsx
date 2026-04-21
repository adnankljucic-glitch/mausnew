import PillarRow from './PillarRow';

const bulletPoints = [
  {
    title: 'Scalable Backend Architecture',
    description: 'Distributed systems on .NET 8 and Azure that handle AI workloads without bottlenecks, from inference pipelines to batch processing.',
  },
  {
    title: 'Event-Driven Integration',
    description: 'Message-based architectures that connect AI services to business systems in real time, using Azure Service Bus and Kafka.',
  },
  {
    title: 'Production Observability',
    description: 'Logging, tracing, and monitoring built in from day one so you can debug AI behavior in the wild with full context.',
  },
];

export default function AISoftwareEngineeringSection() {
  return (
    <PillarRow
      variant="light"
      bgOverride="#ffffff"
      headline="Architecture that carries AI workloads"
      intro="AI systems fail at scale when the underlying engineering is weak. We build the software foundations that let intelligent features run reliably in production — event-driven backends, observable data pipelines, and infrastructure that doesn't buckle when you double your traffic."
      bulletsTitled={bulletPoints}
      image="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200"
      imageOverlayTitle="Engineered for AI at scale"
      imageAlt="Software engineering for AI"
    />
  );
}
