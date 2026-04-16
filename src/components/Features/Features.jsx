import { FaUsers, FaWhatsapp, FaMobileAlt, FaTag } from "react-icons/fa";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import styles from "./Features.module.css";

const features = [
  { icon: FaUsers, title: "Get More Customers", desc: "A professional website makes your business discoverable 24/7. New customers find you even while you sleep.", gradient: "#3B82F6, #06B6D4", metric: "3x", metricLabel: "More Inquiries" },
  { icon: FaWhatsapp, title: "Easy WhatsApp Orders", desc: "Customers browse products and order directly via WhatsApp — no apps, no registrations. Just simple ordering.", gradient: "#22C55E, #10B981", metric: "1-Click", metricLabel: "Ordering" },
  { icon: FaMobileAlt, title: "Mobile-First Design", desc: "Every website works flawlessly on phones, tablets, and desktops. 80% of your customers browse on mobile.", gradient: "#8B5CF6, #A855F7", metric: "100%", metricLabel: "Responsive" },
  { icon: FaTag, title: "Affordable Pricing", desc: "Premium quality at local-business prices. Get a world-class website without breaking the bank.", gradient: "#F97316, #EF4444", metric: "₹999", metricLabel: "Starting at" },
];

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className="container">
        <ScrollReveal>
          <div className={styles.header}>
            <p className="section-label">Why Choose Me</p>
            <h2 className="section-title">Benefits That <span className="grad-text">Actually Matter</span></h2>
            <p className="section-subtitle">Real results for real businesses — here's what you get.</p>
            <div className="divider" />
          </div>
        </ScrollReveal>

        <div className={styles.list}>
          {features.map((f, i) => (
            <ScrollReveal key={f.title} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.1}>
              <div className={styles.card}>
                <div className={styles.cardInner}>
                  <div className={styles.icon} style={{ background: `linear-gradient(135deg, ${f.gradient})` }}>
                    <f.icon />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.contentRow}>
                      <div>
                        <h3 className={styles.cardTitle}>{f.title}</h3>
                        <p className={styles.cardDesc}>{f.desc}</p>
                      </div>
                      <div className={styles.metric}>
                        <span className={styles.metricVal} style={{ background: `linear-gradient(135deg, ${f.gradient})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{f.metric}</span>
                        <span className={styles.metricLabel}>{f.metricLabel}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
