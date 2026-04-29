import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import IndustryCaseSection from '../IndustryCaseSection';
import IndustryIntroSection from '../IndustryIntroSection';

const featureCards = [
  {
    num: '01',
    category: 'Booking',
    title: 'Booking & reservationsstyring',
    body: 'Komplet booking-univers med realtidsoversigt, kapacitetsstyring og automatiske bekræftelser. Integreret med alle større bookingsystemer.',
    tags: ['Realtidsoversigt', 'Kapacitetsstyring', 'Auto-bekræftelse'],
  },
  {
    num: '02',
    category: 'Datahub',
    title: 'Datahub & analyse',
    body: 'Unikke data-indsigter i overnatningsgæster. Detaljerede rapporter om bookingtrends, kanalperformance og gæsteadfærd — i realtid.',
    tags: ['Realtidsdata', 'Kanalperformance', 'Gæsteadfærd'],
  },
  {
    num: '03',
    category: 'Marketing',
    title: 'Marketingautomatisering',
    body: 'Automatiserede e-mailkampagner, personaliseret kommunikation og SEO-optimering — alt baseret på dine bookingdata.',
    tags: ['E-mail automation', 'Personalisering', 'SEO'],
  },
  {
    num: '04',
    category: 'Gæste-univers',
    title: 'Gæste self-service univers',
    body: 'Gæsterne styrer bookinger, betalinger og samtykke i ét brandede self-service univers. Reducerer supporthenvendelser markant.',
    tags: ['Self-service', 'Betalingsstyring', 'Samtykke'],
  },
  {
    num: '05',
    category: 'Prissætning',
    title: 'Dynamisk prissætning',
    body: 'Avancerede algoritmer der tilpasser priser baseret på efterspørgsel, sæson og konkurrenter. Øger omsætning automatisk.',
    tags: ['AI-algoritmer', 'Sæsonpriser', 'Konkurrentdata'],
  },
  {
    num: '06',
    category: 'Omnichannel',
    title: 'Omnichannel synlighed',
    body: 'Optimer din tilstedeværelse på alle kanaler — Google, Meta, e-mail og OTA — fra ét centralt sted med fuld attributionsdata.',
    tags: ['Google & Meta', 'OTA-kanaler', 'Attribution'],
  },
];

const integrations = [
  {
    badge: 'BS',
    name: 'BookingStudio',
    desc: 'Fuld integration med Danmarks mest udbredte bookingsystem for feriehuse og sommerhuse. Realtidssynkronisering af tilgængelighed og priser.',
  },
  {
    badge: 'TIG',
    name: 'Tiggets',
    desc: 'Sømløs integration med Tiggets billetplatform — brugt af Nordic Seaplanes og mange andre oplevelsesvirksomheder.',
  },
  {
    badge: 'DW',
    name: 'Dynamicweb',
    desc: 'Premium Solutions Partner. Fuld e-commerce integration med produkter, priser og kundedata synkroniseret i realtid.',
  },
  {
    badge: 'PAY',
    name: 'Betalingsgateway',
    desc: 'Integration med Nets, Stripe, QuickPay og andre betalingsudbydere. PCI-kompatibel og sikker transaktionshåndtering.',
  },
  {
    badge: 'API',
    name: 'Åben API',
    desc: 'Fleksibel REST API der giver mulighed for custom integrationer med CRM, PMS og andre systemer efter behov.',
  },
];

