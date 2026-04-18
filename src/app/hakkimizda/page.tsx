import { CheckCircle, Users, Package, Truck, Award } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda — Nadasled Tabela Malzemeleri",
  description:
    "Nadasled olarak tabela sektörüne LED modül, şerit, trafo ve kablo tedarik ediyoruz. Tabelacılara özel toptan fiyatlar, Türkiye geneli hızlı kargo.",
};

const stats = [
  { icon: Users, label: "Mutlu Müşteri", value: "500+" },
  { icon: Package, label: "Ürün Çeşidi", value: "200+" },
  { icon: Truck, label: "Günlük Kargo", value: "50+" },
  { icon: Award, label: "Yıllık Deneyim", value: "10+" },
];

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-blue-950 text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Hakkımızda</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Yılların deneyimiyle tabela sektörünün güvenilir malzeme tedarikçisiyiz.
            LED modülden kabloya kadar ihtiyacınız olan her şey tek adreste.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <s.icon className="w-6 h-6 text-blue-700" />
                </div>
                <div className="text-3xl font-bold text-blue-950 mb-1">{s.value}</div>
                <div className="text-sm text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* İçerik */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-blue-950 mb-4">Biz Kimiz?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nadasled olarak, Türkiye genelinde tabela yapım sektörüne hizmet veren toptan malzeme tedarikçisiyiz.
                LED modül, LED şerit, trafo, kablo ve aksesuarlar dahil tüm tabela malzemelerini uygun fiyatlarla temin ediyoruz.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Yıllar içinde edindiğimiz tecrübe ve güvenilir tedarikçi ağımızla, tabelacılar ve reklam ajanslarının
                kaliteli malzemeye hızlıca ulaşmasını sağlıyoruz.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-blue-950 mb-4">Misyonumuz</h2>
              <ul className="space-y-3">
                {[
                  "Sektörün ihtiyaçlarına özel ürün yelpazesi sunmak",
                  "Rekabetçi toptan fiyatlarla erişilebilirlik sağlamak",
                  "Hızlı kargo ile iş sürekliliğini desteklemek",
                  "Teknik destek ile müşteri memnuniyetini ön planda tutmak",
                  "Kaliteli ve sertifikalı ürünlerle güven oluşturmak",
                ].map((m) => (
                  <li key={m} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
