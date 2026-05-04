import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import ScrollIndicator from '../ScrollIndicator';

export default function IoTHero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="ai-hero">
      <AnimatePresence>
        {!videoLoaded && (
          <motion.img
            key="fallback"
            src="/fallback.webp"
            alt=""
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            style={{ position: 'absolute', inset: 0, zIndex: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
        )}
      </AnimatePresence>
      <motion.video
        ref={videoRef}
        className="case-study-hero-media"
        src="https://ttycsupkjrsqjvqaxtca.supabase.co/storage/v1/object/public/MAUS%20VIDEOS/smart.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlayThrough={() => setVideoLoaded(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: videoLoaded ? 1 : 0 }}
        transition={{ duration: 0.6 }}
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
          Connected devices,<br />intelligent systems
        </motion.h1>
        <motion.p
          className="ai-hero-subheadline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
        >
          From embedded firmware and sensor networks to real-time dashboards and predictive maintenance — we build IoT platforms that turn raw device data into operational intelligence at scale.
        </motion.p>
      </div>
      <ScrollIndicator />
    </section>
  );
}
