import type { BlogPost } from "../blog";

export const lightBoxLedSecimi: BlogPost = {
  slug: "light-box-led-secimi",
  title: "Light Box LED Seçimi: Işıklı Panoda Leke Nasıl Önlenir?",
  metaTitle: "Light Box LED Seçimi — Işıklı Panoda Leke Önleme",
  metaDesc:
    "Işıklı pano derinliği, modül aralığı ve mercek açısı arasındaki ilişki. Homojen yüzey için doğru light box LED seçimi ve dizilim kuralları.",
  excerpt: "Derinlik, aralık ve mercek açısı üçgeni: ışıklı panoda leke yapmayan dizilimin kuralları.",
  date: "2026-08-16",
  readMins: 8,
  categorySlug: "light-box-led",
  categoryName: "Light Box LED",
  blocks: [
    {
      type: "p",
      text: "Işıklı pano işlerinde en sık gelen şikâyet aynıdır: pano yanıyor ama yüzeyde LED'lerin yeri tek tek görünüyor. Bu, malzeme kalitesinden çok dizilim hatasıdır ve neredeyse her zaman üç değişkenin uyumsuzluğundan çıkar — pano derinliği, modül aralığı ve mercek açısı.",
    },
    {
      type: "p",
      text: "Bu üç değer birbirine bağlıdır: birini değiştirdiğinizde diğer ikisi de değişmek zorundadır. Bu yazıda ilişkiyi tablolarla verip sahada uygulanabilir bir seçim yöntemi çıkaracağız.",
    },

    { type: "h2", text: "Neden leke oluşur?" },
    {
      type: "p",
      text: "Bir LED modülün ışığı, mercekten çıktıktan sonra koni biçiminde yayılır. Bu koninin ön yüzeye ulaştığında ne kadar geniş bir daire çizdiğini belirleyen tek şey, yayılacak mesafedir — yani pano derinliği. Derinlik yetersizse koniler yan yana gelmeden yüzeye çarpar; aralarında kalan karanlık bölgeler, gözün \"leke\" olarak gördüğü şeydir.",
    },
    {
      type: "p",
      text: "Buradan pratik bir kural çıkar: iki komşu modülün ışık konileri ön yüzeyde üst üste binmelidir. Bu da modül aralığının, derinlik ve mercek açısının izin verdiğinden büyük olmamasını gerektirir.",
    },

    { type: "h2", text: "Derinlik, aralık ve mercek açısı tablosu" },
    {
      type: "table",
      headers: ["Kasa derinliği", "Önerilen mercek açısı", "Azami modül aralığı", "Metrekareye modül"],
      rows: [
        ["5-7 cm", "170°", "10 cm", "~100 adet"],
        ["8-10 cm", "160-170°", "12 cm", "~69 adet"],
        ["10-14 cm", "160°", "15 cm", "~44 adet"],
        ["15 cm ve üzeri", "140-160°", "18 cm", "~31 adet"],
      ],
    },
    {
      type: "p",
      text: "Tablo azami değerleri verir; kaliteden ödün vermek istemiyorsanız bir kademe sıkı gidin. Özellikle beyaz ve açık renk zeminlerde leke daha kolay fark edilir; koyu zeminli ve yoğun baskılı yüzeylerde tolerans yüksektir.",
    },

    { type: "h2", text: "Kasanın içi de bir optik yüzeydir" },
    {
      type: "p",
      text: "Kasanın iç yüzeyi beyaz boyandığında veya beyaz folyo kaplandığında ışığın önemli bir kısmı yansıyarak yüzeye geri döner. Bu, aynı modül sayısıyla daha homojen bir yüzey demektir. Ham alüminyum veya galvaniz iç yüzey ise ışığın bir kısmını yutar; sığ kasalarda bu fark gözle görülür seviyededir.",
    },
    {
      type: "p",
      text: "Aynı mantıkla, kasa içine giren trafo ve kablo tesisatının modüllerin önünü kapatmaması gerekir. Trafoyu kasanın kenarına, mümkünse ayrı bir bölmeye almak hem gölge sorununu hem de servis kolaylığını çözer.",
    },

    { type: "h2", text: "Ön yüzey malzemesi seçimi" },
    {
      type: "p",
      text: "Ön yüzeyin ışık geçirgenliği ve difüzyon kabiliyeti, leke sorununun ikinci yarısıdır. Şeffaf bir yüzeyde modüller doğrudan görünür; iyi bir opal yüzey ise ışığı dağıtarak kaynağı gizler.",
    },
    {
      type: "table",
      headers: ["Malzeme", "Difüzyon", "Not"],
      rows: [
        ["Opal pleksi (akrilik)", "Yüksek", "En iyi dağılım, UV dayanımı iyi, maliyeti yüksek"],
        ["Ekonomik lexan / PC", "Orta", "Darbeye dayanıklı, birkaç yılda sararabilir"],
        ["Şeffaf + difüzör folyo", "Orta", "Folyo kalitesine bağlı, ekonomik çözüm"],
        ["Baskılı vinil kaplı yüzey", "Yükseğe yakın", "Baskının koyuluğu ışık geçirgenliğini düşürür"],
      ],
    },
    {
      type: "p",
      text: "Yoğun baskılı yüzeylerde ışık geçirgenliği düştüğü için modül sayısını artırmak gerekebilir. Kalıcılığı yüksek işlerde opal pleksi tercih edilir; hem ilk gün daha temiz bir yüzey verir hem de üçüncü yılda hâlâ aynı renkte kalır.",
    },

    { type: "h2", text: "Renk sıcaklığı: 6500K her zaman doğru değil" },
    {
      type: "p",
      text: "Işıklı panolarda alışkanlıkla 6500K (soğuk beyaz) seçilir çünkü aynı watt'ta daha parlak görünür. Ancak baskı üzerinde soğuk beyaz, sıcak tonları soldurur; yiyecek, ahşap ve deri gibi görsellerin ağırlıkta olduğu panolarda 4000K çok daha doğru bir sonuç verir. Kurumsal kimlikte belirli bir renk varsa, panoyu bir örnek parçayla test etmek en sağlıklısıdır.",
    },
    {
      type: "p",
      text: "Aynı pano üzerinde farklı partiden modül kullanmayın. İki parti arasındaki küçük renk sıcaklığı farkı, tek bir yüzeyde yan yana geldiğinde net biçimde görünür. Bu, sonradan düzeltilmesi en zor hatalardan biridir.",
    },

    { type: "h2", text: "Modül adedini ve trafoyu hesaplamak" },
    {
      type: "p",
      text: "Alanı metrekareye çevirip tablodaki yoğunlukla çarpmak modül adedini verir. 200 × 80 cm bir pano 1,6 m² eder; 15 cm aralıkta yaklaşık 72 modül alır. 1,5 W'lık modülle bu 108 W, %20 güvenlik payıyla 130 W eder ve 12V 150W sınıfı bir trafo yeterli olur.",
    },
    {
      type: "p",
      text: "Hesabı elle yapmak istemezseniz [trafo amper hesaplama aracı](/araclar/trafo-amper-hesaplama) modül adedinden gücü ve trafo kademesini, [tabela maliyet hesaplama aracı](/araclar/tabela-maliyet-hesaplama) ise ölçüden tüm malzeme listesini çıkarır. Uygun modüller için [Light Box LED kategorimize](/urunler/light-box-led), sürücüler için [trafo ve LED sürücü kategorimize](/urunler/trafo-led-surucu) bakabilirsiniz.",
    },
  ],
  faq: [
    {
      q: "Işıklı panoda modül aralığı kaç cm olmalı?",
      a: "Kasa derinliğine bağlıdır. 5-7 cm derinlikte azami 10 cm, 8-10 cm derinlikte 12 cm, 10-14 cm derinlikte 15 cm aralık kullanılabilir. Derinlik arttıkça ışık yayılacak mesafe bulduğu için aralık açılabilir.",
    },
    {
      q: "Panoda LED'lerin yeri görünüyor, ne yapmalıyım?",
      a: "Üç ihtimal var: modül aralığı derinliğe göre fazla açık, mercek açısı dar veya ön yüzeyin difüzyonu yetersiz. Kasa içi beyaza boyanmamışsa bu da katkı yapar. Aralığı sıklaştırmak çoğu durumda en hızlı çözümdür.",
    },
    {
      q: "Light box için kaç derece mercek açısı gerekir?",
      a: "Sığ kasalarda (5-7 cm) 170°, standart derinlikte (8-14 cm) 160-170°, 15 cm üzeri derinlikte 140-160° uygundur. Derin kasada geniş açı yan duvarları aydınlatır, ön yüzey sönük kalır.",
    },
    {
      q: "Kasa içini beyaza boyamak gerçekten fark eder mi?",
      a: "Evet, özellikle sığ kasalarda. Beyaz iç yüzey ışığın önemli bir kısmını yansıtarak yüzeye geri döndürür; ham metal yüzey ise yutar. Aynı modül sayısıyla belirgin biçimde daha homojen bir sonuç alırsınız.",
    },
    {
      q: "Işıklı panoda hangi renk sıcaklığı kullanılmalı?",
      a: "Alışkanlıkla 6500K seçilir ama baskı üzerinde soğuk beyaz sıcak tonları soldurur. Yiyecek, ahşap ve deri görsellerinin ağırlıkta olduğu panolarda 4000K çok daha doğru bir sonuç verir.",
    },
    {
      q: "Farklı partiden modülleri aynı panoda kullanabilir miyim?",
      a: "Kullanmayın. İki parti arasındaki küçük renk sıcaklığı farkı tek yüzeyde yan yana geldiğinde net biçimde görünür ve sonradan düzeltmek panoyu tamamen sökmeyi gerektirir.",
    },
  ],
};
