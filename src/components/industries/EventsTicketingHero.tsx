import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollIndicator from '../ScrollIndicator';
import { SkeletonLoader } from '../SkeletonLoader';

export default function EventsTicketingHero() {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section className="ai-hero">
      {!videoReady && <SkeletonLoader />}
      <video
        className="case-study-hero-media"
        src="https://ttycsupkjrsqjvqaxtca.supabase.co/storage/v1/object/public/MAUS%20VIDEOS/event.mp4"
        autoPlay
        muted
        loop
        playsInline
        onCanPlay={() => setVideoReady(true)}
        style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: videoReady ? 1 : 0, transition: 'opacity 0.5s ease' }}
      />
      <div
        className="case-study-hero-overlay"
        style={{ backgroundColor: '#040F39', opacity: 0.6, zIndex: 1 }}
      />
      <div className="manyone-grid ai-hero-content" style={{ justifyContent: 'flex-end', paddingBottom: '10vh' }}>
        <motion.h1
          className="ai-hero-headline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          Enterprise software for<br />events and ticketing
        </motion.h1>
        <motion.p
          className="ai-hero-subheadline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
        >
          Custom development for festivals, concerts, sports events, cultural venues and large conferences — no off-the-shelf products, just software built precisely for your scale and complexity.
        </motion.p>
      </div>
      <ScrollIndicator />
    </section>
  );
}
