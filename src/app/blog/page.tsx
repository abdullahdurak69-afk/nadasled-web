import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog — Tabela ve LED Aydınlatma Rehberleri",
  description:
    "Tabelacılar için pratik rehberler: LED trafo hesaplama, modül seçimi, neon flex montajı, COB vs SMD karşılaştırması ve daha fazlası.",
  alternates: { canonical: "https://www.nadasled.com.tr/blog" },
};

export default function BlogPage() {
  const fmt = (d: string) =>
    new Date(d).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });

  return (
    <>
      {/* Hero */}
      <section style={{ padding: "160px 0 60px", position: "relative", zIndex: 2 }}>
        <div style={{ width: "min(1240px, 92vw)", margin: "0 auto" }}>
          <div
            className="flex items-center gap-3 mb-6"
            style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--nadas-orange)", textTransform: "uppercase", letterSpacing: "0.12em" }}
          >
            <span className="w-6 h-px" style={{ background: "var(--nadas-orange)" }} />
            Rehberler
          </div>
          <h1
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(44px, 7vw, 96px)", lineHeight: 0.95, letterSpacing: "0.01em", marginBottom: "20px" }}
          >
            Tabelacının <span style={{ color: "var(--nadas-orange)" }}>el kitabı</span>
          </h1>
          <p style={{ fontSize: "18px", color: "var(--nadas-ink2)", maxWidth: "560px", lineHeight: 1.6 }}>
            Trafo hesabından modül seçimine — sahada işinize yarayacak pratik rehberler.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section style={{ padding: "20px 0 140px", position: "relative", zIndex: 2 }}>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          style={{ width: "min(1240px, 92vw)", margin: "0 auto" }}
        >
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}/`}
              className="group flex flex-col transition-all duration-200 hover:-translate-y-1"
              style={{
                background: "var(--nadas-bg2)",
                border: "1px solid var(--nadas-line2)",
                borderRadius: "2px",
                padding: "32px",
              }}
            >
              <div
                className="flex items-center justify-between mb-5"
                style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--nadas-ink3)", letterSpacing: "0.06em" }}
              >
                <span style={{ color: "var(--nadas-orange)", textTransform: "uppercase" }}>{p.categoryName}</span>
                <span>{p.readMins} dk</span>
              </div>
              <h2
                className="group-hover:text-[color:var(--nadas-orange)] transition-colors"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "24px", lineHeight: 1.15, letterSpacing: "0.01em", marginBottom: "12px" }}
              >
                {p.title}
              </h2>
              <p style={{ fontSize: "14px", color: "var(--nadas-ink2)", lineHeight: 1.6, marginBottom: "20px" }}>
                {p.excerpt}
              </p>
              <div
                className="mt-auto flex items-center justify-between"
                style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--nadas-ink3)" }}
              >
                {fmt(p.date)}
                <svg
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--nadas-orange)" strokeWidth="2"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
