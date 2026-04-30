import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import IndustryCaseSection from '../IndustryCaseSection';
import IndustryIntroSection from '../IndustryIntroSection';
import MobileAccordionItem from '../MobileAccordionItem';
import { useIsMobile } from '../../hooks/useIsMobile';

const expertiseCards = [
  {
    num: '01',
    category: 'Automated Valuation',
    title: 'Data-driven property intelligence',
    body: 'We build AVM systems that combine transaction data, planning records, geospatial layers, and market signals into real-time valuation models — giving agents, lenders, and investors an objective, instant property view.',
    tags: ['AVM', 'Machine Learning', 'GIS'],
  },
  {
    num: '02',
    category: 'Tenant & Asset Management',
    title: 'Platforms landlords and tenants love',
    body: 'From digital lease management and maintenance ticketing to payment collection and occupancy reporting — we build tenant management portals that cut operational overhead and improve the resident experience.',
    tags: ['PropTech SaaS', 'Multi-Tenancy', 'Integrations'],
  },
  {
    num: '03',
    category: 'Transaction Platforms',
    title: 'Faster, more transparent deals',
    body: 'Digital transaction rooms, e-signature workflows, and due diligence portals — we build the secure collaboration infrastructure that accelerates property deals and keeps all parties aligned.',
    tags: ['e-Signature', 'Document Management', 'Audit Trail'],
  },
  {
    num: '04',
    category: 'Market Analytics',
    title: 'See the market before it moves',
    body: 'Aggregating public records, planning applications, and market transactions into predictive analytics tools — we help real estate professionals make decisions grounded in data, not instinct.',
    tags: ['Data Aggregation', 'Forecasting', 'Power BI'],
  },
];

const capabilities = [
  {
    num: '01',
    title: 'AVM Engine',
    desc: 'Automated valuation models combining transaction data, spatial analytics, and market signals.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path d="M4 14l16-10 16 10v20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V14z" />
        <path d="M15 36v-10h10v10" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Tenant Portal',
    desc: 'Self-service digital portal for rent, maintenance, documents, and communications.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <rect x="6" y="4" width="28" height="34" rx="2" />
        <path d="M12 12h16M12 18h10M12 24h6" />
        <circle cx="28" cy="28" r="6" />
        <path d="M26 28l2 2 3-3" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Transaction Room',
    desc: 'Secure digital workspace for deal management, e-signatures, and due diligence.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <rect x="8" y="4" width="24" height="32" rx="1.5" />
        <path d="M13 12h14M13 18h14M13 24h8" />
        <path d="M23 28l3 3 5-5" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Property Search',
    desc: 'Intelligent search with geospatial filtering, saved searches, and recommendation engine.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <circle cx="18" cy="18" r="12" />
        <path d="M27 27l8 8" />
        <path d="M13 18h10M18 13v10" strokeWidth="1" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'CRM & Pipeline',
    desc: 'Deal tracking, client management, and automated follow-up for agencies and developers.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <circle cx="20" cy="12" r="6" />
        <path d="M8 34c0-6.6 5.4-12 12-12s12 5.4 12 12" />
        <path d="M28 16l3 3-6 6" strokeWidth="1.1" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Market Intelligence',
    desc: 'Data aggregation, trend analysis, and predictive analytics for asset performance.',
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

export default function RealEstateSections() {
  const expertiseRef = useRef<HTMLElement>(null);
  const capRef = useRef<HTMLElement>(null);
  const expertiseInView = useInView(expertiseRef, { once: true, amount: 0.05 });
  const capInView = useInView(capRef, { once: true, amount: 0.05 });
  const isMobile = useIsMobile();

  return (
    <>
      <IndustryIntroSection
        label="05 — Real Estate & PropTech"
        headline={<>Property is the world's largest asset class — <em>software is its new edge</em>.</>}
        body={[
          'Real estate is being transformed by data. Valuation models trained on millions of transactions, tenant portals that replace paper leases, transaction platforms that close deals in days instead of weeks.',
          'We work with property developers, agencies, PropTech startups, and institutional investors to build the digital infrastructure that gives them an advantage — whether that is speed, precision, or scale.',
          'From automated valuation engines and tenant management systems to market intelligence dashboards — we build the tools that let real estate companies operate and compete at a fundamentally higher level.',
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
            <h2 className="hc-expertise-headline">Built for property,<br />powered by data.</h2>
            <p className="hc-expertise-lead">
              We combine deep real estate domain knowledge with modern data engineering and product design — delivering PropTech platforms that create measurable commercial value.
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
            <h2 className="hc-capabilities-headline">Everything you need to build the next generation of PropTech.</h2>
            <p className="hc-capabilities-lead">
              From valuation models and deal platforms to tenant apps and market analytics — one team for the full real estate technology stack.
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
        accentColor="#f0ede8"
        eyebrow="Case — PropTech AI"
        headline="Bringing AI to Real Estate SaaS"
        body={[
          'ISPINIT and Delta Access — European real estate software companies behind argo®web and Mara Hub — partnered with MAUS as a long-term embedded product team to modernise their platforms with AI and automation. A flagship deliverable was an AI assistant integrated directly into Microsoft Teams that creates Planner tasks from conversations, drafts structured emails from property search results, and keeps teams productive without leaving their existing workflows.',
          'The collaboration delivered faster feature releases, deeper end-user automation, and a scalable foundation for LLMs, copilots, and agentic workflows — positioning both products as next-generation intelligent real estate software.',
        ]}
        ctaLabel="Read the case"
        ctaHref="/cases"
        imageSrc="/86588.webp"
        imageAlt="AI real estate platform"
        caseTitle="ISPINIT & Delta Access"
        caseSubtitle="AI-powered real estate SaaS platforms"
      />
    </>
  );
}
