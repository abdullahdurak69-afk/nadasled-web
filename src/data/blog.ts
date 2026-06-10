// Blog rehber içerikleri — SEO long-tail hedefli.
// Paragraflarda [metin](/yol) biçiminde iç link desteklenir (blog sayfası parse eder).

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] };

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDesc: string;
  excerpt: string;
  date: string; // ISO
  readMins: number;
  categorySlug: string; // ilgili ürün kategorisi
  categoryName: string;
  blocks: Block[];
}

export const posts: BlogPost[] = [
  {
    slug: "led-trafo-hesaplama",
    title: "LED Trafo Hesaplama: Tabela İçin Kaç Amper Trafo Gerekir?",
    metaTitle: "LED Trafo Hesaplama — Tabela İçin Kaç Amper Gerekir?",
    metaDesc:
      "LED trafo hesabı adım adım: modül ve şerit için watt/amper hesaplama formülü, %20 güvenlik payı, örnek tablolar. Tabelanız için doğru trafoyu seçin.",
    excerpt:
      "Modül sayısından amper değerine: tabelanız için doğru trafoyu 2 dakikada hesaplayın.",
    date: "2026-06-10",
    readMins: 5,
    categorySlug: "trafo-led-surucu",
    categoryName: "Trafo & LED Sürücü",
    blocks: [
      {
        type: "p",
        text: "Yanlış trafo seçimi, tabela arızalarının bir numaralı sebebidir. Küçük seçilen trafo aşırı ısınır ve erken bozulur; gereksiz büyük trafo ise maliyeti artırır. Doğru hesap aslında iki çarpma ve bir toplama işleminden ibaret.",
      },
      { type: "h2", text: "Temel formül" },
      {
        type: "p",
        text: "Toplam güç (W) = LED adedi × LED başına watt. Bu değere %20 güvenlik payı eklenir, çünkü trafonun sürekli tam yükte çalışması ömrünü ciddi kısaltır. Amper = Toplam güç ÷ Voltaj (12V veya 24V).",
      },
      { type: "h2", text: "Örnek: 100 modüllük kutu harf tabela" },
      {
        type: "ul",
        items: [
          "100 adet × 1,5W = 150W ham güç",
          "150W × 1,2 (güvenlik payı) = 180W",
          "180W ÷ 12V = 15 amper → 12V 15A trafo (veya 2 × 8,3A)",
        ],
      },
      { type: "h2", text: "Hazır tablo: modül sayısına göre trafo" },
      {
        type: "table",
        headers: ["Modül adedi (1,5W)", "Toplam güç (+%20)", "Önerilen trafo (12V)"],
        rows: [
          ["40", "72W", "8,5A (100W)"],
          ["80", "144W", "12,5A (150W)"],
          ["120", "216W", "20A (250W)"],
          ["200", "360W", "2 × 16,5A (2 × 200W)"],
        ],
      },
      { type: "h2", text: "Dikkat edilmesi gerekenler" },
      {
        type: "ul",
        items: [
          "Tabela içi ve dış mekanda mutlaka IP67 su geçirmez trafo kullanın.",
          "Çok büyük tabelalarda tek dev trafo yerine birden fazla orta boy trafo hem güvenlidir hem servis kolaylığı sağlar.",
          "Şerit LED hesabı da aynıdır: metre × metre başına watt + %20 pay.",
        ],
      },
      {
        type: "p",
        text: "Stoklarımızdaki [IP67 ve perfore trafo çeşitlerine](/urunler/trafo-led-surucu) göz atabilir, tabela ölçünüzü WhatsApp'tan göndererek ücretsiz trafo hesabı isteyebilirsiniz.",
      },
    ],
  },
  {
    slug: "kutu-harf-icin-led-modul-secimi",
    title: "Kutu Harf İçin LED Modül Seçimi: Hangi Modül, Kaç Adet?",
    metaTitle: "Kutu Harf İçin LED Modül Seçimi — Hangi Modül, Kaç Adet?",
    metaDesc:
      "Kutu harf tabela için LED modül seçim rehberi: harf derinliğine göre modül tipi, 10x10 kuralıyla adet hesabı, Samsung/Osram/Fortune karşılaştırması.",
    excerpt:
      "Harf derinliğine göre doğru modül tipi ve 10x10 kuralıyla adet hesabı.",
    date: "2026-06-09",
    readMins: 6,
    categorySlug: "led-modul",
    categoryName: "LED Modül",
    blocks: [
      {
        type: "p",
        text: "Kutu harfin ışık kalitesini iki şey belirler: doğru modül tipi ve doğru yerleşim sıklığı. Benekli (dalgalı) görünen tabelaların neredeyse tamamında bu ikisinden biri yanlıştır.",
      },
      { type: "h2", text: "Harf derinliğine göre modül seçimi" },
      {
        type: "table",
        headers: ["Harf derinliği", "Önerilen modül", "Not"],
        rows: [
          ["4-6 cm", "Mini kasa / dar açılı modül", "Sık yerleşim gerekir"],
          ["8-12 cm", "Mercekli tekli/ikili modül (160°+)", "En yaygın ve verimli aralık"],
          ["12 cm üzeri", "Yüksek lümen üçlü/dörtlü modül", "Daha seyrek yerleşim yeterli"],
        ],
      },
      { type: "h2", text: "Kaç adet modül gerekir? 10x10 kuralı" },
      {
        type: "p",
        text: "Pratik kural: harf yüzeyinin her 10×10 cm'lik alanına 1 modül. 100×50 cm'lik bir harf yüzeyi yaklaşık 50 modül ister. Harf derinliği 6 cm'in altına indikçe bu sıklığı %20-30 artırın; mercek açısı genişledikçe biraz azaltabilirsiniz.",
      },
      { type: "h2", text: "Samsung, Osram, Fortune: hangisi?" },
      {
        type: "ul",
        items: [
          "Samsung çipli modüller: en yüksek lümen/watt verimi, kurumsal işlerde ilk tercih.",
          "Osram modüller: renk tutarlılığı ve ömür dengesiyle premium projeler için.",
          "Fortune Plus / Fortune Light: fiyat-performans şampiyonu, yoğun hacimli işlerde standart.",
        ],
      },
      {
        type: "p",
        text: "Hepsi 12V ve IP65 su geçirmezdir; tabela içinde ve dış cephede güvenle kullanılır. Detaylı liste için [LED modül kategorimize](/urunler/led-modul) bakın.",
      },
      { type: "h2", text: "Montajda 3 altın kural" },
      {
        type: "ul",
        items: [
          "Modül sıralarını pleksi yüzeye paralel ve eşit aralıklı dizin; kenarlardan 3-5 cm içeride başlayın.",
          "Seri bağlantıda üreticinin maksimum zincir uzunluğunu aşmayın, voltaj düşümü sondaki modülleri soldurur.",
          "Trafoyu %80 yükte çalışacak şekilde seçin — hesabı için [trafo hesaplama rehberimize](/blog/led-trafo-hesaplama) bakın.",
        ],
      },
    ],
  },
  {
    slug: "neon-flex-secim-ve-montaj",
    title: "Neon LED (Neon Flex) Nedir? Seçim ve Montaj Rehberi",
    metaTitle: "Neon LED (Neon Flex) Nedir? Seçim ve Montaj Rehberi",
    metaDesc:
      "Neon flex rehberi: cam neondan farkı, kesme-bükme teknikleri, iç/dış mekan seçimi, montaj ipuçları. 36 renk ve kesit seçeneğiyle toptan neon LED.",
    excerpt:
      "Cam neonun esnek ve dayanıklı alternatifi: neon flex seçimi, kesimi ve montajı.",
    date: "2026-06-07",
    readMins: 5,
    categorySlug: "neon-led",
    categoryName: "Neon LED",
    blocks: [
      {
        type: "p",
        text: "Neon flex, silikon gövdeye gömülü LED şeridin klasik cam neon görünümünü vermesidir. Kırılmaz, 12V güvenli voltajla çalışır, cam neonun onda biri enerji harcar ve ustalarımızın tabiriyle 'makasla neon çekilmesini' sağlar.",
      },
      { type: "h2", text: "Cam neon ile neon flex karşılaştırması" },
      {
        type: "table",
        headers: ["Özellik", "Cam neon", "Neon flex"],
        rows: [
          ["Dayanıklılık", "Kırılgan", "Esnek, kırılmaz"],
          ["Voltaj", "Yüksek gerilim (trafo riski)", "12V güvenli"],
          ["Tüketim", "Yüksek", "Düşük (LED)"],
          ["Montaj", "Usta işi, yavaş", "Kes-yapıştır hızında"],
          ["Renk değişimi", "Gaz tipine bağlı", "36 renk + RGB seçenekleri"],
        ],
      },
      { type: "h2", text: "Nasıl kesilir ve şekillendirilir?" },
      {
        type: "ul",
        items: [
          "Sadece üzerindeki kesim işaretlerinden kesin (genelde 1-2,5 cm aralıklı).",
          "Kesilen uca pin konnektör takıp uç kapağını silikonlayın; dış mekanda bu adım şarttır.",
          "Yazı ve logo bükümlerinde modeline göre 1-2 cm çapa kadar inilebilir; soğuk havada bükmeden önce ürünü oda sıcaklığına getirin.",
        ],
      },
      { type: "h2", text: "İç mekan mı, dış mekan mı?" },
      {
        type: "p",
        text: "Silikon gövdeli neon flex IP65 su geçirmezdir; dış cephe yazıları, bahçe ve teras hatları, vitrin çerçeveleri için uygundur. UV dayanımlı silikon güneşte sararmaz. İç mekanda ise duvar yazıları, ayna arkası ve raf altı uygulamaları en popüler kullanımlardır.",
      },
      {
        type: "p",
        text: "36 farklı renk ve kesit seçeneğini [Neon LED kategorimizde](/urunler/neon-led) bulabilirsiniz. Projenizin metrajını iletin, trafo ve konnektörleriyle komple set hazırlayalım.",
      },
    ],
  },
  {
    slug: "cob-vs-smd-led-serit",
    title: "COB LED Şerit mi SMD mi? Farklar ve Doğru Seçim",
    metaTitle: "COB LED Şerit mi SMD mi? Farklar ve Doğru Seçim",
    metaDesc:
      "COB ve SMD LED şerit farkları: noktasız ışık, verim, fiyat ve kullanım alanları. Hangi projede hangi şerit? Karşılaştırma tablosuyla seçim rehberi.",
    excerpt:
      "Noktasız homojen ışık mı, kanıtlanmış klasik mi? Proje tipine göre şerit seçimi.",
    date: "2026-06-05",
    readMins: 4,
    categorySlug: "cob-led-serit",
    categoryName: "COB LED Şerit",
    blocks: [
      {
        type: "p",
        text: "SMD şeritlerde LED'ler tek tek dizilidir ve yakından bakınca noktalar görünür. COB (Chip on Board) şeritlerde ise çipler kesintisiz dizilip fosfor tabakayla kaplanır: sonuç, uçtan uca kesintisiz bir ışık çizgisi.",
      },
      { type: "h2", text: "Karşılaştırma tablosu" },
      {
        type: "table",
        headers: ["Kriter", "SMD (2835/5050)", "COB"],
        rows: [
          ["Işık görünümü", "Noktalı, difüzör ister", "Tamamen homojen çizgi"],
          ["Profilsiz kullanım", "Benek yapar", "Difüzörsüz bile pürüzsüz"],
          ["Verim (lm/W)", "Yüksek", "Yüksek (yeni nesilde eşit)"],
          ["Fiyat", "Daha ekonomik", "Bir miktar yüksek"],
          ["Kesim aralığı", "2,5-10 cm", "2,5-5 cm (daha esnek)"],
        ],
      },
      { type: "h2", text: "Hangisini ne zaman seçmeli?" },
      {
        type: "ul",
        items: [
          "Görünür montaj (ayna, raf altı, tezgah, açık profil): COB — noktasız görüntü farkı hemen belli olur.",
          "Gizli tavan/karnis içi (ışık kaynağı görünmüyorsa): SMD yeterli ve daha ekonomik.",
          "Tabela içi aydınlatma: SMD 2835 yaygın standart; homojenlik için derinlik yeterliyse fark yaratmaz.",
        ],
      },
      {
        type: "p",
        text: "Her iki tip de stoklarımızda: [COB LED şeritler](/urunler/cob-led-serit) ve [SMD LED şeritler](/urunler/led-serit). Trafo eşleştirmesi için metraj ve watt bilginizi iletmeniz yeterli.",
      },
    ],
  },
  {
    slug: "led-serit-watt-ve-trafo-secimi",
    title: "LED Şerit Metrede Kaç Watt? Güç Tablosu ve Trafo Seçimi",
    metaTitle: "LED Şerit Metrede Kaç Watt? Güç Tablosu ve Trafo Seçimi",
    metaDesc:
      "2835, 5050 ve COB LED şerit watt değerleri tablo halinde. Metraja göre trafo hesabı, 12V/24V seçimi ve voltaj düşümünü önleme yöntemleri.",
    excerpt:
      "Çip tipine göre watt tablosu ve metraja göre trafo hesabı — tek sayfada.",
    date: "2026-06-03",
    readMins: 4,
    categorySlug: "led-serit",
    categoryName: "LED Şerit",
    blocks: [
      {
        type: "p",
        text: "Şerit LED projelerinde en sık yapılan hata, trafoyu 'göz kararı' seçmektir. Oysa şeridin metre başına watt değeri bellidir ve hesap 30 saniye sürer.",
      },
      { type: "h2", text: "Yaygın şerit tiplerinin güç değerleri" },
      {
        type: "table",
        headers: ["Şerit tipi", "LED/metre", "Ortalama güç"],
        rows: [
          ["2835 (60 LED)", "60", "6-8 W/m"],
          ["2835 (120 LED)", "120", "10-12 W/m"],
          ["5050 (60 LED)", "60", "12-14 W/m"],
          ["COB", "320+ çip", "8-14 W/m"],
        ],
      },
      { type: "h2", text: "Trafo hesabı" },
      {
        type: "p",
        text: "Metraj × metre başına watt × 1,2 (güvenlik payı). Örnek: 8 metre 10W/m şerit → 8 × 10 × 1,2 = 96W → 12V 100W (8,5A) trafo. Ayrıntılı anlatım için [trafo hesaplama rehberimiz](/blog/led-trafo-hesaplama) var.",
      },
      { type: "h2", text: "12V mu 24V mu?" },
      {
        type: "ul",
        items: [
          "5 metreye kadar tek beslemede 12V sorunsuzdur.",
          "Uzun hatlarda 24V şerit voltaj düşümünü yarıya indirir; ışık sonlara doğru solmaz.",
          "10 metre üzeri tek parça hatlarda çift uçtan besleme veya ara besleme yapın.",
        ],
      },
      {
        type: "p",
        text: "[LED şerit çeşitlerimize](/urunler/led-serit) ve [IP67 trafolarımıza](/urunler/trafo-led-surucu) göz atın; metrajınızı gönderin, set halinde fiyatlandıralım.",
      },
    ],
  },
  {
    slug: "tabela-yapiminda-kullanilan-malzemeler",
    title: "Tabela Yapımında Kullanılan Malzemeler: Eksiksiz Liste",
    metaTitle: "Tabela Yapımında Kullanılan Malzemeler — Eksiksiz Liste",
    metaDesc:
      "Kutu harf ve ışıklı tabela yapımı için gereken tüm malzemeler: LED modül, trafo, pleksi, alüminyum, kablo, silikon. Tedarik listesi ve seçim ipuçları.",
    excerpt:
      "Kutu harften totem tabelaya: ışıklı tabela üretiminin tam malzeme listesi.",
    date: "2026-06-01",
    readMins: 6,
    categorySlug: "led-modul",
    categoryName: "LED Modül",
    blocks: [
      {
        type: "p",
        text: "Işıklı tabela üretimi; gövde, ışık kaynağı, güç ve montaj olmak üzere dört malzeme grubundan oluşur. Bu rehber, kutu harf ve ışıklı pano işleri için eksiksiz bir tedarik listesi sunar.",
      },
      { type: "h2", text: "1. Işık kaynağı" },
      {
        type: "ul",
        items: [
          "[LED modül](/urunler/led-modul): kutu harf ve derin kasalarda standart çözüm (mercekli, 12V, IP65).",
          "[LED şerit](/urunler/led-serit): ince kasa, çerçeve ve lineer hatlarda.",
          "[Neon LED](/urunler/neon-led): kontur yazılar ve dekoratif hatlar için.",
          "[Point LED](/urunler/point-led): kontur/animasyon uygulamaları.",
        ],
      },
      { type: "h2", text: "2. Güç ve kontrol" },
      {
        type: "ul",
        items: [
          "[Trafo / LED sürücü](/urunler/trafo-led-surucu): toplam watt + %20 pay kuralıyla seçilir, dışarıda IP67 şart.",
          "[Kontrol üniteleri](/urunler/led-kontrol-uniteleri): RGB ve animasyonlu işlerde.",
        ],
      },
      { type: "h2", text: "3. Gövde malzemeleri" },
      {
        type: "ul",
        items: [
          "Pleksi (akrilik): harf yüzeyi — 3 mm standart, opal beyaz en homojen ışığı verir.",
          "Alüminyum profil / DKP sac: kasa ve sırt.",
          "Vinil / folyo: renklendirme ve baskı yüzeyi.",
        ],
      },
      { type: "h2", text: "4. Montaj ve sarf" },
      {
        type: "ul",
        items: [
          "Kablo (0,50-2,5 mm², dış mekan tipi), klemens ve konnektörler.",
          "Silikon: hem yapıştırma hem yalıtım için.",
          "Dübel, vida, askı aparatı ve [yardımcı ürünler](/urunler/yardimci-urunler).",
        ],
      },
      {
        type: "p",
        text: "Nadasled olarak ışık, güç ve sarf gruplarının tamamını tek kargoda gönderiyoruz. Malzeme listenizi WhatsApp'tan iletin, toptan fiyatla tek seferde tedarik edin.",
      },
    ],
  },
  {
    slug: "12v-mu-24v-mu-tabela-aydinlatma",
    title: "12V mu 24V mu? Tabela ve LED Aydınlatmada Voltaj Seçimi",
    metaTitle: "12V mu 24V mu? LED Aydınlatmada Voltaj Seçimi",
    metaDesc:
      "12V ve 24V LED sistemlerin farkları: voltaj düşümü, kablo kesiti, verim ve maliyet. Tabela, şerit ve lineer aydınlatmada hangi voltajı seçmelisiniz?",
    excerpt:
      "Voltaj düşümü, kablo kesiti ve verim: iki sistemin gerçek farkları.",
    date: "2026-05-29",
    readMins: 4,
    categorySlug: "trafo-led-surucu",
    categoryName: "Trafo & LED Sürücü",
    blocks: [
      {
        type: "p",
        text: "Aynı watt'taki yükte 24V sistem, 12V'a göre yarı akım çeker. Bu tek cümle; kablo kesiti, voltaj düşümü ve hat uzunluğuyla ilgili tüm farkların özetidir.",
      },
      { type: "h2", text: "Farklar tablo halinde" },
      {
        type: "table",
        headers: ["Kriter", "12V", "24V"],
        rows: [
          ["Çektiği akım (aynı watt)", "2 kat", "Yarısı"],
          ["Voltaj düşümü", "Belirgin (uzun hatta solma)", "Çok daha az"],
          ["Tek beslemeyle hat boyu", "~5 m", "~10 m"],
          ["Kablo kesiti ihtiyacı", "Daha kalın", "Daha ince yeterli"],
          ["Ürün çeşitliliği (tabela)", "Çok geniş", "Lineer ağırlıklı"],
        ],
      },
      { type: "h2", text: "Pratik karar rehberi" },
      {
        type: "ul",
        items: [
          "Kutu harf ve klasik tabela: 12V — modül ekosisteminin standardı.",
          "Uzun lineer hatlar, cephe ve karnis aydınlatması: 24V — solma derdi yok.",
          "Karışık projede iki ayrı devre kurun; 12V ürünü 24V trafoya asla bağlamayın.",
        ],
      },
      {
        type: "p",
        text: "Her iki voltajda [şerit](/urunler/led-serit) ve [trafo](/urunler/trafo-led-surucu) çeşitlerimiz stokta. Projenize göre doğru kombinasyonu birlikte seçelim.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
