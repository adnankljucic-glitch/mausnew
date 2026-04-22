import PillarRow from './PillarRow';

interface PillarData {
  label: string;
  headline: string;
  intro: string;
  bullets: { text: string }[];
  keyTech: string;
  image: string;
}

const pillarItems: PillarData[] = [
  {
    label: "Security, Governance, and ROI (Azure OpenAI)",
    headline: "Enterprise-Grade Intelligence",
    intro: "AI, hold the hype. We move beyond experiments to build secure, governed AI instances on Azure. By integrating private data models with your real-world workflows, we deliver automation that drives measurable ROI—keeping your data safe and your business smart.",
    bullets: [
      { text: "Private Azure OpenAI deployments with full data residency controls" },
      { text: "RAG systems grounded in your own knowledge bases, not the public internet" },
      { text: "Evaluation frameworks that measure business ROI, not just model accuracy" }
    ],
    keyTech: "Azure OpenAI · Semantic Kernel · Vector databases · .NET 8",
    image: "/illustration-highlighting-concept-cloud-storage.webp"
  },
  {
    label: "Infrastructure, Scalability, and Security",
    headline: "Secure, Scalable Cloud Foundations",
    intro: "Is your infrastructure ready for what's next? We liberate your business from legacy constraints by re-platforming to composable architectures. We build high-performance, compliant cloud backbones that reduce technical debt and scale effortlessly with your growth.",
    bullets: [
      { text: "Composable cloud architectures built on Azure with cost controls baked in" },
      { text: "Zero-downtime migrations from legacy monoliths to modern services" },
      { text: "Compliance and security hardening for regulated industries" }
    ],
    keyTech: "Azure · Kubernetes · Terraform · GitHub Actions",
    image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    label: "Core Engineering",
    headline: "Engineering Business Velocity",
    intro: "Code that scales with your ambition. We leverage the raw performance of .NET 8 to engineer robust digital platforms capable of handling millions of transactions. We don't just write software; we build the high-speed engines that power your core business processes.",
    bullets: [
      { text: "High-throughput .NET 8 backends handling millions of transactions per day" },
      { text: "Event-driven architectures that decouple services and scale independently" },
      { text: "Continuous delivery pipelines with automated testing and observability" }
    ],
    keyTech: ".NET 8 · C# · PostgreSQL · Azure Service Bus · OpenTelemetry",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    label: "Digital Experience (Mobile/Web)",
    headline: "Unified Digital Experiences",
    intro: "One codebase. Any device. Zero compromise. We leverage Flutter and React to deliver native-grade experiences across web and mobile simultaneously. The result? You launch features 40% faster, ensuring your customers get a seamless experience on every screen.",
    bullets: [
      { text: "Flutter applications with native performance on iOS, Android, and web" },
      { text: "React and Next.js frontends tuned for Core Web Vitals and SEO" },
      { text: "Design systems that stay consistent across every platform and team" }
    ],
    keyTech: "Flutter · React · Next.js · TypeScript · Storybook",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200"
  }
];

export default function ExpertisePillarsHero() {
  return (
    <>
      {pillarItems.map((item, index) => (
        <PillarRow
          key={item.headline}
          variant={index === 0 || index === 1 || index === 2 || index === 3 ? 'light' : 'dark'}
          bgOverride={index === 0 ? '#F7F8FA' : index === 1 ? '#F5F5F5' : index === 2 ? '#FAFAFA' : index === 3 ? '#FFFFFF' : undefined}
          reverse={index % 2 !== 0}
          eyebrow={item.label}
          headline={item.headline}
          intro={item.intro}
          bullets={item.bullets}
          keyTech={item.keyTech}
          image={item.image}
          imageAlt={item.headline}
        />
      ))}
    </>
  );
}
