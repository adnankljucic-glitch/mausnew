import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  avatar: string;
  quote: string;
}

interface CaseStudyCardProps {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  variant: 'full' | 'half';
  contentPosition?: 'bottom' | 'top';
  testimonial?: Testimonial;
  index: number;
}

export default function CaseStudyCard({
  slug,
  title,
  description,
  imageUrl,
  variant,
  contentPosition = 'bottom',
  testimonial,
  index,
}: CaseStudyCardProps) {
  return (
    <motion.div
      className={`case-card case-card-${variant}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.1 }}
    >
      <Link to={`/cases/${slug}`} className="case-card-link">
        <img src={imageUrl} alt={title} className="case-card-image" />
        <div className="case-card-overlay" />

        <div className={`case-card-content case-card-content-${contentPosition}`}>
          <div className="case-card-text">
            <h3 className="case-card-title">{title}</h3>
            {variant === 'full' && (
              <p className="case-card-description">{description}</p>
            )}
            <span className="case-card-cta">
              View Case Study
            </span>
          </div>

        </div>
      </Link>
    </motion.div>
  );
}
