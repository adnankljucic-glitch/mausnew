import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Users, Clock, Zap } from 'lucide-react';
import IndustryCaseSection from '../IndustryCaseSection';
import IndustryIntroSection from '../IndustryIntroSection';

const featureCards = [
  {
    num: '01',
    category: 'Booking',
    title: 'Booking & reservation management',
    body: 'A complete booking universe with real-time availability, capacity management, and automatic confirmations — integrated with all major booking systems.',
    tags: ['Real-Time Availability', 'Capacity Management', 'Auto-Confirmation'],
  },
  {
    num: '02',
    category: 'Data Hub',
    title: 'Data hub & analytics',
    body: 'Unique data insights into accommodation guests. Detailed reports on booking trends, channel performance, and guest behaviour — all in real time.',
    tags: ['Real-Time Data', 'Channel Performance', 'Guest Behaviour'],
  },
  {
    num: '03',
    category: 'Marketing',
    title: 'Marketing automation',
    body: 'Automated email campaigns, personalised communication, and SEO optimisation — all driven by your booking data.',
    tags: ['Email Automation', 'Personalisation', 'SEO'],
  },
  {
    num: '04',
    category: 'Guest Universe',
    title: 'Guest self-service portal',
    body: 'Guests manage bookings, payments, and consent in one branded self-service portal. Significantly reduces support enquiries.',
    tags: ['Self-Service', 'Payment Management', 'Consent'],
  },
  {
    num: '05',
    category: 'Pricing',
    title: 'Dynamic pricing',
    body: 'Advanced algorithms that adjust prices based on demand, season, and competitors — automatically increasing revenue.',
    tags: ['AI Algorithms', 'Seasonal Pricing', 'Competitor Data'],
  },
  {
    num: '06',
    category: 'Omnichannel',
    title: 'Omnichannel visibility',
    body: 'Optimise your presence across all channels — Google, Meta, email, and OTAs — from one central hub with full attribution data.',
    tags: ['Google & Meta', 'OTA Channels', 'Attribution'],
  },
];

const integrations = [
  {
    badge: 'BS',
    name: 'BookingStudio',
    desc: 'Full integration with the most widely used booking system for holiday homes and cottages. Real-time sync of availability and rates.',
  },
  {
    badge: 'TIG',
    name: 'Tiggets',
    desc: 'Seamless integration with the Tiggets ticketing platform — used by Nordic Seaplanes and many other experience businesses.',
  },
  {
    badge: 'PAY',
    name: 'Payment Gateway',
    desc: 'Integration with Nets, Stripe, QuickPay, and other providers. PCI-compliant and secure transaction handling.',
  },
  {
    badge: 'API',
    name: 'Open API',
    desc: 'Flexible REST API enabling custom integrations with CRM, PMS, and other systems as needed.',
  },
];

const datahubStats = [
  { value: 'DKK 2B+', label: 'Revenue processed', icon: TrendingUp },
  { value: '200+', label: 'Active clients', icon: Users },
  { value: '28 years', label: 'Industry experience', icon: Clock },
  { value: 'Real-time', label: 'Data synchronisation', icon: Zap },
];

