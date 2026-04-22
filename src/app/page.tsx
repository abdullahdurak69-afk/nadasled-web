import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Truck, Shield, Headphones, Award, ArrowRight, CheckCircle } from "lucide-react";
import products from "@/data/products.json";
import faqs from "@/data/faq.json";
import type { Metadata } from "next";

const PHONE_HREF = "tel:+905414696966";
const WA_HREF = "https://wa.me/905414696966?text=Merhaba%2C%20tabela%20malzemesi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

export const metadata: Metadata = {
  title: "Nadasled | LED Modül, LED Şerit, Trafo — Tabela Malzemeleri Toptan",
  description:
    "Tabela yapımı için LED modül, LED şerit, trafo ve kablo toptan tedarikçisi. Türkiye geneli hızlı kargo. Tabelacılara özel fiyatlar için hemen arayın.",
  openGraph: {
    title: "Nadasled | Tabela Malzemeleri Toptan Tedarikçisi",
    description: "LED modül, LED şerit, trafo ve kablo toptan tedarikçisi. Tabelacılara özel fiyatlar.",
    url: "https://www.nadasled.com.tr",
    images: [{ url: "https://www.nadasled.com.tr/images/led-modul.jpg", width: 1200, height: 630, alt: "Nadasled Tabela Malzemeleri" }],
  },
  alternates: {
    canonical: "https://www.nadasled.com.tr",
  },
};

const whyUs = [
  { icon: Truck, title: "Türkiye Geneli Hızlı Kargo", desc: "Siparişler aynı gün veya ertesi gün kargoya verilir." },
  { icon: Award, title: "Toptan Fiyat Avantajı", desc: "Tabelacılara özel toptan fiyatlar, düzenli müşterilere ek indirim." },
  { icon: Headphones, title: "Teknik Destek", desc: "Ürün seçimi ve kurulum konularında uzman ekibimiz yanınızda." },
  { icon: Shield, title: "Garantili Ürünler", desc: "Tüm ürünlerimiz CE/RoHS sertifikalı, garanti kapsamındadır." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nadasled",
  url: "https://www.nadasled.com.tr",
  description: "Tabela yapımı için LED modül, şerit, trafo ve kablo toptan tedarikçisi",
  telephone: "+90-541-469-6966",
  priceRange: "₺₺",
  image: "https://www.nadasled.com.tr/images/led-modul.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Çakmak, Yeşilbahar Sokağı No:15/A",
    addressLocality: "Ümraniye",
    addressRegion: "İstanbul",
    postalCode: "34774",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.0166,
    longitude: 29.1164,
  },
  areaServed: {
    "@type": "Country",
    name: "Turkey",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: [],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="relative bg-zinc-900 text-white overflow-hidden">
        {/* Dekoratif arka plan */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(234,88,12,0.15),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(234,88,12,0.08),_transparent_50%)]" />

        <div className="relative container mx-auto max-w-6xl px-4 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-600/30 text-orange-400 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              Türkiye Geneli Toptan Tedarikçi
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
              Tabela<br />
              <span className="text-orange-500">Malzemeleri</span><br />
              Toptan Tedarik
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 max-w-xl mb-10 leading-relaxed">
              LED modül, LED şerit, neon LED, trafo ve kablo — tabela yapımı için ihtiyacınız olan
              her şey. Hızlı kargo, uygun fiyat, teknik destek.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white text-base px-8 h-14 rounded-xl shadow-lg shadow-orange-900/30 transition-colors font-semibold"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp ile Teklif Al
              </a>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 border border-zinc-600 text-zinc-300 hover:border-orange-500 hover:text-orange-400 text-base px-8 h-14 rounded-xl transition-colors font-medium"
              >
                <Phone className="w-5 h-5" />
                Hemen Ara
              </a>
            </div>

            {/* İstatistikler */}
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-zinc-800">
              {[
                { val: "500+", lbl: "Mutlu Müşteri" },
                { val: "200+", lbl: "Ürün Çeşidi" },
                { val: "Aynı Gün", lbl: "Kargo" },
                { val: "10+ Yıl", lbl: "Deneyim" },
              ].map((s) => (
                <div key={s.lbl}>
                  <div className="text-2xl font-bold text-orange-500">{s.val}</div>
                  <div className="text-sm text-zinc-500 mt-1">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ÜRÜN KATEGORİLERİ */}
      <section className="py-24 px-4 bg-zinc-50">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-14">
            <p className="text-orange-600 font-semibold text-sm uppercase tracking-wider mb-2">Ürün Kategorileri</p>
            <h2 className="text-4xl font-bold text-zinc-900">Tabela yapımı için<br />ihtiyacınız olan her şey</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((p) => (
              <Link key={p.slug} href={`/urunler/${p.slug}`} className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-zinc-100 hover:border-orange-200">
                <div className="relative h-48 overflow-hidden bg-zinc-100">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="text-white font-bold text-lg">{p.name}</span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-zinc-500 text-sm leading-relaxed mb-4">{p.shortDesc}</p>
                  <div className="flex items-center text-orange-600 text-sm font-semibold">
                    Ürünleri İncele <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
            <Link href="/urunler" className="group bg-white rounded-2xl border-2 border-dashed border-orange-200 hover:border-orange-400 hover:bg-orange-50/50 transition-all duration-300">
              <div className="p-6 flex flex-col items-center justify-center h-full min-h-[240px] text-center">
                <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                  <ArrowRight className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-zinc-800 mb-2">Tüm Ürünler</h3>
                <p className="text-zinc-500 text-sm">Tüm kategorileri görüntüleyin</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* NEDEN BİZ */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-orange-600 font-semibold text-sm uppercase tracking-wider mb-2">Neden Nadasled?</p>
            <h2 className="text-4xl font-bold text-zinc-900">Yüzlerce tabelacının tercihi</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((w) => (
              <div key={w.title} className="group p-6 rounded-2xl border border-zinc-100 hover:border-orange-200 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-orange-600 transition-colors duration-300">
                  <w.icon className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-zinc-900 mb-2">{w.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANT */}
      <section className="relative bg-zinc-900 py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(234,88,12,0.2),_transparent_70%)]" />
        <div className="relative container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Fiyat Teklifi Alın</h2>
          <p className="text-zinc-400 mb-10 text-lg max-w-xl mx-auto">
            İhtiyacınız olan ürün ve miktarı bildirin, en uygun fiyatı hemen iletelim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white text-base px-8 h-14 rounded-xl transition-colors font-semibold shadow-lg shadow-orange-900/30"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp&apos;tan Teklif Al
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 border border-zinc-600 text-zinc-300 hover:border-orange-500 hover:text-orange-400 text-base px-8 h-14 rounded-xl transition-colors font-medium"
            >
              <Phone className="w-5 h-5" />
              Telefon ile Ara
            </a>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-zinc-500">
            {["Aynı Gün Kargo", "Faturalı Satış", "Teknik Destek", "Toptan Fiyat"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-orange-500" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="py-24 px-4 bg-zinc-50">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-14">
            <p className="text-orange-600 font-semibold text-sm uppercase tracking-wider mb-2">SSS</p>
            <h2 className="text-4xl font-bold text-zinc-900">Sık Sorulan Sorular</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="bg-white rounded-xl border border-zinc-200 px-6 shadow-sm group hover:border-orange-200 transition-colors"
              >
                <summary className="flex justify-between items-center cursor-pointer py-5 text-zinc-900 font-semibold list-none gap-4">
                  {f.q}
                  <span className="text-orange-500 flex-shrink-0 text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="text-zinc-600 leading-relaxed pb-5">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
