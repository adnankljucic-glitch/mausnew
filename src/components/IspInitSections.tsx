import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ImageWithSkeleton } from './ImageWithSkeleton';
import 'swiper/css';
import 'swiper/css/free-mode';

// ── Data ───────────────────────────────────────────────────────────────────

const products = [
  {
    num: '01',
    title: 'Online Ordering',
    desc: 'Web and mobile ordering with location-specific menus, real-time availability, and seamless checkout — optimized for both walk-in and pre-order flows.',
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
    title: 'Loyalty & Rewards',
    desc: 'Points-based loyalty engine with campaign tools, personalized offers, and redemption tracking across all franchise locations.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path d="M20 6l3.5 7 7.5 1-5.5 5.3 1.3 7.7L20 23.5l-6.8 3.5 1.3-7.7L9 14l7.5-1z" />
        <path d="M20 30v6M14 34h12" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Franchise Dashboard',
    desc: 'Centralized operations hub for franchise owners — menu management, order monitoring, staff oversight, and cross-location performance reporting.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <rect x="4" y="6" width="32" height="22" rx="2" />
        <path d="M4 12h32M10 6v6M20 6v6M30 6v6" />
        <path d="M8 19h8M8 24h12" />
        <path d="M20 28v6M14 34h12" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Customer Mobile App',
    desc: 'Branded iOS app with ordering, loyalty wallet, push notifications, and location finder. White-label ready for franchise branding.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <rect x="11" y="3" width="18" height="34" rx="2.5" />
        <path d="M17 7h6M19 32h2" />
        <rect x="15" y="13" width="10" height="7" rx="1" />
        <path d="M15 23h7M15 27h10" />
      </svg>
    ),
  },
];

const aiAgents = [
  {
    title: 'Customer Segmentation',
    desc: 'Groups customers by purchase patterns, visit frequency, and loyalty tier to power targeted campaigns and personalized offers.',
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
    title: 'Menu Optimization',
    desc: 'Surfaces which products perform by location, time of day, and weather — helping owners make data-backed menu decisions.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <rect x="5" y="6" width="22" height="20" rx="2" />
        <path d="M5 11h22M10 16h12M10 20h8" />
      </svg>
    ),
  },
  {
    title: 'Campaign Performance',
    desc: 'Tracks loyalty campaign ROI, redemption rates, and customer reactivation — with suggestions for improving conversion.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <path d="M4 28L12 18l6 4 10-12" />
        <path d="M22 10h6v6" />
      </svg>
    ),
  },
  {
    title: 'Sales Forecasting',
    desc: 'Predicts demand by location and season, helping franchise owners plan staffing and inventory more accurately.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <circle cx="16" cy="16" r="12" />
        <path d="M16 4v12l8 4" />
      </svg>
    ),
  },
];

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
  { img: '/ispinit1.webp', label: 'Online Ordering Flow' },
  { img: '/ispinit2.webp', label: 'Loyalty Dashboard' },
  { img: '/ispinit3.webp', label: 'Menu Management' },
  { img: '/ispinit4.webp', label: 'Mobile App Experience' },
];

// ── Product Showcase Section ───────────────────────────────────────────────

function SocialTrustSection() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    setAtStart(swiper.isBeginning);
    setAtEnd(swiper.isEnd);
  }, []);

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
              <span className="re-social-trust-eyebrow">Product in action</span>
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
            onSlideChange={handleSlideChange}
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

