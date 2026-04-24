import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

// ── Data ───────────────────────────────────────────────────────────────────

const phases = [
  {
    num: '01',
    category: 'Plan',
    title: 'End-to-end event management',
    body: 'Centralized tools for agendas, speakers, sponsors, and team workflows. Drag-and-drop builders and unified dashboards for multi-day, multi-track events of any complexity.',
    tags: ['Agenda Builder', 'Ticketing & Registration', 'Marketing Campaigns', 'Gamification'],
  },
  {
    num: '02',
    category: 'Execute',
    title: 'On-site execution at scale',
    body: 'Sub-8-second check-ins at scale. Branded white-label mobile apps serving as the central hub for attendee engagement — networking, live chats, session schedules, and gamification.',
    tags: ['Self-service Kiosks', 'Badge Printing', 'Mobile Event App', 'Lead Retrieval'],
  },
  {
    num: '03',
    category: 'Analyze',
    title: 'Post-event intelligence',
    body: 'Comprehensive reporting that turns every event into a learning loop — revenue tracking, attendee behavior, session performance, and sponsor ROI in a single coherent view.',
    tags: ['Revenue Analytics', 'Engagement Heatmaps', 'Sponsor ROI', 'Retention Tracking'],
  },
  {
    num: '04',
    category: 'Engage',
    title: 'AI-powered personalization',
    body: 'The Event Intelligence Cloud (EIC) surfaces recommendations for networking, content, and revenue opportunities — giving organizers data-driven leverage at every touchpoint.',
    tags: ['Matchmaking AI', 'Session Recommendations', 'Revenue Optimization', 'Real-time Insights'],
  },
];

const capabilities = [
  {
    num: '01',
    title: 'Cloud Architecture',
    desc: 'Distributed, scalable infrastructure handling thousands of concurrent check-ins without breaking stride.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path d="M10 28a7 7 0 0 1-.5-14 9 9 0 1 1 17.8 2.5A6 6 0 0 1 30 28z" />
        <path d="M16 34v-6M20 34v-6M24 34v-6" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Mobile Apps (White-label)',
    desc: 'Branded iOS and Android apps — one per event, fully configurable, serving as the attendee hub.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <rect x="10" y="3" width="20" height="34" rx="2.5" />
        <path d="M17 7h6M19 32h2" />
        <rect x="14" y="13" width="12" height="8" rx="1" />
        <path d="M14 24h6M14 27h9" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Real-time Check-in',
    desc: 'Sub-8-second check-ins via kiosks, staffed desks, and mobile — with offline-capable fallback.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <circle cx="20" cy="20" r="15" />
        <path d="M20 8v12l7 4" />
        <path d="M13 27l3-3" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Ticketing & Payments',
    desc: 'Flexible ticket types, discount logic, group bookings, and integrated payment processing.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <rect x="5" y="11" width="30" height="20" rx="2" />
        <path d="M5 17h30M11 25h6M24 25h5" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Gamification Engine',
    desc: 'Points, badges, leaderboards, and challenges woven across sessions, booths, and networking.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path d="M20 6l4 8 9 1.5-6.5 6.5 1.5 9L20 27l-8 4 1.5-9L7 15.5 16 14z" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Analytics & Reporting',
    desc: 'Live and post-event dashboards covering revenue, engagement, session performance, and sponsor ROI.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path d="M4 34h32" />
        <path d="M8 34V22M15 34V14M22 34V10M29 34V18" />
        <circle cx="29" cy="18" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
];

const aiAgents = [
  {
    title: 'Networking & Matchmaking',
    desc: 'Connects attendees based on shared goals, professional background, and behavioral signals from the event.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <circle cx="10" cy="12" r="4" />
        <circle cx="22" cy="12" r="4" />
        <circle cx="16" cy="23" r="4" />
        <path d="M12 14l4 5M20 14l-4 5" />
      </svg>
    ),
  },
  {
    title: 'Content Personalization',
    desc: 'Recommends sessions matched to each attendee\'s profile, interests, and in-event behavior patterns.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <rect x="5" y="6" width="22" height="20" rx="2" />
        <path d="M5 11h22M10 16h12M10 20h8" />
      </svg>
    ),
  },
  {
    title: 'Revenue Optimization',
    desc: 'Surfaces upsell moments, optimizes ticket conversion funnels, and improves sponsor package positioning.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <path d="M4 28L12 18l6 4 10-12" />
        <path d="M22 10h6v6" />
      </svg>
    ),
  },
  {
    title: 'Performance Analytics',
    desc: 'Tracks engagement in real-time and surfaces what\'s working — session by session, hour by hour.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <circle cx="16" cy="16" r="12" />
        <path d="M16 4v12l8 4" />
      </svg>
    ),
  },
];

