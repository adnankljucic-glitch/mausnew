import { useState, useEffect, useRef } from 'react';
import { Plus, Star } from 'lucide-react';

interface Step {
  number: string;
  title: string;
  description: string;
  bullets: string[];
}

const steps: Step[] = [
  {
    number: "STEP 1",
    title: "Strategic Planning",
    description: "Align goals, innovate strategies, and craft a roadmap for success with our meticulous strategic planning process.",
    bullets: [
      "Align goals with precision",
      "Foster innovation in strategies",
      "Craft a detailed roadmap"
    ]
  },
  {
    number: "STEP 2",
    title: "Consulting Excellence",
    description: "Address challenges with personalized solutions. Our consulting process delivers expertise, collaboration, and client-centric strategies for success.",
    bullets: [
      "Personalized solutions for challenges",
      "Client-centric and collaborative approach",
      "Expertise-driven consulting"
    ]
  },
  {
    number: "STEP 3",
    title: "Business Catalyst",
    description: "Catalyze growth, forge strategic partnerships, and capitalize on emerging opportunities with our dynamic business development process.",
    bullets: [
      "Catalyze business expansion",
      "Forge strategic alliances",
      "Capitalize on opportunities"
    ]
  },
  {
    number: "STEP 4",
    title: "Precision Monitoring",
    description: "Utilize real-time analytics, continuous improvement initiatives, and ensure operational excellence with our precision monitoring process.",
    bullets: [
      "Real-time analytics for insights",
      "Continuous improvement focus",
      "Ensure operational excellence"
    ]
  }
];

export default function HowWeWorkSection() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-16 md:py-20 lg:py-28"
      style={{ backgroundColor: '#041432' }}
    >
      <div className="absolute inset-0">
        <img
          src="/office_kolega.webp"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(4, 20, 50, 0.65)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#041432]/40 via-[#041432]/60 to-[#041432]/80" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h2
            className={`text-white text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
            style={{ transitionDelay: '0ms' }}
          >
            Our Process
          </h2>
          <p
            className={`text-white/70 mt-4 text-base md:text-lg max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Our approach blends innovation, expertise, and client-centricity, shaping unparalleled achievements.
          </p>
        </div>

        <div
          className={`max-w-xl mx-auto mb-12 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="flex items-center gap-3">
            <img
              src="/adis.jpg"
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
            "Elevated to industry leaders—grateful partnership."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const delay = 300 + index * 100;

            return (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-7 transition-all duration-700 hover:bg-white/8 hover:border-white/20 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
                style={{
                  transitionDelay: isVisible ? `${delay}ms` : '0ms'
                }}
              >
                <p className="text-xs uppercase tracking-[0.22em] text-white/60">
                  {step.number}
                </p>
                <div className="mt-3 h-px bg-white/10" />
                <h3 className="mt-4 text-xl md:text-2xl text-white font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-white/70 leading-relaxed">
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
    </section>
  );
}
