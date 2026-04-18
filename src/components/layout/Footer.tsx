import Link from "next/link";
import { Zap, Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const PHONE = "0500 000 00 00";
const PHONE_HREF = "tel:+905000000000";
const WA_HREF = "https://wa.me/905000000000?text=Merhaba%2C%20bilgi%20almak%20istiyorum.";
const EMAIL = "info@nadasled.com";

const categories = [
  { href: "/urunler/led-modul", label: "LED Modül" },
  { href: "/urunler/led-serit", label: "LED Şerit" },
  { href: "/urunler/trafo-led-surucu", label: "Trafo / LED Sürücü" },
  { href: "/urunler/kablo", label: "Kablo" },
  { href: "/urunler/aksesuar", label: "Aksesuar & Diğer" },
];

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold text-xl text-white mb-3">
              <Zap className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              Nadasled
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Tabela yapımında kullanılan LED modül, LED şerit, trafo, kablo ve aksesuarların toptan tedarikçisi.
              Türkiye geneli hızlı kargo.
            </p>
          </div>

          {/* Ürünler */}
          <div>
            <h3 className="text-white font-semibold mb-4">Ürün Kategorileri</h3>
            <ul className="space-y-2">
              {categories.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-white font-semibold mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li>
                <a href={PHONE_HREF} className="flex items-center gap-2 text-sm text-gray-400 hover:text-yellow-400 transition-colors">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-yellow-400 transition-colors">
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-sm text-gray-400 hover:text-yellow-400 transition-colors">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Türkiye</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} Nadasled. Tüm hakları saklıdır.</span>
          <div className="flex gap-4">
            <Link href="/urunler" className="hover:text-gray-300">Ürünler</Link>
            <Link href="/hakkimizda" className="hover:text-gray-300">Hakkımızda</Link>
            <Link href="/iletisim" className="hover:text-gray-300">İletişim</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
