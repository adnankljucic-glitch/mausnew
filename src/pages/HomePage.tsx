import { useState, useEffect, useRef } from 'react';
import AIHero from '../components/AIHero';
import WorkSection from '../components/worksection';
import HeroServicesWrapper from '../components/HeroServicesWrapper';
import Testimonials from '../components/Testimonials';
import ProcessAccordion from '../components/ProcessAccordion';
import { ServicesSection, IndustriesSection, TechnologySection } from '../components/home';

function HomePage() {
  const solutionSectionRef = useRef<HTMLDivElement>(null);
  const [solutionVisible, setSolutionVisible] = useState(false);
  const workSectionRef = useRef<HTMLDivElement>(null);
  const [workVisible, setWorkVisible] = useState(false);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !workVisible) {
            setWorkVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (workSectionRef.current) {
      observer.observe(workSectionRef.current);
    }

    return () => {
      if (workSectionRef.current) {
        observer.unobserve(workSectionRef.current);
      }
    };
  }, [workVisible]);

  return (
    <>
      <HeroServicesWrapper>
        <AIHero />
        <div ref={solutionSectionRef}>
          <ServicesSection visible={solutionVisible} />
        </div>
      </HeroServicesWrapper>

      <TechnologySection />

      <div ref={workSectionRef}>
        <IndustriesSection visible={workVisible} />
      </div>

      <ProcessAccordion
        title="Our Methodology: Engineering beyond the surface"
        items={[
          {
            title: "Deep technical diagnostics",
            content: "Before we write a single line of code, we audit. We identify the hidden architectural bottlenecks, legacy debt, and performance leaks that kill conversions. We don't guess; we use data to map your path to 100% technical health."
          },
          {
            title: "Performance-First architecture",
            content: "Design is nothing without speed. We build on a \"Secure-by-Design\" foundation, prioritizing Core Web Vitals, Schema.org, and sub-second load times. We ensure your platform is invisible to friction but highly visible to search engines and AI."
          },
          {
            title: "Scalable AI & Cloud governance",
            content: "We move beyond experiments. By deploying private, governed Azure OpenAI instances and composable cloud infrastructures, we integrate intelligence directly into your business logic. Secure, compliant, and engineered to scale with your growth."
          }
        ]}
      />

      <WorkSection />

      <Testimonials />
    </>
  );
}

export default HomePage;
