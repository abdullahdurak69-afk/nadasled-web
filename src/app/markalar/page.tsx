import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Markalarımız — Samsung, OSRAM, MEAN WELL",
  description:
    "Samsung, OSRAM, MEAN WELL, Inventronics ve WAGO orijinal LED çip, sürücü, trafo ve bağlantı ürünleri — toptan tedarik, faturalı satış, aynı gün kargo.",
  keywords: ["samsung led", "osram led", "mean well trafo", "inventronics adaptör", "wago konnektör", "led markaları", "orijinal led ürünleri"],
  alternates: { canonical: "https://www.nadasled.com.tr/markalar" },
};

const brands = [
  {
    name: "Samsung",
    logo: "/images/brands/samsung.svg",
    desc: "Tabela ve dekoratif aydınlatmada sektör standardı Samsung 2835 LED çiplerini modül ve şeritlerimizde kullanıyoruz. Yüksek lümen, düşük ısı ve uzun ömür.",
    cats: [{ s: "led-modul", n: "LED Modül" }, { s: "led-serit", n: "LED Şerit" }],
  },
  {
    name: "OSRAM",
    logo: "/images/brands/osram.svg",
    desc: "OSRAM çipli LED modüller ve OSRAM Element serisi adaptörler — yüksek renk doğruluğu (CRI) ve kararlı performans arayanlar için.",
    cats: [{ s: "led-modul", n: "LED Modül" }, { s: "trafo-led-surucu", n: "Trafo / Adaptör" }],
  },
  {
    name: "MEAN WELL",
    logo: "/images/brands/meanwell.svg",
    desc: "LED güç kaynaklarında dünya lideri MEAN WELL'in iç ve dış mekan LED sürücü ve trafoları — endüstriyel güvenilirlik ve uzun ömür.",
    cats: [{ s: "trafo-led-surucu", n: "Trafo / Adaptör" }],
  },
  {
    name: "Inventronics",
    logo: "/images/brands/inventronics.svg",
    desc: "Inventronics dış mekan LED adaptörleri (EBV serisi dahil) — IP67 koruma, ağır hava koşullarına dayanıklı profesyonel güç çözümleri.",
    cats: [{ s: "trafo-led-surucu", n: "Trafo / Adaptör" }],
  },
  {
    name: "WAGO",
    logo: "/images/brands/wago.svg",
    desc: "WAGO lehimsiz hızlı bağlantı aparatları — güvenli, sökülebilir ve pratik kablo bağlantıları için tabela ve LED montajında standart.",
    cats: [{ s: "yardimci-urunler", n: "Yardımcı Ürünler" }],
  },
];

export default function MarkalarPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: "160px 0 80px", position: "relative", zIndex: 2 }}>
        <div style={{ width: "min(1240px, 92vw)", margin: "0 auto" }}>
          <div
            className="flex items-center gap-3 mb-6"
            style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--nadas-orange)", textTransform: "uppercase", letterSpacing: "0.12em" }}
          >
            <span className="w-6 h-px" style={{ background: "var(--nadas-orange)" }} />
            Markalarımız
          </div>
          <h1
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 7vw, 110px)", lineHeight: 0.95, letterSpacing: "0.02em", maxWidth: "900px", marginBottom: "24px" }}
          >
            Güvenilir markalarla{" "}
            <span style={{ color: "var(--nadas-orange)" }}>orijinal ürünler</span>
          </h1>
          <p style={{ fontSize: "18px", color: "var(--nadas-ink2)", maxWidth: "640px", lineHeight: 1.6 }}>
            Samsung, OSRAM, MEAN WELL, Inventronics ve WAGO gibi dünya markalarının orijinal LED çip, sürücü, trafo ve bağlantı ürünlerini toptan fiyatlarla tedarik ediyoruz.
          </p>
        </div>
      </section>

      {/* Brand list */}
      <section style={{ padding: "0 0 140px", position: "relative", zIndex: 2 }}>
        <div className="flex flex-col gap-5" style={{ width: "min(1240px, 92vw)", margin: "0 auto" }}>
          {brands.map((b) => (
            <div
              key={b.name}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
              style={{ background: "var(--nadas-bg2)", border: "1px solid var(--nadas-line2)", borderRadius: "4px", padding: "36px" }}
            >
              {/* Logo */}
              <div
                className="flex items-center justify-center"
                style={{ background: "#fff", borderRadius: "4px", height: "120px", padding: "28px" }}
              >
                <div className="relative w-full h-full">
                  <Image src={b.logo} alt={`${b.name} logo`} fill className="object-contain" sizes="280px" />
                </div>
              </div>
              {/* Text + links */}
              <div className="md:col-span-2">
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "32px", letterSpacing: "0.03em", marginBottom: "10px" }}>{b.name}</h2>
                <p style={{ fontSize: "15px", color: "var(--nadas-ink2)", lineHeight: 1.65, marginBottom: "18px" }}>{b.desc}</p>
                <div className="flex flex-wrap gap-2.5">
                  {b.cats.map((c) => (
                    <Link
                      key={c.s}
                      href={`/urunler/${c.s}`}
                      className="inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-px"
                      style={{ border: "1px solid var(--nadas-line)", color: "var(--nadas-orange)", padding: "8px 16px", borderRadius: "2px", fontSize: "13px", fontWeight: 600 }}
                    >
                      {c.n}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
