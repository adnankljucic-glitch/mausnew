import CaseStudyCard from './CaseStudyCard';

const caseStudies = [
  {
    slug: 'run-events',
    title: 'Run.Events',
    description: 'Explore how we partnered with Run.Events, building a powerful event management platform that streamlines ticketing and attendee engagement.',
    imageUrl: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1920',
    testimonial: {
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'Exponential growth—undeniable success.',
    },
  },
  {
    slug: 'horizon-innovations',
    title: 'Horizon Ltd.',
    description: 'Discover the success journey of Horizon Innovations—how strategic solutions elevated their market position and profitability.',
    imageUrl: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    slug: 'swift-fintech',
    title: 'Swift Fintech',
    description: 'Strategic partnership that redefined our trajectory.',
    imageUrl: 'https://images.pexels.com/photos/7567460/pexels-photo-7567460.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    slug: 'nova-healthcare',
    title: 'Nova Healthcare',
    description: 'Strategic partnership that redefined our trajectory.',
    imageUrl: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    slug: 'apex-manufacturing',
    title: 'Apex Manufacturing',
    description: 'Discover how strategic solutions elevated their market position and profitability.',
    imageUrl: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920',
    testimonial: {
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'Strategic partnership that redefined our trajectory.',
    },
  },
  {
    slug: 'meridian-logistics',
    title: 'Meridian Logistics',
    description: 'Strategic partnership that redefined our trajectory.',
    imageUrl: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    slug: 'zenith-retail',
    title: 'Zenith Retail',
    description: 'Strategic partnership that redefined our trajectory.',
    imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
];

export default function CaseStudiesGrid() {
  return (
    <section className="case-studies-grid">
      <CaseStudyCard
        {...caseStudies[0]}
        variant="full"
        contentPosition="bottom"
        index={0}
      />

      <CaseStudyCard
        {...caseStudies[1]}
        variant="full"
        contentPosition="bottom"
        index={1}
      />

      <div className="case-studies-row">
        <CaseStudyCard
          {...caseStudies[2]}
          variant="half"
          contentPosition="bottom"
          index={2}
        />
        <CaseStudyCard
          {...caseStudies[3]}
          variant="half"
          contentPosition="bottom"
          index={3}
        />
      </div>

      <CaseStudyCard
        {...caseStudies[4]}
        variant="full"
        contentPosition="top"
        index={4}
      />

      <div className="case-studies-row">
        <CaseStudyCard
          {...caseStudies[5]}
          variant="half"
          contentPosition="bottom"
          index={5}
        />
        <CaseStudyCard
          {...caseStudies[6]}
          variant="half"
          contentPosition="bottom"
          index={6}
        />
      </div>
    </section>
  );
}
