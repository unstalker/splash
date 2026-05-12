"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/content";

export default function Stats() {
  return (
    <section style={{ width: "100%", borderBottom: "1px solid var(--border-sm)" }}>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            style={{
              padding: "40px 32px",
              borderRight: i < STATS.length - 1 ? "1px solid var(--border-sm)" : "none",
              textAlign: "center",
            }}
          >
            {/* Stat value — styled to match screenshot (accent + on "Q2 '26") */}
            <div
              style={{
                fontFamily: "var(--font-display), system-ui, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(32px, 4.5vw, 56px)",
                letterSpacing: "-0.02em",
                lineHeight: 1,
                marginBottom: 10,
                color: "var(--t100)",
              }}
            >
              {stat.display === "Q2 '26" ? (
                <>
                  <span>Q2 </span>
                  <span style={{ color: "var(--violet)" }}>&apos;26</span>
                </>
              ) : stat.display === "350+" ? (
                <>
                  <span>350</span>
                  <span style={{ color: "var(--violet)" }}>+</span>
                </>
              ) : (
                stat.display
              )}
            </div>
            <div
              style={{
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontWeight: 300,
                fontSize: 13,
                color: "var(--t35)",
                letterSpacing: "0.01em",
              }}
            >
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
