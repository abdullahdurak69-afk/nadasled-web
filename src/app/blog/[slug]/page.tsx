import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { posts, getPost, getRelatedPosts } from "@/data/blog";
import { getToolsForPost } from "@/data/tools";
import { Prose, FaqList } from "@/components/Prose";
import { orgRef } from "@/lib/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `https://www.nadasled.com.tr/blog/${post.slug}`;
  return {
    title: post.metaTitle,
    description: post.metaDesc,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.metaDesc,
      url,
      images: [{ url: "https://www.nadasled.com.tr/images/og.jpg", width: 1200, height: 630, alt: post.title }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `https://www.nadasled.com.tr/blog/${post.slug}`;
  const waHref = `https://wa.me/905414696966?text=${encodeURIComponent(`${post.categoryName} ürünleri hakkında bilgi almak istiyorum.`)}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDesc,
    image: "https://www.nadasled.com.tr/images/og.jpg",
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    inLanguage: "tr-TR",
    mainEntityOfPage: url,
    // Yazar ve yayıncı, root layout'taki tek işletme düğümüne bağlanıyor;
    // burada ayrı bir Organization tanımlamak grafiği bölüyordu.
    author: orgRef,
    publisher: orgRef,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://www.nadasled.com.tr" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.nadasled.com.tr/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  const faqSchema =
    post.faq && post.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  const others = getRelatedPosts(post.slug);
  const relatedTools = getToolsForPost(post.slug);
  const fmt = (d: string) =>
    new Date(d).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      {/* Breadcrumb */}
      <div style={{ paddingTop: "100px", position: "relative", zIndex: 2 }}>
        <div
          style={{ width: "min(820px, 92vw)", margin: "0 auto", paddingBottom: "20px", borderBottom: "1px solid var(--nadas-line2)" }}
          className="flex items-center gap-2 flex-wrap"
        >
          {[
            { href: "/", label: "Ana Sayfa" },
            { href: "/blog", label: "Blog" },
            { label: post.title },
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
                  {b.label.length > 40 ? b.label.slice(0, 40) + "…" : b.label}
                </span>
              )}
              {i < arr.length - 1 && <span style={{ color: "var(--nadas-ink3)", fontSize: "12px" }}>/</span>}
            </span>
          ))}
        </div>
      </div>

      {/* Article */}
      <article style={{ padding: "clamp(36px, 5vw, 56px) 0 80px", position: "relative", zIndex: 2 }}>
        <div style={{ width: "min(820px, 92vw)", margin: "0 auto" }}>
          <div
            className="flex items-center gap-4 mb-6"
            style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--nadas-ink3)", letterSpacing: "0.05em" }}
          >
            <span style={{ color: "var(--nadas-orange)", textTransform: "uppercase" }}>{post.categoryName}</span>
            <span>·</span>
            <span>{fmt(post.date)}</span>
            <span>·</span>
            <span>{post.readMins} dk okuma</span>
          </div>
          <h1
            style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(34px, 5vw, 56px)", lineHeight: 1.05, letterSpacing: "0.01em", marginBottom: "36px" }}
          >
            {post.title}
          </h1>

          <Prose blocks={post.blocks} />

          {/* SSS — hem okuyucu için hem FAQPage schema kaynağı */}
          {post.faq && <FaqList items={post.faq} />}

          {/* Hesaplama araçları — yazıdaki formülü elle uygulamak yerine */}
          <section style={{ marginTop: "48px" }}>
            <div
              style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--nadas-orange)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "16px" }}
            >
              Hesabı Araçla Yapın
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedTools.map((t) => (
                <Link
                  key={t.slug}
                  href={`/araclar/${t.slug}`}
                  className="group flex flex-col transition-all duration-200 hover:-translate-y-1"
                  style={{ background: "var(--nadas-bg2)", border: "1px solid var(--nadas-line2)", borderRadius: "2px", padding: "22px" }}
                >
                  <h3
                    className="group-hover:text-[color:var(--nadas-orange)] transition-colors"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "19px", lineHeight: 1.2, marginBottom: "8px" }}
                  >
                    {t.title}
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "var(--nadas-ink2)", lineHeight: 1.6 }}>{t.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
            style={{ marginTop: "48px", background: "var(--nadas-bg2)", border: "1px solid var(--nadas-line2)", borderRadius: "2px", padding: "32px" }}
          >
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "24px", marginBottom: "6px" }}>
                Toptan fiyat mı lazım?
              </div>
              <p style={{ fontSize: "14px", color: "var(--nadas-ink2)" }}>
                İhtiyaç listenizi gönderin, aynı gün teklif verelim.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                data-track="blog_yazi"
                className="inline-flex items-center gap-2 font-semibold transition-all duration-200 hover:-translate-y-px"
                style={{ background: "#1FAD56", color: "white", padding: "14px 22px", borderRadius: "2px", fontSize: "14px" }}
              >
                WhatsApp
              </a>
              <Link
                href={`/urunler/${post.categorySlug}`}
                className="inline-flex items-center gap-2 font-semibold transition-all duration-200 hover:-translate-y-px"
                style={{ border: "1px solid var(--nadas-line)", color: "var(--nadas-orange)", padding: "14px 22px", borderRadius: "2px", fontSize: "14px" }}
              >
                Ürünlere Bak
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Other posts */}
      <section style={{ padding: "0 0 140px", position: "relative", zIndex: 2 }}>
        <div style={{ width: "min(820px, 92vw)", margin: "0 auto" }}>
          <div
            style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--nadas-orange)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "20px" }}
          >
            Diğer Rehberler
          </div>
          <div className="flex flex-col gap-0">
            {others.map((p, i) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex items-center gap-3 transition-colors"
                style={{ padding: "14px 0", borderBottom: i < others.length - 1 ? "1px solid var(--nadas-line2)" : "none", fontSize: "16px", color: "var(--nadas-ink2)" }}
              >
                <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--nadas-orange)" }} />
                <span className="group-hover:text-[color:var(--nadas-orange)] transition-colors">{p.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
