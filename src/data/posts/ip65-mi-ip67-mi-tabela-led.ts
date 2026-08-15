import type { BlogPost } from "../blog";

export const ip65MiIp67Mi: BlogPost = {
  slug: "ip65-mi-ip67-mi-tabela-led",
  title: "IP65 mi IP67 mi? Tabela LED'lerinde Su ve Toz Dayanımı",
  metaTitle: "IP65 mi IP67 mi? Tabela LED'lerinde Su Dayanımı",
  metaDesc:
    "IP kodu ne anlatır, tabela içinde neden IP67 gerekir, IP68 her zaman daha mı iyidir? Modül, şerit ve trafoda doğru IP sınıfı seçimi.",
  excerpt: "IP kodunun iki rakamı ne anlatır ve tabela kasasının içinde neden IP65 çoğu zaman yetmez.",
  date: "2026-08-16",
  readMins: 8,
  categorySlug: "led-modul",
  categoryName: "LED Modül",
  blocks: [
    {
      type: "p",
      text: "Tabela arızalarının önemli bir kısmı su kaynaklıdır ve neredeyse hepsi \"kasanın içi zaten kapalı\" varsayımından çıkar. Kasa içi kapalı bir hacimdir ama sızdırmaz bir hacim değildir; gece-gündüz sıcaklık farkı içeride nem yoğuşturur ve bu su, yağmurdan gelen su kadar zarar verir.",
    },
    {
      type: "p",
      text: "Bu rehberde IP kodunun ne anlattığını, hangi sınıfın nerede kullanılacağını ve \"daha yüksek IP her zaman daha iyi mi\" sorusunun cevabını bulacaksınız.",
    },

    { type: "h2", text: "IP kodu ne anlatır?" },
    {
      type: "p",
      text: "IP kodu iki rakamdan oluşur. Birinci rakam katı cisimlere ve toza karşı korumayı, ikinci rakam suya karşı korumayı gösterir. Tabela ürünlerinde birinci rakam neredeyse her zaman 6'dır (tam toz sızdırmaz); asıl seçim ikinci rakamda yapılır.",
    },
    {
      type: "table",
      headers: ["Kod", "Su koruması", "Pratik karşılığı"],
      rows: [
        ["IP54", "Su sıçramasına karşı", "Yalnızca kuru iç mekan"],
        ["IP65", "Her yönden su püskürtmesine karşı", "Yağmura açık yüzey, su altında kalmaz"],
        ["IP67", "1 metre derinlikte 30 dakika daldırma", "Kasa içi, yoğuşma, geçici su birikmesi"],
        ["IP68", "Sürekli daldırma (üretici şartıyla)", "Havuz, zemin içi, sürekli su altında"],
      ],
    },
    {
      type: "p",
      text: "Dikkat edilmesi gereken bir ayrıntı: IP67 ve IP68, IP65'in içerdiği basınçlı su püskürtme testini kapsamaz. Bunlar farklı testlerdir. Basınçlı yıkamaya maruz kalacak yüzeylerde IP65 ile IP67'nin birlikte belirtildiği (IP65/IP67) ürünler tercih edilir.",
    },

    { type: "h2", text: "Tabela kasasının içinde neden IP67?" },
    {
      type: "p",
      text: "Kasa içi hava, gündüz güneşle ısınır ve nem tutar; gece soğuduğunda bu nem kasa yüzeylerinde yoğuşur. Yoğuşan su, kasanın alt kenarında birikir ve oradaki modüllerin üzerinde durur. IP65 bir modül, üzerine püskürtülen suya dayanır ama üstünde biriken suya uzun süre dayanmaz.",
    },
    {
      type: "p",
      text: "Bu yüzden dış mekan tabelalarında, kasa kapalı olsa bile modül ve trafoda IP67 tercih edilir. Ek olarak kasanın alt kenarına birkaç adet 4-5 mm'lik tahliye deliği açmak, biriken suyun dışarı akmasını sağlar ve tek başına birçok arızayı önler.",
    },

    { type: "h2", text: "Ürün bazında doğru sınıf" },
    {
      type: "table",
      headers: ["Ürün ve yer", "Önerilen IP", "Not"],
      rows: [
        ["Kutu harf içi modül (dış mekan)", "IP67", "Yoğuşma ve alt kenarda su birikmesi"],
        ["Kutu harf içi modül (iç mekan)", "IP65", "Kuru ortamda yeterli"],
        ["Işıklı kutu içi modül", "IP67", "Geniş yüzey, daha çok yoğuşma"],
        ["Kasa içi trafo", "IP67", "Kasa içi sızdırmaz sayılmaz"],
        ["Dışa monte trafo", "IP67 + yağmur korumalı", "Epoksi dolgulu modeller tercih edilir"],
        ["Cephe şeridi / neon flex", "IP67", "Silikon kaplı gövde"],
        ["Zemine gömülü armatür", "IP68", "Sürekli su teması"],
        ["İç mekan raf ve vitrin şeridi", "IP20-IP54", "Kaplamasız şerit daha iyi ışık verir"],
      ],
    },

    { type: "h2", text: "Daha yüksek IP her zaman daha iyi değil" },
    {
      type: "p",
      text: "IP sınıfı yükseldikçe ürünün üzerindeki kaplama kalınlaşır. Bu kaplamanın iki bedeli vardır: ısı atımını zorlaştırır ve ışığın bir kısmını yutar. İç mekanda kullanılan bir şeritte gereksiz yere IP67 seçmek, aynı watt'ta daha az ışık ve daha yüksek çalışma sıcaklığı demektir.",
    },
    {
      type: "p",
      text: "Ayrıca silikon kaplı yüksek IP'li şeritler kesim ve ekleme sırasında daha zahmetlidir; kesim noktasının yeniden yalıtılması gerekir, aksi halde ürünün IP sınıfı o noktada geçerliliğini yitirir. Kuru bir vitrin nişinde IP20 bir şerit hem daha ucuz hem daha parlak hem de montajı daha kolaydır.",
    },

    { type: "h2", text: "IP sınıfını sahada bozan dört hata" },
    {
      type: "ul",
      items: [
        "Kesilen şeridin ucunu yalıtmamak — IP67 bir şerit, kesim noktasından su aldığı anda IP20'ye döner.",
        "Konnektör bağlantısını korumasız bırakmak — ürün IP67 olsa da bağlantı noktası açıkta kalırsa zincirin zayıf halkası orasıdır.",
        "Kablo girişini kasanın üst yüzeyinden yapmak — kablo boyunca akan su doğrudan kasanın içine iner. Giriş alttan yapılır, kablo bir U yapacak biçimde bırakılır.",
        "Kasaya tahliye deliği açmamak — yoğuşan suyun çıkacak yeri olmadığında kasa bir su haznesine dönüşür.",
      ],
    },
    {
      type: "p",
      text: "IP67 modül ve trafo seçenekleri için [LED modül](/urunler/led-modul) ve [trafo / LED sürücü](/urunler/trafo-led-surucu) kategorilerimize, kesim ve ekleme malzemeleri için [yardımcı ürünlere](/urunler/yardimci-urunler) bakabilirsiniz. Trafo gücünü ve kablo kesitini [trafo amper hesaplama aracıyla](/araclar/trafo-amper-hesaplama) çıkarabilirsiniz.",
    },
  ],
  faq: [
    {
      q: "IP65 ile IP67 arasındaki fark nedir?",
      a: "IP65 her yönden gelen su püskürtmesine, IP67 ise 1 metre derinlikte 30 dakika daldırmaya karşı korumayı ifade eder. Tabela kasasının alt kenarında su birikebildiği için kasa içinde bile IP67 tercih edilir.",
    },
    {
      q: "Kapalı tabela kasasının içinde IP65 yeterli değil mi?",
      a: "Genelde değil. Kasa kapalıdır ama sızdırmaz değildir; gece-gündüz sıcaklık farkı içeride yoğuşma yaratır ve yoğuşan su kasanın alt kenarında birikir. IP65 modül üzerine püskürtülen suya dayanır, üstünde uzun süre duran suya dayanmaz.",
    },
    {
      q: "IP68 her zaman daha mı iyidir?",
      a: "Hayır. IP sınıfı yükseldikçe kaplama kalınlaşır; bu hem ısı atımını zorlaştırır hem ışığın bir kısmını yutar. Kuru iç mekanda IP20 bir şerit daha parlak, daha ucuz ve montajı daha kolaydır.",
    },
    {
      q: "Şeridi kestikten sonra ne yapmalıyım?",
      a: "Kesim noktasını silikon veya ısı ile daralan makaronla yeniden yalıtmalısınız. IP67 bir şerit, yalıtılmamış kesim ucundan su aldığında o bölgede korumasını tamamen kaybeder.",
    },
    {
      q: "Kasaya tahliye deliği açmalı mıyım?",
      a: "Dış mekan kasalarında evet. Alt kenara açılacak birkaç adet 4-5 mm'lik delik, yoğuşan suyun dışarı akmasını sağlar ve tek başına birçok arızayı önler.",
    },
    {
      q: "Trafoda hangi IP sınıfı seçilmeli?",
      a: "Kasa içine giren trafolarda IP67, doğrudan dış ortama monte edilenlerde yağmur korumalı veya epoksi dolgulu modeller kullanılır. İç mekan slim trafolar yalnızca kuru, kapalı hacimler içindir.",
    },
  ],
};
