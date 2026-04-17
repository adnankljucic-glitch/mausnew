export interface ServiceCard {
  title: string;
  description: string;
  image: string;
  services: string[];
  linkUrl: string;
}

export const serviceCards: ServiceCard[] = [
  {
    title: "AI & Automation",
    description: "Automate processes and reduce manual tasks with AI and intelligent workflows. We implement solutions that save time, reduce errors, and free up resources for what creates value.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    linkUrl: "/services/ai-automation",
    services: [
      "Software Engineering",
      "AI & Automation",
      "Legacy Modernization"
    ]
  },
  {
    title: "Strategy & Execution",
    description: "From idea to launch. We help you make the right decisions and execute fast. Strategy that actually delivers results.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
    linkUrl: "/strategic-advisory",
    services: [
      "Business Development",
      "Product & Concept Development",
      "Digital Transformation"
    ]
  },
  {
    title: "Digital Products & Experiences",
    description: "We design and build digital products users love. Apps and platforms that combine strong UX with robust technology.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    linkUrl: "/services/digital-products-ux",
    services: [
      "UX/UI Design",
      "Ticketing and booking systems",
      "Service Design"
    ]
  },
  {
    title: "Scale & Performance",
    description: "Build infrastructure that grows with you. We optimize performance, reduce costs, and ensure your systems can handle growth.",
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
    linkUrl: "/services/scale-and-performance",
    services: [
      "Performance, stability, and cost optimization",
      "Scale infrastructure, teams & processes on-demand",
      "Continuous improvement driven by data, not assumptions"
    ]
  }
];
