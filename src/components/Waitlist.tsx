"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import posthog from "posthog-js";
import { useWaitlistCount, formatCount } from "@/lib/useWaitlistCount";

export default function Waitlist() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { count, setCount } = useWaitlistCount();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    }).catch(() => null);

    const data = await res?.json().catch(() => ({}));
    setLoading(false);

    if (typeof data?.count === "number") setCount(data.count);

    posthog.capture("waitlist_signup", {
      duplicate: data?.duplicate ?? false,
      position: data?.count,
    });

    setSubmitted(true);
  };

  return (
    <section
      id="waitlist"
      style={{
        position: "relative",
        padding: "100px 24px 120px",
        overflow: "hidden",
      }}
    >
      {/* Centered violet glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(80,50,180,0.28) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
        style={{
          position: "relative",
          maxWidth: 520,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Pill — updates live */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(124,92,252,0.08)",
            border: "1px solid rgba(124,92,252,0.2)",
            borderRadius: "var(--r-xs)",
            padding: "5px 14px",
            marginBottom: 28,
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
            {formatCount(count)} people already on the list
          </span>
        </div>

        <h2
          style={{
            fontFamily: "var(--font-display), system-ui, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(36px, 6vw, 64px)",
            letterSpacing: "-0.025em",
            lineHeight: 1.05,
            color: "var(--t100)",
            marginBottom: 18,
          }}
        >
          Join the Waitlist.
        </h2>

        <p
          style={{
            fontFamily: "var(--font-body), system-ui, sans-serif",
            fontWeight: 300,
            fontSize: 15,
            lineHeight: 1.7,
            color: "var(--t35)",
            maxWidth: 420,
            margin: "0 auto 40px",
          }}
        >
          Get early access to Unstalker. Your first scan is free. No card
          required. We&apos;ll reach out the moment your spot opens.
        </p>

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
                padding: "40px 32px",
                textAlign: "center",
              }}
            >
              {/* Checkmark icon */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  background: "rgba(124,92,252,0.18)",
                  border: "1px solid rgba(124,92,252,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#a68ffd" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="4,11 9,16 18,6" />
                </svg>
              </div>

              <div
                style={{
                  fontFamily: "var(--font-display), system-ui, sans-serif",
                  fontWeight: 800,
                  fontSize: 26,
                  color: "var(--t100)",
                  marginBottom: 10,
                  letterSpacing: "-0.02em",
                }}
              >
                {name ? `You're in, ${name.split(" ")[0]}.` : "You're on the list."}
              </div>

              <div
                style={{
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                  fontWeight: 300,
                  fontSize: 15,
                  color: "var(--t55)",
                  lineHeight: 1.6,
                  marginBottom: 24,
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
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
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
                    marginTop: 4,
                    padding: "16px",
                    borderRadius: "var(--r-md)",
                    background: loading
                      ? "rgba(124,92,252,0.7)"
                      : "linear-gradient(180deg, #8c6cfc 0%, #7c5cfc 50%, #6a4deb 100%)",
                    border: "1px solid rgba(166,143,253,0.4)",
                    color: "#fff",
                    fontFamily: "var(--font-body), system-ui, sans-serif",
                    fontSize: 13,
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

              <div
                style={{
                  display: "flex",
                  gap: 20,
                  justifyContent: "center",
                  marginTop: 16,
                  flexWrap: "wrap",
                }}
              >
                {["First scan free", "No credit card", "Cancel anytime"].map((item) => (
                  <span
                    key={item}
                    style={{
                      fontFamily: "var(--font-body), system-ui, sans-serif",
                      fontSize: 12,
                      color: "var(--muted)",
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <span style={{ color: "var(--violet-light)" }}>✓</span>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
