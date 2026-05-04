import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image?: string;
  videoUrl?: string;
  mediaType?: "image" | "video";
  posterImage?: string;
  slug?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "run.events",
    category: "Software Engineering",
    description: "Over a five-year strategic partnership, MAUS engineered run.events from initial wireframes into a polished, cloud-native enterprise platform.",
    videoUrl: "https://ttycsupkjrsqjvqaxtca.supabase.co/storage/v1/object/public/MAUS%20VIDEOS/runevents_intro.mp4",
    posterImage: "/aibusiness.webp",
    mediaType: "video",
    slug: "run-events",
  },
  {
    id: 2,
    title: "Systematic Healthcare",
    category: "AI & Automation",
    description: "We evolved a traditional SaaS platform into a predictive AI powerhouse. By bridging legacy data with modern LLM capabilities, we enabled automated market analysis, trend forecasting, and investment insight generation.",
    videoUrl: "https://ttycsupkjrsqjvqaxtca.supabase.co/storage/v1/object/public/MAUS%20VIDEOS/hospital.mp4",
    posterImage: "/hardwareanalytics.webp",
    mediaType: "video",
  },
  {
    id: 3,
    title: "Nordsee Holiday",
    category: "Agentic AI Commerce",
    description: "We're redefining the booking journey by moving away from endless filtering and toward natural conversations that lead straight to a reservation.",
    image: "/ocean.jpg",
    mediaType: "image",
  },
  {
    id: 4,
    title: "ISPINIT (Real estate SaaS)",
    category: "Legacy modernization",
    description: "Evolving traditional SaaS into an AI-first platform: Bridging legacy data with LLMs to automate market analysis and investment forecasting.",
    image: "/frankfurt.png",
    mediaType: "image",
  },
];

const WorkSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const updateScrollState = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
    setScrollProgress(Math.min(progress, 100));
  };

  const scrollCases = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.85;
    const targetScroll = direction === 'left'
      ? container.scrollLeft - scrollAmount
      : container.scrollLeft + scrollAmount;

    container.scrollTo({ left: targetScroll, behavior: 'smooth' });
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
        scrollCases('right');
      } else {
        scrollCases('left');
      }
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    updateScrollState();
    container.addEventListener('scroll', updateScrollState);

    return () => container.removeEventListener('scroll', updateScrollState);
  }, []);

  return (
    <section id="work" className="work-section">
      <div className="manyone-grid">
        <h2 className="work-headline">Proven Results. Scalable Solutions.</h2>
        <p className="work-subheadline">High-impact projects shaped through deep technical expertise and strategic collaboration.</p>

        <div
          className="cases-grid"
          ref={scrollContainerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {projects.map((project) => {
            const CardWrapper = project.slug ? Link : 'div';
            const linkProps = project.slug ? { to: `/cases/${project.slug}` } : {};

            return (
            <CardWrapper
              key={project.id}
              {...linkProps}
              className="cases-card"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="cases-card-media-wrapper">
                {project.videoUrl ? (
                  <video
                    src={project.videoUrl}
                    poster={project.posterImage}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="cases-card-media"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="cases-card-media"
                  />
                )}
                <div className="cases-card-overlay"></div>
                <div className="cases-card-content">
                  <span className="cases-card-category">{project.category}</span>
                  <h4 className="cases-card-title">{project.title}</h4>
                  <p className="cases-card-description">{project.description}</p>
                </div>
              </div>
            </CardWrapper>
          );
          })}
        </div>

        <div className="cases-controls">
          <button
            className="cases-scroll-left"
            onClick={() => scrollCases('left')}
            aria-label="Scroll left"
            disabled={!canScrollLeft}
          >
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>

          <div className="cases-progress-bar">
            <div
              className="cases-progress-fill"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>

          <button
            className="cases-scroll-right"
            onClick={() => scrollCases('right')}
            aria-label="Scroll right"
            disabled={!canScrollRight}
          >
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>
        </div>

        <div className="cases-cta-wrapper">
          <Link to="/cases" className="cases-cta">
            View all cases
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
