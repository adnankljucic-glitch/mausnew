import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import IndustryCaseSection from '../IndustryCaseSection';
import IndustryIntroSection from '../IndustryIntroSection';
import MobileAccordionItem from '../MobileAccordionItem';
import { useIsMobile } from '../../hooks/useIsMobile';

const expertiseCards = [
  {
    num: '01',
    category: 'Environmental Monitoring',
    title: 'Real-time sensing, actionable data',
    body: 'We connect sensor networks and IoT devices — water quality probes, flow meters, weather stations — into unified monitoring platforms that give operators immediate visibility across their entire infrastructure.',
    tags: ['IoT Sensors', 'Real-Time', 'SCADA Integration'],
  },
  {
    num: '02',
    category: 'Water Cycle Management',
    title: 'Smart systems for every drop',
    body: 'From source to tap and back — we build digital platforms for water utilities that optimise distribution, detect leakage early, and support regulatory compliance with automated reporting.',
    tags: ['Leak Detection', 'EPANET', 'GIS'],
  },
  {
    num: '03',
    category: 'Sustainability Reporting',
    title: 'Automated ESG and compliance',
    body: 'Manual sustainability reporting is a bottleneck. We build data pipelines and reporting platforms that aggregate environmental metrics and generate audit-ready ESG reports automatically.',
    tags: ['ESG', 'GHG Protocol', 'EU Taxonomy'],
  },
  {
    num: '04',
    category: 'Predictive Analytics',
    title: 'From reactive to predictive operations',
    body: 'Using historical sensor data and machine learning, we build predictive models that anticipate infrastructure failures, demand spikes, and environmental incidents before they occur.',
    tags: ['ML / AI', 'Anomaly Detection', 'Digital Twin'],
  },
];

const capabilities = [
  {
    num: '01',
    title: 'IoT Data Platform',
    desc: 'Ingest, store, and process high-volume sensor and telemetry data in real time.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <circle cx="20" cy="20" r="5" />
        <circle cx="20" cy="7" r="2" />
        <circle cx="20" cy="33" r="2" />
        <circle cx="7" cy="20" r="2" />
        <circle cx="33" cy="20" r="2" />
        <path d="M20 9v6M20 25v6M9 20h6M25 20h6" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'SCADA Integration',
    desc: 'Bridge legacy industrial control systems into modern cloud-based monitoring platforms.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <rect x="6" y="10" width="28" height="18" rx="1.5" />
        <path d="M12 28v4M28 28v4M6 34h28" />
        <path d="M12 18h4v4h-4zM18 16h4v6h-4zM24 14h4v8h-4z" strokeWidth="1" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'GIS & Mapping',
    desc: 'Spatial analytics and interactive maps for infrastructure, catchment, and environmental data.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <ellipse cx="20" cy="20" rx="16" ry="16" />
        <path d="M4 20h32M20 4v32" />
        <path d="M20 4a16 16 0 0 1 0 32M20 4a16 16 0 0 0 0 32" />
        <circle cx="20" cy="14" r="2.5" fill="currentColor" strokeWidth="0" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'ESG Reporting',
    desc: 'Automated sustainability reporting aligned to EU Taxonomy, GRI, and CSRD requirements.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <rect x="6" y="4" width="28" height="34" rx="1.5" />
        <path d="M12 12h16M12 18h16M12 24h10M12 30h8" />
        <path d="M26 26l3 3 5-5" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Digital Twin',
    desc: 'Virtual models of physical infrastructure for simulation, planning, and fault prediction.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path d="M20 4l14 8v16l-14 8L6 28V12L20 4z" />
        <path d="M20 12l8 4v8l-8 4-8-4v-8l8-4z" strokeWidth="0.9" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Predictive Maintenance',
    desc: 'ML models that detect anomalies and schedule maintenance before failures happen.',
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

export default function SustainabilitySections() {
  const expertiseRef = useRef<HTMLElement>(null);
  const capRef = useRef<HTMLElement>(null);
  const expertiseInView = useInView(expertiseRef, { once: true, amount: 0.05 });
  const capInView = useInView(capRef, { once: true, amount: 0.05 });
  const isMobile = useIsMobile();

  return (
    <>
      <IndustryIntroSection
        label="04 — Sustainability & Water Cycle"
        headline={<>The world needs better systems — <em>we build them</em>.</>}
        body={[
          'Water scarcity, climate pressure, and ageing infrastructure are reshaping how utilities and municipalities operate. The answer is not just more engineering — it is smarter digital infrastructure that makes every resource go further.',
          'We work with water utilities, environmental agencies, and sustainability-focused organisations to build monitoring platforms, data pipelines, and management tools that create real operational leverage.',
          'From detecting a pipe leak in milliseconds to generating audit-ready ESG reports automatically — our platforms help operators move from reactive to predictive, and from compliance to competitive advantage.',
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
            <h2 className="hc-expertise-headline">Data-driven sustainability,<br />not greenwashing.</h2>
            <p className="hc-expertise-lead">
              We combine environmental domain knowledge with modern data engineering — delivering systems that produce measurable environmental outcomes, not just dashboards.
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
            <h2 className="hc-capabilities-headline">Everything you need to digitise your environmental operations.</h2>
            <p className="hc-capabilities-lead">
              Full-stack capability from sensor integration and data engineering to analytics dashboards and regulatory reporting — one partner for the entire digital infrastructure.
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
        accentColor="#ddeedd"
        eyebrow="Case — Water Intelligence"
        headline="Smart Water Management Platform"
        body={[
          'We partnered with a Scandinavian water utility to build an end-to-end digital monitoring platform — integrating hundreds of field sensors, SCADA systems, and lab data into a single operational dashboard.',
          'The platform reduced unaccounted-for water loss by 18% in the first year through early leak detection, and automated the utility\'s annual environmental compliance reporting, saving hundreds of manual hours.',
        ]}
        ctaLabel="See our cases"
        ctaHref="/cases"
        imageSrc="https://images.pexels.com/photos/18140302/pexels-photo-18140302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        imageAlt="Water management system"
        caseTitle="Smart Water Management"
        caseSubtitle="IoT-powered water cycle intelligence"
      />
    </>
  );
}
