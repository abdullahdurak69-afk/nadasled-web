"use client";

import { useState } from "react";
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

const PHONE = "0541 469 69 66";
const PHONE_HREF = "tel:+905414696966";
const WA_HREF = "https://wa.me/905414696966?text=Merhaba%2C%20bilgi%20almak%20istiyorum.";
const EMAIL = "nadasled@gmail.com";
const ADDRESS = "Çakmak, Yeşilbahar Sokağı No:15/A, Ümraniye / İstanbul, 34774";
const INSTAGRAM = "https://www.instagram.com/nadasled/";
const MAPS_HREF = "https://maps.google.com/?q=Çakmak+Yeşilbahar+Sokağı+15/A+Ümraniye+İstanbul";

// Formspree endpoint — TODO: kendi endpoint'inizi girin
const FORM_ENDPOINT = "https://formspree.io/f/XXXXXXXX";

export default function IletisimPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ ad: "", telefon: "", urun: "", miktar: "", mesaj: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "form_submit", { event_category: "contact" });
        }
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="py-16 px-4 bg-gray-50 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-950 mb-3">İletişim</h1>
          <p className="text-gray-600 text-lg">Teklif almak veya bilgi için bize ulaşın</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* İletişim bilgileri */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-xl font-bold text-blue-950 mb-6">Hızlı İletişim</h2>
              <div className="space-y-4">
                <a
                  href={WA_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    if (typeof window !== "undefined" && (window as any).gtag) {
                      (window as any).gtag("event", "whatsapp_click", { event_category: "contact", event_label: "iletisim_page" });
                    }
                  }}
                  className="flex items-center gap-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors group"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-green-800">WhatsApp ile Yaz</p>
                    <p className="text-sm text-green-600">Hızlı yanıt · Teklif al</p>
                  </div>
                </a>

                <a
                  href={PHONE_HREF}
                  onClick={() => {
                    if (typeof window !== "undefined" && (window as any).gtag) {
                      (window as any).gtag("event", "phone_click", { event_category: "contact", event_label: "iletisim_page" });
                    }
                  }}
                  className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">Telefon</p>
                    <p className="text-sm text-blue-700">{PHONE}</p>
                  </div>
                </a>

                <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="w-12 h-12 bg-gray-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">E-posta</p>
                    <p className="text-sm text-gray-600">{EMAIL}</p>
                  </div>
                </a>

                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-violet-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <InstagramIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-pink-900">Instagram</p>
                    <p className="text-sm text-pink-600">@nadasled</p>
                  </div>
                </a>

                <a href={MAPS_HREF} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="w-12 h-12 bg-gray-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Adres</p>
                    <p className="text-sm text-gray-600">{ADDRESS}</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-blue-950 text-white rounded-2xl p-7">
              <h3 className="font-bold text-lg mb-2">Çalışma Saatleri</h3>
              <div className="space-y-2 text-sm text-blue-200">
                <div className="flex justify-between">
                  <span>Pazartesi – Cuma</span>
                  <span className="font-medium text-white">08:30 – 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Cumartesi</span>
                  <span className="font-medium text-white">09:00 – 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Pazar</span>
                  <span className="text-blue-400">Kapalı</span>
                </div>
              </div>
            </div>
          </div>

          {/* Teklif formu */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-xl font-bold text-blue-950 mb-6">Teklif Formu</h2>
            {status === "sent" ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-blue-950 mb-2">Mesajınız İletildi!</h3>
                <p className="text-gray-600">En kısa sürede size geri döneceğiz.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ad Soyad *</label>
                    <input
                      required
                      type="text"
                      value={form.ad}
                      onChange={(e) => setForm({ ...form, ad: e.target.value })}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Adınız Soyadınız"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Telefon *</label>
                    <input
                      required
                      type="tel"
                      value={form.telefon}
                      onChange={(e) => setForm({ ...form, telefon: e.target.value })}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="0541 469 69 66"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">İlgilendiğiniz Ürün</label>
                    <select
                      value={form.urun}
                      onChange={(e) => setForm({ ...form, urun: e.target.value })}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    >
                      <option value="">Seçin</option>
                      <option>LED Modül</option>
                      <option>LED Şerit</option>
                      <option>Neon LED</option>
                      <option>Trafo / LED Sürücü</option>
                      <option>Kablo</option>
                      <option>Aksesuar</option>
                      <option>Diğer</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tahmini Miktar</label>
                    <input
                      type="text"
                      value={form.miktar}
                      onChange={(e) => setForm({ ...form, miktar: e.target.value })}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="örn: 1000 adet, 500m"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mesajınız</label>
                  <textarea
                    rows={4}
                    value={form.mesaj}
                    onChange={(e) => setForm({ ...form, mesaj: e.target.value })}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="İhtiyacınızı kısaca açıklayın..."
                  />
                </div>
                {status === "error" && (
                  <p className="text-red-600 text-sm">Bir hata oluştu. Lütfen WhatsApp veya telefon ile iletişime geçin.</p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full inline-flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-800 disabled:opacity-60 text-white h-12 text-base rounded-xl font-medium transition-colors"
                >
                  <Send className="w-4 h-4" />
                  {status === "sending" ? "Gönderiliyor..." : "Teklif Talep Et"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
