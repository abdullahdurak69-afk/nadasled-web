import Image from "next/image";
import Link from "next/link";

const brands = [
  { name: "Samsung", logo: "/images/brands/samsung.svg" },
  { name: "OSRAM", logo: "/images/brands/osram.svg" },
  { name: "MEAN WELL", logo: "/images/brands/meanwell.svg" },
  { name: "Inventronics", logo: "/images/brands/inventronics.svg" },
  { name: "WAGO", logo: "/images/brands/wago.svg" },
];

export default function Brands() {
  return (
    <section style={{ padding: "clamp(64px, 10vw, 120px) 0", position: "relative", zIndex: 2 }}>
      <div style={{ width: "min(1240px, 92vw)", margin: "0 auto" }}>
        {/* Section header */}
        <div
          className="flex items-center gap-3 mb-5"
          style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--nadas-orange)", textTransform: "uppercase", letterSpacing: "0.12em" }}
        >
          <span className="w-6 h-px" style={{ background: "var(--nadas-orange)" }} />
          02 · Markalarımız
        </div>
        <h2
          className="mb-6"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 5.5vw, 76px)", lineHeight: 0.95, letterSpacing: "0.02em", maxWidth: "900px" }}
        >
          Güvenilir markalarla<br />çalışıyoruz.
        </h2>
        <p style={{ fontSize: "17px", color: "var(--nadas-ink2)", maxWidth: "620px", marginBottom: "56px" }}>
          Samsung, OSRAM, MEAN WELL, Inventronics ve WAGO gibi dünya markalarının orijinal LED, sürücü ve bağlantı ürünlerini tedarik ediyoruz.
        </p>

        {/* Logo grid */}
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))" }}
        >
          {brands.map((b) => (
            <div
              key={b.name}
              className="flex items-center justify-center"
              style={{
                background: "#fff",
                borderRadius: "4px",
                height: "104px",
                padding: "24px 28px",
                border: "1px solid var(--nadas-line2)",
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={b.logo}
                  alt={`${b.name} logo`}
                  fill
                  className="object-contain"
                  sizes="180px"
                />
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/markalar/"
          className="inline-flex items-center gap-2 mt-10 font-semibold transition-all duration-200 hover:-translate-y-px"
          style={{ color: "var(--nadas-orange)", fontSize: "15px" }}
        >
          Tüm markaları gör
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </Link>
      </div>
    </section>
  );
}
