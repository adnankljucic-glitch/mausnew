import { motion } from 'framer-motion';

const phases = [
  {
    phase: 'PHASE 1',
    title: 'AI & prototyping',
    bullets: ['Idea generation', 'Rapid market testing'],
    active: false,
  },
  {
    phase: 'PHASE 2',
    title: 'MAUS architecture',
    bullets: ['Validation', 'Security', 'Integration'],
    active: true,
  },
  {
    phase: 'PHASE 3',
    title: 'Scaling',
    bullets: ['A platform that', 'carries the business'],
    active: false,
  },
];

export default function ExpertiseIntroSection() {
  return (
    <section className="exp-intro-section">
      <div className="manyone-grid">
        <motion.div
          className="exp-intro-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="exp-intro-headline">
            The <em className="exp-intro-em">hybrid</em> future.
          </h2>
          <p className="exp-intro-sub">
            It's not AI <em>or</em> expertise. AI is used for lightning-fast validation and market
            testing. Experts build the solid foundation that can carry the business as it
            grows. That's how MAUS works.
          </p>
        </motion.div>

        <div className="exp-phase-cards">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.phase}
              className={`exp-phase-card${phase.active ? ' exp-phase-card--active' : ''}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="exp-phase-label">{phase.phase}</p>
              <h3 className="service-card-title">{phase.title}</h3>
              <ul className="exp-phase-bullets">
                {phase.bullets.map((b) => (
                  <li key={b} className="exp-phase-bullet">{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
