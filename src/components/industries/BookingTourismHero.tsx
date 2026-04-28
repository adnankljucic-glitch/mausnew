import { motion } from 'framer-motion';
import ScrollIndicator from '../ScrollIndicator';

export default function BookingTourismHero() {
  return (
    <section className="ai-hero">
      <img
        className="case-study-hero-media"
        src="/drone.webp"
        alt="Booking & Tourism"
        style={{ position: 'absolute', inset: 0, zIndex: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div
        className="case-study-hero-overlay"
        style={{ backgroundColor: '#020F2A', opacity: 0.6, zIndex: 1 }}
      />
      <div className="manyone-grid ai-hero-content" style={{ justifyContent: 'flex-end', paddingBottom: '10vh' }}>
        <motion.h1
          className="ai-hero-headline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          Booking platforms built<br />for scale and experience
        </motion.h1>
        <motion.p
          className="ai-hero-subheadline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
        >
          From real-time availability engines and channel managers to loyalty platforms and dynamic pricing — we build the digital infrastructure that modern travel and tourism businesses rely on.
        </motion.p>
      </div>
      <ScrollIndicator />
    </section>
  );
}
