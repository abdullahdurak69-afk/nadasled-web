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
    <div className="min-h-screen bg-zinc-50">
      {/* Hero */}
      <section className="relative bg-zinc-900 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(234,88,12,0.15),_transparent_60%)]" />
        <div className="relative container mx-auto max-w-4xl">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-4">Hakkımızda</p>
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight">
            Tabela Sektörünün<br />
            <span className="text-orange-500">Güvenilir</span> Tedarikçisi
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
            Yılların deneyimiyle tabelacılara ve reklam ajanslarına LED malzeme tedariki yapıyoruz.
            Türkiye geneline hızlı kargo, uygun toptan fiyat.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-white border-b border-zinc-100">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center group">
                <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600 transition-colors duration-300">
                  <s.icon className="w-7 h-7 text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-4xl font-extrabold text-zinc-900 mb-1">{s.value}</div>
                <div className="text-sm text-zinc-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* İçerik */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-5 flex items-center gap-3">
                <span className="w-1 h-7 rounded-full bg-orange-600 flex-shrink-0" />
                Biz Kimiz?
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Nadasled olarak, Türkiye genelinde tabela yapım sektörüne hizmet veren toptan malzeme tedarikçisiyiz.
                LED modül, LED şerit, neon LED, trafo, kablo ve aksesuarlar dahil tüm tabela malzemelerini uygun fiyatlarla temin ediyoruz.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                Yıllar içinde edindiğimiz tecrübe ve güvenilir tedarikçi ağımızla, tabelacılar ve reklam ajanslarının
                kaliteli malzemeye hızlıca ulaşmasını sağlıyoruz.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-5 flex items-center gap-3">
                <span className="w-1 h-7 rounded-full bg-orange-600 flex-shrink-0" />
                Misyonumuz
              </h2>
              <ul className="space-y-3">
                {[
                  "Sektörün ihtiyaçlarına özel ürün yelpazesi sunmak",
                  "Rekabetçi toptan fiyatlarla erişilebilirlik sağlamak",
                  "Hızlı kargo ile iş sürekliliğini desteklemek",
                  "Teknik destek ile müşteri memnuniyetini ön planda tutmak",
                  "Kaliteli ve sertifikalı ürünlerle güven oluşturmak",
                ].map((m) => (
                  <li key={m} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-600">{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-600 py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Bizimle Çalışmaya Başlayın</h2>
          <p className="text-orange-100 mb-8">Toptan fiyat listesi ve teknik destek için hemen iletişime geçin.</p>
          <a
            href="https://wa.me/905414696966?text=Merhaba%2C%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-orange-600 hover:bg-orange-50 font-bold px-8 h-12 rounded-xl transition-colors text-base"
          >
            WhatsApp ile İletişime Geç
          </a>
        </div>
      </section>
    </div>
  );
}
