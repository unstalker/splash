"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const LOG_LINES = [
  { time: "00:00:01", content: <><span className="log-action">agent.init()</span><span className="log-neutral"> → user profile loaded</span></> },
  { time: "00:00:04", content: <><span className="log-action">agent.scan()</span><span className="log-neutral"> → </span><span className="log-ok">47 exposures found</span></> },
  { time: "00:00:07", content: <><span className="log-neutral">targets: spokeo · whitepages · radaris</span></> },
  { time: "00:01:12", content: <><span className="log-ok">deleted: spokeo.com ✓</span></> },
  { time: "00:01:44", content: <><span className="log-ok">deleted: whitepages.com ✓</span></> },
  { time: "00:04:31", content: <><span className="log-ok">44 / 47 records removed ✓</span></> },
  { time: "01:14:02", content: <><span className="log-alert">reappearance detected: intelius.com</span></> },
  { time: "01:14:03", content: <><span className="log-action">auto-removal filed</span><span className="log-neutral"> → queued</span></> },
  { time: "ongoing",  content: <><span className="log-neutral">monitoring: active · agents: 3 running</span></> },
];

export default function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i < LOG_LINES.length) { i++; setVisibleCount(i); }
      else clearInterval(interval);
    }, 280);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section
      id="problem"
      style={{ maxWidth: 1100, margin: "0 auto", padding: "96px 40px" }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
      >
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <div
            style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}
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
              The Problem
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display), system-ui, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(32px, 4vw, 52px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "var(--t100)",
              marginBottom: 24,
            }}
          >
            Your data is
            <br />
            already out
            <br />
            there.
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body), system-ui, sans-serif",
              fontWeight: 300,
              fontSize: 15,
              lineHeight: 1.75,
              color: "var(--t55)",
              marginBottom: 20,
            }}
          >
            Hundreds of companies you&apos;ve never heard of are buying and
            selling your home address, phone number, family relationships, and
            search history, without your consent.
          </p>

          <p
            style={{
              fontFamily: "var(--font-body), system-ui, sans-serif",
              fontWeight: 300,
              fontSize: 15,
              lineHeight: 1.75,
              color: "var(--t55)",
            }}
          >
            Manual opt-out forms don&apos;t work. Brokers re-list your data
            every 30–90 days. The cycle is designed to exhaust you into giving
            up. We don&apos;t.
          </p>
        </motion.div>

        {/* Right: agent log */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.12 }}
          style={{
            background: "var(--deep)",
            border: "1px solid var(--border-sm)",
            borderRadius: "var(--r-lg)",
            overflow: "hidden",
          }}
        >
          {/* Log header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 20px",
              borderBottom: "1px solid var(--border-sm)",
            }}
          >
            <span className="pulse-dot" />
            <span
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: 11,
                color: "var(--muted)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              agent.live
            </span>
          </div>

          {/* Log lines */}
          <div style={{ padding: "8px 0" }}>
            {LOG_LINES.slice(0, visibleCount).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  display: "flex",
                  gap: 20,
                  padding: "5px 20px",
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: 12,
                  lineHeight: 2,
                  alignItems: "baseline",
                }}
              >
                <span className="log-time" style={{ flexShrink: 0, minWidth: 56 }}>
                  {line.time}
                </span>
                <span>{line.content}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
