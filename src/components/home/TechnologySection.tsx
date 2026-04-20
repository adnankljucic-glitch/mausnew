import { useState } from 'react';
import LogoCarousel from '../LogoCarousel';

function TechnologySection() {
  const [expandedBentoBox, setExpandedBentoBox] = useState<number | null>(null);

  const toggleBentoBox = (index: number) => {
    setExpandedBentoBox(expandedBentoBox === index ? null : index);
  };

  const bentoItems = [
    {
      label: "Security, Governance, and ROI (Azure OpenAI)",
      headline: "Enterprise-Grade Intelligence",
      text: "AI, hold the hype. We move beyond experiments to build secure, governed AI instances on Azure. By integrating private data models with your real-world workflows, we deliver automation that drives measurable ROI-keeping your data safe and your business smart."
    },
    {
      label: "Infrastructure, Scalability, and Security",
      headline: "Secure, Scalable Cloud Foundations",
      text: "Is your infrastructure ready for what's next? We liberate your business from legacy constraints by re-platforming to composable architectures. We build high-performance, compliant cloud backbones that reduce technical debt and scale effortlessly with your growth."
    },
    {
      label: "Core Engineering",
      headline: "Engineering Business Velocity",
      text: "Code that scales with your ambition. We leverage the raw performance of .NET 8 to engineer robust digital platforms capable of handling millions of transactions. We don't just write software; we build the high-speed engines that power your core business processes."
    },
    {
      label: "Digital Experience (Mobile/Web)",
      headline: "Unified Digital Experiences",
      text: "One codebase. Any device. Zero compromise. We leverage Flutter and React to deliver native-grade experiences across web and mobile simultaneously. The result? You launch features 40% faster, ensuring your customers get a seamless experience on every screen."
    }
  ];

  return (
    <section id="technology" className="technology-section" style={{ backgroundColor: '#ECEBEC' }}>
      <div className="manyone-grid">
        <p className="technology-eyebrow">EXPERTISE</p>
        <h2 className="technology-headline">AI designed for real business, not demos</h2>
        <p className="technology-description">
          We combine secure enterprise foundations with real-world AI automation and full-stack expertise - powering scalable solutions, not experiments.
        </p>

        <div className="bento-grid">
          {bentoItems.map((item, index) => (
            <div key={index} className={`bento-box ${expandedBentoBox === index ? 'bento-box-expanded' : ''}`}>
              <div className="bento-box-header" onClick={() => toggleBentoBox(index)}>
                <div className="bento-box-header-content">
                  <p className="bento-label">{item.label}</p>
                  <h3 className="bento-headline">{item.headline}</h3>
                </div>
                <button className="bento-box-toggle" aria-label="Toggle content">
                  {expandedBentoBox === index ? '-' : '+'}
                </button>
              </div>
              <p className="bento-text">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="technology-cta-wrapper">
          <a href="#technology-approach" className="technology-cta">
            Read more
          </a>
        </div>

        <LogoCarousel />
      </div>
    </section>
  );
}

export default TechnologySection;
