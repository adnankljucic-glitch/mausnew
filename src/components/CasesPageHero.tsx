import { motion } from 'framer-motion';

export default function CasesPageHero() {
  return (
    <section className="cases-page-hero">
      <div className="manyone-grid cases-page-hero-content">
        <motion.p
          className="cases-page-hero-eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          CASE STUDIES
        </motion.p>
        <motion.h1
          className="cases-page-hero-headline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          Real results for real businesses
        </motion.h1>
        <motion.p
          className="cases-page-hero-description"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.35 }}
        >
          Explore how we've partnered with ambitious companies to transform their operations,
          accelerate growth, and build technology that delivers measurable impact.
        </motion.p>
      </div>
    </section>
  );
}
