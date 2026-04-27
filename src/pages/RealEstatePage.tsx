import HeroServicesWrapper from '../components/HeroServicesWrapper';
import IndustriesReadySection from '../components/IndustriesReadySection';
import RealEstateHero from '../components/industries/RealEstateHero';
import RealEstateSections from '../components/industries/RealEstateSections';

export default function RealEstatePage() {
  return (
    <>
      <HeroServicesWrapper variant="industries">
        <RealEstateHero />
      </HeroServicesWrapper>
      <RealEstateSections />
      <IndustriesReadySection />
    </>
  );
}
