import Image from "next/image";
import Link from "next/link";

interface Showcase {
  img: string;
  title: string;
  caption: string;
  slug: string;
  span: string; // grid column span on large screens
}

// Curated real-world application shots, each linking to its category.
const items: Showcase[] = [
  { img: "/images/uygulama/neon-led-1.webp", title: "Neon LED", caption: "Mağaza vitrini neon yazı", slug: "neon-led", span: "lg:col-span-7" },
  { img: "/images/uygulama/led-modul-2.webp", title: "LED Modül", caption: "Arkadan ışıklı kutu harf", slug: "led-modul", span: "lg:col-span-5" },
  { img: "/images/uygulama/point-led-2.webp", title: "Point LED", caption: "RGB cam cephe aydınlatması", slug: "point-led", span: "lg:col-span-5" },
  { img: "/images/uygulama/led-serit-1.webp", title: "LED Şerit", caption: "Gizli ışık (cove) aydınlatma", slug: "led-serit", span: "lg:col-span-4" },
  { img: "/images/uygulama/pergole-led-1.webp", title: "Pergola LED", caption: "Dış mekan pergola aydınlatması", slug: "pergole-led", span: "lg:col-span-3" },
];

export default function Applications() {
  return (
    <section id="uygulamalar" style={{ padding: "clamp(72px, 12vw, 140px) 0", position: "relative", zIndex: 2 }}>
      <div style={{ width: "min(1240px, 92vw)", margin: "0 auto" }}>
        {/* Section header */}
        <div
          className="flex items-center gap-3 mb-5"
          style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--nadas-orange)", textTransform: "uppercase", letterSpacing: "0.12em" }}
        >
          <span className="w-6 h-px" style={{ background: "var(--nadas-orange)" }} />
          02 · Sahada
        </div>
        <h2
          className="mb-6"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(44px, 6vw, 88px)", lineHeight: 0.95, letterSpacing: "0.02em", maxWidth: "900px" }}
        >
          Ürünlerimiz<br />sahada böyle parlıyor.
        </h2>
        <p style={{ fontSize: "17px", color: "var(--nadas-ink2)", maxWidth: "640px", marginBottom: "clamp(40px, 6vw, 64px)" }}>
          Tabela, kutu harf, cephe ve dekoratif aydınlatma — ürünlerimizin gerçek kullanım örnekleri.
        </p>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5">
          {items.map((it) => (
            <Link
              key={it.slug}
              href={`/urunler/${it.slug}`}
              className={`group relative overflow-hidden block ${it.span}`}
              style={{
                aspectRatio: "16 / 10",
                borderRadius: "14px",
                border: "1px solid var(--nadas-line2)",
                background: "var(--nadas-bg2)",
                boxShadow: "0 16px 44px rgba(16,20,28,0.12)",
              }}
            >
              <Image
                src={it.img}
                alt={`${it.title} uygulama örneği — ${it.caption}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 560px"
              />
              {/* Caption overlay */}
              <div
                className="absolute inset-0 flex flex-col justify-end"
                style={{
                  padding: "22px",
                  background: "linear-gradient(to top, rgba(8,10,14,0.85), rgba(8,10,14,0.05) 55%, rgba(8,10,14,0))",
                }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--nadas-orange)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    {it.title}
                  </span>
                  <span
                    className="opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                    style={{ color: "var(--nadas-orange)" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </span>
                </div>
                <span style={{ color: "#fff", fontSize: "17px", fontWeight: 600, lineHeight: 1.3, textShadow: "0 1px 10px rgba(0,0,0,0.45)" }}>
                  {it.caption}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <p style={{ fontSize: "12px", color: "var(--nadas-ink3)", fontFamily: "var(--font-mono)", marginTop: "18px", letterSpacing: "0.03em" }}>
          Görseller temsilîdir.
        </p>
      </div>
    </section>
  );
}
