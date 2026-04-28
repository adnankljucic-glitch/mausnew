import ExpertiseHero from '../components/ExpertiseHero';
import HeroServicesWrapper from '../components/HeroServicesWrapper';
import ExpertiseIntroSection from '../components/ExpertiseIntroSection';
import ExpertisePillarsHero from '../components/ExpertisePillarsHero';
import OutcomesSection from '../components/OutcomesSection';
import ProcessAccordion from '../components/ProcessAccordion';
import ReadySection from '../components/ReadySection';
export default function ExpertisePage() {
  return (
    <>
      <HeroServicesWrapper variant="expertise">
        <ExpertiseHero />
      </HeroServicesWrapper>
      <ExpertiseIntroSection />
      <ExpertisePillarsHero />
      <OutcomesSection backgroundColor="#F7F8FA" />
      <ProcessAccordion />
      <ReadySection />
    </>
  );
}
