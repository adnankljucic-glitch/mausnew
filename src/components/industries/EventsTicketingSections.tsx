import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import IndustryCaseSection from '../IndustryCaseSection';
import IndustryIntroSection from '../IndustryIntroSection';
import MobileAccordionItem from '../MobileAccordionItem';
import { useIsMobile } from '../../hooks/useIsMobile';

const expertiseCards = [
  {
    num: '01',
    category: 'Real-Time Availability',
    title: 'Instant, conflict-free reservations',
    body: 'We architect ticketing engines that process concurrent requests without overselling — distributed locking, event sourcing, and optimistic concurrency handled at the infrastructure level.',
    tags: ['Distributed Systems', 'Event Sourcing', 'Redis'],
  },
  {
    num: '02',
    category: 'Multi-Channel Commerce',
    title: 'Sell everywhere, manage centrally',
    body: 'Web, mobile, kiosk, and API — your inventory and pricing stay consistent across every channel. We build the integration layer that keeps all touchpoints in sync.',
    tags: ['Omni-Channel', 'REST / GraphQL', 'Webhooks'],
  },
  {
    num: '03',
    category: 'Payments & Fraud Prevention',
    title: 'Secure checkout at scale',
    body: 'PCI-DSS compliant payment flows with built-in fraud scoring, refund automation, and multi-currency support. We integrate with the processors your customers already trust.',
    tags: ['PCI-DSS', 'Stripe', 'Fraud Detection'],
  },
  {
    num: '04',
    category: 'Analytics & Yield Management',
    title: 'Maximise revenue with data',
    body: 'Demand forecasting, dynamic pricing models, and capacity analytics — we build the intelligence layer that helps event operators fill capacity and optimise yield.',
    tags: ['Dynamic Pricing', 'BI', 'Forecasting'],
  },
];

const capabilities = [
  {
    num: '01',
    title: 'Ticketing Engine',
    desc: 'Custom ticketing cores built for your event type — festivals, concerts, sports, or cultural venues.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <rect x="4" y="10" width="32" height="20" rx="2" />
        <path d="M14 10v20M4 20h6M30 20h6" />
        <path d="M17 16h10M17 20h7M17 24h9" strokeWidth="1" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'QR & Gate Management',
    desc: 'End-to-end ticket lifecycle with digital delivery, scanning, and real-time gate access control.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <rect x="5" y="8" width="30" height="26" rx="2" />
        <path d="M5 16h30M13 4v8M27 4v8" />
        <path d="M13 24h4M21 24h6M13 30h2M19 30h8" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Payment Integration',
    desc: 'Seamless checkout with multi-currency, partial payments, and automated refunds.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <rect x="4" y="10" width="32" height="22" rx="2" />
        <path d="M4 18h32M10 26h6M28 26h3" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'CRM & Loyalty',
    desc: 'Attendee profiles, purchase history, and loyalty programmes that drive repeat attendance.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <circle cx="20" cy="14" r="7" />
        <path d="M6 36c0-7.7 6.3-14 14-14s14 6.3 14 14" />
        <path d="M26 22l3 3-5 5" strokeWidth="1" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Mobile Apps',
    desc: 'Native iOS and Android apps with offline ticketing, push notifications, and wallet passes.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <rect x="11" y="3" width="18" height="34" rx="2.5" />
        <path d="M18 7h4M19 33h2" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Analytics Dashboard',
    desc: 'Real-time capacity, revenue, and demand insight for operators and event managers.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path d="M6 34V22l8-6 8 4 12-12" />
        <circle cx="6" cy="34" r="2" fill="currentColor" strokeWidth="0" />
        <circle cx="14" cy="22" r="2" fill="currentColor" strokeWidth="0" />
        <circle cx="22" cy="26" r="2" fill="currentColor" strokeWidth="0" />
        <circle cx="34" cy="8" r="2" fill="currentColor" strokeWidth="0" />
      </svg>
    ),
  },
];

export default function EventsTicketingSections() {
  const expertiseRef = useRef<HTMLElement>(null);
  const capRef = useRef<HTMLElement>(null);
  const expertiseInView = useInView(expertiseRef, { once: true, amount: 0.05 });
  const capInView = useInView(capRef, { once: true, amount: 0.05 });
  const isMobile = useIsMobile();

  return (
    <>
      <IndustryIntroSection
        label="02 — Events & Ticketing"
        headline={<>Where millions of transactions meet <em>zero tolerance for errors</em>.</>}
        body={[
          'Events and ticketing is one of the most demanding software domains. A sold-out festival, a concert opening night, a major sports final — these are moments that cannot fail. Concurrency, latency, and payment integrity are not features. They are the product.',
          'We build custom enterprise software for festivals, concerts, sports events, cultural houses, and large conferences. No off-the-shelf ticketing products — only software engineered precisely for your event type, scale, and operational complexity.',
          'Whether you are launching a new platform or scaling an existing one, we bring the architectural rigour and domain knowledge to make it work — reliably, at scale, every time.',
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
            <h2 className="hc-expertise-headline">Built for throughput,<br />designed for trust.</h2>
            <p className="hc-expertise-lead">
              We combine deep platform engineering with events domain knowledge — delivering ticketing systems that operators, partners, and attendees can rely on at every peak moment.
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
            <h2 className="hc-capabilities-headline">Everything you need to run a world-class event platform.</h2>
            <p className="hc-capabilities-lead">
              Full-stack expertise across commerce, infrastructure, and user experience — one team to take you from concept to millions of tickets sold.
            </p>
          </motion.div>

          {isMobile ? (
            <div className="mob-acc-list">
              {capabilities.map((cap, i) => (
                <MobileAccordionItem key={i} num={cap.num} icon={cap.icon} headline={cap.title}>
                  {cap.desc}
                </MobileAccordionItem>
              ))}
            </div>
          ) : (
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
          )}
        </div>
      </section>

      <IndustryCaseSection
        accentColor="#e8f0f8"
        eyebrow="Case — Events & Ticketing"
        headline="Run Events"
        body={[
          'We built the end-to-end digital platform for Run Events — one of Scandinavia\'s leading running event organisers — covering registration, ticketing, real-time race tracking, and post-event analytics.',
          'The system handles tens of thousands of participants across multiple simultaneous events, with seamless payment processing, automated communications, and a mobile experience that works on race day, rain or shine.',
        ]}
        ctaLabel="Read the case"
        ctaHref="/cases/run-events"
        videoSrc="https://ttycsupkjrsqjvqaxtca.supabase.co/storage/v1/object/public/MAUS%20VIDEOS/runevents_intro.mp4"
        caseTitle="Run Events"
        caseSubtitle="End-to-end event ticketing platform"
      />
    </>
  );
}
