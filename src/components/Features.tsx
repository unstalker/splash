"use client";

import { motion } from "framer-motion";
import { FEATURES } from "@/lib/content";

const ICONS = [
  // Shield — core engine
  <svg key="shield" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#A68FFD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 1.5L14 4V9C14 12 11.5 14.5 8 16C4.5 14.5 2 12 2 9V4Z" />
    <polyline points="5.5,8.5 7,10 11,7" />
  </svg>,
  // Activity — visibility
  <svg key="activity" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#A68FFD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="1,8 4,4 7,10 10,6 13,9 15,7" />
  </svg>,
  // Globe — coverage
  <svg key="globe" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#A68FFD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="8" r="6" />
    <ellipse cx="8" cy="8" rx="2.5" ry="6" />
    <line x1="2" y1="8" x2="14" y2="8" />
  </svg>,
  // Crosshair — alerts/radar
  <svg key="crosshair" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#A68FFD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="8" r="4" />
    <line x1="8" y1="1" x2="8" y2="4" />
    <line x1="8" y1="12" x2="8" y2="15" />
    <line x1="1" y1="8" x2="4" y2="8" />
    <line x1="12" y1="8" x2="15" y2="8" />
  </svg>,
  // Lock — trust
  <svg key="lock" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#A68FFD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="7" width="10" height="7" rx="1.5" />
    <path d="M5 7V5.5a3 3 0 016 0V7" />
    <circle cx="8" cy="10.5" r="1" fill="#A68FFD" stroke="none" />
  </svg>,
  // Monitor — interface
  <svg key="monitor" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#A68FFD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="2" width="14" height="10" rx="1.5" />
    <line x1="5" y1="14" x2="11" y2="14" />
    <line x1="8" y1="12" x2="8" y2="14" />
  </svg>,
];

export default function Features() {
  return (
    <section
      id="features"
      style={{ maxWidth: 1100, margin: "0 auto", padding: "96px 40px" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: 52 }}
      >
        {/* Left-aligned eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <div style={{ width: 28, height: 1, background: "var(--violet)", flexShrink: 0 }} />
          <span
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--violet-light)",
            }}
          >
            Features
          </span>
        </div>

        <h2
          style={{
            fontFamily: "var(--font-display), system-ui, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(28px, 4.5vw, 52px)",
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
            color: "var(--t100)",
          }}
        >
          Privacy, fully
          <br />
          automated.
        </h2>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 12,
        }}
      >
        {FEATURES.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border-sm)",
              borderRadius: "var(--r-lg)",
              padding: "28px",
            }}
          >
            {/* Violet icon square */}
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: "var(--r-sm)",
                background: "rgba(124,92,252,0.2)",
                border: "1px solid rgba(124,92,252,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 18,
              }}
            >
              {ICONS[i]}
            </div>

            <div
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--violet-light)",
                marginBottom: 10,
                opacity: 0.8,
              }}
            >
              {feature.label}
            </div>

            <h3
              style={{
                fontFamily: "var(--font-display), system-ui, sans-serif",
                fontWeight: 700,
                fontSize: 17,
                letterSpacing: "-0.01em",
                color: "var(--t100)",
                marginBottom: 12,
                lineHeight: 1.3,
              }}
            >
              {feature.title}
            </h3>

            <p
              style={{
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontWeight: 300,
                fontSize: 13,
                lineHeight: 1.75,
                color: "var(--t35)",
              }}
            >
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
