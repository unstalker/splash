"use client";

import { motion } from "framer-motion";
import posthog from "posthog-js";
import { useWaitlistCount, formatCount } from "@/lib/useWaitlistCount";

export default function Hero() {
  const { count } = useWaitlistCount();

  const handleCTA = () => {
    posthog.capture("hero_cta_clicked");
    document.querySelector("#waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 64,
        overflow: "hidden",
      }}
    >
      {/* Centered top violet glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(90,60,200,0.45) 0%, rgba(59,31,168,0.2) 40%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: 860,
          padding: "0 clamp(16px, 4vw, 32px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Waitlist pill */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(124,92,252,0.08)",
            border: "1px solid rgba(124,92,252,0.22)",
            borderRadius: "var(--r-xs)",
            padding: "6px 16px",
            marginBottom: 40,
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "var(--violet-light)",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: 11,
              color: "var(--smoke)",
              letterSpacing: "0.06em",
            }}
          >
            Waitlist open — {formatCount(count)} people on the list
          </span>
        </motion.div>

        {/* Giant wordmark */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          style={{
            fontFamily: "var(--font-display), system-ui, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(28px, 8vw, 100px)",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            margin: 0,
            marginBottom: 18,
          }}
        >
          <span style={{ color: "var(--violet)" }}>[UN]</span>
          <span style={{ color: "var(--t100)" }}>STALKER</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          style={{
            fontFamily: "var(--font-display), system-ui, sans-serif",
            fontWeight: 600,
            fontSize: "clamp(15px, 2vw, 20px)",
            color: "var(--t35)",
            lineHeight: 1.4,
            marginBottom: 20,
          }}
        >
          The internet remembers.{" "}
          <span style={{ color: "var(--t100)" }}>We make it forget.</span>
        </motion.p>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22 }}
          style={{
            fontFamily: "var(--font-body), system-ui, sans-serif",
            fontWeight: 300,
            fontSize: 15,
            lineHeight: 1.7,
            color: "var(--t35)",
            maxWidth: 420,
            marginBottom: 36,
          }}
        >
          Your personal data is being bought and sold by data brokers
          you&apos;ve never heard of. Unstalker is the silent AI agent that
          erases you from their records, automatically, permanently.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28 }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}
        >
          <button
            onClick={handleCTA}
            style={{
              padding: "14px 36px",
              borderRadius: "var(--r-md)",
              background: "linear-gradient(180deg, #8c6cfc 0%, #7c5cfc 50%, #6a4deb 100%)",
              border: "1px solid rgba(166,143,253,0.4)",
              color: "#fff",
              fontFamily: "var(--font-body), system-ui, sans-serif",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "filter 0.15s",
              boxShadow: "0 0 24px rgba(124,92,252,0.3)",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.08)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.filter = "none"; }}
          >
            Get Early Access
          </button>
          <p
            style={{
              fontFamily: "var(--font-body), system-ui, sans-serif",
              fontSize: 12,
              color: "var(--muted)",
              textAlign: "center",
              margin: 0,
            }}
          >
            Free forever for your first scan. No card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
