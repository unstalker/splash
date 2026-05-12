"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/lib/content";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir: 1 | -1) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const t = TESTIMONIALS[index];

  return (
    <section
      id="reviews"
      style={{
        maxWidth: 1040,
        margin: "0 auto",
        padding: "96px 24px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
        style={{ textAlign: "center", marginBottom: 52 }}
      >
        <span className="eyebrow">Reviews</span>
        <h2
          style={{
            fontFamily: "var(--font-display), system-ui, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(26px, 3.8vw, 42px)",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
            maxWidth: 440,
            margin: "20px auto 0",
          }}
        >
          Beta testers{" "}
          <span style={{ color: "var(--violet-light)" }}>
            <br />
            already erased.
          </span>
        </h2>
      </motion.div>

      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction * 48 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -48 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              style={{
                background: "rgba(124, 92, 252, 0.06)",
                border: "1px solid rgba(124, 92, 252, 0.18)",
                borderRadius: "var(--r-lg)",
                padding: "32px",
              }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: 3, marginBottom: 18 }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#A68FFD">
                    <path d="M7 1l1.55 3.16L12 4.72l-2.5 2.43.59 3.43L7 9.1l-3.09 1.58.59-3.43L2 4.72l3.45-.56z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote
                style={{
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                  fontWeight: 300,
                  fontSize: 15,
                  lineHeight: 1.75,
                  color: "var(--t55)",
                  fontStyle: "italic",
                  marginBottom: 24,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: "rgba(124,92,252,0.15)",
                    border: "1px solid rgba(124,92,252,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-display), system-ui, sans-serif",
                    fontWeight: 800,
                    fontSize: 12,
                    color: "var(--violet-light)",
                    flexShrink: 0,
                    letterSpacing: "0.02em",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-body), system-ui, sans-serif",
                      fontWeight: 600,
                      fontSize: 13,
                      color: "var(--t100)",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: 11,
                      color: "var(--muted)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 14,
            marginTop: 24,
          }}
        >
          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "var(--deep)",
              border: "1px solid var(--border-sm)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--t35)",
              fontFamily: "var(--font-body), system-ui, sans-serif",
              fontSize: 16,
              transition: "border-color 0.15s, color 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLButtonElement).style.color = "var(--t55)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border-sm)";
              (e.currentTarget as HTMLButtonElement).style.color = "var(--t35)";
            }}
          >
            ←
          </button>

          <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                aria-label={`Testimonial ${i + 1}`}
                style={{
                  width: i === index ? 18 : 6,
                  height: 6,
                  borderRadius: 3,
                  background: i === index ? "var(--violet)" : "var(--raised)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "width 0.22s ease, background 0.22s ease",
                }}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            aria-label="Next testimonial"
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "var(--deep)",
              border: "1px solid var(--border-sm)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--t35)",
              fontFamily: "var(--font-body), system-ui, sans-serif",
              fontSize: 16,
              transition: "border-color 0.15s, color 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLButtonElement).style.color = "var(--t55)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border-sm)";
              (e.currentTarget as HTMLButtonElement).style.color = "var(--t35)";
            }}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
