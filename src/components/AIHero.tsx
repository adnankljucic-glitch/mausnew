import { ArrowRight } from "lucide-react";

export default function AIHero() {
  return (
    <section className="ai-hero">

      {/* video background */}
      <video
        className="ai-hero-video-bg"
        src="https://ttycsupkjrsqjvqaxtca.supabase.co/storage/v1/object/public/MAUS%20VIDEOS/strand.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* dark overlay so text stays readable */}
      <div className="ai-hero-overlay" />

      <div className="manyone-grid ai-hero-content">

        <h1 className="ai-hero-headline">
          Strategic Payment Architecture &amp; Fintech Optimization
        </h1>

        <p className="ai-hero-subline">
          Maximized ROI through seamless integrations, intelligent dashboards, and high-conversion UX for booking and event platforms.
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
