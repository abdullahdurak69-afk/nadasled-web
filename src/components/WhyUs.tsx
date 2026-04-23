"use client";

const features = [
  { num: "01", title: "Aynı Gün Kargo", desc: "Öğleden önce verilen siparişler aynı gün kargoda. Şantiyenizi bekletmiyoruz." },
  { num: "02", title: "CE / RoHS Garantili", desc: "Sadece sertifikalı, test edilmiş ürünler. Uzun ömürlü aydınlatma, sorunsuz iş teslimi." },
  { num: "03", title: "Toptan Fiyat, Faturalı Satış", desc: "Adet üzeri indirimli fiyatlar, e-fatura / e-arşiv, kurumsal cari hesap imkânı." },
  { num: "04", title: "Teknik Destek", desc: "Trafo seçimi, voltaj hesabı, montaj sorusu — aradığınızda ustamız yanıtlar." },
];

export default function WhyUs() {
  return (
    <section
      id="hakkimizda"
      style={{
        padding: "140px 0",
        position: "relative",
        zIndex: 2,
        background: "linear-gradient(180deg, var(--nadas-bg) 0%, var(--nadas-bg2) 50%, var(--nadas-bg) 100%)",
      }}
    >
      <div style={{ width: "min(1240px, 92vw)", margin: "0 auto" }}>
        <div
          className="flex items-center gap-3 mb-5"
          style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--nadas-orange)", textTransform: "uppercase", letterSpacing: "0.12em" }}
        >
          <span className="w-6 h-px" style={{ background: "var(--nadas-orange)" }} />
          02 · Neden Nadasled?
        </div>

        <div className="grid gap-16 lg:gap-20" style={{ gridTemplateColumns: "1fr", alignItems: "center" }}>
          <div className="lg:grid lg:gap-20" style={{ gridTemplateColumns: "1.1fr 1fr" }}>
            {/* Features list */}
            <div>
              <h2
                className="mb-12"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(44px, 6vw, 88px)", lineHeight: 0.95, letterSpacing: "0.02em" }}
              >
                Profesyonelin tercihi.<br />On yıldır aynı kalite.
              </h2>
              <div>
                {features.map((f) => (
                  <div
                    key={f.num}
                    className="group grid gap-8 transition-all duration-300"
                    style={{
                      gridTemplateColumns: "auto 1fr",
                      padding: "32px 0",
                      borderBottom: "1px solid var(--nadas-line2)",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.paddingLeft = "16px")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.paddingLeft = "0")}
                  >
                    <span
                      style={{ fontFamily: "var(--font-display)", fontSize: "48px", color: "var(--nadas-ink3)", lineHeight: 1, minWidth: "80px", transition: "color 0.3s" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--nadas-orange)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--nadas-ink3)")}
                    >
                      {f.num}
                    </span>
                    <div>
                      <h4
                        className="mb-2"
                        style={{ fontFamily: "var(--font-display)", fontSize: "26px", letterSpacing: "0.03em" }}
                      >
                        {f.title}
                      </h4>
                      <p style={{ fontSize: "15px", color: "var(--nadas-ink2)" }}>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* LED Visual */}
            <div className="hidden lg:flex items-center justify-center mt-8 lg:mt-0">
              <div className="relative flex items-center justify-center" style={{ width: "100%", maxWidth: "420px", aspectRatio: "1" }}>
                {/* Ring 1 */}
                <div
                  className="nadas-spin-cw absolute"
                  style={{ inset: 0, border: "1px solid var(--nadas-line)", borderRadius: "50%", position: "absolute" }}
                >
                  <span
                    className="absolute rounded-full"
                    style={{ width: "8px", height: "8px", background: "#FF3B30", boxShadow: "0 0 12px #FF3B30", top: "-4px", left: "50%", transform: "translateX(-50%)" }}
                  />
                  <span
                    className="absolute rounded-full"
                    style={{ width: "8px", height: "8px", background: "#0A84FF", boxShadow: "0 0 12px #0A84FF", bottom: "-4px", left: "50%", transform: "translateX(-50%)" }}
                  />
                </div>
                {/* Ring 2 */}
                <div
                  className="nadas-spin-ccw absolute"
                  style={{ inset: "12%", border: "1px dashed rgba(45, 79, 214, 0.25)", borderRadius: "50%", position: "absolute" }}
                />
                {/* Ring 3 */}
                <div
                  className="nadas-spin-cw2 absolute"
                  style={{ inset: "26%", border: "1px solid var(--nadas-line)", borderRadius: "50%", position: "absolute" }}
                />
                {/* Core */}
                <div
                  className="nadas-led-core relative flex items-center justify-center rounded-full"
                  style={{
                    width: "45%",
                    aspectRatio: "1",
                    background: "radial-gradient(circle at 35% 30%, var(--nadas-orange2), var(--nadas-orange) 45%, #8A2E00 100%)",
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(36px, 5vw, 64px)",
                    color: "rgba(20, 10, 2, 0.88)",
                    letterSpacing: "0.06em",
                  }}
                >
                  LED
                </div>

                {/* Badge 1 */}
                <div
                  className="nadas-float-b1 absolute flex items-center gap-3"
                  style={{
                    top: "8%", right: "-8%",
                    background: "var(--nadas-bg3)",
                    border: "1px solid var(--nadas-line)",
                    padding: "16px 20px",
                    borderRadius: "2px",
                    backdropFilter: "blur(8px)",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
                  }}
                >
                  <span className="w-2.5 h-2.5 rounded-full nadas-pulse-dot" style={{ background: "#1FAD56", boxShadow: "0 0 10px #1FAD56" }} />
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 600 }}>Stokta</div>
                    <div style={{ fontSize: "11px", color: "var(--nadas-ink2)", fontFamily: "var(--font-mono)" }}>200+ ÜRÜN HAZIR</div>
                  </div>
                </div>

                {/* Badge 2 */}
                <div
                  className="nadas-float-b2 absolute flex items-center gap-3"
                  style={{
                    bottom: "10%", left: "-10%",
                    background: "var(--nadas-bg3)",
                    border: "1px solid var(--nadas-line)",
                    padding: "16px 20px",
                    borderRadius: "2px",
                    backdropFilter: "blur(8px)",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
                  }}
                >
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--nadas-blue2)", boxShadow: "0 0 10px var(--nadas-blue2)", animation: "pulseDot 1.8s ease-in-out infinite" }} />
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 600 }}>CE Sertifikalı</div>
                    <div style={{ fontSize: "11px", color: "var(--nadas-ink2)", fontFamily: "var(--font-mono)" }}>RoHS / 2 YIL GARANTİ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
