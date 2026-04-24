import { motion } from 'framer-motion';
import ScrollIndicator from './ScrollIndicator';

export default function RunEventsHero() {
  return (
    <section className="ai-hero">
      <video
        className="case-study-hero-media"
        src="https://ttycsupkjrsqjvqaxtca.supabase.co/storage/v1/object/public/MAUS%20VIDEOS/runevents_intro.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      />

      <div
        className="case-study-hero-overlay"
        style={{ backgroundColor: '#060E2B', opacity: 0.65, zIndex: 1 }}
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
          run.events
        </motion.p>

        <motion.h1
          className="ai-hero-headline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          From wireframes to a complete event management ecosystem
        </motion.h1>

        <motion.p
          className="ai-hero-subheadline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
        >
          A five-year partnership that transformed early ideas into a polished, scalable cloud platform — reshaping how professional organizers plan, sell, execute, and analyze events of any size.
        </motion.p>

        {/* Meta row */}
        <motion.div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0',
            marginTop: '8px',
            paddingTop: '32px',
            borderTop: '1px solid rgba(255,255,255,0.15)',
            maxWidth: '760px',
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
        >
          {[
            { label: 'Industry', value: 'Event Technology' },
            { label: 'Engagement', value: '5-year partnership' },
            { label: 'Platform', value: 'Cloud-based SaaS' },
            { label: 'Scope', value: 'Full lifecycle product' },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                flex: '1 1 140px',
                paddingRight: '32px',
                paddingBottom: '8px',
              }}
            >
              <p style={{
                fontFamily: 'Barlow, sans-serif',
                fontSize: '10px',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.45)',
                fontWeight: 600,
                marginBottom: '8px',
              }}>
                {item.label}
              </p>
              <p style={{
                fontFamily: 'Inria Serif, serif',
                fontSize: '17px',
                fontWeight: 500,
                color: '#ffffff',
                letterSpacing: '-0.01em',
              }}>
                {item.value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
