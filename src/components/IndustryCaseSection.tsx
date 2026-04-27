import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './IndustryCaseSection.css';

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
  /** Put media on the left, text on the right */
  mediaFirst?: boolean;
  /** Background color of the text panel */
  accentColor?: string;
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
  accentColor,
}: IndustryCaseSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });

  const textPanel = (
    <motion.div
      className="ics-text-panel"
      initial={{ opacity: 0, x: mediaFirst ? 32 : -32 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="ics-text-inner">
        {eyebrow && <p className="ics-eyebrow">{eyebrow}</p>}
        <h2 className="ics-headline">{headline}</h2>
        {body.map((p, i) => (
          <p key={i} className="ics-body">{p}</p>
        ))}
        <Link to={ctaHref} className="ready-cta-button ics-cta">{ctaLabel}</Link>
      </div>
    </motion.div>
  );

  const mediaPanel = (
    <motion.div
      className="ics-media-panel"
      initial={{ opacity: 0, scale: 1.04 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
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
      <div className="ics-media-overlay" />
    </motion.div>
  );

  const isLight = !!accentColor;

  return (
    <section ref={ref} className={`ics-section${isLight ? ' ics-section--light' : ''}`} style={accentColor ? { background: accentColor } : undefined}>
      <div className={`ics-layout${mediaFirst ? ' ics-layout--media-first' : ''}`}>
        {mediaFirst ? mediaPanel : textPanel}
        {mediaFirst ? textPanel : mediaPanel}
      </div>
    </section>
  );
}