const techStack = ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Flutter', 'Stripe', 'GraphQL', 'Redis'];

// ── Helpers ────────────────────────────────────────────────────────────────

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

// ── Component ──────────────────────────────────────────────────────────────

export default function RunEventsSections() {
  const phasesRef    = useRef<HTMLElement>(null);
  const capRef       = useRef<HTMLElement>(null);
  const eicRef       = useRef<HTMLElement>(null);
  const outcomesRef  = useRef<HTMLElement>(null);

  const phasesInView   = useInView(phasesRef,   { once: true, amount: 0.05 });
  const capInView      = useInView(capRef,       { once: true, amount: 0.05 });
  const eicInView      = useInView(eicRef,       { once: true, amount: 0.05 });
  const outcomesInView = useInView(outcomesRef,  { once: true, amount: 0.05 });

  return (
    <>
      {/* ── 01 — INTRO / VISION ─────────────────────────────────────────── */}
      <section className="hc-intro">
        <div className="manyone-grid hc-intro-grid">
          <FadeIn>
            <span className="hc-section-label">01 — The Vision</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="hc-intro-headline">
              One platform for the <em>entire event lifecycle</em>.
            </h2>
            <div className="hc-intro-body">
              <p>
                run.events envisioned a modern, cloud-based platform capable of handling every aspect of event
                management — from planning to execution and analytics. Over five years, our teams worked closely
                together, transforming raw ideas and early wireframes into a polished, scalable product.
              </p>
              <p>
                From day one the goal was clear: create an intuitive, powerful platform that removes friction
                for organizers and improves experiences for attendees. The result is a unified suite that
                replaces multiple disconnected tools with a single, AI-augmented ecosystem.
              </p>
              <p>
                Today, run.events helps professional organizers plan, sell, execute, and analyze events of any
                size — with gamification, real-time intelligence, and data-driven insights baked into every workflow.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────────── */}
      <section style={{ background: '#F7F8FA', borderTop: '1px solid #E3E6EB', borderBottom: '1px solid #E3E6EB' }}>
        <div className="manyone-grid">
          <div className="re-stats-grid">
            {[
              { value: '<8s', label: 'Check-in time at scale' },
              { value: '3',   label: 'Lifecycle phases unified' },
              { value: '4+',  label: 'Specialized AI agents' },
              { value: '5 yrs', label: 'Ongoing partnership' },
            ].map((s) => (
              <FadeIn key={s.label} className="re-stat">
                <p className="re-stat-value">{s.value}</p>
                <p className="re-stat-label">{s.label}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 02 — LIFECYCLE PHASES ────────────────────────────────────────── */}
      <section ref={phasesRef} className="hc-expertise">
        <div className="manyone-grid">
          <motion.div
            className="hc-expertise-header"
            initial={{ opacity: 0, y: 20 }}
            animate={phasesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="hc-eyebrow">Platform Architecture</p>
            <h2 className="hc-expertise-headline">
              Built around the full event lifecycle.
            </h2>
            <p className="hc-expertise-lead">
              From early planning to post-event insights, run.events provides a structured approach that
              connects every stage into one cohesive experience — for organizers and attendees alike.
            </p>
          </motion.div>

          <div className="hc-expertise-grid">
            {phases.map((card, i) => (
              <motion.div
                key={i}
                className="hc-exp-card"
                initial={{ opacity: 0, y: 30 }}
                animate={phasesInView ? { opacity: 1, y: 0 } : {}}
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

          <motion.div
            className="hc-tech-row"
            initial={{ opacity: 0 }}
            animate={phasesInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
          >
            {techStack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 03 — CAPABILITIES ────────────────────────────────────────────── */}
      <section ref={capRef} className="hc-capabilities">
        <div className="manyone-grid">
          <motion.div
            className="hc-capabilities-header"
            initial={{ opacity: 0, y: 20 }}
            animate={capInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="hc-eyebrow">Capabilities</p>
            <h2 className="hc-capabilities-headline">
              Everything you need to run events that scale.
            </h2>
            <p className="hc-capabilities-lead">
              A full-spectrum team delivering strategy, architecture, and engineering across the
              entire event stack — one partner for the entire product lifecycle.
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

      {/* ── 04 — EVENT INTELLIGENCE CLOUD (dark section) ─────────────────── */}
      <section ref={eicRef} className="re-eic">
        <div className="re-eic-grid-overlay" aria-hidden="true" />
        <div className="manyone-grid re-eic-content">
          <motion.div
            className="re-eic-header"
            initial={{ opacity: 0, y: 20 }}
            animate={eicInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="hc-eyebrow hc-eyebrow--light">Event Intelligence Cloud</p>
            <h2 className="re-eic-headline">
              AI that works <em>alongside organizers</em>,<br />not around them.
            </h2>
            <p className="re-eic-lead">
              EIC was built to solve real challenges event organizers face every day: understanding attendee
              behavior, improving engagement, and making smarter decisions based on data — not intuition.
              Recommendations that stay fully under organizer control.
            </p>
          </motion.div>

          <div className="re-eic-agents">
            {aiAgents.map((agent, i) => (
              <motion.div
                key={i}
                className="re-eic-agent"
                initial={{ opacity: 0, y: 24 }}
                animate={eicInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 + i * 0.1 }}
              >
                <span className="re-eic-agent-icon">{agent.icon}</span>
                <h3 className="re-eic-agent-title">{agent.title}</h3>
                <p className="re-eic-agent-desc">{agent.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05 — OUTCOMES ────────────────────────────────────────────────── */}
      <section ref={outcomesRef} className="re-outcomes">
        <div className="manyone-grid">
          <motion.div
            className="re-outcomes-header"
            initial={{ opacity: 0, y: 20 }}
            animate={outcomesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="hc-eyebrow">Outcomes</p>
            <h2 className="hc-capabilities-headline">
              A partnership measured in <em>continuous improvement</em>.
            </h2>
            <p className="hc-capabilities-lead">
              The result isn't just a product launch — it's a compounding platform that makes every event
              smarter than the last, creating a continuous improvement cycle for organizers.
            </p>
          </motion.div>

          <div className="re-outcomes-grid">
            {[
              {
                label: 'For Organizers',
                title: 'Data-driven decisions, not guesswork.',
                body: 'Complex datasets transformed into clear, actionable insights — which sessions perform, how attendees move through the venue, which channels convert, and where revenue opportunities exist. Strategies refined in real time.',
              },
              {
                label: 'For Attendees',
                title: 'A personalized, frictionless experience.',
                body: 'Sub-8-second check-ins, personalized session recommendations, relevant networking matches, and gamified engagement throughout the event. Less waiting, more value — on every screen and at every touchpoint.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="re-outcome-card"
                initial={{ opacity: 0, y: 28 }}
                animate={outcomesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 + i * 0.12 }}
              >
                <p className="re-outcome-label">{item.label}</p>
                <h3 className="re-outcome-title">{item.title}</h3>
                <p className="re-outcome-body">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 06 — CASE SPOTLIGHT (pillar-row dark) ────────────────────────── */}
      <motion.section
        className="pillar-row pillar-row-dark"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="manyone-grid">
          <div className="pillar-row-inner">
            <motion.div
              className="pillar-row-content"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="pillar-row-eyebrow">Partnership — 5 Years</p>
              <h2 className="pillar-row-headline">run.events</h2>
              <p className="pillar-row-intro">
                What started as wireframes became a full cloud platform used by professional event organizers
                to manage thousands of attendees — planning, ticketing, execution, and post-event analytics in one place.
              </p>
              <p className="pillar-row-intro">
                The Event Intelligence Cloud layer now gives organizers AI-driven matchmaking, content
                personalization, and revenue optimization tools that improve with every event.
              </p>
              <Link to="/discovery" className="ready-cta-button" style={{ marginTop: '8px' }}>
                Start a conversation
              </Link>
            </motion.div>

            <motion.div
              className="pillar-row-media"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
              <video
                src="https://ttycsupkjrsqjvqaxtca.supabase.co/storage/v1/object/public/MAUS%20VIDEOS/runevents_intro.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="pillar-row-image"
              />
              <div className="pillar-row-image-overlay">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h3 className="pillar-row-image-title">run.events</h3>
                  <p className="pillar-row-image-subtitle">Full lifecycle event management platform</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
