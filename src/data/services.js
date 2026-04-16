import { FaGlobe, FaWhatsapp, FaRocket } from 'react-icons/fa';

const services = [
  {
    id: 1,
    icon: FaGlobe,
    title: "Business Websites",
    description: "Professional, mobile-friendly websites designed specifically for local businesses. Stand out from competitors with a stunning online presence.",
    gradient: "from-blue-500 to-purple-600",
    features: ["Custom Design", "Mobile Responsive", "SEO Optimized"]
  },
  {
    id: 2,
    icon: FaWhatsapp,
    title: "WhatsApp Ordering",
    description: "Integrated WhatsApp ordering system that lets your customers place orders directly — no app download needed. Simple, fast, and effective.",
    gradient: "from-green-500 to-emerald-600",
    features: ["Direct Orders", "No App Needed", "Instant Connect"]
  },
  {
    id: 3,
    icon: FaRocket,
    title: "Fast Delivery",
    description: "Get your website up and running in just 2-3 days. Quick turnaround without compromising on quality or design excellence.",
    gradient: "from-orange-500 to-red-600",
    features: ["2-3 Day Delivery", "Premium Quality", "Free Revisions"]
  }
];

export default services;
