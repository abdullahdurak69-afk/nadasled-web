import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import products from "@/data/products.json";
import { items, getItem, getRelatedItems } from "@/data/items";
import { getPostsForCategory } from "@/data/blog";
import { getToolsForCategory } from "@/data/tools";
import { BlockView } from "@/components/Prose";
import { SITE } from "@/lib/schema";
import type { Metadata } from "next";

const PHONE_HREF = "tel:+905414696966";

interface Props {
  params: Promise<{ slug: string; urun: string }>;
}

export async function generateStaticParams() {
  return items.map((i) => ({ slug: i.categorySlug, urun: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, urun } = await params;
  const item = getItem(slug, urun);
  if (!item) return {};
  const url = `${SITE}/urunler/${item.categorySlug}/${item.slug}/`;
  return {
    title: item.metaTitle,
    description: item.metaDesc,
    keywords: item.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: item.metaTitle,
      description: item.metaDesc,
      url,
      ...(item.img ? { images: [{ url: item.img, alt: item.name }] } : {}),
    },
  };
}

export default async function UrunPage({ params }: Props) {
  const { slug, urun } = await params;
  const item = getItem(slug, urun);
  if (!item) notFound();

  const category = products.find((p) => p.slug === item.categorySlug);
  if (!category) notFound();

  const waMessage = encodeURIComponent(`${item.name} hakkında fiyat bilgisi almak istiyorum.`);
  const waHref = `https://wa.me/905414696966?text=${waMessage}`;

  const related = getRelatedItems(item);
  const relatedPosts = getPostsForCategory(item.categorySlug, 2);
  const relatedTools = getToolsForCategory(item.categorySlug);

  // Product/Offer tipi bilerek kullanılmıyor: fiyat proje bazlı verildiği için
  // Google'ın zorunlu tuttuğu offers/review alanları doldurulamıyor. Aynı
  // gerekçe kategori sayfalarında da geçerli — bkz. lib/schema.ts.
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Ürünler", item: `${SITE}/urunler/` },
      { "@type": "ListItem", position: 3, name: category.name, item: `${SITE}/urunler/${category.slug}/` },
      { "@type": "ListItem", position: 4, name: item.name, item: `${SITE}/urunler/${item.categorySlug}/${item.slug}/` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: item.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const card = {
    background: "var(--nadas-bg2)",
    border: "1px solid var(--nadas-line2)",
    borderRadius: "2px",
    padding: "40px",
  } as const;

  const eyebrow = {
    fontFamily: "var(--font-mono)",
    fontSize: "11px",
    color: "var(--nadas-orange)",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    marginBottom: "12px",
  } as const;

  const sectionH2 = {
    fontFamily: "var(--font-display)",
    fontWeight: 400,
    fontSize: "clamp(26px, 3vw, 34px)",
    lineHeight: 1.08,
    letterSpacing: "0.01em",
    marginBottom: "20px",
  } as const;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <div style={{ paddingTop: "100px", position: "relative", zIndex: 2 }}>
        <div
          style={{ width: "min(1240px, 92vw)", margin: "0 auto", paddingBottom: "20px", borderBottom: "1px solid var(--nadas-line2)" }}
          className="flex items-center gap-2 flex-wrap"
        >
          {[
            { href: "/", label: "Ana Sayfa" },
            { href: "/urunler/", label: "Ürünler" },
            { href: `/urunler/${category.slug}/`, label: category.name },
            { label: item.name },
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
              {i < arr.length - 1 && <span style={{ color: "var(--nadas-ink3)", fontSize: "12px" }}>/</span>}
            </span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section style={{ padding: "clamp(40px, 6vw, 64px) 0 clamp(48px, 7vw, 72px)", position: "relative", zIndex: 2, overflow: "hidden" }}>
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
          <div>
            <Link
              href={`/urunler/${category.slug}/`}
              className="inline-flex items-center gap-2 mb-7 transition-colors hover:text-[color:var(--nadas-orange)]"
              style={{ fontSize: "13px", color: "var(--nadas-ink3)", fontFamily: "var(--font-mono)" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
              {category.name}
            </Link>
            <h1
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(34px, 4.4vw, 64px)", lineHeight: 1.0, letterSpacing: "0.01em", marginBottom: "18px" }}
            >
              {item.h1}
            </h1>
            <p style={{ fontSize: "16px", color: "var(--nadas-ink2)", lineHeight: 1.75, maxWidth: "560px", marginBottom: "24px" }}>
              {item.intro}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {item.keywords.slice(0, 3).map((k) => (
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

          {item.img && (
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
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-contain p-10"
                  sizes="(max-width: 1024px) 92vw, 560px"
                  priority
                />
              </div>
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
          )}
        </div>
      </section>

      {/* Gövde */}
      <section style={{ padding: "0 0 clamp(64px, 9vw, 110px)", position: "relative", zIndex: 2 }}>
        <div style={{ width: "min(1240px, 92vw)", margin: "0 auto" }} className="grid lg:grid-cols-[1fr_360px] gap-8">
          <div className="flex flex-col gap-6 min-w-0">
            {/* Teknik özellikler + kullanım alanları */}
            <div style={card} className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
              <div>
                <div style={eyebrow}>Teknik Özellikler</div>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <tbody>
                    {item.specs.map(([label, value], i) => (
                      <tr key={label} style={{ borderBottom: i < item.specs.length - 1 ? "1px solid var(--nadas-line2)" : "none" }}>
                        <td style={{ padding: "11px 0", fontSize: "14px", color: "var(--nadas-ink2)", width: "45%" }}>{label}</td>
                        <td style={{ padding: "11px 0", fontSize: "14px", color: "var(--nadas-ink)", fontWeight: 600 }}>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div>
                <div style={eyebrow}>Nerede Kullanılır</div>
                <ul className="flex flex-col gap-2.5" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {item.useCases.map((u) => (
                    <li key={u} className="flex items-start gap-3">
                      <span
                        className="flex-shrink-0"
                        style={{ width: "5px", height: "5px", borderRadius: "999px", background: "var(--nadas-orange)", marginTop: "9px" }}
                      />
                      <span style={{ fontSize: "15px", color: "var(--nadas-ink2)", lineHeight: 1.7 }}>{u}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Anlatım */}
            <div style={card}>
              <div style={eyebrow}>Seçim Notları</div>
              {item.blocks.map((b, i) => (
                <BlockView key={i} block={b} />
              ))}
            </div>

            {/* SSS */}
            <div style={card}>
              <div style={eyebrow}>SSS</div>
              <h2 style={sectionH2}>{item.name} hakkında sık sorulanlar</h2>
              <div className="flex flex-col gap-0">
                {item.faq.map((f, i) => (
                  <div key={i} style={{ padding: "18px 0", borderBottom: i < item.faq.length - 1 ? "1px solid var(--nadas-line2)" : "none" }}>
                    <h3 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "8px" }}>{f.q}</h3>
                    <p style={{ fontSize: "14px", color: "var(--nadas-ink2)", lineHeight: 1.7 }}>{f.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Karşılaştırılan ürünler */}
            {related.length > 0 && (
              <div style={card}>
                <div style={eyebrow}>Birlikte Değerlendirilenler</div>
                <h2 style={sectionH2}>Karar vermeden önce bunlara da bakın</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/urunler/${r.categorySlug}/${r.slug}/`}
                      className="group flex flex-col transition-all duration-200 hover:-translate-y-1"
                      style={{ border: "1px solid var(--nadas-line2)", borderRadius: "2px", padding: "20px" }}
                    >
                      <h3
                        className="transition-colors group-hover:text-[color:var(--nadas-orange)]"
                        style={{ fontSize: "15px", fontWeight: 600, marginBottom: "6px", lineHeight: 1.35 }}
                      >
                        {r.name}
                      </h3>
                      <p style={{ fontSize: "13px", color: "var(--nadas-ink2)", lineHeight: 1.6 }}>
                        {r.specs.map(([, v]) => v).slice(0, 2).join(" · ")}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Hesaplama araçları */}
            {relatedTools.length > 0 && (
              <div style={card}>
                <div style={eyebrow}>Hesaplama Araçları</div>
                <h2 style={{ ...sectionH2, fontSize: "26px" }}>Sipariş öncesi hesaplayın</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedTools.map((t) => (
                    <Link
                      key={t.slug}
                      href={`/araclar/${t.slug}/`}
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

            {/* İlgili rehberler */}
            {relatedPosts.length > 0 && (
              <div style={card}>
                <div style={eyebrow}>İlgili Rehberler</div>
                <h2 style={{ ...sectionH2, fontSize: "26px" }}>{item.name} seçmeden önce</h2>
                <div className="flex flex-col gap-0">
                  {relatedPosts.map((post, i) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}/`}
                      className="group block"
                      style={{ padding: "18px 0", borderBottom: i < relatedPosts.length - 1 ? "1px solid var(--nadas-line2)" : "none" }}
                    >
                      <h3
                        className="transition-colors group-hover:text-[color:var(--nadas-orange)]"
                        style={{ fontSize: "16px", fontWeight: 600, marginBottom: "6px", lineHeight: 1.35 }}
                      >
                        {post.title}
                      </h3>
                      <p style={{ fontSize: "14px", color: "var(--nadas-ink2)", lineHeight: 1.6 }}>{post.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-4">
            <div style={{ ...card, padding: "32px", position: "sticky", top: "100px" }}>
              <div style={eyebrow}>Fiyat Teklifi Al</div>
              <h3
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "32px", lineHeight: 0.95, letterSpacing: "0.01em", marginBottom: "12px" }}
              >
                Hemen Sor
              </h3>
              <p style={{ fontSize: "14px", color: "var(--nadas-ink2)", lineHeight: 1.6, marginBottom: "24px" }}>
                {item.name} için ihtiyacınız olan miktarı bildirin, en uygun toptan fiyatı hemen iletiyoruz.
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
                  WhatsApp ile Sor
                </a>
                <a
                  href={PHONE_HREF}
                  data-track="urun_yan_panel"
                  className="inline-flex items-center justify-center gap-2 font-medium transition-all duration-200"
                  style={{ border: "1px solid var(--nadas-line2)", color: "var(--nadas-ink)", padding: "16px 20px", borderRadius: "2px", fontSize: "14px" }}
                >
                  Telefon ile Ara
                </a>
              </div>
              <div className="flex flex-col gap-2 mt-6 pt-6" style={{ borderTop: "1px solid var(--nadas-line2)" }}>
                {["Aynı gün kargo", "Faturalı satış", "1 yıl garanti", "Teknik destek"].map((t) => (
                  <div key={t} className="flex items-center gap-2" style={{ fontSize: "13px", color: "var(--nadas-ink2)" }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--nadas-orange)" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
