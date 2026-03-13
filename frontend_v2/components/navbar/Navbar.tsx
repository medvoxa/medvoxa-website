"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Services",   href: "/services" },
  { label: "Solutions",  href: "/solutions" },
  { label: "Specialties",href: "/specialties" },
  { label: "Pricing",    href: "/pricing" },
  { label: "Company",    href: "/company" },
  { label: "Careers",    href: "/careers" },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          background: scrolled ? "rgba(250,248,245,0.97)" : "#faf8f5",
          borderBottom: `1px solid ${scrolled ? "var(--border)" : "var(--border)"}`,
          backdropFilter: scrolled ? "blur(12px)" : "none",
          transition: "background 0.2s, box-shadow 0.2s",
          boxShadow: scrolled ? "0 1px 16px rgba(26,23,20,0.06)" : "none",
        }}
      >
        <div
          className="container-site"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 68,
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            <img
              src="/logo.svg"
              alt="MEDVOXA"
              width={160}
              height={38}
              style={{ height: 38, width: "auto" }}
            />
          </Link>

          {/* Desktop nav */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: 32,
            }}
            className="hidden-mobile"
          >
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="nav-link">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }} className="hidden-mobile">
            <Link href="/contact" className="btn-outline" style={{ padding: "9px 20px", fontSize: 13 }}>
              Contact
            </Link>
            <Link href="/contact" className="btn-primary btn-red" style={{ padding: "9px 20px", fontSize: 13 }}>
              Request Demo
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="show-mobile"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
          >
            <span style={{ display: "block", width: 22, height: 1.5, background: menuOpen ? "transparent" : "var(--ink)", transition: "0.2s" }} />
            <span style={{
              display: "block", width: 22, height: 1.5,
              background: "var(--ink)",
              transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
              transition: "0.2s",
            }} />
            <span style={{
              display: "block", width: 22, height: 1.5,
              background: "var(--ink)",
              transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
              transition: "0.2s",
            }} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99,
            background: "#faf8f5",
            paddingTop: 80,
            paddingLeft: 28,
            paddingRight: 28,
            paddingBottom: 28,
            display: "flex",
            flexDirection: "column",
            gap: 0,
          }}
        >
          {NAV_LINKS.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "16px 0",
                borderBottom: "1px solid var(--border)",
                fontFamily: "var(--font-display)",
                fontSize: 22,
                fontWeight: 500,
                color: "var(--ink)",
                textDecoration: "none",
                letterSpacing: "-0.5px",
              }}
            >
              {l.label}
            </Link>
          ))}
          <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 12 }}>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="btn-primary btn-red" style={{ textAlign: "center", justifyContent: "center" }}>
              Request Demo
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="btn-outline" style={{ textAlign: "center", justifyContent: "center" }}>
              Contact Us
            </Link>
          </div>
          <div style={{ marginTop: "auto", paddingTop: 24 }}>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span className="chip chip-green"><span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--green)" }} />AMA CPT Licensed</span>
              <span className="chip chip-blue">Now Onboarding</span>
            </div>
          </div>
        </div>
      )}

      {/* Spacer so page content starts below fixed nav */}
      <div style={{ height: 68 }} />

      <style>{`
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
        }
        @media (min-width: 901px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
