import IndustriesHero from '../components/IndustriesHero';
import HeroServicesWrapper from '../components/HeroServicesWrapper';
import IndustriesBento from '../components/IndustriesBento';
import DedicatedTeamBanner from '../components/DedicatedTeamBanner';
import WorkSection from '../components/worksection';
import IndustriesReadySection from '../components/IndustriesReadySection';

export default function IndustriesPage() {
  return (
    <>
      <HeroServicesWrapper variant="industries">
        <IndustriesHero />
      </HeroServicesWrapper>

      <IndustriesBento />

      <DedicatedTeamBanner />

      <WorkSection />

      <IndustriesReadySection />
    </>
  );
}
