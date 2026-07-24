/**
 * GA4 olay gönderimi için tek merkez.
 *
 * Tıklama olayları ClickTracker bileşeni tarafından otomatik gönderilir —
 * bileşenlerin içine tekrar gtag çağrısı eklemeyin, aynı tıklama iki kez sayılır.
 * Bir butonu raporda ayırt etmek için linke data-track="hero" gibi etiket verin.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** GA4'te "anahtar olay" (dönüşüm) olarak işaretlenmesi gereken olaylar. */
export const EVENTS = {
  whatsapp: "whatsapp_click",
  phone: "phone_click",
  email: "email_click",
  maps: "maps_click",
  social: "social_click",
  /** GA4'ün önerdiği standart ad — Google Ads'e dönüşüm olarak aktarılabilir. */
  lead: "generate_lead",
} as const;

type TrackParams = Record<string, string | number | boolean | undefined>;

/**
 * GA4'e olay gönderir. gtag yüklenmemişse (reklam engelleyici, yavaş bağlantı)
 * sessizce yok sayar — kullanıcı akışını hiçbir koşulda bozmaz.
 */
export function track(event: string, params: TrackParams = {}) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", event, params);
}
