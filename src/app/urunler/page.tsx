import Link from "next/link";
import Image from "next/image";
import products from "@/data/products.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tabela Malzemeleri — Tüm Ürün Kategorileri",
  description:
    "LED modül, LED şerit, trafo, kablo ve tabela aksesuarları. Türkiye geneli toptan satış. Tüm ürün kategorilerini inceleyin, teklif alın.",
};

export default function UrunlerPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: "160px 0 100px", position: "relative", zIndex: 2 }}>
        <div style={{ width: "min(1240px, 92vw)", margin: "0 auto" }}>
          <div
            className="flex items-center gap-3 mb-6"
            style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--nadas-orange)", textTransform: "uppercase", letterSpacing: "0.12em" }}
          >
            <span className="w-6 h-px" style={{ background: "var(--nadas-orange)" }} />
            Ürün Kategorileri
          </div>
          <h1
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(52px, 8vw, 120px)", lineHeight: 0.95, letterSpacing: "0.02em", maxWidth: "900px", marginBottom: "24px" }}
          >
            Tabela yapımı için{" "}
            <span style={{ color: "var(--nadas-orange)", textShadow: "0 0 40px rgba(255,107,26,0.5)" }}>
              ihtiyacınız olan
            </span>{" "}
            her şey
          </h1>
          <p style={{ fontSize: "18px", color: "var(--nadas-ink2)", maxWidth: "560px", lineHeight: 1.6 }}>
            Toptan fiyatlarla LED modül, şerit, trafo, kablo ve aksesuarlar. Türkiye geneli hızlı kargo.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: "0 0 140px", position: "relative", zIndex: 2 }}>
        <div style={{ width: "min(1240px, 92vw)", margin: "0 auto" }}>
          <div
            className="grid"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              borderTop: "1px solid var(--nadas-line2)",
              borderLeft: "1px solid var(--nadas-line2)",
            }}
          >
            {products.map((p, i) => (
              <Link
                key={p.slug}
                href={`/urunler/${p.slug}`}
                className="nadas-product-card group block relative overflow-hidden transition-colors duration-300"
                style={{
                  padding: "40px 32px",
                  borderRight: "1px solid var(--nadas-line2)",
                  borderBottom: "1px solid var(--nadas-line2)",
                  background: "var(--nadas-bg)",
                }}
              >
                <div
                  style={{ position: "absolute", top: "20px", right: "24px", fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--nadas-ink3)" }}
                >
                  {String(i + 1).padStart(2, "0")} / {String(products.length).padStart(2, "0")}
                </div>
                <div className="relative overflow-hidden mb-6" style={{ height: "140px", borderRadius: "2px" }}>
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,10,20,0.5), transparent 60%)" }} />
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "28px", letterSpacing: "0.04em", marginBottom: "10px" }}>
                  {p.name}
                </div>
                <div style={{ fontSize: "14px", color: "var(--nadas-ink2)", lineHeight: 1.5, marginBottom: "16px" }}>
                  {p.shortDesc}
                </div>
                <div style={{ fontSize: "13px", color: "var(--nadas-orange)", fontWeight: 600, display: "flex", alignItems: "center", gap: "6px" }}>
                  İncele
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </div>
                <div
                  className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100"
                  style={{ bottom: "28px", right: "28px", color: "var(--nadas-orange)" }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
