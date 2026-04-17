import { ArrowRight } from "lucide-react";

export default function ScalePerformanceHero() {
  return (
    <section className="ai-hero">
      <div className="manyone-grid ai-hero-content">
        <h1 className="ai-hero-headline">
          Scale and performance
        </h1>

        <p className="ai-hero-subheadline">
          Optimize performance, reduce friction, and scale what matters. We transform existing platforms into growth engines.
        </p>

        <div className="ai-hero-buttons">
          <a href="/discovery" className="btn-blue">
            <span>Book a discovery call</span>
            <ArrowRight size={18} strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  );
}
