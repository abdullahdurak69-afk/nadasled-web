import type { BlogPost } from "../blog";

export const pointLedNedir: BlogPost = {
  slug: "point-led-nedir",
  title: "Point LED Nedir? Tabelada ve Cephede Kullanım Rehberi",
  metaTitle: "Point LED Nedir? Tabela ve Cephede Kullanım Rehberi",
  metaDesc:
    "Point LED (piksel LED) nedir, nerede kullanılır, delik çapı ve aralık nasıl seçilir, kaç adet gerekir ve trafo hesabı nasıl yapılır?",
  excerpt: "Nokta ışık etkisi veren point LED'in delik çapı, aralık ve besleme kuralları.",
  date: "2026-08-16",
  updated: "2026-09-25",
  readMins: 8,
  categorySlug: "point-led",
  categoryName: "Point LED",
  blocks: [
    {
      type: "p",
      text: "Point LED, adından anlaşılacağı gibi noktasal ışık veren küçük çaplı bir LED ünitesidir. Yüzeye açılan deliklerden geçirilerek monte edilir ve önden bakıldığında yalnızca parlayan bir nokta görünür. Kutu harfte kontur vurgusu, cephede yıldız etkisi ve reklam panolarında hareketli yazı uygulamalarının temel parçasıdır.",
    },
    {
      type: "p",
      text: "Bu rehberde point LED'in nerede işe yaradığını, delik çapı ve aralık seçimini, adet ve trafo hesabını ele alıyoruz.",
    },

    { type: "h2", text: "Nerede kullanılır?" },
    {
      type: "ul",
      items: [
        "Kutu harf kontur vurgusu — harfin ön yüzeyi yerine kenarında sıralanan noktalar, klasik ampullü tabela görünümünü LED ile verir.",
        "Cephe ve bina aydınlatması — düzenli aralıklarla dizilen noktalar, gece cepheye ritmik bir doku kazandırır.",
        "Reklam panosu ve dikkat çekici çerçeveler — çakan veya sıralı yanan senaryolarla hareket etkisi yaratılır.",
        "Tavan ve sahne dekorasyonu — yıldızlı gökyüzü etkisinin en yaygın yöntemidir.",
        "Yön ve sınır işaretlemesi — basamak kenarı, rampa ve geçiş noktalarında düşük parlaklıkta nokta ışık.",
      ],
    },

    { type: "h2", text: "Çap, baş tipi ve montaj" },
    {
      type: "p",
      text: "Tabela ve cephe işlerinde kullanılan point LED'ler görünen nokta çapına göre seçilir; en yaygın ölçüler 20 mm, 30 mm ve 50 mm'dir. Çap büyüdükçe nokta uzaktan daha net okunur. Montaj deliği ürünün gövde ölçüsüne göre açılır ve LED delikten geçirilip arkadan sabitlenir. Delik yarım milimetre bile büyük açılırsa conta oturmaz, ünite oynar ve o noktadan su alır; bu yüzden şablonla delmek en güvenli yöntemdir.",
    },
    {
      type: "table",
      headers: ["Çap", "Görünen nokta", "Tipik kullanım"],
      rows: [
        ["20 mm", "Küçük, keskin", "Yakından bakılan tabela yüzü, ince kontur"],
        ["30 mm", "Orta", "Tabela çerçevesi ve kontur; en yaygın"],
        ["50 mm", "Büyük, parlak", "Cephe, yüksek tabela, uzaktan görünürlük"],
      ],
    },
    {
      type: "p",
      text: "Baş tipi de görünümü değiştirir. Şapkalı modeller yüzeyden dışarı taşar ve geniş açıyla ışık verir; alttan ya da yandan da görülecek cephelerde tercih edilir. Kesik baş modeller yüzeye daha gömük oturur ve karşıdan okunan, daha odaklı bir nokta verir. Örnek ürünler: [30 mm şapkalı point LED](/urunler/point-led/30mm-sapkali-point-led/) ve [50 mm point LED](/urunler/point-led/50mm-point-led/).",
    },
    {
      type: "p",
      text: "Dış mekan uygulamalarında delik çevresinin silikonla yalıtılması şarttır. Kataloğumuzdaki point LED'ler IP65'tir, ama ürünün kendisi su geçirmez olsa bile yalıtılmamış delik kenarından kasanın içine su girer. Konuyu [IP65 mi IP67 mi yazımızda](/blog/ip65-mi-ip67-mi-tabela-led/) ayrıntılı ele aldık.",
    },

    { type: "h2", text: "Aralık seçimi" },
    {
      type: "p",
      text: "Aralık, izleme mesafesine göre belirlenir. Yakından bakılan bir vitrin konturunda 5-8 cm aralık noktaların ayrı ayrı görünmesini sağlar; uzaktan bakılan bir cephede aynı aralık kesintisiz bir çizgi gibi algılanır ve etki kaybolur.",
    },
    {
      type: "table",
      headers: ["İzleme mesafesi", "Önerilen aralık", "Etki"],
      rows: [
        ["2-5 m (vitrin, kontur)", "6-10 cm, 20 mm", "Noktalar ayrı ayrı okunur"],
        ["5-15 m (tabela çerçevesi)", "10-15 cm, 30 mm", "Ritmik nokta dizisi"],
        ["15 m ve üzeri (cephe)", "15-25 cm, 50 mm", "Uzaktan seçilebilir doku"],
      ],
    },

    { type: "h2", text: "Adet ve güç hesabı" },
    {
      type: "p",
      text: "Adet hesabı basittir: toplam hat uzunluğu ÷ aralık. 12 metrelik bir kontur, 10 cm aralıkla 120 nokta eder. Güç hesabı ise modül hesabıyla aynı yolu izler: adet × birim güç, ardından %20 güvenlik payı ve voltaja bölme.",
    },
    {
      type: "ul",
      items: [
        "Birim güç çapa göre değişir: 30 mm point LED tipik olarak 0,5-0,7 W, 50 mm modeller 0,8-1 W, 50 mm pixel point LED 0,9-1,2 W çeker. Kesin değer için ürün etiketine bakın.",
        "120 adet × 0,6 W (30 mm) = 72 W ham güç; %20 payla yaklaşık 86 W eder.",
        "12V sistemde 86 ÷ 12 ≈ 7,2 amper, yani 12V 100W sınıfı bir trafo yeterlidir.",
        "Hesabı [trafo amper hesaplama aracıyla](/araclar/trafo-amper-hesaplama) doğrudan yapabilirsiniz; araçta özel watt değeri girme seçeneği var.",
      ],
    },
    {
      type: "p",
      text: "Point LED'ler genellikle zincir halinde, ortak besleme hattına paralel bağlanır. 12V sistemde tek besleme hattına 40-50 adetten fazlası bağlanmamalıdır; aşılan hatlarda son noktalar sönük yanar. 120 noktalık bir kontur bu yüzden üç segmente bölünüp her segment trafoya ayrı hatla bağlanır. Uzun hatlarda çözüm, hattı segmentlere bölmek ve her segmenti ayrı beslemektir — mekanizması [voltaj düşümü yazımızda](/blog/led-serit-voltaj-dusumu) anlatılıyor.",
    },

    { type: "h2", text: "Pixel point LED: hareketli efektler" },
    {
      type: "p",
      text: "Standart point LED'ler tek renkte ve hep birlikte yanar. Akan yazı, dalga veya sırayla yanma isteniyorsa her noktası ayrı kontrol edilen pixel point LED kullanılır. Pixel point tek başına çalışmaz: çipini destekleyen bir pixel kontrol cihazı ve doğru veri yönüyle bağlantı ister. Normal RGB kumanda bu LED'leri süremez. Ayrıntılar [pixel LED nedir?](/blog/pixel-led-nedir/) yazımızda.",
    },

    { type: "h2", text: "Point LED mi, modül mü, şerit mi?" },
    {
      type: "table",
      headers: ["İhtiyaç", "Uygun ürün"],
      rows: [
        ["Kutu harf içini homojen aydınlatmak", "LED modül"],
        ["Kesintisiz ışık çizgisi", "LED şerit veya neon flex"],
        ["Ayrı ayrı görünen nokta ışıklar", "Point LED"],
        ["Harf kenarından ince ışık hattı", "Kesit aydınlatma LED"],
      ],
    },
    {
      type: "p",
      text: "Üç ürünün aynı işte birlikte kullanıldığı da olur: harfin içi modülle, konturu point LED ile aydınlatılır. Ürün çeşitleri için [Point LED](/urunler/point-led), [LED modül](/urunler/led-modul) ve [neon LED](/urunler/neon-led) kategorilerimize bakabilirsiniz.",
    },
  ],
  faq: [
    {
      q: "Point LED nedir?",
      a: "Yüzeye açılan delikten geçirilerek monte edilen, önden bakıldığında yalnızca parlayan bir nokta olarak görünen küçük çaplı LED ünitesidir. Kontur vurgusu, cephe dokusu ve hareketli senaryolarda kullanılır.",
    },
    {
      q: "Point LED için delik çapı kaç mm olmalı?",
      a: "Delik, ürünün gövde ölçüsüne göre açılır; tabela işlerinde en yaygın point LED çapları 20, 30 ve 50 mm'dir. Yarım milimetre bile büyük açılan delikte conta oturmaz, ünite oynar ve o noktadan su alır. Şablonla delmek en güvenli yöntemdir.",
    },
    {
      q: "Point LED'ler arasındaki aralık ne olmalı?",
      a: "İzleme mesafesine ve çapa bağlıdır: yakından bakılan vitrin konturunda 20 mm LED ile 6-10 cm, tabela çerçevesinde 30 mm ile 10-15 cm, 15 metre üzeri cephede 50 mm ile 15-25 cm uygundur.",
    },
    {
      q: "12 metre kontur için kaç point LED gerekir?",
      a: "10 cm aralıkla 120 adet. 30 mm point LED ile (0,6 W) bu 72 W eder; %20 payla yaklaşık 86 W olur ve 12V 100W sınıfı bir trafo yeterlidir. 12V'ta tek hatta 40-50 adetten fazlası bağlanmadığı için hat üç segmente bölünür.",
    },
    {
      q: "Hattın sonundaki noktalar sönük yanıyor, sebebi ne?",
      a: "Zincirde üreticinin izin verdiği azami adet aşılmıştır veya besleme kablosunun kesiti yetersizdir. Çözüm hattı segmentlere bölmek ve her segmenti kendi hattından beslemektir.",
    },
    {
      q: "Point LED dış mekanda kullanılır mı?",
      a: "Evet, kataloğumuzdaki point LED'ler IP65'tir ve dış mekana uygundur. Ancak montaj deliğinin çevresi silikonla yalıtılmazsa ürün su geçirmez olsa bile kasanın içine su girer.",
    },
  ],
};
