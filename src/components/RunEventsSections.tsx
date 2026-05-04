import { motion, useInView } from 'framer-motion';
import { useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import DedicatedTeamBanner from './DedicatedTeamBanner';

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

const products = [
  {
    num: '01',
    title: 'Attendee Management',
    desc: 'Centralised registration, CRM profiles, segmentation, and communication tools — all in one unified attendee hub.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <circle cx="15" cy="13" r="5" />
        <circle cx="28" cy="13" r="4" />
        <path d="M4 33c0-6 5-10 11-10s11 4 11 10" />
        <path d="M28 23c3 0 7 2 7 7" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Check-In & Badging',
    desc: 'Sub-8-second on-site check-in via kiosks, staffed desks, and mobile — with live badge printing and arrival dashboards.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <rect x="8" y="6" width="24" height="28" rx="2" />
        <path d="M14 13h12M14 18h8" />
        <path d="M14 25l3 3 6-6" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Speakers & Agenda',
    desc: 'Drag-and-drop agenda builder, speaker portals, session scheduling, and multi-track management for events of any scale.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <rect x="6" y="6" width="28" height="28" rx="2" />
        <path d="M6 14h28M13 6v8M27 6v8" />
        <path d="M12 21h16M12 26h10" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Event Marketing',
    desc: 'Email campaigns, landing pages, discount codes, and referral tracking — integrated directly with registration data.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <rect x="4" y="10" width="32" height="22" rx="2" />
        <path d="M4 12l16 11 16-11" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Event Mobile App',
    desc: 'White-label iOS and Android app per event — session schedules, networking, gamification, and live notifications.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <rect x="11" y="3" width="18" height="34" rx="2.5" />
        <path d="M17 7h6M19 32h2" />
        <rect x="15" y="13" width="10" height="7" rx="1" />
        <path d="M15 23h7M15 27h10" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Events CRM',
    desc: 'Full attendee lifecycle management — behavioral history, engagement scores, and sponsor lead qualification across every event.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path d="M4 34h32M8 34V22M15 34V14M22 34V10M29 34V18" />
        <circle cx="29" cy="18" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: '07',
    title: 'Expo & Booth Management',
    desc: 'Floor plan tools, exhibitor portals, lead retrieval, and booth performance analytics — linked to live attendee data.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <rect x="5" y="17" width="9" height="17" rx="1" />
        <rect x="15" y="11" width="10" height="23" rx="1" />
        <rect x="26" y="20" width="9" height="14" rx="1" />
        <path d="M4 35h32" />
      </svg>
    ),
  },
  {
    num: '08',
    title: 'Hybrid Events',
    desc: 'Seamless in-person and virtual attendee experiences — unified under one platform with shared analytics and engagement tools.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <rect x="4" y="10" width="22" height="15" rx="2" />
        <path d="M26 14l10-4v16l-10-4" />
        <path d="M10 25v5M16 25v5M8 30h16" />
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

// ── Product Showcase Data ───────────────────────────────────────────────────

const productScreenshots = [
  { img: '/dashboard.webp',     label: 'Event Dashboard' },
  { img: '/expo_000100.webp',   label: 'Expo Floor View' },
  { img: '/mobile.png',         label: 'Attendee App' },
  { img: '/analytucs.webp',     label: 'Analytics' },
  { img: '/ecs2025_1.webp',     label: 'Check-in' },
];

// ── Product Showcase Section ───────────────────────────────────────────────

function SocialTrustSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const scroll = useCallback((dir: 'left' | 'right') => {
    const el = carouselRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild
      ? (el.firstElementChild as HTMLElement).offsetWidth + 24
      : el.offsetWidth;
    el.scrollBy({ left: dir === 'right' ? cardWidth : -cardWidth, behavior: 'smooth' });
  }, []);

  const handleScroll = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.offsetWidth >= el.scrollWidth - 4);
  }, []);

  return (
    <section className="re-social-trust">
      <div className="manyone-grid">

        {/* Header row */}
        <motion.div
          className="re-social-trust-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="re-social-trust-header-left">
            <div className="re-social-trust-eyebrow-row">
              <span className="re-social-trust-rule" />
              <span className="re-social-trust-eyebrow">Product in action</span>
            </div>
            <h2 className="re-social-trust-heading">See how it looks.</h2>
          </div>

          <div className="re-social-trust-nav">
            <button
              className="re-social-trust-nav-btn"
              onClick={() => scroll('left')}
              disabled={atStart}
              aria-label="Previous"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
            </button>
            <button
              className="re-social-trust-nav-btn"
              onClick={() => scroll('right')}
              disabled={atEnd}
              aria-label="Next"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Carousel — images only */}
        <div className="re-social-trust-carousel-wrap">
          <div
            className="re-social-trust-carousel"
            ref={carouselRef}
            onScroll={handleScroll}
          >
            {productScreenshots.map((item, i) => (
              <motion.div
                key={i}
                className="re-social-trust-card"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, ease: 'easeOut', delay: i * 0.08 }}
              >
                <div className="re-social-trust-card-media">
                  <img src={item.img} alt={item.label} className="re-social-trust-card-img" />
                  <div className="re-social-trust-card-overlay" aria-hidden="true" />
                  <span className="re-social-trust-card-label">{item.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
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
      {/* ── CASE META BAR ───────────────────────────────────────────────── */}
      <section className="re-meta-bar" style={{ background: '#F7F8FA', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div className="manyone-grid">
          <div className="re-meta-bar-inner">
            {[
              { label: 'Industry', value: 'Event Technology' },
              { label: 'Engagement', value: '5-year partnership' },
              { label: 'Platform', value: 'Cloud-based SaaS' },
              { label: 'Scope', value: 'Full lifecycle product' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className="re-meta-bar-item"
                style={{ borderColor: 'rgba(0,0,0,0.1)' }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              >
                <span className="re-meta-bar-label" style={{ color: '#6b7280' }}>{item.label}</span>
                <span className="re-meta-bar-value" style={{ color: '#111111' }}>{item.value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 01 — PLATFORM SECTION ───────────────────────────────────────── */}
      <section ref={phasesRef} className="re-platform work-section">
        <div className="manyone-grid">
          <div className="re-platform-inner">

            {/* LEFT: vision text + stats + feature list */}
            <motion.div
              className="re-platform-left"
              initial={{ opacity: 0, y: 28 }}
              animate={phasesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              {/* Eyebrow */}
              <div className="re-platform-eyebrow-row">
                <span className="re-platform-rule" />
                <span className="re-platform-eyebrow">Our Platform</span>
              </div>

              {/* Headline */}
              <h2 className="re-platform-headline">
                A complete event<br />management ecosystem.
              </h2>

              {/* Vision text */}
              <div className="re-platform-vision">
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

              {/* Stats row */}
              <div className="re-platform-stats">
                {[
                  { value: '<8s',   label: 'Check-in time at scale' },
                  { value: '3',     label: 'Lifecycle phases unified' },
                  { value: '4+',    label: 'Specialized AI agents' },
                  { value: '5 yrs', label: 'Ongoing partnership' },
                ].map((s) => (
                  <div key={s.label} className="re-platform-stat">
                    <p className="re-platform-stat-value">{s.value}</p>
                    <p className="re-platform-stat-label">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Feature list */}
              <ul className="re-platform-features">
                {[
                  {
                    icon: (
                      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" width={18} height={18}>
                        <rect x="2" y="4" width="16" height="13" rx="1.5" />
                        <path d="M2 8h16M6 2v3M14 2v3" />
                      </svg>
                    ),
                    title: 'End-to-end event planning',
                    desc: 'Agendas, speakers, sponsors, ticketing, and marketing campaigns in one drag-and-drop workspace.',
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" width={18} height={18}>
                        <path d="M4 16l3-4 3 2 4-6" />
                        <circle cx="16" cy="4" r="2" />
                        <path d="M14.5 4H3" />
                      </svg>
                    ),
                    title: 'Real-time analytics & reporting',
                    desc: 'Revenue, attendee behavior, session performance, and sponsor ROI — updated live during the event.',
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" width={18} height={18}>
                        <rect x="5" y="2" width="10" height="16" rx="1.5" />
                        <path d="M8 5h4M9 15h2" />
                        <rect x="7" y="8" width="6" height="4" rx="0.5" />
                      </svg>
                    ),
                    title: 'White-label mobile app',
                    desc: 'Fully branded attendee app with session schedules, networking, gamification, and live notifications.',
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" width={18} height={18}>
                        <circle cx="10" cy="10" r="7" />
                        <path d="M10 3v7l4 2" />
                      </svg>
                    ),
                    title: 'Sub-8-second on-site check-in',
                    desc: 'Kiosks, staffed desks, and mobile check-in with real-time badge printing and live arrival dashboards.',
                  },
                ].map((f, i) => (
                  <motion.li
                    key={i}
                    className="re-platform-feature"
                    initial={{ opacity: 0, x: -12 }}
                    animate={phasesInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 + i * 0.1 }}
                  >
                    <span className="re-platform-feature-icon">{f.icon}</span>
                    <div>
                      <p className="re-platform-feature-title">{f.title}</p>
                      <p className="re-platform-feature-desc">{f.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* RIGHT: browser-framed dashboard mockup */}
            <motion.div
              className="re-platform-right"
              initial={{ opacity: 0, y: 32 }}
              animate={phasesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <div className="re-dashboard">
                <div className="re-dashboard-chrome">
                  <div className="re-dashboard-dots">
                    <span /><span /><span />
                  </div>
                  <div className="re-dashboard-url">run.events — Admin Dashboard</div>
                </div>
                <div className="re-dashboard-body">
                  <div className="re-db-stats">
                    <div className="re-db-stat-card re-db-stat-primary">
                      <p className="re-db-stat-val">1,284</p>
                      <p className="re-db-stat-lbl">Registered attendees</p>
                    </div>
                    <div className="re-db-stat-card">
                      <p className="re-db-stat-val re-db-green">↑ 22%</p>
                      <p className="re-db-stat-lbl">vs. last event</p>
                    </div>
                    <div className="re-db-stat-card">
                      <p className="re-db-stat-val">94%</p>
                      <p className="re-db-stat-lbl">Check-in rate</p>
                    </div>
                  </div>
                  <div className="re-db-chart-section">
                    <p className="re-db-section-label">Registrations — last 7 days</p>
                    <div className="re-db-bars">
                      {[38, 55, 42, 68, 90, 75, 100].map((h, i) => (
                        <div key={i} className="re-db-bar-wrap">
                          <div
                            className={`re-db-bar${i === 4 ? ' re-db-bar-active' : ''}`}
                            style={{ height: `${h}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="re-db-table">
                    {[
                      { name: 'Opening Keynote',  val: '486 attendees', badge: '+18%' },
                      { name: 'AI in Event Tech', val: '312 attendees', badge: '+14%' },
                      { name: 'Networking Lunch', val: '284 attendees', badge: '→ Stable' },
                    ].map((row, i) => (
                      <div key={i} className="re-db-row">
                        <span className="re-db-row-name">{row.name}</span>
                        <span className="re-db-row-val">{row.val}</span>
                        <span className={['re-db-badge', row.badge.startsWith('\u2192') ? 're-db-badge-neutral' : ''].filter(Boolean).join(' ')}>{row.badge}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 02b — SOCIAL TRUST ──────────────────────────────────────────── */}
      <SocialTrustSection />

      {/* ── 03 — PRODUCTS ────────────────────────────────────────────────── */}
      <section ref={capRef} className="hc-capabilities re-products-section">
        <div className="manyone-grid">
          <motion.div
            className="hc-capabilities-header"
            initial={{ opacity: 0, y: 20 }}
            animate={capInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="hc-eyebrow">Products</p>
            <h2 className="hc-capabilities-headline">
              Eight products. One platform. Every event.
            </h2>
            <p className="hc-capabilities-lead">
              run.events is built as a suite of deeply integrated modules — each one purpose-built
              for a specific job, all working together across the full event lifecycle.
            </p>
          </motion.div>

          <div className="re-products-grid">
            {products.map((product, i) => (
              <motion.div
                key={i}
                className="re-product-item"
                initial={{ opacity: 0, y: 24 }}
                animate={capInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 + i * 0.06 }}
              >
                <span className="hc-cap-num">{product.num}</span>
                <div className="re-product-icon">{product.icon}</div>
                <h3 className="re-product-title">{product.title}</h3>
                <p className="re-product-desc">{product.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03b — DEDICATED TEAM BANNER ─────────────────────────────────── */}
      <DedicatedTeamBanner />

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
