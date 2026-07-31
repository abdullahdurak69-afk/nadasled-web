#!/usr/bin/env node
/**
 * Canlı sitemap'teki URL'leri IndexNow'a bildirir (Bing, Yandex, Naver ve
 * IndexNow'u destekleyen diğer motorlar aynı anda haberdar olur).
 *
 * ChatGPT'nin arama katmanı Bing indeksine dayandığı için Bing'in sayfaları
 * hızlı görmesi doğrudan ChatGPT görünürlüğünü etkiler.
 *
 * ÖNEMLİ: Deploy'dan SONRA çalıştırın. Script canlı sitemap'i okur; deploy
 * öncesi çalıştırılırsa motorlar eski içeriği tarar.
 *
 *   npm run indexnow            # bildir
 *   npm run indexnow -- --dry   # sadece göster, istek atma
 */

const HOST = "www.nadasled.com.tr";
const KEY = "a5aa032732b574b4cfa9d656351589c2";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP = `https://${HOST}/sitemap.xml`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

const dryRun = process.argv.includes("--dry");

async function fetchText(url) {
  const res = await fetch(url, { headers: { "user-agent": "nadasled-indexnow" } });
  if (!res.ok) throw new Error(`${url} -> HTTP ${res.status}`);
  return res.text();
}

function extractLocs(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

/** sitemap.xml bir sitemapindex ise alt sitemap'leri de açar. */
async function collectUrls() {
  const root = await fetchText(SITEMAP);
  const locs = extractLocs(root);
  if (!/<sitemapindex/i.test(root)) return locs;

  const urls = [];
  for (const child of locs) {
    urls.push(...extractLocs(await fetchText(child)));
  }
  return urls;
}

async function main() {
  // Anahtar dosyası canlıda erişilebilir olmalı, yoksa IndexNow isteği reddeder.
  // Henüz deploy edilmemişse --dry ile yine de sitemap okunabilsin diye uyarıya düşürüyoruz.
  try {
    const liveKey = (await fetchText(KEY_LOCATION)).trim();
    if (liveKey !== KEY) {
      throw new Error(`içerik "${liveKey}", beklenen "${KEY}"`);
    }
  } catch (err) {
    const msg = `Anahtar dosyası doğrulanamadı (${KEY_LOCATION}): ${err.message}`;
    if (!dryRun) throw new Error(msg);
    console.warn("UYARI: " + msg + "\n");
  }

  const urlList = await collectUrls();
  if (urlList.length === 0) throw new Error("Sitemap'te URL bulunamadı");

  console.log(`${urlList.length} URL bulundu:`);
  for (const u of urlList) console.log("  " + u);

  if (dryRun) {
    console.log("\n--dry verildi, istek atılmadı.");
    return;
  }

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  });

  // IndexNow başarıda 200 veya 202 döner; gövde genelde boştur.
  const body = await res.text();
  if (res.ok) {
    console.log(`\nIndexNow kabul etti (HTTP ${res.status}).`);
  } else {
    console.error(`\nIndexNow reddetti (HTTP ${res.status}): ${body}`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("Hata:", err.message);
  process.exit(1);
});
