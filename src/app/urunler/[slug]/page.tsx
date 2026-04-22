import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, CheckCircle, ArrowLeft } from "lucide-react";
import products from "@/data/products.json";
import type { Metadata } from "next";

const PHONE_HREF = "tel:+905414696966";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: product.metaTitle,
    description: product.metaDesc,
    keywords: product.keywords,
    openGraph: { title: product.metaTitle, description: product.metaDesc },
  };
}

export default async function UrunKategoriPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const waMessage = encodeURIComponent(`${product.name} hakkında bilgi almak istiyorum.`);
  const waHref = `https://wa.me/905414696966?text=${waMessage}`;

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: product.h1,
    description: product.metaDesc,
    itemListElement: product.products.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      description: item.specs,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://www.nadasled.com.tr" },
      { "@type": "ListItem", position: 2, name: "Ürünler", item: "https://www.nadasled.com.tr/urunler" },
      { "@type": "ListItem", position: 3, name: product.name, item: `https://www.nadasled.com.tr/urunler/${product.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-zinc-100 py-3 px-4">
        <div className="container mx-auto max-w-6xl flex items-center gap-2 text-sm text-zinc-500">
          <Link href="/" className="hover:text-orange-600 transition-colors">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/urunler" className="hover:text-orange-600 transition-colors">Ürünler</Link>
          <span>/</span>
          <span className="text-zinc-900 font-medium">{product.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-zinc-900 py-16 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover opacity-15"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(234,88,12,0.15),_transparent_60%)]" />
        <div className="relative container mx-auto max-w-6xl">
          <Link href="/urunler" className="inline-flex items-center gap-1 text-zinc-400 hover:text-orange-400 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Tüm Ürünler
          </Link>
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">{product.h1}</h1>
            <p className="text-zinc-400 text-lg max-w-xl">{product.shortDesc}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {product.keywords.slice(0, 3).map((k) => (
                <span key={k} className="bg-orange-600/20 border border-orange-600/30 text-orange-400 text-xs font-medium px-3 py-1 rounded-full">{k}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="py-16 px-4 bg-zinc-50">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Sol: Ürünler + Özellikler */}
          <div className="lg:col-span-2 space-y-10">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-zinc-900 mb-6">Ürünler</h2>
              <div className="divide-y divide-zinc-100">
                {product.products.map((item) => (
                  <div key={item.name} className="py-4 flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-zinc-900">{item.name}</p>
                      <p className="text-sm text-zinc-500 mt-0.5">{item.specs}</p>
                    </div>
                    <a
                      href={`https://wa.me/905414696966?text=${encodeURIComponent(`${item.name} için fiyat öğrenmek istiyorum.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 inline-flex items-center border border-orange-500 text-orange-600 hover:bg-orange-50 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors"
                    >
                      Teklif Al
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-zinc-900 mb-6">Özellikler</h2>
              <ul className="space-y-3">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-700">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sağ: CTA */}
          <div className="space-y-4">
            <div className="bg-zinc-900 text-white rounded-2xl p-7 sticky top-24">
              <h3 className="text-xl font-bold mb-2">Fiyat Teklifi Al</h3>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                İhtiyacınız olan ürün ve miktarı bildirin, en uygun toptan fiyatı hemen iletiyoruz.
              </p>
              <div className="space-y-3">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white h-12 text-base rounded-xl font-medium transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp ile Sor
                </a>
                <a
                  href={PHONE_HREF}
                  className="w-full inline-flex items-center justify-center gap-2 border border-zinc-600 text-white hover:bg-zinc-800 h-12 text-base rounded-xl font-medium transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Telefon ile Ara
                </a>
              </div>
              <div className="mt-6 pt-6 border-t border-zinc-800 space-y-2">
                {["Aynı gün kargo", "Faturalı satış", "1 yıl garanti", "Teknik destek"].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-sm text-zinc-400">
                    <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="font-semibold text-zinc-900 mb-4">Diğer Kategoriler</h3>
              <ul className="space-y-2">
                {products.filter((p) => p.slug !== product.slug).map((p) => (
                  <li key={p.slug}>
                    <Link href={`/urunler/${p.slug}`}
                      className="flex items-center gap-2 text-sm text-zinc-600 hover:text-orange-600 transition-colors py-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
