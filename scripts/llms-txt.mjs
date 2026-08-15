#!/usr/bin/env node
/**
 * out/llms.txt üretir — dil modellerinin (ChatGPT, Perplexity, Claude) siteyi
 * tek istekte kavraması için düz metin site haritası.
 *
 * products.json ve blog.ts'den türetilir; elle güncellenmez, böylece katalog
 * değiştiğinde llms.txt ile site arasında drift oluşmaz.
 *
 * Build zincirinde next-sitemap'ten sonra çalışır (npm run build).
 */

import { writeFileSync, existsSync, readFileSync, readdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const BASE = "https://www.nadasled.com.tr";
const OUT = resolve(ROOT, "out/llms.txt");

const products = JSON.parse(
  readFileSync(resolve(ROOT, "src/data/products.json"), "utf8")
);

/**
 * Yazılar src/data/posts altında dosya başına bir yazı olarak durur.
 *
 * Önce Node'un tip sıyırma desteğiyle import denenir (Node 22.18+); uzantısız
 * relative import'lar ESM'de çözülmediği için bu genelde başarısız olur ve
 * ihtiyacımız olan dört alanı doğrudan kaynaktan okuruz. Sıralama sitedeki
 * blog listesiyle aynı olsun diye tarihe göre yeniden eskiye yapılır.
 */
async function loadPosts() {
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

    // faq: [{ q: "...", a: "..." }, ...] — yazı sonundaki SSS bloğu.
    const faqSrc = src.split(/^\s{2}faq:\s*\[/m)[1] ?? "";
    const faq = [...faqSrc.matchAll(/q:\s*\n?\s*"((?:[^"\\]|\\.)*)",\s*\n?\s*a:\s*\n?\s*"((?:[^"\\]|\\.)*)",/g)].map(
      (m) => ({ q: m[1], a: m[2] })
    );

    if (slug && title && excerpt) posts.push({ slug, title, excerpt, date: date ?? "", faq });
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
function loadTools() {
  const src = readFileSync(resolve(ROOT, "src/data/tools.ts"), "utf8");
  const body = src.split("export const tools: Tool[] = [")[1]?.split("\nexport function ")[0] ?? "";
  const field = (chunk, name) =>
    chunk.match(new RegExp(`^\\s{4}${name}:\\s*\\n?\\s*"((?:[^"\\\\]|\\\\.)*)",`, "m"))?.[1];

  const tools = [];
  for (const part of body.split(/\n {4}slug: "/).slice(1)) {
    const slug = part.slice(0, part.indexOf('"'));
    const title = field(part, "title");
    const excerpt = field(part, "excerpt");

    const faqSrc = part.split(/^\s{4}faq:\s*\[/m)[1] ?? "";
    const faq = [...faqSrc.matchAll(/q:\s*\n?\s*"((?:[^"\\]|\\.)*)",\s*\n?\s*a:\s*\n?\s*"((?:[^"\\]|\\.)*)",/g)].map(
      (m) => ({ q: m[1], a: m[2] })
    );

    if (slug && title && excerpt) tools.push({ slug, title, excerpt, faq });
  }
  if (tools.length === 0) {
    throw new Error("src/data/tools.ts okunamadı — araç listesi boş çıktı");
  }
  return tools;
}

const posts = await loadPosts();
const toolList = loadTools();

const lines = [];
const push = (s = "") => lines.push(s);

push("# Nadasled — Tabela Malzemeleri Toptan Tedarikçisi");
push();
push(
  "> İstanbul merkezli, 2016'dan beri tabela ve reklam sektörüne LED modül, LED şerit, " +
    "neon LED, trafo ve yardımcı ekipman tedarik eden toptancı. Tabelacılara, reklam " +
    "ajanslarına ve uygulamacılara faturalı toptan satış; Türkiye geneli kargo. " +
    "Fiyatlar proje bazlı verildiği için site üzerinde liste fiyatı yayınlanmaz — " +
    "teklif WhatsApp veya telefonla alınır."
);
push();
push("- Kuruluş: 2016, İstanbul");
push(`- Kategori sayısı: ${products.length}`);
push(
  `- Ürün çeşidi: ${products.reduce((n, c) => n + c.products.length, 0)}+`
);
push("- Markalar: Samsung, OSRAM, MEAN WELL, Inventronics, WAGO");
push("- Sertifikalar: CE, RoHS");
push("- Teklif: WhatsApp +90 541 469 69 66");
push();

push("## Ürün kategorileri");
push();
for (const c of products) {
  push(`- [${c.name}](${BASE}/urunler/${c.slug}/): ${c.shortDesc}`);
}
push();

push("## Hesaplama araçları");
push();
push(
  "Ücretsiz, kayıt gerektirmeyen hesap makineleri. Hesap adımları sonucun " +
    "altında gösterilir; sonuç doğrudan WhatsApp teklif mesajına çevrilebilir."
);
push();
for (const t of toolList) {
  push(`- [${t.title}](${BASE}/araclar/${t.slug}/): ${t.excerpt}`);
}
push();

push("## Rehber içerikleri");
push();
for (const p of posts) {
  push(`- [${p.title}](${BASE}/blog/${p.slug}/): ${p.excerpt}`);
}
push();

push("## Sık sorulan teknik sorular");
push();
for (const c of products) {
  for (const f of c.faq ?? []) {
    push(`### ${f.q}`);
    push(f.a);
    push(`Kaynak: ${BASE}/urunler/${c.slug}/`);
    push();
  }
}
for (const p of posts) {
  for (const f of p.faq ?? []) {
    push(`### ${f.q}`);
    push(f.a);
    push(`Kaynak: ${BASE}/blog/${p.slug}/`);
    push();
  }
}
for (const t of toolList) {
  for (const f of t.faq ?? []) {
    push(`### ${f.q}`);
    push(f.a);
    push(`Kaynak: ${BASE}/araclar/${t.slug}/`);
    push();
  }
}

push("## Diğer sayfalar");
push();
push(`- [Tüm ürünler](${BASE}/urunler/)`);
push(`- [Markalarımız](${BASE}/markalar/)`);
push(`- [Hakkımızda](${BASE}/hakkimizda/)`);
push(`- [İletişim](${BASE}/iletisim/)`);
push(`- [Blog](${BASE}/blog/)`);
push(`- [Hesaplama araçları](${BASE}/araclar/)`);
push();

if (!existsSync(resolve(ROOT, "out"))) {
  console.error("out/ dizini yok — önce `next build` çalıştırın.");
  process.exit(1);
}

const content = lines.join("\n");
writeFileSync(OUT, content, "utf8");
console.log(
  `out/llms.txt yazıldı — ${products.length} kategori, ${posts.length} yazı, ${toolList.length} araç, ` +
    `${
      products.reduce((n, c) => n + (c.faq?.length ?? 0), 0) +
      posts.reduce((n, p) => n + (p.faq?.length ?? 0), 0) +
      toolList.reduce((n, t) => n + (t.faq?.length ?? 0), 0)
    } SSS, ` +
    `${content.length} karakter.`
);
