import type { BlogPost } from "../blog";

export const kutuHarfIcinLedModulSecimi: BlogPost = {
  slug: "kutu-harf-icin-led-modul-secimi",
  title: "Kutu Harf İçin LED Modül Seçimi: Hangi Modül, Kaç Adet?",
  metaTitle: "Kutu Harf LED Modül Seçimi ve Adet Hesabı",
  metaDesc:
    "Kutu harf LED modül seçim rehberi: harf derinliğine göre mercek açısı, 10x10 kuralıyla adet hesabı, Samsung/Osram/Fortune farkı ve montaj hataları.",
  excerpt:
    "Harf derinliğine göre doğru modül tipi ve 10x10 kuralıyla adet hesabı.",
  date: "2026-06-09",
  readMins: 9,
  categorySlug: "led-modul",
  categoryName: "LED Modül",
  blocks: [
    {
      type: "p",
      text: "Kutu harfin ışık kalitesini iki şey belirler: doğru modül tipi ve doğru yerleşim sıklığı. Benekli (dalgalı) görünen tabelaların neredeyse tamamında bu ikisinden biri yanlıştır. Marka tercihi ya da modülün watt değeri, bu iki karar doğru verildikten sonra gelen ayrıntılardır.",
    },
    {
      type: "p",
      text: "Aşağıda önce harf derinliğine göre modül tipini, sonra adet hesabını, ardından seri farklarını ve sahada en çok tekrarlanan montaj hatalarını bulacaksınız.",
    },

    { type: "h2", text: "Önce mercek açısını anlayın" },
    {
      type: "p",
      text: "Tabela modüllerinin üzerindeki mercek, ışığı belli bir açıyla yaymak için vardır. Geniş açılı bir mercek (160°–170°) ışığı yanlara doğru serer; dar açılı mercek (120°–140°) ileri doğru odaklar. Doğru seçim tamamen harfin derinliğine bağlıdır, çünkü ışığın yayılması için gereken mesafeyi derinlik belirler.",
    },
    {
      type: "p",
      text: "Sığ bir harfte dar açılı modül kullanılırsa ışık yayılmaya fırsat bulamaz ve pleksi yüzeyde modül izi (nokta) belirir. Derin bir harfte geniş açılı modül kullanılırsa ışığın büyük kısmı yan duvarlara çarpar, harf ortası parlarken kenarlar sönük kalır.",
    },

    { type: "h2", text: "Harf derinliğine göre modül seçimi" },
    {
      type: "table",
      headers: ["Harf derinliği", "Önerilen modül", "Not"],
      rows: [
        ["4-6 cm", "Mini kasa / geniş açılı modül (160°+)", "Sık yerleşim gerekir"],
        ["8-12 cm", "Mercekli tekli/ikili modül (150°-160°)", "En yaygın ve verimli aralık"],
        ["12 cm üzeri", "Yüksek lümen üçlü/dörtlü modül (120°-140°)", "Daha seyrek yerleşim yeterli"],
      ],
    },
    {
      type: "p",
      text: "Arkadan ışıklı (halo) harflerde durum farklıdır: orada ışık pleksiden değil, harfin arkasındaki duvardan yansıyarak görünür. Bu işlerde modül harfin iç yüzeyine arkaya bakacak şekilde yerleştirilir ve harf ile duvar arasındaki mesafe (genellikle 3–5 cm) ışığın yayılma alanını belirler.",
    },

    { type: "h2", text: "Kaç adet modül gerekir? 10x10 kuralı" },
    {
      type: "p",
      text: "Pratik kural: harf yüzeyinin her 10×10 cm'lik alanına 1 modül. 100×50 cm'lik bir harf yüzeyi yaklaşık 50 modül ister. Harf derinliği 6 cm'in altına indikçe bu sıklığı %20-30 artırın; mercek açısı genişledikçe biraz azaltabilirsiniz.",
    },
    {
      type: "p",
      text: "Bu kural bir başlangıç noktasıdır, kesin bir yasa değil. Yüzey malzemesi de sonucu belirler: 3 mm opal pleksi ışığı iyi dağıtır ama bir kısmını yutar; ince veya şeffaf üzerine folyo kaplı yüzeylerde difüzyon neredeyse yoktur ve yerleşimi sıklaştırmak gerekir. Koyu renkli folyo altında kalan bölgelerde ise aynı parlaklık için daha fazla ışık gerekir.",
    },
    { type: "h2", text: "Yerleşim düzeni: şaşırtmalı diz" },
    {
      type: "ul",
      items: [
        "Modülleri sıra sıra hizalamak yerine şaşırtmalı (zikzak) dizin; ışık halkaları böylece birbirinin boşluğunu doldurur.",
        "Harf kenarlarından 2-3 cm boşluk bırakın. Kenara dayalı modül, pleksi kenarında parlak bir çizgi oluşturur.",
        "İnce harflerde (İ, L, 1 gibi) tek sıra yeterlidir; geniş harflerde (M, W, O) iki veya üç sıra gerekir.",
        "Köşe ve dönüşlere mutlaka modül gelmelidir; boş kalan köşe uzaktan kesik görünür.",
      ],
    },

    { type: "h2", text: "Samsung, Osram, Fortune: hangisi?" },
    {
      type: "ul",
      items: [
        "Samsung çipli modüller: en yüksek lümen/watt verimi, kurumsal işlerde ilk tercih.",
        "Osram modüller: renk tutarlılığı ve ömür dengesiyle premium projeler için.",
        "Fortune Plus: yüksek lümen isteyen vitrin ve cephe işlerinde fiyat-performans dengesi.",
        "Fortune Light: yoğun hacimli, günlük tabela işlerinde ekonomik standart.",
      ],
    },
    {
      type: "p",
      text: "Hepsi 12V ve IP65 su geçirmezdir; tabela içinde ve dış cephede güvenle kullanılır. Detaylı liste için [LED modül kategorimize](/urunler/led-modul) bakın.",
    },
    {
      type: "p",
      text: "Marka seçiminde asıl kritik nokta şudur: aynı tabelada farklı seri ya da farklı üretim partisi karıştırılmaz. Beyaz LED'lerin renk sıcaklığı üretim partisine göre küçük farklar gösterir (binning). Gündüz fark edilmeyen bu fark, gece aynı yüzeyde yan yana geldiğinde leke gibi okunur. İşi bölerek almanız gerekiyorsa tüm modülleri tek seferde tedarik edin.",
    },

    { type: "h2", text: "Renk sıcaklığı seçimi" },
    {
      type: "table",
      headers: ["Renk sıcaklığı", "Görünüm", "Nerede kullanılır"],
      rows: [
        ["6500K - 7500K", "Soğuk, mavimsi beyaz", "Klasik tabela, market, eczane"],
        ["4000K - 5000K", "Nötr beyaz", "Kurumsal kimlik, ofis, showroom"],
        ["3000K", "Sıcak beyaz", "Kafe, restoran, ahşap yüzeyli cepheler"],
      ],
    },
    {
      type: "p",
      text: "Renkli folyo kullanılan harflerde renk sıcaklığı sonucu doğrudan değiştirir: sarı ve kırmızı folyo altında soğuk beyaz LED daha canlı, sıcak beyaz ise daha donuk görünür. Mavi ve yeşil folyolarda tersi geçerlidir.",
    },

    { type: "h2", text: "Montajda 3 altın kural" },
    {
      type: "ul",
      items: [
        "Modül sıralarını pleksi yüzeye paralel ve eşit aralıklı dizin; kenarlardan 3-5 cm içeride başlayın.",
        "Seri bağlantıda üreticinin maksimum zincir uzunluğunu aşmayın — çoğu seride bu sınır 20-25 modüldür ve aşıldığında hattın sonundaki modüller sönük yanar.",
        "Trafoyu %80 yükte çalışacak şekilde seçin — hesabı için [trafo hesaplama rehberimize](/blog/led-trafo-hesaplama) bakın.",
      ],
    },
    { type: "h2", text: "Sık yapılan hatalar" },
    {
      type: "ul",
      items: [
        "Bant yapıştırmadan önce yüzeyi temizlememek; toz ve yağ kalıntısı modülün birkaç ay içinde düşmesine yol açar.",
        "Modülleri harfin sadece ortasına toplamak; kenarlar karanlık kalır ve harf 'içi boş' görünür.",
        "Dış mekanda IP65 olmayan modül kullanmak.",
        "Kabloları harfin içinde gergin bırakmak; sıcaklıkla genleşen kablo lehim noktasını zorlar.",
        "Farklı watt değerindeki modülleri aynı hatta karıştırmak.",
      ],
    },

    {
      type: "p",
      text: "Harf ölçülerinizi ve derinliğinizi WhatsApp'tan iletin; modül tipi, adedi ve uygun [trafo](/urunler/trafo-led-surucu) seçimini birlikte çıkaralım. Toptan fiyat listesi aynı gün gönderilir.",
    },
  ],
  faq: [
    {
      q: "1 metrekare kutu harf için kaç modül gerekir?",
      a: "10×10 kuralına göre yaklaşık 100 modül. 1,5W modülle bu 150W güç demektir. Harf derinliği 6 cm'in altındaysa adedi %20-30 artırmak, 12 cm'in üzerindeyse azaltmak gerekir.",
    },
    {
      q: "Sığ kutu harfte neden nokta izi oluşuyor?",
      a: "Mercek açısı yetersiz veya modüller fazla seyrek dizilmiştir. Sığ harflerde ışığın yayılmak için mesafesi yoktur; 160°-170° geniş açılı modül kullanmak ve yerleşimi sıklaştırmak gerekir.",
    },
    {
      q: "Bir hatta en fazla kaç modül bağlanabilir?",
      a: "Çoğu tabela modülü serisinde tek zincir 20-25 modülle sınırlıdır. Kesin sınır ürünün kendi etiketinde yazar. Sınır aşıldığında hattın sonundaki modüller voltaj düşümü nedeniyle sönük yanar.",
    },
    {
      q: "Samsung modül ile Fortune modül arasındaki gerçek fark ne?",
      a: "Samsung çipli modüller lümen/watt veriminde ve uzun vadeli renk kararlılığında öndedir. Fortune serileri fiyat-performans açısından avantajlıdır ve yoğun hacimli işlerde standart olarak kullanılır. Kurumsal, garantili ve zincir mağaza işlerinde Samsung veya Osram tercih edilir.",
    },
    {
      q: "Aynı tabelada farklı marka modül kullanabilir miyim?",
      a: "Kullanmayın. Farklı seri ve partilerdeki beyaz LED'lerin renk sıcaklığı birebir tutmaz; gece aynı yüzeyde leke gibi görünür. Tüm modülleri tek seferde ve aynı partiden tedarik etmek en güvenli yoldur.",
    },
    {
      q: "Kutu harf modülü dış mekanda kaç yıl dayanır?",
      a: "IP65 modüller, doğru trafo ve doğru zincir uzunluğuyla kullanıldığında tipik olarak 50.000 saat üzeri ömür verir. Pratikte ömrü kısaltan şey LED'in kendisi değil, tam yükte çalışan trafo, yalıtılmamış bağlantı noktaları ve kasa içi yoğuşmadır.",
    },
  ],
};
