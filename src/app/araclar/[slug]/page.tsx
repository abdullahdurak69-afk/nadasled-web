import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import type { ComponentType } from "react";
import { tools, getTool } from "@/data/tools";
import { getPost } from "@/data/blog";
import { orgRef } from "@/lib/schema";
import { Prose, FaqList } from "@/components/Prose";
import TrafoCalc from "@/components/tools/TrafoCalc";
import KutuHarfCalc from "@/components/tools/KutuHarfCalc";
import SeritCalc from "@/components/tools/SeritCalc";
import MaliyetCalc from "@/components/tools/MaliyetCalc";

/**
 * Hangi slug'ın hangi hesap makinesini açtığı.
 *
 * Araçların metni data/tools.ts'te, hesabı burada bağlanan client
 * bileşenlerde durur; yeni bir araç eklerken iki yeri birden güncellemek
 * gerekir. Eşleşmeyen slug sayfayı 404'e düşürür, sessizce boş render etmez.
 */
const CALCULATORS: Record<string, ComponentType> = {
  "trafo-amper-hesaplama": TrafoCalc,
  "kutu-harf-modul-hesaplama": KutuHarfCalc,
  "led-serit-guc-hesaplama": SeritCalc,
  "tabela-maliyet-hesaplama": MaliyetCalc,
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return {};
  const url = `https://www.nadasled.com.tr/araclar/${tool.slug}/`;
  return {
    title: tool.metaTitle,
    description: tool.metaDesc,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: tool.metaTitle,
      description: tool.metaDesc,
      url,
      images: [{ url: "https://www.nadasled.com.tr/images/og.jpg", width: 1200, height: 630, alt: tool.title }],
    },
  };
}

