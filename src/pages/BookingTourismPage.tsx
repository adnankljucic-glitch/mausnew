import HeroServicesWrapper from '../components/HeroServicesWrapper';
import IndustriesReadySection from '../components/IndustriesReadySection';
import BookingTourismHero from '../components/industries/BookingTourismHero';
import BookingTourismSections from '../components/industries/BookingTourismSections';

export default function BookingTourismPage() {
  return (
    <>
      <HeroServicesWrapper variant="industries">
        <BookingTourismHero />
      </HeroServicesWrapper>
      <BookingTourismSections />
      <IndustriesReadySection />
    </>
  );
}
