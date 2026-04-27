import HeroServicesWrapper from '../components/HeroServicesWrapper';
import IndustriesReadySection from '../components/IndustriesReadySection';
import IoTHero from '../components/industries/IoTHero';
import IoTSections from '../components/industries/IoTSections';

export default function IoTPage() {
  return (
    <>
      <HeroServicesWrapper variant="industries">
        <IoTHero />
      </HeroServicesWrapper>
      <IoTSections />
      <IndustriesReadySection />
    </>
  );
}
