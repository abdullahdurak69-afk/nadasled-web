import type { BlogPost } from "../blog";

export const pointLedNedir: BlogPost = {
  slug: "point-led-nedir",
  title: "Point LED Nedir? Tabelada ve Cephede Kullanım Rehberi",
  metaTitle: "Point LED Nedir? Tabela ve Cephede Kullanım Rehberi",
  metaDesc:
    "Point LED (piksel LED) nedir, nerede kullanılır, delik çapı ve aralık nasıl seçilir, kaç adet gerekir ve trafo hesabı nasıl yapılır?",
  excerpt: "Nokta ışık etkisi veren point LED'in delik çapı, aralık ve besleme kuralları.",
  date: "2026-08-16",
  readMins: 7,
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

    { type: "h2", text: "Delik çapı ve montaj" },
    {
      type: "p",
      text: "Point LED'ler gövde çapına göre satılır; en yaygın çaplar 8 mm, 10 mm ve 12 mm'dir. Montaj deliği ürünün gövde çapıyla aynı ölçüde açılır ve LED delikten geçirilip arkadan sabitlenir. Delik çapının bir milimetre bile büyük açılması, hem ünitenin oynamasına hem de o noktadan su almasına yol açar.",
    },
    {
      type: "table",
      headers: ["Gövde çapı", "Görünen nokta", "Tipik kullanım"],
      rows: [
        ["8 mm", "Küçük, keskin", "Kontur vurgusu, ince detay"],
        ["10 mm", "Orta", "Genel amaçlı, en yaygın"],
        ["12 mm", "Belirgin", "Uzaktan görünürlük, cephe"],
      ],
    },
    {
      type: "p",
      text: "Dış mekan uygulamalarında delik çevresinin silikonla yalıtılması şarttır. Ürünün kendisi IP67 olsa bile, yalıtılmamış delik kenarından kasanın içine su girer — konuyu [IP65 mi IP67 mi yazımızda](/blog/ip65-mi-ip67-mi-tabela-led) ayrıntılı ele aldık.",
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
        ["2-5 m (vitrin, kontur)", "5-8 cm", "Noktalar ayrı ayrı okunur"],
        ["5-15 m (tabela çerçevesi)", "8-12 cm", "Ritmik nokta dizisi"],
        ["15 m ve üzeri (cephe)", "15-25 cm", "Uzaktan seçilebilir doku"],
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
        "Point LED'lerde birim güç genellikle 0,3-0,7 W arasındadır; kesin değer için ürün etiketine bakın.",
        "120 adet × 0,5 W = 60 W ham güç; %20 payla 72 W eder.",
        "12V sistemde 72 ÷ 12 = 6 amper, yani 12V 100W sınıfı bir trafo yeterlidir.",
        "Hesabı [trafo amper hesaplama aracıyla](/araclar/trafo-amper-hesaplama) doğrudan yapabilirsiniz; araçta özel watt değeri girme seçeneği var.",
      ],
    },
    {
      type: "p",
      text: "Point LED'ler genellikle zincir halinde, ortak besleme hattına paralel bağlanır. Zincir uzunluğunda üreticinin verdiği azami adet sınırını aşmayın; aşılan hatlarda son noktalar sönük yanar. Uzun hatlarda çözüm, hattı segmentlere bölmek ve her segmenti ayrı beslemektir — mekanizması [voltaj düşümü yazımızda](/blog/led-serit-voltaj-dusumu) anlatılıyor.",
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
      a: "Ürünün gövde çapıyla aynı ölçüde açılır; en yaygın çaplar 8, 10 ve 12 mm'dir. Bir milimetre büyük açılan delik hem ünitenin oynamasına hem de o noktadan su almasına yol açar.",
    },
    {
      q: "Point LED'ler arasındaki aralık ne olmalı?",
      a: "İzleme mesafesine bağlıdır: 2-5 metreden bakılan vitrin konturunda 5-8 cm, tabela çerçevesinde 8-12 cm, 15 metre üzeri cephede 15-25 cm uygundur.",
    },
    {
      q: "12 metre kontur için kaç point LED gerekir?",
      a: "10 cm aralıkla 120 adet. 0,5 W'lık ünitelerle bu 60 W eder; %20 güvenlik payıyla 72 W olur ve 12V sistemde 12V 100W sınıfı bir trafo yeterlidir.",
    },
    {
      q: "Hattın sonundaki noktalar sönük yanıyor, sebebi ne?",
      a: "Zincirde üreticinin izin verdiği azami adet aşılmıştır veya besleme kablosunun kesiti yetersizdir. Çözüm hattı segmentlere bölmek ve her segmenti kendi hattından beslemektir.",
    },
    {
      q: "Point LED dış mekanda kullanılır mı?",
      a: "Evet, IP67 modeller dış mekana uygundur. Ancak montaj deliğinin çevresi silikonla yalıtılmazsa ürün su geçirmez olsa bile kasanın içine su girer.",
    },
  ],
};
