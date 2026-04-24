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
    image: "https://media.maus.ba/media/z1igwr1n/pexels-thirdman-8940510.jpg?width=1110&height=1536&v=1daf23ac1e423f0&mode=crop",
    videoUrl: "https://ttycsupkjrsqjvqaxtca.supabase.co/storage/v1/object/public/MAUS%20VIDEOS/hospital.mp4",
    category: "Healthcare",
    linkUrl: "/industries/healthcare"
  },
  {
    title: "Booking & Ticketing",
    description: "Our platform brings together advanced digital booking tools with data-driven marketing that improves your operations and your guests' experiences.",
    videoUrl: "https://media.inetdesign.dk/media/0ylhnh0i/freepik__a-calm-coastal-landscape-with-a-fixed-camera-in-an__11200.mp4",
    category: "Tourism & Events",
    linkUrl: "/cases/run-events"
  },
  {
    title: "Sustainability and water cycle",
    description: "Assisting companies with legacy software by providing modern, data-driven solutions for efficient water management and sustainability.",
    image: "https://media.maus.ba/media/f0thtqcb/pexels-funda-izgi-236637469-18140302.jpg?width=2280&height=1536&v=1daeccff25c4690&mode=crop",
    category: "Utilities",
    linkUrl: "#"
  },
  {
    title: "IoT & Smart Devices",
    description: "Partnered with Sanovo to deliver advanced solutions for egg processing machinery.",
    image: "https://media.maus.ba/media/heqh5ti4/sanovo.webp?width=2280&height=1536&v=1daee53c8107930&mode=crop",
    category: "Smart Home",
    linkUrl: "#"
  },
  {
    title: "Smart Home",
    description: "Advanced cooking technology with multiple measurement points ensures precise cooking control and improved food safety.",
    image: "https://media.maus.ba/media/gkkpxyed/7_750x.webp?width=3060&height=1536&v=1daf2e7c2e97d0&mode=crop",
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
