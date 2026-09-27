"use client";
import Image from "next/image";
import Link from "next/link";
import catalog from "@/data/products.json";

const products = catalog.map((c) => ({
  title: c.name,
  desc: c.shortDesc,
  slug: c.slug,
  img: c.image,
}));

export default function ProductGrid() {
  return (
    <section id="urunler" style={{ padding: "clamp(72px, 12vw, 140px) 0", position: "relative", zIndex: 2 }}>
      <div style={{ width: "min(1240px, 92vw)", margin: "0 auto" }}>
        {/* Section header */}
        <div
          className="flex items-center gap-3 mb-5"
          style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--nadas-orange)", textTransform: "uppercase", letterSpacing: "0.12em" }}
        >
          <span className="w-6 h-px" style={{ background: "var(--nadas-orange)" }} />
          01 · Katalog
        </div>
        <h2
          className="mb-6"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(44px, 6vw, 88px)", lineHeight: 0.95, letterSpacing: "0.02em", maxWidth: "900px" }}
        >
          Tabela için ihtiyacınız olan<br />her şey — tek çatıda.
        </h2>
        <p style={{ fontSize: "17px", color: "var(--nadas-ink2)", maxWidth: "640px", marginBottom: "clamp(40px, 6vw, 72px)" }}>
          {`${catalog.length} ana kategori`}, 150&apos;den fazla ürün çeşidi. Stoktan aynı gün sevkiyat, toptan fiyat avantajı.
        </p>

        {/* Grid — telefonda iki sütun, açıklamasız kompakt kart */}
        <div
          className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(280px,1fr))]"
          style={{
            borderTop: "1px solid var(--nadas-line2)",
            borderLeft: "1px solid var(--nadas-line2)",
          }}
        >
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/urunler/${p.slug}/`}
              className="nadas-product-card group block relative overflow-hidden transition-colors duration-300 px-3 py-5 sm:px-8 sm:py-10"
              style={{
                borderRight: "1px solid var(--nadas-line2)",
                borderBottom: "1px solid var(--nadas-line2)",
                background: "var(--nadas-bg)",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--nadas-bg2)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--nadas-bg)")}
            >
              {/* Product image — light plate so white-background photos look intentional */}
              <div
                className="relative overflow-hidden mb-4 sm:mb-7 h-[100px] sm:h-[160px]"
                style={{
                  borderRadius: "8px",
                  background: "#ffffff",
                  border: "1px solid var(--nadas-line2)",
                  boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.04)",
                }}
              >
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-contain p-3 sm:p-5 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 280px"
                />
              </div>
              <div className="text-[18px] max-sm:leading-[1.15] sm:text-[28px] sm:mb-2.5" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.04em" }}>
                {p.title}
              </div>
              <div className="hidden sm:block" style={{ fontSize: "14px", color: "var(--nadas-ink2)", lineHeight: 1.5 }}>
                {p.desc}
              </div>
              {/* Arrow */}
              <div
                className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100"
                style={{ bottom: "28px", right: "28px", color: "var(--nadas-orange)", transform: "translate(-8px, 8px)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
