import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, CheckCircle, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import HeroServicesWrapper from '../components/HeroServicesWrapper';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const specialists = [
  {
    name: 'Davor Maus',
    title: 'Technical Architect',
    email: 'davor@maus.ba',
    image: '/MAUS_54.jpg',
  },
  {
    name: 'Almir Mesanovic',
    title: 'Technical Architect',
    email: 'almir@maus.ba',
    image: '/Almir.png',
  },
];

const outcomes = [
  {
    title: 'Technical Feasibility',
    description: 'A clear assessment of your current stack and growth potential.',
  },
  {
    title: 'Efficiency Audit',
    description: 'High-level estimates on time savings and operational ROI.',
  },
  {
    title: 'Strategic Roadmap',
    description: 'A concrete set of next steps to move your project from idea to execution.',
  },
];

export default function DiscoveryCallPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const { error: submitError } = await supabase
      .from('discovery_leads')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
        },
      ]);

    setIsSubmitting(false);

    if (submitError) {
      setError('Something went wrong. Please try again.');
      return;
    }

    setIsSubmitted(true);
  };

  return (
    <div className="discovery-page">
      <HeroServicesWrapper variant="discovery" autoHeight>
        <section className="discovery-hero discovery-hero-animated">
          <div className="manyone-grid">
            <motion.div
              className="discovery-hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <h1 className="discovery-headline">
                Let's map out your<br className="discovery-headline-break" /> next digital advantage.
              </h1>
              <p className="discovery-subheadline">
                A Discovery Call is a 30-minute strategic briefing where we evaluate your potential for workflow automation and software optimization. No sales pitches—just pure expert insight.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="discovery-scroll-indicator md:hidden"
            onClick={scrollToContent}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="flex flex-col items-start gap-1 text-white/50 hover:text-white transition-colors"
            >
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold">
                Scroll
              </span>
              <ArrowDown size={20} strokeWidth={1.5} />
            </motion.div>
          </motion.div>
        </section>
      </HeroServicesWrapper>

      <section className="discovery-main">
        <div className="manyone-grid">
          <div className="discovery-grid">
            <motion.div
              className="discovery-profiles-column"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            >
              <h3 className="discovery-profiles-tagline">
                Consult with a specialist, not a salesperson.
              </h3>
              <p className="discovery-profiles-context">
                We believe in direct communication. You will speak with a Senior Developer or Architect who understands the complexity of your infrastructure from day one.
              </p>

              <div className="discovery-specialists">
                {specialists.map((specialist, index) => (
                  <div key={index} className="discovery-specialist-card">
                    <div className="discovery-specialist-avatar">
                      <img src={specialist.image} alt={specialist.name} />
                    </div>
                    <div className="discovery-specialist-info">
                      <h4 className="discovery-specialist-name">{specialist.name}</h4>
                      <p className="discovery-specialist-title">{specialist.title} / <a href={`mailto:${specialist.email}`} className="discovery-specialist-email">E-mail</a></p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="discovery-outcomes">
                <h4 className="discovery-outcomes-title">What you'll get:</h4>
                <ul className="discovery-outcomes-list">
                  {outcomes.map((outcome, index) => (
                    <li key={index} className="discovery-outcome-item">
                      <span className="discovery-outcome-label">{outcome.title}</span>
                      <span className="discovery-outcome-desc">{outcome.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="discovery-form-column"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            >
              <div className="discovery-form-container">
                {isSubmitted ? (
                  <div className="discovery-success">
                    <CheckCircle size={48} strokeWidth={1.5} className="discovery-success-icon" />
                    <h3 className="discovery-success-title">Request Received</h3>
                    <p className="discovery-success-text">
                      Thank you for your interest. We'll be in touch within 24 hours to schedule your discovery call.
                    </p>
                  </div>
                ) : (
                  <>
                    <form onSubmit={handleSubmit} className="discovery-form">
                      <div className="discovery-form-group">
                        <label htmlFor="name" className="discovery-label">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="discovery-input"
                          placeholder="John Smith"
                        />
                      </div>

                      <div className="discovery-form-group">
                        <label htmlFor="email" className="discovery-label">Work Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="discovery-input"
                          placeholder="john@company.com"
                        />
                      </div>

                      <div className="discovery-form-group">
                        <label htmlFor="company" className="discovery-label">Company</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          className="discovery-input"
                          placeholder="Acme Inc."
                        />
                      </div>

                      <div className="discovery-form-group">
                        <label htmlFor="message" className="discovery-label">What would you like to discuss?</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="discovery-textarea"
                          placeholder="Tell us briefly about your project or challenge..."
                        />
                      </div>

                      {error && (
                        <p className="discovery-error">{error}</p>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="discovery-submit"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 size={20} className="discovery-spinner" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            BOOK A DISCOVERY CALL
                            <ArrowRight size={20} strokeWidth={1.5} />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
