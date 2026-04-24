import HealthcareHero from '../components/HealthcareHero';
import HeroServicesWrapper from '../components/HeroServicesWrapper';
import DedicatedTeamBanner from '../components/DedicatedTeamBanner';
import WorkSection from '../components/worksection';
import IndustriesReadySection from '../components/IndustriesReadySection';

export default function HealthcarePage() {
  return (
    <>
      <HeroServicesWrapper variant="industries">
        <HealthcareHero />
      </HeroServicesWrapper>

      <DedicatedTeamBanner />

      <WorkSection />

      <IndustriesReadySection />
    </>
  );
}
