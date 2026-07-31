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

import { writeFileSync, existsSync, readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const BASE = "https://www.nadasled.com.tr";
const OUT = resolve(ROOT, "out/llms.txt");

const products = JSON.parse(
  readFileSync(resolve(ROOT, "src/data/products.json"), "utf8")
);

/**
 * blog.ts TypeScript olduğu için önce Node'un tip sıyırma desteğiyle import
 * denenir (Node 22.18+). Build ortamı daha eski bir Node kullanıyorsa import
 * patlar; o durumda ihtiyacımız olan üç alanı kaynaktan okuruz.
 */
async function loadPosts() {
  try {
    const mod = await import(resolve(ROOT, "src/data/blog.ts"));
    if (mod.posts?.length) return mod.posts;
  } catch {
    // eski Node — aşağıdaki yedeğe düş
  }

  const src = readFileSync(resolve(ROOT, "src/data/blog.ts"), "utf8");
  const field = (block, name) =>
    block.match(new RegExp(`${name}:\\s*\\n?\\s*"((?:[^"\\\\]|\\\\.)*)"`))?.[1];

  const posts = [];
  for (const m of src.matchAll(/\n  \{\n\s*slug: "([^"]+)"/g)) {
    const block = src.slice(m.index, m.index + 2000);
    const title = field(block, "title");
    const excerpt = field(block, "excerpt");
    if (title && excerpt) posts.push({ slug: m[1], title, excerpt });
  }
  if (posts.length === 0) {
    throw new Error("blog.ts okunamadı — ne import ne de metin ayrıştırma çalıştı");
  }
  return posts;
}

const posts = await loadPosts();

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

push("## Diğer sayfalar");
push();
push(`- [Tüm ürünler](${BASE}/urunler/)`);
push(`- [Markalarımız](${BASE}/markalar/)`);
push(`- [Hakkımızda](${BASE}/hakkimizda/)`);
push(`- [İletişim](${BASE}/iletisim/)`);
push(`- [Blog](${BASE}/blog/)`);
push();

if (!existsSync(resolve(ROOT, "out"))) {
  console.error("out/ dizini yok — önce `next build` çalıştırın.");
  process.exit(1);
}

const content = lines.join("\n");
writeFileSync(OUT, content, "utf8");
console.log(
  `out/llms.txt yazıldı — ${products.length} kategori, ${posts.length} yazı, ` +
    `${products.reduce((n, c) => n + (c.faq?.length ?? 0), 0)} SSS, ${content.length} karakter.`
);
