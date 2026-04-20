import { motion } from 'framer-motion';

interface PillarHeroItem {
  number: string;
  label: string;
  headline: string;
  intro: string;
  bullets: string[];
  keyTech: string;
  image: string;
  backgroundColor: string;
}

const pillarItems: PillarHeroItem[] = [
  {
    number: "01",
    label: "Security, Governance, and ROI (Azure OpenAI)",
    headline: "Enterprise-Grade Intelligence",
    intro: "AI, hold the hype. We move beyond experiments to build secure, governed AI instances on Azure. By integrating private data models with your real-world workflows, we deliver automation that drives measurable ROI—keeping your data safe and your business smart.",
    bullets: [
      "Private Azure OpenAI deployments with full data residency controls",
      "RAG systems grounded in your own knowledge bases, not the public internet",
      "Evaluation frameworks that measure business ROI, not just model accuracy"
    ],
    keyTech: "Azure OpenAI · Semantic Kernel · Vector databases · .NET 8",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
    backgroundColor: "#2A2838"
  },
  {
    number: "02",
    label: "Infrastructure, Scalability, and Security",
    headline: "Secure, Scalable Cloud Foundations",
    intro: "Is your infrastructure ready for what's next? We liberate your business from legacy constraints by re-platforming to composable architectures. We build high-performance, compliant cloud backbones that reduce technical debt and scale effortlessly with your growth.",
    bullets: [
      "Composable cloud architectures built on Azure with cost controls baked in",
      "Zero-downtime migrations from legacy monoliths to modern services",
      "Compliance and security hardening for regulated industries"
    ],
    keyTech: "Azure · Kubernetes · Terraform · GitHub Actions",
    image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1200",
    backgroundColor: "#2C2A39"
  },
  {
    number: "03",
    label: "Core Engineering",
    headline: "Engineering Business Velocity",
    intro: "Code that scales with your ambition. We leverage the raw performance of .NET 8 to engineer robust digital platforms capable of handling millions of transactions. We don't just write software; we build the high-speed engines that power your core business processes.",
    bullets: [
      "High-throughput .NET 8 backends handling millions of transactions per day",
      "Event-driven architectures that decouple services and scale independently",
      "Continuous delivery pipelines with automated testing and observability"
    ],
    keyTech: ".NET 8 · C# · PostgreSQL · Azure Service Bus · OpenTelemetry",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200",
    backgroundColor: "#312E3D"
  },
  {
    number: "04",
    label: "Digital Experience (Mobile/Web)",
    headline: "Unified Digital Experiences",
    intro: "One codebase. Any device. Zero compromise. We leverage Flutter and React to deliver native-grade experiences across web and mobile simultaneously. The result? You launch features 40% faster, ensuring your customers get a seamless experience on every screen.",
    bullets: [
      "Flutter applications with native performance on iOS, Android, and web",
      "React and Next.js frontends tuned for Core Web Vitals and SEO",
      "Design systems that stay consistent across every platform and team"
    ],
    keyTech: "Flutter · React · Next.js · TypeScript · Storybook",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
    backgroundColor: "#34303F"
  }
];

export default function ExpertisePillarsHero() {
  return (
    <section className="pillars-hero-section">
      {pillarItems.map((item, index) => (
        <article
          key={item.number}
          className={`pillar-hero-row ${index % 2 === 0 ? 'pillar-hero-row-image-right' : 'pillar-hero-row-image-left'} ${index % 2 === 0 ? 'pillar-hero-row-dark' : 'pillar-hero-row-darker'}`}
          style={{ backgroundColor: item.backgroundColor }}
        >
          <div className="manyone-grid">
            <div className="pillar-hero-inner">
              <motion.div
                className="pillar-hero-content"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="pillar-hero-label">{item.label}</p>
                <h2 className="pillar-hero-headline">{item.headline}</h2>
                <p className="pillar-hero-intro">{item.intro}</p>
                <ul className="pillar-hero-bullets">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="pillar-hero-bullet">{bullet}</li>
                  ))}
                </ul>
                <div className="pillar-hero-tech">
                  <span className="pillar-hero-tech-label">Key technologies</span>
                  <ul className="pillar-hero-tech-pills">
                    {item.keyTech.split(' · ').map((tech, idx) => (
                      <li key={idx} className="pillar-hero-tech-pill">{tech}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div
                className="pillar-hero-media"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                <img src={item.image} alt={item.headline} className="pillar-hero-image" />
                <div className="pillar-hero-image-overlay" />
              </motion.div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
