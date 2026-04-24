import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const expertiseCards = [
  {
    num: '01',
    category: 'Patient-Centered Care',
    title: 'Human-first digital experiences',
    body: 'Healthcare is personal. We design user-friendly platforms that strengthen communication between patients and providers — interfaces that feel intuitive at every touchpoint.',
    tags: ['Patient Portals', 'UX Research', 'Accessibility'],
  },
  {
    num: '02',
    category: 'Data Integration & Analytics',
    title: 'A unified view of patient health',
    body: 'We bring together disparate sources — EHR systems, monitoring devices, lab results — into one coherent view that enables better diagnoses and personalised treatment plans.',
    tags: ['HL7 / FHIR', 'Analytics', 'Interoperability'],
  },
  {
    num: '03',
    category: 'Compliance & Security',
    title: 'Secure by design, compliant by default',
    body: 'Patient data is sacred. We build software that meets healthcare regulatory standards from day one — GDPR, NIS2, and ethical data handling aren\'t afterthoughts. They\'re foundations.',
    tags: ['GDPR', 'NIS2', 'ISO 27001'],
  },
  {
    num: '04',
    category: 'AI & Emerging Technologies',
    title: 'Innovation that improves outcomes',
    body: 'From AI-assisted diagnostics to IoT-based patient monitoring — we integrate advanced technologies that deliver measurable clinical value. Not demos, but deployed systems that scale.',
    tags: ['AI / ML', 'IoT', 'Predictive Analytics'],
  },
];

const capabilities = [
  {
    num: '01',
    title: 'Digital Strategy',
    desc: 'Turning healthcare ambitions into concrete, executable digital roadmaps.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <circle cx="20" cy="20" r="16" />
        <path d="M4 20h32M20 4v32" />
        <path d="M20 4a16 16 0 0 1 0 32M20 4a16 16 0 0 0 0 32" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'IT Architecture',
    desc: 'Scalable, composable systems designed for the long run and regulatory demands.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <rect x="5" y="5" width="12" height="12" />
        <rect x="23" y="5" width="12" height="12" />
        <rect x="5" y="23" width="12" height="12" />
        <rect x="23" y="23" width="12" height="12" />
        <path d="M17 11h6M11 17v6M29 17v6M17 29h6" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Systems Integration',
    desc: 'Connecting EHRs, medical devices, and third-party services into coherent platforms.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <circle cx="8" cy="20" r="4" />
        <circle cx="32" cy="10" r="4" />
        <circle cx="32" cy="30" r="4" />
        <path d="M12 20l16-8M12 20l16 8" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Cross-Platform Apps',
    desc: 'One codebase, every device. Flutter and React delivering native-grade experiences.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <rect x="3" y="6" width="24" height="18" rx="1" />
        <rect x="23" y="15" width="14" height="22" rx="2" />
        <path d="M3 21h24" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Native Apps',
    desc: 'iOS and Android apps built with Swift and Kotlin when performance matters most.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <rect x="10" y="3" width="20" height="34" rx="2.5" />
        <path d="M17 7h6M19 32h2" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'AI & IoT',
    desc: 'Intelligent systems and connected devices turning clinical data into actionable insight.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <circle cx="20" cy="20" r="5" />
        <circle cx="20" cy="7" r="2" />
        <circle cx="20" cy="33" r="2" />
        <circle cx="7" cy="20" r="2" />
        <circle cx="33" cy="20" r="2" />
        <path d="M20 9v6M20 25v6M9 20h6M25 20h6" />
      </svg>
    ),
  },
];

const techStack = ['FHIR / HL7', 'Azure Health', '.NET 8', 'React', 'Flutter', 'Kubernetes', 'Power BI'];

