const WA_HREF = "https://wa.me/905414696966";
const PHONE_HREF = "tel:+905414696966";

export default function Hero() {
  return (
    <header
      className="relative"
      style={{ padding: "180px 0 120px", overflow: "hidden" }}
    >
      {/* Floating mono marks */}
      <span
        className="absolute hidden lg:block"
        style={{ top: "160px", right: "8%", fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--nadas-ink3)", letterSpacing: "0.08em", textTransform: "uppercase" }}
      >
        EST. 2015 / ÜMRANİYE · IST
      </span>
      <span
        className="absolute hidden lg:block"
        style={{ bottom: "40px", left: "8%", fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--nadas-ink3)", letterSpacing: "0.08em", textTransform: "uppercase" }}
      >
        — CE / RoHS / GARANTİLİ
      </span>
      <span
        className="absolute hidden lg:block"
        style={{ top: "280px", left: "5%", fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--nadas-ink3)", letterSpacing: "0.08em", textTransform: "uppercase", writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        NADASLED · B2B · TOPTAN
      </span>

      <div style={{ width: "min(1240px, 92vw)", margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Eyebrow */}
        <span
          className="inline-flex items-center gap-2 mb-8"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            fontWeight: 500,
            color: "var(--nadas-orange)",
            padding: "8px 14px",
            border: "1px solid var(--nadas-line)",
            borderRadius: "999px",
            background: "rgba(255, 107, 26, 0.04)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full nadas-pulse-dot"
            style={{ background: "var(--nadas-orange)", boxShadow: "0 0 10px var(--nadas-orange)" }}
          />
          Tabela Aydınlatma · Toptan Tedarik
        </span>

        {/* H1 */}
        <h1
          className="mb-12"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(56px, 9vw, 132px)",
            lineHeight: 1.0,
            letterSpacing: "0.02em",
            maxWidth: "1100px",
          }}
        >
          Tabela Aydınlatma<br />
          <span style={{ color: "transparent", WebkitTextStroke: "1.5px var(--nadas-orange)", textShadow: "none" }}>
            Malzemeleri
          </span><br />
          <span style={{ color: "var(--nadas-orange)", textShadow: "0 0 40px rgba(255, 107, 26, 0.5)" }}>
            Toptan
          </span><br />
          <span style={{ color: "var(--nadas-blue2)", textShadow: "0 0 40px rgba(45, 79, 214, 0.5)" }}>
            Tedarik.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="mb-10"
          style={{ fontSize: "clamp(16px, 1.8vw, 20px)", color: "var(--nadas-ink2)", maxWidth: "620px", lineHeight: 1.6 }}
        >
          Tabelacılar, reklam ajansları ve elektrikçiler için LED modül, neon, trafo ve aksesuar çeşitleri. Aynı gün kargo, toptan fiyat, faturalı satış.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-20">
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold transition-all duration-200 hover:-translate-y-px"
            style={{ background: "#1FAD56", color: "white", padding: "16px 28px", fontSize: "15px", borderRadius: "2px", boxShadow: "0 0 0 rgba(31,173,86,0)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp&apos;tan Yaz
          </a>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 font-medium transition-all duration-200"
            style={{ background: "transparent", color: "var(--nadas-ink)", border: "1px solid rgba(255,255,255,0.15)", padding: "16px 28px", fontSize: "15px", borderRadius: "2px" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
            0541 469 69 66
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-12 md:justify-end">
          {[
            { num: "500+", label: "Mutlu Müşteri", color: "var(--nadas-orange)", lineColor: "var(--nadas-orange)" },
            { num: "200+", label: "Ürün Çeşidi", color: "var(--nadas-blue2)", lineColor: "var(--nadas-blue2)" },
            { num: "10+", label: "Yıl Deneyim", color: "var(--nadas-orange)", lineColor: "var(--nadas-orange)" },
          ].map((s) => (
            <div key={s.label} className="relative pl-5">
              <span
                className="absolute left-0 top-2 bottom-2 w-0.5"
                style={{ background: s.lineColor, boxShadow: `0 0 8px ${s.lineColor}80` }}
              />
              <div style={{ fontFamily: "var(--font-display)", fontSize: "56px", color: s.color, lineHeight: 1, letterSpacing: "0.02em" }}>
                {s.num}
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--nadas-ink2)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "6px" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
