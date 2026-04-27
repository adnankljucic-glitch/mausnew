import HeroServicesWrapper from '../components/HeroServicesWrapper';
import IndustriesReadySection from '../components/IndustriesReadySection';
import FintechHero from '../components/industries/FintechHero';
import FintechSections from '../components/industries/FintechSections';

export default function FintechPage() {
  return (
    <>
      <HeroServicesWrapper variant="industries">
        <FintechHero />
      </HeroServicesWrapper>
      <FintechSections />
      <IndustriesReadySection />
    </>
  );
}
