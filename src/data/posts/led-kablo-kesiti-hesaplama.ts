import type { BlogPost } from "../blog";

export const ledKabloKesitiHesaplama: BlogPost = {
  slug: "led-kablo-kesiti-hesaplama",
  title: "LED Kablo Kesiti Nasıl Hesaplanır? Mesafe, Amper ve Doğru Bağlantı",
  metaTitle: "LED Kablo Kesiti Hesaplama — Mesafeye Göre Tablo",
  metaDesc:
    "12V ve 24V LED hatlarında kablo kesiti hesabı: formül, örnek, mesafeye göre azami kablo boyu tablosu ve WAGO, lehim, konnektör gibi bağlantı yöntemleri.",
  excerpt: "Trafo ile ışık arasındaki kablo kaç mm² olmalı? Formül, hazır tablo ve bağlantı yöntemleri.",
  date: "2026-09-29",
  readMins: 8,
  categorySlug: "yardimci-urunler",
  categoryName: "Yardımcı Ürünler",
  blocks: [
    {
      type: "p",
      text: "Kablo, LED tesisatının en ucuz kalemidir ve en sık yanlış seçilen de odur. Trafo doğru hesaplanmış, şerit doğru seçilmiş olabilir; aradaki kablo inceyse ışık yine sönük yanar ve bağlantı noktaları ısınır.",
    },
    {
      type: "p",
      text: "Şeridin kendi bakır yollarındaki kaybı [LED şeritte voltaj düşümü](/blog/led-serit-voltaj-dusumu/) yazısında anlattık. Bu yazının konusu trafo ile ışık arasındaki besleme kablosu: kaç mm² olması gerektiği, bunun nasıl hesaplandığı ve uçların nasıl bağlanacağı.",
    },

    { type: "h2", text: "Akım tablosu neden tek başına yetmez?" },
    {
      type: "p",
      text: "Diğer rehberlerimizde ve hesaplama araçlarında akıma göre pratik bir tablo veriyoruz: 5 ampere kadar 0,75 mm², 10 ampere kadar 1 mm², 16 ampere kadar 1,5 mm². Bu tablo kablonun ısınmadan taşıyabileceği alt sınırı gösterir. Trafo ışığa bir iki metre yakınken doğru sonuç verir.",
    },
    {
      type: "p",
      text: "Mesafe uzadığında belirleyici olan artık ısınma değil gerilim düşümüdür. 12V hatta 5 amperi 0,75 mm² kabloyla 5 metre taşırsanız kablo ısınmaz ama gerilimin yaklaşık %10'u yolda kalır. 220V tesisatta bu kayıp fark edilmez; 12V'ta hattın tamamının sönük ve sarımsı yanması demektir.",
    },

    { type: "h2", text: "Kesit hesabı: tek formül" },
    {
      type: "p",
      text: "Gerekli kesit (mm²) = 2 × L × I × 0,0175 ÷ ΔU",
    },
    {
      type: "ul",
      items: [
        "L — trafo ile yük arasındaki tek yön mesafe (metre). Akım artı damardan gidip eksi damardan döndüğü için 2 ile çarpılır.",
        "I — o kablodan geçen gerçek akım (amper). Trafonun etiket akımı değil, kablonun beslediği yükün akımıdır: 150 W'lık trafo 60 W'lık bir şeridi besliyorsa 12V'ta kablodan 5 A geçer.",
        "0,0175 — bakırın özdirenci (Ω·mm²/m).",
        "ΔU — kabul edilebilir gerilim kaybı (volt). Hedef %3'tür: 12V'ta 0,36 V, 24V'ta 0,72 V.",
      ],
    },
    {
      type: "p",
      text: "Çıkan sonucu bir üst standart kesite yuvarlayın: 0,5 – 0,75 – 1 – 1,5 – 2,5 mm². Hattın akımını bilmiyorsanız [trafo amper hesaplama aracı](/araclar/trafo-amper-hesaplama/) modül adedinden ya da şerit metrajından çıkarır.",
    },

    { type: "h2", text: "Örnek: trafo 6 metre uzakta" },
    {
      type: "p",
      text: "Bir dükkân vitrininde 12V, 60 W şerit var; trafo arka depoda duruyor ve kablo boyu 6 metre. Akım 60 ÷ 12 = 5 A. Gerekli kesit 2 × 6 × 5 × 0,0175 ÷ 0,36 = 2,92 mm². Farklı seçeneklerin kabloda bıraktığı gerilim şöyle:",
    },
    {
      type: "table",
      headers: ["Seçenek", "Kablo boyu", "Kablodaki kayıp"],
      rows: [
        ["12V, 2 × 0,75", "6 m", "%11,7 — hattın tamamı sönük"],
        ["12V, 2 × 1,5", "6 m", "%5,8 — gözle fark edilir"],
        ["12V, 2 × 2,5", "6 m", "%3,5 — sınırda"],
        ["24V şerit, 2 × 0,75", "6 m", "%2,9 — yeterli"],
        ["12V, trafo vitrine taşınır, 2 × 1,5", "2 m", "%1,9 — yeterli"],
      ],
    },
    {
      type: "p",
      text: "12V'ta 2,5 mm² bile hedefi tam tutturmuyor. Aynı iş 24V şeritle kurulduğunda akım yarıya iner, izin verilen kayıp iki katına çıkar ve 0,75 mm² yeter; ayrıntısı [12V mu 24V mu](/blog/12v-mu-24v-mu-tabela-aydinlatma/) yazısında. Şerit 12V'ta kalacaksa en ucuz çözüm trafoyu ışığa yaklaştırmaktır. Trafonun 220V beslemesini uzatmak düşük voltaj hattını uzatmaktan kolaydır, ancak bu tarafın işçiliği bir elektrikçiye aittir.",
    },

    { type: "h2", text: "Hazır tablo: %3 kayıpla azami kablo boyu" },
    {
      type: "p",
      text: "Hesap yapmadan karar vermek için aşağıdaki tablolar her kesitin %3 kayıpla ne kadar mesafe taşıyabildiğini gösterir. Değerler trafo ile yük arasındaki tek yön mesafedir. Önce 12V hatlar:",
    },
    {
      type: "table",
      headers: ["Kesit", "30 W (2,5 A)", "60 W (5 A)", "100 W (8,3 A)"],
      rows: [
        ["2 × 0,5", "2,1 m", "1,0 m", "0,6 m"],
        ["2 × 0,75", "3,1 m", "1,5 m", "0,9 m"],
        ["2 × 1", "4,1 m", "2,1 m", "1,2 m"],
        ["2 × 1,5", "6,2 m", "3,1 m", "1,9 m"],
        ["2 × 2,5", "10,3 m", "5,1 m", "3,1 m"],
      ],
    },
    {
      type: "p",
      text: "24V hatlarda aynı kesitler:",
    },
    {
      type: "table",
      headers: ["Kesit", "60 W (2,5 A)", "120 W (5 A)", "240 W (10 A)"],
      rows: [
        ["2 × 0,5", "4,1 m", "2,1 m", "1,0 m"],
        ["2 × 0,75", "6,2 m", "3,1 m", "1,5 m"],
        ["2 × 1", "8,2 m", "4,1 m", "2,1 m"],
        ["2 × 1,5", "12,3 m", "6,2 m", "3,1 m"],
        ["2 × 2,5", "20,6 m", "10,3 m", "5,1 m"],
      ],
    },
    {
      type: "p",
      text: "Aynı akımda 24V hat iki kat, aynı watt'ta dört kat uzağa gider. Tablonun dışına düşen işlerde daha kalın kablo aramak yerine yükü iki ayrı hatta bölün, trafoyu yaklaştırın ya da 24V'a geçin. 2,5 mm²'den kalın kabloyu şerit lehim pedine veya modül ucuna bağlamak zaten pratik değildir.",
    },

    { type: "h2", text: "Kablo seçerken dört tuzak" },
    {
      type: "ul",
      items: [
        "\"2 × 1,5\" iki damarın her birinin 1,5 mm² olduğunu söyler; toplam 3 mm² demek değildir. Hesaba tek damarın kesiti girer.",
        "Kaplama (CCA) kablo, yani bakır kaplı alüminyum, aynı kesitte bakırdan yaklaşık 1,5 kat fazla direnç gösterir. Etiketinde 1,5 mm² yazan CCA kablo 1 mm² bakır gibi davranır.",
        "Ortak kabloyu tek hat gibi hesaplamak — bir trafodan çıkan kalın bir kablo birkaç kutu harfe dağılıyorsa ortak bölüm toplam akımla, her dal kendi yüküyle hesaplanır.",
        "Tek telli (NYA) kablo kullanmak — kutu harfin içinde kıvrılan ve titreşen hatlarda tek telli kablo bükülme noktasında zamanla kırılır. Bu işler için çok telli esnek kablo kullanılır.",
      ],
    },
    {
      type: "p",
      text: "Çok telli esnek bakır kablonun kesit seçenekleri ve 60 W'lık yük için kayıp tablosu [NYAF bakır kablo sayfasında](/urunler/yardimci-urunler/nyaf-bakir-kablo/) yer alıyor.",
    },

    { type: "h2", text: "Bağlantı yöntemleri: hangisi nerede?" },
    {
      type: "table",
      headers: ["Yöntem", "Nerede", "Dikkat"],
      rows: [
        ["Lehim + ısıyla daralan makaron", "Şerit ve modül ucu, dış mekan ekleri", "Geçiş direnci en düşük yöntem; dış mekanda yapışkanlı makaron kullanın"],
        ["WAGO kollu klemens", "Bağlantı kutusu, pano, trafo çıkışında dağıtım", "Sökülüp takılabilir ama su geçirmez değildir; kutu içinde kalmalı"],
        ["Lehimsiz şerit konnektörü", "İç mekan, kısa şerit ekleri", "Uzun ve dış mekan hatlarda zamanla oksitlenip direnç yapar"],
        ["Soketli hazır kablo", "Trafo ile şerit arası hızlı bağlantı", "Boyu sabittir; uzatılacaksa uzatma kablosu için ayrıca kesit hesabı yapın"],
        ["Vidalı klemens", "Trafo giriş ve çıkış terminalleri", "Çok telli kablonun ucuna yüksük takın"],
      ],
    },
    {
      type: "p",
      text: "Vidalı klemens notu önemlidir. Çok telli kablonun ince telleri vida altına çıplak sıkıştırıldığında dağılır, bir kısmı dışarıda kalır ve temas yüzeyi küçülür. Ucu lehimle kalaylamak da çözüm değildir: lehim vida baskısı altında zamanla akar, bağlantı gevşer ve ısınır. Doğrusu kablo ucuna yüksük takıp öyle sıkmaktır.",
    },
    {
      type: "p",
      text: "WAGO klemensler, lehimsiz konnektörler ve kablo sonlandırıcılar [yardımcı ürünler kategorisinde](/urunler/yardimci-urunler/).",
    },

    { type: "h2", text: "Kutup, işaretleme ve sonlandırma" },
    {
      type: "ul",
      items: [
        "Şeffaf kordon kablolarda damarlardan biri çizgili ya da yazılıdır. Bütün işte bu damarı artı olarak kullanın; servise gelen kişi hangi damarın ne olduğunu ölçmeden bilir.",
        "Ters kutupta tek renk şeritlerin çoğu yalnızca yanmaz. Kontrol cihazı, pixel şerit ve sürücülü modüller ise ters kutuptan zarar görebilir; enerji vermeden önce kutbu ölçün.",
        "Kullanılmayan kablo uçlarını açık bırakmayın. Kablo sonlandırıcı ya da makaronla kapatın: açıkta kalan iki uç birbirine değerse trafo kısa devre korumasına geçer, dış mekanda da su çok telli kablonun içinden ilerler.",
        "Dış mekanda ek noktası zincirin en zayıf halkasıdır. Ürün IP67 olsa bile açıkta kalan bir ek suyu içeri alır; ayrıntısı [IP65 mi IP67 mi](/blog/ip65-mi-ip67-mi-tabela-led/) yazısında.",
      ],
    },

    { type: "h2", text: "Montajdan sonra ölçerek doğrulayın" },
    {
      type: "p",
      text: "Kablonun doğru seçilip seçilmediği bir multimetreyle iki dakikada anlaşılır. Işıklar yanarken önce trafonun çıkış uçlarındaki gerilimi, sonra kablonun yük tarafındaki ucundaki gerilimi ölçün. Aradaki fark kabloda kaybolan gerilimdir.",
    },
    {
      type: "ul",
      items: [
        "Fark 12V hatta 0,4 voltun, 24V hatta 0,7 voltun altındaysa kablo doğru seçilmiştir.",
        "Fark büyük ve kablo elde ılık geliyorsa kesit yetersizdir; bir üst kesite geçin ya da mesafeyi kısaltın.",
        "Fark büyük ama kablo soğuksa sorun bir bağlantı noktasındadır. Gevşek ya da oksitlenmiş ek, çalışırken ısınır; bağlantıları tek tek kontrol edin.",
      ],
    },
    {
      type: "p",
      text: "Şeridin kendi içindeki düşüm için [voltaj düşümü](/blog/led-serit-voltaj-dusumu/), trafo gücü için [LED trafo hesaplama](/blog/led-trafo-hesaplama/) rehberine bakabilirsiniz. Projenizin mesafesini ve yükünü iletirseniz kablo, konnektör ve trafoyu birlikte hesaplayıp fiyatlandıralım.",
    },
  ],
  faq: [
    {
      q: "LED için kablo kesiti nasıl hesaplanır?",
      a: "Kesit (mm²) = 2 × mesafe (m) × akım (A) × 0,0175 ÷ izin verilen kayıp (V). %3 hedefiyle 12V'ta 0,36 V, 24V'ta 0,72 V alın ve sonucu bir üst standart kesite yuvarlayın.",
    },
    {
      q: "12V 60W LED şerit için kaç mm² kablo gerekir?",
      a: "Trafo ile şerit arasındaki mesafeye bağlıdır. %3 kayıpla 0,75 mm² yaklaşık 1,5 metreye, 1,5 mm² 3 metreye, 2,5 mm² 5 metreye kadar yeter. Daha uzun mesafede trafoyu yaklaştırın veya 24V sisteme geçin.",
    },
    {
      q: "Kablo boyu hesaba nasıl girer?",
      a: "Trafo ile yük arasındaki tek yön mesafe ölçülür ve formülde 2 ile çarpılır, çünkü akım artı damardan gidip eksi damardan döner.",
    },
    {
      q: "2 × 1,5 kablo toplam 3 mm² mi sayılır?",
      a: "Hayır. 2 × 1,5 iki damarın her birinin 1,5 mm² olduğunu gösterir. Gerilim düşümü hesabına tek damarın kesiti girer.",
    },
    {
      q: "WAGO klemens dış mekanda kullanılır mı?",
      a: "WAGO klemens su geçirmez değildir. Dış mekanda IP sınıfı uygun bir bağlantı kutusunun içinde kullanılır; kutu yoksa lehim ve yapışkanlı ısıyla daralan makaron tercih edilir.",
    },
    {
      q: "Kablonun doğru seçildiğini nasıl anlarım?",
      a: "Işıklar yanarken trafo çıkışındaki ve kablonun yük tarafındaki gerilimi multimetreyle ölçün. Fark 12V hatta 0,4 voltun, 24V hatta 0,7 voltun altındaysa kablo doğru seçilmiştir.",
    },
  ],
};
