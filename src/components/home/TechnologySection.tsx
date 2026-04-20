import { motion } from 'framer-motion';
import LogoCarousel from '../LogoCarousel';

const items = [
  {
    number: '01',
    label: 'SECURITY, GOVERNANCE, AND ROI (AZURE OPENAI)',
    headline: 'Enterprise-Grade\nIntelligence',
    text: 'AI, hold the hype. We move beyond experiments to build secure, governed AI instances on Azure. By integrating private data models with your real-world workflows, we deliver automation that drives measurable ROI — keeping your data safe and your business smart.',
    tags: ['AZURE OPENAI', 'SEMANTIC KERNEL', 'RAG', '.NET 8'],
  },
  {
    number: '02',
    label: 'INFRASTRUCTURE, SCALABILITY, AND SECURITY',
    headline: 'Secure, Scalable\nCloud Foundations',
    text: "Is your infrastructure ready for what's next? We liberate your business from legacy constraints by re-platforming to composable architectures. We build high-performance, compliant cloud backbones that reduce technical debt and scale effortlessly with your growth.",
    tags: ['AZURE', 'KUBERNETES', 'TERRAFORM', 'GITHUB ACTIONS'],
  },
  {
    number: '03',
    label: 'CORE ENGINEERING',
    headline: 'Engineering\nBusiness Velocity',
    text: "Code that scales with your ambition. We leverage the raw performance of .NET 8 to engineer robust digital platforms capable of handling millions of transactions. We don't just write software; we build the high-speed engines that power your core business processes.",
    tags: ['.NET 8', 'C#', 'POSTGRESQL', 'OPENTELEMETRY'],
  },
  {
    number: '04',
    label: 'DIGITAL EXPERIENCE (MOBILE/WEB)',
    headline: 'Unified Digital\nExperiences',
    text: 'One codebase. Any device. Zero compromise. We leverage Flutter and React to deliver native-grade experiences across web and mobile simultaneously. The result? You launch features 40% faster, ensuring your customers get a seamless experience on every screen.',
    tags: ['FLUTTER', 'REACT', 'NEXT.JS', 'TYPESCRIPT'],
  },
];

function TechnologySection() {
  return (
    <section id="technology" className="tech-grid-section">
      <div className="manyone-grid">
        <motion.div
          className="tech-grid-intro"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="tech-grid-eyebrow">EXPERTISE</p>
          <h2 className="tech-grid-headline">AI designed for real business, not demos</h2>
          <p className="tech-grid-sub">
            We combine secure enterprise foundations with real-world AI automation and full-stack expertise — powering scalable solutions, not experiments.
          </p>
        </motion.div>

        <div className="tech-grid-cards">
          {items.map((item, index) => (
            <motion.article
              key={item.number}
              className="tech-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="tech-card-top">
                <span className="tech-card-number">{item.number}</span>
                <p className="tech-card-label">{item.label}</p>
                <h3 className="tech-card-headline">
                  {item.headline.split('\n').map((line, i) => (
                    <span key={i} className="tech-card-headline-line">{line}</span>
                  ))}
                </h3>
                <p className="tech-card-text">{item.text}</p>
              </div>

              <div className="tech-card-bottom">
                <ul className="tech-card-tags">
                  {item.tags.map((tag) => (
                    <li key={tag} className="tech-card-tag">{tag}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="tech-grid-cta"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href="/expertise" className="technology-cta">
            Read more
          </a>
        </motion.div>

        <LogoCarousel />
      </div>
    </section>
  );
}

export default TechnologySection;
