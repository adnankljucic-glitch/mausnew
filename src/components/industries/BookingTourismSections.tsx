import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import IndustryCaseSection from '../IndustryCaseSection';
import IndustryIntroSection from '../IndustryIntroSection';

const expertiseCards = [
  {
    num: '01',
    category: 'Booking Engine',
    title: 'Real-time availability at scale',
    body: 'We build high-performance booking engines that handle real-time inventory queries, rate parity enforcement, and instant confirmations — supporting millions of searches per day without degradation.',
    tags: ['Real-Time Inventory', 'Rate Parity', 'High Availability'],
  },
  {
    num: '02',
    category: 'Channel Management',
    title: 'Unified distribution across every channel',
    body: 'OTAs, GDS, direct, and metasearch — we architect channel management layers that keep rates and availability perfectly synchronised across every distribution partner, eliminating overbooking and revenue leakage.',
    tags: ['OTA Integration', 'GDS', 'PMS Sync'],
  },
  {
    num: '03',
    category: 'Dynamic Pricing',
    title: 'Revenue intelligence that adapts',
    body: 'Data-driven yield management and dynamic pricing algorithms that respond to demand signals, competitor rates, and occupancy patterns — maximising RevPAR and filling capacity more efficiently.',
    tags: ['Yield Management', 'ML Pricing', 'Demand Forecasting'],
  },
  {
    num: '04',
    category: 'Guest Experience',
    title: 'Digital touchpoints from search to checkout',
    body: 'Conversion-optimised booking flows, personalised upsell journeys, digital check-in, and post-stay loyalty programs — we design and build the full guest-facing digital experience.',
    tags: ['UX Design', 'Loyalty Programs', 'Digital Check-in'],
  },
];

const capabilities = [
  {
    num: '01',
    title: 'Booking Engine',
    desc: 'Custom reservation systems with real-time availability, pricing rules, and instant confirmation.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <rect x="6" y="8" width="28" height="26" rx="2" />
        <path d="M14 8V4M26 8V4M6 16h28" />
        <path d="M13 24h4v4h-4zM22 24h5" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Channel Manager',
    desc: 'Centralised distribution hub syncing rates and availability across all OTA and GDS channels.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <circle cx="20" cy="20" r="5" />
        <circle cx="6" cy="10" r="3" />
        <circle cx="34" cy="10" r="3" />
        <circle cx="6" cy="30" r="3" />
        <circle cx="34" cy="30" r="3" />
        <path d="M9 12l8 6M31 12l-8 6M9 28l8-6M31 28l-8-6" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Dynamic Pricing',
    desc: 'ML-powered revenue management that adjusts rates in real time based on demand and competition.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path d="M6 32l8-10 8 4 10-14" />
        <circle cx="34" cy="12" r="3" />
        <path d="M20 8v4M28 36h-6l3-6z" strokeWidth="1" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Payment & FX',
    desc: 'Multi-currency payment processing with automated FX handling and secure card vaulting.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <rect x="4" y="10" width="32" height="22" rx="2" />
        <path d="M4 18h32M10 26h8M26 26h4" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'CRM & Loyalty',
    desc: 'Guest profiles, loyalty point engines, and personalised marketing automation built for hospitality.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <circle cx="20" cy="14" r="7" />
        <path d="M6 36c0-7.7 6.3-14 14-14s14 6.3 14 14" />
        <path d="M28 8l2 2 4-4" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Analytics Dashboard',
    desc: 'Real-time revenue, occupancy, and guest behaviour dashboards for data-driven operations.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <rect x="6" y="4" width="28" height="34" rx="1.5" />
        <path d="M12 28v4M18 22v10M24 18v14M30 24v8" />
        <path d="M12 12h16M12 17h10" />
      </svg>
    ),
  },
];

export default function BookingTourismSections() {
  const expertiseRef = useRef<HTMLElement>(null);
  const capRef = useRef<HTMLElement>(null);
  const expertiseInView = useInView(expertiseRef, { once: true, amount: 0.05 });
  const capInView = useInView(capRef, { once: true, amount: 0.05 });

  return (
    <>
      <IndustryIntroSection
        label="04 — Booking & Tourism"
        headline={<>Travel technology that converts browsers into <em>loyal guests</em>.</>}
        body={[
          'The travel and tourism industry lives and dies on conversion. A booking flow that is half a second slower costs revenue. A channel that goes out of sync costs overbookings. A loyalty program that feels transactional costs repeat guests.',
          'We have built booking engines, channel management platforms, dynamic pricing systems, and guest experience portals for hospitality groups, tour operators, and travel technology companies across Europe.',
          'We understand the operational complexity — the rate parity pressures, the PMS integrations, the seasonal demand spikes. We bring that domain knowledge into every architectural decision we make.',
        ]}
      />

      <section ref={expertiseRef} className="hc-expertise">
        <div className="manyone-grid">
          <motion.div
            className="hc-expertise-header"
            initial={{ opacity: 0, y: 20 }}
            animate={expertiseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="hc-eyebrow">Expertise</p>
            <h2 className="hc-expertise-headline">Built for travel,<br />engineered for scale.</h2>
            <p className="hc-expertise-lead">
              Deep hospitality domain knowledge combined with modern distributed systems — delivering booking technology that handles peak demand without breaking a sweat.
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

      <section ref={capRef} className="hc-capabilities">
        <div className="manyone-grid">
          <motion.div
            className="hc-capabilities-header"
            initial={{ opacity: 0, y: 20 }}
            animate={capInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="hc-eyebrow">Capabilities</p>
            <h2 className="hc-capabilities-headline">Everything you need to run a modern travel business.</h2>
            <p className="hc-capabilities-lead">
              One team covering the full stack — from booking infrastructure and distribution to guest-facing apps and revenue intelligence.
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

      <IndustryCaseSection
        accentColor="#e8f0f8"
        eyebrow="Case — Booking Platform"
        headline="High-Performance Booking Engine"
        body={[
          'We designed and built a real-time booking platform for a European hospitality group — handling multi-property availability, dynamic rate management, and direct channel distribution across 40+ properties.',
          'The platform increased direct bookings by 34%, eliminated overbooking through real-time inventory sync, and reduced OTA commission dependency with a conversion-optimised direct booking flow.',
        ]}
        ctaLabel="See our cases"
        ctaHref="/cases"
        imageSrc="/drone.webp"
        imageAlt="Booking & Tourism platform"
        caseTitle="High-Performance Booking Engine"
        caseSubtitle="Real-time availability and direct channel optimisation"
      />
    </>
  );
}
