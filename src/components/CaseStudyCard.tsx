import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ImageWithSkeleton } from './ImageWithSkeleton';

interface CaseStudyCardProps {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  variant: 'full' | 'half';
  contentPosition?: 'bottom' | 'top';
  tag?: string;
  index: number;
}

export default function CaseStudyCard({
  slug,
  title,
  description,
  imageUrl,
  variant,
  contentPosition = 'bottom',
  tag,
  index,
}: CaseStudyCardProps) {
  return (
    <motion.div
      className={`case-card case-card-${variant}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.06 }}
    >
      <Link to={`/cases/${slug}`} className="case-card-link">
        <ImageWithSkeleton src={imageUrl} alt={title} className="case-card-image" />

        {/* Deep cinematic overlay — same pattern as hero sections */}
        <div className="case-card-overlay" />

        {/* Content */}
        <div className={`case-card-content case-card-content-${contentPosition}`}>
          <div className="case-card-text">
            {tag && <span className="case-card-tag">{tag}</span>}
            <h3 className="case-card-title">{title}</h3>
            {variant === 'full' && (
              <p className="case-card-description">{description}</p>
            )}
            <span className="btn-primary case-card-btn">
              View Case Study
              <ArrowUpRight size={16} strokeWidth={2} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
