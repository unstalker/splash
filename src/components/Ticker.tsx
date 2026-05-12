"use client";

import { TICKER_ENTRIES } from "@/lib/content";

const items = [...TICKER_ENTRIES, ...TICKER_ENTRIES]; // duplicate for seamless loop

export default function Ticker() {
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        borderTop: "1px solid var(--border-sm)",
        borderBottom: "1px solid var(--border-sm)",
        background: "var(--deep)",
        padding: "10px 0",
        position: "relative",
      }}
    >
      <style>{`
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          display: flex;
          gap: 0;
          animation: ticker-scroll 28s linear infinite;
          width: max-content;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="ticker-track">
        {items.map((entry, i) => (
          <div
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "0 36px",
              borderRight: "1px solid var(--border-sm)",
              fontFamily: "var(--font-mono), monospace",
              fontSize: 12,
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            <span style={{ color: "var(--muted)" }}>{entry.time}</span>
            <span style={{ color: "var(--violet-light)" }}>removed</span>
            <span style={{ color: "var(--smoke)", fontWeight: 500 }}>{entry.broker}</span>
            <span style={{ color: "var(--muted)" }}>{entry.records} record{entry.records !== 1 ? "s" : ""}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
