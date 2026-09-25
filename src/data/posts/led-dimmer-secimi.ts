import type { BlogPost } from "../blog";

export const ledDimmerSecimi: BlogPost = {
  slug: "led-dimmer-secimi",
  title: "LED Dimmer Seçimi: Amper Hesabı, Dimmer Tipleri ve Doğru Bağlantı",
  metaTitle: "LED Dimmer Seçimi — Amper, Tipler ve Bağlantı",
  metaDesc:
    "Tek renk LED şerit ve COB hatları için dimmer nasıl seçilir? Amper hesabı, potanslı, dokunmatik ve mini dimmer farkı, bağlantı sırası ve sık hatalar.",
  excerpt: "Tek renk hatlarda dimmerin amperi, tipi ve trafodan sonra doğru bağlantısı — örnek hesaplarla.",
  date: "2026-09-25",
  readMins: 7,
  categorySlug: "led-kontrol-uniteleri",
  categoryName: "LED Kontrol Üniteleri",
  blocks: [
    {
      type: "p",
      text: "Dimmer, tek renk bir LED hattının parlaklığını ayarlayan cihazdır. Vitrin, raf içi, pergola ve otel lobisi gibi işlerde gündüz ve gece için farklı ışık seviyesi istenir. Tabelalarda da gece yarısından sonra parlaklığı düşürmek hem göz yormaz hem de enerji tasarrufu sağlar.",
    },
    {
      type: "p",
      text: "Dimmer seçimi RGB kontrol ünitesi seçimine benzer ama daha basittir: renk kanalı yoktur, yalnızca bir çıkış vardır. Hatalar da çoğunlukla iki yerden çıkar: amper kapasitesi yetersiz seçilir ya da dimmer yanlış tarafa, trafonun 220V girişine bağlanır.",
    },

    { type: "h2", text: "LED dimmer nasıl çalışır?" },
    {
      type: "p",
      text: "12V ve 24V LED hatlarında kullanılan dimmerler PWM (darbe genişlik modülasyonu) yöntemiyle çalışır. Voltajı düşürmezler; hattı saniyede yüzlerce, kaliteli modellerde binlerce kez açıp kapatırlar. Göz bu hızlı yanıp sönmeyi göremez ve açık kalma oranını parlaklık olarak algılar. %50 ayarında hat, zamanın yarısında yanıktır.",
    },
    {
      type: "p",
      text: "Bu yüzden LED dimmer her zaman trafonun çıkışına, yani doğru gerilim (DC) tarafına bağlanır. Evdeki duvar tipi 220V dimmeri trafonun girişine takmak işe yaramaz: sıradan LED trafoları kısılmış şebeke gerilimiyle çalışacak şekilde tasarlanmamıştır. Sonuç ya titreşen bir hat ya da arızalanan bir trafodur.",
    },

    { type: "h2", text: "Amper hesabı: dimmer kaç amper olmalı?" },
    {
      type: "p",
      text: "Dimmer, hattın çektiği akımın tamamını üzerinden geçirir. Hesap trafo hesabıyla aynıdır: toplam güç ÷ voltaj = amper. Üzerine %20 pay eklenir ve bir üst kademe seçilir. Dimmeri sınırında çalıştırmak ısınma ve erken arıza demektir.",
    },
    {
      type: "table",
      headers: ["Hat", "Toplam güç", "Akım", "%20 payla", "Uygun dimmer"],
      rows: [
        ["5 m COB · 12 W/m · 24V", "60 W", "2,5 A", "3 A", "6A mini dimmer"],
        ["10 m COB · 12 W/m · 24V", "120 W", "5 A", "6 A", "8A dimmer (6A sınırda kalır)"],
        ["20 m COB · 12 W/m · 24V", "240 W", "10 A", "12 A", "30A potanslı dimmer"],
        ["10 m şerit · 11 W/m · 12V", "110 W", "9,2 A", "11 A", "30A potanslı dimmer"],
      ],
    },
    {
      type: "p",
      text: "Son satır önemli: aynı güçte 12V hat, 24V hattın iki katı akım çeker. Uzun hatlarda 24V seçmek dimmer, kablo ve voltaj düşümü açısından avantajlıdır. Ayrıntısı için [12V mu 24V mu yazımıza](/blog/12v-mu-24v-mu-tabela-aydinlatma/) bakabilirsiniz. Toplam gücü [LED şerit güç hesaplama aracıyla](/araclar/led-serit-guc-hesaplama/) hızlıca çıkarabilirsiniz.",
    },

    { type: "h2", text: "Dimmer tipleri: hangisi nerede?" },
    {
      type: "table",
      headers: ["Tip", "Kontrol", "Nerede uygun"],
      rows: [
        ["Potanslı dimmer", "Döner düğme, kademesiz", "Pano içi, bir kez ayarlanıp bırakılan hatlar; yüksek akım"],
        ["Dokunmatik dimmer", "Duvar tipi dokunmatik panel", "Kullanıcının her gün ayarladığı iç mekan işleri"],
        ["Mini dimmer", "Küçük gövde, kısa hatlar", "Raf içi, vitrin, dar alana gizlenecek işler"],
        ["Kablo (hat üzeri) dimmer", "Kablo üzerinde ara parça", "Masa altı, mobilya, prizden beslenen kısa hatlar"],
        ["Dimmer repeater", "Dimmerden gelen sinyali çoğaltır", "Tek dimmerin taşıyamadığı uzun ve çok segmentli hatlar"],
      ],
    },
    {
      type: "p",
      text: "Tabela ve cephe işlerinde en çok [30A potanslı dimmer](/urunler/led-kontrol-uniteleri/30a-potansli-dimmer/) kullanılır. Pano içine monte edilir, parlaklık bir kez ayarlanır ve yüksek akım kapasitesi uzun COB hatlarını tek cihazdan sürer. Kısa ve dar alana sığması gereken işlerde [6A mini dimmer](/urunler/led-kontrol-uniteleri/6a-mini-dimmer-kontrol-cihazi/) yeterlidir. Tüm modeller için [LED kontrol üniteleri kategorimize](/urunler/led-kontrol-uniteleri/) bakın.",
    },

    { type: "h2", text: "Bağlantı sırası" },
    {
      type: "ul",
      items: [
        "Şebeke → trafo girişi. Dimmer bu tarafta yer almaz.",
        "Trafo çıkışı (V+ / V−) → dimmer girişi. Kutuplar dimmer üzerindeki işaretlere göre bağlanır; ters bağlantı çoğu modelde kalıcı hasar bırakır.",
        "Dimmer çıkışı → şerit. Tek renk şeritte iki uç vardır: artı ve eksi.",
        "Hat dimmerin kapasitesini aşıyorsa: dimmer çıkışı → repeater sinyal girişi, ayrı trafo çıkışı → repeater güç girişi, repeater çıkışı → ikinci segment.",
      ],
    },
    {
      type: "p",
      text: "Trafo, dimmer takılı olsa bile hattın tam gücüne göre seçilir. Dimmer tüketimi düşürür ama tam parlaklığa çıkıldığı an trafo yine tam yükü taşır. Trafo boyutlandırması için [LED trafo hesaplama rehberimize](/blog/led-trafo-hesaplama/) bakabilirsiniz.",
    },

    { type: "h2", text: "Titreme ve düşük seviye sorunları" },
    {
      type: "p",
      text: "Dimmerli hatlarda en sık şikâyet, düşük parlaklıkta ışığın titremesi veya telefon kamerasında çizgili görünmesidir. Bunun iki yaygın sebebi vardır: düşük PWM frekanslı dimmer ve yetersiz kablo kesiti. PWM frekansı düşük olan cihazlar gözle fark edilmese de kamerada bant bant görünür. Mağaza, showroom ve video çekilen mekânlarda bu önemlidir; sipariş öncesi cihazın frekans değerini sormak gerekir.",
    },
    {
      type: "p",
      text: "Uzun hatlarda voltaj düşümü, düşük dimmer seviyelerinde daha belirgin hale gelir: hattın başı yanarken sonu tamamen sönebilir. Çözüm dimmer değiştirmek değil, hattı birden fazla noktadan beslemektir. Yöntemleri [LED şeritte voltaj düşümü yazımızda](/blog/led-serit-voltaj-dusumu/) anlattık.",
    },

    { type: "h2", text: "Sık yapılan hatalar" },
    {
      type: "ul",
      items: [
        "220V duvar dimmerini trafonun girişine bağlamak. LED dimmer her zaman trafonun çıkışına bağlanır.",
        "Dimmeri hattın akımına eşit seçmek. %20 pay bırakılmayan dimmer ısınır ve erken bozulur.",
        "RGB şeride tek kanallı dimmer bağlamak. RGB hat, renk kanallarını ayrı süren bir kontrol ünitesi ister; bkz. [RGB kontrol ünitesi seçimi](/blog/rgb-led-kontrol-unitesi-secimi/).",
        "Dimmeri kapalı ve havasız bir kutuya gömmek. Yüksek akımlı modeller ısı üretir, havalandırma ister.",
        "Dış mekanda korumasız montaj. Çoğu dimmer iç mekan sınıfıdır; dışarıda sızdırmaz kutu içine alınmalıdır.",
      ],
    },
  ],
  faq: [
    {
      q: "LED şerit için normal ev dimmeri kullanılır mı?",
      a: "Hayır. 12V ve 24V LED hatları trafonun çıkışına bağlanan PWM dimmerle kısılır. Duvar tipi 220V dimmer trafonun girişine takıldığında sıradan LED trafoları doğru çalışmaz; hat titrer veya trafo arızalanır.",
    },
    {
      q: "20 metre COB şerit için kaç amper dimmer gerekir?",
      a: "24V COB şerit metrede 12 W çeker; 20 metre 240 W eder. 240 ÷ 24 = 10 A, %20 payla 12 A. Bu yükte 30A potanslı dimmer rahat çalışır; 8A'lik bir dimmer yetersiz kalır.",
    },
    {
      q: "Dimmer kullanınca trafo küçültülebilir mi?",
      a: "Hayır. Parlaklık tam seviyeye çıkarıldığında hat tam gücü çeker. Trafo her zaman hattın tam gücüne ve %20 paya göre seçilir.",
    },
    {
      q: "Dimmerli LED kamerada neden titriyor?",
      a: "Dimmer PWM yöntemiyle hattı hızla açıp kapatır. Frekansı düşük cihazlarda göz bunu fark etmese de telefon kamerası bant bant görür. Video çekilen mekânlarda yüksek frekanslı dimmer tercih edilmelidir.",
    },
    {
      q: "Dimmer ile RGB kontrol ünitesi arasındaki fark nedir?",
      a: "Dimmer tek renk hattın yalnızca parlaklığını ayarlar ve iki çıkışlıdır. RGB kontrol ünitesi kırmızı, yeşil ve mavi kanalları ayrı sürer, renk değiştirir ve dört çıkışlıdır.",
    },
    {
      q: "Uzun bir hat tek dimmerle kısılabilir mi?",
      a: "Hattın toplam akımı dimmerin kapasitesini aşıyorsa araya dimmer repeater konur. Repeater, dimmerden gelen sinyali alır ve gücü kendi trafosundan çekerek ikinci segmenti aynı seviyede sürer.",
    },
  ],
};
