import React from "react";
import { ArrowRight } from "lucide-react";

export default function AIHero() {
  return (
    <section className="ai-hero">
      <div className="manyone-grid ai-hero-content">

        <h1 className="ai-hero-headline">
          High-Performance Engineering for the AI era
        </h1>

        <p className="ai-hero-subline">
          We build the robust technical foundations that allow enterprises to scale. No shortcuts, no technical debt. Just secure, scalable software that performs.
        </p>

        <div className="ai-hero-buttons">
          <a href="/discovery" className="btn-primary">
            <span>Book a discovery call</span>
            <ArrowRight size={18} strokeWidth={2} />
          </a>
        </div>

      </div>
    </section>
  );
}
