import ScrollReveal from "../ScrollReveal/ScrollReveal";
import servicesData from "../../data/services";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <ScrollReveal>
          <div className={styles.header}>
            <p className="section-label">Services</p>
            <h2 className="section-title">
              Everything You Need to <span className="grad-text">Go Online</span>
            </h2>
            <p className="section-subtitle">
              From stunning websites to WhatsApp ordering — I handle it all so you can focus on your business.
            </p>
            <div className="divider" />
          </div>
        </ScrollReveal>

        <div className={styles.cards}>
          {servicesData.map((s, i) => (
            <ScrollReveal key={s.id} delay={i * 0.12}>
              <div className={styles.card}>
                <div className={styles.cardGlow} style={{ background: `linear-gradient(135deg, ${s.gradient.includes('green') ? '#10B981' : s.gradient.includes('orange') ? '#F97316' : '#7C5CFC'}, transparent)` }} />
                <div className={styles.icon} style={{ background: `linear-gradient(135deg, ${getGradientColors(s.gradient)})` }}>
                  <s.icon />
                </div>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardDesc}>{s.description}</p>
                <div className={styles.pills}>
                  {s.features.map((f) => (
                    <span key={f} className={styles.pill}>{f}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function getGradientColors(gradient) {
  const map = {
    "from-blue-500 to-purple-600": "#3B82F6, #9333EA",
    "from-green-500 to-emerald-600": "#22C55E, #059669",
    "from-orange-500 to-red-600": "#F97316, #DC2626",
  };
  return map[gradient] || "#7C5CFC, #5B3FD4";
}
