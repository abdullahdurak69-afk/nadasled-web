#!/usr/bin/env node
/**
 * CloudFront yönlendirme function'ının canlıda doğru çalıştığını doğrular.
 *
 * Neden gerekiyor: infra/cloudfront/redirects.js repodan deploy olmuyor, AWS
 * konsolundan elle bağlanıyor (bkz. infra/cloudfront/README.md). Kurulumun
 * tuttuğunu anlamanın tek yolu canlıyı yoklamak — bu script onu yapıyor.
 *
 * Kurulumdan sonra çalıştırın:  node scripts/verify-redirects.mjs
 *
 * Beklenen: her eski yol 301 döner ve Location tam olarak listedeki hedeftir.
 * Function bağlanmamışsa yollar 200 veya 404 döner ve script hepsini hata sayar.
 */

import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const HOST = "https://www.nadasled.com.tr";

const src = readFileSync(resolve(ROOT, "infra/cloudfront/redirects.js"), "utf8");
const table = src.split("var REDIRECTS = {")[1]?.split("\n};")[0] ?? "";
const rules = [...table.matchAll(/'(\/[^']*)':\s*'(\/[^']*)'/g)].map((m) => ({
  from: m[1],
  to: m[2],
}));

if (rules.length === 0) {
  console.error("redirects.js okunamadı — yönlendirme tablosu boş çıktı.");
  process.exit(1);
}

/** Tek bir isteği yönlendirmeyi izlemeden yapar. */
async function probe(url) {
  try {
    const res = await fetch(url, { redirect: "manual" });
    return { status: res.status, location: res.headers.get("location") };
  } catch (err) {
    return { status: 0, location: null, error: String(err) };
  }
}

const fails = [];
let ok = 0;

// non-www -> www kuralı, tablodan bağımsız olarak ayrıca sınanır.
const rootProbe = await probe("https://nadasled.com.tr/");
if (rootProbe.status === 301 && rootProbe.location === `${HOST}/`) {
  ok++;
} else {
  fails.push({
    from: "nadasled.com.tr/ (non-www kuralı)",
    beklenen: `301 -> ${HOST}/`,
    gelen: `${rootProbe.status}${rootProbe.location ? ` -> ${rootProbe.location}` : ""}`,
  });
}

for (const { from, to } of rules) {
  const { status, location } = await probe(`${HOST}${from}`);
  const expected = `${HOST}${to}`;
  if (status === 301 && location === expected) {
    ok++;
  } else {
    fails.push({
      from,
      beklenen: `301 -> ${expected}`,
      gelen: `${status}${location ? ` -> ${location}` : ""}`,
    });
  }
}

const total = rules.length + 1;
if (fails.length === 0) {
  console.log(`Tamam — ${total} kuralın hepsi doğru çalışıyor.`);
} else {
  console.log(`${ok}/${total} kural doğru, ${fails.length} kural hatalı:\n`);
  for (const f of fails) {
    console.log(`  ${f.from}`);
    console.log(`     beklenen: ${f.beklenen}`);
    console.log(`     gelen:    ${f.gelen}\n`);
  }
  // Kurulumdan sonra çalıştırıldığında hatalı çıkması gerçek bir sorundur.
  process.exitCode = 1;
}
