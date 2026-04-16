import { useState } from "react";
import { FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import config from "../../data/config";
import styles from "./Contact.module.css";

const info = [
  { icon: FaPhone, label: "Phone", value: config.phone.display, href: `tel:+${config.phone.number}`, gradient: "#3B82F6, #06B6D4" },
  { icon: FaEnvelope, label: "Email", value: config.email, href: `mailto:${config.email}`, gradient: "#8B5CF6, #A855F7" },
  { icon: FaWhatsapp, label: "WhatsApp", value: "Send a message", href: config.whatsapp.url, gradient: "#22C55E, #10B981" },
  { icon: FaMapMarkerAlt, label: "Location", value: config.location, href: "#", gradient: "#F97316, #EF4444" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    window.open(config.whatsapp.formUrl(form.name, form.email, form.phone, form.message), "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <ScrollReveal>
          <div className={styles.header}>
            <p className="section-label">Contact</p>
            <h2 className="section-title">Let's Build Your <span className="grad-text">Website</span></h2>
            <p className="section-subtitle">Ready to take your business online? Reach out and I'll respond within 24 hours.</p>
            <div className="divider" />
          </div>
        </ScrollReveal>

        <div className={styles.layout}>
          <ScrollReveal direction="left" delay={0.15}>
            <div className={styles.infoCards}>
              {info.map((item) => (
                <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className={styles.infoCard}>
                  <div className={styles.infoIcon} style={{ background: `linear-gradient(135deg, ${item.gradient})` }}>
                    <item.icon />
                  </div>
                  <div>
                    <div className={styles.infoLabel}>{item.label}</div>
                    <div className={styles.infoValue}>{item.value}</div>
                  </div>
                </a>
              ))}
              <a href={config.whatsapp.url} target="_blank" rel="noopener noreferrer" className={styles.waBtn}>
                <FaWhatsapp style={{ fontSize: 18 }} />
                Chat on WhatsApp
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <form onSubmit={onSubmit} className={styles.formCard}>
              <div className={styles.formGrid}>
                <div>
                  <label htmlFor="name" className={styles.label}>Full Name</label>
                  <input type="text" id="name" name="name" value={form.name} onChange={onChange} required className="form-input" />
                </div>
                <div>
                  <label htmlFor="email" className={styles.label}>Email</label>
                  <input type="email" id="email" name="email" value={form.email} onChange={onChange} required className="form-input" />
                </div>
                <div className={styles.formFull}>
                  <label htmlFor="phone" className={styles.label}>Phone / WhatsApp</label>
                  <input type="tel" id="phone" name="phone" value={form.phone} onChange={onChange} required className="form-input" />
                </div>
                <div className={styles.formFull}>
                  <label htmlFor="message" className={styles.label}>Message</label>
                  <textarea id="message" name="message" value={form.message} onChange={onChange} required rows={4} placeholder="Tell me about your business and what kind of website you need..." className="form-input" style={{ resize: "none" }} />
                </div>
                <div className={styles.formFull}>
                  <button type="submit" className={`btn-primary ${styles.submitBtn}`} style={{ boxShadow: "var(--shadow-glow)" }}>
                    {sent ? <>✓ Opening WhatsApp...</> : <><FaPaperPlane style={{ fontSize: 12 }} /><span>Send via WhatsApp</span></>}
                  </button>
                </div>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
