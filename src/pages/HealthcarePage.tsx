import HealthcareHero from '../components/HealthcareHero';
import HealthcareSections from '../components/HealthcareSections';
import HeroServicesWrapper from '../components/HeroServicesWrapper';
import IndustriesReadySection from '../components/IndustriesReadySection';

export default function HealthcarePage() {
  return (
    <>
      <HeroServicesWrapper variant="industries">
        <HealthcareHero />
      </HeroServicesWrapper>

      <HealthcareSections />

      <IndustriesReadySection />
    </>
  );
}
