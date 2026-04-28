"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Sayfadaki tüm wa.me ve tel: linklerine tıklandığında
 * GA4'e event gönderir. Layout'a bir kez eklenir, her yerde çalışır.
 */
export default function WATracker() {
  const pathname = usePathname();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.href ?? "";
      const gtag = (window as any).gtag;
      if (typeof gtag !== "function") return;

      if (href.includes("wa.me")) {
        // Hangi buton: data-track attribute varsa onu kullan, yoksa pathname
        const label = anchor.dataset.track ?? pathname;
        gtag("event", "whatsapp_click", {
          event_category: "contact",
          event_label: label,
        });
      } else if (href.startsWith("tel:")) {
        const label = anchor.dataset.track ?? pathname;
        gtag("event", "phone_click", {
          event_category: "contact",
          event_label: label,
        });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  return null;
}
