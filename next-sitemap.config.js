/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.nadasled.com.tr",
  generateRobotsTxt: true,
  exclude: ["/apple-icon.png", "/icon.svg"],
  outDir: "./out",
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    if (path === "/") {
      return { loc: path, changefreq: "daily", priority: 1.0, lastmod: new Date().toISOString() };
    }
    if (path.startsWith("/urunler/") && path !== "/urunler/") {
      return { loc: path, changefreq: "weekly", priority: 0.9, lastmod: new Date().toISOString() };
    }
    if (path === "/urunler/") {
      return { loc: path, changefreq: "weekly", priority: 0.85, lastmod: new Date().toISOString() };
    }
    // Araç sayfaları rakiplerde de sıralanan sorguları hedefliyor ve
    // dönüşüme en yakın içerik; blog yazılarının bir kademe üstünde.
    if (path.startsWith("/araclar/") && path !== "/araclar/") {
      return { loc: path, changefreq: "monthly", priority: 0.85, lastmod: new Date().toISOString() };
    }
    if (path === "/araclar/") {
      return { loc: path, changefreq: "weekly", priority: 0.8, lastmod: new Date().toISOString() };
    }
    if (path.startsWith("/blog/") && path !== "/blog/") {
      return { loc: path, changefreq: "monthly", priority: 0.8, lastmod: new Date().toISOString() };
    }
    if (path === "/blog/") {
      return { loc: path, changefreq: "weekly", priority: 0.75, lastmod: new Date().toISOString() };
    }
    return { loc: path, changefreq: config.changefreq, priority: config.priority, lastmod: new Date().toISOString() };
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
