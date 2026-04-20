import { motion } from 'framer-motion';

interface PillarItem {
  number: string;
  headline: string;
  description: string;
  tags: string[];
}

const pillarItems: PillarItem[] = [
  {
    number: '01',
    headline: 'Enterprise-Grade\nIntelligence',
    description:
      'AI, hold the hype. We move beyond experiments to build secure, governed AI instances on Azure. By integrating private data models with your real-world workflows, we deliver automation that drives measurable ROI — keeping your data safe and your business smart.',
    tags: ['AZURE OPENAI', 'SEMANTIC KERNEL', 'RAG', 'VECTOR DB', '.NET 8'],
  },
  {
    number: '02',
    headline: 'Secure, Scalable\nCloud Foundations',
    description:
      "Is your infrastructure ready for what's next? We liberate your business from legacy constraints by re-platforming to composable architectures. We build high-performance, compliant cloud backbones that reduce technical debt and scale effortlessly with your growth.",
    tags: ['AZURE', 'KUBERNETES', 'TERRAFORM', 'GITHUB ACTIONS'],
  },
  {
    number: '03',
    headline: 'Engineering\nBusiness Velocity',
    description:
      "Code that scales with your ambition. We leverage the raw performance of .NET 8 to engineer robust digital platforms capable of handling millions of transactions. We don't just write software; we build the high-speed engines that power your core business processes.",
    tags: ['.NET 8', 'C#', 'POSTGRESQL', 'SERVICE BUS', 'OTEL'],
  },
  {
    number: '04',
    headline: 'Unified Digital\nExperiences',
    description:
      'One codebase. Any device. Zero compromise. We leverage Flutter and React to deliver native-grade experiences across web and mobile simultaneously. The result? You launch features 40% faster, ensuring your customers get a seamless experience on every screen.',
    tags: ['FLUTTER', 'REACT', 'NEXT.JS', 'TYPESCRIPT', 'STORYBOOK'],
  },
];

export default function ExpertisePillarsGrid() {
  return (
    <section className="pillars-grid-section">
      <div className="manyone-grid">
        <motion.div
          className="pillars-grid-intro"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="pillars-grid-eyebrow">EXPERTISE</p>
          <h2 className="pillars-grid-headline">
            Four pillars. One integrated capability.
          </h2>
          <p className="pillars-grid-sub">
            From AI automation to cloud foundations, from engineering velocity
            to unified digital experiences — we bring deep craft to every layer
            of the stack.
          </p>
        </motion.div>

        <div className="pillars-grid">
          {pillarItems.map((item, index) => (
            <motion.article
              key={item.number}
              className={`pillar-card ${index === 1 ? 'pillar-card-accent' : ''}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="pillar-card-top">
                <span className="pillar-card-number">{item.number}</span>
                <h3 className="pillar-card-headline">
                  {item.headline.split('\n').map((line, idx) => (
                    <span key={idx} className="pillar-card-headline-line">
                      {line}
                    </span>
                  ))}
                </h3>
                <p className="pillar-card-description">{item.description}</p>
              </div>

              <div className="pillar-card-bottom">
                <ul className="pillar-card-tags">
                  {item.tags.map((tag) => (
                    <li key={tag} className="pillar-card-tag">
                      {tag}
                    </li>
                  ))}
                </ul>
                <a href="#" className="pillar-card-link">
                  <span>READ MORE</span>
                  <span className="pillar-card-link-arrow">&rarr;</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
