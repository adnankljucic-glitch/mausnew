import { motion } from 'framer-motion';
import ScrollIndicator from './ScrollIndicator';

export default function DeltaAccessHero() {
  return (
    <section className="ai-hero">
      <img
        src="/aibusiness.webp"
        alt="Delta Access real estate AI platform"
        className="case-study-hero-media"
        style={{ position: 'absolute', inset: 0, zIndex: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />

      <div
        className="case-study-hero-overlay"
        style={{ backgroundColor: '#060E2B', opacity: 0.72, zIndex: 1 }}
      />

      <div className="manyone-grid ai-hero-content" style={{ justifyContent: 'flex-end', paddingBottom: '10vh' }}>
        <motion.p
          style={{
            fontFamily: 'Barlow, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.55)',
            fontWeight: 600,
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Cases
          <span style={{ opacity: 0.35 }}>/</span>
          Delta Access
        </motion.p>

        <motion.h1
          className="ai-hero-headline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          Bringing AI to real estate SaaS — across platforms, products, and workflows
        </motion.h1>

        <motion.p
          className="ai-hero-subheadline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
        >
          A long-term product development partnership with ISPINIT and Delta Access — extending their European real estate platforms with AI automation, modern architecture, and next-generation user workflows.
        </motion.p>
      </div>

      <ScrollIndicator />
    </section>
  );
}
