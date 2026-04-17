import ExpertiseHero from '../components/ExpertiseHero';
import HeroServicesWrapper from '../components/HeroServicesWrapper';
import OutcomesSection from '../components/OutcomesSection';
import ProcessAccordion from '../components/ProcessAccordion';
import ReadySection from '../components/ReadySection';

export default function ExpertisePage() {
  return (
    <>
      <HeroServicesWrapper variant="expertise">
        <ExpertiseHero />
      </HeroServicesWrapper>

      <OutcomesSection />

      <ProcessAccordion />

      <ReadySection />
    </>
  );
}
