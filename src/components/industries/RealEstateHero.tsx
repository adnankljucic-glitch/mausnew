import { motion } from 'framer-motion';
import ScrollIndicator from '../ScrollIndicator';

export default function RealEstateHero() {
  return (
    <section className="ai-hero">
      <video
        className="case-study-hero-media"
        src="https://ttycsupkjrsqjvqaxtca.supabase.co/storage/v1/object/public/MAUS%20VIDEOS/proptech.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{ position: 'absolute', inset: 0, zIndex: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div
        className="case-study-hero-overlay"
        style={{ backgroundColor: '#0d1a10', opacity: 0.6, zIndex: 1 }}
      />
      <div className="manyone-grid ai-hero-content" style={{ justifyContent: 'flex-end', paddingBottom: '10vh' }}>
        <motion.h1
          className="ai-hero-headline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          Intelligent software<br />for modern real estate
        </motion.h1>
        <motion.p
          className="ai-hero-subheadline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
        >
          From automated valuation models and tenant management portals to property intelligence dashboards — we build PropTech platforms that give real estate companies a measurable competitive edge.
        </motion.p>
      </div>
      <ScrollIndicator />
    </section>
  );
}
