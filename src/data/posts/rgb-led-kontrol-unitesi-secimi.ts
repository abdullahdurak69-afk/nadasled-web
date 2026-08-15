import type { BlogPost } from "../blog";

export const rgbLedKontrolUnitesiSecimi: BlogPost = {
  slug: "rgb-led-kontrol-unitesi-secimi",
  title: "RGB LED Kontrol Ünitesi Seçimi: Kumanda, Amplifikatör, Bağlantı",
  metaTitle: "RGB LED Kontrol Ünitesi Seçimi — Kumanda ve Amplifikatör",
  metaDesc:
    "RGB kontrol ünitesi amperi nasıl seçilir, amplifikatör ne zaman gerekir, RF ile IR kumanda farkı ve en sık yapılan bağlantı hataları.",
  excerpt: "Kontrol ünitesi amperi, amplifikatör ihtiyacı ve RF/IR kumanda farkı — bağlantı sırası dahil.",
  date: "2026-08-16",
  readMins: 8,
  categorySlug: "led-kontrol-uniteleri",
  categoryName: "LED Kontrol Üniteleri",
  blocks: [
    {
      type: "p",
      text: "RGB bir iş, tek renk bir işe göre iki ek parça getirir: kontrol ünitesi ve gerekiyorsa amplifikatör. Sahada yaşanan sorunların çoğu bu iki parçanın yanlış boyutlandırılmasından çıkar — renkler hattın sonunda kayar, kumanda kasa içinden çalışmaz veya kontrol ünitesi birkaç ay içinde ısınıp bozulur.",
    },
    {
      type: "p",
      text: "Bu rehberde kontrol ünitesi amperinin nasıl seçileceğini, amplifikatörün ne zaman gerektiğini, kumanda tiplerinin farkını ve bağlantı sırasını bulacaksınız.",
    },

    { type: "h2", text: "Kontrol ünitesinin amperi nasıl seçilir?" },
    {
      type: "p",
      text: "Kontrol ünitesi, trafodan gelen gücün tamamının içinden geçtiği bir anahtardır. Bu yüzden ünitenin amper değeri, beslediği yükün amperinden büyük olmalıdır. Hesap trafo hesabıyla aynıdır: toplam güç ÷ voltaj = amper. Üzerine %20 pay bırakılır.",
    },
    {
      type: "ul",
      items: [
        "1. Adım — Toplam gücü bulun: metraj × W/m. RGB şeritte tüm renkler aynı anda yandığında (beyaz) tam güç çekilir; hesap bu duruma göre yapılır.",
        "2. Adım — Voltaja bölün: 12V sistemde ÷12, 24V sistemde ÷24.",
        "3. Adım — %20 pay ekleyin ve bir üst kontrol ünitesi kademesini seçin.",
      ],
    },
    {
      type: "table",
      headers: ["Şerit", "Metraj", "Toplam güç", "Akım (12V)", "Kontrol ünitesi"],
      rows: [
        ["5050 RGB · 60 LED/m", "5 m", "72 W", "6 A", "12 A"],
        ["5050 RGB · 60 LED/m", "10 m", "144 W", "12 A", "18-20 A"],
        ["5050 RGB · 60 LED/m", "20 m", "288 W", "24 A", "amplifikatörle bölün"],
      ],
    },
    {
      type: "p",
      text: "Tablodaki son satır önemli: tek kontrol ünitesinden 20 amperin üzerinde yük geçirmek yerine, sistemi amplifikatörle bölmek hem güvenli hem de daha ucuzdur. Güç hesabını [LED şerit güç hesaplama aracıyla](/araclar/led-serit-guc-hesaplama) hızlıca çıkarabilirsiniz.",
    },

    { type: "h2", text: "Amplifikatör ne işe yarar, ne zaman gerekir?" },
    {
      type: "p",
      text: "Amplifikatör bir yükseltici değil, sinyal tekrarlayıcıdır. Kontrol ünitesinden gelen renk sinyalini okur ve kendi girişindeki trafodan aldığı güçle aynı sinyali yeniden üretir. Yani gücü kontrol ünitesinden değil, doğrudan trafodan çeker — kontrol ünitesinin yükünü artırmaz.",
    },
    {
      type: "p",
      text: "Amplifikatör iki durumda gerekir: hattın toplam akımı kontrol ünitesinin kapasitesini aştığında ve hat uzadıkça renklerde kayma başladığında. İkincisi daha sinsidir: 15-20 metreden sonra sinyal zayıflar, kırmızı ve mavi kanalların dengesi bozulur ve hattın sonu farklı bir tonda yanar.",
    },

    { type: "h2", text: "Bağlantı sırası" },
    {
      type: "ul",
      items: [
        "Şebeke → trafo. Trafo 220V'u 12V veya 24V doğru gerilime çevirir.",
        "Trafo → kontrol ünitesi girişi. Artı ve eksi kutupların doğru bağlanması şart; ters bağlantı ünitenin çoğu modelinde kalıcı hasar bırakır.",
        "Kontrol ünitesi çıkışı → şerit. RGB şeritte dört uç vardır: ortak artı (V+) ve üç renk kanalı (R, G, B). Şerit üzerindeki harflerle ünite çıkışındaki harfler birebir eşleşmelidir.",
        "Uzun hatlarda: kontrol ünitesi → amplifikatör sinyal girişi, ayrı bir trafo çıkışı → amplifikatör güç girişi, amplifikatör çıkışı → ikinci segment.",
      ],
    },
    {
      type: "p",
      text: "Renk kanallarının sırası karışırsa tabela yanar ama kumandadaki renklerle ekrandaki renkler tutmaz — kırmızıya bastığınızda yeşil yanar. Çözüm basittir: çıkış uçlarını doğru sıraya almak. Konnektör ve kablo çeşitleri için [yardımcı ürünler kategorisine](/urunler/yardimci-urunler) bakabilirsiniz.",
    },

    { type: "h2", text: "RF, IR ve uygulamalı kumandalar" },
    {
      type: "table",
      headers: ["Tip", "Menzil", "Görüş hattı", "Nerede kullanılır"],
      rows: [
        ["IR (kızılötesi)", "5-8 m", "Gerekli", "İç mekan, alıcının göründüğü yerler"],
        ["RF (radyo frekansı)", "15-30 m", "Gerekmez", "Tabela, kasa içi, duvar arkası"],
        ["Wi-Fi / uygulama", "Ağ kapsamı", "Gerekmez", "Senaryo ve zamanlayıcı gereken işler"],
        ["DMX", "Kablolu hat", "Gerekmez", "Çok segmentli, senkron animasyon"],
      ],
    },
    {
      type: "p",
      text: "Tabela işlerinde IR kumanda neredeyse hiç uygun değildir: alıcı kasa içinde kalır ve sinyal ulaşmaz. RF standart tercihtir. Zamanlayıcı gereken işlerde (akşam yanma, gece yarısı sönme) Wi-Fi modeller veya ayrı bir astronomik zaman rölesi kullanılır. Ürün çeşitleri için [LED kontrol üniteleri kategorimize](/urunler/led-kontrol-uniteleri) bakın.",
    },

    { type: "h2", text: "En sık yapılan beş hata" },
    {
      type: "ul",
      items: [
        "Kontrol ünitesini yükün tam sınırında seçmek — sürekli tam yükte çalışan ünite ısınır ve erken bozulur.",
        "Amplifikatörün güç girişini kontrol ünitesinden almak — amplifikatör kendi trafo beslemesini ister, aksi halde kontrol ünitesi iki katı yük taşır.",
        "IR kumandalı ünite alıp kasa içine gömmek — sinyal ulaşmaz, tabela kumandaya cevap vermez.",
        "RGB hattını tek noktadan besleyip 10 metrenin üzerine çıkmak — voltaj düşümü renk dengesini bozar, hattın sonu farklı tonda yanar.",
        "Kontrol ünitesini dış ortama korumasız monte etmek — çoğu model iç mekan sınıfıdır; dış mekanda sızdırmaz kutu içine alınmalıdır.",
      ],
    },
  ],
  faq: [
    {
      q: "10 metre RGB şerit için kaç amperlik kontrol ünitesi gerekir?",
      a: "5050 RGB 60 LED/m şerit metrede 14,4 W çeker; 10 metre 144 W eder. 12V sistemde bu 12 amperdir, %20 payla 18-20 amperlik bir kontrol ünitesi seçilmelidir.",
    },
    {
      q: "Amplifikatör ne zaman gerekir?",
      a: "İki durumda: hattın toplam akımı kontrol ünitesinin kapasitesini aştığında ve hat 15-20 metreyi geçip renklerde kayma başladığında. Amplifikatör gücü kontrol ünitesinden değil kendi trafosundan çeker.",
    },
    {
      q: "Kumandaya bastığım renk yanmıyor, sorun ne?",
      a: "Renk kanallarının sırası karışmıştır. RGB şeritte ortak artı (V+) ve üç kanal (R, G, B) vardır; şerit üzerindeki harflerle kontrol ünitesi çıkışındaki harfler birebir eşleşmelidir.",
    },
    {
      q: "Tabelada IR mi RF mi kumanda kullanmalıyım?",
      a: "RF. IR kumanda görüş hattı ister, tabela işlerinde alıcı kasa içinde kaldığı için sinyal ulaşmaz. RF 15-30 metre menzilde ve duvar arkasından çalışır.",
    },
    {
      q: "Kontrol ünitesi dış mekana monte edilebilir mi?",
      a: "Çoğu model iç mekan sınıfıdır. Dış ortamda kullanılacaksa sızdırmaz bir kutu içine alınmalı veya IP sınıfı belirtilmiş dış mekan modeli tercih edilmelidir.",
    },
    {
      q: "Tabelanın belirli saatlerde yanıp sönmesini nasıl sağlarım?",
      a: "Wi-Fi / uygulama destekli kontrol ünitelerinde zamanlayıcı vardır. Alternatif olarak sisteme astronomik zaman rölesi eklenir; bu röle gün doğumu ve batımını takvimden hesaplayarak açıp kapatır.",
    },
  ],
};
