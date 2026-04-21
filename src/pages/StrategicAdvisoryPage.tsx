import StrategicAdvisoryHero from '../components/StrategicAdvisoryHero';
import HeroServicesWrapper from '../components/HeroServicesWrapper';
import StrategicBentoSection from '../components/StrategicBentoSection';
import StrategicAdvisoryServiceSection from '../components/StrategicAdvisoryServiceSection';
import ProductConceptSection from '../components/ProductConceptSection';
import DigitalTransformationSection from '../components/DigitalTransformationSection';
import DedicatedTeamBanner from '../components/DedicatedTeamBanner';
import WorkSection from '../components/worksection';
import { ServicesSectionStatic } from '../components/home';

function SectionDivider() {
  return (
    <div className="section-divider-container">
      <div className="section-divider" />
    </div>
  );
}

export default function StrategicAdvisoryPage() {
  return (
    <>
      <HeroServicesWrapper variant="yellow">
        <StrategicAdvisoryHero />
      </HeroServicesWrapper>

      <StrategicBentoSection />

      <SectionDivider />

      <StrategicAdvisoryServiceSection />

      <SectionDivider />

      <ProductConceptSection />

      <SectionDivider />

      <DigitalTransformationSection />

      <SectionDivider />

      <DedicatedTeamBanner />

      <SectionDivider />

      <WorkSection />

      <HeroServicesWrapper variant="default" autoHeight>
        <ServicesSectionStatic />
      </HeroServicesWrapper>
    </>
  );
}
