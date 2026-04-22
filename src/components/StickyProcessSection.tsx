import { useEffect, useRef, useState } from 'react';
import { Plus, Star } from 'lucide-react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  bullets: string[];
}

interface StickyProcessSectionProps {
  backgroundImageUrl?: string;
  headline?: string;
  subtext?: string;
  steps?: ProcessStep[];
  testimonial?: {
    avatarUrl: string;
    quote: string;
  };
}

const defaultSteps: ProcessStep[] = [
  {
    number: "Step 1",
    title: "Discovery & Alignment",
    description: "We map goals, constraints, and success metrics so delivery stays focused.",
    bullets: [
      "Clarify scope and priorities",
      "Identify risks early",
      "Define measurable outcomes"
    ]
  },
  {
    number: "Step 2",
    title: "Build & Iterate",
    description: "We ship in short cycles, validate with real users, and keep quality high.",
    bullets: [
      "Rapid prototypes and feedback",
      "Clean architecture from day one",
      "Transparent weekly progress"
    ]
  },
  {
    number: "Step 3",
    title: "Launch & Improve",
    description: "We deploy, monitor, and evolve the product so it keeps performing.",
    bullets: [
      "Smooth release + handover",
      "Monitoring and performance tuning",
      "Continuous improvements"
    ]
  }
];

export default function StickyProcessSection({
  backgroundImageUrl = "/aiback.webp",
  headline = "Our Process",
  subtext = "A clear, repeatable approach that turns ideas into reliable software—fast.",
  steps = defaultSteps,
  testimonial = {
    avatarUrl: "https://framerusercontent.com/images/GivTprEDFLqcYVbNElXvL3ujDs.webp",
    quote: "Elevated to industry leaders—grateful partnership."
  }
}: StickyProcessSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        threshold: 0.55,
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, [steps]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden min-h-[120svh] py-20 md:py-28"
    >
      <img
        src={backgroundImageUrl}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/25" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <h2
                className={`text-3xl md:text-5xl font-semibold tracking-tight text-white transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
                style={{ transitionDelay: '0ms' }}
              >
                {headline}
              </h2>
              <p
                className={`mt-4 text-base md:text-lg text-white/70 max-w-md transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
                style={{ transitionDelay: '100ms' }}
              >
                {subtext}
              </p>

              {testimonial && (
                <div
                  className={`mt-10 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                  }`}
                  style={{ transitionDelay: '200ms' }}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatarUrl}
                      alt=""
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5"
                          fill="rgb(221, 202, 63)"
                          color="rgb(221, 202, 63)"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-white/80 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {steps.map((step, index) => {
              const isActive = activeIndex === index;
              const delay = 300 + index * 120;

              return (
                <div
                  key={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={`rounded-2xl p-6 md:p-7 border backdrop-blur-sm transition-all duration-500 ease-out ${
                    isActive
                      ? 'opacity-100 scale-[1.01] border-white/20 bg-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.35)]'
                      : 'opacity-60 scale-100 border-white/10 bg-white/5'
                  } ${
                    isVisible ? 'translate-y-0' : 'translate-y-3'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${delay}ms` : '0ms',
                    opacity: isVisible ? undefined : 0
                  }}
                >
                  <p className="text-xs uppercase tracking-widest text-white/60">
                    {step.number}
                  </p>
                  <div className="mt-3 h-px bg-white/10" />
                  <h3 className="mt-4 text-xl md:text-2xl text-white font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-white/65 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="mt-5 space-y-3">
                    {step.bullets.map((bullet, bulletIndex) => (
                      <div key={bulletIndex} className="flex gap-3 items-start">
                        <div className="w-7 h-7 rounded-full border border-white/15 bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Plus className="w-3.5 h-3.5 text-white/50" />
                        </div>
                        <p className="text-white/70 leading-relaxed">
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