const datahubStats = [
  { value: 'DKK 2B+', label: 'Behandlet omsætning' },
  { value: '200+', label: 'Aktive klienter' },
  { value: '28 år', label: 'Brancheerfaring' },
  { value: 'Realtid', label: 'Datasynkronisering' },
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
        label="Service- og bookingplatform"
        headline={<>Ét samlet system til turisme og <em>overnatning</em>.</>}
        body={[
          'INET Designs service- og bookingplatform er bygget specifikt til turisme- og overnatningsbranchen. Den forbinder dit bookingsystem med datadrevet marketing, gæstekommunikation og avanceret analyse — alt sammen ét sted.',
          'Uanset om du driver ferieudlejning, camping, hotel eller attraktion, kan platformen tilpasses dine behov og integreres med de systemer, du allerede bruger.',
          'Vi samler booking, marketing og data i én platform — så du kan fokusere på at skabe gode oplevelser.',
        ]}
      />

      {/* FEATURES */}
      <section ref={featuresRef} className="hc-expertise">
        <div className="manyone-grid">
          <motion.div
            className="hc-expertise-header"
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="hc-eyebrow">Funktioner</p>
            <h2 className="hc-expertise-headline">Alt hvad du har<br />brug for.</h2>
            <p className="hc-expertise-lead">
              Platformen er bygget til at skalere med din forretning — fra enkle bookingflows til avancerede datadrevne marketingkampagner.
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

      {/* INTEGRATIONS */}
      <section ref={intRef} className="hc-capabilities">
        <div className="manyone-grid">
          <motion.div
            className="hc-capabilities-header"
            initial={{ opacity: 0, y: 20 }}
            animate={intInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="hc-eyebrow">Integrationer</p>
            <h2 className="hc-capabilities-headline">Plug-and-play med dine systemer.</h2>
            <p className="hc-capabilities-lead">
              Platformen er bygget til at arbejde med de systemer, du allerede bruger. Vi har dybe integrationer til de ledende bookingsystemer i branchen.
            </p>
          </motion.div>

          <div className="hc-cap-grid">
            {integrations.map((item, i) => (
              <motion.div
                key={i}
                className="hc-cap-item"
                initial={{ opacity: 0, y: 24 }}
                animate={intInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 + i * 0.08 }}
              >
                <div
                  className="hc-cap-icon"
                  style={{
                    fontSize: '0.62rem',
                    fontWeight: 800,
                    letterSpacing: '0.05em',
                    lineHeight: 1.2,
                    textAlign: 'center',
                  }}
                >
                  {item.badge}
                </div>
                <h3 className="hc-cap-title">{item.name}</h3>
                <p className="hc-cap-desc">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DATAHUB STATS */}
      <section ref={datahubRef} className="hc-expertise">
        <div className="manyone-grid">
          <motion.div
            className="hc-expertise-header"
            initial={{ opacity: 0, y: 20 }}
            animate={datahubInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="hc-eyebrow">Datahub</p>
            <h2 className="hc-expertise-headline">Unikke data-indsigter<br />i turismebranchen.</h2>
            <p className="hc-expertise-lead">
              Datahub er INETdesigns bankende datahjerte — og giver et enestående indblik i trends, målgrupper og segmenter inden for turisme- og overnatningsbranchen. Med adgang til aggregerede data fra hundredevis af overnatningsenheder kan vi hjælpe dig med at forstå markedet, positionere dig rigtigt og reagere hurtigt på ændringer.
            </p>
          </motion.div>

          <div className="hc-expertise-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {datahubStats.map((stat, i) => (
              <motion.div
                key={i}
                className="hc-exp-card"
                initial={{ opacity: 0, y: 30 }}
                animate={datahubInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 + i * 0.08 }}
              >
                <div style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1 }}>
                  {stat.value}
                </div>
                <p className="hc-exp-body" style={{ marginTop: '0.4rem' }}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <IndustryCaseSection
        accentColor="#e8f4f0"
        eyebrow="Klar til platformen?"
        headline="Klar til at se platformen i aktion?"
        body={[
          'Vi viser dig, hvad platformen kan gøre for din forretning — book en uforpligtende demo i dag.',
          'Vi har hjulpet over 200 turisme- og overnatningsvirksomheder med at øge deres direkte bookinger, forbedre gæsteoplevelsen og optimere driften med datadrevne beslutninger.',
        ]}
        ctaLabel="Book en demo"
        ctaHref="/discovery"
        imageSrc="/drone.webp"
        imageAlt="INET platform — turisme og overnatning"
        caseTitle="Service- og bookingplatform"
        caseSubtitle="Datadrevet vækst for turisme og overnatning"
      />
    </>
  );
}
