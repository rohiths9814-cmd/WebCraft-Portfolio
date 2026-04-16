import { 
  FaCouch, FaBirthdayCake, FaShoppingCart, FaDumbbell, 
  FaCut, FaMobileAlt, FaUtensils, FaCapsules, 
  FaTshirt, FaBolt 
} from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "Furniture Store",
    slug: "furniture-store",
    category: "E-Commerce",
    icon: FaCouch,
    gradient: "from-amber-500 to-orange-600",
    accentColor: "#F59E0B",
    description: "Premium furniture showcase with elegant product galleries and WhatsApp ordering.",
    shortDesc: "Luxury furniture shopping experience",
    demoUrl: "https://demo.furniture.rohithsec.in",
    features: [
      "Interactive product catalog",
      "WhatsApp direct ordering",
      "Responsive gallery layouts",
      "Customer review system",
      "Delivery information section"
    ],
    benefits: [
      "Showcase premium products beautifully",
      "Convert visitors to buyers via WhatsApp",
      "Build trust with professional design"
    ],
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: 2,
    title: "Bakery Website",
    slug: "bakery",
    category: "Food & Beverage",
    icon: FaBirthdayCake,
    gradient: "from-pink-500 to-rose-600",
    accentColor: "#EC4899",
    description: "Warm and inviting bakery website with product catalog, online ordering, and delivery system.",
    shortDesc: "Delicious bakery with online ordering",
    demoUrl: "https://demo.bakery.rohithsec.in",
    features: [
      "Beautiful product showcase",
      "Category-wise menu browsing",
      "WhatsApp order placement",
      "Customer testimonials",
      "Location & delivery info"
    ],
    benefits: [
      "Attract more walk-in customers",
      "Enable easy online cake orders",
      "Build brand recognition online"
    ],
    tech: ["React", "Vite", "CSS3", "Framer Motion"]
  },
  {
    id: 3,
    title: "Grocery Store",
    slug: "grocery",
    category: "Retail",
    icon: FaShoppingCart,
    gradient: "from-green-500 to-emerald-600",
    accentColor: "#10B981",
    description: "Modern grocery store with product categories, daily deals, and quick WhatsApp ordering system.",
    shortDesc: "Fresh groceries delivered to your door",
    demoUrl: "#",
    features: [
      "Product category navigation",
      "Daily deals & offers section",
      "Search functionality",
      "WhatsApp cart system",
      "Delivery tracking info"
    ],
    benefits: [
      "Compete with online grocery apps",
      "Retain loyal customers digitally",
      "Increase daily order volume"
    ],
    tech: ["React", "Vite", "Tailwind CSS"],
    comingSoon: true
  },
  {
    id: 4,
    title: "Gym & Fitness",
    slug: "gym",
    category: "Health & Fitness",
    icon: FaDumbbell,
    gradient: "from-red-500 to-rose-600",
    accentColor: "#EF4444",
    description: "High-energy gym website with membership plans, trainer profiles, and class schedules.",
    shortDesc: "Power up your fitness journey",
    demoUrl: "#",
    features: [
      "Membership plan comparisons",
      "Trainer profile showcase",
      "Class schedule & booking",
      "Transformation gallery",
      "WhatsApp inquiry"
    ],
    benefits: [
      "Attract new gym members online",
      "Showcase trainer expertise",
      "Easy membership registration"
    ],
    tech: ["React", "Vite", "Tailwind CSS"],
    comingSoon: true
  },
  {
    id: 5,
    title: "Beauty Salon",
    slug: "salon",
    category: "Beauty & Wellness",
    icon: FaCut,
    gradient: "from-purple-500 to-fuchsia-600",
    accentColor: "#A855F7",
    description: "Elegant salon website with service menus, stylist profiles, and appointment booking via WhatsApp.",
    shortDesc: "Glamorous salon experience online",
    demoUrl: "#",
    features: [
      "Service menu with pricing",
      "Stylist portfolio showcase",
      "Before & after gallery",
      "WhatsApp appointment booking",
      "Customer reviews"
    ],
    benefits: [
      "Book more appointments online",
      "Showcase your work portfolio",
      "Build a loyal client base"
    ],
    tech: ["React", "Vite", "Tailwind CSS"],
    comingSoon: true
  },
  {
    id: 6,
    title: "Mobile Shop",
    slug: "mobile-shop",
    category: "Electronics",
    icon: FaMobileAlt,
    gradient: "from-cyan-500 to-blue-600",
    accentColor: "#06B6D4",
    description: "Tech-forward mobile shop with product comparisons, specifications, and WhatsApp price inquiries.",
    shortDesc: "Latest mobiles & accessories",
    demoUrl: "#",
    features: [
      "Product specification display",
      "Brand-wise filtering",
      "Price comparison layout",
      "WhatsApp price inquiry",
      "EMI calculator widget"
    ],
    benefits: [
      "Showcase inventory digitally",
      "Handle price inquiries easily",
      "Compete with online retailers"
    ],
    tech: ["React", "Vite", "Tailwind CSS"],
    comingSoon: true
  },
  {
    id: 7,
    title: "Restaurant",
    slug: "restaurant",
    category: "Food & Beverage",
    icon: FaUtensils,
    gradient: "from-orange-500 to-red-600",
    accentColor: "#F97316",
    description: "Appetizing restaurant website with digital menu, table reservations, and food delivery ordering.",
    shortDesc: "Fine dining meets digital",
    demoUrl: "#",
    features: [
      "Interactive digital menu",
      "Table reservation system",
      "Food gallery with categories",
      "WhatsApp food ordering",
      "Customer reviews & ratings"
    ],
    benefits: [
      "Increase table reservations",
      "Enable online food ordering",
      "Build brand presence online"
    ],
    tech: ["React", "Vite", "Tailwind CSS"],
    comingSoon: true
  },
  {
    id: 8,
    title: "Medical Shop",
    slug: "medical-shop",
    category: "Healthcare",
    icon: FaCapsules,
    gradient: "from-teal-500 to-cyan-600",
    accentColor: "#14B8A6",
    description: "Trusted medical shop website with medicine search, prescription upload, and home delivery system.",
    shortDesc: "Your trusted pharmacy online",
    demoUrl: "#",
    features: [
      "Medicine search functionality",
      "Prescription upload via WhatsApp",
      "Home delivery information",
      "Health tips & blog section",
      "Emergency contact display"
    ],
    benefits: [
      "Serve customers remotely",
      "Easy prescription processing",
      "Build trust in community"
    ],
    tech: ["React", "Vite", "Tailwind CSS"],
    comingSoon: true
  },
  {
    id: 9,
    title: "Textile Shop",
    slug: "textile-shop",
    category: "Fashion",
    icon: FaTshirt,
    gradient: "from-indigo-500 to-violet-600",
    accentColor: "#6366F1",
    description: "Stylish textile shop with collection showcase, fabric catalog, and custom order inquiry system.",
    shortDesc: "Premium fabrics & fashion",
    demoUrl: "#",
    features: [
      "Collection showcase by season",
      "Fabric type catalog",
      "Custom tailoring inquiry",
      "WhatsApp bulk ordering",
      "New arrivals section"
    ],
    benefits: [
      "Showcase collections online",
      "Attract wholesale buyers",
      "Enable custom order requests"
    ],
    tech: ["React", "Vite", "Tailwind CSS"],
    comingSoon: true
  },
  {
    id: 10,
    title: "Electrical Shop",
    slug: "electrical-shop",
    category: "Electronics",
    icon: FaBolt,
    gradient: "from-yellow-500 to-amber-600",
    accentColor: "#EAB308",
    description: "Modern electrical shop with product catalog, brand showcase, and installation service booking.",
    shortDesc: "Quality electrical solutions",
    demoUrl: "#",
    features: [
      "Product catalog with categories",
      "Brand showcase section",
      "Installation service booking",
      "WhatsApp quote request",
      "Warranty information display"
    ],
    benefits: [
      "Display full product range",
      "Book installation services",
      "Handle quote requests easily"
    ],
    tech: ["React", "Vite", "Tailwind CSS"],
    comingSoon: true
  }
];

export default projects;
