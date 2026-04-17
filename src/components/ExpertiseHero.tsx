import React from "react";

export default function ExpertiseHero() {
  return (
    <section className="ai-hero">
      <div className="manyone-grid ai-hero-content">

        <h1 className="ai-hero-headline">
          Expertise that turns strategy into execution
        </h1>

        <div className="services-hero-links">
          <a href="#ai-automation" className="services-hero-link">
            Enterprise-Grade Intelligence
          </a>
          <span className="services-hero-separator">·</span>
          <a href="#software-engineering" className="services-hero-link">
            Secure, Scalable Cloud Foundations
          </a>
          <span className="services-hero-separator">·</span>
          <a href="#strategic-advisory" className="services-hero-link">
            Engineering Business Velocity
          </a>
          <span className="services-hero-separator">·</span>
          <a href="#digital-experience" className="services-hero-link">
            Unified Digital Experiences
          </a>
          <span className="services-hero-separator">·</span>
          <a href="/services/scale-and-performance" className="services-hero-link">
            Optimization & Scale
          </a>
        </div>

      </div>
    </section>
  );
}
