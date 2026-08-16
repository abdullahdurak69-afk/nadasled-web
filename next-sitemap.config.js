/**
 * lastmod artık build anı değil, sayfanın gerçek son değişiklik tarihi.
 * Haritayı scripts/lastmod.mjs üretiyor ve next-sitemap'ten önce çalışıyor;
 * gerekçesi ve tarihlerin nereden geldiği o dosyanın başında yazılı.
 *
 * Dosya yoksa build'i düşürmek yerine lastmod'suz devam ediyoruz: eksik alan,
 * her URL'e yanlış tarih yazmaktan iyidir.
 */
let lastmodMap = {};
try {
  lastmodMap = require("./.lastmod.json");
} catch {
  console.warn("uyarı: .lastmod.json yok — sitemap lastmod alanı olmadan üretiliyor.");
}

/** Yolu haritada arar; bulunamazsa undefined döner ve alan hiç yazılmaz. */
const lastmodFor = (path) => {
  const withSlash = path.endsWith("/") ? path : `${path}/`;
  return lastmodMap[withSlash] ?? lastmodMap[path];
};

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.nadasled.com.tr",
  generateRobotsTxt: true,
  exclude: ["/apple-icon.png", "/icon.svg"],
  outDir: "./out",
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    const lastmod = lastmodFor(path);

    // changefreq/priority sayfa tipine göre; lastmod her dalda aynı kaynaktan.
    const entry = (changefreq, priority) => ({
      loc: path,
      changefreq,
      priority,
      ...(lastmod ? { lastmod } : {}),
    });

    if (path === "/") return entry("daily", 1.0);
    if (path === "/urunler/") return entry("weekly", 0.85);
    if (path.startsWith("/urunler/")) return entry("weekly", 0.9);
    // Araç sayfaları rakiplerde de sıralanan sorguları hedefliyor ve
    // dönüşüme en yakın içerik; blog yazılarının bir kademe üstünde.
    if (path === "/araclar/") return entry("weekly", 0.8);
    if (path.startsWith("/araclar/")) return entry("monthly", 0.85);
    if (path === "/blog/") return entry("weekly", 0.75);
    if (path.startsWith("/blog/")) return entry("monthly", 0.8);
    return entry(config.changefreq, config.priority);
  },
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      // Yapay zekâ tarayıcıları `*` grubu tarafından zaten kapsanıyor; bunlar
      // niyeti açıkça yazıyor. Faydası dokümantasyondan ibaret değil: bu
      // tokenlar ileride biri "AI'ya kapatalım" diye düşünürse kararın
      // görünür olmasını sağlıyor, ayrıca birkaç tarayıcı yalnızca kendi
      // adına yazılmış grubu okuyor.
      //
      // Arama/alıntı tarayıcıları — yanıtın içine kaynak olarak girmeyi sağlar
      { userAgent: "OAI-SearchBot", allow: "/" },   // ChatGPT arama
      { userAgent: "ChatGPT-User", allow: "/" },    // ChatGPT'nin canlı sayfa çekmesi
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },
      { userAgent: "Claude-SearchBot", allow: "/" },
      { userAgent: "Claude-User", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      // Model eğitimi / genel derlem — markanın modellerin bilgisine girmesi
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "CCBot", allow: "/" },           // Common Crawl
      { userAgent: "meta-externalagent", allow: "/" },
    ],
  },
  /**
   * llms.txt build zincirinde üretiliyor (scripts/llms-txt.mjs) ama robots.txt'nin
   * standart alanlarında karşılığı yok. Sitemap satırının yanına yorum olarak
   * yazmak, dosyayı arayan tarayıcının bakacağı tek yer olduğu için işe yarıyor.
   */
  transformRobotsTxt: async (_config, robotsTxt) =>
    `${robotsTxt.trimEnd()}\n\n# llms.txt — site özeti, kategoriler, rehberler ve SSS (düz metin)\n# https://www.nadasled.com.tr/llms.txt\n`,
};
