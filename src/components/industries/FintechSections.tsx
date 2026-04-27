import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import IndustryCaseSection from '../IndustryCaseSection';
import IndustryIntroSection from '../IndustryIntroSection';

const expertiseCards = [
  {
    num: '01',
    category: 'Payment Infrastructure',
    title: 'Fast, reliable transaction processing',
    body: 'We design and build payment processing systems — from gateway integrations and acquirer connections to custom card scheme implementations — that handle high volumes with sub-second latency.',
    tags: ['PCI-DSS', 'ISO 20022', 'Open Banking'],
  },
  {
    num: '02',
    category: 'Compliance & Regulation',
    title: 'Built for a regulated world',
    body: 'AML, KYC, GDPR, PSD2 — regulatory compliance is not bolted on after the fact. We architect systems where compliance is a first-class concern from day one, reducing your exposure and audit overhead.',
    tags: ['AML / KYC', 'PSD2', 'GDPR'],
  },
  {
    num: '03',
    category: 'Fraud & Risk Intelligence',
    title: 'Stop fraud before it happens',
    body: 'Real-time transaction scoring, behavioural analytics, and adaptive rule engines — we build the intelligence layer that distinguishes legitimate customers from bad actors without adding friction.',
    tags: ['ML Scoring', 'Real-Time Rules', 'Chargeback'],
  },
  {
    num: '04',
    category: 'Open Banking & APIs',
    title: 'Connect to the financial ecosystem',
    body: 'We build open banking integrations, financial data aggregation layers, and developer-facing APIs that let your platform become part of the broader financial infrastructure.',
    tags: ['Open Banking', 'REST APIs', 'Webhooks'],
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
          'The financial sector moves at speed and under scrutiny. Every transaction carries liability, every data point carries regulatory weight, and every customer interaction shapes trust. Software in this domain cannot be approximate.',
          'We have built payment processing engines, fraud detection layers, open banking integrations, and compliance-first financial platforms — working with fintechs, banks, and payment service providers across Europe.',
          'We understand the domain deeply: the complexity of reconciliation, the demands of PCI-DSS, the nuance of fraud scoring. We bring that knowledge directly into every line of code we write.',
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
            <h2 className="hc-expertise-headline">Engineered for finance,<br />not experiments.</h2>
            <p className="hc-expertise-lead">
              Deep compliance knowledge combined with modern distributed systems engineering — delivering financial software that regulators approve and customers trust.
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
        accentColor="#e8f0e8"
        eyebrow="Case — Payment Infrastructure"
        headline="Enterprise Payment Platform"
        body={[
          'We designed and built a high-throughput payment processing platform for a European payment service provider — handling multi-currency transactions, real-time fraud scoring, and automated regulatory reporting.',
          'The platform processes millions of transactions monthly with 99.99% uptime, full PCI-DSS Level 1 compliance, and a developer API used by hundreds of integrated merchants.',
        ]}
        ctaLabel="See our cases"
        ctaHref="/cases"
        imageSrc="/pay.jpg"
        imageAlt="Payment platform"
        caseTitle="Enterprise Payment Platform"
        caseSubtitle="High-throughput compliant payment processing"
      />
    </>
  );
}