export default function BookingTourismSections() {
  const featuresRef = useRef<HTMLElement>(null);
  const intRef = useRef<HTMLElement>(null);
  const datahubRef = useRef<HTMLElement>(null);
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.05 });
  const intInView = useInView(intRef, { once: true, amount: 0.05 });
  const datahubInView = useInView(datahubRef, { once: true, amount: 0.05 });

  return (
    <>
      <IndustryIntroSection
        label="04 — Booking & Tourism"
        headline={<>One unified platform for tourism and <em>accommodation</em>.</>}
        body={[
          'Our service and booking platform is built specifically for the tourism and accommodation industry. It connects your booking system with data-driven marketing, guest communication, and advanced analytics — all in one place.',
          'Whether you run holiday rentals, a campsite, a hotel, or an attraction, the platform adapts to your needs and integrates with the systems you already use.',
          'We bring booking, marketing, and data together in one platform — so you can focus on creating great experiences.',
        ]}
      />

      {/* INTEGRATIONS */}
      <section ref={intRef} className="bt-integrations-section">
        <div className="manyone-grid bt-integrations-inner">

          {/* LEFT — header + 2×2 cards */}
          <motion.div
            className="bt-int-left"
            initial={{ opacity: 0, x: -24 }}
            animate={intInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="hc-eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>Integrations</p>
            <h2 className="bt-int-headline">Plug-and-play with your existing systems.</h2>
            <p className="bt-int-lead">Deep integrations with the platforms you already rely on — no heavy lifting required.</p>

            <div className="bt-int-grid">
              {integrations.map((item, i) => (
                <motion.div
                  key={i}
                  className="bt-int-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={intInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 + i * 0.07 }}
                >
                  <span className="bt-int-badge">{item.badge}</span>
                  <h3 className="bt-int-card-name">{item.name}</h3>
                  <p className="bt-int-card-desc">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — platform dashboard mockup */}
          <motion.div
            className="bt-int-right"
            initial={{ opacity: 0, x: 32 }}
            animate={intInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <div className="bt-dashboard">
              <div className="bt-dash-chrome">
                <span className="bt-dash-dot" style={{ background: '#ff5f57' }} />
                <span className="bt-dash-dot" style={{ background: '#febc2e' }} />
                <span className="bt-dash-dot" style={{ background: '#28c840' }} />
                <span className="bt-dash-title">Platform — Overview</span>
              </div>
              <div className="bt-dash-stats">
                <div className="bt-dash-stat">
                  <div className="bt-dash-stat-val">1.284</div>
                  <div className="bt-dash-stat-lbl">BOOKINGS</div>
                </div>
                <div className="bt-dash-stat">
                  <div className="bt-dash-stat-val" style={{ color: '#1a6b5a' }}>↑ 18%</div>
                  <div className="bt-dash-stat-lbl">VS. LAST MONTH</div>
                </div>
                <div className="bt-dash-stat">
                  <div className="bt-dash-stat-val">94%</div>
                  <div className="bt-dash-stat-lbl">OCCUPANCY</div>
                </div>
              </div>
              <div className="bt-dash-chart-wrap">
                <div className="bt-dash-chart-label">BOOKINGS — LAST 7 DAYS</div>
                <div className="bt-dash-bars">
                  {[40, 55, 35, 62, 88, 70, 50].map((h, i) => (
                    <div key={i} className="bt-dash-bar-wrap">
                      <div
                        className="bt-dash-bar"
                        style={{
                          height: `${h}%`,
                          background: i === 4 ? '#1a6b5a' : '#b8d5cc',
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="bt-dash-rows">
                {[
                  { name: 'Toppen af Danmark', val: 'DKK 284.000', pct: '+22%' },
                  { name: 'Ringkøbing Fjord',  val: 'DKK 142.500', pct: '+14%' },
                  { name: 'Hvidbjerg Strand',  val: 'DKK 98.200',  pct: '+9%' },
                ].map((row, i) => (
                  <div key={i} className="bt-dash-row">
                    <span className="bt-dash-row-name">{row.name}</span>
                    <span className="bt-dash-row-right">
                      <span className="bt-dash-row-val">{row.val}</span>
                      <span className="bt-dash-row-pct">{row.pct}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* FEATURES */}
      <section ref={featuresRef} className="hc-expertise bt-features-section">
        <div className="manyone-grid">
          <motion.div
            className="hc-expertise-header"
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="hc-eyebrow">Features</p>
            <h2 className="hc-expertise-headline">Everything you need<br />in one platform.</h2>
            <p className="hc-expertise-lead">
              Built to scale with your business — from simple booking flows to advanced data-driven marketing campaigns.
            </p>
          </motion.div>

          <div className="hc-expertise-grid">
            {featureCards.map((card, i) => (
              <motion.div
                key={i}
                className="hc-exp-card"
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
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

      {/* DATA HUB STATS */}
      <section ref={datahubRef} className="hc-expertise hc-expertise--light">
        <div className="manyone-grid">
          <motion.div
            className="hc-expertise-header"
            initial={{ opacity: 0, y: 20 }}
            animate={datahubInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="hc-eyebrow">Data Hub</p>
            <h2 className="hc-expertise-headline">Unique data insights<br />into the tourism industry.</h2>
            <p className="hc-expertise-lead">
              Our Data Hub is the beating heart of the platform — providing unparalleled insight into trends, audiences, and segments across the tourism and accommodation industry. With access to aggregated data from hundreds of accommodation units, we help you understand the market, position yourself correctly, and respond quickly to change.
            </p>
          </motion.div>

          <div className="hc-expertise-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {datahubStats.map((stat, i) => (
              <motion.div
                key={i}
                className="hc-exp-card"
                initial={{ opacity: 0, y: 30 }}
                animate={datahubInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 + i * 0.08 }}
              >
                <stat.icon size={22} strokeWidth={1.5} style={{ color: '#1a6b5a', marginBottom: '14px' }} />
                <div style={{ fontSize: 'clamp(1.5rem, 2.4vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, color: '#1a6b5a' }}>
                  {stat.value}
                </div>
                <p className="hc-exp-body" style={{ marginTop: '6px', fontSize: '13px' }}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <IndustryCaseSection
        accentColor="#e8f4f0"
        eyebrow="Ready to get started?"
        headline="See the platform in action"
        body={[
          'We will show you exactly what the platform can do for your business — book a no-obligation demo today.',
          'We have helped over 200 tourism and accommodation businesses grow their direct bookings, improve guest experiences, and optimise operations through data-driven decisions.',
        ]}
        ctaLabel="Book a demo"
        ctaHref="/discovery"
        imageSrc="/drone.webp"
        imageAlt="Booking & tourism platform"
        caseTitle="Service & Booking Platform"
        caseSubtitle="Data-driven growth for tourism and accommodation"
      />
    </>
  );
}

