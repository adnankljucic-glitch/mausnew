import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PillarTabItem {
  label: string;
  tab: string;
  headline: string;
  intro: string;
  bullets: string[];
  keyTech: string;
  image: string;
}

const pillarItems: PillarTabItem[] = [
  {
    label: "Security, Governance, and ROI (Azure OpenAI)",
    tab: "Enterprise Intelligence",
    headline: "Enterprise-Grade Intelligence",
    intro: "AI, hold the hype. We move beyond experiments to build secure, governed AI instances on Azure. By integrating private data models with your real-world workflows, we deliver automation that drives measurable ROI—keeping your data safe and your business smart.",
    bullets: [
      "Private Azure OpenAI deployments with full data residency controls",
      "RAG systems grounded in your own knowledge bases, not the public internet",
      "Evaluation frameworks that measure business ROI, not just model accuracy"
    ],
    keyTech: "Azure OpenAI · Semantic Kernel · Vector databases · .NET 8",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    label: "Infrastructure, Scalability, and Security",
    tab: "Cloud Foundations",
    headline: "Secure, Scalable Cloud Foundations",
    intro: "Is your infrastructure ready for what's next? We liberate your business from legacy constraints by re-platforming to composable architectures. We build high-performance, compliant cloud backbones that reduce technical debt and scale effortlessly with your growth.",
    bullets: [
      "Composable cloud architectures built on Azure with cost controls baked in",
      "Zero-downtime migrations from legacy monoliths to modern services",
      "Compliance and security hardening for regulated industries"
    ],
    keyTech: "Azure · Kubernetes · Terraform · GitHub Actions",
    image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    label: "Core Engineering",
    tab: "Business Velocity",
    headline: "Engineering Business Velocity",
    intro: "Code that scales with your ambition. We leverage the raw performance of .NET 8 to engineer robust digital platforms capable of handling millions of transactions. We don't just write software; we build the high-speed engines that power your core business processes.",
    bullets: [
      "High-throughput .NET 8 backends handling millions of transactions per day",
      "Event-driven architectures that decouple services and scale independently",
      "Continuous delivery pipelines with automated testing and observability"
    ],
    keyTech: ".NET 8 · C# · PostgreSQL · Azure Service Bus · OpenTelemetry",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    label: "Digital Experience (Mobile/Web)",
    tab: "Digital Experiences",
    headline: "Unified Digital Experiences",
    intro: "One codebase. Any device. Zero compromise. We leverage Flutter and React to deliver native-grade experiences across web and mobile simultaneously. The result? You launch features 40% faster, ensuring your customers get a seamless experience on every screen.",
    bullets: [
      "Flutter applications with native performance on iOS, Android, and web",
      "React and Next.js frontends tuned for Core Web Vitals and SEO",
      "Design systems that stay consistent across every platform and team"
    ],
    keyTech: "Flutter · React · Next.js · TypeScript · Storybook",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200"
  }
];

export default function ExpertisePillarsTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = pillarItems[activeIndex];

  return (
    <section className="pillars-tabs-section">
      <div className="manyone-grid">
        <div className="pillars-tabs-header">
          <motion.p
            className="pillars-tabs-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            EXPERTISE IN DEPTH
          </motion.p>
          <motion.h2
            className="pillars-tabs-headline"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Explore our four pillars
          </motion.h2>
        </div>

        <div className="pillars-tabs-nav" role="tablist">
          {pillarItems.map((item, index) => (
            <button
              key={item.tab}
              role="tab"
              aria-selected={activeIndex === index}
              className={`pillars-tab ${activeIndex === index ? 'pillars-tab-active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <span className="pillars-tab-number">{String(index + 1).padStart(2, '0')}</span>
              <span className="pillars-tab-label">{item.tab}</span>
            </button>
          ))}
        </div>

        <div className="pillars-tabs-panel">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="pillars-tabs-panel-inner"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="pillars-tabs-media">
                <img src={active.image} alt={active.headline} className="pillars-tabs-image" />
              </div>

              <div className="pillars-tabs-content">
                <p className="pillars-tabs-label">{active.label}</p>
                <h3 className="pillars-tabs-subheadline">{active.headline}</h3>
                <p className="pillars-tabs-intro">{active.intro}</p>
                <ul className="pillars-tabs-bullets">
                  {active.bullets.map((bullet, idx) => (
                    <li key={idx} className="pillars-tabs-bullet">{bullet}</li>
                  ))}
                </ul>
                <div className="pillars-tabs-tech">
                  <span className="pillars-tabs-tech-label">Key technologies</span>
                  <span className="pillars-tabs-tech-list">{active.keyTech}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
