"use client";

import { useState } from "react";

const PHONE = "0541 469 69 66";
const PHONE_HREF = "tel:+905414696966";
const WA_HREF = "https://wa.me/905414696966?text=Merhaba%2C%20bilgi%20almak%20istiyorum.";
const EMAIL = "nadasled@gmail.com";
const ADDRESS = "Çakmak, Yeşilbahar Sokağı No:15/A, Ümraniye / İstanbul";
const MAPS_HREF = "https://maps.google.com/?q=Çakmak+Yeşilbahar+Sokağı+15/A+Ümraniye+İstanbul";
const FORM_ENDPOINT = "https://formspree.io/f/XXXXXXXX";

function trackClick(event: string, label: string) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", event, { event_category: "contact", event_label: label });
  }
}

const contactItems = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    ),
    label: "WhatsApp",
    sub: "Hızlı yanıt · Teklif al",
    href: WA_HREF,
    target: "_blank",
    color: "#1FAD56",
    onClick: () => trackClick("whatsapp_click", "iletisim_page"),
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
    ),
    label: PHONE,
    sub: "Hafta içi 08:30 – 18:00",
    href: PHONE_HREF,
    color: "var(--nadas-orange)",
    onClick: () => trackClick("phone_click", "iletisim_page"),
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
    ),
    label: EMAIL,
    sub: "E-posta ile ulaşın",
    href: `mailto:${EMAIL}`,
    color: "var(--nadas-blue2)",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
    ),
    label: "Ümraniye, İstanbul",
    sub: ADDRESS,
    href: MAPS_HREF,
    target: "_blank",
    color: "var(--nadas-ink3)",
  },
];

