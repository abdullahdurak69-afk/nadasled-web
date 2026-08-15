import type { BlogPost } from "../blog";

export const powerLedSurucuSecimi: BlogPost = {
  slug: "power-led-surucu-secimi",
  title: "Power LED Sürücü Seçimi: Sabit Akım Neden Şart?",
  metaTitle: "Power LED Sürücü Seçimi — Sabit Akım Neden Şart?",
  metaDesc:
    "Power LED'de sabit akım sürücü zorunluluğu, seri/paralel bağlantı kuralları, sürücü gerilim aralığı ve ısı yönetimi. Yanan çiplerin sebebi ve çözümü.",
  excerpt: "Power LED neden sabit voltajlı trafoyla yanar, doğru sürücü nasıl seçilir ve ısı nasıl yönetilir.",
  date: "2026-08-16",
  readMins: 8,
  categorySlug: "power-led",
  categoryName: "Power LED",
  blocks: [
    {
      type: "p",
      text: "Power LED çipleriyle çalışan bir işte yapılan tek bir hata, malzemenin tamamını birkaç saniyede kullanılamaz hale getirebilir: çipi sabit voltajlı bir trafoya bağlamak. Bu hasar geri döndürülemez ve garanti kapsamına da girmez, çünkü kullanım hatasıdır.",
    },
    {
      type: "p",
      text: "Bu rehberde neden sabit akım gerektiğini, sürücünün nasıl seçileceğini, seri ve paralel bağlantı kurallarını ve ısı yönetimini ele alıyoruz.",
    },

    { type: "h2", text: "Sabit voltaj ve sabit akım farkı" },
    {
      type: "p",
      text: "LED modül, LED şerit ve neon flex sabit voltajla çalışır: ürünün içinde her segment için akım sınırlayıcı direnç vardır, siz 12V veya 24V verirsiniz, gerisini ürün halleder. Power LED çipinde ise böyle bir sınırlayıcı yoktur; çip doğrudan bir yarı iletken eklemdir.",
    },
    {
      type: "p",
      text: "Bir LED'in ileri yön gerilimi ile çektiği akım arasındaki ilişki üstel bir eğridir. Gerilimi çok az artırdığınızda akım katlanarak yükselir. Sabit voltajlı bir trafo, gerilimi sabit tutup akımı serbest bıraktığı için çip ilk saniyelerde kendi sınırının çok üzerinde akım çeker, eklem sıcaklığı fırlar ve çip yanar. Sabit akım sürücü tam tersini yapar: akımı sabit tutar, gerilimi yüke göre kendisi ayarlar.",
    },
    {
      type: "table",
      headers: ["Ürün", "Sürücü tipi", "Etiketteki ana değer"],
      rows: [
        ["LED modül", "Sabit voltaj", "12V / 24V, watt"],
        ["LED şerit, COB şerit", "Sabit voltaj", "12V / 24V, watt"],
        ["Neon flex", "Sabit voltaj", "24V, watt"],
        ["Power LED çip / COB çip", "Sabit akım", "mA (350, 700, 1050…) ve gerilim aralığı"],
      ],
    },

    { type: "h2", text: "Sürücü nasıl seçilir?" },
    {
      type: "p",
      text: "Sabit akım sürücünün etiketinde iki bilgi vardır: çıkış akımı (mA) ve çıkış gerilim aralığı (örneğin 25-40V DC). Seçim bu ikisinin çipe uymasıyla yapılır.",
    },
    {
      type: "ul",
      items: [
        "1. Adım — Çipin nominal akımını bulun. Tipik değerler 350 mA, 700 mA ve 1050 mA'dir. Sürücünün çıkış akımı bu değere eşit olmalıdır; büyüğü çipi yakar, küçüğü ışığı düşürür.",
        "2. Adım — Çipin ileri yön gerilimini (Vf) bulun. 1W beyaz bir çipte tipik olarak 3-3,4V'tur.",
        "3. Adım — Seri bağlayacağınız çip sayısını belirleyin ve Vf değerlerini toplayın. 10 adet 3,2V çip seri bağlandığında toplam 32V eder.",
        "4. Adım — Sürücünün gerilim aralığı bu toplamı kapsamalıdır. 32V için 25-40V aralığındaki bir sürücü uygundur; 12-24V aralığındaki bir sürücü bu diziyi yakamaz.",
      ],
    },

    { type: "h2", text: "Seri mi paralel mi?" },
    {
      type: "p",
      text: "Sabit akım sürücülerde çipler seri bağlanır. Seri bağlantıda tüm çiplerden aynı akım geçer, dolayısıyla hepsi eşit parlaklıkta yanar ve sürücü akımı tek noktadan kontrol eder.",
    },
    {
      type: "p",
      text: "Paralel bağlantı ise tehlikelidir: iki çipin ileri yön gerilimi asla tam olarak eşit değildir, bu yüzden akım düşük Vf'li çipe daha fazla akar. O çip daha çok ısınır, ısındıkça Vf'si daha da düşer ve daha da fazla akım çeker. Bu kendini besleyen döngüye termal kaçış denir ve sonu çipin yanmasıdır. Paralel bağlantı zorunluysa her kola ayrı sürücü verilmelidir.",
    },

    { type: "h2", text: "Isı yönetimi sürücü kadar önemli" },
    {
      type: "p",
      text: "Power LED'de tüketilen enerjinin büyük kısmı ısıya dönüşür ve bu ısı çipin altındaki metal tabandan atılmak zorundadır. Soğutucusuz çalışan bir power LED çipi, sürücü doğru seçilmiş olsa bile dakikalar içinde eklem sıcaklığı sınırını aşar.",
    },
    {
      type: "ul",
      items: [
        "Çipi alüminyum bir soğutucuya monte edin; yüzeyler arasına termal macun veya termal bant koyun.",
        "Soğutucu yüzeyinin hava ile temas etmesi gerekir; kapalı bir kutuya sıkıştırılan soğutucu iş görmez.",
        "Aynı soğutucuya birden çok çip monte ediyorsanız toplam gücü soğutucu kapasitesiyle karşılaştırın.",
        "Isınan bir çipin ışık akısı düşer ve rengi kayar; parlaklık ilk aylarda gözle görülür biçimde azalıyorsa sebep genellikle ısıdır.",
      ],
    },

    { type: "h2", text: "Sık karşılaşılan sorunlar" },
    {
      type: "table",
      headers: ["Belirti", "Muhtemel sebep"],
      rows: [
        ["Çip ilk saniyelerde yandı", "Sabit voltajlı trafoya bağlandı"],
        ["Işık nominalin altında", "Sürücü akımı çipin nominal akımından düşük"],
        ["Sürücü yanıp sönüyor", "Seri dizinin toplam Vf'si sürücünün gerilim aralığı dışında"],
        ["Bir çip diğerlerinden parlak", "Paralel bağlantı, akım dengesiz dağılıyor"],
        ["Parlaklık aylar içinde düştü", "Yetersiz soğutma, eklem sıcaklığı yüksek"],
      ],
    },
    {
      type: "p",
      text: "Sabit voltajlı sistemlerin (modül, şerit, neon) trafo hesabı tamamen farklı yürür; onun için [LED trafo hesaplama rehberine](/blog/led-trafo-hesaplama) veya [trafo amper hesaplama aracına](/araclar/trafo-amper-hesaplama) bakabilirsiniz. Power LED çipleri ve uygun sürücüler için [Power LED kategorimize](/urunler/power-led) göz atın.",
    },
  ],
  faq: [
    {
      q: "Power LED'i normal 12V trafoya bağlayabilir miyim?",
      a: "Hayır. Power LED çipinde akım sınırlayıcı yoktur; sabit voltajlı trafoya bağlandığında ilk saniyelerde sınırının çok üzerinde akım çeker ve yanar. Hasar geri döndürülemez ve kullanım hatası sayıldığı için garanti kapsamına girmez.",
    },
    {
      q: "Sabit akım sürücü nasıl seçilir?",
      a: "İki değere bakılır: sürücünün çıkış akımı çipin nominal akımına (350 / 700 / 1050 mA) eşit olmalı, çıkış gerilim aralığı da seri bağlanan çiplerin toplam ileri yön gerilimini kapsamalıdır.",
    },
    {
      q: "Power LED çipleri paralel bağlanabilir mi?",
      a: "Önerilmez. İki çipin ileri yön gerilimi tam eşit olmadığı için akım düşük Vf'li çipe kayar, o çip ısınır, Vf'si daha da düşer ve daha çok akım çeker. Termal kaçış denen bu döngünün sonu çipin yanmasıdır. Paralel kol gerekiyorsa her kola ayrı sürücü verin.",
    },
    {
      q: "10 adet 3,2V çip için hangi sürücü gerekir?",
      a: "Seri bağlandığında toplam 32V eder. Çıkış gerilim aralığı bu değeri kapsayan (örneğin 25-40V) ve çıkış akımı çipin nominal akımına eşit bir sabit akım sürücü seçilir.",
    },
    {
      q: "Sürücü yanıp sönüyor, sebebi ne?",
      a: "Seri dizinin toplam ileri yön gerilimi sürücünün çıkış aralığının dışında kalmıştır. Çip sayısını aralığa uyacak şekilde artırın veya azaltın ya da uygun aralıkta bir sürücü kullanın.",
    },
    {
      q: "Power LED'de soğutucu şart mı?",
      a: "Şart. Tüketilen enerjinin büyük kısmı ısıya dönüşür ve çipin altındaki metal tabandan atılmalıdır. Soğutucusuz çalışan çip, sürücü doğru olsa bile dakikalar içinde eklem sıcaklığı sınırını aşar.",
    },
  ],
};
