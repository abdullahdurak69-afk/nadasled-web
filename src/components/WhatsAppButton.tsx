"use client";

import { MessageCircle } from "lucide-react";

const WA_HREF = "https://wa.me/905000000000?text=Merhaba%2C%20tabela%20malzemesi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

export default function WhatsAppButton() {
  return (
    <a
      href={WA_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geç"
      onClick={() => {
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "whatsapp_click", {
            event_category: "contact",
            event_label: "floating_button",
          });
        }
      }}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 flex items-center gap-2 group"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-sm font-medium pr-0 group-hover:pr-1">
        WhatsApp&apos;tan Yaz
      </span>
    </a>
  );
}