function FadeIn({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}

export default function HealthcareSections() {
  const expertiseRef = useRef<HTMLElement>(null);
  const capRef = useRef<HTMLElement>(null);
  const caseRef = useRef<HTMLElement>(null);
  const expertiseInView = useInView(expertiseRef, { once: true, amount: 0.05 });
  const capInView = useInView(capRef, { once: true, amount: 0.05 });
  const caseInView = useInView(caseRef, { once: true, amount: 0.1 });

  return (
    <>
      {/* ── LANDSCAPE INTRO ── */}
      <section className="hc-intro">
        <div className="manyone-grid hc-intro-grid">
          <FadeIn>
            <span className="hc-section-label">01 — Healthcare</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="hc-intro-headline">
              A more complex world — and <em>greater potential</em> than ever.
            </h2>
            <div className="hc-intro-body">
              <p>Healthcare is evolving fast. Digital self-service, big data, and AI are reshaping everything from diagnostics to preventive care and public health. New possibilities emerge — but so does complexity.</p>
              <p>We understand healthcare is both about prevention and cure. About loneliness, pandemics, and precision medicine. About using vast amounts of data to personalise treatment, and AI to take care of the routine — so clinicians can focus on people.</p>
              <p>Standing in the middle of this complexity is you. And you need to make something digital happen. That's where we come in.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── EXPERTISE ── */}
      <section ref={expertiseRef} className="hc-expertise">
        <div className="manyone-grid">
          <motion.div
            className="hc-expertise-header"
            initial={{ opacity: 0, y: 20 }}
            animate={expertiseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="hc-eyebrow">Expertise</p>
            <h2 className="hc-expertise-headline">Engineered for healthcare,<br />not experiments.</h2>
            <p className="hc-expertise-lead">
              We combine deep clinical domain knowledge with real-world software engineering —
              delivering systems that hospitals, caregivers, and patients actually rely on every day.
            </p>
          </motion.div>

          <div className="hc-expertise-grid">
            {expertiseCards.map((card, i) => (
              <motion.div
                key={i}
                className="hc-exp-card"
                initial={{ opacity: 0, y: 30 }}
                animate={expertiseInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 + i * 0.08 }}
              >
                <span className="hc-exp-num">{card.num}</span>
                <p className="hc-exp-cat">{card.category}</p>
                <h3 className="hc-exp-title">{card.title}</h3>
                <p className="hc-exp-body">{card.body}</p>
                <div className="hc-exp-tags">
                  {card.tags.map((tag) => (
                    <span key={tag} className="hc-exp-tag">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section ref={capRef} className="hc-capabilities">
        <div className="manyone-grid">
          <motion.div
            className="hc-capabilities-header"
            initial={{ opacity: 0, y: 20 }}
            animate={capInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="hc-eyebrow hc-eyebrow">Capabilities</p>
            <h2 className="hc-capabilities-headline">Everything you need to build digital healthcare.</h2>
            <p className="hc-capabilities-lead">
              A full-spectrum team delivering strategy, architecture, and engineering across platforms —
              one partner for the entire lifecycle.
            </p>
          </motion.div>

          <div className="hc-cap-grid">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                className="hc-cap-item"
                initial={{ opacity: 0, y: 24 }}
                animate={capInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 + i * 0.07 }}
              >
                <span className="hc-cap-num">{cap.num}</span>
                <div className="hc-cap-icon">{cap.icon}</div>
                <h3 className="hc-cap-title">{cap.title}</h3>
                <p className="hc-cap-desc">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROVEN RESULTS / CASE ── */}
      <motion.section
        ref={caseRef}
        className="pillar-row pillar-row-dark"
        initial="hidden"
        animate={caseInView ? 'visible' : 'hidden'}
      >
        <div className="manyone-grid">
          <div className="pillar-row-inner">
            <motion.div
              className="pillar-row-content"
              initial={{ opacity: 0, y: 20 }}
              animate={caseInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="pillar-row-eyebrow">Case — AI &amp; Healthcare</p>
              <h2 className="pillar-row-headline">Systematic Healthcare</h2>
              <p className="pillar-row-intro">
                We partnered with Systematic — one of Scandinavia's largest healthcare software firms — to develop
                systems used in hospitals across the region.
              </p>
              <p className="pillar-row-intro">
                Through our work on CURA, we transformed homecare documentation with automated form-filling,
                letting caregivers focus on patient care instead of paperwork. The result: reduced administrative
                overhead, improved accuracy, and seamless integration with existing healthcare systems.
              </p>
              <Link to="/cases" className="ready-cta-button" style={{ marginTop: '8px' }}>Read the case</Link>
            </motion.div>

            <motion.div
              className="pillar-row-media"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={caseInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
              <video
                src="https://media.maus.ba/media/ghshptkb/intro_hosipital.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="pillar-row-image"
              />
              <div className="pillar-row-image-overlay">
                <div className="pillar-row-image-overlay-content">
                  <h3 className="pillar-row-image-title">Systematic Healthcare</h3>
                  <p className="pillar-row-image-subtitle">AI-powered homecare documentation</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
