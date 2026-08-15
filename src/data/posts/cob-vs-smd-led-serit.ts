import type { BlogPost } from "../blog";

export const cobVsSmdLedSerit: BlogPost = {
  slug: "cob-vs-smd-led-serit",
  title: "COB LED Şerit mi SMD mi? Farklar ve Doğru Seçim",
  metaTitle: "COB LED Şerit mi SMD mi? Farklar ve Doğru Seçim",
  metaDesc:
    "COB ve SMD LED şerit farkları: noktasız ışık, verim, ısı ve fiyat. Karşılaştırma tablosu, seçim rehberi ve montaj notlarıyla karar rehberi.",
  excerpt:
    "Noktasız homojen ışık mı, kanıtlanmış klasik mi? Proje tipine göre şerit seçimi.",
  date: "2026-06-05",
  readMins: 8,
  categorySlug: "cob-led-serit",
  categoryName: "COB LED Şerit",
  blocks: [
    {
      type: "p",
      text: "SMD şeritlerde LED'ler tek tek dizilidir ve yakından bakınca noktalar görünür. COB (Chip on Board) şeritlerde ise çipler kesintisiz dizilip fosfor tabakayla kaplanır: sonuç, uçtan uca kesintisiz bir ışık çizgisi.",
    },
    {
      type: "p",
      text: "Aradaki fark tek cümleyle anlatılabiliyor olsa da, seçim her projede COB lehine değildir. Belirleyici olan şeridin göze ne kadar yakın olduğu ve arada difüzör bulunup bulunmadığıdır.",
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
        ["Kesim aralığı", "2,5-10 cm", "1-5 cm (daha esnek)"],
        ["Isı yayılımı", "Noktasal", "Şerit boyunca yayılı, profil zorunlu"],
        ["Renk seçenekleri", "Çok geniş (RGB, RGBW, CCT)", "Geniş ama SMD kadar değil"],
      ],
    },

    { type: "h2", text: "Nokta izi ne zaman sorun olur?" },
    {
      type: "p",
      text: "Nokta izinin görünürlüğü üç değişkene bağlıdır: göz ile şerit arasındaki mesafe, arada difüzör olup olmadığı ve LED yoğunluğu. Şerit yüzeye 2-3 cm mesafedeyse ve difüzör yoksa, 60 LED/mt bir SMD şeritte noktalar tek tek sayılır. Aynı şerit 15 cm derinlikte bir karnisin içine gizlendiğinde nokta diye bir sorun kalmaz.",
    },
    {
      type: "p",
      text: "Pratik ölçüt şudur: ışık kaynağı görünüyorsa veya görünme ihtimali varsa COB düşünün. Işık kaynağı tamamen gizliyse SMD hem yeterli hem daha ekonomiktir.",
    },

    { type: "h2", text: "Hangisini ne zaman seçmeli?" },
    {
      type: "ul",
      items: [
        "Görünür montaj (ayna, raf altı, tezgah, açık profil): COB — noktasız görüntü farkı hemen belli olur.",
        "Gizli tavan/karnis içi (ışık kaynağı görünmüyorsa): SMD yeterli ve daha ekonomik.",
        "Tabela içi aydınlatma: SMD 2835 yaygın standart; derinlik yeterliyse fark yaratmaz.",
        "Dar alüminyum profil, vitrin içi ve merdiven basamağı: COB — yakın mesafede tek parça ışık verir.",
        "RGB ve renk değişimli dekoratif işler: SMD 5050 — renk çeşitliliği ve kontrol ekosistemi daha geniş.",
        "Uzun cephe hatları: SMD 24V — metre başına maliyet ve güç avantajı belirgin.",
      ],
    },

    { type: "h2", text: "Genişlik ve profil eşleşmesi" },
    {
      type: "p",
      text: "COB şeritler 4 mm, 8 mm ve 10 mm gibi farklı genişliklerde üretilir ve bu ölçü profil iç kanalına göre seçilir. Şerit kanala oturmalı, zorlanarak sıkıştırılmamalıdır; bası altında kalan COB şerit zamanla renk kaybeder. Doğru sıra şudur: önce profil belirlenir, şerit genişliği ona göre seçilir. Tersi sırayla ilerlemek genellikle profilin değişmesiyle sonuçlanır.",
    },

    { type: "h2", text: "Isı: COB'un görmezden gelinen tarafı" },
    {
      type: "p",
      text: "COB şeritler ışığı şerit boyunca yaydığı gibi ısıyı da yayar ve tipik olarak eşdeğer SMD şeritten daha fazla watt çeker. Bu iki etki birleşince alüminyum profil COB'da bir tercih değil, gereklilik hâline gelir. Profilsiz çalışan bir COB şeritte lümen kaybı ilk yıl içinde gözle görülür.",
    },
    {
      type: "p",
      text: "Aynı sebeple, SMD şerit için hesaplanmış bir trafoyu COB şeride uygulamak yaygın bir hatadır. Trafo sürekli tam yükte kalır ve erken bozulur. Hesap için [LED şerit watt rehberimize](/blog/led-serit-watt-ve-trafo-secimi) bakabilirsiniz.",
    },

    { type: "h2", text: "LED yoğunluğu: 480 mi 720 mi?" },
    {
      type: "table",
      headers: ["COB yoğunluğu", "Tipik güç", "Kullanım"],
      rows: [
        ["320 LED/mt", "8-10 W/m", "Dolaylı aydınlatma, vurgu"],
        ["480 LED/mt", "10-13 W/m", "Genel kullanım, en yaygın"],
        ["720 LED/mt", "14-18 W/m", "Yakın mesafe, yoğun ışık isteyen işler"],
      ],
    },
    {
      type: "p",
      text: "Yoğunluk arttıkça çizgi daha homojen ve daha parlak olur; buna karşılık güç ve ısı da artar. 720 LED/mt seçildiğinde profil kesiti ve trafo kapasitesi yeniden gözden geçirilmelidir.",
    },

    { type: "h2", text: "Sık yapılan hatalar" },
    {
      type: "ul",
      items: [
        "SMD alışkanlığıyla trafo hesaplamak — COB'un metre başına gücü genellikle daha yüksektir.",
        "Profilsiz montaj; ısı birikimi ilk yılda belirgin lümen kaybına yol açar.",
        "Şeridi profile zorlayarak sokmak.",
        "Kesim noktalarını gözden kaçırmak; COB'da aralıklar daha sık ama yine sabittir.",
        "Gizli karnis işinde COB kullanıp bütçeyi gereksiz yere artırmak.",
      ],
    },

    {
      type: "p",
      text: "Her iki tip de stoklarımızda: [COB LED şeritler](/urunler/cob-led-serit) ve [SMD LED şeritler](/urunler/led-serit). Metraj, profil ölçüsü ve montaj yerini iletmeniz yeterli; trafo eşleştirmesiyle birlikte set halinde fiyatlandıralım.",
    },
  ],
  faq: [
    {
      q: "COB LED şerit SMD'den daha mı parlak?",
      a: "Zorunlu olarak değil. Parlaklık metre başına watt ile ilgilidir; COB'un farkı ışığı nokta olarak değil kesintisiz çizgi olarak vermesidir. Aynı watt değerinde iki şerit benzer toplam ışık verir, görünümleri farklıdır.",
    },
    {
      q: "COB şerit profilsiz kullanılabilir mi?",
      a: "Görüntü açısından evet, difüzör olmadan bile pürüzsüz görünür. Ancak ısı açısından hayır: COB ısıyı şerit boyunca yayar ve alüminyum profil olmadan lümen kaybı hızlanır. Profil, COB'da estetik değil teknik bir gerekliliktir.",
    },
    {
      q: "COB şerit nereden kesilir?",
      a: "Üzerindeki işaretli kesim noktalarından. COB'da bu aralıklar SMD'ye göre daha sıktır (tipik olarak 1-5 cm), bu da hassas ölçülerde avantaj sağlar. İşaret dışından kesilen segment çalışmaz.",
    },
    {
      q: "Tabela içinde COB mu SMD mi kullanmalıyım?",
      a: "Tabela içinde ışık kaynağı görünmediği ve pleksi difüzör görevi gördüğü için SMD 2835 yeterlidir ve daha ekonomiktir. COB'u tabela içinde kullanmak, ödediğiniz farkın karşılığını almamak anlamına gelir.",
    },
    {
      q: "COB şerit için hangi trafo gerekir?",
      a: "Metraj × metre başına watt × 1,2 formülüyle hesaplanır. Kritik nokta, COB'un metre başına gücünün SMD'den yüksek olabilmesidir; ürünün kendi etiket değerini kullanın, SMD alışkanlığıyla hesap yapmayın.",
    },
    {
      q: "COB şeritte RGB seçeneği var mı?",
      a: "Var; RGB ve adreslenebilir (pixel) COB seriler üretiliyor. Renk çeşitliliği ve kontrol cihazı ekosistemi açısından SMD 5050 hâlâ daha geniş bir yelpaze sunar, ancak noktasız RGB efekti isteniyorsa COB tek seçenektir.",
    },
  ],
};
