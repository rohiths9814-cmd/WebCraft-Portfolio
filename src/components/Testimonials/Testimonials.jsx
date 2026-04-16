import { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import testimonialsData from "../../data/testimonials";
import styles from "./Testimonials.module.css";

function Card({ t, delay = 0 }) {
  return (
    <ScrollReveal delay={delay}>
      <div className={styles.card}>
        <HiOutlineChatBubbleBottomCenterText className={styles.quoteIcon} />
        <div className={styles.stars}>
          {Array.from({ length: t.rating }).map((_, j) => (
            <FaStar key={j} className={styles.star} />
          ))}
        </div>
        <p className={styles.text}>"{t.text}"</p>
        <div className={styles.author}>
          <div className={styles.avatar} style={{ background: `linear-gradient(135deg, ${getGrad(t.gradient)})` }}>
            {t.avatar}
          </div>
          <div>
            <div className={styles.name}>{t.name}</div>
            <div className={styles.biz}>{t.business}</div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Testimonials() {
  const [cur, setCur] = useState(0);
  const next = () => setCur((p) => (p + 1) % testimonialsData.length);
  const prev = () => setCur((p) => (p - 1 + testimonialsData.length) % testimonialsData.length);

  return (
    <section id="testimonials" className={styles.section}>
      <div className="container">
        <ScrollReveal>
          <div className={styles.header}>
            <p className="section-label">Testimonials</p>
            <h2 className="section-title">Loved by <span className="grad-text">Business Owners</span></h2>
            <p className="section-subtitle">Real feedback from local business owners who trusted me with their online presence.</p>
            <div className="divider" />
          </div>
        </ScrollReveal>

        {/* Desktop */}
        <div className={styles.grid}>
          {testimonialsData.slice(0, 3).map((t, i) => (
            <Card key={t.id} t={t} delay={i * 0.12} />
          ))}
        </div>
        {testimonialsData.length > 3 && (
          <div className={styles.gridBottom}>
            {testimonialsData.slice(3, 5).map((t, i) => (
              <Card key={t.id} t={t} delay={0.4 + i * 0.12} />
            ))}
          </div>
        )}

        {/* Mobile */}
        <div className={styles.mobile}>
          <Card t={testimonialsData[cur]} />
          <div className={styles.navRow}>
            <div className={styles.dots}>
              {testimonialsData.map((_, i) => (
                <button key={i} onClick={() => setCur(i)} className={`${styles.dot} ${i === cur ? styles.dotActive : ""}`} aria-label={`Review ${i + 1}`} />
              ))}
            </div>
            <div className={styles.arrows}>
              <button onClick={prev} className={styles.arrow} aria-label="Previous"><FaChevronLeft /></button>
              <button onClick={next} className={styles.arrow} aria-label="Next"><FaChevronRight /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function getGrad(g) {
  const m = { "from-purple-500 to-blue-500": "#A855F7, #3B82F6", "from-green-500 to-teal-500": "#22C55E, #14B8A6", "from-orange-500 to-red-500": "#F97316, #EF4444", "from-pink-500 to-purple-500": "#EC4899, #A855F7", "from-cyan-500 to-blue-500": "#06B6D4, #3B82F6" };
  return m[g] || "#7C5CFC, #5B3FD4";
}
