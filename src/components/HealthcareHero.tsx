import { motion } from 'framer-motion';
import ScrollIndicator from './ScrollIndicator';

export default function HealthcareHero() {
  return (
    <section className="ai-hero">
      {/* Video background */}
      <video
        className="case-study-hero-media"
        src="https://ttycsupkjrsqjvqaxtca.supabase.co/storage/v1/object/public/MAUS%20VIDEOS/hospital.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      />

      {/* Overlay */}
      <div
        className="case-study-hero-overlay"
        style={{ backgroundColor: '#040F39', opacity: 0.6, zIndex: 1 }}
      />

      <div className="manyone-grid ai-hero-content" style={{ justifyContent: 'flex-end', paddingBottom: '10vh' }}>

        <motion.h1
          className="ai-hero-headline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          Secure, compliant software<br />for modern healthcare
        </motion.h1>

        <motion.p
          className="ai-hero-subheadline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
        >
          From EHR systems and patient portals to telemedicine and AI-assisted diagnostics — we build secure, compliant, human-centered software for hospitals, clinics, and healthtech companies.
        </motion.p>
      </div>

      <ScrollIndicator />
    </section>
  );
}
