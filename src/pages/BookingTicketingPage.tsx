import HeroServicesWrapper from '../components/HeroServicesWrapper';
import IndustriesReadySection from '../components/IndustriesReadySection';
import BookingTicketingHero from '../components/industries/BookingTicketingHero';
import BookingTicketingSections from '../components/industries/BookingTicketingSections';

export default function BookingTicketingPage() {
  return (
    <>
      <HeroServicesWrapper variant="industries">
        <BookingTicketingHero />
      </HeroServicesWrapper>
      <BookingTicketingSections />
      <IndustriesReadySection />
    </>
  );
}
