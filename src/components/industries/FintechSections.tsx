import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import IndustryCaseSection from '../IndustryCaseSection';
import IndustryIntroSection from '../IndustryIntroSection';

const expertiseCards = [
  {
    num: '01',
    category: 'Payment Gateway Integrations',
    title: 'Seamless Connectivity with Market-Leading Gateways',
    body: 'Complexity should never be a barrier to growth. We specialize in architecting robust payment ecosystems that bridge the gap between your core software and global financial gateways. By leveraging deep integration expertise with Stripe, Nets, and MobilePay, we ensure your platform handles transactions with 99.9% uptime and enterprise-grade security.',
    tags: ['Stripe', 'MobilePay', 'Nets'],
  },
  {
    num: '02',
    category: 'Booking & Events',
    title: 'High-Performance Solutions for Complex Transactional Flows',
    body: 'Booking and event platforms face unique challenges — from handling high-volume surges to managing complex refund logic. We optimize the entire transactional lifecycle to reduce churn and manual overhead.',
    tags: ['Split-Payments', 'Deposit Management', 'Checkout UX'],
  },
  {
    num: '03',
    category: 'Data & Visualization',
    title: 'Strategic Dashboards: Turning Transactions into Insights',
    body: 'Data is only valuable if it is actionable. We go beyond the transaction by developing custom payment dashboards that provide a 360-degree view of your financial health, focused on the metrics that drive ROI and operational efficiency.',
    tags: ['Real-Time Analytics', 'Reconciliation', 'Predictive Insights'],
  },
  {
    num: '04',
    category: 'Software Optimization',
    title: 'Engineering for Profitability and Performance',
    body: 'At MAUS, we don\'t just "plug in" a payment gateway. We optimize your entire software architecture to ensure that your payment infrastructure supports your long-term business goals — from performance tuning to PCI-DSS compliance and ROI-driven development.',
    tags: ['PCI-DSS', 'Performance Tuning', 'ROI-Driven Dev'],
  },
];

const capabilities = [
  {
    num: '01',
    title: 'Payment Gateway',
    desc: 'Custom or integrated payment processing with full acquirer and scheme connectivity.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <rect x="4" y="10" width="32" height="22" rx="2" />
        <path d="M4 18h32M10 26h8M26 26h4" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'KYC / AML',
    desc: 'Identity verification, watchlist screening, and ongoing transaction monitoring.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <circle cx="20" cy="14" r="7" />
        <path d="M6 36c0-7.7 6.3-14 14-14s14 6.3 14 14" />
        <path d="M27 26l4 4" />
        <circle cx="32" cy="31" r="3" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Fraud Detection',
    desc: 'Real-time ML-powered scoring and rules engine to flag suspicious activity instantly.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path d="M20 4l14 6v10c0 8-6 14-14 16C12 34 6 28 6 20V10L20 4z" />
        <path d="M14 20l4 4 8-8" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Reporting & Reconciliation',
    desc: 'Automated financial reporting, settlement reconciliation, and audit-ready exports.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <rect x="6" y="4" width="28" height="34" rx="1.5" />
        <path d="M12 12h16M12 18h16M12 24h10M12 30h8" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Open Banking APIs',
    desc: 'PSD2-compliant account aggregation, payment initiation, and developer portals.',
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
    num: '06',
    title: 'Crypto & Web3',
    desc: 'Wallet infrastructure, on-chain settlement, and token-based financial products.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path d="M20 4l14 8v16l-14 8L6 28V12L20 4z" />
        <path d="M20 4v32M6 12l14 8 14-8M6 28l14-8 14 8" strokeWidth="0.9" />
      </svg>
    ),
  },
];

export default function FintechSections() {
  const expertiseRef = useRef<HTMLElement>(null);
  const capRef = useRef<HTMLElement>(null);
  const expertiseInView = useInView(expertiseRef, { once: true, amount: 0.05 });
  const capInView = useInView(capRef, { once: true, amount: 0.05 });

  return (
    <>
      <IndustryIntroSection
        label="03 — Fintech & Payment Systems"
        headline={<>Financial software that earns <em>trust at every transaction</em>.</>}
        body={[
          'Complexity should never be a barrier to growth. We specialize in architecting robust payment ecosystems that bridge the gap between your core software and global financial gateways.',
          'From Stripe\'s API-first infrastructure for international expansion to MobilePay and Nets for Scandinavian market dominance — we build bespoke middleware that syncs payment data across legacy systems and modern stacks.',
          'Every line of code is written with the goal of increasing your bottom line through automation, better user retention, and enterprise-grade security.',
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
            <h2 className="hc-expertise-headline">Four pillars of payment<br />excellence.</h2>
            <p className="hc-expertise-lead">
              From gateway integrations and transactional UX to real-time dashboards and full PCI-DSS compliance — we cover every layer of your payment infrastructure.
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
            <h2 className="hc-capabilities-headline">Everything you need to build compliant fintech.</h2>
            <p className="hc-capabilities-lead">
              One team covering the full spectrum — from payment infrastructure and compliance tooling to customer-facing apps and data analytics.
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
        accentColor="#00bfb2"
        eyebrow="Case — Ticket Engine"
        headline="High-Conversion Ticket Engine for run.events"
        body={[
          'Building a seamless, embeddable ticket purchase experience that could handle global payments and complex event logic. Development of a high-performance Ticket Purchase Widget with deep Stripe integration. Focus was placed on a "zero-friction" UX and an API-first architecture that scales with peak traffic.',
          'Real-time processing and instant digital ticket delivery.',
        ]}
        ctaLabel="See our cases"
        ctaHref="/cases"
        youtubeSrc="https://www.youtube.com/embed/iWok9PeSKcU"
        caseTitle="High-Conversion Ticket Engine"
        caseSubtitle="Zero-friction ticket purchase with Stripe"
      />
    </>
  );
}
