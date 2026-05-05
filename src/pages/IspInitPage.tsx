import IspInitHero from '../components/IspInitHero';
import IspInitSections from '../components/IspInitSections';
import HeroServicesWrapper from '../components/HeroServicesWrapper';
import IndustriesReadySection from '../components/IndustriesReadySection';

export default function IspInitPage() {
  return (
    <>
      <HeroServicesWrapper variant="industries">
        <IspInitHero />
      </HeroServicesWrapper>
      <IspInitSections />
      <IndustriesReadySection />
    </>
  );
}
