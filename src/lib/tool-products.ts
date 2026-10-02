// Hesaplama araçlarının sonucunda önerilen katalog ürünleri.
//
// Şerit aracı ve maliyet aracı aynı eşleştirmeyi kullanıyor; burada durur ki
// kataloğa yeni şerit sayfası eklendiğinde tek yer güncellensin.

import { STRIP_PRESETS } from "@/lib/led-calc";

const STRIP_PRESET_IDS = new Set(STRIP_PRESETS.map((s) => s.id));

export type Urun = { href: string; name: string; note: string };
const SMD_IC: Urun[] = [
  { href: "/urunler/led-serit/ip20-8mm-samsung-ic-mekan-serit-led/", name: "Samsung İç Mekan Şerit", note: "Yüksek CRI · 12V · IP20" },
  { href: "/urunler/led-serit/ip20-8mm-eco-2835-120-led-mt/", name: "ECO 2835 · 120 LED/m", note: "Ekonomik · 12V · IP20" },
];
const SMD_DIS: Urun[] = [
  { href: "/urunler/led-serit/ip65-8mm-dis-mekan-drop-silikon-serit-led/", name: "Dış Mekan Drop Silikon Şerit", note: "Saçak altı, nemli ortam · 12V · IP65" },
  { href: "/urunler/cob-led-serit/ip65-10mm-cob-480-mt/", name: "COB 480/m · 10 mm", note: "Noktasız hat · 24V · IP65" },
];
const COB_IC: Urun[] = [
  { href: "/urunler/cob-led-serit/ip20-8mm-cob-480-mt/", name: "COB 480/m · 8 mm", note: "Noktasız hat · 24V · IP20" },
  { href: "/urunler/cob-led-serit/ip65-10mm-cob-480-mt/", name: "COB 480/m · 10 mm", note: "Dış mekan seçeneği · 24V · IP65" },
];
const COB_DIS: Urun[] = [
  { href: "/urunler/cob-led-serit/ip65-10mm-cob-480-mt/", name: "COB 480/m · 10 mm", note: "6000K / 4000K / 3000K · 24V · IP65" },
];
const RGB: Urun[] = [
  { href: "/urunler/led-serit/ip20-rgb-serit-led/", name: "RGB Şerit", note: "Kontrol ünitesi gerekir · 12V · IP20" },
  { href: "/urunler/cob-led-serit/ip20-rgb-cob-serit-led-576-led-mt/", name: "RGB COB · 576 LED/m", note: "Noktasız renk · 24V · IP20" },
];
const NEON: Urun[] = [
  { href: "/urunler/neon-led/10x10mm-flat-neon/", name: "10×10 mm Flat Neon", note: "10 W/m · 12V / 24V · IP67" },
  { href: "/urunler/neon-led/8x16mm-neon-led-24v/", name: "8×16 mm Neon LED", note: "Yüksek lümen · 24V · IP65" },
];

/** Şerit tipine ve iç/dış mekan seçimine göre önerilen ürünler ve kategori sayfası. */
export function seritUrunleri(
  preset: string,
  dis: boolean,
): { items: Urun[]; all: string; allLabel: string; subtitle?: string } | null {
  if (preset === "neon") return { items: NEON, all: "/urunler/neon-led/", allLabel: "Tüm neon LED'ler" };
  // Katalogda IP65 RGB şerit yok; dış mekan seçildiğinde bunu gizlemiyoruz.
  if (preset === "5050-rgb")
    return {
      items: RGB,
      all: "/urunler/led-serit/",
      allLabel: "Tüm LED şeritler",
      subtitle: dis ? "Bu RGB şeritler IP20 — dış mekan için teklifte belirtin" : undefined,
    };
  if (preset.startsWith("cob-"))
    return { items: dis ? COB_DIS : COB_IC, all: "/urunler/cob-led-serit/", allLabel: "Tüm COB şeritler" };
  if (!STRIP_PRESET_IDS.has(preset)) return null;
  return { items: dis ? SMD_DIS : SMD_IC, all: "/urunler/led-serit/", allLabel: "Tüm LED şeritler" };
}
