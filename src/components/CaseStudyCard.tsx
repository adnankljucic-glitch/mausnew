import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ImageWithSkeleton } from './ImageWithSkeleton';

const EASE = [0.22, 1, 0.36, 1] as const;

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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-15%' }}
      transition={{ duration: 0.9, ease: EASE, delay: index * 0.08 }}
    >
      <Link to={`/cases/${slug}`} className="case-card-link">
        {/* Image wrapper — Framer Motion owns hover zoom + clip-path reveal */}
        <motion.div
          className="case-card-image-wrap"
          initial={{ clipPath: 'inset(8% 8% 8% 8%)', opacity: 0 }}
          whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 1.4, ease: EASE }}
        >
          <ImageWithSkeleton src={imageUrl} alt={title} className="case-card-image" />
        </motion.div>

        {/* Deep cinematic overlay */}
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
