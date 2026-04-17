import AIAutomationHero from '../components/AIAutomationHero';
import HeroServicesWrapper from '../components/HeroServicesWrapper';
import AIServicesBentoSection from '../components/AIServicesBentoSection';
import SoftwareEngineeringSection from '../components/SoftwareEngineeringSection';
import LegacyModernizationServiceSection from '../components/LegacyModernizationServiceSection';
import AIAutomationServiceSection from '../components/AIAutomationServiceSection';
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

export default function AIAutomationPage() {
  return (
    <>
      <HeroServicesWrapper variant="yellow">
        <AIAutomationHero />
      </HeroServicesWrapper>

      <AIServicesBentoSection />

      <SectionDivider />

      <SoftwareEngineeringSection />

      <SectionDivider />

      <LegacyModernizationServiceSection />

      <SectionDivider />

      <AIAutomationServiceSection />

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
