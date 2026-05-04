import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { ImageWithSkeleton } from './ImageWithSkeleton';
import { SkeletonLoader } from './SkeletonLoader';

interface CaseStudyHeroProps {
  industryLabel: string;
  headline: string;
  description: string;
  mediaUrl: string;
  mediaType: 'video' | 'image';
  backgroundColor: string;
  overlayColor: string;
  overlayOpacity: number;
}

export default function CaseStudyHero({
  industryLabel,
  headline,
  description,
  mediaUrl,
  mediaType,
  backgroundColor,
  overlayColor,
  overlayOpacity,
}: CaseStudyHeroProps) {
  const [videoReady, setVideoReady] = useState(false);
  const handleScrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="case-study-hero">
      <div className="case-study-hero-left" style={{ backgroundColor }}>
        <div className="case-study-hero-text">
          <motion.span
            className="case-study-hero-label"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            {industryLabel}
          </motion.span>

          <motion.h1
            className="case-study-hero-headline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.35 }}
          >
            {headline}
          </motion.h1>

          <motion.p
            className="case-study-hero-description"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.55 }}
          >
            {description}
          </motion.p>
        </div>

        <motion.button
          className="case-study-hero-scroll"
          onClick={handleScrollDown}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <span>SCROLL DOWN</span>
          <ArrowDown size={14} strokeWidth={2} />
        </motion.button>
      </div>

      <div className="case-study-hero-right">
        {mediaType === 'video' ? (
          <>
            {!videoReady && <SkeletonLoader />}
            <video
              className="case-study-hero-media"
              src={mediaUrl}
              autoPlay
              muted
              loop
              playsInline
              onCanPlay={() => setVideoReady(true)}
              style={{ opacity: videoReady ? 1 : 0, transition: 'opacity 0.5s ease' }}
            />
          </>
        ) : (
          <ImageWithSkeleton
            className="case-study-hero-media"
            src={mediaUrl}
            alt={headline}
          />
        )}
        <div
          className="case-study-hero-overlay"
          style={{ backgroundColor: '#0D1E21', opacity: 0.5 }}
        />
      </div>
    </section>
  );
}
