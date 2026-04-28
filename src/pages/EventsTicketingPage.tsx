import HeroServicesWrapper from '../components/HeroServicesWrapper';
import IndustriesReadySection from '../components/IndustriesReadySection';
import EventsTicketingHero from '../components/industries/EventsTicketingHero';
import EventsTicketingSections from '../components/industries/EventsTicketingSections';

export default function EventsTicketingPage() {
  return (
    <>
      <HeroServicesWrapper variant="industries">
        <EventsTicketingHero />
      </HeroServicesWrapper>
      <EventsTicketingSections />
      <IndustriesReadySection />
    </>
  );
}
