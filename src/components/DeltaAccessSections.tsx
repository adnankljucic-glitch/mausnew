import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ImageWithSkeleton } from './ImageWithSkeleton';
import 'swiper/css';
import 'swiper/css/free-mode';

// ── Data ───────────────────────────────────────────────────────────────────

const contributions = [
  {
    num: '01',
    title: 'Platform Extension & Feature Development',
    desc: 'Ongoing feature expansion of argo®web and Mara Hub — adding new modules, refining existing workflows, and shipping faster without sacrificing stability.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <rect x="6" y="6" width="28" height="28" rx="2" />
        <path d="M6 14h28M13 6v8M27 6v8" />
        <path d="M12 21h16M12 26h10" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'AI & Automation Integration',
    desc: 'Design and implementation of AI-powered modules directly inside existing user workflows — from intelligent search to automated task generation and smart email drafting.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <circle cx="20" cy="20" r="12" />
        <path d="M20 8v12l8 4" />
        <path d="M12 28l4-4M28 28l-4-4" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Architecture Modernization',
    desc: 'Technical stack updates across platforms — improving scalability, reducing maintenance overhead, and laying groundwork for LLM-powered features and agentic workflows.',
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
    num: '04',
    title: 'Microsoft Teams Integration',
    desc: 'A smart AI chatbot embedded directly in Microsoft Teams — letting real estate teams create tasks, draft emails, and surface insights without ever leaving their existing workspace.',
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
    title: 'Automated Task Creation',
    desc: 'The Teams bot reads discussions and documents, then automatically generates structured Planner tasks — eliminating manual follow-up and reducing missed actions.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <rect x="5" y="6" width="22" height="20" rx="2" />
        <path d="M5 11h22M10 16h12M10 20h8" />
        <path d="M14 25l3 3 6-6" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: 'Smart Email Drafting',
    desc: 'Drafts structured, professional emails from search results or summaries — giving agents a head start on client communication without switching tools.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <rect x="4" y="8" width="24" height="18" rx="2" />
        <path d="M4 10l12 9 12-9" />
      </svg>
    ),
  },
  {
    title: 'Contextual Intelligence',
    desc: 'Surfaces relevant property data, summaries, and workflow recommendations in real time — right inside the tools teams already use every day.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <circle cx="16" cy="14" r="8" />
        <path d="M16 6v8l5 3" />
        <path d="M10 24l-4 4M22 24l4 4" />
      </svg>
    ),
  },
  {
    title: 'Agentic Workflow Layer',
    desc: 'A scalable foundation for future LLM-powered agents — enabling copilot experiences, automated reporting, and multi-step reasoning across the real estate platform.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <path d="M4 28L12 18l6 4 10-12" />
        <path d="M22 10h6v6" />
      </svg>
    ),
  },
];

const productScreenshots = [
  { img: '/devanalytics.webp',   label: 'argo®web Platform' },
  { img: '/dashboard.webp',      label: 'Mara Hub Dashboard' },
  { img: '/analytucs.webp',      label: 'AI Analytics Layer' },
  { img: '/terminal.webp',       label: 'Teams Bot Integration' },
];

// ── Helpers ────────────────────────────────────────────────────────────────

