import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import products from "@/data/products.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tabela Malzemeleri — Tüm Ürün Kategorileri",
  description:
    "LED modül, LED şerit, trafo, kablo ve tabela aksesuarları. Türkiye geneli toptan satış. Tüm ürün kategorilerini inceleyin, teklif alın.",
};

export default function UrunlerPage() {
  return (
    <div className="py-16 px-4 bg-gray-50 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-950 mb-3">Ürün Kategorileri</h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Tabela yapımı için ihtiyacınız olan tüm malzemeleri toptan fiyatlarla temin edin.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <Link key={p.slug} href={`/urunler/${p.slug}`} className="group">
              <Card className="h-full hover:shadow-lg transition-all duration-200 border-0 shadow-sm overflow-hidden">
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-br ${p.color} p-8 text-center`}>
                    <span className="text-6xl">{p.icon}</span>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-blue-950 mb-2 group-hover:text-blue-700 transition-colors">
                      {p.name}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{p.shortDesc}</p>
                    <ul className="space-y-1 mb-5">
                      {p.features.slice(0, 3).map((f) => (
                        <li key={f} className="text-xs text-gray-500 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center text-blue-700 text-sm font-medium">
                      Detayları Gör{" "}
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
