import type { Metadata } from "next";
import Link from "next/link";
import catalog from "@/data/products.json";
import { ROUTES, categoryHref } from "@/lib/site-links";

/**
 * Statik export'ta out/404.html buradan üretiliyor. Eskiden Next'in İngilizce
 * varsayılan sayfası çıkıyordu; taşınan ve yönlendirilen eski ürün URL'leri
 * yüzünden bu sayfaya düşen ziyaretçi az değil, o yüzden kategorilere ve
 * iletişime doğrudan yol veriyor. noindex etiketini Next kendisi ekliyor.
 */
export const metadata: Metadata = {
  title: "Sayfa Bulunamadı",
  description: "Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Ürün kategorilerimize, hesaplama araçlarımıza ve rehberlerimize buradan ulaşabilirsiniz.",
};

const WA_HREF = "https://wa.me/905414696966?text=Merhaba%2C%20sitede%20arad%C4%B1%C4%9F%C4%B1m%20%C3%BCr%C3%BCn%C3%BC%20bulamad%C4%B1m.";

const shortcuts = [
  { href: ROUTES.urunler, label: "Tüm ürünler" },
  { href: ROUTES.araclar, label: "Hesaplama araçları" },
  { href: ROUTES.blog, label: "Rehberler" },
  { href: ROUTES.iletisim, label: "İletişim" },
];

export default function NotFound() {
  return (
    <section style={{ padding: "clamp(130px, 18vw, 170px) 0 clamp(72px, 11vw, 120px)", position: "relative", zIndex: 2 }}>
      <div style={{ width: "min(1240px, 92vw)", margin: "0 auto" }}>
        <div
          className="flex items-center gap-3 mb-6"
          style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--nadas-orange)", textTransform: "uppercase", letterSpacing: "0.12em" }}
        >
          <span className="w-6 h-px" style={{ background: "var(--nadas-orange)" }} />
          404 · Sayfa bulunamadı
        </div>
        <h1
          className="mb-6"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(40px, 6vw, 80px)", lineHeight: 1.0, letterSpacing: "0.01em", maxWidth: "900px" }}
        >
          Aradığınız sayfa taşınmış olabilir.
        </h1>
        <p style={{ fontSize: "17px", color: "var(--nadas-ink2)", lineHeight: 1.7, maxWidth: "620px", marginBottom: "36px" }}>
          Aradığınız ürünü aşağıdaki kategorilerden bulabilir ya da WhatsApp&apos;tan yazarak doğrudan
          sorabilirsiniz.
        </p>

        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            data-track="404"
            className="inline-flex items-center gap-2 font-semibold transition-all duration-200 hover:-translate-y-px"
            style={{ background: "#1FAD56", color: "white", padding: "15px 26px", fontSize: "15px", borderRadius: "2px" }}
          >
            WhatsApp&apos;tan Sor
          </a>
          <Link
            href={ROUTES.home}
            className="inline-flex items-center gap-2 font-medium transition-all duration-200"
            style={{ color: "var(--nadas-ink)", border: "1px solid var(--nadas-line2)", padding: "15px 26px", fontSize: "15px", borderRadius: "2px" }}
          >
            Ana sayfaya dön
          </Link>
        </div>

        <h2
          className="mb-6"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(26px, 3vw, 34px)", lineHeight: 1.08, letterSpacing: "0.01em" }}
        >
          Ürün kategorileri
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 list-none mb-12" style={{ padding: 0 }}>
          {catalog.map((c) => (
            <li key={c.slug}>
              <Link
                href={categoryHref(c.slug)}
                className="block transition-colors hover:text-[color:var(--nadas-orange)]"
                style={{ border: "1px solid var(--nadas-line2)", borderRadius: "2px", padding: "16px 20px", fontSize: "15px", fontWeight: 600, background: "var(--nadas-bg2)" }}
              >
                {c.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {shortcuts.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="transition-colors hover:text-[color:var(--nadas-orange)]"
              style={{ fontSize: "15px", color: "var(--nadas-ink2)", textDecoration: "underline", textUnderlineOffset: "4px" }}
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
