import StrategicAdvisoryHero from '../components/StrategicAdvisoryHero';
import HeroServicesWrapper from '../components/HeroServicesWrapper';
import StrategicSolutionsSection from '../components/StrategicSolutionsSection';
import ProcessSection from '../components/ProcessSection';
import ProcessAccordion from '../components/ProcessAccordion';
import { ServicesSectionStatic } from '../components/home';

export default function StrategicAdvisoryPage() {
  return (
    <>
      <HeroServicesWrapper variant="yellow">
        <StrategicAdvisoryHero />
      </HeroServicesWrapper>

      <StrategicSolutionsSection />

      <ProcessSection />

      <ProcessAccordion
        items={[
          {
            title: "How do you bridge the gap between business and IT?",
            content: "We act as the technical translator, ensuring business vision is backed by feasible engineering."
          },
          {
            title: "Do you provide the teams to execute?",
            content: "Yes, we offer specialized, senior-level engineers who integrate directly into your workflow."
          },
          {
            title: "What is the first step?",
            content: "A deep-dive audit to align technical possibilities with your commercial roadmap."
          }
        ]}
      />

      <HeroServicesWrapper variant="default" autoHeight>
        <ServicesSectionStatic />
      </HeroServicesWrapper>
    </>
  );
}
