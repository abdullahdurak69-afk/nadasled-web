#!/usr/bin/env node
/**
 * infra/cloudfront/redirects.js'teki kural tablosunu Amplify Hosting'in
 * "Rewrites and redirects" ekranının kabul ettiği JSON'a çevirir.
 *
 * Neden gerekiyor: site Amplify Hosting'te duruyor ve önündeki CloudFront
 * dağıtımı Amplify'a ait — müşterinin CloudFront konsolunda görünmüyor, dolayısıyla
 * ona bir CloudFront Function bağlanamıyor (2 Eylül 2026'da doğrulandı:
 * Distributions listesi boş, www CNAME'i d2zquvgsei0152.cloudfront.net).
 * Kuralların tek uygulanabilir yeri Amplify konsolu.
 *
 * Tablo tek kaynakta (redirects.js) kalıyor; bu script yalnızca biçim çeviriyor.
 * Böylece iki liste birbirinden sapmıyor.
 *
 * Çalıştırma:  node scripts/amplify-redirects.mjs
 * Çıktı:       infra/amplify/redirects.json
 */

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = resolve(ROOT, "infra/cloudfront/redirects.js");
const OUT_DIR = resolve(ROOT, "infra/amplify");
const OUT = resolve(OUT_DIR, "redirects.json");

const src = readFileSync(SRC, "utf8");
const table = src.split("var REDIRECTS = {")[1]?.split("\n};")[0] ?? "";
const rules = [...table.matchAll(/'(\/[^']*)':\s*'(\/[^']*)'/g)].map((m) => ({
  from: m[1],
  to: m[2],
}));

if (rules.length === 0) {
  console.error(`${SRC} okunamadı — kural tablosu boş çıktı.`);
  process.exit(1);
}

/**
 * Amplify kaynak yolları birebir eşleşir; CloudFront function'ındaki gibi
 * sondaki slash'ı kendisi yok saymaz. Google eski bağlantıları hem slash'lı hem
 * slash'sız biçimde tarayabildiği için her kural iki kayıt olarak yazılıyor.
 */
const entries = [];
for (const { from, to } of rules) {
  for (const source of [from, `${from}/`]) {
    entries.push({ source, target: to, status: "301", condition: null });
  }
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT, `${JSON.stringify(entries, null, 2)}\n`, "utf8");

console.log(
  `infra/amplify/redirects.json yazıldı — ${rules.length} kuraldan ${entries.length} kayıt ` +
    `(her kural slash'lı ve slash'sız).`
);
