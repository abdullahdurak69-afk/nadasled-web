import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hakkımızda — Nadasled Tabela Malzemeleri",
  description:
    "Nadasled olarak tabela sektörüne LED modül, şerit, trafo ve kablo tedarik ediyoruz. Tabelacılara özel toptan fiyatlar, Türkiye geneli hızlı kargo.",
};

const WA_HREF = "https://wa.me/905414696966";

const stats = [
  { num: "500+", label: "Mutlu Müşteri" },
  { num: "200+", label: "Ürün Çeşidi", blue: true },
  { num: "10+",  label: "Yıl Deneyim" },
  { num: "50+",  label: "Günlük Kargo" },
];

const mission = [
  "Sektörün ihtiyaçlarına özel ürün yelpazesi sunmak",
  "Rekabetçi toptan fiyatlarla erişilebilirlik sağlamak",
  "Hızlı kargo ile iş sürekliliğini desteklemek",
  "Teknik destek ile müşteri memnuniyetini ön planda tutmak",
  "Kaliteli ve sertifikalı ürünlerle güven oluşturmak",
];

export default function HakkimizdaPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: "160px 0 100px", position: "relative", zIndex: 2 }}>
        <div style={{ width: "min(1240px, 92vw)", margin: "0 auto" }}>
          <div
            className="flex items-center gap-3 mb-6"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--nadas-orange)",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            <span className="w-6 h-px" style={{ background: "var(--nadas-orange)" }} />
            Hakkımızda
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(52px, 8vw, 120px)",
              lineHeight: 0.95,
              letterSpacing: "0.02em",
              maxWidth: "900px",
              marginBottom: "32px",
            }}
          >
            Tabela Sektörünün{" "}
            <span style={{ color: "var(--nadas-orange)", textShadow: "0 0 40px rgba(255,107,26,0.5)" }}>
              Güvenilir
            </span>{" "}
            Tedarikçisi
          </h1>
          <p style={{ fontSize: "18px", color: "var(--nadas-ink2)", maxWidth: "640px", lineHeight: 1.6 }}>
            Yılların deneyimiyle tabelacılara ve reklam ajanslarına LED malzeme tedariki yapıyoruz.
            Türkiye geneline hızlı kargo, uygun toptan fiyat.
          </p>
        </div>
      </section>

      {/* Stats */}
      <div
        style={{
          borderTop: "1px solid var(--nadas-line2)",
          borderBottom: "1px solid var(--nadas-line2)",
          background: "var(--nadas-bg2)",
          padding: "60px 0",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ width: "min(1240px, 92vw)", margin: "0 auto", gap: "40px" }}
        >
          {stats.map((s) => (
            <div key={s.label} className="relative pl-5">
              <span
                className="absolute left-0 top-2 bottom-2 w-0.5"
                style={{
                  background: s.blue ? "var(--nadas-blue2)" : "var(--nadas-orange)",
                  boxShadow: `0 0 8px ${s.blue ? "rgba(76,110,235,0.7)" : "rgba(255,107,26,0.7)"}`,
                }}
              />
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "56px",
                  color: s.blue ? "var(--nadas-blue2)" : "var(--nadas-orange)",
                  lineHeight: 1,
                  letterSpacing: "0.02em",
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  color: "var(--nadas-ink2)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginTop: "6px",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <section style={{ padding: "120px 0", position: "relative", zIndex: 2 }}>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
          style={{ width: "min(1240px, 92vw)", margin: "0 auto" }}
        >
          <div>
            <div
              className="flex items-center gap-3 mb-6"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--nadas-orange)",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
              }}
            >
              <span className="w-6 h-px" style={{ background: "var(--nadas-orange)" }} />
              Biz Kimiz?
            </div>
            <h2
              className="mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 4vw, 56px)",
                lineHeight: 0.95,
                letterSpacing: "0.02em",
              }}
            >
              10 Yıldır Sektörde
            </h2>
            <p style={{ fontSize: "16px", color: "var(--nadas-ink2)", lineHeight: 1.7, marginBottom: "16px" }}>
              Nadasled olarak, Türkiye genelinde tabela yapım sektörüne hizmet veren toptan malzeme
              tedarikçisiyiz. LED modül, LED şerit, neon LED, trafo, kablo ve aksesuarlar dahil tüm
              tabela malzemelerini uygun fiyatlarla temin ediyoruz.
            </p>
            <p style={{ fontSize: "16px", color: "var(--nadas-ink2)", lineHeight: 1.7 }}>
              Yıllar içinde edindiğimiz tecrübe ve güvenilir tedarikçi ağımızla, tabelacılar ve
              reklam ajanslarının kaliteli malzemeye hızlıca ulaşmasını sağlıyoruz.
            </p>
          </div>

          <div>
            <div
              className="flex items-center gap-3 mb-6"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--nadas-orange)",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
              }}
            >
              <span className="w-6 h-px" style={{ background: "var(--nadas-orange)" }} />
              Misyonumuz
            </div>
            <h2
              className="mb-8"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 4vw, 56px)",
                lineHeight: 0.95,
                letterSpacing: "0.02em",
              }}
            >
              Değer Önerisi
            </h2>
            <div className="flex flex-col" style={{ gap: "0" }}>
              {mission.map((m, i) => (
                <div
                  key={i}
                  className="flex items-start gap-6"
                  style={{
                    padding: "20px 0",
                    borderBottom: "1px solid var(--nadas-line2)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "32px",
                      color: "var(--nadas-ink3)",
                      lineHeight: 1,
                      minWidth: "48px",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p style={{ fontSize: "15px", color: "var(--nadas-ink2)", lineHeight: 1.6, paddingTop: "6px" }}>
                    {m}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <div
        className="relative overflow-hidden"
        style={{ background: "var(--nadas-orange)", color: "var(--nadas-orange-ink)", padding: "100px 0", zIndex: 2 }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div
          className="relative text-center"
          style={{ width: "min(1240px, 92vw)", margin: "0 auto" }}
        >
          <h2
            className="mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(44px, 6vw, 88px)",
              lineHeight: 0.95,
              color: "var(--nadas-orange-ink)",
            }}
          >
            Bizimle Çalışmaya Başlayın
          </h2>
          <p style={{ fontSize: "17px", color: "rgba(26,19,5,0.75)", marginBottom: "40px", maxWidth: "480px", margin: "0 auto 40px" }}>
            Toptan fiyat listesi ve teknik destek için hemen iletişime geçin.
          </p>
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-semibold transition-all duration-200 hover:-translate-y-px"
            style={{
              background: "var(--nadas-orange-ink)",
              color: "var(--nadas-orange)",
              padding: "18px 36px",
              fontSize: "16px",
              borderRadius: "2px",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp ile İletişime Geç
          </a>
        </div>
      </div>
    </>
  );
}
