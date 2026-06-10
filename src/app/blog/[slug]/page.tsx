import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { posts, getPost, type Block } from "@/data/blog";

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
    openGraph: { type: "article", title: post.metaTitle, description: post.metaDesc, url },
  };
}

// "[metin](/yol)" iç linklerini gerçek <Link>'e çevirir.
function renderInline(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (m) {
      return (
        <Link
          key={i}
          href={m[2]}
          style={{ color: "var(--nadas-orange)", textDecoration: "underline", textUnderlineOffset: "3px" }}
        >
          {m[1]}
        </Link>
      );
    }
    return part;
  });
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(24px, 3vw, 32px)", lineHeight: 1.1, letterSpacing: "0.01em", marginTop: "40px", marginBottom: "16px" }}
        >
          {block.text}
        </h2>
      );
    case "p":
      return (
        <p style={{ fontSize: "16px", color: "var(--nadas-ink2)", lineHeight: 1.8, marginBottom: "18px" }}>
          {renderInline(block.text)}
        </p>
      );
    case "ul":
      return (
        <ul className="flex flex-col gap-3" style={{ marginBottom: "18px" }}>
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span style={{ color: "var(--nadas-orange)", flexShrink: 0, marginTop: "5px" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
              </span>
              <span style={{ fontSize: "15px", color: "var(--nadas-ink2)", lineHeight: 1.7 }}>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="overflow-x-auto" style={{ marginBottom: "24px", border: "1px solid var(--nadas-line2)", borderRadius: "2px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead>
              <tr style={{ background: "var(--nadas-bg3)" }}>
                {block.headers.map((h) => (
                  <th
                    key={h}
                    style={{ textAlign: "left", padding: "12px 16px", fontFamily: "var(--font-mono)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--nadas-orange)", borderBottom: "1px solid var(--nadas-line2)" }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      style={{ padding: "12px 16px", color: j === 0 ? "var(--nadas-ink)" : "var(--nadas-ink2)", fontWeight: j === 0 ? 600 : 400, borderBottom: i < block.rows.length - 1 ? "1px solid var(--nadas-line2)" : "none" }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
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
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "tr-TR",
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: "Nadasled", url: "https://www.nadasled.com.tr" },
    publisher: {
      "@type": "Organization",
      name: "Nadasled",
      logo: { "@type": "ImageObject", url: "https://www.nadasled.com.tr/logo.png" },
    },
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

  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const fmt = (d: string) =>
    new Date(d).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

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

          {post.blocks.map((b, i) => (
            <BlockView key={i} block={b} />
          ))}

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
