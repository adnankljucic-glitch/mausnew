import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

interface IndustryCaseSectionProps {
  eyebrow?: string;
  headline: string;
  body: string[];
  ctaLabel?: string;
  ctaHref?: string;
  videoSrc?: string;
  imageSrc?: string;
  imageAlt?: string;
  caseTitle?: string;
  caseSubtitle?: string;
  /** Swap so media is on the left and text on the right */
  mediaFirst?: boolean;
}

export default function IndustryCaseSection({
  eyebrow,
  headline,
  body,
  ctaLabel = 'Read the case',
  ctaHref = '/cases',
  videoSrc,
  imageSrc,
  imageAlt = '',
  caseTitle,
  caseSubtitle,
  mediaFirst = false,
}: IndustryCaseSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const textBlock = (
    <motion.div
      className="ics-text"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {eyebrow && <p className="ics-eyebrow">{eyebrow}</p>}
      <h2 className="ics-headline">{headline}</h2>
      {body.map((p, i) => (
        <p key={i} className="ics-body">{p}</p>
      ))}
      <Link to={ctaHref} className="ready-cta-button ics-cta">{ctaLabel}</Link>
    </motion.div>
  );

  const mediaBlock = (
    <motion.div
      className="ics-media"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
    >
      {videoSrc ? (
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="ics-media-asset"
        />
      ) : imageSrc ? (
        <img src={imageSrc} alt={imageAlt} className="ics-media-asset" />
      ) : null}
      {(caseTitle || caseSubtitle) && (
        <div className="ics-media-caption">
          {caseTitle && <p className="ics-media-title">{caseTitle}</p>}
          {caseSubtitle && <p className="ics-media-subtitle">{caseSubtitle}</p>}
        </div>
      )}
    </motion.div>
  );

  return (
    <motion.section
      ref={ref}
      className="industry-case-section"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <div className="manyone-grid">
        <div className={`ics-inner${mediaFirst ? ' ics-inner--media-first' : ''}`}>
          {mediaFirst ? mediaBlock : textBlock}
          {mediaFirst ? textBlock : mediaBlock}
        </div>
      </div>
    </motion.section>
  );
}
