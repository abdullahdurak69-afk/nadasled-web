import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import products from "@/data/products.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tabela Malzemeleri — Tüm Ürün Kategorileri",
  description:
    "LED modül, LED şerit, trafo, kablo ve tabela aksesuarları. Türkiye geneli toptan satış. Tüm ürün kategorilerini inceleyin, teklif alın.",
};

export default function UrunlerPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Hero */}
      <section className="bg-zinc-900 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Ürün Kategorileri</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Tabela yapımı için<br /><span className="text-orange-500">ihtiyacınız olan her şey</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl">
            Toptan fiyatlarla LED modül, şerit, trafo, kablo ve aksesuarlar. Türkiye geneli hızlı kargo.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="text-white font-bold text-lg">{p.name}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-zinc-500 text-sm leading-relaxed mb-4">{p.shortDesc}</p>
                  <ul className="space-y-1.5 mb-5">
                    {p.features.slice(0, 3).map((f) => (
                      <li key={f} className="text-xs text-zinc-500 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center text-orange-600 text-sm font-semibold">
                    Ürünleri İncele{" "}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
