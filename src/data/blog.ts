// Blog rehber içerikleri — SEO long-tail hedefli.
// Paragraflarda [metin](/yol) biçiminde iç link desteklenir (blog sayfası parse eder).
//
// Yazı gövdeleri uzun olduğu için her yazı ./posts altında kendi dosyasında
// durur; bu dosya yalnızca tipleri, sıralı listeyi ve yardımcıları tutar.

import { ledTrafoHesaplama } from "./posts/led-trafo-hesaplama";
import { kutuHarfIcinLedModulSecimi } from "./posts/kutu-harf-icin-led-modul-secimi";
import { neonFlexSecimVeMontaj } from "./posts/neon-flex-secim-ve-montaj";
import { cobVsSmdLedSerit } from "./posts/cob-vs-smd-led-serit";
import { ledSeritWattVeTrafoSecimi } from "./posts/led-serit-watt-ve-trafo-secimi";
import { tabelaYapimindaKullanilanMalzemeler } from "./posts/tabela-yapiminda-kullanilan-malzemeler";
import { onikiVoltMuYirmidortVoltMu } from "./posts/12v-mu-24v-mu-tabela-aydinlatma";
import { isikliTabelaMaliyeti } from "./posts/isikli-tabela-maliyeti";
import { lightBoxLedSecimi } from "./posts/light-box-led-secimi";
import { rgbLedKontrolUnitesiSecimi } from "./posts/rgb-led-kontrol-unitesi-secimi";
import { powerLedSurucuSecimi } from "./posts/power-led-surucu-secimi";
import { ip65MiIp67Mi } from "./posts/ip65-mi-ip67-mi-tabela-led";
import { ledSeritVoltajDusumu } from "./posts/led-serit-voltaj-dusumu";
import { pointLedNedir } from "./posts/point-led-nedir";
import { kesitAydinlatmaLedRehberi } from "./posts/kesit-aydinlatma-led-rehberi";

// Blok ve SSS tipleri araç sayfalarıyla ortaktır; ./content içinde durur.
// Mevcut import'lar bozulmasın diye buradan yeniden dışa veriliyor.
export type { Block, FaqItem } from "./content";
import type { Block, FaqItem } from "./content";

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDesc: string;
  excerpt: string;
  date: string; // ISO
  /**
   * Gövde baştan yazıldıysa son güncelleme tarihi (ISO). Yalnızca ilk yayın
   * tarihinden farklıysa doldurulur; schema'daki dateModified bunu kullanır.
   */
  updated?: string;
  readMins: number;
  categorySlug: string; // ilgili ürün kategorisi
  categoryName: string;
  blocks: Block[];
  /** Yazı sonunda gösterilir ve FAQPage schema'sına dönüşür. */
  faq?: FaqItem[];
}

// Sıra hem blog listesinin görünen sırası hem de getRelatedPosts'un dairesel
// iç link zinciri. Yeni yazılar sona eklenmiyor, eskilerin arasına
// serpiştiriliyor: böylece liste sayfası tek konuda kümelenmiyor ve iç linkler
// eski-yeni arasında dolaşıyor.
export const posts: BlogPost[] = [
  ledTrafoHesaplama,
  kutuHarfIcinLedModulSecimi,
  isikliTabelaMaliyeti,
  neonFlexSecimVeMontaj,
  ledSeritVoltajDusumu,
  cobVsSmdLedSerit,
  ledSeritWattVeTrafoSecimi,
  lightBoxLedSecimi,
  tabelaYapimindaKullanilanMalzemeler,
  ip65MiIp67Mi,
  onikiVoltMuYirmidortVoltMu,
  rgbLedKontrolUnitesiSecimi,
  powerLedSurucuSecimi,
  pointLedNedir,
  kesitAydinlatmaLedRehberi,
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

/**
 * Bir ürün kategorisi sayfasında gösterilecek rehber yazıları.
 *
 * Önce o kategoriye ait yazılar (categorySlug eşleşmesi), sonra listeyi
 * `limit`e tamamlamak için en yeni diğer yazılar gelir. Tamamlama kasıtlı:
 * 14 kategorinin yalnızca 5'inde eşleşen yazı var; tamamlama olmasa 9 kategori
 * blog'a hiç link vermez ve yazıların bir kısmı iç linksiz kalırdı.
 */
export function getPostsForCategory(categorySlug: string, limit = 3) {
  const byDate = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const matching = byDate.filter((p) => p.categorySlug === categorySlug);
  const rest = byDate.filter((p) => p.categorySlug !== categorySlug);
  return [...matching, ...rest].slice(0, limit);
}

/**
 * Bir yazının altında gösterilecek diğer rehberler.
 *
 * Listeden ilk N yazıyı almak yerine dairesel ilerler: her yazı kendisinden
 * sonraki yazılara link verir. Böylece iç linkler tüm yazılara eşit dağılır —
 * sabit dilimlemede listenin sonundaki yazılar hiç link almıyordu.
 */
export function getRelatedPosts(slug: string, limit = 3) {
  const i = posts.findIndex((p) => p.slug === slug);
  if (i === -1) return posts.slice(0, limit);
  const rotated = [...posts.slice(i + 1), ...posts.slice(0, i)];
  return rotated.slice(0, limit);
}
