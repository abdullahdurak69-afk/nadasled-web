"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Phone, MessageCircle, Menu, X } from "lucide-react";

const PHONE = "0541 469 69 66";
const PHONE_HREF = "tel:+905414696966";
const WA_HREF = "https://wa.me/905414696966?text=Merhaba%2C%20bilgi%20almak%20istiyorum.";

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
      <header className="sticky top-0 z-50 bg-white border-b border-zinc-200 shadow-sm">
        {/* Üst bant */}
        <div className="bg-zinc-900 text-zinc-300 py-1.5 px-4 text-center text-xs">
          <span className="hidden sm:inline">Toptan LED Malzeme Tedarikçisi · Türkiye Geneli Kargo · </span>
          <a href={PHONE_HREF} className="text-orange-400 font-semibold hover:text-orange-300 transition-colors" onClick={() => trackClick("phone_click", "topbar")}>
            {PHONE}
          </a>
        </div>

        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Nadasled" width={110} height={75} className="h-11 w-auto" priority />
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="text-zinc-600 hover:text-orange-600 font-medium text-sm transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href={PHONE_HREF}
              onClick={() => trackClick("phone_click", "header")}
              className="inline-flex items-center gap-1.5 border border-zinc-300 text-zinc-700 hover:border-orange-500 hover:text-orange-600 rounded-lg px-3 py-2 text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4" />
              {PHONE}
            </a>
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClick("whatsapp_click", "header")}
              className="inline-flex items-center gap-1.5 bg-orange-600 hover:bg-orange-700 text-white rounded-lg px-4 py-2 text-sm font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-zinc-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menüyü aç/kapat"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div className="absolute top-0 right-0 h-full w-72 bg-white shadow-2xl p-6 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <Image src="/logo.png" alt="Nadasled" width={110} height={75} className="h-10 w-auto" />
              <button onClick={() => setOpen(false)} className="p-2 rounded-lg hover:bg-zinc-100">
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-1 mb-8">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-zinc-700 hover:text-orange-600 hover:bg-orange-50 font-medium text-base px-3 py-3 rounded-lg transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3 mt-auto">
              <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 border border-zinc-300 text-zinc-700 rounded-lg px-4 py-3 font-medium hover:border-orange-500 hover:text-orange-600 transition-colors">
                <Phone className="w-4 h-4" /> {PHONE}
              </a>
              <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg px-4 py-3 font-semibold transition-colors">
                <MessageCircle className="w-4 h-4" /> WhatsApp ile Yaz
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
