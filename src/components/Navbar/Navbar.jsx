import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Navbar.module.css";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Why Us", href: "#features" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = links.map((l) => l.href.slice(1));
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActive(ids[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goto = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}
    >
      <nav className={styles.navInner}>
        <a href="#home" onClick={(e) => goto(e, "#home")} className={styles.logo}>
          <div className={styles.logoIcon}>W</div>
          <span className={styles.logoText}>
            Web<span className="grad-text">Craft</span>
          </span>
        </a>

        <div className={styles.links}>
          {links.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => goto(e, link.href)}
                className={`${styles.link} ${isActive ? styles.linkActive : ""}`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className={styles.linkPill}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        <div className={styles.ctaArea}>
          <a href="#contact" onClick={(e) => goto(e, "#contact")} className={`btn-primary ${styles.ctaBtn}`}>
            Let's Talk
          </a>
          <button onClick={() => setMobileOpen(!mobileOpen)} className={styles.menuBtn} aria-label="Menu">
            {mobileOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={styles.drawer}
          >
            <div className={styles.drawerInner}>
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => goto(e, link.href)}
                  className={`${styles.drawerLink} ${active === link.href.slice(1) ? styles.drawerLinkActive : ""}`}
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" onClick={(e) => goto(e, "#contact")} className={`btn-primary ${styles.drawerCta}`}>
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
