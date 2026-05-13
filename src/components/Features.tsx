"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FEATURES } from "@/lib/content";

const ICONS = [
  <svg key="shield" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#A68FFD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 1.5L14 4V9C14 12 11.5 14.5 8 16C4.5 14.5 2 12 2 9V4Z" />
    <polyline points="5.5,8.5 7,10 11,7" />
  </svg>,
  <svg key="activity" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#A68FFD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="1,8 4,4 7,10 10,6 13,9 15,7" />
  </svg>,
  <svg key="globe" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#A68FFD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="8" r="6" />
    <ellipse cx="8" cy="8" rx="2.5" ry="6" />
    <line x1="2" y1="8" x2="14" y2="8" />
  </svg>,
  <svg key="crosshair" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#A68FFD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="8" r="4" />
    <line x1="8" y1="1" x2="8" y2="4" />
    <line x1="8" y1="12" x2="8" y2="15" />
    <line x1="1" y1="8" x2="4" y2="8" />
    <line x1="12" y1="8" x2="15" y2="8" />
  </svg>,
  <svg key="lock" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#A68FFD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="7" width="10" height="7" rx="1.5" />
    <path d="M5 7V5.5a3 3 0 016 0V7" />
    <circle cx="8" cy="10.5" r="1" fill="#A68FFD" stroke="none" />
  </svg>,
  <svg key="monitor" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#A68FFD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="2" width="14" height="10" rx="1.5" />
    <line x1="5" y1="14" x2="11" y2="14" />
    <line x1="8" y1="12" x2="8" y2="14" />
  </svg>,
];

export default function Features() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section
      id="features"
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
            fontWeight: 600,
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
        className="grid-3col-features"
        style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}
      >
        {FEATURES.map((feature, i) => {
          const isOpen = openIndex === i;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="feature-card"
              onClick={() => toggle(i)}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border-sm)",
                borderRadius: "var(--r-lg)",
                padding: "28px",
              }}
            >
              {/* Header row: icon + label/title + chevron (mobile only) */}
              <div className="feature-card-header">
                <div
                  className="feature-icon"
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "var(--r-sm)",
                    background: "rgba(124,92,252,0.2)",
                    border: "1px solid rgba(124,92,252,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {ICONS[i]}
                </div>

                <div className="feature-title-group" style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: 10,
                      fontWeight: 500,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--violet-light)",
                      marginBottom: 6,
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
                      margin: 0,
                      lineHeight: 1.3,
                    }}
                  >
                    {feature.title}
                  </h3>
                </div>

                <div
                  className="feature-chevron"
                  style={{
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.22s ease",
                    color: "var(--t35)",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3,6 8,11 13,6" />
                  </svg>
                </div>
              </div>

              {/* Description — always shown on desktop, accordion on mobile */}
              <div className="feature-desc-desktop">
                <p
                  style={{
                    fontFamily: "var(--font-body), system-ui, sans-serif",
                    fontWeight: 300,
                    fontSize: 13,
                    lineHeight: 1.75,
                    color: "var(--t35)",
                    margin: 0,
                  }}
                >
                  {feature.description}
                </p>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className="feature-desc-mobile"
                    key="desc"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-body), system-ui, sans-serif",
                        fontWeight: 300,
                        fontSize: 13,
                        lineHeight: 1.75,
                        color: "var(--t35)",
                        margin: 0,
                        paddingTop: 14,
                        borderTop: "1px solid var(--border-sm)",
                        marginTop: 14,
                      }}
                    >
                      {feature.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .feature-card { cursor: default !important; }
          .feature-card-header {
            flex-direction: column !important;
            cursor: default !important;
            gap: 0 !important;
          }
          .feature-icon { margin-bottom: 18px; }
          .feature-title-group > div:first-child { margin-bottom: 10px !important; }
          .feature-title-group > h3 { margin-bottom: 12px !important; }
          .feature-chevron { display: none !important; }
          .feature-desc-desktop { display: block !important; }
          .feature-desc-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .feature-card { cursor: pointer; }
          .feature-card-header {
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            gap: 14px !important;
          }
          .feature-desc-desktop { display: none !important; }
          .feature-desc-mobile { display: block; }
        }
      `}</style>
    </section>
  );
}
