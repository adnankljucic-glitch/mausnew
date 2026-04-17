import React from "react";
import { ArrowRight } from "lucide-react";

export default function AIAutomationHero() {
  return (
    <section className="ai-hero">
      <div className="manyone-grid ai-hero-content">
        <h1 className="ai-hero-headline">
          AI & Automation
        </h1>

        <p className="ai-hero-subheadline">
          Fra machine learning pipelines til generativ AI. Vi bygger intelligente systemer, der automatiserer processer og skaber databaseret beslutningsgrundlag.
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
