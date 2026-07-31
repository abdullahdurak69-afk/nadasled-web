// CloudFront Function — viewer request
// Runtime: cloudfront-js-2.0
//
// İki iş yapar:
//   1. nadasled.com.tr  ->  www.nadasled.com.tr  (301)
//   2. Eski WordPress ve kaldırılmış kategori URL'lerini yeni karşılıklarına 301'ler
//
// Yönlendirme listesi web.archive.org CDX arşivinden çıkarılan gerçek eski URL
// yapısına dayanır (2022–2025 WordPress sitesi), tahmine değil.
//
// DİKKAT: Bir dağıtımın viewer-request olayına yalnızca TEK bir function
// bağlanabilir. Dağıtımda hâlihazırda bir viewer-request function varsa
// (ör. dizin isteklerine index.html ekleyen bir function) bu kodu onunla
// birleştirin, üzerine yazmayın.

var HOST = 'www.nadasled.com.tr';

// Eski yol -> yeni yol. Anahtarlar sondaki slash olmadan, küçük harf.
var REDIRECTS = {
  // --- Kaldırılmış kategoriler (Haziran 2026 katalog yeniden yapılandırması) ---
  '/urunler/kablo': '/urunler/yardimci-urunler/',
  '/urunler/aksesuar': '/urunler/yardimci-urunler/',

  // --- Eski WordPress kategori sayfaları ---
  '/modul-led': '/urunler/led-modul/',
  '/modul-led/page/2': '/urunler/led-modul/',
  '/category/modul-led': '/urunler/led-modul/',
  '/serit-led': '/urunler/led-serit/',
  '/category/serit-led': '/urunler/led-serit/',
  '/neon-led': '/urunler/neon-led/',
  '/category/neon-led': '/urunler/neon-led/',
  '/nds-neon-led-urunleri': '/urunler/neon-led/',
  '/kablo': '/urunler/yardimci-urunler/',
  '/category/kablo': '/urunler/yardimci-urunler/',
  '/bakir-kablo-nyaf': '/urunler/yardimci-urunler/',
  '/led-bar': '/urunler/kesit-aydinlatma-led/',
  '/category/led-bar': '/urunler/kesit-aydinlatma-led/',
  '/kesit-aydinlatma-led-bar': '/urunler/kesit-aydinlatma-led/',
  '/15-watt-kesit-aydinlatma': '/urunler/kesit-aydinlatma-led/',
  '/rgb-kontrol-cihazlari': '/urunler/led-kontrol-uniteleri/',
  '/rgb-kontrol-cihazlar': '/urunler/led-kontrol-uniteleri/',
  '/category/rgb-kontrol-cihazlari': '/urunler/led-kontrol-uniteleri/',
  '/markalarimiz': '/markalar/',

  // --- Eski trafo / adaptör sayfaları ---
  '/guc-kaynagi-adaptor': '/urunler/trafo-led-surucu/',
  '/category/guc-kaynagi-adaptor': '/urunler/trafo-led-surucu/',
  '/dis-mekan-adaptorler': '/urunler/trafo-led-surucu/',
  '/ic-mekan-adaptorler': '/urunler/trafo-led-surucu/',
  '/interone-kore-dis-mekan-adaptor': '/urunler/trafo-led-surucu/',
  '/mosso-dis-mekan-adaptoru': '/urunler/trafo-led-surucu/',
  '/union-dis-mekan-adaptoru': '/urunler/trafo-led-surucu/',
  '/ultra-slim-ic-mekan-adaptor': '/urunler/trafo-led-surucu/',
  '/yagmur-korumali-adaptor': '/urunler/trafo-led-surucu/',
  '/category/interone': '/urunler/trafo-led-surucu/',
  '/category/mosso': '/urunler/trafo-led-surucu/',
  '/category/union': '/urunler/trafo-led-surucu/',

  // --- Eski tekil ürün sayfaları ---
  '/2835-072w-2li-mercekli-modul-led': '/urunler/led-modul/',
  '/2835-1-2-mercekli-modul-led': '/urunler/led-modul/',
  '/2835-2li-kisa-mercekli-modul-led': '/urunler/led-modul/',
  '/2835-3lu-kare-mercekli-modul-led': '/urunler/led-modul/',
  '/2835-3lu-mini-modul-led': '/urunler/led-modul/',
  '/2835-kisa-mercekli-modulled': '/urunler/led-modul/',
  '/2835-uzun-mercekli-modul-led': '/urunler/led-modul/',
  '/5050-rgb-modul-led': '/urunler/led-modul/',
  '/samsung-2835-modul-led': '/urunler/led-modul/',
  '/2835-3lu-3w-kesit-aydinlatma-modul-led': '/urunler/kesit-aydinlatma-led/',
  '/2835-ic-mekan-serit-led-10-mm-mt-60': '/urunler/led-serit/',
  '/2835-ince-silikon-dis-mekan-serit-led-10-mm-mt-60': '/urunler/led-serit/',
  '/5050-dis-mekan-silikonlu-serit-led-10-mm-mt-60': '/urunler/led-serit/',
  '/5050-ic-mekan-serit-led-10-mm-mt-60': '/urunler/led-serit/',
  '/rishang-serit-led': '/urunler/led-serit/',
  '/category/rishang': '/urunler/led-serit/',
  '/30-mm-point-led': '/urunler/point-led/',

  // --- WordPress artıkları ---
  '/belirtilmemis-2': '/urunler/',
  '/belirtilmemis-2/page/2': '/urunler/',
  '/category/markasiz': '/urunler/',
  '/category/markasiz/page/2': '/urunler/',
  '/author/admin': '/',
  '/wp-sitemap.xml': '/sitemap.xml',
  // anahtarlar küçük harf karşılaştırılır — bu yüzden burada da küçük harf
  '/wp-content/uploads/2022/12/nadas-led-katalog-incele.pdf': '/urunler/',
};

function redirect(location) {
  return {
    statusCode: 301,
    statusDescription: 'Moved Permanently',
    headers: {
      location: { value: location },
      'cache-control': { value: 'max-age=3600' },
    },
  };
}

function handler(event) {
  var request = event.request;
  var uri = request.uri;

  // Sorgu dizesini koru
  var qs = '';
  var params = Object.keys(request.querystring);
  if (params.length > 0) {
    var pairs = [];
    for (var i = 0; i < params.length; i++) {
      var v = request.querystring[params[i]].value;
      pairs.push(v ? params[i] + '=' + v : params[i]);
    }
    qs = '?' + pairs.join('&');
  }

  // 1) Yol eşleşmesi — sondaki slash'ı yok sayarak ara
  var key = uri.toLowerCase();
  if (key.length > 1 && key.charAt(key.length - 1) === '/') {
    key = key.slice(0, -1);
  }
  var target = REDIRECTS[key];
  if (target) {
    return redirect('https://' + HOST + target);
  }

  // 2) www olmayan host -> www
  var host = request.headers.host && request.headers.host.value;
  if (host && host.toLowerCase() !== HOST) {
    return redirect('https://' + HOST + uri + qs);
  }

  return request;
}
