import ScrollIndicator from "./ScrollIndicator";

export default function ServicesHero() {
  return (
    <section className="ai-hero">
      <div className="manyone-grid ai-hero-content">
        <h1 className="ai-hero-headline">
          Strategy, engineering and AI unified
        </h1>

        <p className="services-hero-description">
          At MAUS, we don't just write code; we solve business complexity. Through Specs Driven Development (SDD) and a deep-dive Discovery phase, we transform legacy constraints into scalable, high-performance digital assets for ambitious enterprises.
        </p>
      </div>

      <ScrollIndicator />
    </section>
  );
}
