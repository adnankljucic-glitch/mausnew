import ScrollIndicator from "./ScrollIndicator";

export default function CasesPageHero() {
  return (
    <section className="ai-hero relative">
      <div className="manyone-grid ai-hero-content">
        <h1 className="ai-hero-headline">
          Real results for real businesses
        </h1>

        <p className="ai-hero-subheadline">
          Explore how we've partnered with ambitious companies to transform their operations,
          accelerate growth, and build technology that delivers measurable impact.
        </p>
      </div>
      <ScrollIndicator />
    </section>
  );
}
