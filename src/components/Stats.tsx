"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/content";
import { useWaitlistCount, formatCount } from "@/lib/useWaitlistCount";

export default function Stats() {
  const { count } = useWaitlistCount();

  return (
    <section style={{ width: "100%", borderBottom: "1px solid var(--border-sm)" }}>
      <div
        className="grid-3col"
        style={{ maxWidth: 1100, margin: "0 auto" }}
      >
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="divider-cell"
            style={{
              padding: "40px 32px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display), system-ui, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(32px, 4.5vw, 56px)",
                letterSpacing: "-0.02em",
                lineHeight: 1,
                marginBottom: 10,
                color: "var(--t100)",
              }}
            >
              {stat.display === "Q4 '26" ? (
                <>
                  <span>Q4 </span>
                  <span style={{ color: "var(--violet)" }}>&apos;26</span>
                </>
              ) : stat.label === "people on waitlist" ? (
                formatCount(count)
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
