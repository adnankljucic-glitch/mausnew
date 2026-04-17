import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  fullQuote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Adis Jugo",
    role: "CEO",
    company: "run.events",
    quote: "MAUS transformed our vision into reality with exceptional technical expertise.",
    fullQuote: "MAUS transformed our vision into reality with exceptional technical expertise. Their team understood our complex requirements and delivered a platform that exceeded our expectations. The collaboration was seamless from start to finish.",
    image: "/adis.jpg"
  },
  {
    name: "Mark Nilsson",
    role: "CEO",
    company: "Presto Denmark",
    quote: "A dynamic and highly skilled professional in the fast-paced digital landscape.",
    fullQuote: "A dynamic and highly skilled professional in the fast-paced digital landscape, driven by passion and perfectionism. To have an asset that understands your business and can work individually with an innovative mindset is key to success.",
    image: "/mark.webp"
  },
  {
    name: "Lars Nielsen",
    role: "CTO",
    company: "Jesperhus",
    quote: "Working with MAUS has been a game-changer for our digital transformation.",
    fullQuote: "Working with MAUS has been a game-changer for our digital transformation journey. Their strategic approach combined with deep technical knowledge helped us modernize our entire guest experience platform in record time.",
    image: "/lars.jpeg"
  },
  {
    name: "Almir Mesanovic",
    role: "CTO",
    company: "Inet Design",
    quote: "MAUS focuses on what actually scales: System Logic.",
    fullQuote: "In an era of commoditized frontends, MAUS focuses on what actually scales: System Logic. Their Specs Driven Development (SDD) approach handles our complex Legacy Integrations with surgical precision. They don't just build products; they architect the digital engines that allow us to integrate AI and scale without friction.",
    image: "/Almir.png"
  },
  {
    name: "Sina Wendt",
    role: "Founder",
    company: "ISPINIT",
    quote: "The team at MAUS delivers consistently high-quality solutions on time.",
    fullQuote: "The team at MAUS delivers consistently high-quality solutions on time. Their attention to detail and commitment to excellence made them the perfect partner for our property management platform redesign.",
    image: "/sina.jpeg"
  },
  {
    name: "Lars Kanstrup",
    role: "CEO",
    company: "Combine.dk",
    quote: "Their technical depth and strategic vision set them apart from other agencies.",
    fullQuote: "Their technical depth and strategic vision set them apart from other agencies. MAUS helped us build a secure, scalable platform that handles our complex requirements. Their understanding of both business requirements and technical constraints is exceptional.",
    image: "/lars-kanstrup.webp"
  }
];

interface TestimonialCardProps {
  testimonial: Testimonial;
  isVisible: boolean;
  index: number;
}

function TestimonialCard({ testimonial, isVisible, index }: TestimonialCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`testimonial-card-img ${isVisible ? 'visible' : ''}`}
      style={{ animationDelay: `${index * 0.15}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`testimonial-card-bg ${isHovered ? 'blurred' : ''}`}
        style={{ backgroundImage: `url(${testimonial.image})` }}
      />
      <div className={`testimonial-card-overlay ${isHovered ? 'active' : ''}`} />
      <div className="testimonial-card-inner">
        <div className={`testimonial-quote-short ${isHovered ? 'hidden' : ''}`}>
          "{testimonial.quote}"
        </div>
        <div className={`testimonial-quote-full ${isHovered ? 'visible' : ''}`}>
          "{testimonial.fullQuote}"
        </div>
        <div className="testimonial-author">
          <span className="testimonial-name">{testimonial.name}</span>
          <span className="testimonial-role">{testimonial.role}, {testimonial.company}</span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
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
  }, [isVisible]);

  const handlePrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  return (
    <section ref={sectionRef} className="testimonials-section">
      <div className="manyone-grid">
        <h2 className={`testimonials-headline ${isVisible ? 'visible' : ''}`}>
          What our clients say
        </h2>
        <p className={`testimonials-subheadline ${isVisible ? 'visible' : ''}`}>
          Trusted by companies across Europe to deliver innovative digital solutions
        </p>

        <div className={`testimonials-swiper-wrap ${isVisible ? 'visible' : ''}`}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2.3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3.3,
                spaceBetween: 32,
              },
            }}
            className="testimonials-swiper"
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => {
              const progress = swiper.progress * 100;
              setScrollProgress(progress);
              setCanScrollLeft(swiper.activeIndex > 0);
              setCanScrollRight(!swiper.isEnd);
            }}
            onProgress={(swiper) => {
              const progress = swiper.progress * 100;
              setScrollProgress(progress);
              setCanScrollLeft(swiper.activeIndex > 0);
              setCanScrollRight(!swiper.isEnd);
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard testimonial={testimonial} isVisible={isVisible} index={0} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="testimonials-controls">
            <button
              className="testimonials-scroll-left"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              disabled={!canScrollLeft}
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>

            <div className="testimonials-progress-bar">
              <div className="testimonials-progress-track"></div>
              <div
                className="testimonials-progress-fill"
                style={{ width: `${scrollProgress}%` }}
              ></div>
            </div>

            <button
              className="testimonials-scroll-right"
              onClick={handleNext}
              aria-label="Next testimonial"
              disabled={!canScrollRight}
            >
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
