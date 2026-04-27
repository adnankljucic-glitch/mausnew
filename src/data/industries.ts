export interface IndustryCard {
  title: string;
  description: string;
  image?: string;
  videoUrl?: string;
  category: string;
  linkUrl: string;
}

export const industryCards: IndustryCard[] = [
  {
    title: "Fintech & Payment Systems",
    description: "Our platform brings together advanced digital booking tools with data-driven marketing that improves your operations and your guests' experiences.",
    image: "/pay.jpg",
    category: "Fintech",
    linkUrl: "#"
  },
  {
    title: "Healthcare",
    description: "Partnered with one of Scandinavia's largest firms to develop healthcare systems used in hospitals.",
    image: "/hardwareanalytics.webp",
    videoUrl: "https://ttycsupkjrsqjvqaxtca.supabase.co/storage/v1/object/public/MAUS%20VIDEOS/intro_hosipital.mp4",
    category: "Healthcare",
    linkUrl: "/industries/healthcare"
  },
  {
    title: "Booking & Ticketing",
    description: "Our platform brings together advanced digital booking tools with data-driven marketing that improves your operations and your guests' experiences.",
    videoUrl: "https://ttycsupkjrsqjvqaxtca.supabase.co/storage/v1/object/public/MAUS%20VIDEOS/runevents_intro.mp4",
    category: "Tourism & Events",
    linkUrl: "/cases/run-events"
  },
  {
    title: "Sustainability and water cycle",
    description: "Assisting companies with legacy software by providing modern, data-driven solutions for efficient water management and sustainability.",
    image: "https://images.pexels.com/photos/18140302/pexels-photo-18140302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Utilities",
    linkUrl: "#"
  },
  {
    title: "IoT & Smart Devices",
    description: "Partnered with Sanovo to deliver advanced solutions for egg processing machinery.",
    image: "/7_750x.webp",
    category: "Smart Home",
    linkUrl: "#"
  },
  {
    title: "Smart Home",
    description: "Advanced cooking technology with multiple measurement points ensures precise cooking control and improved food safety.",
    image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "IoT",
    linkUrl: "#"
  },
  {
    title: "Real Estate & PropTech",
    description: "Automated valuation models, tenant management portals, and property intelligence platforms built for modern real estate.",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "PropTech",
    linkUrl: "#"
  }
];
