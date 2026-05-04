import CaseStudyCard from './CaseStudyCard';

const caseStudies = [
  {
    slug: 'run-events',
    title: 'Run.Events',
    description: 'Explore how we partnered with Run.Events, building a powerful event management platform that streamlines ticketing and attendee engagement.',
    imageUrl: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1920',
    tag: 'Events & Ticketing',
  },
  {
    slug: 'horizon-innovations',
    title: 'Horizon Ltd.',
    description: 'Discover the success journey of Horizon Innovations — how strategic solutions elevated their market position and profitability.',
    imageUrl: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1920',
    tag: 'Strategy',
  },
  {
    slug: 'swift-fintech',
    title: 'Swift Fintech',
    description: 'A strategic partnership that redefined the payment experience for millions of users across Europe.',
    imageUrl: 'https://images.pexels.com/photos/7567460/pexels-photo-7567460.jpeg?auto=compress&cs=tinysrgb&w=1920',
    tag: 'Fintech & Payments',
  },
  {
    slug: 'nova-healthcare',
    title: 'Nova Healthcare',
    description: 'Secure, compliant clinical systems built to scale — from patient onboarding to real-time diagnostics.',
    imageUrl: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1920',
    tag: 'Healthcare',
  },
  {
    slug: 'apex-manufacturing',
    title: 'Apex Manufacturing',
    description: 'Discover how predictive IoT systems and smart factory automation elevated Apex\'s operational efficiency by 40%.',
    imageUrl: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920',
    tag: 'AI & Manufacturing',
  },
  {
    slug: 'meridian-logistics',
    title: 'Meridian Logistics',
    description: 'End-to-end supply chain visibility delivered through a real-time tracking and analytics platform.',
    imageUrl: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1920',
    tag: 'Enterprise',
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
