#!/usr/bin/env node
/**
 * .lastmod.json üretir — sitemap'teki her URL'in gerçek son değişiklik tarihi.
 *
 * Neden gerekiyor: next-sitemap'in transform'u eskiden her URL'e
 * `new Date().toISOString()` yazıyordu, yani build anını. Sonuç olarak her
 * deploy'da 40 URL'in kırkı birden "az önce değişti" diyordu. Google lastmod'u
 * tutarlı biçimde yanlış bulduğu sitelerde alanı tümden dikkate almayı
 * bırakıyor; bu haliyle sitemap "şu üç sayfa yeni, diğerleri aynı" bilgisini
 * hiç veremiyordu.
 *
 * Tarih kaynağı, sayfanın içeriğini gerçekten üreten şey:
 *   /blog/<slug>    → yazının updated ?? date alanı
 *   /araclar/<slug> → aracın updated alanı
 *   /urunler/<slug> → products.json'ın son commit tarihi
 *   liste sayfaları → altındaki en yeni içeriğin tarihi
 *   sabit sayfalar  → kendi page.tsx'inin son commit tarihi
 *
 * Şablon/şema değişiklikleri bilerek tarihi ilerletmiyor: Google lastmod'un
 * anlamlı içerik değişikliğini göstermesini bekliyor, layout düzenlemesini
 * değil. Bu yüzden layout.tsx gibi her sayfayı etkileyen dosyalara bakılmıyor.
 *
 * Build zincirinde next-sitemap'ten ÖNCE çalışır (npm run build).
 */

import { writeFileSync, readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { execFileSync } from "node:child_process";
import { ROOT, loadPosts, loadTools, loadProducts } from "./lib/content.mjs";

const OUT = resolve(ROOT, ".lastmod.json");

/**
 * Bir önceki çıktı depoda duruyor ve git'e ulaşılamadığında yedek görevi
 * görüyor. Amplify gibi ortamlarda derin olmayan clone yüzünden `git log` boş
 * dönebiliyor; o durumda tarihi düşürmek yerine son bilinen değeri koruyoruz.
 * Git çalıştığında sonuç birebir aynı olduğu için dosya kendini tekrar üretir.
 */
const previous = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")) : {};

/** Bir dosyanın son commit tarihi (YYYY-MM-DD). Git yoksa null. */
function gitDate(relPath) {
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cs", "--", relPath], {
      cwd: ROOT,
      encoding: "utf8",
    }).trim();
    return out || null;
  } catch {
    return null;
  }
}

const posts = await loadPosts();
const tools = loadTools();
const products = loadProducts();

/** İki ISO tarihten yeni olanı. */
const newest = (dates) => dates.filter(Boolean).sort().at(-1) ?? null;

const map = {};

// Yazılar: gövde baştan yazıldıysa updated, yoksa ilk yayın tarihi.
for (const p of posts) map[`/blog/${p.slug}/`] = p.updated ?? p.date;

// Araçlar: kendi updated alanları zaten "aracın son güncellenme tarihi".
for (const t of tools) map[`/araclar/${t.slug}/`] = t.updated ?? null;

// Kategoriler: metinleri products.json'da duruyor, tarihi de oradan gelir.
const productsDate = gitDate("src/data/products.json") ?? previous["/urunler/"];
for (const c of products) map[`/urunler/${c.slug}/`] = productsDate;

// Liste sayfaları, altlarındaki en yeni içerik kadar tazedir.
map["/blog/"] = newest(posts.map((p) => p.updated ?? p.date));
map["/araclar/"] = newest(tools.map((t) => t.updated));
map["/urunler/"] = productsDate;

// Sabit sayfalar: içerikleri doğrudan kendi dosyalarında.
const pageDate = (file, url) => gitDate(file) ?? previous[url];
map["/"] = newest([pageDate("src/app/page.tsx", "/"), productsDate]);
map["/hakkimizda/"] = pageDate("src/app/hakkimizda/page.tsx", "/hakkimizda/");
map["/iletisim/"] = pageDate("src/app/iletisim/page.tsx", "/iletisim/");
map["/markalar/"] = pageDate("src/app/markalar/page.tsx", "/markalar/");

const missing = Object.entries(map).filter(([, d]) => !d).map(([u]) => u);
if (missing.length) {
  // Yanlış tarih yazmaktansa alanı hiç yazmamak yeğdir; transform bunları atlar.
  console.warn(`uyarı: tarihi çözülemeyen ${missing.length} yol → ${missing.join(", ")}`);
  for (const u of missing) delete map[u];
}

writeFileSync(OUT, `${JSON.stringify(map, null, 2)}\n`, "utf8");

const spread = [...new Set(Object.values(map))].sort();
console.log(
  `.lastmod.json yazıldı — ${Object.keys(map).length} yol, ${spread.length} farklı tarih ` +
    `(${spread[0]} … ${spread.at(-1)}).`
);
