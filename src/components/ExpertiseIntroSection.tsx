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
    bullets: ['A platform that carries the business', 'High-availability infrastructure built to grow', 'Performance optimisation at every layer', 'Scalable architecture with zero single points of failure'],
    active: false,
  },
];

function SmartIcon() {
  return (
    <svg width="44" height="40" viewBox="0 0 120 110" overflow="visible" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle fill="rgba(255,255,255,0.2)" cx="18" cy="12" r="2"/>
      <circle fill="#00c9a7" cx="104" cy="14" r="1.8"/>
      <circle fill="rgba(255,255,255,0.2)" cx="12" cy="28" r="1.5"/>

      <rect fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" x="28" y="16" width="64" height="72" rx="3"/>
      <circle fill="rgba(255,255,255,0.75)" cx="28" cy="28" r="2"/>
      <circle fill="rgba(255,255,255,0.75)" cx="28" cy="38" r="2"/>
      <circle fill="rgba(255,255,255,0.75)" cx="28" cy="48" r="2"/>

      <rect fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" strokeLinecap="round" x="36" y="24" width="48" height="28" rx="2"/>
      <line stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" strokeLinecap="round" x1="36" y1="36" x2="84" y2="36"/>
      <rect fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" strokeLinecap="round" x="36" y="40" width="18" height="10" rx="1"/>
      <line stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" strokeLinecap="round" x1="58" y1="43" x2="82" y2="43"/>
      <line stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" strokeLinecap="round" x1="58" y1="47" x2="76" y2="47"/>
      <line stroke="#00c9a7" strokeWidth="1.4" strokeLinecap="round" x1="36" y1="66" x2="68" y2="66"/>

      <g transform="translate(76, 60) rotate(-40)">
        <rect fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" strokeLinecap="round" x="-3" y="-11" width="6" height="13" rx="1"/>
        <path fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" strokeLinecap="round" d="M-3 2 L0 7 L3 2"/>
        <line stroke="#00c9a7" strokeWidth="1.4" strokeLinecap="round" x1="-3" y1="0" x2="3" y2="0"/>
      </g>

      <line stroke="#00c9a7" strokeWidth="3" strokeLinecap="round" x1="30" y1="98" x2="90" y2="98"/>
      <circle fill="rgba(255,255,255,0.2)" cx="22" cy="98" r="2.5"/>
      <circle fill="rgba(255,255,255,0.2)" cx="98" cy="98" r="2"/>
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
              {i === 0 && (
                <div className="exp-phase-icon-wrap">
                  <span className="exp-phase-smart-icon" aria-hidden="true">
                    <SmartIcon />
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
