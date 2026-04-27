import { motion } from 'framer-motion';
import ScrollIndicator from '../ScrollIndicator';

export default function FintechHero() {
  return (
    <section className="ai-hero">
      <img
        className="case-study-hero-media"
        src="/pay.jpg"
        alt="Fintech & Payment Systems"
        style={{ position: 'absolute', inset: 0, zIndex: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div
        className="case-study-hero-overlay"
        style={{ backgroundColor: '#040F39', opacity: 0.65, zIndex: 1 }}
      />
      <div className="manyone-grid ai-hero-content" style={{ justifyContent: 'flex-end', paddingBottom: '10vh' }}>
        <motion.h1
          className="ai-hero-headline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          Fraud-resistant fintech,<br />built for compliance
        </motion.h1>
        <motion.p
          className="ai-hero-subheadline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
        >
          From payment gateways and open banking integrations to regulatory reporting and fraud detection — we build financial software that is secure, scalable, and ready for a regulated world.
        </motion.p>
      </div>
      <ScrollIndicator />
    </section>
  );
}
