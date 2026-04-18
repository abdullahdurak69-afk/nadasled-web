"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, MessageCircle, Menu, X, Zap } from "lucide-react";

const PHONE = "0500 000 00 00";
const PHONE_HREF = "tel:+905000000000";
const WA_HREF = "https://wa.me/905000000000?text=Merhaba%2C%20bilgi%20almak%20istiyorum.";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/urunler", label: "Ürünler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

function trackClick(event: string, label: string) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", event, { event_category: "contact", event_label: label });
  }
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="bg-blue-900 text-white py-1.5 px-4 text-center text-sm">
          <span className="hidden sm:inline">Toptan LED Malzeme Tedarikçisi · Türkiye Geneli Kargo · </span>
          <a href={PHONE_HREF} className="font-semibold hover:underline" onClick={() => trackClick("phone_click", "topbar")}>
            {PHONE}
          </a>
        </div>

        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-blue-900">
            <Zap className="w-6 h-6 text-yellow-500 fill-yellow-500" />
            <span>Nadasled</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="text-gray-700 hover:text-blue-900 font-medium text-sm transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href={PHONE_HREF}
              onClick={() => trackClick("phone_click", "header")}
              className="inline-flex items-center gap-1.5 border border-blue-900 text-blue-900 hover:bg-blue-50 rounded-lg px-3 py-2 text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4" />
              {PHONE}
            </a>
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClick("whatsapp_click", "header")}
              className="inline-flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white rounded-lg px-3 py-2 text-sm font-medium transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menüyü aç/kapat"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div className="absolute top-0 right-0 h-full w-72 bg-white shadow-xl p-6 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2 font-bold text-xl text-blue-900">
                <Zap className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                Nadasled
              </div>
              <button onClick={() => setOpen(false)} className="p-2 rounded-lg hover:bg-gray-100">
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-1 mb-8">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-700 hover:text-blue-900 hover:bg-blue-50 font-medium text-base px-3 py-3 rounded-lg transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3 mt-auto">
              <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 border border-blue-900 text-blue-900 rounded-lg px-4 py-3 font-medium hover:bg-blue-50 transition-colors">
                <Phone className="w-4 h-4" /> {PHONE}
              </a>
              <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white rounded-lg px-4 py-3 font-medium transition-colors">
                <MessageCircle className="w-4 h-4" /> WhatsApp ile Yaz
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
