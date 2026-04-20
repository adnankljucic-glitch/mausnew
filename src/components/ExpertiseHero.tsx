import React from "react";
import ScrollIndicator from "./ScrollIndicator";

export default function ExpertiseHero() {
  return (
    <section className="ai-hero relative">
      <div className="manyone-grid ai-hero-content">

        <h1 className="ai-hero-headline">
          Expertise that turns strategy into execution
        </h1>

        <p className="ai-hero-subheadline">
          From AI automation to cloud foundations, from engineering velocity to unified digital experiences, we bring deep craft to every layer of the stack. Real systems. Real outcomes. Real scale.
        </p>

      </div>
      <ScrollIndicator />
    </section>
  );
}
