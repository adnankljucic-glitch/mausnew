import { motion } from 'framer-motion';
import ScrollIndicator from '../ScrollIndicator';

export default function BookingTourismHero() {
  return (
    <section className="ai-hero">
      <video
        className="case-study-hero-media"
        src="https://ttycsupkjrsqjvqaxtca.supabase.co/storage/v1/object/public/MAUS%20VIDEOS/strand.mp4"
        poster="/drone.webp"
        autoPlay
        muted
        loop
        playsInline
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
          Datadrevet vækst<br />for turisme
        </motion.h1>
        <motion.p
          className="ai-hero-subheadline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
        >
          Værktøjer til booking, marketing og integration. Bedre drift, stærkere gæsteoplevelser, klar til fremtidens turisme.
        </motion.p>
      </div>
      <ScrollIndicator />
    </section>
  );
}
