"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { EVENTS, track } from "@/lib/analytics";

/**
 * Sayfadaki tüm iletişim linklerine (WhatsApp, telefon, e-posta, harita,
 * sosyal medya) tıklandığında GA4'e event gönderir. Layout'a bir kez eklenir,
 * her sayfada çalışır.
 *
 * Tıklama olaylarının tek kaynağı burasıdır. Bileşenlerin içine ayrıca gtag
 * çağrısı eklenirse aynı tıklama iki kez sayılır. Hangi butonun çalıştığını
 * raporda görmek için linke data-track="hero" gibi bir etiket ekleyin.
 */
function eventForHref(href: string): string | null {
  if (href.includes("wa.me") || href.includes("api.whatsapp.com")) return EVENTS.whatsapp;
  if (href.startsWith("tel:")) return EVENTS.phone;
  if (href.startsWith("mailto:")) return EVENTS.email;
  if (href.includes("instagram.com")) return EVENTS.social;
  if (href.includes("maps.google") || href.includes("google.com/maps")) return EVENTS.maps;
  return null;
}

export default function ClickTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!(e.target instanceof Element)) return;
      const anchor = e.target.closest("a");
      if (!anchor) return;

      const event = eventForHref(anchor.href);
      if (!event) return;

      track(event, {
        event_category: "contact",
        // Hangi buton: data-track varsa onu kullan, yoksa sayfanın kendisi
        event_label: anchor.dataset.track ?? pathname,
        page_path: pathname,
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  return null;
}