export default function IspInitSections() {
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
              { label: 'Industry', value: 'Food & Beverage' },
              { label: 'Engagement', value: '2-year build' },
              { label: 'Platform', value: 'Web & Mobile SaaS' },
              { label: 'Scope', value: 'Full product from concept' },
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
                <span className="re-platform-eyebrow">Our Platform</span>
              </div>

              <h2 className="re-platform-headline">
                A complete franchise<br />management ecosystem.
              </h2>

              <div className="re-platform-vision">
                <p>
                  ispinit envisioned a modern platform capable of managing every aspect of an ice cream franchise — from ordering and loyalty to multi-location operations and analytics. Over two years, our team built the product from scratch, turning early sketches into a production-ready system.
                </p>
                <p>
                  From the beginning, the goal was simple: give franchise owners the tools to run smarter operations and give customers a seamless ordering and loyalty experience. The result is a unified platform that replaces disconnected tools with one coherent, data-driven product.
                </p>
                <p>
                  Today, ispinit helps franchise owners manage menus, process orders, run loyalty campaigns, and analyze performance across all locations — from a single dashboard.
                </p>
              </div>

              <div className="re-platform-stats">
                {[
                  { value: '2 yrs',   label: 'Product build from zero' },
                  { value: 'Multi',   label: 'Location support' },
                  { value: 'iOS + Web', label: 'Customer touchpoints' },
                  { value: '1',       label: 'Unified dashboard' },
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
                    title: 'Online ordering & menu management',
                    desc: 'Location-specific menus, real-time availability, and order flows optimized for walk-in and pre-order.',
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" width={18} height={18}>
                        <path d="M4 16l3-4 3 2 4-6" />
                        <circle cx="16" cy="4" r="2" />
                        <path d="M14.5 4H3" />
                      </svg>
                    ),
                    title: 'Loyalty & rewards engine',
                    desc: 'Points, campaigns, and personalized offers that keep customers coming back across all locations.',
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" width={18} height={18}>
                        <rect x="5" y="2" width="10" height="16" rx="1.5" />
                        <path d="M8 5h4M9 15h2" />
                        <rect x="7" y="8" width="6" height="4" rx="0.5" />
                      </svg>
                    ),
                    title: 'Customer mobile app',
                    desc: 'Branded iOS app with ordering, loyalty tracking, and push notifications — fully white-label ready.',
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" width={18} height={18}>
                        <circle cx="10" cy="10" r="7" />
                        <path d="M10 3v7l4 2" />
                      </svg>
                    ),
                    title: 'Multi-location operations',
                    desc: 'Centralized dashboard for franchise owners to manage staff, inventory signals, and sales across every outlet.',
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
                  <div className="re-dashboard-url">ispinit — Franchise Dashboard</div>
                </div>
                <div className="re-dashboard-body">
                  <div className="re-db-stats">
                    <div className="re-db-stat-card re-db-stat-primary">
                      <p className="re-db-stat-val">3,841</p>
                      <p className="re-db-stat-lbl">Orders this month</p>
                    </div>
                    <div className="re-db-stat-card">
                      <p className="re-db-stat-val re-db-green">↑ 31%</p>
                      <p className="re-db-stat-lbl">vs. last month</p>
                    </div>
                    <div className="re-db-stat-card">
                      <p className="re-db-stat-val">4.8★</p>
                      <p className="re-db-stat-lbl">Avg. customer rating</p>
                    </div>
                  </div>
                  <div className="re-db-chart-section">
                    <p className="re-db-section-label">Orders — last 7 days</p>
                    <div className="re-db-bars">
                      {[45, 60, 50, 72, 88, 70, 100].map((h, i) => (
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
                      { name: 'Chocolate Scoop',     val: '1,204 orders',  badge: '+22%' },
                      { name: 'Loyalty Redemptions', val: '847 sessions',  badge: '+19%' },
                      { name: 'Online Pre-orders',   val: '631 orders',    badge: '→ Stable' },
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
              Four modules. One platform. Every scoop.
            </h2>
            <p className="hc-capabilities-lead">
              ispinit is built as a suite of tightly integrated modules — each purpose-built for a specific part of running a modern ice cream franchise.
            </p>
          </motion.div>

          <div className="re-products-grid">
            {products.map((product, i) => (
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
                  <div className="re-product-icon">{product.icon}</div>
                  <h3 className="re-product-title">{product.title}</h3>
                  <button className="re-product-toggle" aria-label="Toggle content">
                    {expandedProduct === i ? '−' : '+'}
                  </button>
                </div>
                <p className="re-product-desc">{product.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04 — LOYALTY INTELLIGENCE (dark section) ─────────────────────── */}
      <section ref={eicRef} className="re-eic">
        <div className="re-eic-grid-overlay" aria-hidden="true" />
        <div className="manyone-grid re-eic-content">
          <motion.div
            className="re-eic-header"
            initial={{ opacity: 0, y: 20 }}
            animate={eicInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="hc-eyebrow hc-eyebrow--light">Loyalty Intelligence</p>
            <h2 className="re-eic-headline">
              AI that works <em>alongside franchise owners,</em> not around them.
            </h2>
            <p className="re-eic-lead">
              The ispinit intelligence layer helps owners understand customer behavior, optimize campaigns, and make smarter decisions based on purchase data — not gut feeling. Recommendations stay fully under owner control.
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
              A platform measured in <em>returning customers</em>.
            </h2>
            <p className="hc-capabilities-lead">
              The result isn't just a product launch — it's a compounding system that makes every campaign smarter, every operation leaner, and every customer visit more likely to become a habit.
            </p>
          </motion.div>

          <div className="re-outcomes-grid">
            {[
              {
                label: 'For Franchise Owners',
                title: 'Data-driven decisions, not guesswork.',
                body: 'Complex sales data transformed into clear, actionable insights — which products perform, how customers move through the loyalty funnel, and where revenue opportunities exist. Strategies refined in real time across every location.',
              },
              {
                label: 'For Customers',
                title: 'A seamless, rewarding experience.',
                body: 'Fast ordering, personalized offers, and loyalty points that feel genuinely valuable. Less friction at every step — from browsing the menu to redeeming a reward — on mobile and web.',
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
