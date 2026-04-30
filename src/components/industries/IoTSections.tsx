import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import IndustryCaseSection from '../IndustryCaseSection';
import IndustryIntroSection from '../IndustryIntroSection';
import MobileAccordionItem from '../MobileAccordionItem';
import { useIsMobile } from '../../hooks/useIsMobile';

const expertiseCards = [
  {
    num: '01',
    category: 'Connected Device Platforms',
    title: 'From edge to cloud — seamlessly',
    body: 'We architect IoT platforms that handle the full data journey: firmware on the device, secure connectivity, cloud ingestion, and real-time analytics. Reliable at scale, resilient in the field.',
    tags: ['MQTT', 'Edge Computing', 'AWS IoT / Azure'],
  },
  {
    num: '02',
    category: 'Firmware & Embedded',
    title: 'Software that runs in the hardware',
    body: 'Our embedded engineers write firmware for microcontrollers and single-board computers — optimising for power, memory, and connectivity constraints without sacrificing reliability or update-ability.',
    tags: ['C / C++', 'RTOS', 'OTA Updates'],
  },
  {
    num: '03',
    category: 'Real-Time Monitoring',
    title: 'See everything, instantly',
    body: 'Live sensor dashboards, threshold alerting, and anomaly detection — we build the operational intelligence layer that gives teams immediate visibility into their physical assets and environments.',
    tags: ['Time-Series DB', 'WebSockets', 'Alerting'],
  },
  {
    num: '04',
    category: 'Predictive Intelligence',
    title: 'Anticipate failures before they happen',
    body: 'Machine learning models trained on device telemetry detect degradation patterns and predict failures — reducing unplanned downtime, extending asset life, and lowering maintenance costs.',
    tags: ['ML / Anomaly Detection', 'Digital Twin', 'Predictive Maintenance'],
  },
];

const capabilities = [
  {
    num: '01',
    title: 'Firmware Development',
    desc: 'Embedded C/C++ for microcontrollers, with OTA update pipelines and secure boot.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <rect x="8" y="8" width="24" height="24" rx="2" />
        <path d="M14 4v6M26 4v6M14 30v6M26 30v6M4 14h6M4 26h6M30 14h6M30 26h6" />
        <rect x="15" y="15" width="10" height="10" rx="1" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Cloud IoT Platform',
    desc: 'Device management, telemetry ingestion, and real-time processing on AWS or Azure.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path d="M8 26a8 8 0 1 1 1-16 10 10 0 0 1 19 3 6 6 0 1 1-2 13H8z" />
        <path d="M16 26v6M24 26v6M20 26v8" strokeWidth="1.1" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Real-Time Dashboard',
    desc: 'Live operational views with WebSocket data streams, alerting, and custom KPIs.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <rect x="4" y="6" width="32" height="22" rx="1.5" />
        <path d="M4 24h32M13 28v6M27 28v6M8 34h24" />
        <path d="M10 18l5-5 5 3 5-7 5 5" strokeWidth="1.1" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Digital Twin',
    desc: 'Virtual replicas of physical assets for simulation, planning, and remote diagnosis.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path d="M20 4l14 8v16l-14 8L6 28V12L20 4z" />
        <path d="M20 12l8 4v8l-8 4-8-4v-8l8-4z" strokeWidth="0.9" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Security & Compliance',
    desc: 'End-to-end encryption, certificate management, and compliance for connected devices.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path d="M20 4l14 6v10c0 8-6 14-14 16C12 34 6 28 6 20V10L20 4z" />
        <path d="M14 20l4 4 8-8" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Predictive Maintenance',
    desc: 'Anomaly detection and failure prediction models trained on real device telemetry.',
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

export default function IoTSections() {
  const expertiseRef = useRef<HTMLElement>(null);
  const capRef = useRef<HTMLElement>(null);
  const expertiseInView = useInView(expertiseRef, { once: true, amount: 0.05 });
  const capInView = useInView(capRef, { once: true, amount: 0.05 });
  const isMobile = useIsMobile();

  return (
    <>
      <IndustryIntroSection
        label="06 — IoT & Smart Devices"
        headline={<>The physical world, made <em>programmable and intelligent</em>.</>}
        body={[
          'The gap between hardware and software has never been smaller. Sensors, actuators, and devices are generating operational data at a scale and velocity that creates entirely new possibilities — for manufacturers, operators, and product companies alike.',
          'We have built IoT platforms across industrial automation, food processing, environmental monitoring, and consumer devices — writing firmware, designing cloud architectures, and delivering the analytics layer that makes device data useful.',
          'Whether you are connecting your first hundred devices or scaling to millions, we bring the full-stack expertise to make it work: from the silicon to the screen.',
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
            <h2 className="hc-expertise-headline">From the chip to<br />the cloud.</h2>
            <p className="hc-expertise-lead">
              We combine embedded engineering, cloud architecture, and data science — delivering IoT platforms that create real operational intelligence, not just connected devices.
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
            <h2 className="hc-capabilities-headline">Everything you need to build a world-class connected product.</h2>
            <p className="hc-capabilities-lead">
              Firmware to frontend — full-stack IoT capability covering embedded development, cloud infrastructure, real-time analytics, and security.
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
        accentColor="#e8eef8"
        eyebrow="Case — IoT & Connected Devices"
        headline="CookPerfect — Smart Cooking, Perfected"
        body={[
          'CookPerfect came to us with a vision: a wireless smart thermometer that takes the guesswork out of cooking. We built native iOS and Android apps that integrate seamlessly with their hardware — reading five temperature sensor points simultaneously and running a proprietary algorithm to calculate the precise core temperature in real time.',
          'The result is a kitchen companion that guides home cooks and professionals to perfect results every time — with live temperature monitoring, finish-time predictions, and a precision time manager — all built around the beauty of simplicity.',
        ]}
        ctaLabel="Read the case"
        ctaHref="/cases"
        videoSrc="https://ttycsupkjrsqjvqaxtca.supabase.co/storage/v1/object/public/MAUS%20VIDEOS/cp_intro.mp4"
        caseTitle="CookPerfect"
        caseSubtitle="Smart thermometer app for iOS & Android"
      />
    </>
  );
}
