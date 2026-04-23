"use client";
import Image from "next/image";
import Link from "next/link";

const products = [
  { title: "LED Modül", desc: "2835 / 5730 / 3030 çipli, IP65 su geçirmez modüller. Işıklı tabela için.", slug: "led-modul", img: "/images/led-modul.jpg" },
  { title: "LED Şerit", desc: "12V / 24V, iç–dış mekân, çeşitli renk sıcaklıklarında profesyonel şeritler.", slug: "led-serit", img: "/images/led-serit.jpg" },
  { title: "Neon LED", desc: "Bükülebilir neon flex, kesintisiz ışık çizgisi, tabela ve dekorasyon için.", slug: "neon-led", img: "/images/neon-led.jpg" },
  { title: "Trafo / Sürücü", desc: "12V ve 24V, 20W–400W arası güç seçenekleri, CE sertifikalı LED sürücüler.", slug: "trafo-led-surucu", img: "/images/trafo.jpg" },
  { title: "Power LED", desc: "Yüksek lümen, yüksek verimlilik. 1W, 3W, 5W projektör ve spot çözümleri.", slug: "power-led", img: "/images/power-led.jpg" },
  { title: "Pergole LED", desc: "Dış mekân, IP68 özellikli pergole ve bahçe aydınlatma ürünleri.", slug: "pergole-led", img: "/images/pergole-led.jpg" },
  { title: "Kablo", desc: "LED kablo, besleme hattı, TTR ve kontrol kabloları — metre ve bobin halinde.", slug: "kablo", img: "/images/kablo.jpg" },
  { title: "Point LED", desc: "Dekoratif nokta aydınlatma, tabela ve cephe için boncuk LED çözümleri.", slug: "point-led", img: "/images/point-led-nokta.jpg" },
  { title: "Light Box LED", desc: "Işıklı kutu harf ve light box panolar için özel arka aydınlatma sistemleri.", slug: "light-box-led", img: "/images/light-box-led.jpg" },
  { title: "Aksesuar", desc: "Klips, konnektör, kanal, profil, montaj ekipmanları — her ihtiyaca yedek parça.", slug: "aksesuar", img: "/images/aksesuar.jpg" },
];

export default function ProductGrid() {
  return (
    <section id="urunler" style={{ padding: "140px 0", position: "relative", zIndex: 2 }}>
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
        <p className="mb-18" style={{ fontSize: "17px", color: "var(--nadas-ink2)", maxWidth: "640px", marginBottom: "72px" }}>
          10 ana kategori, 200&apos;den fazla ürün çeşidi. Stoktan aynı gün sevkiyat, toptan fiyat avantajı.
        </p>

        {/* Grid */}
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
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--nadas-bg2)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--nadas-bg)")}
            >
              <div
                style={{ position: "absolute", top: "20px", right: "24px", fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--nadas-ink3)" }}
              >
                {String(i + 1).padStart(2, "0")} / {String(products.length).padStart(2, "0")}
              </div>
              {/* Product image */}
              <div className="relative overflow-hidden mb-7" style={{ height: "140px", borderRadius: "2px" }}>
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,10,20,0.5), transparent 60%)" }} />
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "28px", letterSpacing: "0.04em", marginBottom: "10px" }}>
                {p.title}
              </div>
              <div style={{ fontSize: "14px", color: "var(--nadas-ink2)", lineHeight: 1.5 }}>
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
