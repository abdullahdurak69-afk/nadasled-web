"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { detectLlmSource } from "@/lib/llm-source";

/**
 * Ziyaretçi bir yapay zekâ sohbetinden geldiyse Clarity oturumunu etiketler.
 * Layout'a bir kez eklenir, her sayfada çalışır.
 *
 * Clarity panelinde nasıl görünür:
 *   Filters → Custom tags → trafik_tipi = "llm"   (tüm LLM trafiği)
 *   Filters → Custom tags → llm_kaynak  = "chatgpt" (tek tek kaynak)
 *
 * Üç önemli ayrıntı:
 *  1. Referrer sadece siteye ilk girişte dolu gelir; iç sayfalara geçince
 *     kaybolur. Bu yüzden kaynak sessionStorage'a yazılır ve sonraki sayfa
 *     görüntülemelerinde oradan okunup tekrar etiketlenir.
 *  2. clarity("upgrade") çağrılıyor: Clarity günlük kotayı aşan projelerde
 *     kayıtları örnekleyerek atar. LLM trafiği az olduğu için bu oturumların
 *     kaydı garantiye alınıyor.
 *  3. clarity() head'deki snippet tarafından anında bir kuyruk fonksiyonu
 *     olarak tanımlanır, script indirilmeden önce çağrılması sorun değil.
 */

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
  }
}

const STORAGE_KEY = "nadas_llm_kaynak";
/** upgrade ve event oturum başına bir kez; her sayfa geçişinde tekrarlanmasın. */
const ONCE_KEY = "nadas_llm_bildirildi";

export default function LlmSourceTag() {
  const pathname = usePathname();

  useEffect(() => {
    let source: string | null = null;

    // sessionStorage gizli sekmede/kapalı depolamada patlayabilir — sessizce geç.
    try {
      source = detectLlmSource(document.referrer, window.location.search);
      if (source) {
        sessionStorage.setItem(STORAGE_KEY, source);
      } else {
        source = sessionStorage.getItem(STORAGE_KEY);
      }
    } catch {
      source = detectLlmSource(document.referrer, window.location.search);
    }

    if (!source || typeof window.clarity !== "function") return;

    window.clarity("set", "trafik_tipi", "llm");
    window.clarity("set", "llm_kaynak", source);

    let bildirildi = false;
    try {
      bildirildi = sessionStorage.getItem(ONCE_KEY) === "1";
      sessionStorage.setItem(ONCE_KEY, "1");
    } catch {
      // depolama yoksa her sayfada tekrar eder, zararsız
    }

    if (!bildirildi) {
      window.clarity("upgrade", "llm-trafik");
      window.clarity("event", "llm_ziyaret");
    }
  }, [pathname]);

  return null;
}
