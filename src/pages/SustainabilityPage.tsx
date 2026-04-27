import HeroServicesWrapper from '../components/HeroServicesWrapper';
import IndustriesReadySection from '../components/IndustriesReadySection';
import SustainabilityHero from '../components/industries/SustainabilityHero';
import SustainabilitySections from '../components/industries/SustainabilitySections';

export default function SustainabilityPage() {
  return (
    <>
      <HeroServicesWrapper variant="industries">
        <SustainabilityHero />
      </HeroServicesWrapper>
      <SustainabilitySections />
      <IndustriesReadySection />
    </>
  );
}
