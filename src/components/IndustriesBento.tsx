import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Industry {
  title: string;
  description: string;
  image: string;
  category: string;
  linkUrl: string;
}

const industries: Industry[] = [
  {
    title: "Fintech & Payment Systems",
    description: "Building secure, scalable payment solutions and financial technology platforms that handle millions of transactions.",
    image: "/pay.jpg",
    category: "Financial Services",
    linkUrl: "/industries/fintech"
  },
  {
    title: "Healthcare",
    description: "Partnered with Scandinavia's largest firms to develop healthcare systems used in hospitals across the region.",
    image: "https://media.maus.ba/media/z1igwr1n/pexels-thirdman-8940510.jpg?width=1110&height=1536&v=1daf23ac1e423f0&mode=crop",
    category: "Healthcare",
    linkUrl: "/industries/healthcare"
  },
  {
    title: "Booking & Ticketing",
    description: "Advanced digital booking tools with data-driven marketing that improves operations and guest experiences.",
    image: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Tourism & Events",
    linkUrl: "/industries/booking-ticketing"
  },
  {
    title: "Sustainability & Water Cycle",
    description: "Modern, data-driven solutions for efficient water management and sustainability, replacing legacy systems.",
    image: "https://media.maus.ba/media/f0thtqcb/pexels-funda-izgi-236637469-18140302.jpg?width=2280&height=1536&v=1daeccff25c4690&mode=crop",
    category: "Utilities",
    linkUrl: "/industries/sustainability"
  },
  {
    title: "IoT & Smart Devices",
    description: "Advanced solutions for manufacturing and processing machinery with real-time monitoring and control.",
    image: "https://media.maus.ba/media/heqh5ti4/sanovo.webp?width=2280&height=1536&v=1daee53c8107930&mode=crop",
    category: "Smart Home",
    linkUrl: "/industries/iot-smart-devices"
  },
  {
    title: "Smart Home & IoT",
    description: "Advanced IoT technology with multiple measurement points for precise control and improved safety.",
    image: "https://media.maus.ba/media/gkkpxyed/7_750x.webp?width=3060&height=1536&v=1daf2e7c2e97d0&mode=crop",
    category: "IoT & Smart Devices",
    linkUrl: "/industries/smart-home"
  }
];

export default function IndustriesBento() {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [revealedCards, setRevealedCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !visible) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [visible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1 && !revealedCards.has(index)) {
              setRevealedCards((prev) => new Set(prev).add(index));
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, [revealedCards]);

  return (
    <section
      id="industries"
      ref={sectionRef}
      className={`industries-bento-section ${visible ? 'industries-bento-visible' : ''}`}
    >
      <div className="manyone-grid">
        <div className="industries-bento-header">
          <p className="industries-bento-eyebrow">INDUSTRIES</p>
          <h2 className="industries-bento-headline">Industries we serve</h2>
          <p className="industries-bento-subheadline">
            Driving innovation across key industries with tailored solutions that solve real business challenges
          </p>
        </div>

        <div className="industries-bento-grid">
          {industries.map((industry, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`industries-bento-card ${revealedCards.has(index) ? 'industries-bento-card-revealed' : ''}`}
              style={{
                transitionDelay: revealedCards.has(index) ? `${index * 80}ms` : '0ms',
                cursor: 'pointer',
              }}
              onClick={() => navigate(industry.linkUrl)}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigate(industry.linkUrl)}
            >
              <div className="industries-bento-card-image-wrapper">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="industries-bento-card-image"
                />
                <div className="industries-bento-card-overlay" />
              </div>
              <div className="industries-bento-card-content">
                <span className="industries-bento-card-category">{industry.category}</span>
                <h3 className="industries-bento-card-title">{industry.title}</h3>
                <p className="industries-bento-card-description">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
