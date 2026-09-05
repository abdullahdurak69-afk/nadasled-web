import Link from "next/link";
import type { Metadata } from "next";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "Tabela Hesaplama Araçları — Trafo, Modül, Şerit, Maliyet",
  description:
    "Tabelacılar için ücretsiz hesaplama araçları: trafo amper hesabı, kutu harf modül adedi, LED şerit güç ve metrajı, tabela malzeme maliyeti.",
  alternates: { canonical: "https://www.nadasled.com.tr/araclar/" },
};

export default function AraclarPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Tabela hesaplama araçları",
    itemListElement: tools.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.title,
      url: `https://www.nadasled.com.tr/araclar/${t.slug}/`,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://www.nadasled.com.tr/" },
      { "@type": "ListItem", position: 2, name: "Araçlar", item: "https://www.nadasled.com.tr/araclar/" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section style={{ padding: "160px 0 60px", position: "relative", zIndex: 2 }}>
        <div style={{ width: "min(1240px, 92vw)", margin: "0 auto" }}>
          <div
            className="flex items-center gap-3 mb-6"
            style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--nadas-orange)", textTransform: "uppercase", letterSpacing: "0.12em" }}
          >
            <span className="w-6 h-px" style={{ background: "var(--nadas-orange)" }} />
            Hesaplama Araçları
          </div>
          <h1
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(44px, 7vw, 96px)", lineHeight: 0.95, letterSpacing: "0.01em", marginBottom: "20px" }}
          >
            Sahada <span style={{ color: "var(--nadas-orange)" }}>iki dakikada</span> hesap
          </h1>
          <p style={{ fontSize: "18px", color: "var(--nadas-ink2)", maxWidth: "620px", lineHeight: 1.6 }}>
            Trafo amperinden modül adedine, şerit metrajından malzeme listesine — teklif hazırlarken elinizin altında
            olması gereken hesaplar. Kayıt yok, üyelik yok, sonuç anında çıkar.
          </p>
        </div>
      </section>

      {/* Araç kartları */}
      <section style={{ padding: "20px 0 140px", position: "relative", zIndex: 2 }}>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          style={{ width: "min(1240px, 92vw)", margin: "0 auto" }}
        >
          {tools.map((t, i) => (
            <Link
              key={t.slug}
              href={`/araclar/${t.slug}/`}
              className="group flex flex-col transition-all duration-200 hover:-translate-y-1"
              style={{
                background: "var(--nadas-bg2)",
                border: "1px solid var(--nadas-line2)",
                borderRadius: "2px",
                padding: "36px",
              }}
            >
              <div
                className="flex items-center justify-between mb-5"
                style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--nadas-ink3)", letterSpacing: "0.06em" }}
              >
                <span style={{ color: "var(--nadas-orange)" }}>{String(i + 1).padStart(2, "0")}</span>
                <span style={{ textTransform: "uppercase" }}>{t.categoryName}</span>
              </div>
              <h2
                className="group-hover:text-[color:var(--nadas-orange)] transition-colors"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "28px", lineHeight: 1.12, letterSpacing: "0.01em", marginBottom: "12px" }}
              >
                {t.title}
              </h2>
              <p style={{ fontSize: "15px", color: "var(--nadas-ink2)", lineHeight: 1.65, marginBottom: "24px" }}>
                {t.excerpt}
              </p>
              <div
                className="mt-auto flex items-center gap-2"
                style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--nadas-ink3)", letterSpacing: "0.04em" }}
              >
                Aracı aç
                <svg
                  className="transition-transform group-hover:translate-x-1"
                  width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--nadas-orange)" strokeWidth="2"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div
          style={{ width: "min(1240px, 92vw)", margin: "48px auto 0", padding: "32px", background: "var(--nadas-bg2)", border: "1px solid var(--nadas-line2)", borderRadius: "2px" }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
        >
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "24px", marginBottom: "6px" }}>
              Hesabı biz de yapabiliriz
            </div>
            <p style={{ fontSize: "14px", color: "var(--nadas-ink2)", maxWidth: "520px", lineHeight: 1.6 }}>
              Tabela ölçünüzü ve modül adedinizi WhatsApp&apos;tan gönderin; trafo, kablo ve malzeme listesini
              çıkarıp aynı gün toptan fiyatla birlikte iletelim.
            </p>
          </div>
          <a
            href="https://wa.me/905414696966?text=Merhaba%2C%20tabela%20hesab%C4%B1%20i%C3%A7in%20yard%C4%B1m%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            data-track="araclar_liste"
            className="inline-flex items-center gap-2 font-semibold transition-all duration-200 hover:-translate-y-px flex-shrink-0"
            style={{ background: "#1FAD56", color: "white", padding: "14px 22px", borderRadius: "2px", fontSize: "14px" }}
          >
            WhatsApp&apos;tan sor
          </a>
        </div>
      </section>
    </>
  );
}
