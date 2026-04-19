import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

const PHONE = "0541 469 69 66";
const PHONE_HREF = "tel:+905414696966";
const WA_HREF = "https://wa.me/905414696966?text=Merhaba%2C%20bilgi%20almak%20istiyorum.";
const EMAIL = "nadasled@gmail.com";
const ADDRESS = "Çakmak, Yeşilbahar Sokağı No:15/A, Ümraniye / İstanbul";
const INSTAGRAM = "https://www.instagram.com/nadasled/";

const categories = [
  { href: "/urunler/led-modul", label: "LED Modül" },
  { href: "/urunler/led-serit", label: "LED Şerit" },
  { href: "/urunler/neon-led", label: "Neon LED" },
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
            <div className="mb-4">
              <Image src="/logo.png" alt="Nadasled" width={110} height={75} className="h-12 w-auto brightness-0 invert" />
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Tabela yapımında kullanılan LED modül, LED şerit, neon LED, trafo, kablo ve aksesuarların toptan tedarikçisi.
              Türkiye geneli hızlı kargo.
            </p>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-gray-400 hover:text-pink-400 transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
              @nadasled
            </a>
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
                <span>{ADDRESS}</span>
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
