import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServicesHero from '../components/ServicesHero';
import HeroServicesWrapper from '../components/HeroServicesWrapper';
import DedicatedTeamBanner from '../components/DedicatedTeamBanner';
import ReadySection from '../components/ReadySection';
import WorkSection from '../components/worksection';
import ProcessAccordion from '../components/ProcessAccordion';

interface ServiceCard {
  title: string;
  description: string;
  image: string;
  services: string[];
  linkUrl: string;
}

const serviceCards: ServiceCard[] = [
  {
    title: "AI & Automation",
    description: "Future-proof your business with robust engineering. We modernize legacy systems, implement cutting-edge AI solutions, and secure your cloud infrastructure.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    linkUrl: "/services/ai-automation",
    services: [
      "Software Engineering",
      "AI & Automation",
      "Legacy Modernization"
    ]
  },
  {
    title: "Strategic Advisory",
    description: "Bridge business goals with execution. We provide strategic guidance and specialized teams to deliver on your vision.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
    linkUrl: "/strategic-advisory",
    services: [
      "Business Development",
      "Product and Concept Development",
      "Digital Transformation"
    ]
  },
  {
    title: "Digital Products & Experiences",
    description: "We design and build digital products users love. Apps and platforms that combine strong UX with robust technology.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    linkUrl: "/services/digital-products-ux",
    services: [
      "UX/UI Design",
      "Ticketing and booking systems",
      "Service Design"
    ]
  },
  {
    title: "Optimization & Scale",
    description: "Optimize performance, reduce friction, and scale what matters. We transform existing platforms into growth engines.",
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
    linkUrl: "/services/scale-and-performance",
    services: [
      "Performance, stability, and cost optimization",
      "Scale infrastructure, teams & processes on-demand",
      "Continuous improvement driven by data, not assumptions"
    ]
  }
];

export default function ServicesPage() {
  const solutionSectionRef = useRef<HTMLElement>(null);
  const [solutionVisible, setSolutionVisible] = useState(false);
  const serviceScrollContainerRef = useRef<HTMLDivElement>(null);
  const [serviceCanScrollLeft, setServiceCanScrollLeft] = useState(false);
  const [serviceCanScrollRight, setServiceCanScrollRight] = useState(true);
  const [serviceScrollProgress, setServiceScrollProgress] = useState(0);
  const serviceTouchStartX = useRef(0);
  const serviceTouchEndX = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !solutionVisible) {
            setSolutionVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (solutionSectionRef.current) {
      observer.observe(solutionSectionRef.current);
    }

    return () => {
      if (solutionSectionRef.current) {
        observer.unobserve(solutionSectionRef.current);
      }
    };
  }, [solutionVisible]);

  const scrollServices = (direction: 'left' | 'right') => {
    const container = serviceScrollContainerRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.85;
    const targetScroll = direction === 'left'
      ? container.scrollLeft - scrollAmount
      : container.scrollLeft + scrollAmount;

    container.scrollTo({ left: targetScroll, behavior: 'smooth' });
  };

  const updateServiceScrollState = () => {
    const container = serviceScrollContainerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setServiceCanScrollLeft(scrollLeft > 0);
    setServiceCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
    setServiceScrollProgress(Math.min(progress, 100));
  };

  const handleServiceTouchStart = (e: React.TouchEvent) => {
    serviceTouchStartX.current = e.touches[0].clientX;
  };

  const handleServiceTouchMove = (e: React.TouchEvent) => {
    serviceTouchEndX.current = e.touches[0].clientX;
  };

  const handleServiceTouchEnd = () => {
    const diff = serviceTouchStartX.current - serviceTouchEndX.current;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        scrollServices('right');
      } else {
        scrollServices('left');
      }
    }
  };

  useEffect(() => {
    const serviceContainer = serviceScrollContainerRef.current;
    if (!serviceContainer) return;

    updateServiceScrollState();
    serviceContainer.addEventListener('scroll', updateServiceScrollState);

    return () => serviceContainer.removeEventListener('scroll', updateServiceScrollState);
  }, []);

  return (
    <>
      <HeroServicesWrapper variant="yellow">
        <ServicesHero />

        <section ref={solutionSectionRef} id="services" className={`solution-section bg-transparent ${solutionVisible ? 'solution-visible' : ''}`}>
        <div className="manyone-grid">
          <h2 className="solution-headline">Explore our services</h2>
          <p className="solution-subheadline">Where business strategy meets technical execution. We don't just consult - we build.</p>

          <div
            className="service-cards-grid"
            ref={serviceScrollContainerRef}
            onTouchStart={handleServiceTouchStart}
            onTouchMove={handleServiceTouchMove}
            onTouchEnd={handleServiceTouchEnd}
          >
            {serviceCards.map((card, index) => (
              <Link key={index} to={card.linkUrl} className="service-card">
                <div className="service-card-content">
                  <h4 className="service-card-title">{card.title}</h4>
                  <p className="service-card-description">{card.description}</p>
                  <div className="service-card-services">
                    {card.services.map((service, idx) => (
                      <span key={idx} className="service-item-text">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="service-controls">
            <button
              className="service-scroll-left"
              onClick={() => scrollServices('left')}
              aria-label="Scroll left"
              disabled={!serviceCanScrollLeft}
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>

            <div className="service-progress-bar">
              <div
                className="service-progress-fill"
                style={{ width: `${serviceScrollProgress}%` }}
              ></div>
            </div>

            <button
              className="service-scroll-right"
              onClick={() => scrollServices('right')}
              aria-label="Scroll right"
              disabled={!serviceCanScrollRight}
            >
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </section>
      </HeroServicesWrapper>

      <DedicatedTeamBanner />

      <WorkSection />

      <ProcessAccordion title="Our engineering lifecycle: Built for scale" />

      <ReadySection headline="Ready to modernize your technical foundation?" />
    </>
  );
}
