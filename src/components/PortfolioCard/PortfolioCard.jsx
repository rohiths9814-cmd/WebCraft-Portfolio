import { FaExternalLinkAlt, FaEye, FaClock } from "react-icons/fa";
import styles from "./PortfolioCard.module.css";

export default function PortfolioCard({ project, onViewDetails }) {
  const Icon = project.icon;

  return (
    <div className={styles.card} onClick={() => onViewDetails(project)}>
      <div className={styles.preview}>
        <div className={styles.previewBg} style={{ background: `linear-gradient(135deg, ${getColors(project.gradient)})` }}>
          <div className={styles.shapes}>
            <div className={styles.shape1} />
            <div className={styles.shape2} />
            <div className={styles.shape3} />
          </div>
          <div className={styles.iconWrap}>
            <div className={styles.iconBox}><Icon /></div>
          </div>
        </div>

        <div className={styles.overlay}>
          <div className={styles.overlayBtns}>
            {!project.comingSoon ? (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="btn-primary" style={{ fontSize: 12, padding: "10px 18px" }}>
                <FaExternalLinkAlt style={{ fontSize: 10 }} /> <span>Live Demo</span>
              </a>
            ) : (
              <span className={styles.soon} style={{ position: 'static', fontSize: 11 }}>
                <FaClock style={{ fontSize: 10 }} /> Coming Soon
              </span>
            )}
            <button onClick={(e) => { e.stopPropagation(); onViewDetails(project); }} className="btn-ghost" style={{ fontSize: 12, padding: "10px 18px" }}>
              <FaEye style={{ fontSize: 10 }} /> <span>Details</span>
            </button>
          </div>
        </div>

        <span className={styles.category}>{project.category}</span>
        {project.comingSoon && (
          <span className={styles.soon}><FaClock style={{ fontSize: 8 }} /> SOON</span>
        )}
        <div className={styles.bottomGrad} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDesc}>{project.shortDesc}</p>
      </div>
    </div>
  );
}

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
