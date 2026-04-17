import { ArrowRight } from "lucide-react";

export default function DigitalProductsHero() {
  return (
    <section className="ai-hero">
      <div className="manyone-grid ai-hero-content">
        <h1 className="ai-hero-headline">
          Digital Products & Experiences
        </h1>

        <p className="ai-hero-subheadline">
          We design and build digital products people love. We combine intuitive design with robust technology to create apps and platforms that are ready to scale.
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
