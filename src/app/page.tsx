import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Truck, Shield, Headphones, Award, ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import products from "@/data/products.json";
import faqs from "@/data/faq.json";
import type { Metadata } from "next";

const PHONE_HREF = "tel:+905000000000";
const WA_HREF = "https://wa.me/905000000000?text=Merhaba%2C%20tabela%20malzemesi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

export const metadata: Metadata = {
  title: "Nadasled | LED Modül, LED Şerit, Trafo — Tabela Malzemeleri Toptan",
  description:
    "Tabela yapımı için LED modül, LED şerit, trafo ve kablo toptan tedarikçisi. Türkiye geneli hızlı kargo. Tabelacılara özel fiyatlar için hemen arayın.",
};

const whyUs = [
  { icon: Truck, title: "Türkiye Geneli Hızlı Kargo", desc: "Siparişler aynı gün veya ertesi gün kargoya verilir." },
  { icon: Award, title: "Toptan Fiyat Avantajı", desc: "Tabelacılara özel toptan fiyatlar, düzenli müşterilere ek indirim." },
  { icon: Headphones, title: "Teknik Destek", desc: "Ürün seçimi ve kurulum konularında uzman ekibimiz yanınızda." },
  { icon: Shield, title: "Garantili Ürünler", desc: "Tüm ürünlerimiz CE/RoHS sertifikalı, garanti kapsamındadır." },
];

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nadasled",
  url: "https://www.nadasled.com",
  description: "Tabela yapımı için LED modül, şerit, trafo ve kablo toptan tedarikçisi",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+90-500-000-00-00",
    contactType: "customer service",
    areaServed: "TR",
    availableLanguage: "Turkish",
  },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-20 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            Türkiye Geneli Toptan Tedarikçi
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            Tabela Malzemeleri<br />
            <span className="text-yellow-400">Toptan Tedarik</span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            LED modül, LED şerit, trafo, kablo ve tüm tabela malzemeleri için tek adresiniz.
            Hızlı kargo, uygun fiyat, teknik destek.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-base px-8 h-14 rounded-full shadow-lg transition-colors font-medium"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp ile Teklif Al
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 border border-white text-white hover:bg-white/10 text-base px-8 h-14 rounded-full transition-colors font-medium"
            >
              <Phone className="w-5 h-5" />
              Hemen Ara
            </a>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-blue-200">
            {["Aynı Gün Kargo", "Faturalı Satış", "Teknik Destek", "Toptan Fiyat"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-400" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ÜRÜN KATEGORİLERİ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-3">Ürün Kategorileri</h2>
            <p className="text-gray-600 text-lg">Tabela yapımı için ihtiyacınız olan her şey</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <Link key={p.slug} href={`/urunler/${p.slug}`} className="group">
                <Card className="h-full hover:shadow-lg transition-all duration-200 border-0 shadow-sm overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-30`} />
                      <div className="absolute bottom-3 right-3 text-3xl">{p.icon}</div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-blue-950 mb-2 group-hover:text-blue-700 transition-colors">
                        {p.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{p.shortDesc}</p>
                      <div className="flex items-center text-blue-700 text-sm font-medium">
                        Ürünleri İncele <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
            <Link href="/urunler" className="group">
              <Card className="h-full hover:shadow-lg transition-all duration-200 border-2 border-dashed border-blue-200 bg-blue-50/50 shadow-none">
                <CardContent className="p-6 flex flex-col items-center justify-center h-full min-h-[200px] text-center">
                  <div className="text-4xl mb-3">📦</div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">Tüm Ürünler</h3>
                  <p className="text-gray-500 text-sm">Tüm kategorileri ve ürünleri görüntüleyin</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* NEDEN BİZ */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-3">Neden Nadasled?</h2>
            <p className="text-gray-600 text-lg">Yüzlerce tabelacının tercihi</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((w) => (
              <div key={w.title} className="text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <w.icon className="w-7 h-7 text-blue-700" />
                </div>
                <h3 className="font-bold text-blue-950 mb-2">{w.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANT */}
      <section className="bg-yellow-400 py-14 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-blue-950 mb-3">Fiyat Teklifi Alın</h2>
          <p className="text-blue-900 mb-8 text-lg">
            İhtiyacınız olan ürün ve miktarı bildirin, en uygun fiyatı hemen iletelim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white text-base px-8 h-14 rounded-full transition-colors font-medium"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp&apos;tan Teklif Al
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 bg-blue-950 hover:bg-blue-900 text-white text-base px-8 h-14 rounded-full transition-colors font-medium"
            >
              <Phone className="w-5 h-5" />
              Telefon ile Ara
            </a>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-3">Sık Sorulan Sorular</h2>
            <p className="text-gray-600 text-lg">Merak ettikleriniz için</p>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="bg-white rounded-xl border border-gray-200 px-6 shadow-sm group"
              >
                <summary className="flex justify-between items-center cursor-pointer py-5 text-blue-950 font-semibold list-none gap-4">
                  {f.q}
                  <span className="text-gray-400 flex-shrink-0 text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="text-gray-600 leading-relaxed pb-5">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
