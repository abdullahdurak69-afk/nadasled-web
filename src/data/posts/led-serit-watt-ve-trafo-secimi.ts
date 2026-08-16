import type { BlogPost } from "../blog";

export const ledSeritWattVeTrafoSecimi: BlogPost = {
  slug: "led-serit-watt-ve-trafo-secimi",
  title: "LED Şerit Metrede Kaç Watt? Güç Tablosu ve Trafo Seçimi",
  metaTitle: "LED Şerit Metrede Kaç Watt? Güç ve Trafo Tablosu",
  metaDesc:
    "2835, 5050 ve COB LED şerit watt değerleri tablo halinde. Metraja göre trafo hesabı, 12V/24V seçimi, kablo kesiti ve voltaj düşümünü önleme yöntemleri.",
  excerpt:
    "Çip tipine göre watt tablosu ve metraja göre trafo hesabı — tek sayfada.",
  date: "2026-06-03",
  updated: "2026-08-16",
  readMins: 8,
  categorySlug: "led-serit",
  categoryName: "LED Şerit",
  blocks: [
    {
      type: "p",
      text: "Şerit LED projelerinde en sık yapılan hata, trafoyu 'göz kararı' seçmektir. Oysa şeridin metre başına watt değeri bellidir ve hesap 30 saniye sürer. Asıl incelik, hesabın sonucunu hat uzunluğu ve kablo kesitiyle birlikte değerlendirmektir.",
    },

    { type: "h2", text: "Yaygın şerit tiplerinin güç değerleri" },
    {
      type: "table",
      headers: ["Şerit tipi", "LED/metre", "Ortalama güç"],
      rows: [
        ["2835 (60 LED)", "60", "6-8 W/m"],
        ["2835 (120 LED)", "120", "10-12 W/m"],
        ["2835 (240 LED)", "240", "18-22 W/m"],
        ["5050 (60 LED)", "60", "12-14 W/m"],
        ["5050 RGB (60 LED)", "60", "14-16 W/m"],
        ["COB (480 çip)", "480", "10-13 W/m"],
        ["COB (720 çip)", "720", "14-18 W/m"],
      ],
    },
    {
      type: "p",
      text: "Bu değerler tipik ortalamalardır. Aynı LED sayısına sahip iki şerit arasında bakır kalınlığı ve çip kalitesine bağlı olarak %20'ye varan fark olabilir. Kesin hesap için elinizdeki ürünün etiket değerini kullanın.",
    },

    { type: "h2", text: "Trafo hesabı" },
    {
      type: "p",
      text: "Metraj × metre başına watt × 1,2 (güvenlik payı). Örnek: 8 metre 10W/m şerit → 8 × 10 × 1,2 = 96W → 12V 100W (8,5A) trafo. Ayrıntılı anlatım için [trafo hesaplama rehberimiz](/blog/led-trafo-hesaplama) var.",
    },
    {
      type: "p",
      text: "1,2 çarpanı ihmal edilebilir görünür ama değildir. Sürekli tam yükte çalışan trafo ısınır ve içindeki kondansatörün ömrü sıcaklıkla birlikte hızla kısalır. Kapalı kasa içine giren veya yaz sıcağında dış cephede çalışan trafolarda payı 1,3'e çıkarmak daha güvenlidir.",
    },

    { type: "h2", text: "Hazır tablo: metraja göre trafo" },
    {
      type: "table",
      headers: ["Metraj", "10 W/m şerit", "14 W/m şerit"],
      rows: [
        ["5 m", "60W → 12V 6,5A", "84W → 12V 8,5A"],
        ["10 m", "120W → 12V 12,5A", "168W → 12V 16,5A"],
        ["15 m", "180W → 24V 8,5A", "252W → 24V 12,5A"],
        ["20 m", "240W → 24V 12,5A", "336W → 24V 16,5A"],
      ],
    },
    {
      type: "p",
      text: "15 metre ve üzeri hatlarda tabloda 24V önerilmesi tesadüf değil: bu uzunluklarda 12V sistemde voltaj düşümü kaçınılmaz hale gelir.",
    },

    { type: "h2", text: "12V mu 24V mu?" },
    {
      type: "ul",
      items: [
        "5 metreye kadar tek beslemede 12V sorunsuzdur.",
        "Uzun hatlarda 24V şerit voltaj düşümünü yarıya indirir; ışık sonlara doğru solmaz.",
        "10 metre üzeri tek parça hatlarda çift uçtan besleme veya ara besleme yapın.",
        "Aynı watt için 24V yarı akım çeker; bu da daha ince kablo ve daha az ısınma demektir.",
      ],
    },
    {
      type: "p",
      text: "Konunun tamamı için [12V mu 24V mu karşılaştırmamıza](/blog/12v-mu-24v-mu-tabela-aydinlatma) bakabilirsiniz.",
    },

    { type: "h2", text: "Voltaj düşümü: hattın sonu neden sararır?" },
    {
      type: "p",
      text: "Şeridin üzerindeki bakır iletken ince olduğu için akım aktıkça hat boyunca gerilim düşer. Hattın başında 12V olan gerilim, 5 metre sonunda 10,5V'a inebilir. LED'ler bu düşük gerilimde hem daha az parlak yanar hem beyaz ışık sarıya kayar. Bu bir arıza değil, fizik kuralıdır — çözümü de şerit değiştirmek değil, besleme düzenini değiştirmektir.",
    },
    {
      type: "ul",
      items: [
        "Çift uçtan besleme: aynı trafodan hattın iki ucuna da kablo çekin. En basit ve en etkili çözüm.",
        "Ara besleme: uzun hatta 5 metrede bir trafodan ayrı kablo indirin.",
        "Segmentlere bölme: her 5-10 metrelik parçayı kendi trafosundan besleyin.",
        "24V'a geçmek: aynı kesitle iki kat uzun hat mümkün olur.",
      ],
    },

    { type: "h2", text: "Kablo kesiti seçimi" },
    {
      type: "table",
      headers: ["Akım", "Önerilen kesit", "Not"],
      rows: [
        ["5 A'e kadar", "0,75 mm²", "Kısa mesafeler"],
        ["10 A'e kadar", "1,0 mm²", "Genel kullanım"],
        ["15 A'e kadar", "1,5 mm²", "10 m üzeri mesafede bir kademe artırın"],
        ["15 A üzeri", "2,5 mm²", "Yükü bölmek genellikle daha doğrudur"],
      ],
    },
    {
      type: "p",
      text: "Kaplama (CCA) kablo yerine tam bakır kablo kullanın; CCA'nın direnci yüksektir, hem daha çok ısınır hem voltaj düşümünü artırır. [Kablo ve konnektör çeşitlerimiz](/urunler/yardimci-urunler) bu kesitlerin tamamını kapsıyor.",
    },

    { type: "h2", text: "Sık yapılan hatalar" },
    {
      type: "ul",
      items: [
        "Şeridi makara üzerindeyken uzun süre yakarak test etmek — sarılı haldeki ısı birikimi şeridi kalıcı olarak zayıflatır.",
        "Güvenlik payı bırakmadan trafo seçmek.",
        "Uzun hattı tek uçtan beslemek.",
        "Alüminyum profil kullanmamak; ısı alınmadığında lümen kaybı ilk yılda belirginleşir.",
        "İşaretli kesim noktası dışından kesmek.",
        "IP20 şeridi nemli ortamda veya dış mekanda kullanmak.",
      ],
    },

    {
      type: "p",
      text: "[LED şerit çeşitlerimize](/urunler/led-serit) ve [IP67 trafolarımıza](/urunler/trafo-led-surucu) göz atın; metrajınızı ve montaj yerini gönderin, set halinde fiyatlandıralım.",
    },
  ],
  faq: [
    {
      q: "LED şerit metrede kaç watt çeker?",
      a: "Çip tipine ve LED yoğunluğuna göre değişir: 2835/60 LED yaklaşık 6-8 W/m, 2835/120 LED 10-12 W/m, 5050/60 LED 12-14 W/m, COB 480 çip 10-13 W/m. Kesin değer için ürünün kendi etiketine bakın.",
    },
    {
      q: "10 metre şerit için kaç amper trafo gerekir?",
      a: "10 W/m'lik bir şeritte 10 × 10 × 1,2 = 120W eder. 12V sistemde 120 ÷ 12 = 10 amper, yani 12V 12,5A trafo. Aynı hat 24V şeritle kurulursa 5 amper yeterli olur.",
    },
    {
      q: "Şeridin sonu neden sararıyor?",
      a: "Voltaj düşümü. Şerit üzerindeki ince bakır iletken nedeniyle gerilim hat boyunca düşer ve LED'ler düşük gerilimde sarıya kayar. Çözüm çift uçtan besleme, ara besleme veya hattı segmentlere bölmektir.",
    },
    {
      q: "5 metreden uzun şerit uç uca eklenebilir mi?",
      a: "Fiziken eklenebilir ama önerilmez. Eklenen ikinci makara, birincinin sonundaki düşük gerilimle beslenir ve belirgin şekilde sönük yanar. Doğru yöntem her makarayı trafodan ayrı beslemektir.",
    },
    {
      q: "Alüminyum profil şart mı?",
      a: "Kısa dekoratif hatlar dışında evet. Profil şeridin ürettiği ısıyı alır; ısı alınmadığında lümen kaybı ve renk kayması ilk yıl içinde başlar. COB şeritlerde profil kesinlikle zorunludur.",
    },
    {
      q: "Trafoyu şeritten büyük almak zararlı mı?",
      a: "Hayır, şerit yalnızca ihtiyacı kadar akım çeker. Bir üst kademeyi seçmek güvenli ve yaygın bir uygulamadır. Aşırı büyük seçmenin tek dezavantajı maliyet ve yer kaybıdır.",
    },
  ],
};
