import ScalePerformanceHero from '../components/ScalePerformanceHero';
import HeroServicesWrapper from '../components/HeroServicesWrapper';
import ScalePerformanceBentoSection from '../components/ScalePerformanceBentoSection';
import ScalePerformanceOptimizationSection from '../components/ScalePerformanceOptimizationSection';
import ScalePerformanceInfrastructureSection from '../components/ScalePerformanceInfrastructureSection';
import ScalePerformanceDataSection from '../components/ScalePerformanceDataSection';
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

export default function ScalePerformancePage() {
  return (
    <>
      <HeroServicesWrapper variant="yellow">
        <ScalePerformanceHero />
      </HeroServicesWrapper>

      <ScalePerformanceBentoSection />

      <SectionDivider />

      <ScalePerformanceOptimizationSection />

      <SectionDivider />

      <ScalePerformanceInfrastructureSection />

      <SectionDivider />

      <ScalePerformanceDataSection />

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
