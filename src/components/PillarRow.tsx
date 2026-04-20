import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useRef } from 'react';

export interface PillarBulletFlat {
  text: string;
}

export interface PillarBulletTitled {
  title: string;
  description: string;
}

export interface PillarRowProps {
  variant: 'dark' | 'light';
  reverse?: boolean;
  eyebrow?: string;
  headline: string;
  intro: string;
  bullets?: PillarBulletFlat[];
  bulletsTitled?: PillarBulletTitled[];
  keyTech?: string;
  image: string;
  imageOverlayTitle?: string;
  imageOverlaySubtitle?: string;
  imageAlt?: string;
}

export default function PillarRow({
  variant,
  reverse = false,
  eyebrow,
  headline,
  intro,
  bullets,
  bulletsTitled,
  keyTech,
  image,
  imageOverlayTitle,
  imageOverlaySubtitle,
  imageAlt,
}: PillarRowProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 } },
  };

  const rowClass = `pillar-row pillar-row-${variant} ${reverse ? 'pillar-row-reverse' : ''}`;

  return (
    <motion.section
      ref={sectionRef}
      className={rowClass}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <div className="manyone-grid">
        <div className="pillar-row-inner">
          <motion.div className="pillar-row-content" variants={contentVariants}>
            {eyebrow && <p className="pillar-row-eyebrow">{eyebrow}</p>}
            <h2 className="pillar-row-headline">{headline}</h2>
            <p className="pillar-row-intro">{intro}</p>

            {bullets && bullets.length > 0 && (
              <ul className="pillar-row-bullets-flat">
                {bullets.map((bullet, idx) => (
                  <li key={idx} className="pillar-row-bullet-flat">{bullet.text}</li>
                ))}
              </ul>
            )}

            {bulletsTitled && bulletsTitled.length > 0 && (
              <div className="pillar-row-bullets-titled">
                {bulletsTitled.map((bullet, idx) => (
                  <motion.div
                    key={idx}
                    className="pillar-row-bullet-titled"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 + idx * 0.1 }}
                  >
                    <div className="pillar-row-bullet-icon">
                      <ChevronRight size={16} strokeWidth={1.5} />
                    </div>
                    <div className="pillar-row-bullet-content">
                      <span className="pillar-row-bullet-title">{bullet.title}</span>
                      <span className="pillar-row-bullet-description">{bullet.description}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {keyTech && (
              <div className="pillar-row-tech">
                <span className="pillar-row-tech-label">Key technologies</span>
                <ul className="pillar-row-tech-pills">
                  {keyTech.split(' · ').map((tech, idx) => (
                    <li key={idx} className="pillar-row-tech-pill">{tech}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>

          <motion.div
            ref={imageRef}
            className="pillar-row-media"
            variants={imageVariants}
          >
            <motion.img
              src={image}
              alt={imageAlt || headline}
              className="pillar-row-image"
              style={{ y }}
            />
            <div className="pillar-row-image-overlay">
              {imageOverlayTitle && (
                <div className="pillar-row-image-overlay-content">
                  <h3 className="pillar-row-image-title">{imageOverlayTitle}</h3>
                  {imageOverlaySubtitle && (
                    <p className="pillar-row-image-subtitle">{imageOverlaySubtitle}</p>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
