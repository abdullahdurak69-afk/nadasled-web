/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.nadasled.com.tr",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    // Ana sayfa en yüksek öncelik
    if (path === "/") {
      return { loc: path, changefreq: "daily", priority: 1.0, lastmod: new Date().toISOString() };
    }
    // Ürün kategori sayfaları yüksek öncelik
    if (path.startsWith("/urunler/") && path !== "/urunler/") {
      return { loc: path, changefreq: "weekly", priority: 0.9, lastmod: new Date().toISOString() };
    }
    // Ürünler listesi
    if (path === "/urunler/") {
      return { loc: path, changefreq: "weekly", priority: 0.85, lastmod: new Date().toISOString() };
    }
    return { loc: path, changefreq: config.changefreq, priority: config.priority, lastmod: new Date().toISOString() };
  },
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
    ],
    additionalSitemaps: [
      "https://www.nadasled.com.tr/sitemap.xml",
    ],
  },
};
