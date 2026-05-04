import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollIndicator from '../ScrollIndicator';
import { SkeletonLoader } from '../SkeletonLoader';

export default function FintechHero() {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section className="ai-hero">
      {!videoReady && <SkeletonLoader />}
      <video
        style={{ position: 'absolute', inset: 0, zIndex: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: videoReady ? 1 : 0, transition: 'opacity 0.5s ease' }}
        src="https://ttycsupkjrsqjvqaxtca.supabase.co/storage/v1/object/public/MAUS%20VIDEOS/fintech.mp4"
        autoPlay
        muted
        loop
        playsInline
        onCanPlay={() => setVideoReady(true)}
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
          Strategic Payment Architecture &amp; Fintech Optimization
        </motion.h1>
        <motion.p
          className="ai-hero-subheadline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
        >
          Maximized ROI through seamless integrations, intelligent dashboards, and high-conversion UX for booking and event platforms.
        </motion.p>
      </div>
      <ScrollIndicator />
    </section>
  );
}
