"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import posthog from "posthog-js";
import { useWaitlistCount, formatCount } from "@/lib/useWaitlistCount";

export default function Hero() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { count, setCount } = useWaitlistCount();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    posthog.capture("hero_cta_clicked");
    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    }).catch(() => null);

    const data = await res?.json().catch(() => ({}));
    setLoading(false);

    if (typeof data?.count === "number") setCount(data.count);
    posthog.capture("waitlist_signup", {
      source: "hero",
      duplicate: data?.duplicate ?? false,
      position: data?.count,
    });
    setSubmitted(true);
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

        {/* Form / success */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28 }}
          style={{ width: "100%", maxWidth: 420 }}
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                style={{
                  background: "rgba(124,92,252,0.1)",
                  border: "1px solid rgba(124,92,252,0.35)",
                  borderRadius: "var(--r-lg)",
                  padding: "32px 24px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "rgba(124,92,252,0.18)",
                    border: "1px solid rgba(124,92,252,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke="#a68ffd" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="4,11 9,16 18,6" />
                  </svg>
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display), system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: 22,
                    color: "var(--t100)",
                    marginBottom: 8,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {name ? `You're in, ${name.split(" ")[0]}.` : "You're on the list."}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body), system-ui, sans-serif",
                    fontWeight: 300,
                    fontSize: 14,
                    color: "var(--t55)",
                    lineHeight: 1.6,
                    marginBottom: 16,
                  }}
                >
                  We&apos;ll reach out as soon as your spot opens.<br />
                  Keep an eye on your inbox.
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: 11,
                    color: "var(--violet-light)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  #{formatCount(count)} on the list
                </div>
              </motion.div>
            ) : (
              <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <form
                  onSubmit={handleSubmit}
                  style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 12 }}
                >
                  <input
                    className="input"
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    className="input"
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      marginTop: 2,
                      padding: "14px",
                      borderRadius: "var(--r-md)",
                      background: loading
                        ? "rgba(124,92,252,0.7)"
                        : "linear-gradient(180deg, #8c6cfc 0%, #7c5cfc 50%, #6a4deb 100%)",
                      border: "1px solid rgba(166,143,253,0.4)",
                      color: "#fff",
                      fontFamily: "var(--font-body), system-ui, sans-serif",
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      cursor: loading ? "default" : "pointer",
                      transition: "filter 0.15s",
                      boxShadow: "0 0 24px rgba(124,92,252,0.3)",
                    }}
                    onMouseEnter={(e) => { if (!loading) (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.08)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.filter = "none"; }}
                  >
                    {loading ? "Adding..." : "Get Early Access"}
                  </button>
                </form>
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
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
