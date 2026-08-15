import type { BlogPost } from "../blog";

export const isikliTabelaMaliyeti: BlogPost = {
  slug: "isikli-tabela-maliyeti",
  title: "Işıklı Tabela Maliyeti: Malzeme Listesi Nasıl Çıkarılır?",
  metaTitle: "Işıklı Tabela Maliyeti — Malzeme Listesi Nasıl Çıkarılır?",
  metaDesc:
    "Işıklı tabelada maliyeti oluşturan kalemler, ölçüden malzeme miktarı çıkarma yöntemi ve teklif hazırlarken en sık atlanan gizli maliyetler.",
  excerpt:
    "Kutu harf, ışıklı kutu ve neon cephede maliyeti oluşturan kalemler ve miktarların ölçüden nasıl çıkarıldığı.",
  date: "2026-08-16",
  readMins: 9,
  categorySlug: "led-modul",
  categoryName: "LED Modül",
  blocks: [
    {
      type: "p",
      text: "Işıklı tabela maliyeti sorulduğunda verilen \"metrekaresi şu kadar\" cevabı neredeyse hiçbir zaman tutmaz. Aynı ölçüdeki iki tabela, harf derinliği, ön yüzey malzemesi ve montaj yüksekliği yüzünden iki katı fark edebilir. Maliyeti doğru çıkarmanın tek yolu, ölçüden malzeme miktarını çıkarıp kendi alış fiyatlarınızla çarpmaktır.",
    },
    {
      type: "p",
      text: "Bu rehberde üç tabela tipi için malzeme listesinin nasıl çıkarıldığını, hangi kalemin toplamda ne kadar yer tuttuğunu ve tekliflerde en sık unutulan kalemleri bulacaksınız. Ölçüyü girip listeyi otomatik almak isterseniz [tabela maliyet hesaplama aracımızı](/araclar/tabela-maliyet-hesaplama) kullanabilirsiniz.",
    },

    { type: "h2", text: "Maliyet nerede birikiyor?" },
    {
      type: "p",
      text: "Tabelacıların çoğu maliyeti LED tarafında arar, oysa aydınlatma malzemesi toplamın küçük bir kısmıdır. Aşağıdaki dağılım tipik bir kutu harf işi içindir; oranlar projeye göre kayar ama sıralama nadiren değişir.",
    },
    {
      type: "table",
      headers: ["Kalem", "Tipik pay", "Neden değişir"],
      rows: [
        ["İşçilik, montaj, nakliye", "%30-45", "Yükseklik, vinç ihtiyacı, şehir"],
        ["Kasa ve gövde malzemesi", "%20-30", "Kompozit / DKP sac tercihi, harf derinliği"],
        ["Ön yüzey (pleksi, lexan)", "%10-20", "Opal pleksi ile ekonomik lexan arası fark"],
        ["LED modül veya şerit", "%8-15", "Modül aralığı ve mercek kalitesi"],
        ["Trafo, kablo, konnektör", "%4-8", "Marka ve IP sınıfı"],
      ],
    },
    {
      type: "p",
      text: "Bu tablo tek başına bir sonuç veriyor: LED tarafında yapılan tasarruf toplam maliyeti kayda değer biçimde düşürmez, ama arıza ihtimalini ciddi biçimde artırır. Tasarruf edilecek yer varsa orası gövde ve ön yüzey seçimidir; orada da dış mekan dayanımı devreye girer.",
    },

    { type: "h2", text: "Kutu harf: ölçüden malzeme listesi" },
    {
      type: "ul",
      items: [
        "Modül adedi — harf yüksekliği ve yazı tipi kalınlığından çıkar. Normal kalınlıkta 50 cm'lik bir harf, 12 cm modül aralığında yaklaşık 9 modül alır. Ayrıntılı hesap için [kutu harf modül hesaplama aracına](/araclar/kutu-harf-modul-hesaplama) bakın.",
        "Sırt ve ön yüz alanı — harf başına yaklaşık (yükseklik × yükseklik × 0,7) cm². 8 harflik 50 cm'lik bir yazıda bu, harf başına 1.750 cm², toplam 1,4 m² eder.",
        "Yan yüzey — harf çevresi yaklaşık 3,2 × yükseklik alınır; bu uzunluk harf derinliğiyle çarpılarak yan yüzey alanı bulunur.",
        "Kenar bandı — yan yüzeyle aynı uzunluk, yani harf çevrelerinin toplamı.",
        "Trafo — toplam modül gücü × 1,2, ardından standart kademeye yuvarlama. 250 watt'ın üzerinde yük bölünür.",
        "Kablo ve konnektör — harf başına ortalama 2 metre besleme kablosu ve bir hızlı konnektör pratikte yeterli olur.",
      ],
    },

    { type: "h2", text: "Işıklı kutu (light box): ölçüden malzeme listesi" },
    {
      type: "p",
      text: "Işıklı kutuda hesap daha basittir çünkü yüzey düzdür. Alan doğrudan en × boy'dan çıkar; modül adedi bu alanın modül yoğunluğuyla çarpımıdır. 15 cm modül aralığında metrekareye yaklaşık 44 modül düşer.",
    },
    {
      type: "table",
      headers: ["Pano ölçüsü", "Alan", "Modül (15 cm aralık)", "Tipik trafo"],
      rows: [
        ["100 × 60 cm", "0,6 m²", "~27 adet", "12V 60W"],
        ["200 × 80 cm", "1,6 m²", "~72 adet", "12V 150W"],
        ["300 × 100 cm", "3,0 m²", "~134 adet", "12V 250W"],
        ["400 × 120 cm", "4,8 m²", "~214 adet", "2 × 12V 200W"],
      ],
    },
    {
      type: "p",
      text: "Bunun üzerine kasa profili (çevre uzunluğu), opal pleksi veya lexan yüzey (alan) ve baskı vinil (alan) eklenir. Işıklı kutuda ön yüzey seçimi maliyeti en çok oynatan kalemdir; ekonomik lexan birkaç yıl içinde sararır ve ışık geçirgenliği düşer. [Light box LED kategorimizdeki](/urunler/light-box-led) modüller bu panolarda kullanılmak üzere geniş açılı seçilmiştir.",
    },

    { type: "h2", text: "Neon ve şerit cephe: metrajdan liste" },
    {
      type: "p",
      text: "Neon flex ve şerit işlerinde her şey metrajdan çıkar: ürünün kendisi, montaj kanalı, besleme kablosu ve uç kapakları. Ek kalem olarak köşe dönüşlerinde fire ve her segment için ayrı besleme kablosu vardır. Uzun hatlarda besleme noktası sayısını doğru çıkarmak, sonradan tabelayı sökmemek için önemlidir — hesap için [LED şerit güç hesaplama aracını](/araclar/led-serit-guc-hesaplama) kullanabilirsiniz.",
    },

    { type: "h2", text: "Teklifte en sık atlanan kalemler" },
    {
      type: "ul",
      items: [
        "Vinç ve yüksekte çalışma — bina cephesindeki bir işte bu kalem tek başına malzemeyi geçebilir.",
        "Ruhsat ve belediye izni — süre kaybı da bir maliyettir; teklifte tarih taahhüdü veriyorsanız bunu hesaba katın.",
        "Elektrik altyapısı — tabelaya kadar hat çekilmesi, sigorta ve pano işi çoğu teklifte unutulur.",
        "Fire ve yedek — modül ve şeritte %10 yedek almak yaygın pratiktir; kırılan modül için ikinci sefer kargo beklemek işçilikten pahalıya gelir.",
        "Kumanda ve kontrol — RGB veya animasyonlu işlerde kontrol ünitesi, amplifikatör ve kablolaması ayrı bir kalemdir. [LED kontrol üniteleri](/urunler/led-kontrol-uniteleri) tarafında seçim işin senaryosuna göre değişir.",
        "Servis taahhüdü — bir yıl garanti veriyorsanız, o yıl içinde yapılacak ortalama bir servis ziyaretinin maliyetini bugünden fiyata koymak gerekir.",
      ],
    },

    { type: "h2", text: "Ucuz malzemenin gerçek maliyeti" },
    {
      type: "p",
      text: "Ekonomik bir trafo da ilk gün çalışır; fark ikinci yılda ortaya çıkar. Dalgalanması yüksek bir sürücü gözle görülen titreme ve kameraya bant olarak yansıyan bozulma yaratır — vitrin ve mağaza tabelalarında bu doğrudan işin kalitesine yansır. Bozulan bir trafonun maliyeti trafo fiyatı değil, servis ziyaretinin maliyetidir: yol, vinç, işçilik ve müşteri nezdinde kaybedilen itibar.",
    },
    {
      type: "p",
      text: "Aynı mantık modülde de geçerlidir. Mercek kalitesi düşük bir modülde ışık dağılımı bozuk olur ve pleksi üzerinde nokta nokta parlama görünür; bu, tabela söküp yeniden dizmek dışında düzelmeyen bir hatadır. IP sınıfı yanlış seçilen modüllerde ise ilk kışta su alan harfler tek tek sönmeye başlar — konuyu [IP65 mi IP67 mi yazımızda](/blog/ip65-mi-ip67-mi-tabela-led) ayrıntılı ele aldık.",
    },
    {
      type: "p",
      text: "Malzeme listenizi çıkardıktan sonra [tabela maliyet hesaplama aracına](/araclar/tabela-maliyet-hesaplama) girip kendi alış fiyatlarınızla toplamı görebilir, listeyi WhatsApp'tan gönderip aynı gün toptan fiyat isteyebilirsiniz.",
    },
  ],
  faq: [
    {
      q: "Işıklı tabela metrekare fiyatı ne kadar?",
      a: "Sabit bir metrekare fiyatı vermek yanıltıcıdır. Aynı ölçüdeki iki tabela, harf derinliği, ön yüzey malzemesi ve montaj yüksekliği yüzünden iki kat fark edebilir. Doğru yöntem ölçüden malzeme miktarını çıkarıp kendi alış fiyatlarınızla çarpmaktır.",
    },
    {
      q: "Tabela maliyetinin en büyük kalemi hangisi?",
      a: "Tipik bir kutu harf işinde işçilik, montaj ve nakliye toplamın %30-45'ini oluşturur. LED modül ve trafo birlikte genellikle %20'nin altında kalır.",
    },
    {
      q: "200 × 80 cm ışıklı kutu için kaç modül gerekir?",
      a: "1,6 m² alan, 15 cm modül aralığında yaklaşık 72 modül alır. 1,5 W'lık modülle bu 108 W eder; %20 güvenlik payıyla 130 W olur ve 12V 150W sınıfı bir trafo yeterlidir.",
    },
    {
      q: "Malzemede nereden tasarruf edilir?",
      a: "LED tarafında yapılan tasarruf toplam maliyeti kayda değer biçimde düşürmez ama arıza ihtimalini artırır. Tasarruf edilecek yer gövde ve ön yüzey seçimidir; orada da dış mekan dayanımını gözden çıkarmamak gerekir.",
    },
    {
      q: "Yedek malzeme payı ne kadar olmalı?",
      a: "Modül ve şeritte %10 yaygın pratiktir. Montaj sırasında kırılan veya kablosu kopan parçalar bu paydan çıkar; ikinci sefer kargo beklemek işçilikten pahalıya gelir.",
    },
    {
      q: "Teklifte hangi kalemler unutuluyor?",
      a: "En sık atlananlar vinç ve yüksekte çalışma, belediye ruhsatı, tabelaya kadar elektrik hattı çekilmesi, kontrol ünitesi kablolaması ve garanti süresi içinde yapılacak servis ziyaretinin maliyetidir.",
    },
  ],
};
