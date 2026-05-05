import DeltaAccessHero from '../components/DeltaAccessHero';
import DeltaAccessSections from '../components/DeltaAccessSections';
import HeroServicesWrapper from '../components/HeroServicesWrapper';
import IndustriesReadySection from '../components/IndustriesReadySection';

export default function DeltaAccessPage() {
  return (
    <>
      <HeroServicesWrapper variant="industries">
        <DeltaAccessHero />
      </HeroServicesWrapper>
      <DeltaAccessSections />
      <IndustriesReadySection />
    </>
  );
}