export default function IletisimPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ ad: "", telefon: "", urun: "", miktar: "", mesaj: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        trackClick("form_submit", "iletisim_page");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputStyle = {
    width: "100%",
    background: "var(--nadas-bg3)",
    border: "1px solid var(--nadas-line2)",
    borderRadius: "2px",
    padding: "14px 16px",
    fontSize: "14px",
    color: "var(--nadas-ink)",
    outline: "none",
  };

  const labelStyle = {
    display: "block",
    fontFamily: "var(--font-mono)" as const,
    fontSize: "11px",
    color: "var(--nadas-ink3)",
    textTransform: "uppercase" as const,
    letterSpacing: "0.1em",
    marginBottom: "8px",
  };

  return (
    <>
      {/* Hero */}
      <section style={{ padding: "160px 0 100px", position: "relative", zIndex: 2 }}>
        <div style={{ width: "min(1240px, 92vw)", margin: "0 auto" }}>
          <div
            className="flex items-center gap-3 mb-6"
            style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--nadas-orange)", textTransform: "uppercase", letterSpacing: "0.12em" }}
          >
            <span className="w-6 h-px" style={{ background: "var(--nadas-orange)" }} />
            İletişim
          </div>
          <h1
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(52px, 8vw, 120px)", lineHeight: 0.95, letterSpacing: "0.02em", maxWidth: "900px", marginBottom: "24px" }}
          >
            Bizimle{" "}
            <span style={{ color: "var(--nadas-orange)", textShadow: "0 0 40px rgba(255,107,26,0.5)" }}>
              İletişime
            </span>{" "}
            Geçin
          </h1>
          <p style={{ fontSize: "18px", color: "var(--nadas-ink2)", maxWidth: "520px", lineHeight: 1.6 }}>
            Teklif almak veya bilgi için hemen ulaşın.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: "0 0 120px", position: "relative", zIndex: 2 }}>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          style={{ width: "min(1240px, 92vw)", margin: "0 auto" }}
        >
          {/* Contact info */}
          <div className="flex flex-col gap-4">
            {contactItems.map((c, i) => (
              <a
                key={i}
                href={c.href}
                target={(c as any).target}
                rel={(c as any).target ? "noopener noreferrer" : undefined}
                onClick={c.onClick}
                className="flex items-center gap-5 transition-all duration-200 group"
                style={{
                  background: "var(--nadas-bg2)",
                  border: "1px solid var(--nadas-line2)",
                  borderRadius: "2px",
                  padding: "20px 24px",
                }}
              >
                <div
                  className="flex items-center justify-center flex-shrink-0"
                  style={{ width: "44px", height: "44px", background: "var(--nadas-bg3)", borderRadius: "2px", color: c.color }}
                >
                  {c.icon}
                </div>
                <div>
                  <div style={{ fontSize: "15px", fontWeight: 600, color: "var(--nadas-ink)", marginBottom: "2px" }}>
                    {c.label}
                  </div>
                  <div style={{ fontSize: "13px", color: "var(--nadas-ink3)", fontFamily: "var(--font-mono)", letterSpacing: "0.04em" }}>
                    {c.sub}
                  </div>
                </div>
                <svg
                  className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--nadas-orange)" strokeWidth="2"
                >
                  <path d="M7 17L17 7M7 7h10v10"/>
                </svg>
              </a>
            ))}

            {/* Working hours */}
            <div
              style={{
                background: "var(--nadas-bg2)",
                border: "1px solid var(--nadas-line2)",
                borderRadius: "2px",
                padding: "24px",
                marginTop: "8px",
              }}
            >
              <div
                style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--nadas-orange)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "16px" }}
              >
                Çalışma Saatleri
              </div>
              {[
                { day: "Pazartesi – Cuma", time: "08:30 – 18:00" },
                { day: "Cumartesi", time: "09:00 – 14:00" },
                { day: "Pazar", time: "Kapalı" },
              ].map((r) => (
                <div
                  key={r.day}
                  className="flex justify-between items-center"
                  style={{ padding: "10px 0", borderBottom: "1px solid var(--nadas-line2)", fontSize: "14px" }}
                >
                  <span style={{ color: "var(--nadas-ink2)" }}>{r.day}</span>
                  <span style={{ color: r.time === "Kapalı" ? "var(--nadas-ink3)" : "var(--nadas-ink)", fontWeight: 600 }}>
                    {r.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div
            style={{
              background: "var(--nadas-bg2)",
              border: "1px solid var(--nadas-line2)",
              borderRadius: "2px",
              padding: "40px",
            }}
          >
            <div
              style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--nadas-orange)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "16px" }}
            >
              Teklif Formu
            </div>
            <h2
              className="mb-8"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 3vw, 48px)", lineHeight: 0.95, letterSpacing: "0.02em" }}
            >
              Hızlı Teklif Al
            </h2>

            {status === "sent" ? (
              <div className="text-center py-12">
                <div
                  className="flex items-center justify-center mx-auto mb-4"
                  style={{ width: "64px", height: "64px", background: "rgba(48,209,88,0.1)", borderRadius: "50%", border: "1px solid rgba(48,209,88,0.3)" }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#30D158" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "32px", marginBottom: "8px" }}>Mesajınız İletildi!</h3>
                <p style={{ color: "var(--nadas-ink2)", fontSize: "15px" }}>En kısa sürede size geri döneceğiz.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label style={labelStyle}>Ad Soyad *</label>
                    <input required type="text" style={inputStyle} placeholder="Adınız Soyadınız"
                      value={form.ad} onChange={(e) => setForm({ ...form, ad: e.target.value })} />
                  </div>
                  <div>
                    <label style={labelStyle}>Telefon *</label>
                    <input required type="tel" style={inputStyle} placeholder="0541 469 69 66"
                      value={form.telefon} onChange={(e) => setForm({ ...form, telefon: e.target.value })} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label style={labelStyle}>İlgilendiğiniz Ürün</label>
                    <select style={{ ...inputStyle, appearance: "none" }}
                      value={form.urun} onChange={(e) => setForm({ ...form, urun: e.target.value })}>
                      <option value="">Seçin</option>
                      {["LED Modül", "LED Şerit", "Neon LED", "Trafo / LED Sürücü", "Kablo", "Aksesuar", "Diğer"].map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Tahmini Miktar</label>
                    <input type="text" style={inputStyle} placeholder="örn: 1000 adet, 500m"
                      value={form.miktar} onChange={(e) => setForm({ ...form, miktar: e.target.value })} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Mesajınız</label>
                  <textarea rows={4} style={{ ...inputStyle, resize: "none" }} placeholder="İhtiyacınızı kısaca açıklayın..."
                    value={form.mesaj} onChange={(e) => setForm({ ...form, mesaj: e.target.value })} />
                </div>
                {status === "error" && (
                  <p style={{ color: "#FF3B30", fontSize: "13px" }}>
                    Bir hata oluştu. Lütfen WhatsApp veya telefon ile iletişime geçin.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 hover:-translate-y-px disabled:opacity-60"
                  style={{ background: "var(--nadas-orange)", color: "var(--nadas-orange-ink)", padding: "18px 28px", fontSize: "15px", borderRadius: "2px", border: "none", cursor: "pointer" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  {status === "sending" ? "Gönderiliyor..." : "Teklif Talep Et"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
