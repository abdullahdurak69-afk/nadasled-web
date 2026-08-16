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

import { writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { ROOT, loadPosts, loadTools, loadProducts } from "./lib/content.mjs";

const BASE = "https://www.nadasled.com.tr";
const OUT = resolve(ROOT, "out/llms.txt");

const products = loadProducts();
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
