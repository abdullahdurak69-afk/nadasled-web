import type { BlogPost } from "../blog";

export const onikiVoltMuYirmidortVoltMu: BlogPost = {
  slug: "12v-mu-24v-mu-tabela-aydinlatma",
  title: "12V mu 24V mu? Tabela ve LED Aydınlatmada Voltaj Seçimi",
  metaTitle: "12V mu 24V mu? LED Aydınlatmada Voltaj Seçimi",
  metaDesc:
    "12V ve 24V LED sistemlerin farkları: voltaj düşümü, kablo kesiti, verim ve maliyet. Tabela, şerit ve lineer aydınlatmada hangi voltajı seçmelisiniz?",
  excerpt:
    "Voltaj düşümü, kablo kesiti ve verim: iki sistemin gerçek farkları.",
  date: "2026-05-29",
  updated: "2026-08-16",
  readMins: 8,
  categorySlug: "trafo-led-surucu",
  categoryName: "Trafo & LED Sürücü",
  blocks: [
    {
      type: "p",
      text: "Aynı watt'taki yükte 24V sistem, 12V'a göre yarı akım çeker. Bu tek cümle; kablo kesiti, voltaj düşümü ve hat uzunluğuyla ilgili tüm farkların özetidir. Geri kalan her şey bu tek gerçeğin sahadaki sonuçlarıdır.",
    },

    { type: "h2", text: "Neden yarı akım?" },
    {
      type: "p",
      text: "Güç, akım ile gerilimin çarpımıdır (W = A × V). 120 watt'lık bir yükü 12 volttan beslerseniz 10 amper akar; aynı yükü 24 volttan beslerseniz 5 amper akar. Kablodaki ısınma ve gerilim kaybı ise akımla doğrudan ilişkilidir — akım yarıya inince kayıp belirgin biçimde azalır. Uzun hatlarda 24V'un üstünlüğü tam olarak buradan gelir.",
    },

    { type: "h2", text: "Farklar tablo halinde" },
    {
      type: "table",
      headers: ["Kriter", "12V", "24V"],
      rows: [
        ["Çektiği akım (aynı watt)", "2 kat", "Yarısı"],
        ["Voltaj düşümü", "Belirgin (uzun hatta solma)", "Çok daha az"],
        ["Tek beslemeyle hat boyu", "~5 m", "~10 m"],
        ["Kablo kesiti ihtiyacı", "Daha kalın", "Daha ince yeterli"],
        ["Ürün çeşitliliği (tabela)", "Çok geniş", "Lineer ağırlıklı"],
        ["Kesim aralığı (şeritte)", "3 LED'de bir", "6 LED'de bir"],
      ],
    },
    {
      type: "p",
      text: "Tablodaki son satır çoğu zaman gözden kaçar ama pratikte önemlidir: 24V şeritlerde kesim aralığı iki kat uzundur. Hassas ölçü isteyen kısa parçalarda (raf içi, vitrin, dar niş) bu bir dezavantajdır.",
    },

    { type: "h2", text: "Voltaj düşümü nasıl görünür?" },
    {
      type: "p",
      text: "Hattın sonundaki LED'ler hem daha sönük yanar hem beyaz ışık sarıya kayar. Bu, ürün arızası değil fizik kuralıdır: şerit üzerindeki ince bakır iletken boyunca gerilim kaybolur. 12V sistemde hattın başındaki 12 volt, 5 metre sonunda 10,5 volta inebilir — LED'lerin çalışma eşiğine yaklaşıldığı için etki gözle görülür hale gelir. 24V sistemde aynı kayıp toplam gerilimin çok daha küçük bir yüzdesidir, bu yüzden fark edilmez.",
    },

    { type: "h2", text: "Pratik karar rehberi" },
    {
      type: "ul",
      items: [
        "Kutu harf ve klasik tabela: 12V — modül ekosisteminin standardı.",
        "Uzun lineer hatlar, cephe ve karnis aydınlatması: 24V — solma derdi yok.",
        "Pergola, tente ve dış mekan yapıları: 24V — hatlar uzun, kablo ince kalır.",
        "Vitrin içi, raf altı, kısa dekoratif parçalar: 12V — kesim aralığı kısa, ölçü tutturmak kolay.",
        "Karışık projede iki ayrı devre kurun; 12V ürünü 24V trafoya asla bağlamayın.",
      ],
    },

    { type: "h2", text: "Neden hâlâ 12V kullanılıyor?" },
    {
      type: "p",
      text: "24V teknik olarak birçok konuda üstünse de tabela sektöründe 12V hâlâ baskındır ve bunun somut sebepleri var. Tabela modülü ekosisteminin neredeyse tamamı 12V üzerine kurulu; mercekli modül, point LED ve pek çok neon serisi 12V olarak üretiliyor. Ayrıca kısa hatlarda 24V'un getirdiği avantaj ortaya çıkmıyor, buna karşılık kesim aralığının uzaması dezavantaj yaratıyor. Kutu harf işlerinde hat uzunlukları zaten kısa olduğu için 12V doğru tercih olmaya devam ediyor.",
    },

    { type: "h2", text: "Kablo kesiti üzerindeki etkisi" },
    {
      type: "table",
      headers: ["Yük", "12V'ta akım / kesit", "24V'ta akım / kesit"],
      rows: [
        ["60W", "5 A / 0,75 mm²", "2,5 A / 0,75 mm²"],
        ["120W", "10 A / 1,0 mm²", "5 A / 0,75 mm²"],
        ["240W", "20 A / 2,5 mm²", "10 A / 1,0 mm²"],
      ],
    },
    {
      type: "p",
      text: "Tablo, 24V'a geçmenin yalnızca ışık kalitesi değil malzeme maliyeti tarafında da fark yarattığını gösteriyor. Uzun mesafeli işlerde kablo kalemi hiç de küçük bir gider değildir. [Kablo ve konnektör çeşitlerimizi](/urunler/yardimci-urunler) buradan inceleyebilirsiniz.",
    },

    { type: "h2", text: "Aynı projede iki voltaj kullanmak" },
    {
      type: "p",
      text: "Mümkündür ve sık yapılır: kutu harfler 12V, cephe boyunca uzanan lineer hat 24V olabilir. Kural, iki sistemin tamamen ayrı devreler olarak kurulmasıdır — ayrı trafolar, ayrı kablolar. Ortak eksi hattı kurmak bile gerekmez ve karışıklık riski yaratır. Etiketleme yapın: servis sırasında hangi hattın hangi voltajda olduğu görünür olsun.",
    },
    {
      type: "p",
      text: "12V bir ürünü 24V trafoya bağlamak, LED'lerin saniyeler içinde yanması demektir ve bu hasar geri döndürülemez. Tersi durumda (24V ürün, 12V trafo) ürün yanmaz ama çok sönük yanar veya hiç yanmaz.",
    },

    { type: "h2", text: "Sık yapılan hatalar" },
    {
      type: "ul",
      items: [
        "12V için hesaplanan amper değerini 24V sisteme uygulayıp gereksiz büyük trafo almak.",
        "Uzun hattı 12V kurup sonucu ürün kalitesine bağlamak.",
        "İki voltajı aynı kablo demeti içinde etiketsiz taşımak.",
        "24V şeritte kısa parça kesip ölçü tutturmaya çalışmak; kesim aralığı iki kat uzundur.",
        "Karışık projede tek trafo kullanmaya çalışmak.",
      ],
    },

    {
      type: "p",
      text: "Her iki voltajda [şerit](/urunler/led-serit) ve [trafo](/urunler/trafo-led-surucu) çeşitlerimiz stokta. Proje ölçülerinizi iletin, doğru kombinasyonu birlikte seçelim.",
    },
  ],
  faq: [
    {
      q: "12V mu 24V mu daha iyi?",
      a: "Duruma göre değişir. Uzun hatlarda (cephe, karnis, pergola) 24V açık ara üstündür: voltaj düşümü az, kablo ince. Kutu harf ve kısa dekoratif işlerde 12V daha pratiktir, çünkü modül ekosistemi 12V üzerine kurulu ve kesim aralıkları daha kısadır.",
    },
    {
      q: "12V şeridi 24V trafoya bağlarsam ne olur?",
      a: "LED'ler saniyeler içinde yanar ve hasar geri döndürülemez. Bu, garanti kapsamına da girmeyen bir kullanım hatasıdır. Bağlantı öncesi trafo çıkış gerilimini mutlaka kontrol edin.",
    },
    {
      q: "24V sistemde daha az elektrik mi harcanır?",
      a: "Hayır, aynı ışık için harcanan watt aynıdır. Fark kayıplardadır: 24V'ta akım yarıya indiği için kablo üzerindeki kayıp ve ısınma azalır. Uzun hatlarda bu, küçük ama gerçek bir verim avantajı sağlar.",
    },
    {
      q: "Tek trafoya kaç metre şerit bağlanabilir?",
      a: "Trafonun gücü yeterliyse metraj sınırı trafodan değil voltaj düşümünden gelir: 12V'ta tek beslemeyle yaklaşık 5 metre, 24V'ta yaklaşık 10 metre. Daha uzun hatlar segmentlere bölünüp ayrı beslenmelidir.",
    },
    {
      q: "Aynı tabelada hem 12V hem 24V kullanabilir miyim?",
      a: "Evet, ancak tamamen ayrı devreler olarak kurulmalıdır: ayrı trafo, ayrı kablo ve mutlaka etiketleme. Karışık bağlantı, servis sırasında yanlış hatta müdahale riskini doğurur.",
    },
    {
      q: "Kutu harf için hangi voltaj standart?",
      a: "12V. Tabela modülü ekosisteminin neredeyse tamamı 12V üzerine kuruludur ve kutu harf hatları kısa olduğu için 24V'un avantajı ortaya çıkmaz.",
    },
  ],
};
