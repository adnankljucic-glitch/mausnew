import { useState, useEffect, useRef } from 'react';

interface HeroCase {
  title: string;
  description: string;
  video: string;
  linkUrl: string;
}

const fallbackCases: HeroCase[] = [
  {
    title: "ENVIDAN.DK",
    description: "We helped Envidan evolve their digital ecosystem with a scalable, future-ready platform focused on usability, automation and high-performance architecture.",
    video: "https://ttycsupkjrsqjvqaxtca.supabase.co/storage/v1/object/sign/Videos/6981415-hd_1920_1080_25fps.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MmE0ODdhMC0yMDQzLTRmNzktYjhjNy00MjlmN2QwY2FiZmYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWaWRlb3MvNjk4MTQxNS1oZF8xOTIwXzEwODBfMjVmcHMubXA0IiwiaWF0IjoxNzYzMDQ1NTk0LCJleHAiOjE4MTQ4ODU1OTR9.8ykZaIxp5TvhPnn-pzKmsl2DapWaM0BYKtN-dG0wTCo",
    linkUrl: "https://envidan.dk"
  },
  {
    title: "SYSTEMATIC HEALTHCARE",
    description: "Developed an intelligent healthcare solution that optimizes patient care workflows and enables data-driven decision making for medical professionals.",
    video: "https://ttycsupkjrsqjvqaxtca.supabase.co/storage/v1/object/sign/Videos/hospital_page.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MmE0ODdhMC0yMDQzLTRmNzktYjhjNy00MjlmN2QwY2FiZmYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWaWRlb3MvaG9zcGl0YWxfcGFnZS5tcDQiLCJpYXQiOjE3NjMxMTQ0NTEsImV4cCI6MTgyMzU5NDQ1MX0.sfJrkCwzNkuK8X2Fq41s-n-aq9kc9DSj-WPGrEHp0l8",
    linkUrl: "https://systematic.com"
  },
  {
    title: "RUN.EVENTS",
    description: "Built a powerful event management platform that streamlines ticketing, registration and attendee engagement for large-scale conferences and sporting events.",
    video: "https://ttycsupkjrsqjvqaxtca.supabase.co/storage/v1/object/sign/Videos/runshort.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MmE0ODdhMC0yMDQzLTRmNzktYjhjNy00MjlmN2QwY2FiZmYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWaWRlb3MvcnVuc2hvcnQubXA0IiwiaWF0IjoxNzYzMTE0NTMwLCJleHAiOjIzNjc5MTQ1MzB9.rJDjox_9QeX4rpDVCMhoq_k0ys-xDS_XM6mPiOUxxNA",
    linkUrl: "https://run.events"
  }
];

export default function CasesHero() {
  const [heroCases, setHeroCases] = useState<HeroCase[]>(fallbackCases);
  const [currentCase, setCurrentCase] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const goToCase = (index: number) => {
    if (isTransitioning || index === currentCase) return;
    setIsTransitioning(true);
    setCurrentCase(index);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        const nextIndex = (currentCase + 1) % heroCases.length;
        goToCase(nextIndex);
      } else {
        const prevIndex = currentCase === 0 ? heroCases.length - 1 : currentCase - 1;
        goToCase(prevIndex);
      }
    }
  };

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentCase) {
          video.play().catch(() => {});
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [currentCase]);

  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      if (!isTransitioning) {
        setCurrentCase((prev) => (prev + 1) % heroCases.length);
      }
    }, 8000);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isTransitioning]);

  return (
    <section className="ai-hero cases-hero-new">
      <div
        className="cases-hero-background"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {heroCases.map((caseItem, index) => (
          <div
            key={index}
            className={`cases-hero-case ${index === currentCase ? 'active' : ''} ${index < currentCase ? 'prev' : ''}`}
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              className="cases-hero-video"
              src={caseItem.video}
              loop
              muted
              playsInline
            />
            <div className="cases-hero-case-overlay" />
          </div>
        ))}
      </div>

      <div className="manyone-grid ai-hero-content">
        <div className="cases-hero-text-content">
          <h1 className="cases-hero-main-headline">
            From ambition to execution — see our client cases
          </h1>
        </div>

        <div className="cases-hero-case-info">
          {heroCases.map((caseItem, index) => (
            <div
              key={index}
              className={`cases-hero-case-text ${index === currentCase ? 'active' : ''}`}
            >
              <h3 className="cases-hero-case-title">{caseItem.title}</h3>
              <p className="cases-hero-case-description">{caseItem.description}</p>
              <a href={caseItem.linkUrl} className="cases-hero-case-link">
                View case
              </a>
            </div>
          ))}
        </div>

        <nav className="cases-hero-nav" aria-label="Case navigation">
          {heroCases.map((_, index) => (
            <button
              key={index}
              onClick={() => goToCase(index)}
              className={`cases-hero-nav-dot ${index === currentCase ? 'active' : ''}`}
              aria-label={`Go to case ${index + 1}`}
              aria-current={index === currentCase ? 'true' : 'false'}
            />
          ))}
        </nav>
      </div>
    </section>
  );
}
