import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface IndustryIntroSectionProps {
  label: string;
  headline: React.ReactNode;
  body: string[];
}

export default function IndustryIntroSection({ label, headline, body }: IndustryIntroSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="industry-intro-section">
      <div className="manyone-grid">
        <div className="pillar-row-inner industry-intro-inner">
          <motion.div
            className="industry-intro-label-col"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="hc-section-label">{label}</span>
          </motion.div>
          <motion.div
            className="industry-intro-content"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.08 }}
          >
            <h2 className="hc-intro-headline">{headline}</h2>
            <div className="hc-intro-body">
              {body.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
