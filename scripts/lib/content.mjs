/**
 * Blog yazılarını ve hesaplama araçlarını build script'lerinin okuyabileceği
 * biçimde çıkarır.
 *
 * Neden ayrı bir modül: hem llms-txt.mjs hem lastmod.mjs aynı veriye ihtiyaç
 * duyuyor ve ikisi de Node'dan çalışıyor. Ayrıştırma tek yerde durmazsa iki
 * kopya birbirinden sapar ve llms.txt ile sitemap farklı yazı listeleri
 * üretmeye başlar.
 *
 * Ayrıştırma neden regex ile: veri dosyaları TypeScript ve uzantısız relative
 * import kullanıyor; Node'un tip sıyırma desteği bunları çözemediği için
 * doğrudan import genelde başarısız oluyor. Önce yine de import denenir,
 * olmazsa kaynaktan ihtiyacımız olan alanlar okunur.
 */

import { readFileSync, readdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..");

/**
 * Yazılar src/data/posts altında dosya başına bir yazı olarak durur.
 * Sıralama sitedeki blog listesiyle aynı olsun diye tarihe göre yeniden
 * eskiye yapılır.
 */
export async function loadPosts() {
  try {
    const mod = await import(resolve(ROOT, "src/data/blog.ts"));
    if (mod.posts?.length) return mod.posts;
  } catch {
    // uzantısız import veya eski Node — aşağıdaki yedeğe düş
  }

  const dir = resolve(ROOT, "src/data/posts");
  const field = (src, name) =>
    src.match(new RegExp(`^\\s{2}${name}:\\s*\\n?\\s*"((?:[^"\\\\]|\\\\.)*)",`, "m"))?.[1];

  const posts = [];
  for (const file of readdirSync(dir).filter((f) => f.endsWith(".ts"))) {
    const src = readFileSync(resolve(dir, file), "utf8");
    const slug = field(src, "slug");
    const title = field(src, "title");
    const excerpt = field(src, "excerpt");
    const date = field(src, "date");
    const updated = field(src, "updated");

    // faq: [{ q: "...", a: "..." }, ...] — yazı sonundaki SSS bloğu.
    const faqSrc = src.split(/^\s{2}faq:\s*\[/m)[1] ?? "";
    const faq = [...faqSrc.matchAll(/q:\s*\n?\s*"((?:[^"\\]|\\.)*)",\s*\n?\s*a:\s*\n?\s*"((?:[^"\\]|\\.)*)",/g)].map(
      (m) => ({ q: m[1], a: m[2] })
    );

    if (slug && title && excerpt) posts.push({ slug, title, excerpt, date: date ?? "", updated, faq });
  }
  if (posts.length === 0) {
    throw new Error(`${dir} okunamadı — ne import ne de metin ayrıştırma çalıştı`);
  }
  posts.sort((a, b) => b.date.localeCompare(a.date));
  return posts;
}

/**
 * Hesaplama araçları tek dosyada, bir dizi içinde durur (src/data/tools.ts).
 *
 * Yazılardaki gibi dosya başına bir kayıt olmadığı için dizi `slug:` satırından
 * bölünüp her parça ayrı ayrı okunur. Alanlar dizi içinde olduğu için girinti
 * yazılardakinden bir kademe fazladır (4 boşluk).
 */
export function loadTools() {
  const src = readFileSync(resolve(ROOT, "src/data/tools.ts"), "utf8");
  const body = src.split("export const tools: Tool[] = [")[1]?.split("\nexport function ")[0] ?? "";
  const field = (chunk, name) =>
    chunk.match(new RegExp(`^\\s{4}${name}:\\s*\\n?\\s*"((?:[^"\\\\]|\\\\.)*)",`, "m"))?.[1];

  const tools = [];
  for (const part of body.split(/\n {4}slug: "/).slice(1)) {
    const slug = part.slice(0, part.indexOf('"'));
    const title = field(part, "title");
    const excerpt = field(part, "excerpt");
    const updated = field(part, "updated");

    const faqSrc = part.split(/^\s{4}faq:\s*\[/m)[1] ?? "";
    const faq = [...faqSrc.matchAll(/q:\s*\n?\s*"((?:[^"\\]|\\.)*)",\s*\n?\s*a:\s*\n?\s*"((?:[^"\\]|\\.)*)",/g)].map(
      (m) => ({ q: m[1], a: m[2] })
    );

    if (slug && title && excerpt) tools.push({ slug, title, excerpt, updated, faq });
  }
  if (tools.length === 0) {
    throw new Error("src/data/tools.ts okunamadı — araç listesi boş çıktı");
  }
  return tools;
}

/**
 * Tekil ürün sayfaları (src/data/items.ts). Araçlarla aynı biçimde tek dosyada
 * bir dizi olarak durduğu için ayrıştırma da aynı: dizi `slug:` satırından
 * bölünür, alanlar 4 boşluk girintiyle okunur.
 *
 * items.ts'te tarihler bilerek düz metin yazılır (ortak bir sabite referans
 * verilmez) — buradaki metin ayrıştırma sabit referansını çözemez.
 */
export function loadItems() {
  const src = readFileSync(resolve(ROOT, "src/data/items.ts"), "utf8");
  const body = src.split("export const items: ItemPage[] = [")[1]?.split("\nexport function ")[0] ?? "";
  const field = (chunk, name) =>
    chunk.match(new RegExp(`^\\s{4}${name}:\\s*\\n?\\s*"((?:[^"\\\\]|\\\\.)*)",`, "m"))?.[1];

  const items = [];
  for (const part of body.split(/\n {4}slug: "/).slice(1)) {
    const slug = part.slice(0, part.indexOf('"'));
    const categorySlug = field(part, "categorySlug");
    const name = field(part, "name");
    const intro = field(part, "intro");
    const updated = field(part, "updated");

    const faqSrc = part.split(/^\s{4}faq:\s*\[/m)[1] ?? "";
    // Kapanış virgülü aranmıyor: items.ts'te SSS kayıtları tek satır
    // ({ q: "…", a: "…" },) ve son tırnaktan sonra boşluk geliyor.
    const faq = [...faqSrc.matchAll(/q:\s*\n?\s*"((?:[^"\\]|\\.)*)",\s*\n?\s*a:\s*\n?\s*"((?:[^"\\]|\\.)*)"/g)].map(
      (m) => ({ q: m[1], a: m[2] })
    );

    if (slug && categorySlug && name) items.push({ slug, categorySlug, name, intro, updated, faq });
  }
  if (items.length === 0) {
    throw new Error("src/data/items.ts okunamadı — ürün sayfası listesi boş çıktı");
  }
  return items;
}

export function loadProducts() {
  return JSON.parse(readFileSync(resolve(ROOT, "src/data/products.json"), "utf8"));
}
