"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import catalog from "@/data/products.json";
import { NAV_LINKS, ROUTES, categoryHref } from "@/lib/site-links";

const WA_HREF = "https://wa.me/905414696966";

const categories = catalog.map((c) => ({ slug: c.slug, name: c.name }));

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = NAV_LINKS;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
      style={{
        padding: scrolled ? "12px 0" : "18px 0",
        background: "rgba(255, 255, 255, 0.78)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid var(--nadas-line2)" : "1px solid transparent",
      }}
    >
      <div style={{ width: "min(1240px, 92vw)", margin: "0 auto" }} className="flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="Nadasled ana sayfa">
          <Logo size={24} />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-9 list-none">
          {/* Ürünler dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setCatOpen(true)}
            onMouseLeave={() => setCatOpen(false)}
          >
            <a
              href={ROUTES.urunler}
              className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
              style={{ color: catOpen ? "var(--nadas-orange)" : "var(--nadas-ink2)" }}
            >
              Ürünler
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transform: catOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}><path d="M6 9l6 6 6-6"/></svg>
            </a>
            {catOpen && (
              <div
                className="absolute left-0 top-full pt-3"
                style={{ width: "260px" }}
              >
                <ul
                  className="list-none grid grid-cols-1 gap-0.5 p-2"
                  style={{
                    background: "rgba(255, 255, 255, 0.98)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    border: "1px solid var(--nadas-line2)",
                    borderRadius: "4px",
                    boxShadow: "0 20px 60px rgba(16,20,28,0.12)",
                  }}
                >
                  {categories.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={categoryHref(c.slug)}
                        className="block px-3 py-2 text-sm rounded-sm transition-colors"
                        style={{ color: "var(--nadas-ink2)" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--nadas-orange)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,107,26,0.06)"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--nadas-ink2)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                        onClick={() => setCatOpen(false)}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "var(--nadas-ink2)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--nadas-orange)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--nadas-ink2)")}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={WA_HREF}
          target="_blank"
          rel="noopener noreferrer"
          data-track="nav"
          className="hidden md:inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:-translate-y-px"
          style={{
            background: "var(--nadas-orange)",
            color: "var(--nadas-orange-ink)",
            padding: "10px 20px",
            borderRadius: "2px",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--nadas-orange2)"; (e.currentTarget as HTMLElement).style.boxShadow = "var(--nadas-glow)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--nadas-orange)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
        >
          Teklif Al
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 transition-colors"
          style={{ background: "transparent", border: "1px solid var(--nadas-line2)", borderRadius: "2px", color: "var(--nadas-ink)" }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{ width: "min(1240px, 92vw)", margin: "0 auto", borderTop: "1px solid var(--nadas-line2)", paddingTop: "20px", marginTop: "12px" }}
          className="flex flex-col gap-4 md:hidden"
        >
          <Link
            href={ROUTES.urunler}
            className="text-base font-medium transition-colors"
            style={{ color: "var(--nadas-ink2)" }}
            onClick={() => setMobileOpen(false)}
          >
            Ürünler
          </Link>
          <div className="flex flex-col gap-1 pl-3" style={{ borderLeft: "1px solid var(--nadas-line2)" }}>
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={categoryHref(c.slug)}
                className="text-sm transition-colors"
                style={{ color: "var(--nadas-ink3)" }}
                onClick={() => setMobileOpen(false)}
              >
                {c.name}
              </Link>
            ))}
          </div>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-base font-medium transition-colors"
              style={{ color: "var(--nadas-ink2)" }}
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            data-track="nav_mobil"
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold mt-2"
            style={{ background: "var(--nadas-orange)", color: "var(--nadas-orange-ink)", padding: "14px 20px", borderRadius: "2px" }}
            onClick={() => setMobileOpen(false)}
          >
            Teklif Al
          </a>
        </div>
      )}
    </nav>
  );
}
