import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import PortfolioModal from "../PortfolioModal/PortfolioModal";
import projects from "../../data/projects";
import styles from "./Portfolio.module.css";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className={styles.section}>
      <div className="container">
        <ScrollReveal>
          <div className={styles.header}>
            <p className="section-label">Portfolio</p>
            <h2 className="section-title">
              Websites That <span className="grad-text">Win Customers</span>
            </h2>
            <p className="section-subtitle">
              Each project is crafted to attract customers and drive real business growth.
            </p>
            <div className="divider" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className={styles.filters}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`${styles.filterBtn} ${filter === cat ? styles.filterActive : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={styles.grid}
          >
            {filtered.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.06}>
                <PortfolioCard project={project} onViewDetails={setSelected} />
              </ScrollReveal>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {selected && <PortfolioModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
