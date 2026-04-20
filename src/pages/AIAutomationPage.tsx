import AIAutomationHero from '../components/AIAutomationHero';
import HeroServicesWrapper from '../components/HeroServicesWrapper';
import AIServicesBentoSection from '../components/AIServicesBentoSection';
import AIAutomationServiceSection from '../components/AIAutomationServiceSection';
import LegacyModernizationServiceSection from '../components/LegacyModernizationServiceSection';
import AISoftwareEngineeringSection from '../components/AISoftwareEngineeringSection';
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

      <AIAutomationServiceSection />

      <SectionDivider />

      <LegacyModernizationServiceSection />

      <SectionDivider />

      <AISoftwareEngineeringSection />

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
