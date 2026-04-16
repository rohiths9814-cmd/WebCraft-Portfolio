import { motion } from "framer-motion";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import config from "../../data/config";
import styles from "./Hero.module.css";

const stats = [
  { val: "10+", label: "Projects" },
  { val: "50+", label: "Clients" },
  { val: "2–3 Days", label: "Delivery" },
  { val: "100%", label: "Satisfaction" },
];

const trustedBy = ["Bakeries", "Restaurants", "Salons", "Gyms", "Retailers"];

export default function Hero() {
  const goto = (e, t) => {
    e.preventDefault();
    const el = document.querySelector(t);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.dotGrid} />

      <div className={`container ${styles.heroContent}`}>
        <div className={styles.inner}>
          <ScrollReveal delay={0.1}>
            <div className={`glass ${styles.badge}`}>
              <HiOutlineSparkles style={{ color: "var(--brand)" }} />
              <span>Available for new projects — <span style={{ color: "var(--brand-light)" }}>Booking Fast</span></span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h1 className={styles.title}>
              I Build <span className="grad-text">Premium Websites</span>
              <br />
              for Local Businesses
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.35}>
            <p className={styles.subtitle}>
              Stunning websites &amp; WhatsApp ordering systems that help shops, restaurants
              &amp; stores <span style={{ color: "var(--brand-light)", fontWeight: 500 }}>get more customers online</span>.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className={styles.ctas}>
              <a href="#portfolio" onClick={(e) => goto(e, "#portfolio")} className="btn-primary" style={{ boxShadow: "var(--shadow-glow)" }}>
                <span>View My Work</span>
                <FaArrowRight style={{ fontSize: 12 }} />
              </a>
              <a href={config.whatsapp.url} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <FaWhatsapp style={{ color: "var(--whatsapp)" }} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <div className={styles.trust}>
              <span className={styles.trustLabel}>Trusted by:</span>
              {trustedBy.map((t) => (
                <span key={t} className={styles.trustTag}>{t}</span>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.7}>
          <div className={styles.stats}>
            {stats.map((s) => (
              <div key={s.label} className={`glass ${styles.stat}`}>
                <div className={`grad-text ${styles.statVal}`}>{s.val}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5 }}
        className={styles.scrollDown}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className={styles.scrollPill}
        >
          <div className={styles.scrollDot} />
        </motion.div>
      </motion.div>
    </section>
  );
}
