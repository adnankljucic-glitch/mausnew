export interface IndustryCard {
  title: string;
  description: string;
  image: string;
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
    category: "Healthcare",
    linkUrl: "#"
  },
  {
    title: "Booking & Ticketing",
    description: "Our platform brings together advanced digital booking tools with data-driven marketing that improves your operations and your guests' experiences.",
    image: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
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
    title: "Manufacturing",
    description: "Partnered with Sanovo to deliver advanced solutions for egg processing machinery.",
    image: "https://media.maus.ba/media/heqh5ti4/sanovo.webp?width=2280&height=1536&v=1daee53c8107930&mode=crop",
    category: "Manufacturing",
    linkUrl: "#"
  },
  {
    title: "Smart Home",
    description: "Advanced cooking technology with multiple measurement points ensures precise cooking control and improved food safety.",
    image: "https://media.maus.ba/media/gkkpxyed/7_750x.webp?width=3060&height=1536&v=1daf2e7c2e97d0&mode=crop",
    category: "IoT",
    linkUrl: "#"
  }
];
