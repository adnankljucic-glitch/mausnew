import { ArrowRight } from "lucide-react";

export default function StrategicAdvisoryHero() {
  return (
    <section className="ai-hero">
      <div className="manyone-grid ai-hero-content">

        <h1 className="ai-hero-headline">
          Strategic advisory
        </h1>

        <p className="ai-hero-subheadline">
          From market analysis to goal-setting, we craft a roadmap that aligns with your vision, ensuring every move is purposeful and impactful.
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
