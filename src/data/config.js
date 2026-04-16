const WA_NUM = import.meta.env.VITE_WHATSAPP_NUMBER || "919876543210";
const WA_MSG = import.meta.env.VITE_WA_DEFAULT_MSG || "Hi, I saw your portfolio. I want a website for my shop.";

const config = {
  phone: {
    number: WA_NUM,
    display: import.meta.env.VITE_PHONE_DISPLAY || "+91 98765 43210",
  },
  email: import.meta.env.VITE_EMAIL || "hello@webcraft.studio",
  location: import.meta.env.VITE_LOCATION || "Hyderabad, India",
  hours: import.meta.env.VITE_HOURS || "Mon – Sat, 9AM – 9PM",
  whatsapp: {
    number: WA_NUM,
    defaultMsg: WA_MSG,
    url: `https://wa.me/${WA_NUM}?text=${encodeURIComponent(WA_MSG)}`,
    projectUrl: (title) =>
      `https://wa.me/${WA_NUM}?text=${encodeURIComponent(`Hi, I saw your ${title} demo. I want a similar website.`)}`,
    formUrl: (name, email, phone, message) =>
      `https://wa.me/${WA_NUM}?text=${encodeURIComponent(`Hi, I'm ${name}. ${message} (Phone: ${phone}, Email: ${email})`)}`,
  },
  socials: {
    github: import.meta.env.VITE_SOCIAL_GITHUB || "https://github.com/",
    linkedin: import.meta.env.VITE_SOCIAL_LINKEDIN || "https://linkedin.com/",
    twitter: import.meta.env.VITE_SOCIAL_TWITTER || "https://twitter.com/",
    instagram: import.meta.env.VITE_SOCIAL_INSTAGRAM || "https://instagram.com/",
    whatsapp: `https://wa.me/${WA_NUM}`,
  },
};

export default config;
