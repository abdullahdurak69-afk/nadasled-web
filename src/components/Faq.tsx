"use client";
import { useState } from "react";

const faqs = [
  { q: "Minimum sipariş tutarı var mı?", a: "Net minimum tutarımız yok — ancak toptan fiyatlardan yararlanmak için belirli adet eşiklerinin üzerinde sipariş verilmesi avantajlıdır. WhatsApp üzerinden talebinizi iletin, size özel fiyat çıkartalım." },
  { q: "Aynı gün kargo yapıyor musunuz?", a: "Evet. Hafta içi 15:00'a kadar onaylanan siparişler aynı gün kargoya verilir. İstanbul içi kurye / elden teslim seçenekleri de mevcuttur." },
  { q: "Ürünlerin garantisi var mı?", a: "Tüm LED modül, şerit ve trafolarımız CE / RoHS sertifikalıdır. Ürün kategorisine göre 1 ila 2 yıl üretici garantisi sunulmaktadır." },
  { q: "Faturalı satış yapıyor musunuz?", a: "Tüm satışlarımız e-fatura / e-arşiv fatura ile belgelendirilir. Kurumsal müşteriler için cari hesap açılışı da mümkündür." },
  { q: "Hangi ödeme yöntemlerini kabul ediyorsunuz?", a: "Havale / EFT, kredi kartı, kapıda ödeme ve kurumsal müşteriler için vadeli cari ödeme seçenekleri mevcuttur." },
  { q: "Teknik destek veriyor musunuz?", a: "Evet. Trafo seçimi, voltaj hesaplaması, bağlantı şemaları ve montaj konularında WhatsApp veya telefon üzerinden ücretsiz teknik destek sunuyoruz." },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="sss" style={{ padding: "140px 0", position: "relative", zIndex: 2 }}>
      <div style={{ width: "min(1240px, 92vw)", margin: "0 auto" }}>
        <div
          className="flex items-center gap-3 mb-5"
          style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--nadas-orange)", textTransform: "uppercase", letterSpacing: "0.12em" }}
        >
          <span className="w-6 h-px" style={{ background: "var(--nadas-orange)" }} />
          03 · Sık Sorulan Sorular
        </div>
        <h2
          className="mb-16"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(44px, 6vw, 88px)", lineHeight: 0.95, letterSpacing: "0.02em" }}
        >
          Başlamadan önce<br />bilinmesi gerekenler.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="cursor-pointer"
              style={{ padding: "24px 0", borderBottom: "1px solid var(--nadas-line2)" }}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div
                className="flex justify-between items-center gap-6 transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "22px",
                  letterSpacing: "0.03em",
                  color: open === i ? "var(--nadas-orange)" : "var(--nadas-ink)",
                }}
              >
                <span>{f.q}</span>
                {/* Toggle icon */}
                <span className="relative flex-shrink-0" style={{ width: "24px", height: "24px" }}>
                  <span
                    className="absolute"
                    style={{ left: 0, right: 0, top: "50%", height: "1px", background: "var(--nadas-orange)", transform: "translateY(-50%)" }}
                  />
                  <span
                    className="absolute transition-transform duration-300"
                    style={{ top: 0, bottom: 0, left: "50%", width: "1px", background: "var(--nadas-orange)", transform: open === i ? "translateX(-50%) scaleY(0)" : "translateX(-50%) scaleY(1)" }}
                  />
                </span>
              </div>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: open === i ? "300px" : "0",
                  paddingTop: open === i ? "16px" : "0",
                  fontSize: "14px",
                  color: "var(--nadas-ink2)",
                  lineHeight: 1.6,
                }}
              >
                {f.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
