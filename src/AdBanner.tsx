
import { motion } from "framer-motion";

export default function AdBanner() {
  return (
    <aside className="ad-sticky">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        className="ad-card"
      >
        <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 8 }}>🥭 Juicy mango • LIMITED OFFER</div>
        <h3 className="ad-title">Summer Mango Box</h3>
        <p className="ad-sub">Hand-picked Alphonso & Kesar. Ships fresh every Friday.</p>

        <button className="ad-cta">Add to Cart — $19.99</button>

        <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 10 }}>
          Free delivery over $29 · 2-day freshness guarantee
        </div>

        <div style={{ marginTop: 14, display: "flex", gap: 10 }}>
          <small>🍯 Try our <a href="#" style={{ fontWeight: 700 }}>Mango Jam</a></small>
        </div>
      </motion.div>
    </aside>
  );
}