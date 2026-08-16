import type { BlogPost } from "../blog";

export const ledTrafoHesaplama: BlogPost = {
  slug: "led-trafo-hesaplama",
  title: "LED Trafo Hesaplama: Tabela İçin Kaç Amper Trafo Gerekir?",
  metaTitle: "LED Trafo Hesaplama — Kaç Amper Trafo Gerekir?",
  metaDesc:
    "LED trafo hesabı adım adım: watt/amper formülü, %20 güvenlik payı, hazır tablolar ve sık yapılan hatalar. Tabelanız için doğru trafoyu seçin.",
  excerpt:
    "Modül sayısından amper değerine: tabelanız için doğru trafoyu 2 dakikada hesaplayın.",
  date: "2026-06-10",
  updated: "2026-08-16",
  readMins: 9,
  categorySlug: "trafo-led-surucu",
  categoryName: "Trafo & LED Sürücü",
  blocks: [
    {
      type: "p",
      text: "Yanlış trafo seçimi, tabela arızalarının bir numaralı sebebidir. Küçük seçilen trafo aşırı ısınır ve erken bozulur; gereksiz büyük trafo ise maliyeti artırır. Doğru hesap aslında iki çarpma ve bir toplama işleminden ibaret — asıl iş, çıkan sayının üzerine doğru IP sınıfını, doğru sürücü tipini ve doğru kablo kesitini koymak.",
    },
    {
      type: "p",
      text: "Bu rehberde önce formülü, sonra hazır tabloları, ardından sahada en sık yapılan altı hatayı bulacaksınız. Elinizde modül adedi veya şerit metrajı varsa hesabı iki dakikada bitirebilirsiniz.",
    },

    { type: "h2", text: "Temel formül" },
    {
      type: "p",
      text: "Toplam güç (W) = LED adedi × LED başına watt. Bu değere %20 güvenlik payı eklenir. Amper = Toplam güç ÷ Voltaj (12V veya 24V). Üç adım bu kadar; geri kalan her şey bu sayının nasıl yorumlanacağıyla ilgili.",
    },
    { type: "h2", text: "%20 güvenlik payı neden gerekiyor?" },
    {
      type: "p",
      text: "Bir trafonun etiketindeki güç, sürekli değil azami değerdir. Sürekli tam yükte çalışan bir trafo ısınır; ısınan elektrolitik kondansatörün ömrü ise sıcaklıkla birlikte hızla kısalır. Pratik kural olarak her 10 °C sıcaklık artışı kondansatör ömrünü yaklaşık yarıya indirir. %20 pay bırakmak, trafoyu yaklaşık %80 yükte çalıştırmak demektir; bu, hem ısıyı hem şebeke dalgalanmalarında oluşan ani yük artışlarını karşılar.",
    },
    {
      type: "p",
      text: "Dış mekan tabelalarında ve yaz aylarında kapalı kasa içine giren trafolarda payı %30'a çıkarmak daha güvenlidir. Kapalı hacimde çalışan trafo, ortam sıcaklığının üzerine kendi ısısını da ekler.",
    },

    { type: "h2", text: "Adım adım: modüllü kutu harf tabela" },
    {
      type: "ul",
      items: [
        "1. Adım — Modül adedini sayın. Tüm harflerdeki toplam modül sayısı esastır, harf başına değil.",
        "2. Adım — Modülün watt değerini bulun. Ürün etiketinde yazar; tabela modüllerinde tipik değerler 0,72W, 1,2W ve 1,5W'tır.",
        "3. Adım — Çarpın: adet × watt = ham güç.",
        "4. Adım — 1,2 ile çarpın (güvenlik payı).",
        "5. Adım — Voltaja bölün: 12V sistemde ÷12, 24V sistemde ÷24. Çıkan sayı gereken amper değeridir.",
      ],
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
    { type: "h2", text: "Örnek: 18 metre şerit LED cephe hattı" },
    {
      type: "ul",
      items: [
        "18 metre × 12W/m = 216W ham güç",
        "216W × 1,2 = 259W",
        "259W ÷ 24V = 10,8 amper → 24V 12,5A (300W) trafo",
        "Hat 18 metre olduğu için tek noktadan beslenmez; 2 × 9 metre olarak bölünür ve her segment ayrı beslenir.",
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
        ["300", "540W", "3 × 16,5A (3 × 200W)"],
      ],
    },
    { type: "h2", text: "Hazır tablo: şerit metrajına göre trafo" },
    {
      type: "table",
      headers: ["Şerit tipi", "Güç", "10 metre için (+%20)", "Önerilen trafo"],
      rows: [
        ["2835 / 60 LED", "7 W/m", "84W", "12V 8,5A (100W)"],
        ["2835 / 120 LED", "11 W/m", "132W", "12V 12,5A (150W)"],
        ["5050 / 60 LED", "13 W/m", "156W", "12V 16,5A (200W)"],
        ["COB 480 LED", "12 W/m", "144W", "24V 6,5A (150W)"],
        ["COB 720 LED", "16 W/m", "192W", "24V 8,5A (200W)"],
      ],
    },
    {
      type: "p",
      text: "Tablolardaki watt değerleri tipik ortalamalardır. Kesin hesap için elinizdeki ürünün kendi etiket değerini kullanın; aynı LED sayısına sahip iki şerit arasında %20'ye varan güç farkı olabilir. Ayrıntılı güç tablosu için [LED şerit watt rehberimize](/blog/led-serit-watt-ve-trafo-secimi) bakabilirsiniz.",
    },

    { type: "h2", text: "Sabit voltaj mı, sabit akım mı?" },
    {
      type: "p",
      text: "Yukarıdaki hesabın tamamı sabit voltajlı sistemler içindir: modül, şerit ve neon LED bu gruba girer ve 12V ya da 24V sabit gerilimle çalışır. Power LED çipleri ise sabit akım sürücü ister. Bir power LED'i sabit voltajlı trafoya bağlamak, çipin ilk saniyelerde aşırı akım çekip yanması demektir — ve bu hasar geri döndürülemez. [Power LED kategorimizdeki](/urunler/power-led) ürünlerde sürücü seçimi bu yüzden ayrı yapılır.",
    },

    { type: "h2", text: "Tek büyük trafo mu, birkaç orta boy mu?" },
    {
      type: "p",
      text: "Toplam gücü karşılayan tek bir trafo teknik olarak yeterlidir, ancak sahada birkaç orta boy trafo neredeyse her zaman daha iyi çalışır. Sebepleri şunlar: arıza anında tabelanın tamamı sönmez, sadece o segment kararır; her trafo daha kısa hat beslediği için voltaj düşümü azalır; ısı tek noktada birikmez; ve servis sırasında ağır tek parça yerine küçük bir ünite değiştirilir.",
    },
    {
      type: "p",
      text: "Pratik eşik olarak 250W üzerindeki sistemlerde yükü bölmek tercih edilir. Bölerken dikkat edilecek tek şey, farklı trafoların çıkışlarını birbirine paralel bağlamamaktır; her trafo kendi segmentini besler, segmentler arasında yalnızca ortak eksi hattı kurulur.",
    },

    { type: "h2", text: "IP sınıfını atlamayın" },
    {
      type: "p",
      text: "Hesap doğru olsa bile yanlış IP sınıfı seçildiğinde trafo aylar içinde bozulur. Tabela kasasının içi sızdırmaz bir hacim değildir: gece-gündüz sıcaklık farkı kasa içinde yoğuşma yaratır. Bu yüzden kasa içine giren trafolarda bile IP67 tercih edilir. Doğrudan dış ortama monte edilecek trafolarda yağmur korumalı veya epoksi dolgulu modeller kullanılır. İç mekan slim trafolar yalnızca kuru, kapalı hacimler içindir.",
    },

    { type: "h2", text: "Kablo kesiti hesabın bir parçasıdır" },
    {
      type: "p",
      text: "Düşük voltajlı sistemlerde akım yüksektir; ince kablo hem ısınır hem hattın sonunda voltaj düşümü yaratır. Trafo doğru seçilmiş olsa bile hattın sonundaki modüller sönük yanıyorsa suçlu genellikle kablodur. Pratik yaklaşım: 5 ampere kadar 0,75 mm², 10 ampere kadar 1 mm², üzerinde 1,5 mm² ve daha kalın kesit. Mesafe 10 metreyi aştıkça kesiti bir kademe artırın. [Kablo ve konnektör çeşitlerimiz](/urunler/yardimci-urunler) bu kesitlerin tamamını kapsıyor.",
    },

    { type: "h2", text: "Sahada en sık yapılan altı hata" },
    {
      type: "ul",
      items: [
        "Güvenlik payı bırakmamak — trafo ilk yaz sıcağında korumaya geçer veya bozulur.",
        "Hesabı harf başına yapıp toplamayı unutmak; özellikle çok harfli tabelalarda toplam güç ciddi biçimde eksik çıkar.",
        "12V için hesaplanan amperi 24V sisteme uygulamak — aynı watt'ta 24V yarı akım çeker, gereksiz büyük trafo alınır.",
        "Power LED'i sabit voltajlı trafoya bağlamak.",
        "Trafoyu havalandırması olmayan kapalı kutuya sıkıştırmak; marka fark etmeksizin ömür yarıya iner.",
        "Farklı marka ve amperdeki trafoları paralel bağlamak; yük dengesiz dağılır, biri sürekli fazla yüklenir.",
      ],
    },

    { type: "h2", text: "Marka gerçekten fark eder mi?" },
    {
      type: "p",
      text: "Eder, ama beklenen yerde değil. Ekonomik bir trafo da ilk gün çalışır; fark ikinci yılda ortaya çıkar. Meanwell ve Inventronics gibi sürücülerde dalgalanma (ripple) daha düşüktür — bu, gözle görülen titremenin (flicker) ve kameraya bant olarak yansıyan bozulmanın olmaması demektir. Ayrıca aşırı yük ve aşırı sıcaklık korumaları gerçekten devreye girer. Vitrin, mağaza ve kamera altında kalan tabelalarda bu fark doğrudan işin kalitesine yansır.",
    },

    {
      type: "p",
      text: "Stoklarımızdaki [IP67, ultra slim ve yağmur korumalı trafo çeşitlerine](/urunler/trafo-led-surucu) göz atabilir, tabela ölçünüzü ve modül adedinizi WhatsApp'tan göndererek ücretsiz trafo hesabı isteyebilirsiniz.",
    },
  ],
  faq: [
    {
      q: "100 modül için kaç amper trafo gerekir?",
      a: "1,5W'lık 100 modül 150W eder; %20 güvenlik payıyla 180W olur. 12V sistemde 180 ÷ 12 = 15 amper, yani 12V 15A (180-200W) trafo gerekir. Modül watt'ı farklıysa aynı formülü kendi değerinizle uygulayın.",
    },
    {
      q: "Trafoyu olduğundan büyük almanın zararı var mı?",
      a: "Teknik bir zararı yoktur; trafo yalnızca çekilen kadar güç verir. Zararı maliyet ve yer tarafındadır. Ancak çok büyük seçilen trafolarda bazı modellerde minimum yük altında çıkış kararsızlaşabilir, bu yüzden aşırıya kaçmadan bir üst kademeyi seçmek en doğrusudur.",
    },
    {
      q: "Tabela içine hangi IP sınıfı trafo konmalı?",
      a: "Kasa içi sızdırmaz sayılmaz ve gece-gündüz farkıyla yoğuşma olur; bu yüzden kasa içinde bile IP67 önerilir. Doğrudan dış ortama monte edilecekse yağmur korumalı veya epoksi dolgulu modeller kullanılmalıdır.",
    },
    {
      q: "12V mi 24V mi daha az trafo gerektirir?",
      a: "Aynı watt için 24V sistem yarı akım çeker, dolayısıyla daha düşük amperli bir trafo yeterlidir. Watt olarak ihtiyaç aynıdır, değişen amper değeridir. 24V ayrıca uzun hatlarda voltaj düşümünü azaltır.",
    },
    {
      q: "İki trafoyu paralel bağlayabilir miyim?",
      a: "Önerilmez. Farklı trafoların çıkış gerilimleri tam olarak eşit olmadığı için biri diğerinden daha fazla yüklenir ve erken bozulur. Doğru yöntem, sistemi segmentlere bölüp her segmenti kendi trafosundan beslemektir.",
    },
    {
      q: "Hattın sonundaki modüller neden sönük yanıyor?",
      a: "Bu genellikle trafo değil kablo veya zincir uzunluğu sorunudur. Kablo kesiti yetersizse veya tek hatta üreticinin izin verdiğinden fazla modül bağlandıysa hattın sonunda voltaj düşer. Çözüm: kesiti artırmak, hattı bölmek veya iki uçtan beslemek.",
    },
  ],
};
