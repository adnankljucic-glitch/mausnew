import { motion } from 'framer-motion';
import ScrollIndicator from '../ScrollIndicator';

export default function SustainabilityHero() {
  return (
    <section className="ai-hero">
      <img
        className="case-study-hero-media"
        src="https://images.pexels.com/photos/18140302/pexels-photo-18140302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Sustainability & Water Cycle"
        style={{ position: 'absolute', inset: 0, zIndex: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div
        className="case-study-hero-overlay"
        style={{ backgroundColor: '#021a12', opacity: 0.65, zIndex: 1 }}
      />
      <div className="manyone-grid ai-hero-content" style={{ justifyContent: 'flex-end', paddingBottom: '10vh' }}>
        <motion.h1
          className="ai-hero-headline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          Smart systems for a<br />sustainable future
        </motion.h1>
        <motion.p
          className="ai-hero-subheadline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
        >
          From water cycle monitoring and environmental intelligence to sustainability reporting platforms — we build the digital infrastructure that helps utilities, municipalities, and green-tech companies operate more sustainably.
        </motion.p>
      </div>
      <ScrollIndicator />
    </section>
  );
}
