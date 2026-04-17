interface Logo {
  name: string;
}

const logos: Logo[] = [
  { name: '.NET' },
  { name: 'Microsoft Azure' },
  { name: 'React' },
  { name: 'Angular' },
  { name: 'AI & Machine Learning' },
  { name: 'Application Development' },
  { name: 'Cloud Operations' },
  { name: 'Cyber Protection' },
  { name: 'SAP Solutions' },
  { name: 'IoT' },
  { name: 'Product & Concept Development' },
  { name: 'Quality Intelligence & Automated Testing' },
];

export default function LogoCarousel() {
  return (
    <div className="logo-carousel-wrapper">
      <div className="logo-carousel-container">
        <div className="logo-carousel-track">
          {[...logos, ...logos].map((logo, index) => (
            <div key={`${logo.name}-${index}`} className="logo-carousel-item">
              <span className="logo-text">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
