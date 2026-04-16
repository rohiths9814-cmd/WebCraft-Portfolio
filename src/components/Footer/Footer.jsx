import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp, FaArrowUp } from "react-icons/fa";
import config from "../../data/config";
import styles from "./Footer.module.css";

const socials = [
  { icon: FaGithub, href: config.socials.github, label: "GitHub" },
  { icon: FaLinkedin, href: config.socials.linkedin, label: "LinkedIn" },
  { icon: FaTwitter, href: config.socials.twitter, label: "Twitter" },
  { icon: FaInstagram, href: config.socials.instagram, label: "Instagram" },
  { icon: FaWhatsapp, href: config.socials.whatsapp, label: "WhatsApp" },
];

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Features", href: "#features" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const goto = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <div className={styles.brand}>
              <div className={styles.brandIcon}>W</div>
              <span className={styles.brandText}>Web<span className="grad-text">Craft</span></span>
            </div>
            <p className={styles.brandDesc}>
              Premium websites for local businesses. Helping shops, restaurants & stores grow their customer base online.
            </p>
            <div className={styles.socials}>
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className={styles.social}>
                  <s.icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={(e) => goto(e, l.href)} className={styles.linkItem}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={styles.colTitle}>Contact</h4>
            <ul className={styles.contactList}>
              <li>📞 {config.phone.display}</li>
              <li>📧 {config.email}</li>
              <li>📍 {config.location}</li>
              <li>⏰ {config.hours}</li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} WebCraft Studio. Made with <FaHeart className={styles.heart} /> in India
          </p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={styles.topBtn} aria-label="Back to top">
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
