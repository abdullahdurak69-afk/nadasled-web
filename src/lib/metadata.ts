import type { Metadata } from "next";
import { SITE } from "@/lib/schema";

/**
 * Open Graph alanlarının ortak tabanı.
 *
 * Neden gerekiyor: Next.js metadata'yı segmentler arasında sığ birleştiriyor.
 * Bir sayfa `openGraph` tanımladığı anda layout'taki `openGraph` nesnesi
 * tümüyle düşüyor — siteName, locale ve type dahil. Bu yüzden ürün, kategori,
 * blog ve araç sayfalarında (82 sayfa) og:site_name / og:locale / og:type hiç
 * çıkmıyordu. Her sayfa kendi alanlarını bu tabanın üstüne yazıyor.
 */

export const DEFAULT_OG_IMAGE = {
  url: `${SITE}/images/og.jpg`,
  width: 1200,
  height: 630,
  alt: "Nadasled — Tabela Malzemeleri Toptan Tedarikçisi",
};

type OpenGraph = NonNullable<Metadata["openGraph"]>;

const OPEN_GRAPH_BASE = {
  type: "website",
  locale: "tr_TR",
  siteName: "Nadasled",
  images: [DEFAULT_OG_IMAGE],
} as const satisfies OpenGraph;

/** Sayfanın alanlarını ortak tabana ekler; aynı anahtar sayfanınkiyle ezilir. */
export function openGraph(fields: OpenGraph = {}): OpenGraph {
  return { ...OPEN_GRAPH_BASE, ...fields } as OpenGraph;
}
