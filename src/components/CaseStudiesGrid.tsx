import CaseStudyCard from './CaseStudyCard';

const caseStudies = [
  {
    slug: 'run-events',
    title: 'Run.Events',
    description: 'Explore how we partnered with Run.Events, building a powerful event management platform that streamlines ticketing and attendee engagement.',
    imageUrl: '/ecs_keynote2.webp',
    tag: 'Events & Ticketing',
  },
  {
    slug: 'ispinit',
    title: 'ISPINIT (Real Estate SaaS)',
    description: 'Evolving traditional SaaS into an AI-first platform: Bridging legacy data with LLMs to automate market analysis and investment\u00A0forecasting.',
    imageUrl: '/3379.webp',
    tag: 'Legacy Modernization / Real Estate Proptech',
  },
  {
    slug: 'systematic-healthcare',
    title: 'Systematic Healthcare',
    description: 'A strategic partnership that redefined the payment experience for millions of users across\u00A0Europe.',
    imageUrl: '/health.webp',
    tag: 'AI & Automation',
  },
  {
    slug: 'neuro-plus-academy',
    title: 'Neuro+ Academy',
    description: 'Secure, compliant clinical systems built to scale — from patient onboarding to real-time diagnostics.',
    imageUrl: '/Casque_photobiomodulation_adulte_Neuro.webp',
    tag: 'Healthcare',
  },
  {
    slug: 'nordsee-holiday',
    title: 'Nordsee Holiday',
    description: 'We\'re redefining the booking journey by moving away from endless filtering and toward natural conversations that lead straight to a reservation.',
    imageUrl: '/ocean.webp',
    tag: 'Booking & Tourism / Agentic AI Commerce',
  },
  {
    slug: 'travelsphere',
    title: 'Travelsphere - holidays of a lifetime',
    description: 'Refreshed community platform and booking website.',
    imageUrl: '/mostar.webp',
    tag: 'Travel & Tourism',
  },
  {
    slug: 'zenith-retail',
    title: 'Zenith Retail',
    description: 'Omnichannel retail transformation — unified inventory, personalised experiences, accelerated growth.',
    imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920',
    tag: 'Digital Products',
  },
  {
    slug: 'solaris-energy',
    title: 'Solaris Energy',
    description: 'Smart grid management and resource optimisation platform deployed across 12 European markets.',
    imageUrl: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1920',
    tag: 'Energy & Utilities',
  },
  {
    slug: 'verdant-proptech',
    title: 'Verdant PropTech',
    description: 'Automated valuation models and tenant management portals that cut operational overhead by 35%.',
    imageUrl: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1920',
    tag: 'Real Estate & PropTech',
  },
  {
    slug: 'atlas-insurance',
    title: 'Atlas Insurance',
    description: 'AI-driven claims processing and fraud detection — reducing turnaround time from weeks to hours.',
    imageUrl: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1920',
    tag: 'Fintech & Payments',
  },
];

export default function CaseStudiesGrid() {
  return (
    <section className="case-studies-grid">
      {/* 1 — full */}
      <CaseStudyCard {...caseStudies[0]} variant="full" contentPosition="bottom" index={0} />

      {/* 2 — full */}
      <CaseStudyCard {...caseStudies[1]} variant="full" contentPosition="bottom" index={1} />

      {/* 3 + 4 — halves */}
      <div className="case-studies-row">
        <CaseStudyCard {...caseStudies[2]} variant="half" contentPosition="bottom" index={2} />
        <CaseStudyCard {...caseStudies[3]} variant="half" contentPosition="bottom" index={3} />
      </div>

      {/* 5 — full */}
      <CaseStudyCard {...caseStudies[4]} variant="full" contentPosition="bottom" index={4} />

      {/* 6 + 7 — halves */}
      <div className="case-studies-row">
        <CaseStudyCard {...caseStudies[5]} variant="half" contentPosition="bottom" index={5} />
        <CaseStudyCard {...caseStudies[6]} variant="half" contentPosition="bottom" index={6} />
      </div>

      {/* 8 — full */}
      <CaseStudyCard {...caseStudies[7]} variant="full" contentPosition="bottom" index={7} />

      {/* 9 + 10 — halves */}
      <div className="case-studies-row">
        <CaseStudyCard {...caseStudies[8]} variant="half" contentPosition="bottom" index={8} />
        <CaseStudyCard {...caseStudies[9]} variant="half" contentPosition="bottom" index={9} />
      </div>
    </section>
  );
}
