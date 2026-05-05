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
    bullets: ['A platform that carries the business', 'High-availability infrastructure built to grow', 'Performance optimisation at every layer'],
    active: false,
  },
];

function ArchitectureIcon() {
  return (
    <svg width="58" height="58" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" x="4" y="6" width="44" height="30" rx="2.5"/>
      <rect fill="none" stroke="white" strokeWidth="1.1" strokeLinecap="round" x="8" y="10" width="36" height="22" rx="1.5"/>
      <line stroke="#00c9a7" strokeWidth="1.6" strokeLinecap="round" x1="12" y1="16" x2="20" y2="16"/>
      <line stroke="white" strokeWidth="1.3" strokeLinecap="round" x1="22" y1="16" x2="34" y2="16"/>
      <line stroke="white" strokeWidth="1.3" strokeLinecap="round" x1="14" y1="20" x2="30" y2="20"/>
      <line stroke="#00c9a7" strokeWidth="1.6" strokeLinecap="round" x1="14" y1="24" x2="18" y2="24"/>
      <line stroke="white" strokeWidth="1.3" strokeLinecap="round" x1="20" y1="24" x2="32" y2="24"/>
      <line stroke="white" strokeWidth="1.3" strokeLinecap="round" x1="12" y1="28" x2="24" y2="28"/>
      <line stroke="white" strokeWidth="1.5" strokeLinecap="round" x1="26" y1="36" x2="26" y2="43"/>
      <line stroke="white" strokeWidth="1.5" strokeLinecap="round" x1="18" y1="43" x2="34" y2="43"/>
      <circle fill="#00c9a7" cx="40" cy="13" r="2.2"/>
    </svg>
  );
}

function SmartIcon() {
  return (
    <svg width="58" height="58" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" x="7" y="4" width="32" height="40" rx="2.5"/>
      <circle fill="white" cx="7" cy="13" r="1.6"/>
      <circle fill="white" cx="7" cy="21" r="1.6"/>
      <circle fill="white" cx="7" cy="29" r="1.6"/>
      <rect fill="none" stroke="white" strokeWidth="1.4" strokeLinecap="round" x="13" y="10" width="20" height="12" rx="1.5"/>
      <line stroke="white" strokeWidth="1.4" strokeLinecap="round" x1="13" y1="17" x2="33" y2="17"/>
      <rect fill="none" stroke="white" strokeWidth="1.4" strokeLinecap="round" x="13" y="26" width="8" height="8" rx="1.2"/>
      <line stroke="white" strokeWidth="1.3" strokeLinecap="round" x1="13" y1="28.5" x2="16" y2="31.5"/>
      <line stroke="white" strokeWidth="1.3" strokeLinecap="round" x1="16" y1="31.5" x2="21" y2="26"/>
      <line stroke="white" strokeWidth="1.4" strokeLinecap="round" x1="24" y1="28" x2="33" y2="28"/>
      <line stroke="white" strokeWidth="1.4" strokeLinecap="round" x1="24" y1="31.5" x2="31" y2="31.5"/>
      <line stroke="#00c9a7" strokeWidth="2.2" strokeLinecap="round" x1="13" y1="40" x2="28" y2="40"/>
      <circle fill="#00c9a7" cx="30.5" cy="40" r="1.4"/>
      <g transform="translate(37, 35) rotate(-38)">
        <rect fill="none" stroke="white" strokeWidth="1.4" strokeLinecap="round" x="-2.5" y="-9" width="5" height="11" rx="1"/>
        <path fill="none" stroke="white" strokeWidth="1.4" strokeLinecap="round" d="M-2.5 2 L0 6.5 L2.5 2"/>
        <line stroke="#00c9a7" strokeWidth="2" strokeLinecap="round" x1="-2.5" y1="0.5" x2="2.5" y2="0.5"/>
      </g>
    </svg>
  );
}

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
              {(i === 0 || i === 1) && (
                <div className="exp-phase-icon-wrap">
                  <span className="exp-phase-smart-icon" aria-hidden="true">
                    {i === 0 ? <SmartIcon /> : <ArchitectureIcon />}
                  </span>
                </div>
              )}
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
