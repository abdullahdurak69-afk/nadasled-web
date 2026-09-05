/**
 * İç yolların tek kaynağı.
 *
 * Site `trailingSlash: true` ile statik export ediliyor — yani her sayfanın
 * gerçek adresi sonda slash'lı. Slash'sız bir iç link gereksiz bir 301
 * tetikler ve canonical sinyalini zayıflatır, bu yüzden buradaki her yol
 * sonda slash'lı yazılır.
 *
 * Header ve footer listeleri ayrı ayrı elle yazıldığında zamanla
 * tutarsızlaştığı için ikisi de bu dosyadaki aynı sabitlerden türetiliyor.
 * Yeni bir sayfa eklerken yolu ROUTES'a yaz, listeye oradan bağla.
 */

export const ROUTES = {
  home: "/",
  urunler: "/urunler/",
  markalar: "/markalar/",
  araclar: "/araclar/",
  blog: "/blog/",
  hakkimizda: "/hakkimizda/",
  iletisim: "/iletisim/",
} as const;

/** Kategori, ürün, blog yazısı ve araç sayfalarının yolu — slug'dan üretilir. */
export const categoryHref = (slug: string) => `${ROUTES.urunler}${slug}/`;
export const productHref = (categorySlug: string, slug: string) => `${ROUTES.urunler}${categorySlug}/${slug}/`;
export const blogHref = (slug: string) => `${ROUTES.blog}${slug}/`;
export const toolHref = (slug: string) => `${ROUTES.araclar}${slug}/`;

export type SiteLink = { href: string; label: string };

/** Header menüsü. `/urunler/` burada yok — kendi açılır kategori menüsü var. */
export const NAV_LINKS: SiteLink[] = [
  { href: ROUTES.araclar, label: "Araçlar" },
  { href: ROUTES.markalar, label: "Markalarımız" },
  { href: ROUTES.blog, label: "Blog" },
  { href: ROUTES.hakkimizda, label: "Hakkımızda" },
  { href: ROUTES.iletisim, label: "İletişim" },
];

/** Footer "Kurumsal" sütunu. Header'dan farklı olarak `/urunler/` de listelenir. */
export const FOOTER_LINKS: SiteLink[] = [
  { href: ROUTES.hakkimizda, label: "Hakkımızda" },
  { href: ROUTES.urunler, label: "Ürünler" },
  { href: ROUTES.markalar, label: "Markalarımız" },
  { href: ROUTES.araclar, label: "Hesaplama Araçları" },
  { href: ROUTES.blog, label: "Blog" },
  { href: ROUTES.iletisim, label: "İletişim" },
];
