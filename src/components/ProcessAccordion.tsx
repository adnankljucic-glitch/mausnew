import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  title: string;
  content: string;
}

interface ProcessAccordionProps {
  title?: string;
  items?: AccordionItem[];
  backgroundColor?: string;
}

const defaultItems: AccordionItem[] = [
  {
    title: "Discovery & Strategic Exploration",
    content: "Before a single line of code is written, we align with your business logic. We perform a deep-dive into your current tech stack, identifying bottlenecks and mapping out how AI and automation can deliver the highest ROI.\n\nOutcome: A technical roadmap and high-level architecture blueprint."
  },
  {
    title: "Laying the Architectural Foundation",
    content: "Scalability is not an afterthought. We establish the core infrastructure—selecting the right cloud environment, setting up CI/CD pipelines, and defining security protocols. We ensure your system is prepared for both current loads and future expansion.\n\nFocus: Security-first principles, interoperability, and reducing technical debt from day one."
  },
  {
    title: "High-Performance Agile Integration",
    content: "We operate in high-velocity, senior-led agile teams. By utilizing iterative sprints and continuous feedback loops, we ensure that the software evolves with your needs while maintaining production-grade stability and rigorous documentation.\n\nStandard: Clean code, automated testing, and transparent developer hand-offs."
  }
];

export default function ProcessAccordion({ title, items, backgroundColor }: ProcessAccordionProps) {
  const accordionItems = items || defaultItems;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="how-we-work" className="process-accordion-section" style={backgroundColor ? { backgroundColor } : undefined}>
      <div className="manyone-grid">
        <div className="process-accordion-container">
          <div>
            <h2 className="process-accordion-title" style={{ whiteSpace: 'pre-line' }}>
              {title || 'We have defined a collaborative process with our clients'}
            </h2>
          </div>

          <div className="process-accordion-items">
            {accordionItems.map((item, index) => (
              <div key={index} className="process-accordion-item">
                <button
                  onClick={() => toggleItem(index)}
                  className="process-accordion-trigger"
                  aria-expanded={openIndex === index}
                  aria-controls={`accordion-content-${index}`}
                >
                  <h5 className="process-accordion-item-title">
                    {item.title}
                  </h5>
                  <ChevronDown
                    className={`process-accordion-icon ${
                      openIndex === index ? 'process-accordion-icon-open' : ''
                    }`}
                  />
                </button>

                <div
                  id={`accordion-content-${index}`}
                  className={`process-accordion-content ${
                    openIndex === index ? 'process-accordion-content-open' : ''
                  }`}
                  role="region"
                >
                  <div className="process-accordion-content-inner">
                    <p className="process-accordion-text">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
