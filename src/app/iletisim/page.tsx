"use client";

import { useState } from "react";
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE = "0500 000 00 00";
const PHONE_HREF = "tel:+905000000000";
const WA_HREF = "https://wa.me/905000000000?text=Merhaba%2C%20bilgi%20almak%20istiyorum.";
const EMAIL = "info@nadasled.com";

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

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-gray-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">E-posta</p>
                    <p className="text-sm text-gray-600">{EMAIL}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-gray-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Konum</p>
                    <p className="text-sm text-gray-600">Türkiye</p>
                  </div>
                </div>
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
                      placeholder="0500 000 00 00"
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
                <Button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white h-12 text-base rounded-xl"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {status === "sending" ? "Gönderiliyor..." : "Teklif Talep Et"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
