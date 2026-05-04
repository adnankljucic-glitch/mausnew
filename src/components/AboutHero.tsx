import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SkeletonLoader } from './SkeletonLoader';

export default function AboutHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="about-hero">
      {/* Video background */}
      <div className="about-hero-video-wrap">
        {!videoReady && <SkeletonLoader />}
        <video
          ref={videoRef}
          src="https://ttycsupkjrsqjvqaxtca.supabase.co/storage/v1/object/public/MAUS%20VIDEOS/2025_video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="about-hero-video"
          onCanPlay={() => setVideoReady(true)}
          style={{ opacity: videoReady ? 1 : 0, transition: 'opacity 0.5s ease' }}
        />
        <div className="about-hero-overlay" />
      </div>

      {/* Content */}
      <div className="manyone-grid about-hero-content">
        <motion.p
          className="about-hero-greeting"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Hello there,
        </motion.p>

        <motion.h1
          className="about-hero-headline"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
        >
          We're{' '}
          <em className="about-hero-name">MAUS</em>
          {', '}the engineering studio that turns{' '}
          <span className="about-hero-accent">complex problems</span>{' '}
          into software that scales.
        </motion.h1>

        <motion.div
          className="about-hero-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <a href="#story" className="about-hero-link">Our Story</a>
          <span className="about-hero-sep">·</span>
          <a href="#team" className="about-hero-link">Team</a>
          <span className="about-hero-sep">·</span>
          <a href="#values" className="about-hero-link">Values</a>
          <span className="about-hero-sep">·</span>
          <a href="#contact" className="about-hero-link">Contact</a>
        </motion.div>
      </div>
    </section>
  );
}
