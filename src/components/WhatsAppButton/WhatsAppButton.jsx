import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import config from "../../data/config";
import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={config.whatsapp.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2.5, type: "spring", stiffness: 180, damping: 14 }}
      className={styles.btn}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </motion.a>
  );
}
