import RunEventsHero from '../components/RunEventsHero';
import RunEventsSections from '../components/RunEventsSections';
import HeroServicesWrapper from '../components/HeroServicesWrapper';
import IndustriesReadySection from '../components/IndustriesReadySection';

export default function RunEventsPage() {
  return (
    <>
      <HeroServicesWrapper variant="industries">
        <RunEventsHero />
      </HeroServicesWrapper>

      <RunEventsSections />

      <IndustriesReadySection />
    </>
  );
}
