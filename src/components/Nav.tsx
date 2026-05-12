"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/content";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        background: scrolled
          ? "rgba(8,8,15,0.92)"
          : "rgba(8,8,15,0.6)",
        borderBottom: scrolled
          ? "1px solid var(--border-sm)"
          : "1px solid transparent",
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontFamily: "var(--font-display), system-ui, sans-serif",
            fontWeight: 800,
            fontSize: 20,
            letterSpacing: "-0.03em",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <span className="logo-un">[UN]</span>
          <span className="logo-stalker">STALKER</span>
        </a>

        {/* Desktop nav links */}
        <div
          style={{
            display: "flex",
            gap: 32,
            alignItems: "center",
          }}
          className="hidden-mobile"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontSize: 14,
                fontWeight: 400,
                color: "var(--t35)",
                transition: "color 0.18s ease",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--t55)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--t35)")
              }
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div
          style={{ display: "flex", gap: 8, alignItems: "center" }}
          className="hidden-mobile"
        >
          <button
            className="btn-primary"
            onClick={() => handleNavClick("#waitlist")}
            style={{ letterSpacing: "0.08em" }}
          >
            JOIN WAITLIST
          </button>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="show-mobile"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 4,
            display: "none",
          }}
        >
          <div
            style={{
              width: 22,
              height: 2,
              background: menuOpen ? "transparent" : "var(--t55)",
              borderRadius: 2,
              position: "relative",
              transition: "background 0.18s ease",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: 22,
                height: 2,
                background: "var(--t55)",
                borderRadius: 2,
                top: menuOpen ? 0 : -7,
                transform: menuOpen ? "rotate(45deg)" : "none",
                transition: "top 0.18s ease, transform 0.18s ease",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: 22,
                height: 2,
                background: "var(--t55)",
                borderRadius: 2,
                top: menuOpen ? 0 : 7,
                transform: menuOpen ? "rotate(-45deg)" : "none",
                transition: "top 0.18s ease, transform 0.18s ease",
              }}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "var(--deep)",
            borderTop: "1px solid var(--border-sm)",
            padding: "16px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontSize: 15,
                color: "var(--t55)",
                textAlign: "left",
                padding: "8px 0",
                borderBottom: "1px solid var(--border-sm)",
              }}
            >
              {link.label}
            </button>
          ))}
          <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingTop: 8 }}>
            <button
              className="btn-primary"
              onClick={() => handleNavClick("#waitlist")}
            >
              Join Waitlist
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
