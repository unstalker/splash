"use client";

import { motion } from "framer-motion";
import { HOW_IT_WORKS } from "@/lib/content";

// Violet square icon containers with white icons inside
const ICONS = [
  // Search / scan
  <svg key="scan" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="8" r="5" />
    <line x1="12" y1="12" x2="16" y2="16" />
  </svg>,
  // Trash / remove
  <svg key="remove" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3,5 5,5 15,5" />
    <path d="M6 5V4a2 2 0 014 0v1" />
    <rect x="4" y="5" width="10" height="10" rx="2" />
    <line x1="7" y1="8" x2="7" y2="12" />
    <line x1="11" y1="8" x2="11" y2="12" />
  </svg>,
  // Shield / protect
  <svg key="protect" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 2L16 5V10C16 13.5 13 16.5 9 18C5 16.5 2 13.5 2 10V5Z" />
    <polyline points="6,9.5 8,11.5 12,8" />
  </svg>,
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section-pad"
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 20,
          }}
        >
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
            How It Works
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
          Set it once.
          <br />
          We handle everything else.
        </h2>
      </motion.div>

      {/* Unified card container with column dividers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="grid-3col"
        style={{
          border: "1px solid var(--border-sm)",
          borderRadius: "var(--r-lg)",
          overflow: "hidden",
          background: "var(--deep)",
        }}
      >
        {HOW_IT_WORKS.map((step, i) => (
          <div
            key={step.step}
            className="divider-cell"
            style={{ padding: "36px 32px" }}
          >
            {/* Step label */}
            <div
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--violet-light)",
                marginBottom: 24,
                opacity: 0.7,
              }}
            >
              {step.step}. {step.label}
            </div>

            {/* Violet icon square */}
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "var(--r-md)",
                background: "var(--violet)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 24,
              }}
            >
              {ICONS[i]}
            </div>

            <h3
              style={{
                fontFamily: "var(--font-display), system-ui, sans-serif",
                fontWeight: 700,
                fontSize: 18,
                letterSpacing: "-0.01em",
                color: "var(--t100)",
                marginBottom: 14,
                lineHeight: 1.3,
              }}
            >
              {step.title}
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
              {step.description}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
