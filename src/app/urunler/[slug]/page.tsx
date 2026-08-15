import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import products from "@/data/products.json";
import { getPostsForCategory } from "@/data/blog";
import { getToolsForCategory } from "@/data/tools";
import type { Metadata } from "next";

const PHONE_HREF = "tel:+905414696966";

interface Application {
  img: string;
  caption: string;
}

// Ürün görseli opsiyoneldir — henüz fotoğrafı olmayan kalemler (ör. Power LED
// çipleri) yalnızca ad ve teknik özellikle listelenir.
interface CatalogItem {
  name: string;
  specs: string;
  img?: string;
}

// Kategori seçim rehberi. Her bölüm ya düz paragraf ya da madde listesidir.
interface GuideSection {
  h: string;
  p?: string;
  items?: string[];
}

interface Guide {
  title: string;
  intro: string;
  sections: GuideSection[];
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  const url = `https://www.nadasled.com.tr/urunler/${product.slug}`;
  return {
    title: product.metaTitle,
    description: product.metaDesc,
    keywords: product.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: product.metaTitle,
      description: product.metaDesc,
      url,
      images: [{ url: product.image, alt: product.name }],
    },
  };
}

export default async function UrunKategoriPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const waMessage = encodeURIComponent(`${product.name} hakkında bilgi almak istiyorum.`);
  const waHref = `https://wa.me/905414696966?text=${waMessage}`;

  // Split "Ana Başlık — Açıklama" into a bold title + a lighter subtitle line.
  const [h1Main, ...h1Rest] = product.h1.split(/\s+[—–-]\s+/);
  const h1Sub = h1Rest.join(" — ");

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: product.h1,
    description: product.metaDesc,
    // "Product" tipi kullanılmıyor: fiyat/yorum verisi olmadığından Google'ın
    // zorunlu tuttuğu offers/review/aggregateRating alanları sağlanamıyor.
    itemListElement: product.products.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      description: item.specs,
    })),
  };

  const faqs = (product as { faq?: { q: string; a: string }[] }).faq ?? [];
  const faqSchema =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://www.nadasled.com.tr" },
      { "@type": "ListItem", position: 2, name: "Ürünler", item: "https://www.nadasled.com.tr/urunler" },
      { "@type": "ListItem", position: 3, name: product.name, item: `https://www.nadasled.com.tr/urunler/${product.slug}` },
    ],
  };

  const relatedPosts = getPostsForCategory(product.slug);
  const relatedTools = getToolsForCategory(product.slug);
  const guide = (product as { guide?: Guide }).guide;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      {/* Breadcrumb */}
      <div
        style={{
          paddingTop: "100px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{ width: "min(1240px, 92vw)", margin: "0 auto", paddingBottom: "20px", borderBottom: "1px solid var(--nadas-line2)" }}
          className="flex items-center gap-2"
        >
          {[
            { href: "/", label: "Ana Sayfa" },
            { href: "/urunler", label: "Ürünler" },
            { label: product.name },
          ].map((b, i, arr) => (
            <span key={i} className="flex items-center gap-2">
              {b.href ? (
                <Link
                  href={b.href}
                  style={{ fontSize: "13px", color: "var(--nadas-ink3)", fontFamily: "var(--font-mono)", letterSpacing: "0.04em" }}
                  className="hover:text-[color:var(--nadas-orange)] transition-colors"
                >
                  {b.label}
                </Link>
              ) : (
                <span style={{ fontSize: "13px", color: "var(--nadas-ink2)", fontFamily: "var(--font-mono)", letterSpacing: "0.04em" }}>
                  {b.label}
                </span>
              )}
              {i < arr.length - 1 && (
                <span style={{ color: "var(--nadas-ink3)", fontSize: "12px" }}>/</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section style={{ padding: "clamp(40px, 6vw, 64px) 0 clamp(56px, 8vw, 88px)", position: "relative", zIndex: 2, overflow: "hidden" }}>
        {/* Refined glow backdrop (replaces washed full-bleed photo) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle 600px at 85% 15%, rgba(255,107,26,0.12), transparent 60%), radial-gradient(circle 520px at 25% 70%, rgba(45,79,214,0.10), transparent 60%)",
          }}
        />
        <div
          style={{ width: "min(1240px, 92vw)", margin: "0 auto", position: "relative" }}
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          {/* Left — copy */}
          <div>
            <Link
              href="/urunler"
              className="inline-flex items-center gap-2 mb-7 transition-colors hover:text-[color:var(--nadas-orange)]"
              style={{ fontSize: "13px", color: "var(--nadas-ink3)", fontFamily: "var(--font-mono)" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
              Tüm Ürünler
            </Link>
            <h1
              style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(40px, 5vw, 76px)", lineHeight: 0.98, letterSpacing: "0.01em", marginBottom: h1Sub ? "14px" : "20px" }}
            >
              {h1Main}
            </h1>
            {h1Sub && (
              <p
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(20px, 2.2vw, 30px)", lineHeight: 1.12, letterSpacing: "0.01em", color: "var(--nadas-ink2)", maxWidth: "520px", marginBottom: "22px" }}
              >
                {h1Sub}
              </p>
            )}
            <div className="flex flex-wrap gap-2 mb-8">
              {product.keywords.slice(0, 3).map((k) => (
                <span
                  key={k}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "var(--nadas-orange)",
                    padding: "6px 12px",
                    border: "1px solid var(--nadas-line)",
                    borderRadius: "999px",
                    background: "rgba(255,107,26,0.04)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {k}
                </span>
              ))}
            </div>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              data-track="urun_ust"
              className="inline-flex items-center gap-2 font-semibold transition-all duration-200 hover:-translate-y-px"
              style={{ background: "var(--nadas-orange)", color: "var(--nadas-orange-ink)", padding: "15px 26px", fontSize: "15px", borderRadius: "2px" }}
            >
              Fiyat Teklifi Al
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>

          {/* Right — framed product visual */}
          <div className="relative">
            <div
              className="relative overflow-hidden"
              style={{
                aspectRatio: "4 / 3",
                borderRadius: "14px",
                background: "#ffffff",
                border: "1px solid var(--nadas-line2)",
                boxShadow: "0 24px 60px rgba(16,20,28,0.14), 0 0 60px rgba(242,96,15,0.08)",
              }}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-10"
                sizes="(max-width: 1024px) 92vw, 560px"
                priority
              />
            </div>
            {/* Floating stock badge */}
            <div
              className="absolute flex items-center gap-3"
              style={{
                bottom: "-16px",
                left: "24px",
                background: "var(--nadas-bg3)",
                border: "1px solid var(--nadas-line)",
                padding: "12px 18px",
                borderRadius: "4px",
                backdropFilter: "blur(8px)",
                boxShadow: "0 10px 40px rgba(16,20,28,0.12)",
              }}
            >
              <span className="w-2.5 h-2.5 rounded-full nadas-pulse-dot" style={{ background: "#1FAD56", boxShadow: "0 0 10px #1FAD56" }} />
              <div>
                <div style={{ fontSize: "13px", fontWeight: 600 }}>Stokta · Aynı Gün Kargo</div>
                <div style={{ fontSize: "11px", color: "var(--nadas-ink2)", fontFamily: "var(--font-mono)", letterSpacing: "0.04em" }}>TOPTAN FİYAT · FATURALI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications — product in real-world use */}
      {(() => {
        const applications = (product as { applications?: Application[] }).applications;
        if (!applications || applications.length === 0) return null;
        return (
          <section style={{ padding: "0 0 clamp(56px, 8vw, 96px)", position: "relative", zIndex: 2 }}>
            <div style={{ width: "min(1240px, 92vw)", margin: "0 auto" }}>
              <div
                className="flex items-center gap-3 mb-5"
                style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--nadas-orange)", textTransform: "uppercase", letterSpacing: "0.12em" }}
              >
                <span className="w-6 h-px" style={{ background: "var(--nadas-orange)" }} />
                Sahada
              </div>
              <h2
                className="mb-3"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(30px, 4vw, 52px)", lineHeight: 1.0, letterSpacing: "0.01em" }}
              >
                Uygulamada {product.name}
              </h2>
              <p style={{ fontSize: "16px", color: "var(--nadas-ink2)", maxWidth: "620px", marginBottom: "clamp(28px, 4vw, 44px)" }}>
                Bu ürünlerin sahada nasıl kullanıldığına dair örnek uygulamalar.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {applications.map((a, i) => (
                  <div
                    key={i}
                    className="group relative overflow-hidden"
                    style={{
                      aspectRatio: "4 / 3",
                      borderRadius: "12px",
                      border: "1px solid var(--nadas-line2)",
                      background: "var(--nadas-bg2)",
                      boxShadow: "0 14px 40px rgba(16,20,28,0.10)",
                    }}
                  >
                    <Image
                      src={a.img}
                      alt={`${product.name} uygulama örneği — ${a.caption}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 400px"
                    />
                    <div
                      className="absolute inset-x-0 bottom-0 flex items-end"
                      style={{
                        padding: "18px",
                        minHeight: "90px",
                        background: "linear-gradient(to top, rgba(8,10,14,0.82), rgba(8,10,14,0))",
                      }}
                    >
                      <span style={{ color: "#fff", fontSize: "14px", fontWeight: 600, lineHeight: 1.35, textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>
                        {a.caption}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: "12px", color: "var(--nadas-ink3)", fontFamily: "var(--font-mono)", marginTop: "18px", letterSpacing: "0.03em" }}>
                Görseller temsilîdir.
              </p>
            </div>
          </section>
        );
      })()}

      {/* Content */}
      <section style={{ padding: "0 0 140px", position: "relative", zIndex: 2 }}>
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-10"
          style={{ width: "min(1240px, 92vw)", margin: "0 auto" }}
        >
          {/* Main content */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Products list */}
            <div
              style={{ background: "var(--nadas-bg2)", border: "1px solid var(--nadas-line2)", borderRadius: "2px", padding: "40px" }}
            >
              <div
                style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--nadas-orange)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "24px" }}
              >
                Ürünler
              </div>
              <div>
                {(product.products as CatalogItem[]).map((item, i) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between gap-4"
                    style={{ padding: "16px 0", borderBottom: i < product.products.length - 1 ? "1px solid var(--nadas-line2)" : "none" }}
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      {item.img && (
                        <div
                          className="relative flex-shrink-0 overflow-hidden"
                          style={{ width: "64px", height: "64px", borderRadius: "4px", background: "#fff", border: "1px solid var(--nadas-line2)" }}
                        >
                          <Image
                            src={item.img}
                            alt={item.name}
                            fill
                            className="object-contain p-1.5"
                            sizes="64px"
                          />
                        </div>
                      )}
                      <div className="min-w-0">
                        <p style={{ fontSize: "15px", fontWeight: 600, marginBottom: "4px" }}>{item.name}</p>
                        <p style={{ fontSize: "13px", color: "var(--nadas-ink2)", fontFamily: "var(--font-mono)" }}>{item.specs}</p>
                      </div>
                    </div>
                    <a
                      href={`https://wa.me/905414696966?text=${encodeURIComponent(`${item.name} için fiyat öğrenmek istiyorum.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      /* Hangi ürünün fiyatı soruluyor — GA4'te ürün bazlı talep raporu */
                      data-track={`urun_karti: ${item.name}`}
                      className="flex-shrink-0 inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-px"
                      style={{
                        border: "1px solid var(--nadas-line)",
                        color: "var(--nadas-orange)",
                        padding: "8px 16px",
                        borderRadius: "2px",
                        fontSize: "13px",
                        fontWeight: 600,
                        whiteSpace: "nowrap",
                      }}
                    >
                      Teklif Al
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div
              style={{ background: "var(--nadas-bg2)", border: "1px solid var(--nadas-line2)", borderRadius: "2px", padding: "40px" }}
            >
              <div
                style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--nadas-orange)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "24px" }}
              >
                Özellikler
              </div>
              <div className="flex flex-col gap-0">
                {product.features.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4"
                    style={{ padding: "14px 0", borderBottom: i < product.features.length - 1 ? "1px solid var(--nadas-line2)" : "none" }}
                  >
                    <span style={{ color: "var(--nadas-orange)", flexShrink: 0, marginTop: "2px" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span style={{ fontSize: "14px", color: "var(--nadas-ink2)", lineHeight: 1.6 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Seçim rehberi — kategori sayfasına gerçek içerik ve H2/H3 yapısı */}
            {guide && (
              <div
                style={{ background: "var(--nadas-bg2)", border: "1px solid var(--nadas-line2)", borderRadius: "2px", padding: "40px" }}
              >
                <div
                  style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--nadas-orange)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "12px" }}
                >
                  Seçim Rehberi
                </div>
                <h2
                  style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(26px, 3vw, 34px)", lineHeight: 1.08, letterSpacing: "0.01em", marginBottom: "16px" }}
                >
                  {guide.title}
                </h2>
                <p style={{ fontSize: "16px", color: "var(--nadas-ink2)", lineHeight: 1.7 }}>{guide.intro}</p>

                <div className="flex flex-col gap-0">
                  {guide.sections.map((s, i) => (
                    <div
                      key={i}
                      style={{ paddingTop: "26px", marginTop: "26px", borderTop: "1px solid var(--nadas-line2)" }}
                    >
                      <h3 style={{ fontSize: "17px", fontWeight: 600, marginBottom: "10px" }}>{s.h}</h3>
                      {s.p && (
                        <p style={{ fontSize: "15px", color: "var(--nadas-ink2)", lineHeight: 1.75 }}>{s.p}</p>
                      )}
                      {s.items && (
                        <ul className="flex flex-col gap-2.5" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                          {s.items.map((it, j) => (
                            <li key={j} className="flex items-start gap-3">
                              <span
                                className="flex-shrink-0"
                                style={{ width: "5px", height: "5px", borderRadius: "999px", background: "var(--nadas-orange)", marginTop: "9px" }}
                              />
                              <span style={{ fontSize: "15px", color: "var(--nadas-ink2)", lineHeight: 1.7 }}>{it}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ */}
            {faqs.length > 0 && (
              <div
                style={{ background: "var(--nadas-bg2)", border: "1px solid var(--nadas-line2)", borderRadius: "2px", padding: "40px" }}
              >
                <div
                  style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--nadas-orange)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "12px" }}
                >
                  SSS
                </div>
                <h2
                  style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(26px, 3vw, 34px)", lineHeight: 1.08, letterSpacing: "0.01em", marginBottom: "20px" }}
                >
                  {product.name} hakkında sık sorulanlar
                </h2>
                <div className="flex flex-col gap-0">
                  {faqs.map((f, i) => (
                    <div
                      key={i}
                      style={{ padding: "18px 0", borderBottom: i < faqs.length - 1 ? "1px solid var(--nadas-line2)" : "none" }}
                    >
                      <h3 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "8px" }}>{f.q}</h3>
                      <p style={{ fontSize: "14px", color: "var(--nadas-ink2)", lineHeight: 1.7 }}>{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Hesaplama araçları — kategori sayfalarından /araclar'a iç link akışı */}
            {relatedTools.length > 0 && (
              <div
                style={{ background: "var(--nadas-bg2)", border: "1px solid var(--nadas-line2)", borderRadius: "2px", padding: "40px" }}
              >
                <div
                  style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--nadas-orange)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "12px" }}
                >
                  Hesaplama Araçları
                </div>
                <h2
                  style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "26px", lineHeight: 1.1, letterSpacing: "0.01em", marginBottom: "24px" }}
                >
                  Sipariş öncesi hesaplayın
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedTools.map((t) => (
                    <Link
                      key={t.slug}
                      href={`/araclar/${t.slug}`}
                      className="group flex flex-col transition-all duration-200 hover:-translate-y-1"
                      style={{ border: "1px solid var(--nadas-line2)", borderRadius: "2px", padding: "20px" }}
                    >
                      <h3
                        className="transition-colors group-hover:text-[color:var(--nadas-orange)]"
                        style={{ fontSize: "16px", fontWeight: 600, marginBottom: "6px", lineHeight: 1.35 }}
                      >
                        {t.title}
                      </h3>
                      <p style={{ fontSize: "13.5px", color: "var(--nadas-ink2)", lineHeight: 1.6 }}>{t.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* İlgili rehberler — kategori sayfalarından blog'a iç link akışı */}
            {relatedPosts.length > 0 && (
              <div
                style={{ background: "var(--nadas-bg2)", border: "1px solid var(--nadas-line2)", borderRadius: "2px", padding: "40px" }}
              >
                <div
                  style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--nadas-orange)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "12px" }}
                >
                  İlgili Rehberler
                </div>
                <h2
                  style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "26px", lineHeight: 1.1, letterSpacing: "0.01em", marginBottom: "24px" }}
                >
                  {product.name} seçmeden önce
                </h2>
                <div className="flex flex-col gap-0">
                  {relatedPosts.map((post, i) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group block transition-colors"
                      style={{
                        padding: "18px 0",
                        borderBottom: i < relatedPosts.length - 1 ? "1px solid var(--nadas-line2)" : "none",
                      }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <h3
                            className="transition-colors group-hover:text-[color:var(--nadas-orange)]"
                            style={{ fontSize: "16px", fontWeight: 600, marginBottom: "6px", lineHeight: 1.35 }}
                          >
                            {post.title}
                          </h3>
                          <p style={{ fontSize: "14px", color: "var(--nadas-ink2)", lineHeight: 1.6 }}>{post.excerpt}</p>
                        </div>
                        <span
                          className="flex-shrink-0"
                          style={{ fontSize: "12px", color: "var(--nadas-ink3)", fontFamily: "var(--font-mono)", whiteSpace: "nowrap", paddingTop: "3px" }}
                        >
                          {post.readMins} dk
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 mt-6 transition-colors hover:text-[color:var(--nadas-orange)]"
                  style={{ fontSize: "13px", color: "var(--nadas-ink2)", fontFamily: "var(--font-mono)", letterSpacing: "0.04em" }}
                >
                  Tüm rehberler
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </Link>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-4">
            {/* CTA card */}
            <div
              style={{
                background: "var(--nadas-bg2)",
                border: "1px solid var(--nadas-line2)",
                borderRadius: "2px",
                padding: "32px",
                position: "sticky",
                top: "100px",
              }}
            >
              <div
                style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--nadas-orange)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "12px" }}
              >
                Fiyat Teklifi Al
              </div>
              <h3
                style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "32px", lineHeight: 0.95, letterSpacing: "0.01em", marginBottom: "12px" }}
              >
                Hemen Sor
              </h3>
              <p style={{ fontSize: "14px", color: "var(--nadas-ink2)", lineHeight: 1.6, marginBottom: "24px" }}>
                İhtiyacınız olan ürün ve miktarı bildirin, en uygun toptan fiyatı hemen iletiyoruz.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="urun_yan_panel"
                  className="inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 hover:-translate-y-px"
                  style={{ background: "#1FAD56", color: "white", padding: "16px 20px", borderRadius: "2px", fontSize: "14px" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp ile Sor
                </a>
                <a
                  href={PHONE_HREF}
                  data-track="urun_yan_panel"
                  className="inline-flex items-center justify-center gap-2 font-medium transition-all duration-200"
                  style={{ border: "1px solid var(--nadas-line2)", color: "var(--nadas-ink)", padding: "16px 20px", borderRadius: "2px", fontSize: "14px" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                  Telefon ile Ara
                </a>
              </div>
              <div
                className="flex flex-col gap-2 mt-6 pt-6"
                style={{ borderTop: "1px solid var(--nadas-line2)" }}
              >
                {["Aynı gün kargo", "Faturalı satış", "1 yıl garanti", "Teknik destek"].map((t) => (
                  <div key={t} className="flex items-center gap-2" style={{ fontSize: "13px", color: "var(--nadas-ink2)" }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--nadas-orange)" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Other categories */}
            <div
              style={{ background: "var(--nadas-bg2)", border: "1px solid var(--nadas-line2)", borderRadius: "2px", padding: "24px" }}
            >
              <div
                style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--nadas-orange)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "16px" }}
              >
                Diğer Kategoriler
              </div>
              <div className="flex flex-col gap-0">
                {products.filter((p) => p.slug !== product.slug).map((p, i, arr) => (
                  <Link
                    key={p.slug}
                    href={`/urunler/${p.slug}`}
                    className="flex items-center gap-3 transition-colors group"
                    style={{
                      padding: "10px 0",
                      borderBottom: i < arr.length - 1 ? "1px solid var(--nadas-line2)" : "none",
                      fontSize: "14px",
                      color: "var(--nadas-ink2)",
                    }}
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: "var(--nadas-orange)" }}
                    />
                    {p.name}
                    <svg
                      className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                      width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--nadas-orange)" strokeWidth="2"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6"/>
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
