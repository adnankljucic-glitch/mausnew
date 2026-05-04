import CasesPageHero from '../components/CasesPageHero';
import CaseStudiesGrid from '../components/CaseStudiesGrid';
import HeroServicesWrapper from '../components/HeroServicesWrapper';

export default function CasesPage() {
  return (
    <>
      <HeroServicesWrapper variant="yellow">
        <CasesPageHero />
      </HeroServicesWrapper>
      <CaseStudiesGrid />
    </>
  );
}
