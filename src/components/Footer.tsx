"use client";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border-sm)" }}>
      {/* Top row: logo left, links right */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "28px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#"
          style={{
            fontFamily: "var(--font-display), system-ui, sans-serif",
            fontWeight: 800,
            fontSize: 16,
            letterSpacing: "-0.03em",
            textDecoration: "none",
          }}
        >
          <span className="logo-un">[UN]</span>
          <span className="logo-stalker">STALKER</span>
        </a>

        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {[
            { label: "info@unstalker.ai", href: "mailto:info@unstalker.ai" },
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontSize: 13,
                color: "var(--muted)",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--t35)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--muted)")
              }
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom row: copyright centered */}
      <div
        style={{
          borderTop: "1px solid var(--border-sm)",
          padding: "14px 40px",
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body), system-ui, sans-serif",
            fontSize: 12,
            color: "var(--muted)",
          }}
        >
          © 2026 Unstalker. The internet remembers. We make it forget. · Privacy is a right. We&apos;re here to enforce it.
        </span>
      </div>
    </footer>
  );
}
