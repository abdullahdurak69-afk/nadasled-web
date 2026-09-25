import type { BlogPost } from "../blog";

export const pixelLedNedir: BlogPost = {
  slug: "pixel-led-nedir",
  title: "Pixel LED Nedir? Adreslenebilir Şerit, Çip Tipleri ve Kontrol Cihazı",
  metaTitle: "Pixel LED Nedir? Adreslenebilir Şerit ve Kontrol",
  metaDesc:
    "Pixel (adreslenebilir) LED nedir, RGB şeritten farkı ne? WS2811, WS2812B, WS2813 çip farkları, kontrol cihazı seçimi, bağlantı ve sık arızalar.",
  excerpt: "Adreslenebilir LED'in RGB'den farkı, çip tipleri, kontrol cihazı seçimi ve veri hattı kuralları.",
  date: "2026-09-25",
  readMins: 8,
  categorySlug: "led-serit",
  categoryName: "LED Şerit",
  blocks: [
    {
      type: "p",
      text: "Sıradan bir RGB şeritte hattın tamamı aynı anda aynı renkte yanar: kırmızıya basarsanız beş metrenin hepsi kırmızı olur. Pixel LED'de ise hattın üzerindeki her nokta ayrı ayrı kontrol edilir. Akan yazı, dalga, kuyruklu yıldız ve sıralı yanma gibi hareketli efektler bu sayede yapılır.",
    },
    {
      type: "p",
      text: "Bu esneklik birkaç yeni kuralla birlikte gelir: doğru çip protokolü, veri hattının yönü ve uyumlu bir kontrol cihazı. Bu rehberde pixel LED'in nasıl çalıştığını, çip tiplerini ve sahada en çok arıza çıkaran bağlantı hatalarını anlatıyoruz.",
    },

    { type: "h2", text: "Pixel LED nasıl çalışır?" },
    {
      type: "p",
      text: "Pixel şeritte her piksel küçük bir sürücü entegre devre (IC) taşır. Kontrol cihazı hattın başına dijital bir veri dizisi gönderir. İlk piksel kendi rengini alır, veriyi bir sonrakine aktarır ve zincir bu şekilde hattın sonuna kadar ilerler. Bu yüzden pixel şeritte bir veri yönü vardır ve veri her zaman girişten (DI) çıkışa (DO) doğru akar.",
    },
    {
      type: "p",
      text: "Bir \"piksel\" her zaman tek bir LED demek değildir. 5V çalışan WS2812B gibi çiplerde her LED kendi sürücüsünü taşır ve ayrı ayrı kontrol edilir. 12V pixel şeritlerin çoğunda ise tek bir sürücü devre üç LED'i birlikte yönetir; yani kontrol edilebilen en küçük birim üç LED'lik bir gruptur. Efektin ne kadar ince görüneceği bu birimin uzunluğuna bağlıdır.",
    },

    { type: "h2", text: "RGB şerit ile pixel şerit farkı" },
    {
      type: "table",
      headers: ["", "RGB şerit", "Pixel (adreslenebilir) şerit"],
      rows: [
        ["Kontrol", "Hattın tamamı tek renk", "Her piksel ayrı renk"],
        ["Kablo", "4 damar: V+, R, G, B", "3 damar: V+, DATA, GND"],
        ["Efekt", "Renk geçişi, yanıp sönme", "Akan, dalgalanan, sıralı efektler"],
        ["Kontrol cihazı", "RGB kumanda", "Pixel kontrol cihazı (protokol uyumlu)"],
        ["Yön", "Yönsüz", "Veri tek yönlü, ok yönü önemli"],
        ["Hat uzadıkça", "Amplifikatörle bölünür", "Veri zinciri sürer, güç ayrıca beslenir"],
      ],
    },
    {
      type: "p",
      text: "Tablodaki en kritik satır kontrol cihazı: normal bir RGB kumanda pixel şeridi süremez, pixel kontrol cihazı da sıradan RGB şeridi süremez. Karışık sipariş, sahada en sık karşılaşılan \"şerit yanmıyor\" sebebidir. RGB tarafındaki seçim kurallarını [RGB kontrol ünitesi yazımızda](/blog/rgb-led-kontrol-unitesi-secimi/) ayrıca anlattık.",
    },

    { type: "h2", text: "Çip tipleri: WS2811, WS2812B, WS2813, SK6812" },
    {
      type: "table",
      headers: ["Çip", "Tipik voltaj", "Özellik"],
      rows: [
        ["WS2811", "12V", "Bir sürücü genellikle 3 LED'i birlikte yönetir; uzun hatlarda yaygın"],
        ["WS2812B", "5V", "Her LED ayrı kontrol edilir; ince efektler, kısa hatlar"],
        ["WS2813", "5V", "Yedek veri hattı var; bir piksel bozulunca hattın geri kalanı sönmez"],
        ["SK6812", "5V", "WS2812B uyumlu; RGBW (ayrı beyaz) versiyonu bulunur"],
      ],
    },
    {
      type: "p",
      text: "Tabela ve cephe işlerinde 12V pixel şerit öne çıkar. Aynı güçte akım 5V'a göre çok daha düşüktür ve hat daha uzağa gider. 5V sistemler ince çözünürlük istenen iç mekan ve dekoratif işlerde tercih edilir. Kontrol cihazının çipi desteklemesi şarttır; destekli çip listesi cihazın ürün sayfasında veya uygulamasında yazar.",
    },

    { type: "h2", text: "Kontrol cihazı seçimi" },
    {
      type: "ul",
      items: [
        "Protokol desteği: cihaz, şeridin çipini desteklemelidir. [SP107E](/urunler/led-kontrol-uniteleri/pixel-rgb-kontrol-cihazi-sp107e/) ve [SP548E](/urunler/led-kontrol-uniteleri/22-tuslu-pixel-rgb-kontrol-cihazi-sp548e/) WS2811, WS2812B, WS2813 ve SK6812'yi destekler.",
        "Kontrol şekli: yalnızca telefondan yönetilecek kompakt işlerde [SP110E](/urunler/led-kontrol-uniteleri/pixel-rgb-kontrol-cihazi-sp110e/) yeterlidir. Telefonu açmadan efekt değiştirilmesi gereken yerlerde (dükkân, vitrin) fiziksel kumandalı SP548E pratiktir.",
        "Piksel sayısı: her cihazın sürebileceği azami piksel adedi vardır. Hattın toplam piksel sayısını hesaplayıp cihazın sınırıyla karşılaştırın.",
        "Uygulama ayarları: çip tipi, renk sırası (RGB, GRB vb.) ve piksel sayısı kurulumda uygulamadan girilir. Bu ayarlar yanlışsa renkler karışık çıkar veya efekt hattın bir kısmında durur.",
      ],
    },

    { type: "h2", text: "Bağlantı: veri hattı ve güç beslemesi" },
    {
      type: "ul",
      items: [
        "Ok yönüne uyun. Şerit üzerindeki oklar veri akış yönünü gösterir; kontrol cihazı hattın ok başlangıcındaki uca bağlanır. Ters uçtan bağlanan şerit hiç yanmaz.",
        "Veri kablosunu kısa tutun. Kontrol cihazı ile ilk piksel arasındaki veri hattı uzadıkça sinyal bozulur. Cihazı hattın başına yakın konumlandırın.",
        "Ortak eksi (GND) şart. Kontrol cihazı ve şerit farklı trafolardan besleniyorsa eksi uçlar birleştirilmelidir. Ortak referans olmadan veri okunamaz ve hat rastgele titrer.",
        "Gücü birden fazla noktadan verin. Veri zinciri hattın sonuna kadar gider ama güç gitmez. Uzun hatlarda şerit ara noktalardan trafoya ayrıca bağlanır; bunu yapmamak hattın sonunda sararma ve renk kaymasına yol açar.",
      ],
    },
    {
      type: "p",
      text: "Trafo hesabı normal şeritle aynıdır: metraj × W/m, üzerine %20 pay. Pixel şeritte tam güç, tüm pikseller beyaz yandığında çekilir; hesap bu duruma göre yapılır. Metre başına gücü şeridin etiketinden alıp [trafo amper hesaplama aracına](/araclar/trafo-amper-hesaplama/) girebilirsiniz. Besleme mesafesi kuralları için [voltaj düşümü rehberimize](/blog/led-serit-voltaj-dusumu/) bakın.",
    },

    { type: "h2", text: "Nerede kullanılır?" },
    {
      type: "ul",
      items: [
        "Hareketli tabela konturları: harf çevresinde akan veya sırayla yanan ışık.",
        "Cephe ve saçak hatları: bina boyunca dalgalanan renk efektleri.",
        "Vitrin ve mağaza içi: dikkat çeken, programlanabilir sahneler.",
        "Point LED ile piksel uygulamaları: 50 mm pixel point LED'lerle cephede nokta nokta animasyon. Ayrıntılar için [point LED rehberimize](/blog/point-led-nedir/) bakın.",
      ],
    },
    {
      type: "p",
      text: "İç mekan hatları için [IP20 pixel şerit LED](/urunler/led-serit/ip20-pixel-serit-led/) sayfamızda teknik detayları bulabilirsiniz. Dış mekanda kullanılacak pixel hatlarda şeridin kendisi kadar bağlantı noktalarının da su yalıtımı önemlidir; konuyu [IP65 mi IP67 mi yazımızda](/blog/ip65-mi-ip67-mi-tabela-led/) ele aldık.",
    },

    { type: "h2", text: "Sık yapılan hatalar" },
    {
      type: "ul",
      items: [
        "Pixel şeridi RGB kumandaya bağlamak. RGB kumanda pixel şeridi süremez; şerit ya hiç yanmaz ya da anlamsız renkler verir.",
        "Veri yönünü ters bağlamak. Oklar kontrol cihazından uzaklaşacak şekilde olmalıdır.",
        "Farklı trafolar arasında ortak eksiyi bağlamamak. Hat titrer, efektler rastgele durur.",
        "Uygulamada çip tipini veya renk sırasını yanlış seçmek. Kırmızı yerine yeşil yanıyorsa renk sırası (RGB/GRB) ayarı yanlıştır.",
        "Uzun hattı tek uçtan beslemek. Veri sona ulaşır ama güç ulaşmaz; hattın sonu sönük ve sarı yanar.",
      ],
    },
  ],
  faq: [
    {
      q: "Pixel LED ile RGB LED arasındaki fark nedir?",
      a: "RGB şeritte hattın tamamı aynı anda tek renk yanar. Pixel (adreslenebilir) şeritte her piksel ayrı kontrol edilir; akan, dalgalanan ve sıralı efektler yapılabilir. Pixel şerit 3 damarlıdır (V+, DATA, GND) ve pixel kontrol cihazı ister.",
    },
    {
      q: "Pixel şeridi normal RGB kumandayla çalıştırabilir miyim?",
      a: "Hayır. RGB kumanda renk kanallarına güç verir, pixel şerit ise dijital veri bekler. Pixel şerit için çipini destekleyen bir pixel kontrol cihazı (SP107E, SP110E, SP548E gibi) gerekir.",
    },
    {
      q: "Pixel şerit neden hiç yanmıyor?",
      a: "En yaygın üç sebep: kontrol cihazı hattın ters ucuna bağlanmıştır (ok yönü), uygulamada yanlış çip tipi seçilmiştir veya kontrol cihazı ile şerit farklı trafolardan beslenip ortak eksi bağlanmamıştır.",
    },
    {
      q: "12V pixel şerit mi 5V pixel şerit mi seçmeliyim?",
      a: "Tabela, cephe ve uzun hatlarda 12V. Aynı güçte akım daha düşüktür ve hat daha uzağa gider. 5V şeritlerde her LED ayrı kontrol edildiği için efekt daha incedir, ama kısa hatlar ve sık güç beslemesi gerektirir.",
    },
    {
      q: "Pixel şeritte renkler karışık çıkıyor, neden?",
      a: "Kontrol cihazının uygulamasındaki renk sırası (RGB, GRB, BRG) şeridin çipiyle uyuşmuyordur. Ayarı değiştirip kırmızı, yeşil ve maviyi tek tek deneyerek doğru sırayı bulabilirsiniz.",
    },
    {
      q: "Uzun pixel hattında sonlara doğru renk neden sararıyor?",
      a: "Veri zinciri hattın sonuna kadar ulaşır ama güç ulaşmaz; voltaj düşümü yüzünden mavi kanal zayıflar ve hattın sonu sarı görünür. Şeridi ara noktalardan trafoya ayrıca bağlamak sorunu çözer.",
    },
  ],
};