function SocialTrustSection() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  return (
    <section className="re-social-trust">
      <div className="manyone-grid">

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
              <span className="re-social-trust-eyebrow">Platform in action</span>
            </div>
            <h2 className="re-social-trust-heading">See how it looks.</h2>
          </div>

          <div className="re-social-trust-nav">
            <button
              className="re-social-trust-nav-btn"
              onClick={() => swiperInstance?.slidePrev()}
              disabled={atStart}
              aria-label="Previous"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
            </button>
            <button
              className="re-social-trust-nav-btn"
              onClick={() => swiperInstance?.slideNext()}
              disabled={atEnd}
              aria-label="Next"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>

        <div className="re-social-trust-carousel-wrap">
          <Swiper
            modules={[FreeMode]}
            onSwiper={setSwiperInstance}
            onSlideChange={(s) => { atStart !== s.isBeginning && setAtStart(s.isBeginning); atEnd !== s.isEnd && setAtEnd(s.isEnd); }}
            onReachBeginning={() => setAtStart(true)}
            onReachEnd={() => setAtEnd(true)}
            onFromEdge={() => { setAtStart(false); setAtEnd(false); }}
            spaceBetween={20}
            slidesPerView={1.3}
            freeMode={{ enabled: true, sticky: true }}
            grabCursor
            breakpoints={{
              640: { slidesPerView: 1.8, spaceBetween: 20 },
              900: { slidesPerView: 2.5, spaceBetween: 24 },
              1280: { slidesPerView: 2.5, spaceBetween: 28 },
            }}
          >
            {productScreenshots.map((item, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  className="re-social-trust-card"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.65, ease: 'easeOut', delay: i * 0.08 }}
                >
                  <div className="re-social-trust-card-media">
                    <ImageWithSkeleton src={item.img} alt={item.label} className="re-social-trust-card-img" loading="lazy" />
                    <div className="re-social-trust-card-overlay" />
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}

// ── Component ──────────────────────────────────────────────────────────────

export default function DeltaAccessSections() {
  const phasesRef   = useRef<HTMLElement>(null);
  const capRef      = useRef<HTMLElement>(null);
  const eicRef      = useRef<HTMLElement>(null);
  const outcomesRef = useRef<HTMLElement>(null);

  const [expandedProduct, setExpandedProduct] = useState<number | null>(null);

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
              { label: 'Industry',    value: 'Real Estate SaaS' },
              { label: 'Engagement',  value: 'Long-term partnership' },
              { label: 'Platform',    value: 'Web & Microsoft Teams' },
              { label: 'Scope',       value: 'AI, product & architecture' },
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
      <section ref={phasesRef} className="re-platform">
        <div className="manyone-grid">
          <div className="re-platform-inner">

            {/* LEFT */}
            <motion.div
              className="re-platform-left"
              initial={{ opacity: 0, y: 28 }}
              animate={phasesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <div className="re-platform-eyebrow-row">
                <span className="re-platform-rule" />
                <span className="re-platform-eyebrow">The Partnership</span>
              </div>

              <h2 className="re-platform-headline">
                A fully integrated dev<br />&amp; innovation partner.
              </h2>

              <div className="re-platform-vision">
                <p>
                  ISPINIT and Delta Access deliver real estate software solutions across Europe. As their platforms evolved, they needed more than a vendor — they needed an embedded partner who could extend existing products, ship new AI capabilities, and modernize the technical foundation without slowing down the roadmap.
                </p>
                <p>
                  MAUS became a core part of their development team. Over an ongoing engagement, we've worked across argo®web and Mara Hub — adding features, refining UX, updating architecture, and building AI-powered modules that slot directly into the workflows their teams already use.
                </p>
                <p>
                  The result is a suite of platforms that has grown from capable SaaS tools into an intelligent, AI-augmented ecosystem — ready for the next generation of real estate operations across European markets.
                </p>
              </div>

              <div className="re-platform-stats">
                {[
                  { value: '2+',      label: 'Products evolved' },
                  { value: 'EU',      label: 'Multi-market reach' },
                  { value: 'Teams',   label: 'AI inside MS Teams' },
                  { value: 'LLM',     label: 'Ready architecture' },
                ].map((s) => (
                  <div key={s.label} className="re-platform-stat">
                    <p className="re-platform-stat-value">{s.value}</p>
                    <p className="re-platform-stat-label">{s.label}</p>
                  </div>
                ))}
              </div>

              <ul className="re-platform-features">
                {[
                  {
                    icon: (
                      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" width={18} height={18}>
                        <rect x="2" y="4" width="16" height="13" rx="1.5" />
                        <path d="M2 8h16M6 2v3M14 2v3" />
                      </svg>
                    ),
                    title: 'argo®web platform development',
                    desc: 'Continuous feature expansion, UX improvements, and architecture updates across Delta Access\'s core real estate management platform.',
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" width={18} height={18}>
                        <path d="M4 16l3-4 3 2 4-6" />
                        <circle cx="16" cy="4" r="2" />
                        <path d="M14.5 4H3" />
                      </svg>
                    ),
                    title: 'Mara Hub product evolution',
                    desc: 'New modules, refined workflows, and data integrations that extend the platform\'s reach across European real estate markets.',
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" width={18} height={18}>
                        <rect x="5" y="2" width="10" height="16" rx="1.5" />
                        <path d="M8 5h4M9 15h2" />
                        <rect x="7" y="8" width="6" height="4" rx="0.5" />
                      </svg>
                    ),
                    title: 'AI chatbot in Microsoft Teams',
                    desc: 'Smart automation embedded where teams already work — creating tasks, drafting emails, and surfacing insights without tool-switching.',
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" width={18} height={18}>
                        <circle cx="10" cy="10" r="7" />
                        <path d="M10 3v7l4 2" />
                      </svg>
                    ),
                    title: 'Scalable AI foundation',
                    desc: 'Architecture designed for LLMs, copilots, and agentic workflows — so every new capability built on top moves faster than the last.',
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

            {/* RIGHT: dashboard mockup */}
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
                  <div className="re-dashboard-url">argo®web — Operations Dashboard</div>
                </div>
                <div className="re-dashboard-body">
                  <div className="re-db-stats">
                    <div className="re-db-stat-card re-db-stat-primary">
                      <p className="re-db-stat-val">12,480</p>
                      <p className="re-db-stat-lbl">Active listings</p>
                    </div>
                    <div className="re-db-stat-card">
                      <p className="re-db-stat-val re-db-green">↑ 18%</p>
                      <p className="re-db-stat-lbl">vs. last quarter</p>
                    </div>
                    <div className="re-db-stat-card">
                      <p className="re-db-stat-val">94%</p>
                      <p className="re-db-stat-lbl">Workflow automation rate</p>
                    </div>
                  </div>
                  <div className="re-db-chart-section">
                    <p className="re-db-section-label">AI task completions — last 7 days</p>
                    <div className="re-db-bars">
                      {[42, 58, 48, 74, 86, 68, 100].map((h, i) => (
                        <div key={i} className="re-db-bar-wrap">
                          <div
                            className={`re-db-bar${i === 6 ? ' re-db-bar-active' : ''}`}
                            style={{ height: `${h}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="re-db-table">
                    {[
                      { name: 'Auto-generated tasks',  val: '3,241 actions',  badge: '+34%' },
                      { name: 'AI email drafts',        val: '1,108 drafts',   badge: '+28%' },
                      { name: 'Planner integrations',   val: '892 synced',     badge: '→ Stable' },
                    ].map((row, i) => (
                      <div key={i} className="re-db-row">
                        <span className="re-db-row-name">{row.name}</span>
                        <span className="re-db-row-val">{row.val}</span>
                        <span className={['re-db-badge', row.badge.startsWith('→') ? 're-db-badge-neutral' : ''].filter(Boolean).join(' ')}>{row.badge}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 02 — PRODUCT SCREENSHOTS ────────────────────────────────────── */}
      <SocialTrustSection />

      {/* ── 03 — CONTRIBUTIONS ──────────────────────────────────────────── */}
      <section ref={capRef} className="hc-capabilities re-products-section">
        <div className="manyone-grid">
          <motion.div
            className="hc-capabilities-header"
            initial={{ opacity: 0, y: 20 }}
            animate={capInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="hc-eyebrow">What We Built</p>
            <h2 className="hc-capabilities-headline">
              Four pillars. One embedded team. Every platform.
            </h2>
            <p className="hc-capabilities-lead">
              Across ISPINIT and Delta Access, our contributions span product development, AI integration, technical modernization, and the collaboration tools their teams rely on daily.
            </p>
          </motion.div>

          <div className="re-products-grid">
            {contributions.map((item, i) => (
              <motion.div
                key={i}
                className={`re-product-item${expandedProduct === i ? ' re-product-item-expanded' : ''}`}
                initial={{ opacity: 0, y: 24 }}
                animate={capInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 + i * 0.06 }}
              >
                <div
                  className="re-product-header"
                  onClick={() => setExpandedProduct(expandedProduct === i ? null : i)}
                >
                  <div className="re-product-icon">{item.icon}</div>
                  <h3 className="re-product-title">{item.title}</h3>
                  <button className="re-product-toggle" aria-label="Toggle content">
                    {expandedProduct === i ? '−' : '+'}
                  </button>
                </div>
                <p className="re-product-desc">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04 — AI INTELLIGENCE (dark section) ─────────────────────────── */}
      <section ref={eicRef} className="re-eic">
        <div className="re-eic-grid-overlay" aria-hidden="true" />
        <div className="manyone-grid re-eic-content">
          <motion.div
            className="re-eic-header"
            initial={{ opacity: 0, y: 20 }}
            animate={eicInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="hc-eyebrow hc-eyebrow--light">AI in Microsoft Teams</p>
            <h2 className="re-eic-headline">
              AI that works <em>where real estate teams already work.</em>
            </h2>
            <p className="re-eic-lead">
              The highlight of this engagement is a smart AI chatbot embedded directly inside Microsoft Teams — purpose-built for Delta Access clients in the real estate sector. Instead of asking teams to adopt new tools, we brought automation to the tool they already live in.
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
              A platform evolution measured in <em>faster releases and smarter workflows.</em>
            </h2>
            <p className="hc-capabilities-lead">
              The result isn't a single launch — it's a compounding product partnership where every new capability makes the next one easier to build, and every automation delivers measurable value to the teams using it.
            </p>
          </motion.div>

          <div className="re-outcomes-grid">
            {[
              {
                label: 'For ISPINIT & Delta Access',
                title: 'Faster releases, less technical debt.',
                body: 'A dedicated embedded team that knows the codebase, ships without hand-holding, and continuously improves the technical foundation — so the product roadmap moves faster with every sprint, not slower.',
              },
              {
                label: 'For End Users',
                title: 'AI that removes friction, not adds it.',
                body: 'Automation built into existing workflows means real estate teams spend less time on repetitive tasks and more time on clients. No new tools to learn. No context switching. Just smarter versions of the tools they already use.',
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

    </>
  );
}
