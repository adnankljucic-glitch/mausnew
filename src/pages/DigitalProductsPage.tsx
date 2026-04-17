import DigitalProductsHero from '../components/DigitalProductsHero';
import HeroServicesWrapper from '../components/HeroServicesWrapper';
import DigitalProductsBentoSection from '../components/DigitalProductsBentoSection';
import SoftwareEngineeringSection from '../components/SoftwareEngineeringSection';
import LegacyModernizationServiceSection from '../components/LegacyModernizationServiceSection';
import DigitalProductsServiceSection from '../components/DigitalProductsServiceSection';
import CoreOfferingsSection from '../components/CoreOfferingsSection';
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

export default function DigitalProductsPage() {
  return (
    <>
      <HeroServicesWrapper variant="yellow">
        <DigitalProductsHero />
      </HeroServicesWrapper>

      <DigitalProductsBentoSection />

      <SectionDivider />

      <SoftwareEngineeringSection />

      <SectionDivider />

      <LegacyModernizationServiceSection />

      <SectionDivider />

      <DigitalProductsServiceSection />

      <SectionDivider />

      <CoreOfferingsSection />

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
