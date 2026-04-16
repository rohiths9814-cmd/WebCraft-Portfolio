import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaExternalLinkAlt, FaWhatsapp, FaCheck, FaClock } from "react-icons/fa";
import { HiOutlineSparkles, HiOutlineWrenchScrewdriver, HiOutlineLightBulb } from "react-icons/hi2";
import { useEffect } from "react";
import config from "../../data/config";
import styles from "./PortfolioModal.module.css";

function getColors(g) {
  const m = {
    "from-amber-500 to-orange-600": "#F59E0B, #EA580C",
    "from-pink-500 to-rose-600": "#EC4899, #E11D48",
    "from-green-500 to-emerald-600": "#22C55E, #059669",
    "from-red-500 to-rose-600": "#EF4444, #E11D48",
    "from-purple-500 to-fuchsia-600": "#A855F7, #C026D3",
    "from-cyan-500 to-blue-600": "#06B6D4, #2563EB",
    "from-orange-500 to-red-600": "#F97316, #DC2626",
    "from-teal-500 to-cyan-600": "#14B8A6, #0891B2",
    "from-indigo-500 to-violet-600": "#6366F1, #7C3AED",
    "from-yellow-500 to-amber-600": "#EAB308, #D97706",
  };
  return m[g] || "#7C5CFC, #5B3FD4";
}

export default function PortfolioModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const esc = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", esc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", esc);
    };
  }, [onClose]);

  if (!project) return null;
  const Icon = project.icon;
  const colors = getColors(project.gradient);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.backdrop}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          onClick={(e) => e.stopPropagation()}
          className={styles.modal}
        >
          <button onClick={onClose} className={styles.close} aria-label="Close">
            <FaTimes />
          </button>

          <div className={styles.banner} style={{ background: `linear-gradient(135deg, ${colors})` }}>
            <div className={styles.bannerShapes}>
              <div className={styles.bannerShape1} />
              <div className={styles.bannerShape2} />
            </div>
            <div className={styles.bannerCenter}>
              <div className={styles.bannerIcon}><Icon /></div>
              <h2 className={styles.bannerTitle}>{project.title}</h2>
              <span className={styles.bannerTag}>{project.category}</span>
            </div>
            <div className={styles.bannerFade} />
          </div>

          <div className={styles.body}>
            <p className={styles.desc}>{project.description}</p>

            <h3 className={styles.blockTitle}>
              <HiOutlineSparkles style={{ color: "var(--brand)" }} /> Key Features
            </h3>
            <div className={styles.features}>
              {project.features.map((f) => (
                <div key={f} className={styles.feature}>
                  <div className={styles.featureIcon} style={{ background: `linear-gradient(135deg, ${colors})` }}>
                    <FaCheck />
                  </div>
                  <span className={styles.featureText}>{f}</span>
                </div>
              ))}
            </div>

            <h3 className={styles.blockTitle}>
              <HiOutlineLightBulb style={{ color: "var(--cyan)" }} /> Business Benefits
            </h3>
            <div className={styles.benefits}>
              {project.benefits.map((b) => (
                <div key={b} className={styles.benefit}>
                  <div className={styles.benefitDot} />
                  <span className={styles.benefitText}>{b}</span>
                </div>
              ))}
            </div>

            <h3 className={styles.blockTitle}>
              <HiOutlineWrenchScrewdriver style={{ color: "var(--brand-light)" }} /> Tech Stack
            </h3>
            <div className={styles.techPills}>
              {project.tech.map((t) => (
                <span key={t} className={styles.techPill}>{t}</span>
              ))}
            </div>

            <div className={styles.actions}>
              {!project.comingSoon ? (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                  className={styles.actionBtn} style={{ background: `linear-gradient(135deg, ${colors})` }}>
                  <FaExternalLinkAlt style={{ fontSize: 12 }} /> View Live Demo
                </a>
              ) : (
                <div className={`${styles.actionBtn} ${styles.actionDisabled}`}>
                  <FaClock style={{ fontSize: 12 }} /> Coming Soon
                </div>
              )}
              <a
                href={config.whatsapp.projectUrl(project.title)}
                target="_blank" rel="noopener noreferrer"
                className={`${styles.actionBtn} ${styles.actionWa}`}
              >
                <FaWhatsapp /> Get This Website
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