export default async function AracPage({ params }: Props) {
  const { slug } = await params;
  const tool = getTool(slug);
  const Calculator = tool ? CALCULATORS[tool.slug] : undefined;
  if (!tool || !Calculator) notFound();

  const url = `https://www.nadasled.com.tr/araclar/${tool.slug}/`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://www.nadasled.com.tr/" },
      { "@type": "ListItem", position: 2, name: "Araçlar", item: "https://www.nadasled.com.tr/araclar/" },
      { "@type": "ListItem", position: 3, name: tool.title, item: url },
    ],
  };

  // Hesaplayıcının kendisi bir uygulama; şema bunu söylemezse sayfa dil
  // modellerine ve arama motorlarına sıradan bir yazı gibi görünüyor.
  //
  // Daha önce Product tipi Search Console'da hata vermişti (9946f22): zorunlu
  // `offers` alanı doldurulamıyordu, çünkü ürün fiyatları proje bazlı veriliyor.
  // Burada aynı sorun yok — araç gerçekten ücretsiz, `price: 0` uydurma değil.
  //
  // `aggregateRating` bilerek yok: puanımız yok, uydurulmaz. Google'ın zengin
  // sonuç raporunda bu alan için uyarı çıkabilir; uyarı indekslemeyi engellemez
  // ve şema yine de dil modelleri tarafından okunur. Rapor hata seviyesine
  // çıkarsa bu düğüm kaldırılabilir, sayfanın geri kalanı etkilenmez.
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${url}#calculator`,
    name: tool.title,
    url,
    description: tool.metaDesc,
    applicationCategory: "UtilitiesApplication",
    applicationSubCategory: "Hesaplama aracı",
    operatingSystem: "Tarayıcı — kurulum gerektirmez",
    browserRequirements: "JavaScript",
    inLanguage: "tr-TR",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: 0, priceCurrency: "TRY" },
    publisher: orgRef,
  };

  const faqSchema =
    tool.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: tool.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  const relatedPosts = tool.relatedPosts.map(getPost).filter((p) => p !== undefined).slice(0, 4);
  const otherTools = tools.filter((t) => t.slug !== tool.slug);
  const waHref = `https://wa.me/905414696966?text=${encodeURIComponent(
    `${tool.categoryName} ürünleri için teklif almak istiyorum.`
  )}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      {/* Breadcrumb */}
      <div style={{ paddingTop: "100px", position: "relative", zIndex: 2 }}>
        <div
          style={{ width: "min(920px, 92vw)", margin: "0 auto", paddingBottom: "20px", borderBottom: "1px solid var(--nadas-line2)" }}
          className="flex items-center gap-2 flex-wrap"
        >
          {[
            { href: "/", label: "Ana Sayfa" },
            { href: "/araclar/", label: "Araçlar" },
            { label: tool.title },
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

      <article style={{ padding: "clamp(36px, 5vw, 56px) 0 80px", position: "relative", zIndex: 2 }}>
        <div style={{ width: "min(920px, 92vw)", margin: "0 auto" }}>
          <div
            className="flex items-center gap-4 mb-6"
            style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--nadas-ink3)", letterSpacing: "0.05em" }}
          >
            <span style={{ color: "var(--nadas-orange)", textTransform: "uppercase" }}>Ücretsiz araç</span>
            <span>·</span>
            <span>Kayıt gerekmez</span>
          </div>
          <h1
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(34px, 5vw, 56px)", lineHeight: 1.05, letterSpacing: "0.01em", marginBottom: "20px" }}
          >
            {tool.title}
          </h1>
          <p style={{ fontSize: "17px", color: "var(--nadas-ink2)", lineHeight: 1.7, marginBottom: "36px", maxWidth: "680px" }}>
            {tool.intro}
          </p>

          <Calculator />

          <div style={{ marginTop: "12px" }}>
            <Prose blocks={tool.blocks} />
          </div>

          <FaqList items={tool.faq} />

          {/* Diğer araçlar */}
          <section style={{ marginTop: "56px" }}>
            <div
              style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--nadas-orange)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "18px" }}
            >
              Diğer Araçlar
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {otherTools.map((t) => (
                <Link
                  key={t.slug}
                  href={`/araclar/${t.slug}/`}
                  className="group flex flex-col transition-all duration-200 hover:-translate-y-1"
                  style={{ background: "var(--nadas-bg2)", border: "1px solid var(--nadas-line2)", borderRadius: "2px", padding: "22px" }}
                >
                  <h3
                    className="group-hover:text-[color:var(--nadas-orange)] transition-colors"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "18px", lineHeight: 1.2, marginBottom: "8px" }}
                  >
                    {t.shortTitle}
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "var(--nadas-ink2)", lineHeight: 1.6 }}>{t.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* İlgili rehberler */}
          {relatedPosts.length > 0 && (
            <section style={{ marginTop: "48px" }}>
              <div
                style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--nadas-orange)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "16px" }}
              >
                Konuyu Derinleştiren Rehberler
              </div>
              <div className="flex flex-col gap-0">
                {relatedPosts.map((p, i) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}/`}
                    className="group flex items-center gap-3 transition-colors"
                    style={{ padding: "14px 0", borderBottom: i < relatedPosts.length - 1 ? "1px solid var(--nadas-line2)" : "none", fontSize: "16px", color: "var(--nadas-ink2)" }}
                  >
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--nadas-orange)" }} />
                    <span className="group-hover:text-[color:var(--nadas-orange)] transition-colors">{p.title}</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
            style={{ marginTop: "48px", background: "var(--nadas-bg2)", border: "1px solid var(--nadas-line2)", borderRadius: "2px", padding: "32px" }}
          >
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "24px", marginBottom: "6px" }}>
                Hesap tamam, sıra malzemede
              </div>
              <p style={{ fontSize: "14px", color: "var(--nadas-ink2)" }}>
                Çıkan listeyi gönderin, aynı gün toptan fiyat verelim.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                data-track="arac_alt_cta"
                className="inline-flex items-center gap-2 font-semibold transition-all duration-200 hover:-translate-y-px"
                style={{ background: "#1FAD56", color: "white", padding: "14px 22px", borderRadius: "2px", fontSize: "14px" }}
              >
                WhatsApp
              </a>
              <Link
                href={`/urunler/${tool.categorySlug}/`}
                className="inline-flex items-center gap-2 font-semibold transition-all duration-200 hover:-translate-y-px"
                style={{ border: "1px solid var(--nadas-line)", color: "var(--nadas-orange)", padding: "14px 22px", borderRadius: "2px", fontSize: "14px" }}
              >
                {tool.categoryName}
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
