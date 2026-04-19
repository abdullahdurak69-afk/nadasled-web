import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, CheckCircle, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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

  const schema = {
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-3 px-4">
        <div className="container mx-auto max-w-6xl flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-700">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/urunler" className="hover:text-blue-700">Ürünler</Link>
          <span>/</span>
          <span className="text-blue-900 font-medium">{product.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className={`relative bg-gradient-to-br ${product.color} py-16 px-4 overflow-hidden`}>
        <div className="absolute inset-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative container mx-auto max-w-6xl">
          <Link href="/urunler" className="inline-flex items-center gap-1 text-white/80 hover:text-white text-sm mb-6">
            <ArrowLeft className="w-4 h-4" /> Tüm Ürünler
          </Link>
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="text-7xl">{product.icon}</div>
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">{product.h1}</h1>
              <p className="text-white/80 text-lg max-w-xl">{product.shortDesc}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {product.keywords.slice(0, 3).map((k) => (
                  <Badge key={k} variant="secondary" className="bg-white/20 text-white border-0">{k}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Sol: Ürünler + Özellikler */}
          <div className="lg:col-span-2 space-y-10">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-blue-950 mb-6">Ürünler</h2>
              <div className="divide-y divide-gray-100">
                {product.products.map((item) => (
                  <div key={item.name} className="py-4 flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-blue-950">{item.name}</p>
                      <p className="text-sm text-gray-500 mt-0.5">{item.specs}</p>
                    </div>
                    <a
                      href={`https://wa.me/905414696966?text=${encodeURIComponent(`${item.name} için fiyat öğrenmek istiyorum.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 inline-flex items-center border border-green-600 text-green-700 hover:bg-green-50 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors"
                    >
                      Teklif Al
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-blue-950 mb-6">Özellikler</h2>
              <ul className="space-y-3">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sağ: CTA */}
          <div className="space-y-4">
            <div className="bg-blue-950 text-white rounded-2xl p-7 sticky top-24">
              <h3 className="text-xl font-bold mb-2">Fiyat Teklifi Al</h3>
              <p className="text-blue-200 text-sm mb-6 leading-relaxed">
                İhtiyacınız olan ürün ve miktarı bildirin, en uygun toptan fiyatı hemen iletiyoruz.
              </p>
              <div className="space-y-3">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white h-12 text-base rounded-xl font-medium transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp ile Sor
                </a>
                <a
                  href={PHONE_HREF}
                  className="w-full inline-flex items-center justify-center gap-2 border border-blue-400 text-white hover:bg-blue-800 h-12 text-base rounded-xl font-medium transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Telefon ile Ara
                </a>
              </div>
              <div className="mt-6 pt-6 border-t border-blue-800 space-y-2">
                {["Aynı gün kargo", "Faturalı satış", "1 yıl garanti", "Teknik destek"].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-sm text-blue-200">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="font-semibold text-blue-950 mb-4">Diğer Kategoriler</h3>
              <ul className="space-y-2">
                {products.filter((p) => p.slug !== product.slug).map((p) => (
                  <li key={p.slug}>
                    <Link href={`/urunler/${p.slug}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-700 transition-colors py-1">
                      <span>{p.icon}</span>{p.name}
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
