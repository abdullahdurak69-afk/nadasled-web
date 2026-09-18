// Tekil ürün sayfalarının içerik katmanı (/urunler/<kategori>/<urun>).
//
// Neden ayrı bir katman: products.json kategori sayfasını besliyor ve her kalem
// orada yalnızca ad + tek satır teknik özellik olarak duruyor. Bu kadarı bir
// sayfayı taşımaz — arama motoru için ince içerik, okuyucu için de faydasız.
// Burada yalnızca kendi sayfası açılan kalemler var ve her biri seçim kararını
// verdirecek kadar metin taşıyor: nerede kullanılır, neyle karıştırılır,
// yanında ne gerekir.
//
// 166 kalemin tamamına sayfa açılmadı. Ölçüt aranma niyeti: kullanıcı ürünü
// adıyla arıyorsa sayfası var, yalnızca katalogda seçtiği bir varyantsa
// kategori sayfasında listelenmeye devam ediyor.
//
// `name` alanı products.json'daki katalog adıyla BİREBİR aynı olmalı —
// kategori sayfası listeyi bu adla eşleştirip link basıyor.

import type { Block, FaqItem } from "./content";

export interface ItemPage {
  /** URL'in son parçası. Kategori içinde benzersiz. */
  slug: string;
  categorySlug: string;
  /** products.json'daki katalog adı — eşleştirme anahtarı. */
  name: string;
  metaTitle: string;
  metaDesc: string;
  keywords: string[];
  h1: string;
  /** Hero'da, başlığın altındaki tek paragraf. */
  intro: string;
  /** Teknik özellik tablosu: [etiket, değer]. */
  specs: [string, string][];
  /** "Nerede kullanılır" listesi. */
  useCases: string[];
  /** Gövde metni — Prose bileşeninden geçer, iç link söz dizimi geçerli. */
  blocks: Block[];
  faq: FaqItem[];
  /** Aynı kategoriden karşılaştırılan / birlikte alınan kalemler (slug). */
  related: string[];
  img?: string;
  /** İçeriğin son elden geçtiği tarih (ISO) — sitemap lastmod bunu kullanır. */
  updated: string;
}

export const items: ItemPage[] = [
  // ——— LED Modül ———————————————————————————————————————————————
  {
    slug: "1-5w-modul-led-fortune-plus",
    categorySlug: "led-modul",
    name: "1.5W Modül LED (Fortune Plus)",
    metaTitle: "1.5W Modül LED Fiyatı | Fortune Plus Kutu Harf",
    metaDesc:
      "Fortune Plus 1.5W mercekli modül LED: 12V, IP65, derin kutu harf ve büyük tabelalar için yüksek parlaklık. Toptan fiyat, aynı gün kargo, faturalı satış.",
    keywords: ["1.5w modül led", "fortune plus modül led", "kutu harf led modülü", "1.5 watt led modül", "yüksek parlaklık modül led"],
    h1: "1.5W Modül LED (Fortune Plus)",
    intro:
      "Fortune Plus serisinin en çok tercih edilen kademesi. 1.5 watt, 12V ve IP65; derin kutu harflerde ve yüzeyi büyük tabelalarda modül aralığını açmadan homojen ışık vermek için kullanılır.",
    specs: [
      ["Güç", "1.5 W / modül"],
      ["Besleme", "12V DC"],
      ["Koruma sınıfı", "IP65 — dış mekan"],
      ["Optik", "Mercekli lens, geniş açı"],
      ["Seri", "Fortune Plus (premium)"],
      ["Sertifika", "CE / RoHS"],
      ["Ömür", "50.000 saat üzeri"],
    ],
    useCases: [
      "8 cm ve üzeri derinlikteki kutu harfler",
      "Cephe üzeri büyük ışıklı tabelalar",
      "Derin ışıklı kutu (light box) panoları",
      "Gündüz de okunması gereken yüksek parlaklık isteyen işler",
    ],
    blocks: [
      { type: "h2", text: "Nerede 1.5W, nerede daha küçüğü" },
      {
        type: "p",
        text:
          "Modül gücünü belirleyen şey harfin derinliği ile yüzeyin ışığı ne kadar yaydığıdır. Sığ harflerde yüksek güçlü modül, pleksi yüzeyde tek tek parlak noktalar bırakır — buna sahada \"benek\" denir. 1.5W modülün doğru yeri, ışığın yayılmak için yeterli mesafe bulduğu derin kutulardır: yaklaşık 8 cm ve üzeri. Daha sığ harflerde [0.72W ikili modül](/urunler/led-modul/0-72w-mercekli-ikili-modul-led-fortune-light/) ya da 1.2W kademesi daha temiz sonuç verir.",
      },
      {
        type: "p",
        text:
          "İkinci ölçüt yüzey rengidir. Süt beyaz pleksi ışığı dağıtır ve affedicidir; şeffaf ya da renkli folyo kaplı yüzeyler ışığı olduğu gibi geçirdiği için modül aralığının sıklaştırılması ya da gücün düşürülmesi gerekir.",
      },
      { type: "h2", text: "Kaç modül ve hangi trafo" },
      {
        type: "p",
        text:
          "Modül adedini harf alanından çıkarırsınız: yaklaşık her 100 cm² için bir modül, kenarlardan 3-4 cm boşluk bırakarak. Adet belli olunca toplam güç doğrudan çarpımdır — 40 modül 60 watt eder. Trafoyu bu değerin %20-30 üstünden seçin; sürekli tepe yükte çalışan adaptörün ömrü belirgin biçimde kısalır. Hesabı elle yapmak yerine [kutu harf modül hesaplama aracını](/araclar/kutu-harf-modul-hesaplama/) ve [trafo amper hesaplama aracını](/araclar/trafo-amper-hesaplama/) kullanabilirsiniz.",
      },
      {
        type: "p",
        text:
          "Uzun harf dizilerinde tek besleme noktasından gitmeyin. 12V hatlarda kablo üzerinde voltaj düşümü olur ve hattın sonundaki modüller gözle görülür biçimde sönük kalır; konu ayrıntılı olarak [LED şerit voltaj düşümü](/blog/led-serit-voltaj-dusumu/) yazısında anlatılıyor, aynı fizik modüller için de geçerlidir.",
      },
      { type: "h2", text: "Fortune Plus ile Fortune Light farkı" },
      {
        type: "p",
        text:
          "İki seri aynı kasa ölçülerini ve aynı montaj mantığını paylaşır; fark çip ve lens kalitesindedir. Plus serisi daha yüksek lümen ve zaman içinde daha az renk kayması verir — dışarıda yıllarca duracak, beyazın sararmasının fark edileceği işlerde tercih edilir. Light serisi iç mekan ve daha kısa ömür beklentili işlerde maliyeti aşağı çeker.",
      },
    ],
    faq: [
      { q: "1.5W modül LED kaç metrekareyi aydınlatır?", a: "Tek başına bir alanı aydınlatmaz; tabela yüzeyini arkadan besler. Pratik ölçü, süt beyaz pleksi ve 8-10 cm derinlikte yaklaşık her 100 cm² yüzey için bir modüldür." },
      { q: "1.5W modül 24V ile çalışır mı?", a: "Hayır. Bu modül 12V DC içindir. 24V verildiğinde çipler kısa sürede kalıcı olarak bozulur; besleme etiketini montajdan önce mutlaka doğrulayın." },
      { q: "Bir trafoya kaç adet 1.5W modül bağlanır?", a: "Trafonun watt değerini 1.5'e bölüp çıkan sayının %75'ini alın. Örneğin 100W adaptörde 66 modül teorik sınırdır, güvenli çalışma sayısı yaklaşık 50'dir." },
      { q: "Modüller arası kablo kesilebilir mi?", a: "Evet, modüller arasındaki kablo işaretli noktadan kesilir ve gerekiyorsa uzatılır. Kesim noktası dışından kesmek IP65 sızdırmazlığını bozar." },
      { q: "IP65 modül suyun içinde kalabilir mi?", a: "Hayır. IP65 yağmura ve püskürtme suya karşı korumadır; su altında kalan ya da sürekli su biriken uygulamalar için uygun değildir." },
      { q: "Sararma sorunu neden olur?", a: "Genellikle düşük kaliteli lens malzemesi ve sürekli tepe akımda çalışmadan kaynaklanır. Trafoyu payla seçmek ve premium seri kullanmak sararmayı belirgin biçimde geciktirir." },
    ],
    related: ["1-2w-modul-led-fortune-light", "2-4w-cob-modul-led-fortune-plus", "1-08w-samsung-modul-led"],
    img: "/images/products/1-5-watt-modul-led-fortune-light.png",
    updated: "2026-09-02",
  },
  {
    slug: "1-2w-modul-led-fortune-light",
    categorySlug: "led-modul",
    name: "1.2W Modül LED (Fortune Light)",
    metaTitle: "1.2W Modül LED Fiyatı | Fortune Light Mercekli",
    metaDesc:
      "Fortune Light 1.2W mercekli modül LED: 12V, IP65, orta derinlikte kutu harf ve tabela için dengeli parlaklık. Toptan fiyat, aynı gün kargo.",
    keywords: ["1.2w modül led", "fortune light modül", "mercekli modül led", "tabela led modülü 1.2 watt"],
    h1: "1.2W Modül LED (Fortune Light)",
    intro:
      "Fortune Light serisinin orta kademesi. 1.2 watt, 12V, IP65 ve mercekli; parlaklık ile modül adedi arasındaki dengeyi en geniş iş yelpazesinde tutturan kademe budur.",
    specs: [
      ["Güç", "1.2 W / modül"],
      ["Besleme", "12V DC"],
      ["Koruma sınıfı", "IP65 — dış mekan"],
      ["Optik", "Mercekli lens, yüksek lümen"],
      ["Seri", "Fortune Light"],
      ["Sertifika", "CE / RoHS"],
    ],
    useCases: [
      "5-8 cm derinlikte kutu harfler",
      "Orta ölçekli cephe tabelaları",
      "Vitrin üstü ışıklı yazılar",
      "Bütçe ile parlaklığın birlikte gözetildiği seri işler",
    ],
    blocks: [
      { type: "h2", text: "Neden en çok bu kademe satılıyor" },
      {
        type: "p",
        text:
          "1.2W, tabela işlerinin çoğunun tam ortasına düşer. 0.72W ikili modüller sığ harflerde temiz sonuç verir ama derinlik arttıkça sönük kalır; 1.5W ise sığ harflerde benek yapar. Aradaki 1.2W kademesi 5-8 cm derinlik aralığında ikisinin de sorununu yaşatmaz, bu yüzden stok tutarken tek kademe seçilecekse genellikle bu seçilir.",
      },
      { type: "h2", text: "Modül aralığı ve dizilim" },
      {
        type: "p",
        text:
          "Mercekli modülde ışık yana doğru yayıldığı için modülleri harfin ortasına tek sıra dizmek çoğu genişlikte yeterlidir. Harf genişliği 12 cm'yi geçtiğinde iki sıraya çıkın ve sıraları harf kenarından değil, kenarla orta hat arasındaki üçte bir noktalara yerleştirin — kenara yapıştırılan sıra, kenarda parlak bir hat bırakır.",
      },
      {
        type: "p",
        text:
          "Köşelerde ve dar dönüşlerde modül aralığını sıklaştırmak yerine modülü köşeye açıyla yerleştirin. Aralığı sıklaştırmak o bölgede ısıyı ve tüketimi artırır, ışığı ise beklendiği kadar düzeltmez. Ayrıntı için [kutu harf için LED modül seçimi](/blog/kutu-harf-icin-led-modul-secimi/) rehberine bakabilirsiniz.",
      },
      { type: "h2", text: "Light serisi hangi işlerde yeter" },
      {
        type: "p",
        text:
          "İç mekan, vitrin içi ve saçak altı gibi doğrudan güneş ve yağmur almayan yerlerde Light serisi Plus ile aynı işi görür. Doğrudan güneş gören güney cepheleri, deniz kenarı ve sanayi bölgeleri gibi zorlu konumlarda Plus serisinin daha yavaş yaşlanan lensi maliyet farkını çıkarır.",
      },
    ],
    faq: [
      { q: "1.2W ile 1.5W arasında gözle görülür fark var mı?", a: "Aynı yüzeyde yan yana bakıldığında evet, tek başına bakıldığında çoğu izleyici ayırt etmez. Karar derinliğe göre verilmelidir: 8 cm altında 1.2W, üstünde 1.5W." },
      { q: "Kaç modül bir arada seri bağlanabilir?", a: "Üretici zincir sınırı tipik olarak 20-25 modüldür. Daha uzun hatlarda ikinci besleme çekin, yoksa hattın sonu sönük kalır." },
      { q: "Fortune Light dış mekanda kullanılır mı?", a: "Kullanılır, IP65'tir. Ancak sürekli doğrudan güneş alan cephelerde Fortune Plus serisi zaman içinde renk kararlılığını daha iyi korur." },
      { q: "Modülü pleksiye yapıştırabilir miyim?", a: "Modül harfin arka yüzeyine yapıştırılır, ışığın çıktığı ön pleksiye değil. Yapıştırma bandı yüzey tozdan ve yağdan arındırılmadan tutmaz." },
      { q: "12V trafo dışında bir şey gerekir mi?", a: "Tek renk modülde hayır. Yalnızca uygun watt değerinde bir [LED trafo](/urunler/trafo-led-surucu/) ve besleme kablosu yeterlidir." },
    ],
    related: ["1-5w-modul-led-fortune-plus", "0-72w-mercekli-ikili-modul-led-fortune-light", "1-08w-samsung-modul-led"],
    img: "/images/products/1-2-watt-modul-led-fortune-light.png",
    updated: "2026-09-02",
  },
  {
    slug: "0-72w-mercekli-ikili-modul-led-fortune-light",
    categorySlug: "led-modul",
    name: "0.72W Mercekli İkili Modül LED (Fortune Light)",
    metaTitle: "0.72W İkili Mercekli Modül LED Fiyatı | Sığ Harf",
    metaDesc:
      "0.72W ikili mercekli modül LED: 12V, IP65, sığ kutu harf ve ince tabelalarda benek yapmayan dengeli ışık. Toptan fiyat, aynı gün kargo.",
    keywords: ["0.72w modül led", "ikili modül led", "mercekli ikili modül", "sığ kutu harf led", "ince tabela modülü"],
    h1: "0.72W Mercekli İkili Modül LED (Fortune Light)",
    intro:
      "İki çipli, 0.72 watt, 12V ve IP65 mercekli modül. Işığın yayılmak için fazla mesafe bulamadığı sığ kutu harflerde ve ince tabelalarda tercih edilen kademedir.",
    specs: [
      ["Güç", "0.72 W / modül"],
      ["Çip sayısı", "2 adet"],
      ["Besleme", "12V DC"],
      ["Koruma sınıfı", "IP65"],
      ["Optik", "Mercekli lens, tabela tipi"],
      ["Seri", "Fortune Light"],
    ],
    useCases: [
      "3-5 cm derinlikte sığ kutu harfler",
      "İnce profil ışıklı tabelalar",
      "Küçük puntolu harf ve logolar",
      "Şeffaf veya renkli folyo kaplı yüzeyler",
    ],
    blocks: [
      { type: "h2", text: "Sığ harfte güç değil, dağılım sorunu" },
      {
        type: "p",
        text:
          "Sığ kutu harflerde asıl problem yeterince ışık olmaması değil, ışığın yayılacak mesafe bulamamasıdır. Güçlü bir modül bu koşulda daha fazla ışık değil, daha belirgin bir parlak nokta üretir. 0.72W ikili modülün mantığı tersidir: gücü düşürüp modül sayısını artırarak yüzeye eşit dağılmış daha yumuşak bir ışık verir.",
      },
      {
        type: "p",
        text:
          "Pratik kural: derinlik 5 cm'nin altındaysa modül aralığını 8-10 cm'ye kadar sıklaştırın ve gücü yükseltmeyin. Aynı yüzeye daha az sayıda güçlü modül koymak, harfin üzerinde noktaların tek tek okunmasına yol açar.",
      },
      { type: "h2", text: "Küçük punto ve ince logolar" },
      {
        type: "p",
        text:
          "Genişliği 6-7 cm'nin altına inen harflerde büyük kasa modül fiziksel olarak sığmaz. İkili modülün kompakt kasası bu noktada tek pratik çözümdür; daha da darsa üçlü mini kasa modüllere ya da [kesit aydınlatma çözümlerine](/urunler/kesit-aydinlatma-led/) geçilir.",
      },
      { type: "h2", text: "Trafo tarafı" },
      {
        type: "p",
        text:
          "Modül başına güç düşük olduğu için aynı trafoya çok daha fazla modül bağlanabilir; buradaki sınır watt değil, zincir uzunluğu ve kablo kesitidir. Toplam yükü ve hattın kaça bölüneceğini [trafo amper hesaplama aracıyla](/araclar/trafo-amper-hesaplama/) çıkarabilirsiniz.",
      },
    ],
    faq: [
      { q: "0.72W modül derin harfte kullanılır mı?", a: "Kullanılabilir ama modül adedini belirgin biçimde artırmanız gerekir. 8 cm üstü derinlikte 1.2W veya 1.5W kademesi hem daha az modülle hem daha düzgün sonuç verir." },
      { q: "İkili modül ile üçlü modül farkı nedir?", a: "Çip sayısı ve kasa boyu farklıdır. İkili daha dar yerlere girer; üçlü aynı hatta daha fazla lümen verir ve modül aralığını açmanıza izin verir." },
      { q: "Modül aralığı ne kadar olmalı?", a: "Sığ harflerde 8-10 cm, orta derinlikte 12-15 cm iyi bir başlangıçtır. Kesin aralık pleksinin ışık geçirgenliğine bağlıdır; bir harfi örnek dizip kapatarak görmek en güvenilir yöntemdir." },
      { q: "Renkli folyolu yüzeyde parlaklık düşer mi?", a: "Evet, koyu folyolar ışığın önemli kısmını tutar. Bu yüzeylerde modül aralığını yaklaşık üçte bir oranında sıklaştırmak gerekir." },
      { q: "IP65 modülün kablosu da su geçirmez mi?", a: "Modül gövdesi geçirmez; ek yerleri ve kesim uçları değildir. Dış mekanda tüm ekleri silikon ya da makaron ile kapatın." },
    ],
    related: ["1-2w-modul-led-fortune-light", "1-5w-modul-led-fortune-plus", "1-5w-eco-mercekli-modul-led"],
    img: "/images/products/0-72w-mercekli-ikili-modul-led.jpg",
    updated: "2026-09-02",
  },
  {
    slug: "1-08w-samsung-modul-led",
    categorySlug: "led-modul",
    name: "1.08W Samsung Modül LED",
    metaTitle: "Samsung Modül LED 1.08W Fiyatı | Yüksek CRI",
    metaDesc:
      "Samsung 2835 çipli 1.08W modül LED: 12V, IP65, yüksek CRI ve kararlı beyaz. Kurumsal kimlik renginin doğru çıkması gereken tabelalar için.",
    keywords: ["samsung modül led", "1.08w modül led", "samsung 2835 modül", "yüksek cri tabela led", "kurumsal renk led modül"],
    h1: "1.08W Samsung Modül LED",
    intro:
      "Samsung 2835 çip kullanan 1.08 watt, 12V, IP65 modül. Öne çıkan özelliği parlaklık değil renk kararlılığı: beyaz tonu partiler arasında ve zaman içinde kaymıyor.",
    specs: [
      ["Güç", "1.08 W / modül"],
      ["Çip", "Samsung 2835"],
      ["Besleme", "12V DC"],
      ["Koruma sınıfı", "IP65"],
      ["Renksel geriverim", "Yüksek CRI"],
      ["Sertifika", "CE / RoHS"],
    ],
    useCases: [
      "Zincir mağaza ve kurumsal kimlik tabelaları",
      "Beyazın tonunun önemli olduğu ışıklı kutular",
      "Etap etap büyüyen, sonradan modül eklenecek işler",
      "Renkli folyo altında rengin doğru çıkması gereken yüzeyler",
    ],
    blocks: [
      { type: "h2", text: "Marka çip farkı nerede ortaya çıkar" },
      {
        type: "p",
        text:
          "Tek bir harfte isimsiz çip ile marka çip arasındaki fark çoğu zaman görülmez. Fark, aynı işte yan yana duran iki panoda ya da altı ay sonra eklenen bir harfte ortaya çıkar: isimsiz çiplerde parti farkı gözle seçilir bir ton kayması yaratır, Samsung gibi çiplerde bu tolerans dar tutulur. Bu yüzden zincir mağaza işlerinde ve etaplı projelerde marka çip tercih edilir.",
      },
      { type: "h2", text: "CRI neden tabelada da önemli" },
      {
        type: "p",
        text:
          "Renksel geriverim genellikle iç aydınlatma konusu sanılır, ama arkadan aydınlatılan renkli folyolarda doğrudan sonucu etkiler. Düşük CRI'li beyaz, kırmızı ve turuncu folyoları soluk ve kirli gösterir. Kurumsal kimlik renginin basılı hâliyle eşleşmesi bekleniyorsa yüksek CRI belirleyicidir.",
      },
      { type: "h2", text: "Konumlandırma" },
      {
        type: "p",
        text:
          "1.08W kademesi güç olarak 1.2W ile hemen hemen aynı yerde durur; seçim güce göre değil, çipe göre yapılır. Renk hassasiyeti olmayan işlerde [1.2W Fortune Light](/urunler/led-modul/1-2w-modul-led-fortune-light/) aynı işi daha uygun maliyetle görür.",
      },
    ],
    faq: [
      { q: "Samsung modül ile normal modül arasında parlaklık farkı var mı?", a: "Aynı watt kademesinde belirgin bir parlaklık farkı yoktur. Fark renk kararlılığında, CRI'de ve zaman içindeki yaşlanma hızındadır." },
      { q: "Sonradan modül eklersem ton tutar mı?", a: "Marka çipte tutma ihtimali çok daha yüksektir, çünkü üretim toleransı dardır. Yine de aynı seriyi ve mümkünse aynı renk sıcaklığı kodunu isteyin." },
      { q: "Osram modül ile farkı nedir?", a: "İkisi de marka çip sınıfındadır ve tabelada birbirinin yerine kullanılır. Seçim genellikle stok ve fiyat üzerinden yapılır; kritik olan isimsiz çipten marka çipe geçmektir." },
      { q: "Yüksek CRI tüketimi artırır mı?", a: "Hayır. CRI çipin spektrumuyla ilgilidir, watt değeriyle değil. Trafo hesabınız değişmez." },
      { q: "Hangi renk sıcaklığı tabelada standarttır?", a: "Tabelada en yaygın kullanım 6500K soğuk beyazdır; kurumsal kimlik sıcak ton istiyorsa 3000K seçenekleri de vardır." },
    ],
    related: ["1-2w-modul-led-fortune-light", "1-5w-modul-led-fortune-plus", "ip20-8mm-samsung-ic-mekan-serit-led"],
    img: "/images/products/1-08-watt-samsung-modul.png",
    updated: "2026-09-02",
  },
  {
    slug: "2-4w-cob-modul-led-fortune-plus",
    categorySlug: "led-modul",
    name: "2.4W COB Modül LED (Fortune Plus)",
    metaTitle: "COB Modül LED 2.4W Fiyatı | Noktasız Işık",
    metaDesc:
      "2.4W COB modül LED: 12V, IP65, tek tek nokta görünmeyen kesintisiz ışık. Sığ kutu harf ve şeffaf yüzeylerde benek sorununu bitirir.",
    keywords: ["cob modül led", "2.4w cob modül", "noktasız modül led", "homojen tabela ışığı", "cob tabela modülü"],
    h1: "2.4W COB Modül LED (Fortune Plus)",
    intro:
      "COB çipli 2.4 watt, 12V, IP65 modül. Ayrı ayrı LED noktaları yerine tek bir ışık yüzeyi verdiği için, benek sorununun çözülmesi gereken sığ ve şeffaf yüzeylerde kullanılır.",
    specs: [
      ["Güç", "2.4 W / modül"],
      ["Çip tipi", "COB (Chip on Board)"],
      ["Besleme", "12V DC"],
      ["Koruma sınıfı", "IP65"],
      ["Işık karakteri", "Noktasız, kesintisiz yüzey"],
      ["Seri", "Fortune Plus"],
    ],
    useCases: [
      "Şeffaf ve yarı şeffaf pleksi yüzeyler",
      "Sığ derinlikte ama yüksek parlaklık istenen harfler",
      "İnce difüzörlü ışıklı kutular",
      "Yakından bakılan vitrin ve iç mekan tabelaları",
    ],
    blocks: [
      { type: "h2", text: "COB tam olarak neyi çözer" },
      {
        type: "p",
        text:
          "Klasik SMD modülde her çip ayrı bir ışık kaynağıdır ve yüzeye yeterince yayılamazsa arkasındaki nokta okunur. COB'da çipler tek bir taşıyıcı üzerinde bitişik dizilir ve üstü ortak fosfor tabakasıyla kapatılır; sonuç, noktaları ayırt edilemeyen sürekli bir ışık şerididir. Difüzör yeterli olmadığında ya da hiç difüzör kullanılamadığında farkı doğrudan görürsünüz.",
      },
      {
        type: "p",
        text:
          "Bunun bedeli birim güçtür: 2.4W, modül kademeleri arasında yüksek bir değerdir ve trafo hesabını yukarı çeker. COB ile SMD arasındaki karşılaştırmanın tamamı [COB mu SMD şerit mi](/blog/cob-vs-smd-led-serit/) yazısında; oradaki mantık modüller için de aynen geçerli.",
      },
      { type: "h2", text: "Nerede gereksiz" },
      {
        type: "p",
        text:
          "Süt beyaz, kalın ve derinliği yeterli bir kutu harfte COB'un görsel avantajı büyük ölçüde kaybolur — pleksi zaten dağıtma işini yapıyordur. Bu durumda 1.2W ya da 1.5W SMD modül hem daha az watt hem daha düşük maliyettir. COB'u yüzey ışığı saklamıyorsa kullanın.",
      },
      { type: "h2", text: "Isı ve trafo" },
      {
        type: "p",
        text:
          "Yüksek watt, dar kasada daha fazla ısı demektir. Modülü metal harf gövdesine tam temas edecek şekilde yapıştırın, boşlukta bırakmayın. Trafoda %25-30 pay bırakmak COB'da tercih değil gerekliliktir.",
      },
    ],
    faq: [
      { q: "COB modül ile SMD modül aynı yerde karıştırılabilir mi?", a: "Aynı yüzeyde karıştırmayın; ışık karakterleri farklı olduğu için geçiş gözle seçilir. Aynı tabelada farklı harfler için ayrı ayrı kullanılabilir." },
      { q: "COB modülde benek hiç olmaz mı?", a: "Modülün kendisi nokta göstermez, ancak modüller arası boşluk çok açılırsa yüzeyde aydınlık-karanlık bantlanma oluşur. Aralığı 12-15 cm'de tutun." },
      { q: "2.4W COB için hangi trafo?", a: "Modül adedini 2.4 ile çarpın, çıkan değere %25 ekleyin. 30 modül 72W eder, 100W trafo uygun seçimdir." },
      { q: "COB modül dış mekanda kullanılır mı?", a: "IP65 olduğu için kullanılır. Yüksek ısı ürettiğinden kapalı ve havasız kasalarda modül aralığını biraz açmak ömrü uzatır." },
      { q: "Şeffaf pleksi arkasında COB yeterli mi?", a: "Tek başına yeterli olmayabilir; şeffaf yüzeyde modülün kendisi görülür. COB görüntüyü belirgin biçimde iyileştirir ama ince bir difüzör film hâlâ önerilir." },
    ],
    related: ["1-5w-modul-led-fortune-plus", "ip20-8mm-cob-480-mt", "1-5w-eco-mercekli-modul-led"],
    img: "/images/products/cob-modul-led.jpg",
    updated: "2026-09-02",
  },
  {
    slug: "0-72w-rgb-modul-led-fortune-plus",
    categorySlug: "led-modul",
    name: "0.72W RGB Modül LED (Fortune Plus)",
    metaTitle: "RGB Modül LED 0.72W Fiyatı | Renk Değiştiren",
    metaDesc:
      "0.72W RGB modül LED: 12V, IP65, kontrolör ile tam renk ve renk geçişi. Tabela, cephe ve dekoratif aydınlatma için toptan fiyat.",
    keywords: ["rgb modül led", "0.72w rgb modül", "renk değiştiren modül led", "tabela rgb led", "rgb kutu harf"],
    h1: "0.72W RGB Modül LED (Fortune Plus)",
    intro:
      "Kırmızı, yeşil ve mavi çipi tek kasada birleştiren 0.72 watt, 12V, IP65 modül. Bir kontrol ünitesiyle sabit renk, renk geçişi ve sese tepkili modlar verir.",
    specs: [
      ["Güç", "0.72 W / modül"],
      ["Renk", "RGB — tam renk"],
      ["Besleme", "12V DC"],
      ["Koruma sınıfı", "IP65"],
      ["Kablo", "4 damar (V+, R, G, B)"],
      ["Kontrol", "RGB kontrol ünitesi gerekir"],
    ],
    useCases: [
      "Renk değiştiren cephe ve tabela aydınlatması",
      "Kafe, bar ve eğlence mekanı vitrinleri",
      "Dekoratif niş ve bordür aydınlatması",
      "Kampanya dönemlerinde renk değiştirmesi istenen panolar",
    ],
    blocks: [
      { type: "h2", text: "Tek renk modülden farkı: dört damar" },
      {
        type: "p",
        text:
          "RGB modülün kablosu iki değil dört damardır; ortak besleme ile üç ayrı renk hattı. Bu yüzden doğrudan trafoya bağlanmaz, arada mutlaka bir [RGB kontrol ünitesi](/urunler/led-kontrol-uniteleri/) bulunur. Bağlantı sırası önemlidir: hat üzerindeki tüm modüller aynı damar sırasıyla bağlanmazsa renkler harften harfe farklı çıkar.",
      },
      { type: "h2", text: "RGB mi, adreslenebilir pixel mi" },
      {
        type: "p",
        text:
          "Sıradan RGB'de hattın tamamı aynı anda aynı rengi alır. Her modülün ayrı renk alması, dalga ve akış efektlerinin oluşması isteniyorsa adreslenebilir pixel modele geçmek gerekir — sistem daha pahalı ve kurulumu daha hassastır. Sadece renk değişimi isteniyorsa RGB fazlasıyla yeterlidir.",
      },
      { type: "h2", text: "Yük ve kontrolör kapasitesi" },
      {
        type: "p",
        text:
          "Kontrol ünitesinin amper sınırı çoğu zaman trafodan önce dolar. Toplam yükü hesaplayıp kontrolörün kanal başına akımına bakın; sınır aşılıyorsa araya bir RGB repeater konur. Kontrolör seçiminin ayrıntısı [RGB LED kontrol ünitesi seçimi](/blog/rgb-led-kontrol-unitesi-secimi/) yazısında.",
      },
      {
        type: "p",
        text:
          "Beyaz gerektiğinde RGB'nin ürettiği beyaz, adanmış beyaz çipin beyazı kadar temiz değildir. Hem renk hem düzgün beyaz isteniyorsa RGB+W modeller tercih edilir.",
      },
    ],
    faq: [
      { q: "RGB modül trafoya doğrudan bağlanır mı?", a: "Hayır. Trafo ile modül arasına mutlaka bir RGB kontrol ünitesi girer; doğrudan bağlanırsa üç renk aynı anda yanar ve renk kontrolü olmaz." },
      { q: "Bir kontrolöre kaç RGB modül bağlanır?", a: "Kontrolörün kanal başına amperine bakın. Tipik bir 12-24V ünite 6A civarıdır; 0.72W modülde bu yaklaşık 100 modüle karşılık gelir, üstünde repeater gerekir." },
      { q: "RGB modülle saf beyaz elde edilir mi?", a: "Üç renk birlikte yakıldığında beyaza yakın bir ton çıkar ama hafif mavi veya pembe kaçar. Temiz beyaz gerekiyorsa RGB+W modeli seçin." },
      { q: "Kumanda menzili ne kadar?", a: "RF kumandalarda tipik olarak 15-20 metre ve duvar arkasından çalışır; kızılötesi kumandalarda görüş hattı gerekir. Uzak panolarda Bluetooth veya WiFi ünite daha rahattır." },
      { q: "Renkler harften harfe farklı çıkıyor, neden?", a: "Neredeyse her zaman damar sırasının bir yerde karışmasından kaynaklanır. Tüm ekleri V+, R, G, B sırasına göre kontrol edin." },
    ],
    related: ["ip20-rgb-serit-led", "44-tuslu-rgb-kontrol-cihazi", "bluetooth-rgb-kontrol-unitesi"],
    img: "/images/products/0-72w-rgb-modul-led.png",
    updated: "2026-09-02",
  },
  // ——— Light Box LED ————————————————————————————————————————————
  {
    slug: "1-5w-eco-mercekli-modul-led",
    categorySlug: "light-box-led",
    name: "1.5W ECO Mercekli Modül LED",
    metaTitle: "1.5W ECO Mercekli Modül LED Fiyatı | Light Box",
    metaDesc:
      "1.5W ECO mercekli modül LED: 12V, IP65, geniş açılı mercek ile ışıklı kutu ve light box panolarında homojen dağılım. Toptan fiyat.",
    keywords: ["light box led modül", "ışıklı kutu led", "1.5w eco modül", "geniş açılı modül led", "pano led modülü"],
    h1: "1.5W ECO Mercekli Modül LED",
    intro:
      "Geniş açılı mercekli, 1.5 watt, 12V ve IP65 ekonomik seri modül. Işıklı kutu panolarında az sayıda modülle geniş yüzey kaplamak için tasarlanmıştır.",
    specs: [
      ["Güç", "1.5 W / modül"],
      ["Besleme", "12V DC"],
      ["Koruma sınıfı", "IP65"],
      ["Optik", "Geniş açılı mercek"],
      ["Seri", "ECO"],
      ["Kullanım", "Işıklı kutu / light box"],
    ],
    useCases: [
      "Tek ve çift yüzlü ışıklı kutu panolar",
      "Menü ve fiyat panoları",
      "Totem ve yönlendirme tabelaları",
      "Derinliği 10 cm ve üzeri kasalar",
    ],
    blocks: [
      { type: "h2", text: "Işıklı kutuda mesele yüzeyin eşit olması" },
      {
        type: "p",
        text:
          "Kutu harften farklı olarak ışıklı kutuda büyük ve düz bir yüzeyin baştan sona aynı parlaklıkta olması beklenir. Gözün en çabuk yakaladığı hata, kenarların ortadan sönük kalmasıdır. Bu yüzden modüller yüzeye eşit aralıklı bir ızgara olarak dizilir ve kenarlardaki sıra, kenardan aralığın yarısı kadar içeride bırakılır.",
      },
      { type: "h2", text: "Geniş açılı merceğin işlevi" },
      {
        type: "p",
        text:
          "Dar açılı mercek ışığı ileri fırlatır ve difüzörde parlak bir daire bırakır. Geniş açılı mercek ise ışığı yana yayar; komşu modülün ışığıyla üst üste binen alan büyür ve yüzey düzleşir. Sonuç olarak aynı yüzey daha az modülle, daha az bantlanmayla kaplanır.",
      },
      { type: "h2", text: "Kasa derinliği ve modül aralığı" },
      {
        type: "p",
        text:
          "Pratik başlangıç değeri: kasa derinliği kadar modül aralığı. 10 cm derinlikte 10-12 cm aralık, 15 cm derinlikte 15-18 cm aralık. Kasa sığlaştıkça aralık kısalmalıdır. Seçimin tamamı [light box LED seçimi](/blog/light-box-led-secimi/) rehberinde, gereken modül adedini ise [kutu harf modül hesaplama aracıyla](/araclar/kutu-harf-modul-hesaplama/) çıkarabilirsiniz.",
      },
      {
        type: "p",
        text:
          "Çift yüzlü kutularda iki yüzey ayrı beslenir ve modüller sırt sırta değil, şaşırtmalı dizilir; sırt sırta dizilim iki yüzeyde de aynı noktada sıcak bölge oluşturur.",
      },
    ],
    faq: [
      { q: "Işıklı kutuda modül mü, şerit mi daha iyi?", a: "Derin kutularda modül daha ekonomik ve daha homojendir. 5 cm altı sığ kutularda kenardan besleyen [LED bar](/urunler/zemin-aydinlatma-led/) veya COB şerit daha iyi sonuç verir." },
      { q: "ECO seri dış mekanda dayanır mı?", a: "IP65 olduğu için yağmura dayanır. Doğrudan güneş alan totemlerde premium seri daha uzun süre renk kararlılığını korur." },
      { q: "Kaç watt trafo gerekir?", a: "Modül adedi × 1.5W toplam yüktür; üzerine %20-30 pay ekleyin. 60 modüllük bir pano 90W çeker, 120W trafo uygun olur." },
      { q: "Modüller yüzeyde daire daire görünüyor, ne yapmalı?", a: "Aralık kasanın derinliğine göre fazla açılmıştır. Aralığı kısaltın ya da difüzör kalınlığını artırın; gücü yükseltmek bu hatayı düzeltmez." },
      { q: "Tek yüzlü kutuda arka yüzey ne olmalı?", a: "Beyaz veya alüminyum gibi yansıtıcı bir yüzey ışığın önemli bir kısmını öne geri döndürür ve gereken modül sayısını düşürür." },
    ],
    related: ["1-5w-modul-led-fortune-plus", "2-4w-cob-modul-led-fortune-plus", "ip65-kesitten-aydinlatma-led-bar"],
    img: "/images/products/eco-1-5w-modul-led.png",
    updated: "2026-09-02",
  },
  // ——— Neon LED ————————————————————————————————————————————————
  {
    slug: "6x12mm-silikon-neon-led-1cm",
    categorySlug: "neon-led",
    name: "6x12mm Silikon Neon LED (1cm)",
    metaTitle: "6x12mm Silikon Neon LED Fiyatı | 1cm Kesim",
    metaDesc:
      "6x12mm silikon neon LED, 1 cm'de kesilebilir: 12V, IP65, dar yazı ve keskin dönüşler için. Toptan fiyat, metrede kesim, aynı gün kargo.",
    keywords: ["6x12mm neon led", "silikon neon led", "neon flex", "1cm kesim neon", "neon yazı led"],
    h1: "6x12mm Silikon Neon LED (1 cm Kesim)",
    intro:
      "12V, IP65 silikon neon flex. Ayırt edici özelliği kesim aralığı: her 1 cm'de kesilebildiği için harf boylarını ölçüye tam oturtur, dar yazılarda ve keskin dönüşlerde fire bırakmaz.",
    specs: [
      ["Kesit", "6 × 12 mm"],
      ["Besleme", "12V DC"],
      ["Koruma sınıfı", "IP65"],
      ["Kesim aralığı", "1 cm"],
      ["Gövde", "Silikon — bükülebilir"],
      ["Bükülme yönü", "Yan (kesit genişliği boyunca)"],
    ],
    useCases: [
      "El yazısı neon tabelalar ve logolar",
      "Küçük puntolu neon yazılar",
      "İç mekan duvar yazıları ve dekorasyon",
      "Kavisli kontur ve çerçeve aydınlatması",
    ],
    blocks: [
      { type: "h2", text: "1 cm kesim neyi değiştirir" },
      {
        type: "p",
        text:
          "Neon flex yalnızca üretici tarafından işaretlenen noktalardan kesilebilir; arada kesmek o segmenti kalıcı olarak söndürür. Kesim aralığı 2.5 cm olan bir üründe her parçada ortalama 1.2 cm fire verirsiniz ve harf boyları ölçüye tam oturmaz. 1 cm kesim, özellikle küçük puntolu ve çok parçalı yazılarda hem fireyi hem ölçü sapmasını belirgin biçimde düşürür.",
      },
      { type: "h2", text: "Bükme yönü — en sık yapılan hata" },
      {
        type: "p",
        text:
          "6x12mm profil yalnızca tek yöne bükülür: kesitin geniş yüzü boyunca. Ters yöne zorlamak içerideki devre kartını çatlatır ve arıza montajdan haftalar sonra ortaya çıkar. Harfin planında ters yönde bir dönüş varsa, o dönüşü bükerek değil kesip ekleyerek yapın.",
      },
      {
        type: "p",
        text:
          "Minimum bükme yarıçapına uyun; keskin köşeler bükülerek değil, iki parçanın uç uca eklenmesiyle oluşturulur. Montajın tamamı [neon flex seçim ve montaj](/blog/neon-flex-secim-ve-montaj/) rehberinde adım adım anlatılıyor.",
      },
      { type: "h2", text: "Uçlar ve besleme" },
      {
        type: "p",
        text:
          "Her kesim iki açık uç bırakır. Besleme ucuna başlangıç aparatı, serbest uca silikon kapak takılır ve ikisi de yapıştırıcı ile sızdırmaz hâle getirilir. Kapatılmamış uç, IP65 ürünü dış mekanda birkaç ay içinde bitirir. Aparatlar ve neon yapıştırıcısı [neon LED kategorisinde](/urunler/neon-led/) listelidir.",
      },
    ],
    faq: [
      { q: "Neon LED istediğim yerden kesilir mi?", a: "Hayır, yalnızca üzerinde işaretli kesim noktalarından. Bu üründe işaretler 1 cm aralıklıdır; arada kesmek o segmenti söndürür." },
      { q: "Bir hatta kaç metre neon bağlanabilir?", a: "12V üründe tek besleme ile 5 metre pratik sınırdır. Daha uzun hatlarda sonda gözle görülür sönüklük olur; hattı ortadan ya da iki uçtan besleyin." },
      { q: "Kaç watt trafo gerekir?", a: "Metre başına watt değerini metrajla çarpıp %20 pay ekleyin. Metrajdan trafoyu doğrudan [trafo amper hesaplama aracıyla](/araclar/trafo-amper-hesaplama/) çıkarabilirsiniz." },
      { q: "6x12mm ile 8x16mm arasında nasıl seçim yapılır?", a: "6x12mm dar yazılar ve iç mekan için, 8x16mm daha kalın hat ve daha yüksek parlaklık gerektiren dış mekan işleri için uygundur." },
      { q: "Silikon neon dış mekanda kaç yıl dayanır?", a: "Uçları düzgün kapatılmış ve payla seçilmiş trafoyla beslenen bir hat tipik olarak yıllarca sorunsuz çalışır. Erken arızaların büyük çoğunluğu açık uçtan ve ters bükmeden kaynaklanır." },
    ],
    related: ["8x16mm-neon-led-24v", "10x10mm-flat-neon", "360-neon-led"],
    img: "/images/products/6x12mm-silikon-neon-led-2-5cm-2.jpg",
    updated: "2026-09-02",
  },
  {
    slug: "8x16mm-neon-led-24v",
    categorySlug: "neon-led",
    name: "8x16mm Neon LED (24V)",
    metaTitle: "8x16mm Neon LED 24V Fiyatı | Yüksek Lümen",
    metaDesc:
      "8x16mm 24V neon LED: IP65, yüksek lümen silikon profil, uzun hatlarda düşük voltaj kaybı. Cephe ve dış mekan neon için toptan fiyat.",
    keywords: ["8x16mm neon led", "24v neon led", "dış mekan neon led", "yüksek lümen neon", "cephe neon aydınlatma"],
    h1: "8x16mm Neon LED (24V)",
    intro:
      "Kalın kesitli, yüksek lümenli 24V silikon neon. Uzun hatlarda ve gündüz de okunması gereken dış mekan işlerinde 12V modellerin iki temel sınırını aşar: parlaklık ve hat uzunluğu.",
    specs: [
      ["Kesit", "8 × 16 mm"],
      ["Besleme", "24V DC"],
      ["Koruma sınıfı", "IP65"],
      ["Gövde", "Yüksek profil silikon"],
      ["Işık", "Yüksek lümen"],
      ["Tipik hat uzunluğu", "10 metreye kadar tek besleme"],
    ],
    useCases: [
      "Cephe boyunca uzanan uzun neon hatları",
      "Gündüz de görünmesi gereken dış mekan yazıları",
      "Bina konturu ve çatı hattı aydınlatması",
      "Yüksekten okunacak büyük puntolu neon tabelalar",
    ],
    blocks: [
      { type: "h2", text: "24V'un asıl avantajı parlaklık değil, mesafe" },
      {
        type: "p",
        text:
          "Aynı gücü 24V ile taşımak, 12V'a göre yarı akım demektir. Kablo ve şerit üzerindeki kayıp akımla birlikte arttığı için 24V hatlarda voltaj düşümü belirgin biçimde azalır: 12V'ta 5 metrede sönmeye başlayan bir hat, 24V'ta 10 metreye kadar dengesini korur. Uzun cephelerde bu, besleme noktası sayısını ve kablo çekme işçiliğini yarıya indirir.",
      },
      {
        type: "p",
        text:
          "12V ve 24V arasındaki tercihin tabela işlerindeki karşılığı [12V mu 24V mu](/blog/12v-mu-24v-mu-tabela-aydinlatma/) yazısında ayrıntılı olarak karşılaştırılıyor.",
      },
      { type: "h2", text: "Kalın kesit ne kazandırır" },
      {
        type: "p",
        text:
          "8x16mm profil, ince modellere göre hem daha kalın bir ışık hattı hem daha sağlam bir gövde verir. Yüksekten ve uzaktan okunacak yazılarda ince hat kaybolur; bu ölçü uzaktan da dolgun görünür. Karşılığında minimum bükme yarıçapı büyür, yani çok küçük puntolu ve kıvrımlı el yazılarına uygun değildir — orada 6x12mm tercih edilir.",
      },
      {
        type: "p",
        text:
          "Kalın kesit arayışı 8x16 ile sınırlı değil: yarım daire kesitli [13mm D-Shape neon](/urunler/neon-led/13mm-d-shape-neon-led/) metrede 1750 lümenle bu ailenin en parlağıdır ve düz tabanı sayesinde yüzeye tam oturur. Aynı ışık yüzünü daha alçak profilde isteyen işlerde ise [10x5 flat neon](/urunler/neon-led/10x5mm-flat-neon/) kullanılır.",
      },
      { type: "h2", text: "Montaj ve sabitleme" },
      {
        type: "p",
        text:
          "Kalın profil kendi ağırlığıyla sarkabilir. Yatay uzun hatlarda alüminyum kanal ya da klips ile 40-50 cm'de bir sabitleyin. Yalnızca yapıştırıcıya güvenilen uzun hatlar, dış mekanda ısı ve nemle birlikte zamanla açılır.",
      },
    ],
    faq: [
      { q: "24V neon 12V trafoyla çalışır mı?", a: "Çalışmaz — çok sönük yanar ya da hiç yanmaz. 24V ürün mutlaka 24V trafo ile beslenir." },
      { q: "Aynı işte 12V ve 24V neon karıştırılabilir mi?", a: "Aynı hatta asla. Ayrı hatlar ve ayrı trafolarla aynı tabelada kullanılabilir, ancak parlaklık farkı gözle seçilebileceği için önerilmez." },
      { q: "Hat sonunda sönüklük olursa ne yapmalı?", a: "Hattı iki uçtan besleyin veya ortadan besleyerek iki kola bölün. Kablo kesitini artırmak da kaybı düşürür; ayrıntısı [LED şerit voltaj düşümü](/blog/led-serit-voltaj-dusumu/) yazısında." },
      { q: "Dış mekanda hangi trafo kullanılmalı?", a: "IP67 metal kasa ya da yağmur korumalı epoksili bir adaptör. İç mekan tipi ultra slim adaptörler dış mekanda kısa sürede arızalanır." },
      { q: "8x16mm profil ne kadar bükülür?", a: "Üreticinin verdiği minimum yarıçapa uyun; tipik olarak 6x12mm'den belirgin biçimde büyüktür. Keskin dönüşleri bükerek değil, kesip ekleyerek yapın." },
    ],
    related: ["6x12mm-silikon-neon-led-1cm", "10x10mm-flat-neon", "meanwell-dis-mekan-plus-adaptor"],
    img: "/images/products/8x16mm-neon-led-24v.jpg",
    updated: "2026-09-02",
  },
  {
    slug: "10x10mm-flat-neon",
    categorySlug: "neon-led",
    name: "10x10mm Flat Neon",
    metaTitle: "10x10mm Flat Neon LED Fiyatı | 12V/24V IP67",
    metaDesc:
      "10x10mm flat neon LED: 12V ve 24V, IP67, 10W/m, çift katmanlı silikon difüzör, 14 tek renk + RGB + Pixel. Kare kesit, 3 yıl garanti. Toptan fiyat.",
    keywords: ["10x10mm flat neon", "flat neon led", "kare neon profil", "12v 24v neon led", "ip67 flat neon", "geniş neon şerit"],
    h1: "10x10mm Flat Neon LED — 12V/24V IP67",
    intro:
      "Kare kesitli, geniş yüzeyli flat neon. 12V ve 24V seçenekleri, IP67 koruma ve %100 silikon çift katmanlı difüzör ile 400±50 lümen verir. Işığı tek bir düz yüzden verdiği için düz hatların ve çerçevelerin keskin görünmesi gereken işlerde kullanılır.",
    specs: [
      ["Kesit", "10 × 10 mm — kare"],
      ["Besleme", "12V DC ve 24V DC seçenekleri"],
      ["Güç", "10 W / metre"],
      ["Çip", "SMD 2835"],
      ["Işık akısı", "400 ± 50 lm / metre"],
      ["Koruma sınıfı", "IP67 — iç ve dış mekan"],
      ["Gövde", "%100 silikon, çift katmanlı difüzör"],
      ["Profil", "Flat — geniş ışık yüzü"],
      ["Montaj", "Yapıştırma, klips veya alüminyum kanal"],
      ["Renk seçenekleri", "15 tek renk + RGB + Pixel"],
      ["Ömür", "30.000 saat"],
      ["Garanti", "3 yıl"],
      ["Seri", "Neo Plus"],
      ["Ürün kodu", "NLF05002410P01 – P15 / PRGB / PPXL"],
    ],
    useCases: [
      "Bina ve tabela konturu aydınlatması",
      "Çerçeve ve bordür hatları",
      "Düz ve geometrik neon yazılar",
      "Mobilya gömme ve alüminyum kanal içi hatlar",
      "Raf altı ve niş dekoratif aydınlatma",
    ],
    blocks: [
      { type: "h2", text: "Flat ile yuvarlak profil arasındaki fark" },
      {
        type: "p",
        text:
          "Yuvarlak profil ışığı geniş bir yay boyunca dağıtır; uzaktan yumuşak, yakından biraz belirsiz bir hat verir. Flat profilde ışık düz bir yüzeyden çıkar ve hattın kenarları keskin okunur. Mimari konturlarda, çerçevelerde ve geometrik yazılarda tercih edilme sebebi budur: çizgi çizgi durur, dağılmaz. Yuvarlak ve dolgun bir görüntü isteniyorsa [13mm D-Shape neon](/urunler/neon-led/13mm-d-shape-neon-led/) tarafına bakın.",
      },
      { type: "h2", text: "Kare kesitin yeri" },
      {
        type: "p",
        text:
          "Flat neon ailesinde 4x8, 6x6 ve 10x5 gibi daha ince kesitler de vardır. 10x10 mm bu ailenin kare ucudur: 10 mm ışık yüzü uzaktan görünecek kadar dolgun bir hat verir, 1:1 oranı da alüminyum kanal ve mobilya frezesine tam oturur. Montaj derinliği sorun oluyorsa aynı ışık yüzünü 5 mm yükseklikte veren [10x5 flat neon](/urunler/neon-led/10x5mm-flat-neon/) daha uygundur.",
      },
      { type: "h2", text: "12V mi 24V mi" },
      {
        type: "p",
        text:
          "Bu ürünün iki besleme seçeneği vardır ve seçim metrajla belirlenir. 12V kademesinde kesintisiz hat pratikte 5 metrede biter; 24V'ta aynı kesit kaybı 10 metreye kadar taşınır. Kısa harf ve vitrin işlerinde 12V yeterlidir ve elde bulunan trafolarla uyumludur; uzun cephe hatlarında 24V seçmek besleme noktası sayısını yarıya indirir. Gerekçesi [12V mi 24V mi](/blog/12v-mu-24v-mu-tabela-aydinlatma/) yazısında.",
      },
      {
        type: "p",
        text:
          "Sipariş verirken hangi kademeyi aldığınızı not edin. 24V ürünü 12V trafoya bağlamak sönük ve renk kaymış bir hat verir; ürün arızalı sanılıp değiştirilir, yeni parça da aynı sonucu doğurur.",
      },
      { type: "h2", text: "IP67 ve çift katmanlı difüzör" },
      {
        type: "p",
        text:
          "Gövde %100 silikondur ve çift katmanlı difüzör taşır: alt katman ışığı dağıtır, üst katman dışa karşı korur. IP67, geçici olarak suya batmaya karşı korumadır — IP65 yalnızca püskürtme suya dayanır. Cephede ve yağmurun biriktiği yatay yüzeylerde fark doğrudan arıza süresine yansır; sınıfların karşılığı [IP65 mi IP67 mi](/blog/ip65-mi-ip67-mi-tabela-led/) yazısında.",
      },
      {
        type: "p",
        text:
          "Koruma gövdeye aittir, kesilen uca değil. Her uç silikon kapak ve yapıştırıcı ile kapatılır, kablo giriş noktası ayrıca sızdırmaz hâle getirilir. Açık bırakılan tek bir uç, içeri ilerleyen nemle parçanın tamamını bitirir.",
      },
      { type: "h2", text: "Aparatlar ürüne özeldir" },
      {
        type: "p",
        text:
          "Flat neonun başlangıç bağlantısı, ara bağlantısı ve uç kapağı kendi ölçüsüne göredir; 6x12mm silikon neonun aparatları buraya uymaz. Sipariş verirken hat metrajı kadar aparat adedini de birlikte çıkarın — sahada eksik kalan tek bir uç kapağı, işin tamamını bekletir.",
      },
      {
        type: "p",
        text:
          "Düz uzun hatlarda 10 mm alüminyum kanal hem hizayı tutar hem ısıyı alır. Kavisli işlerde kanal kullanılmaz, klips ve yapıştırıcı ile ilerlenir.",
      },
      { type: "h2", text: "Renk seçimi ve trafo" },
      {
        type: "p",
        text:
          "15 tek renk, RGB ve Pixel seçenekleri vardır. Tabela ve mimari işlerde 6500K soğuk beyaz ile 3000K gün ışığı standarttır; dekoratif hatlarda mor, buz mavisi ve maldiv yeşili sık kullanılır. Tek renk modeller kontrol ünitesi gerektirmez ve RGB'ye göre daha parlaktır.",
      },
      {
        type: "p",
        text:
          "Hesap metre başına 10 W üzerinden yürür: 20 metrelik hat 200 W eder, %25 pay ile 250 W trafo uygundur. Kendi metrajınız için [trafo amper hesaplama aracını](/araclar/trafo-amper-hesaplama/) kullanın; trafo dışarıda kalacaksa [metal kasa dış mekan adaptör](/urunler/trafo-led-surucu/metal-kasa-dis-mekan-adaptor/) tercih edin.",
      },
    ],
    faq: [
      { q: "Flat neon hangi yöne bükülür?", a: "Işık yüzeyinin düzlemi boyunca bükülür. Işık yüzüne dik yönde zorlamak devre kartını çatlatır." },
      { q: "10x10mm flat neon kaç metre tek beslenir?", a: "12V kademesinde pratik sınır yaklaşık 5 metre, 24V kademesinde 10 metredir. Daha uzun hatlarda iki uçtan besleyin." },
      { q: "12V mi 24V mi almalıyım?", a: "Kısa harf ve vitrin işlerinde 12V yeterlidir. Uzun cephe hatlarında 24V seçmek besleme noktası sayısını yarıya indirir." },
      { q: "Flat neon dış mekanda kullanılır mı?", a: "IP67 olduğu için kullanılır. Uçların kapatılması ve dış mekan tipi bir trafo şarttır." },
      { q: "Kanal kullanmak zorunlu mu?", a: "Zorunlu değil ama düz uzun hatlarda hizanın yıllarca bozulmaması için önerilir. Kavisli işlerde kanal kullanılmaz." },
      { q: "Aparatları başka neonla ortak kullanabilir miyim?", a: "Hayır. Bağlantı aparatları ve uç kapakları kesit ölçüsüne özeldir; farklı ölçüye takılan aparat sızdırmazlığı sağlamaz." },
      { q: "10x10 mu 10x5 mi?", a: "İkisinin de ışık yüzü 10 mm'dir. 10x10 kare kesittir ve 10 mm montaj derinliği ister; 10x5 aynı görünümü 5 mm yükseklikte verir ve dar kanala girer." },
      { q: "Garanti süresi nedir?", a: "Üretici 30.000 saat ömür ve 3 yıl garanti belirtir. Kesilen uçların kurallara göre kapatılmamasından doğan su hasarı kapsam dışıdır." },
    ],
    related: ["10x5mm-flat-neon", "13mm-d-shape-neon-led", "8x16mm-neon-led-24v"],
    img: "/images/products/10x10-flat-neon.webp",
    updated: "2026-09-08",
  },
  {
    slug: "220v-neon-led",
    categorySlug: "neon-led",
    name: "220V Neon LED",
    metaTitle: "220V Neon LED Fiyatı | Trafosuz Bağlantı",
    metaDesc:
      "220V neon LED: IP65, trafo gerektirmeden prize bağlanır, çok uzun hatlarda voltaj düşümü yaşatmaz. Toptan fiyat, metrede kesim.",
    keywords: ["220v neon led", "trafosuz neon", "şehir şebekesi neon led", "uzun hat neon", "direkt bağlantı neon"],
    h1: "220V Neon LED",
    intro:
      "Şehir şebekesine doğrudan bağlanan IP65 neon. Trafo gerektirmediği için çok uzun hatlarda hem maliyeti hem kablo altyapısını belirgin biçimde düşürür — karşılığında kesim ve bağlantı kuralları daha katıdır.",
    specs: [
      ["Besleme", "220V AC — şebeke"],
      ["Trafo", "Gerekmez"],
      ["Koruma sınıfı", "IP65"],
      ["Kesim", "Yalnızca işaretli noktalardan, tipik 1 m"],
      ["Bağlantı", "Fişli besleme aparatı ile"],
      ["Hat uzunluğu", "Onlarca metre — voltaj düşümü ihmal edilebilir"],
    ],
    useCases: [
      "Bina cephesi boyunca uzanan çok uzun hatlar",
      "Çatı ve saçak konturu aydınlatması",
      "Trafo yerleştirilecek yeri olmayan uygulamalar",
      "Geçici kurulum ve sezonluk aydınlatma",
    ],
    blocks: [
      { type: "h2", text: "Ne zaman 220V, ne zaman 12V" },
      {
        type: "p",
        text:
          "Kısa ve orta hatlarda 12V neon daha esnektir: 1 cm'de kesilir, dimmer ve RGB kontrolüyle çalışır, dokunulması güvenlidir. 220V neonun tek ama büyük avantajı uzunluktur. Düşük voltajlı bir hat 5-10 metrede besleme noktası isterken, 220V hat onlarca metre boyunca aynı parlaklıkta gider ve arada hiç trafo kutusu gerekmez. Bina cephesi çevreleyen işlerde fark, işçilik olarak doğrudan hissedilir.",
      },
      { type: "h2", text: "Güvenlik — bu ürün şebeke gerilimindedir" },
      {
        type: "p",
        text:
          "12V ürünlerde alışılan rahatlık burada geçerli değildir. Kesim ve bağlantı yalnızca enerji kesikken yapılır, açık uç mutlaka orijinal silikon kapak ve yapıştırıcı ile kapatılır, besleme fişli aparatla verilir. Ulaşılabilir yükseklikteki kurulumlarda hattın kaçak akım rölesi üzerinden beslenmesi gerekir. Bu ürünün montajı elektrik işini bilen biri tarafından yapılmalıdır.",
      },
      { type: "h2", text: "Kesim aralığı ölçüyü belirler" },
      {
        type: "p",
        text:
          "220V neon tipik olarak 1 metrede bir kesilir. Yani hattınız 6.4 metre ise 7 metre kullanırsınız; ara ölçüler mümkün değildir. Harf ve yazı işleri bu yüzden 220V ile yapılmaz, bu ürün düz ve uzun hatlar içindir. Ölçüye tam oturması gereken işlerde [6x12mm 1 cm kesim neon](/urunler/neon-led/6x12mm-silikon-neon-led-1cm/) tercih edilir.",
      },
    ],
    faq: [
      { q: "220V neon prize doğrudan takılır mı?", a: "Fişli besleme aparatı üzerinden takılır. Aparatsız doğrudan bağlantı hem tehlikelidir hem sızdırmazlığı bozar." },
      { q: "Dimmer ile kısılabilir mi?", a: "Standart 12-24V PWM dimmerlerle çalışmaz. Kısma gerekiyorsa düşük voltajlı bir modele geçin." },
      { q: "RGB 220V neon var mı?", a: "Bu üründe renk değişimi yoktur; 220V hatlar tek renk çalışır. Renk kontrolü isteniyorsa 12V RGB neon ve kontrol ünitesi gerekir." },
      { q: "Kaç metreye kadar tek hat çekilebilir?", a: "Ürünün etiketindeki maksimum hat uzunluğuna uyun — tipik olarak onlarca metredir. Bu sınırı aşmak koruma devresini ve ürünü zorlar." },
      { q: "Kesilen uç açık kalırsa ne olur?", a: "Hem elektrik çarpması riski hem su girişi olur. Her uç orijinal kapakla ve yapıştırıcı ile kapatılmalıdır." },
    ],
    related: ["10x10mm-flat-neon", "8x16mm-neon-led-24v", "6x12mm-silikon-neon-led-1cm"],
    img: "/images/products/220v-neon-led.png",
    updated: "2026-09-02",
  },
  {
    slug: "360-neon-led",
    categorySlug: "neon-led",
    name: "360° Neon LED",
    metaTitle: "360 Derece Neon LED Fiyatı | Her Yöne Işık",
    metaDesc:
      "360° neon LED: 12V, IP65, gövdesinin her yönüne ışık verir. Asılı yazılar, çift taraftan görünen hatlar ve hacimli neon için toptan fiyat.",
    keywords: ["360 neon led", "360 derece neon", "çift taraflı neon led", "asılı neon yazı", "hacimli neon"],
    h1: "360° Neon LED",
    intro:
      "Işığı tek bir yüzden değil, gövdesinin çevresinin tamamından veren 12V IP65 neon. Boşlukta duran, iki taraftan da görülen yazılarda gerçek cam neon görüntüsüne en yakın sonucu verir.",
    specs: [
      ["Işık yayılımı", "360° — çepeçevre"],
      ["Besleme", "12V DC"],
      ["Koruma sınıfı", "IP65"],
      ["Gövde", "Silikon, bükülebilir"],
      ["Kullanım", "Serbest asılı ve çift taraflı işler"],
    ],
    useCases: [
      "Tavandan veya telden asılan neon yazılar",
      "İki taraftan da okunması gereken tabelalar",
      "Vitrin içi serbest duran neon logolar",
      "Cam neon görünümü istenen dekoratif işler",
    ],
    blocks: [
      { type: "h2", text: "Ne zaman gerçekten 360° gerekir" },
      {
        type: "p",
        text:
          "Bir yüzeye yapıştırılan neonun arkaya verdiği ışık zaten kaybolur; orada 360° hem gereksiz hem daha pahalıdır. Bu ürünün yeri, neonun boşlukta durduğu işlerdir: telle asılmış bir yazı, iki taraftan da görülen bir vitrin logosu, tavandan sarkan bir kontur. Bu koşullarda tek yüzlü neon arkadan bakıldığında sönük ve yapay görünür.",
      },
      { type: "h2", text: "Cam neona en yakın görüntü" },
      {
        type: "p",
        text:
          "Klasik cam neon tüpü ışığı çepeçevre yayar; LED neonun ondan ayrıldığı en görünür nokta budur. 360° modeller bu farkı kapatır — özellikle şeffaf arka pano üzerine kurulan dekoratif işlerde, tek yüzlü neonla arasındaki fark fotoğrafta bile seçilir.",
      },
      { type: "h2", text: "Montaj ve besleme farkları" },
      {
        type: "p",
        text:
          "Işık her yöne gittiği için aynı metrede daha fazla akım çeker; trafo hesabını bu ürünün kendi watt değeri üzerinden yapın, tek yüzlü modelin değeri üzerinden değil. Asılı kurulumlarda besleme kablosunun ağırlığı hattı çekmesin diye kablo, yazının kendisine değil taşıyıcı tele sabitlenir.",
      },
      {
        type: "p",
        text:
          "Bükme ve kesim kuralları diğer silikon neonlarla aynıdır; ayrıntısı [neon flex seçim ve montaj](/blog/neon-flex-secim-ve-montaj/) rehberinde.",
      },
    ],
    faq: [
      { q: "360° neon duvara yapıştırılabilir mi?", a: "Yapıştırılabilir ama arkaya giden ışık boşa gider. Duvar uygulamalarında tek yüzlü model hem daha uygun hem daha verimlidir." },
      { q: "Tek yüzlü neondan daha mı çok elektrik çeker?", a: "Aynı parlaklıkta daha fazla çeker, çünkü ışığı geniş bir alana yayar. Trafo seçimini ürünün kendi metre/watt değerine göre yapın." },
      { q: "Şeffaf pano üzerinde nasıl sabitlenir?", a: "Şeffaf klipsler veya delik açılıp geçirilen montaj noktaları kullanılır. Yapıştırıcı şeffaf yüzeyde görünür iz bırakır." },
      { q: "Dış mekanda kullanılır mı?", a: "IP65 olduğu için kullanılır; asılı dış mekan işlerinde rüzgâr yükünü taşıyacak bir taşıyıcı tel gerekir." },
      { q: "RGB seçeneği var mı?", a: "Tek renk modeller yaygındır. Renk değişimi isteniyorsa RGB neon modellerine ve bir [kontrol ünitesine](/urunler/led-kontrol-uniteleri/) geçmek gerekir." },
    ],
    related: ["6x12mm-silikon-neon-led-1cm", "10x10mm-flat-neon", "8x16mm-neon-led-24v"],
    img: "/images/products/360-neon-led.webp",
    updated: "2026-09-02",
  },
  {
    slug: "10x5mm-flat-neon",
    categorySlug: "neon-led",
    name: "10x5mm Flat Neon",
    metaTitle: "10x5 Flat Neon LED Fiyatı | OSRAM 264 LED/mt",
    metaDesc:
      "10x5mm flat neon LED: 24V, IP67, OSRAM SMD 2835, metrede 264 LED ve 820 lümen. Alçak profil, 14 tek renk + RGB. Toptan fiyat, aynı gün kargo.",
    keywords: ["10x5mm flat neon", "10x5 flat neon led", "24v flat neon led", "ip67 neon led", "osram neon led", "alçak profil neon led"],
    h1: "10x5 Flat Neon LED — 24V IP67",
    intro:
      "10 mm ışık yüzü, 5 mm montaj yüksekliği. Flat neon ailesinin en alçak profilli üyesi: 24V DC, IP67 ve metrede 264 OSRAM SMD 2835 çip ile 820 lümen verir. Dar kanala giren ama ince görünmeyen hat isteyen işlerin ölçüsüdür.",
    specs: [
      ["Kesit", "10 × 5 mm"],
      ["Besleme", "24V DC"],
      ["Güç", "11 W / metre"],
      ["LED yoğunluğu", "264 LED / metre"],
      ["Çip", "OSRAM SMD 2835"],
      ["Işık akısı", "820 lm / metre"],
      ["Koruma sınıfı", "IP67 — iç ve dış mekan"],
      ["Gövde", "%100 silikon, esnek"],
      ["Büküm yönü", "Üstten (top bend)"],
      ["Renk seçenekleri", "14 tek renk + RGB + Pixel"],
      ["Seri", "Neo Plus"],
      ["Ürün kodu", "NLF05002405P02 – P15 / PRGB / PPXL"],
    ],
    useCases: [
      "5 mm derinlik bırakılabilen dar kanal ve niş işleri",
      "Raf altı, tezgah altı ve vitrin çerçevesi hatları",
      "Kutu harf konturu ve ince çerçeve aydınlatması",
      "Mobilya frezesine gömülen dekoratif hatlar",
      "Cephe üzerinde ince ama okunur çizgi istenen işler",
    ],
    blocks: [
      { type: "h2", text: "Yatık kesitin işe yaradığı yer" },
      {
        type: "p",
        text:
          "10 mm genişlik, 5 mm yükseklik. Bu oran flat neon ailesinde özel bir yer tutar: ışık yüzü 10 mm kalırken profil yüksekliği yarıya iner. Pratikte şu demektir — hat dışarıdan bakınca dolgun görünür, ama montaj için gereken derinlik yarı yarıya azalır. 5 mm boşluk bırakabildiğiniz her yere girer.",
      },
      {
        type: "p",
        text:
          "Seçim genellikle üç ölçü arasında yapılır. [10x10mm flat neon](/urunler/neon-led/10x10mm-flat-neon/) kare kesittir, hat kalın ve uzaktan okunur ama 10 mm derinlik ister. 4x8 ve 6x6 gibi ince kesitler dar kanala girer ama yakından bakıldığında hat cılız kalır. 10x5, aradaki boşluğu doldurur: görünen kalınlık 10 mm, harcanan derinlik 5 mm.",
      },
      { type: "h2", text: "24V olması ne değiştirir" },
      {
        type: "p",
        text:
          "Bu ürün 24V DC'dir ve bu, metrajı doğrudan etkiler. 12V serilerde kesintisiz hat pratikte 5 metrede biter; 24V'ta aynı kesit kaybı 10 metreye kadar taşınır. Uzun cephede besleme noktası sayısı yarıya iner — daha az kablo, daha az kanal, daha az işçilik. Voltaj tercihinin gerekçesi [12V mi 24V mi](/blog/12v-mu-24v-mu-tabela-aydinlatma/) yazısında ayrıntılı.",
      },
      {
        type: "p",
        text:
          "Sahada en sık yapılan hata, 24V neonu elde kalan 12V trafoya bağlamaktır. Ürün yanar ama sönük ve renk kayar; arıza sanılıp değiştirilir, yeni parça da aynı sonucu verir. Trafo etiketini hattı çekmeden önce okuyun.",
      },
      { type: "h2", text: "264 LED ve 820 lümen ne anlatıyor" },
      {
        type: "p",
        text:
          "Metrede 264 adet SMD 2835 çip, noktaların ayırt edilmeyeceği kadar sık bir dizilimdir; silikon difüzörle birleşince hat kesintisiz okunur. 820 lümen/metre ise bu kesit için yüksek bir değerdir: gündüz ışığında bile çalışan tabelalarda ve gün ışığı alan vitrinlerde hattın kaybolmamasını sağlayan şey budur.",
      },
      {
        type: "p",
        text:
          "Çipin OSRAM olması ayrı bir başlık. Beyaz LED'lerde renk sıcaklığı üretim partisine göre küçük farklar gösterir; marka çipte bu tolerans dardır. İşi bölerek almanız gerekiyorsa ya da sonradan hat uzatacaksanız, aynı seriden ve mümkünse aynı partiden istemek renk tutmasını sağlar.",
      },
      { type: "h2", text: "IP67'nin IP65'ten farkı" },
      {
        type: "p",
        text:
          "Gövde %100 silikondur ve LED şeridi tam kapatır: IP67, geçici olarak suya batmaya karşı korumadır; IP65 yalnızca püskürtme suya dayanır. Cephede, saçak altında ve yağmurun biriktiği yatay yüzeylerde aradaki fark doğrudan arıza süresine yansır. Sınıfların tam karşılığı [IP65 mi IP67 mi](/blog/ip65-mi-ip67-mi-tabela-led/) yazısında.",
      },
      {
        type: "p",
        text:
          "Koruma gövdeye aittir, kesilen uca değil. Dış mekan neon arızalarının büyük kısmı açık bırakılmış uçtan başlar: içeri giren nem şerit boyunca ilerler ve parçanın tamamını bitirir. Her uç silikon kapak ve yapıştırıcı ile kapatılır, kablo giriş noktası ayrıca sızdırmaz hâle getirilir.",
      },
      { type: "h2", text: "Renk seçimi: 14 tek renk, RGB ve Pixel" },
      {
        type: "p",
        text:
          "Beyaz tonları (6500K soğuk beyaz, 4000K nötr, 3000K gün ışığı) tabela ve mimari işlerin standardıdır. Kırmızı, yeşil, mavi, buz mavisi, mor, pembe, turuncu ve altın sarısı gibi tek renkler dekoratif hatlarda kullanılır — tek renk modeller RGB'ye göre daha parlaktır ve kontrol ünitesi gerektirmez.",
      },
      {
        type: "p",
        text:
          "Renk değişimi isteniyorsa RGB, akan ve dalgalanan efektler isteniyorsa Pixel modele geçilir; ikisi de ayrı bir kontrol ünitesi ister. Seçimin ayrıntısı [RGB LED kontrol ünitesi seçimi](/blog/rgb-led-kontrol-unitesi-secimi/) yazısında, uygun modeller [LED kontrol üniteleri](/urunler/led-kontrol-uniteleri/) kategorisinde.",
      },
      { type: "h2", text: "Kaç metre, hangi trafo" },
      {
        type: "p",
        text:
          "Hesap metre başına 11 W üzerinden yürür. 20 metrelik bir hat 220 W çeker; trafo hiçbir zaman tam yükte çalıştırılmaz, %25 pay eklenip 24V 300 W'a çıkılır. Kendi metrajınız için [trafo amper hesaplama aracını](/araclar/trafo-amper-hesaplama/) kullanabilirsiniz.",
      },
      {
        type: "p",
        text:
          "Trafo dışarıda kalacaksa şeridin IP sınıfı tek başına yetmez — arıza çoğu zaman şeritten değil beslemeden gelir. Dış ortamda [metal kasa dış mekan adaptör](/urunler/trafo-led-surucu/metal-kasa-dis-mekan-adaptor/) veya epoksili bir model kullanın.",
      },
    ],
    faq: [
      { q: "10x5 flat neon kaç metre tek beslenir?", a: "24V olduğu için pratik sınır yaklaşık 10 metredir. Daha uzun hatlarda iki uçtan besleyin veya hattı ayrı trafo çıkışlarına bölün." },
      { q: "12V trafoya bağlanır mı?", a: "Hayır. Bu ürün 24V DC içindir. 12V ile sönük yanar ve renk kayar; ürün arızalı sanılır." },
      { q: "Nereden kesilir?", a: "Yalnızca gövde üzerindeki işaretli noktalardan. Kesilen uç mutlaka silikon kapak ve yapıştırıcı ile kapatılmalıdır." },
      { q: "10x5 mi 10x6 mı almalıyım?", a: "İkisi de 24V ve IP67'dir. 10x5 daha alçak profilli ve metrede 11 W ile daha parlaktır; 10x6 biraz daha yüksek gövdeli ve 9,6 W ile daha düşük çekişlidir." },
      { q: "Hangi yöne bükülür?", a: "Üstten büküm (top bend) yapısındadır: ışık yüzeyinin düzlemi boyunca bükülür. Işık yüzüne dik yönde zorlamak devre kartını çatlatır." },
      { q: "Dış mekanda kullanılır mı?", a: "IP67 olduğu için kullanılır. Uçların kapatılmış olması ve dış mekan tipi bir trafo kullanılması şarttır." },
      { q: "OSRAM çip farkı nedir?", a: "Üretim toleransı dardır. Beyaz tonlarda partiler arası renk sapması daha azdır; hattı sonradan uzatacaksanız renk tutma ihtimali yüksektir." },
      { q: "RGB ve Pixel modeli var mı?", a: "Var. RGB tüm hattı aynı anda tek renge boyar, Pixel ise adreslenebilir olduğu için akan efekt yapar. İkisi de uyumlu bir kontrol ünitesi gerektirir." },
    ],
    related: ["10x10mm-flat-neon", "13mm-d-shape-neon-led", "6x12mm-silikon-neon-led-1cm"],
    img: "/images/products/10x5-flat-neon.png",
    updated: "2026-09-08",
  },
  {
    slug: "13mm-d-shape-neon-led",
    categorySlug: "neon-led",
    name: "13mm D-Shape Neon LED",
    metaTitle: "13mm D-Shape Neon LED Fiyatı | 24V 204 LED/mt",
    metaDesc:
      "13mm D-Shape neon LED: 24V, IP67, 18W/m, metrede 204 LED ve 1750 lümen, 120° ışık açısı. Yarım daire kesit, 14 tek renk + RGB. Toptan fiyat.",
    keywords: ["13mm d-shape neon led", "d shape neon led", "d kesit neon led", "24v neon led ip67", "yüksek lümen neon led", "kalın neon led"],
    h1: "13mm D-Shape Neon LED — 24V IP67",
    intro:
      "Düz tabanlı, kubbe yüzeyli 13 mm neon. 24V DC, IP67 ve metrede 204 SMD 2835 çip ile 1750 lümen verir — flat serilerin iki katına yakın ışık. Uzaktan okunması gereken kalın hat isteyen işlerin ürünüdür.",
    specs: [
      ["Kesit", "13 mm D — düz taban, kubbe yüz"],
      ["Besleme", "24V DC"],
      ["Güç", "18 W / metre"],
      ["LED yoğunluğu", "204 LED / metre"],
      ["Çip", "SMD 2835"],
      ["Işık akısı", "1750 lm / metre"],
      ["Işık açısı", "120°"],
      ["Koruma sınıfı", "IP67 — iç ve dış mekan"],
      ["Gövde", "%100 silikon, esnek"],
      ["Montaj", "Düz arka yüz — yapıştırma, klips veya kanal"],
      ["Renk seçenekleri", "14 tek renk + RGB + Pixel"],
      ["Seri", "Neo Plus"],
      ["Ürün kodu", "NLFD05002413P01 – P15 / PRGB / PPXL"],
    ],
    useCases: [
      "Bina ve çatı konturu — uzaktan okunacak hatlar",
      "Mimari cephe ve saçak altı aydınlatması",
      "Büyük ölçekli neon yazı ve logo işleri",
      "Otel, AVM ve restoran dış cephe vurguları",
      "Peyzaj ve bahçe kontur hatları",
    ],
    blocks: [
      { type: "h2", text: "D kesit ne demek, ne kazandırır" },
      {
        type: "p",
        text:
          "D-Shape, kesiti yarım daireye benzeyen profildir: taban düz, ışık yüzü kubbe. Düz taban montajı kolaylaştırır — yüzeye tam oturur, yapıştırma ve klips hizası kendiliğinden tutar. Kubbe yüz ise ışığı 120°'lik geniş bir yaya dağıtır; hat hangi açıdan bakılırsa bakılsın dolgun görünür.",
      },
      {
        type: "p",
        text:
          "Flat profillerle arasındaki fark tam burada. Flat neon ışığı düz bir yüzden verir; kenarları keskin, çizgisi net okunur, mimari detay vurgulamak için idealdir. D-Shape ise klasik cam neon görünümüne daha yakındır: hat yuvarlak ve yumuşak durur. Yazı ve logo işlerinde bu görüntü çoğu zaman aranan şeydir.",
      },
      { type: "h2", text: "1750 lümen: bu ailenin en parlağı" },
      {
        type: "p",
        text:
          "Metrede 1750 lümen, flat serilerin belirgin biçimde üzerindedir — [10x5 flat neon](/urunler/neon-led/10x5mm-flat-neon/) 820 lm, 10x10 model 400±50 lm verir. Fark, izleme mesafesinde ortaya çıkar: yüksek bir bina konturu ya da yol kenarındaki bir tabela, gündüz de okunması isteniyorsa bu seviyede bir çıkış ister.",
      },
      {
        type: "p",
        text:
          "Bunun bedeli watt olarak ödenir. 18 W/m, kategorinin en yüksek çekişlerinden biridir ve trafo tarafını doğrudan büyütür. Yakından bakılan iç mekan hatlarında bu parlaklık gereksiz, hatta rahatsız edicidir; orada daha düşük watt'lı bir flat seri daha dengeli sonuç verir.",
      },
      { type: "h2", text: "Metraj ve besleme" },
      {
        type: "p",
        text:
          "10 metrelik bir D-Shape hattı 180 W çeker; %25 pay eklenince 24V 250 W trafo gerekir. Aynı metraj bir flat neonda 110 W civarındadır. Yani metraj planı yapılırken hem kesintisiz hat sınırı hem trafo bütçesi bu ürüne göre yeniden çıkarılmalıdır — [trafo amper hesaplama aracı](/araclar/trafo-amper-hesaplama/) bunu birkaç saniyede verir.",
      },
      {
        type: "p",
        text:
          "Yüksek watt, kesintisiz hat sınırını da kısaltır. 24V olmasına rağmen hattın sonunda gözle görülür bir sönme başlıyorsa sebep neredeyse her zaman voltaj düşümüdür; çözüm hattı ikiye bölüp iki uçtan beslemektir. Konunun mekaniği [LED şeritte voltaj düşümü](/blog/led-serit-voltaj-dusumu/) yazısında.",
      },
      { type: "h2", text: "IP67 ve uç kapatma" },
      {
        type: "p",
        text:
          "IP67 silikon gövde, geçici su altında kalmaya karşı korur; yağmur, kar ve nem sorun değildir. Ancak koruma gövdeye aittir — kesilen uç çıplaktır. Dış mekanda ömrü belirleyen tek şey, uçların ve kablo giriş noktasının kurallara göre kapatılmış olmasıdır.",
      },
      {
        type: "p",
        text:
          "Trafoyu da unutmayın: IP67 şeridi iç mekan tipi bir adaptörle beslemek, arızayı şeritten değil beslemeden getirir. Dış ortamda [metal kasa dış mekan adaptör](/urunler/trafo-led-surucu/metal-kasa-dis-mekan-adaptor/) veya [yağmur korumalı epoksili adaptör](/urunler/trafo-led-surucu/yagmur-korumali-epoksili-adaptor/) kullanın.",
      },
      { type: "h2", text: "Renk ve kontrol" },
      {
        type: "p",
        text:
          "14 tek renk, RGB ve Pixel seçenekleri vardır. Kontur ve cephe işlerinde en yaygın tercih 6500K soğuk beyaz ile 3000K gün ışığıdır; ahşap ve taş cephelerde gün ışığı, modern metal ve cam cephelerde soğuk beyaz daha oturur. Dekoratif işlerde mor, buz mavisi ve maldiv yeşili sık kullanılır.",
      },
      {
        type: "p",
        text:
          "RGB ve Pixel modellerde yükün kontrolör kapasitesini aşmadığından emin olun: 18 W/m yüksek bir değerdir ve kanal başına amper sınırı çabuk dolar. Kapasite yetmiyorsa araya repeater girer.",
      },
      { type: "h2", text: "Kanal, klips ve sipariş kalemleri" },
      {
        type: "p",
        text:
          "Düz taban montajı kolaylaştırsa da uzun hatlarda tek başına yapıştırıcıya güvenmeyin: silikon gövde sıcaklık farkıyla çalışır ve zamanla yüzeyden ayrılır. Düz hatlarda alüminyum kanal, kavisli işlerde klips kullanılır — kanal hem hizayı yıllarca tutar hem 18 W/m'lik ısıyı alır.",
      },
      {
        type: "p",
        text:
          "Metrajı çıkarırken kesim artıklarını ve köşe dönüşlerini hesaba katın. Bağlantı aparatları ve uç kapakları kesit ölçüsüne özeldir; hat metrajı kadar aparat adedini de aynı siparişte belirleyin. 24V trafo, uç kapağı, yapıştırıcı ve besleme kablosu eksik kaldığında hat çekilmiş olsa bile iş teslim edilemez.",
      },
    ],
    faq: [
      { q: "13mm D-Shape kaç metre tek beslenir?", a: "24V olmasına rağmen 18 W/m yüksek bir çekiştir; pratik sınır 8-10 metre civarındadır. Daha uzun hatlarda iki uçtan besleyin." },
      { q: "D-Shape ile flat neon arasındaki fark nedir?", a: "D-Shape kubbe yüzlüdür, ışığı 120°'ye yayar ve klasik cam neon görünümüne yakındır. Flat düz yüzeylidir, hattın kenarları daha keskin okunur." },
      { q: "Kaç watt trafo gerekir?", a: "Metre × 18 W hesaplanır, üzerine %25 pay eklenir. 10 metre için 24V 250 W uygundur." },
      { q: "Düz taban montajı kolaylaştırır mı?", a: "Evet. Yüzeye tam oturduğu için yapıştırma ve klips hizası kendiliğinden tutar; ayrı bir kanal şart değildir." },
      { q: "İç mekanda kullanılabilir mi?", a: "Kullanılabilir ama 1750 lümen yakın mesafede fazla parlaktır. İç mekan dekoratif hatlarda daha düşük watt'lı bir flat seri daha dengelidir." },
      { q: "Suya batarsa ne olur?", a: "IP67 geçici daldırmaya karşı korumadır. Sürekli su altında kalacak uygulamalar için uygun değildir." },
      { q: "Kesim aralığı ne kadar?", a: "Gövde üzerindeki işaretli noktalardan kesilir. Kesilen her uç silikon kapak ve yapıştırıcı ile kapatılmalıdır." },
      { q: "Aparatları başka neonla ortak kullanabilir miyim?", a: "Hayır. Uç kapağı ve bağlantı aparatları kesit ölçüsüne özeldir; farklı ölçüye takılan aparat sızdırmazlığı sağlamaz." },
    ],
    related: ["10x10mm-flat-neon", "10x5mm-flat-neon", "8x16mm-neon-led-24v"],
    img: "/images/products/13mm-d-shape-neon-led.jpg",
    updated: "2026-09-08",
  },
  // ——— LED Şerit ————————————————————————————————————————————————
  {
    slug: "ip20-8mm-eco-2835-120-led-mt",
    categorySlug: "led-serit",
    name: "IP20 8mm ECO 2835 120 LED/mt",
    metaTitle: "8mm ECO 2835 Şerit LED Fiyatı | 120 LED/mt",
    metaDesc:
      "IP20 8mm ECO 2835 şerit LED, 120 LED/mt: 12V iç mekan, yoğun dizilim ve dengeli maliyet. Toptan fiyat, metrede kesim, aynı gün kargo.",
    keywords: ["2835 şerit led", "120 led/mt şerit", "8mm şerit led", "ip20 iç mekan şerit led", "eco şerit led"],
    h1: "IP20 8mm ECO 2835 Şerit LED (120 LED/mt)",
    intro:
      "12V, IP20, 8 mm genişliğinde ve metrede 120 çipli iç mekan şeridi. 2835 çip ile yoğun dizilim, en çok satan iç mekan şerit yapılandırmasıdır: noktalar yeterince sıktır, maliyet hâlâ makuldür.",
    specs: [
      ["Çip", "2835 SMD"],
      ["Yoğunluk", "120 LED / metre"],
      ["Genişlik", "8 mm"],
      ["Besleme", "12V DC"],
      ["Koruma sınıfı", "IP20 — yalnızca iç mekan"],
      ["Kesim aralığı", "3 LED'de bir"],
      ["Sarım", "5 metre / rulo"],
    ],
    useCases: [
      "Raf altı ve vitrin içi aydınlatma",
      "Asma tavan ve kartonpiyer bandı",
      "Mobilya ve dolap içi aydınlatma",
      "Reklam panosu iç aydınlatması (kapalı ortam)",
    ],
    blocks: [
      { type: "h2", text: "60 mü, 120 mi, 240 mı" },
      {
        type: "p",
        text:
          "Metredeki LED sayısı hem parlaklığı hem noktaların görünürlüğünü belirler. 60 LED/mt en ekonomik olandır ama difüzörsüz kullanıldığında tek tek noktalar okunur. 120 LED/mt, noktaların büyük ölçüde birleştiği ilk kademedir ve iç mekan işlerinin çoğunda doğru cevaptır. 240 LED/mt yalnızca yüzeye çok yakın kullanımda ya da yüksek parlaklık gerektiğinde anlamlıdır; watt değeri iki katına çıkar.",
      },
      {
        type: "p",
        text:
          "Noktanın hiç görünmemesi isteniyorsa yoğunluğu artırmak yerine [COB şeride](/urunler/cob-led-serit/) geçmek daha doğrudur; karşılaştırma [COB mu SMD şerit mi](/blog/cob-vs-smd-led-serit/) yazısında.",
      },
      { type: "h2", text: "IP20 nerede kullanılmaz" },
      {
        type: "p",
        text:
          "IP20 çıplak devredir: toza ve neme karşı hiçbir koruması yoktur. Banyo, mutfak tezgâhı üstü, saçak altı ve dış mekan bu ürünün yeri değildir. Nem ihtimali olan her yerde en az IP54 nano kaplı ya da IP65 silikon kaplı modeller kullanılır.",
      },
      { type: "h2", text: "Metraj, trafo ve hat uzunluğu" },
      {
        type: "p",
        text:
          "Metre başına watt değerini metrajla çarpın ve %20 pay ekleyin — hesabı [LED şerit güç hesaplama aracı](/araclar/led-serit-guc-hesaplama/) doğrudan yapar. Ayrı bir konu hat uzunluğudur: 12V şeritte tek besleme ile 5 metre sınırdır, iki rulo uç uca eklenirse ikinci rulonun sonu sönük kalır. İki ruloyu paralel besleyin.",
      },
    ],
    faq: [
      { q: "Şerit LED istediğim yerden kesilir mi?", a: "Üzerindeki makas işaretlerinden kesilir; bu üründe 3 LED'de bir. Ara noktadan kesmek o segmenti söndürür." },
      { q: "İki rulo uç uca eklenebilir mi?", a: "Elektriksel olarak eklenir ama 12V'ta ikinci rulonun sonu belirgin biçimde söner. Doğrusu her ruloyu trafodan ayrı beslemektir." },
      { q: "Kaç watt trafo gerekir?", a: "Metre başına watt × metraj, üzerine %20 pay. 10 metre 9.6W/m şerit 96W çeker; 120W trafo uygun olur." },
      { q: "IP20 şerit alüminyum kanala gerekir mi?", a: "Zorunlu değil ama önerilir: kanal ısıyı alır, ömrü uzatır ve difüzörle noktaları gizler." },
      { q: "Şerit yanıyor ama bir bölümü sönük, neden?", a: "Çoğunlukla voltaj düşümüdür. Hattı kısaltın ya da iki uçtan besleyin; ayrıntısı [LED şerit voltaj düşümü](/blog/led-serit-voltaj-dusumu/) yazısında." },
    ],
    related: ["ip20-8mm-samsung-ic-mekan-serit-led", "ip65-8mm-dis-mekan-drop-silikon-serit-led", "ip20-8mm-cob-480-mt"],
    img: "/images/products/8mm-eco-2835-120-led-mt.png",
    updated: "2026-09-02",
  },
  {
    slug: "ip65-8mm-dis-mekan-drop-silikon-serit-led",
    categorySlug: "led-serit",
    name: "IP65 8mm Dış Mekan Drop Silikon Şerit LED",
    metaTitle: "IP65 Dış Mekan Şerit LED Fiyatı | 8mm Drop",
    metaDesc:
      "IP65 8mm drop silikon şerit LED: 12V, su geçirmez kaplama, saçak altı ve dış cephe için. Toptan fiyat, metrede kesim, aynı gün kargo.",
    keywords: ["ip65 şerit led", "dış mekan şerit led", "su geçirmez şerit led", "drop silikon şerit", "saçak altı led"],
    h1: "IP65 8mm Dış Mekan Drop Silikon Şerit LED",
    intro:
      "Üzeri damla biçiminde silikonla kaplanmış 12V IP65 şerit. Yağmura ve neme açık yerlerde çıplak şeridin dayanmadığı koşullarda kullanılır.",
    specs: [
      ["Koruma sınıfı", "IP65"],
      ["Kaplama", "Drop silikon — üstten dökme"],
      ["Genişlik", "8 mm"],
      ["Besleme", "12V DC"],
      ["Kullanım", "Dış mekan, saçak altı, nemli ortam"],
      ["Sarım", "5 metre / rulo"],
    ],
    useCases: [
      "Saçak altı ve balkon aydınlatması",
      "Dış cephe bant ve kontur aydınlatması",
      "Bahçe ve peyzaj (su altı olmayan) uygulamalar",
      "Nemli mutfak ve ıslak hacim kenarları",
    ],
    blocks: [
      { type: "h2", text: "IP65 ne kadar korur, ne kadar korumaz" },
      {
        type: "p",
        text:
          "IP65 toza tam kapalı, her yönden gelen su püskürtmesine dayanıklı demektir. Yağmur, sulama ve yıkama bu kapsamdadır. Kapsam dışında olan şey suyun içinde kalmaktır: su birikintisine oturan, havuz kenarında suya giren ya da toprağa gömülen hatlar için IP67 ya da IP68 gerekir. Sınıflar arasındaki farkın pratik karşılığı [IP65 mi IP67 mi](/blog/ip65-mi-ip67-mi-tabela-led/) yazısında.",
      },
      { type: "h2", text: "Kaplama biçimleri arasında drop silikon" },
      {
        type: "p",
        text:
          "Silikon kaplamanın birkaç biçimi vardır. Drop silikon üstten dökülür: şerit ince kalır, esnekliği korunur ve maliyeti makuldür. Tüp içine alınmış modeller daha yüksek koruma verir ama kalınlaşır ve ısıyı içeride tutar. Saçak altı gibi doğrudan yağmur almayan ama neme açık yerlerde drop silikon dengeli seçimdir.",
      },
      { type: "h2", text: "Asıl zayıf nokta: uçlar" },
      {
        type: "p",
        text:
          "Şeridin kendisi IP65 olsa da kesilen uç çıplak devredir. Dış mekan arızalarının büyük çoğunluğu buradan başlar. Her kesim ucuna silikon uç kapağı takın ve yapıştırıcıyla sızdırmaz hâle getirin; besleme kablosunun girdiği noktayı da aynı şekilde kapatın.",
      },
      {
        type: "p",
        text:
          "Trafo da dışarıda kalacaksa iç mekan tipi adaptör kullanmayın; [metal kasa dış mekan adaptör](/urunler/trafo-led-surucu/metal-kasa-dis-mekan-adaptor/) ya da yağmur korumalı bir model gerekir.",
      },
    ],
    faq: [
      { q: "IP65 şerit suyun içinde kalabilir mi?", a: "Hayır. Su altı ve sürekli su biriken yerler için IP68 modeller kullanılır." },
      { q: "Kesip eklersem IP65 bozulur mu?", a: "Evet, kesim ucu açık kalır. Uç kapağı ve yapıştırıcı ile kapatılmadan dış mekana asılmamalıdır." },
      { q: "Silikon kaplı şerit ısınır mı?", a: "Kaplama ısı atmayı biraz zorlaştırır. Uzun ve yüksek watt hatlarda alüminyum kanal kullanmak ömrü belirgin biçimde uzatır." },
      { q: "Dış mekanda 12V mi 24V mı?", a: "Kısa hatlarda 12V yeterlidir. 5 metreyi aşan cephe hatlarında 24V hem daha az besleme noktası hem daha az kayıp demektir." },
      { q: "Güneş silikonu sarartır mı?", a: "Doğrudan ve sürekli güneş alan yüzeylerde zamanla sararma olabilir. Saçak altı gibi gölgeli konumlar ömrü uzatır." },
    ],
    related: ["ip20-8mm-eco-2835-120-led-mt", "ip65-10mm-cob-480-mt", "metal-kasa-dis-mekan-adaptor"],
    img: "/images/products/8mm-dis-mekan-drop-silikon-serit-led.png",
    updated: "2026-09-02",
  },
  {
    slug: "ip20-rgb-serit-led",
    categorySlug: "led-serit",
    name: "IP20 RGB Şerit LED",
    metaTitle: "RGB Şerit LED Fiyatı | IP20 Renk Değiştiren",
    metaDesc:
      "IP20 RGB şerit LED: 12V, tam renk, kontrol ünitesiyle renk geçişi ve sese tepkili modlar. İç mekan dekoratif aydınlatma için toptan fiyat.",
    keywords: ["rgb şerit led", "renk değiştiren şerit led", "ip20 rgb şerit", "rgb led bant", "dekoratif rgb aydınlatma"],
    h1: "IP20 RGB Şerit LED",
    intro:
      "Kırmızı, yeşil ve mavi çipi aynı gövdede taşıyan 12V iç mekan şeridi. Bir kontrol ünitesiyle 16 milyon renk, renk geçişi, sese tepkili ve zamanlayıcılı modlar verir.",
    specs: [
      ["Renk", "RGB — tam renk"],
      ["Besleme", "12V DC"],
      ["Koruma sınıfı", "IP20 — iç mekan"],
      ["Kablo", "4 damar (V+, R, G, B)"],
      ["Kontrol", "RGB kontrol ünitesi gerekir"],
      ["Sarım", "5 metre / rulo"],
    ],
    useCases: [
      "Kafe, bar ve eğlence mekanı iç aydınlatması",
      "Vitrin ve teşhir dolabı efekt aydınlatması",
      "Asma tavan ve niş dekoratif bantlar",
      "Etkinlik ve sahne dekorasyonu",
    ],
    blocks: [
      { type: "h2", text: "Sistem üç parçadan oluşur" },
      {
        type: "p",
        text:
          "RGB şerit tek başına çalışmaz. Trafo, kontrol ünitesi ve şerit üçlüsü birlikte kurulur ve üçünün de amper değeri birbirine uymalıdır. En sık yapılan hata, trafoyu doğru seçip kontrolörü unutmaktır: kontrolörün kanal kapasitesi trafodan önce dolarsa cihaz ısınır ve renkler kararsızlaşır. Seçimin ayrıntısı [RGB LED kontrol ünitesi seçimi](/blog/rgb-led-kontrol-unitesi-secimi/) yazısında.",
      },
      { type: "h2", text: "Kontrol yöntemi işi belirler" },
      {
        type: "p",
        text:
          "Kumandalı üniteler (24 veya 44 tuşlu) en yaygın ve en ucuz çözümdür; kumanda kaybolduğunda sorun çıkarır. [Bluetooth üniteler](/urunler/led-kontrol-uniteleri/bluetooth-rgb-kontrol-unitesi/) telefondan kontrol verir ve ulaşılması zor yerlerde rahattır. Duvara sabitlenen dokunmatik paneller ise işletmelerde personelin kullanması için en pratik olanıdır.",
      },
      { type: "h2", text: "RGB'nin sınırı: beyaz ve efekt" },
      {
        type: "p",
        text:
          "Üç rengin karışımıyla elde edilen beyaz, adanmış beyaz çipin beyazı kadar temiz değildir — genel aydınlatma da beklenen bir hatta RGB+W modeller daha doğrudur. Dalga ve akış gibi hareketli efektler ise sıradan RGB'de mümkün değildir; hattın tamamı her an aynı rengi alır. Efekt isteniyorsa [pixel şeride](/urunler/led-serit/ip20-pixel-serit-led/) geçilir.",
      },
    ],
    faq: [
      { q: "RGB şerit doğrudan trafoya bağlanır mı?", a: "Hayır, araya RGB kontrol ünitesi girer. Doğrudan bağlanırsa üç renk birlikte yanar ve kontrol edilemez." },
      { q: "Bir kontrolöre kaç metre şerit bağlanır?", a: "Kontrolörün amper değerine bakın. 6A'lık tipik bir ünite 12V'ta yaklaşık 70W, yani 7-8 metre standart RGB şerit taşır." },
      { q: "İki ayrı odayı tek kumandayla yönetebilir miyim?", a: "Aynı kontrolöre bağlı hatlar her zaman aynı rengi gösterir. Odaların bağımsız olması isteniyorsa her odaya ayrı ünite gerekir." },
      { q: "RGB şerit dış mekanda kullanılır mı?", a: "Bu ürün IP20'dir, kullanılamaz. Dış mekan için IP65 RGB modeller vardır." },
      { q: "Renkler hattın sonunda soluyor, neden?", a: "Voltaj düşümüdür ve RGB'de renk dengesini de bozar. Hattı kısaltın veya iki uçtan besleyin." },
    ],
    related: ["ip20-pixel-serit-led", "44-tuslu-rgb-kontrol-cihazi", "ip20-rgb-cob-serit-led-576-led-mt"],
    img: "/images/products/rgb-serit-led.png",
    updated: "2026-09-02",
  },
  {
    slug: "ip20-8mm-samsung-ic-mekan-serit-led",
    categorySlug: "led-serit",
    name: "IP20 8mm Samsung İç Mekan Şerit LED",
    metaTitle: "Samsung Şerit LED Fiyatı | 8mm IP20 Yüksek CRI",
    metaDesc:
      "IP20 8mm Samsung şerit LED: 12V, yüksek CRI ve kararlı beyaz. Vitrin, teşhir ve renk doğruluğu gereken iç mekan aydınlatması için.",
    keywords: ["samsung şerit led", "yüksek cri şerit led", "vitrin aydınlatma led", "8mm samsung şerit", "renk doğruluğu led"],
    h1: "IP20 8mm Samsung İç Mekan Şerit LED",
    intro:
      "Samsung çipli, 12V, IP20 iç mekan şeridi. Ayırt edici özelliği yüksek renksel geriverim: aydınlattığı ürünün rengi olduğu gibi görünür, soluk ya da kirli çıkmaz.",
    specs: [
      ["Çip", "Samsung"],
      ["Renksel geriverim", "Yüksek CRI"],
      ["Genişlik", "8 mm"],
      ["Besleme", "12V DC"],
      ["Koruma sınıfı", "IP20 — iç mekan"],
      ["Sarım", "5 metre / rulo"],
    ],
    useCases: [
      "Kuyum, tekstil ve gıda vitrinleri",
      "Mağaza teşhir rafları",
      "Galeri ve sergi aydınlatması",
      "Renk kararlılığı beklenen kurumsal iç mekanlar",
    ],
    blocks: [
      { type: "h2", text: "CRI nerede parayı geri kazandırır" },
      {
        type: "p",
        text:
          "Renksel geriverim, bir ışığın nesnelerin rengini gün ışığına ne kadar yakın gösterdiğinin ölçüsüdür. Düşük CRI'li ucuz şerit altında kırmızı bir kumaş kahverengiye, altın sarısı gri bir tona kayar. Ürünün rengiyle satıldığı her yerde — kuyum, tekstil, kasap, pastane — bu doğrudan satışı etkiler. Depo ve koridor aydınlatmasında ise fark edilmez; oradaki para ekonomik seride durur.",
      },
      { type: "h2", text: "Marka çipin ikinci faydası: tutarlılık" },
      {
        type: "p",
        text:
          "Aynı vitrinde yan yana duran iki rulonun tonu tutmuyorsa göz bunu anında yakalar. İsimsiz çiplerde parti farkı belirgin ton kayması yaratır; marka çipte tolerans dardır. Etaplı işlerde ve sonradan hat eklenecek kurulumlarda seçim sebebi çoğu zaman parlaklık değil, budur.",
      },
      { type: "h2", text: "Difüzör ve kanal" },
      {
        type: "p",
        text:
          "Vitrin aydınlatmasında şeridin kendisi görünmemeli, yalnızca ışığı görünmelidir. Alüminyum kanal ve opal difüzör hem noktaları gizler hem ısıyı alarak yüksek CRI'nin zamanla bozulmasını yavaşlatır. Noktanın hiç olmaması isteniyorsa [COB şerit](/urunler/cob-led-serit/ip20-8mm-cob-480-mt/) bir adım öteye gider.",
      },
    ],
    faq: [
      { q: "Yüksek CRI daha çok elektrik çeker mi?", a: "Hayır, watt değeri aynıdır. CRI çipin spektrumuyla ilgilidir; trafo hesabınız değişmez." },
      { q: "Samsung şerit ile ECO şerit arasında parlaklık farkı var mı?", a: "Aynı yoğunlukta belirgin bir fark yoktur. Fark renk doğruluğunda, ton tutarlılığında ve yaşlanma hızındadır." },
      { q: "Hangi renk sıcaklığını seçmeliyim?", a: "Gıda ve tekstilde 3000-4000K, kuyum ve teknik teşhirde 4000-6500K yaygındır. Ürünün gerçek renginin görünmesi asıl ölçüttür." },
      { q: "Vitrin içinde ısınma sorun olur mu?", a: "Kapalı vitrinde olur. Alüminyum kanal kullanın ve şeridi plastik yüzeye doğrudan yapıştırmaktan kaçının." },
      { q: "IP20 vitrin içinde yeterli mi?", a: "Kapalı ve kuru vitrinde yeterlidir. Gıda vitrini gibi nemli ortamlarda IP65 modele geçin." },
    ],
    related: ["ip20-8mm-eco-2835-120-led-mt", "1-08w-samsung-modul-led", "ip20-8mm-cob-480-mt"],
    img: "/images/products/8mm-samsung-ic-mekan-serit-led.jpg",
    updated: "2026-09-02",
  },
  {
    slug: "ip20-pixel-serit-led",
    categorySlug: "led-serit",
    name: "IP20 Pixel Şerit LED",
    metaTitle: "Pixel Şerit LED Fiyatı | IP20 Adreslenebilir",
    metaDesc:
      "IP20 pixel şerit LED: 12V, adreslenebilir, her LED ayrı renk alır. Akan, dalgalanan ve animasyonlu efektler için toptan fiyat.",
    keywords: ["pixel şerit led", "adreslenebilir led şerit", "akan led şerit", "ws2812 şerit", "animasyonlu led"],
    h1: "IP20 Pixel Şerit LED",
    intro:
      "Her LED'in kendi adresi ve kendi rengi olan 12V iç mekan şeridi. Sıradan RGB'nin yapamadığını yapar: hattın üzerinde akan, dalgalanan ve sıralı efektler.",
    specs: [
      ["Tip", "Adreslenebilir pixel"],
      ["Besleme", "12V DC"],
      ["Koruma sınıfı", "IP20 — iç mekan"],
      ["Kablo", "3 damar (V+, DATA, GND)"],
      ["Kontrol", "Pixel kontrol cihazı gerekir"],
      ["Yön", "Veri akışı tek yönlü — ok yönü önemli"],
    ],
    useCases: [
      "Akan ve dalgalanan efektli dekoratif hatlar",
      "Kafe, bar ve oyun alanı aydınlatması",
      "Sahne ve etkinlik dekorasyonu",
      "Dikkat çekmesi istenen vitrin ve teşhir alanları",
    ],
    blocks: [
      { type: "h2", text: "Pixel ile RGB arasındaki asıl fark" },
      {
        type: "p",
        text:
          "Sıradan RGB şeritte üç renk hattı vardır ve hattın tamamı aynı anda aynı rengi alır — mavi dediğinizde beş metrenin beşi de mavidir. Pixel şeritte ise tek bir veri hattı vardır ve her LED'in kendi adresi bulunur; kontrol cihazı sıradaki her LED'e ayrı komut gönderir. Akan ışık, gökkuşağı geçişi ve sayaç benzeri efektler ancak böyle mümkün olur.",
      },
      { type: "h2", text: "Yön ve veri hattı — kurulumun kritik noktası" },
      {
        type: "p",
        text:
          "Şeridin üzerinde veri akış yönünü gösteren oklar vardır. Ters bağlanan bir segment hiç yanmaz; hatanın en sık kaynağı budur. Ekleme yaparken de veri hattının kesintiye uğramaması gerekir: uzun hatlarda araya giren gevşek bir lehim, o noktadan sonrasını tamamen söndürür. Pixel işlerinde lehimli ek, klipsli ekten daha güvenilirdir.",
      },
      { type: "h2", text: "Kontrol cihazı ve senkron" },
      {
        type: "p",
        text:
          "Pixel şerit yalnızca pixel kontrol cihazıyla çalışır; RGB kontrolörü işe yaramaz. Cihaz seçilirken şeridin çip protokolü ve toplam pixel sayısı eşleşmelidir. Bluetooth üzerinden telefonla yönetilen [SP110E benzeri üniteler](/urunler/led-kontrol-uniteleri/pixel-rgb-kontrol-cihazi-sp110e/) küçük ve orta işlerde en pratik çözümdür.",
      },
      {
        type: "p",
        text:
          "Birden fazla hattın senkron çalışması isteniyorsa hatlar aynı cihazın çıkışından seri devam etmeli ya da senkron destekleyen bir üniteye bağlanmalıdır; iki ayrı cihaz zamanla kayar.",
      },
    ],
    faq: [
      { q: "Pixel şerit RGB kontrolörüyle çalışır mı?", a: "Çalışmaz. Pixel şeritte veri hattı vardır ve yalnızca pixel kontrol cihazı bu protokolü sürer." },
      { q: "Şeridin bir yerden sonrası hiç yanmıyor?", a: "Neredeyse her zaman veri hattındaki bir kopukluk ya da ters bağlanmış bir segmenttir. Ok yönünü ve ek noktalarını kontrol edin." },
      { q: "Kaç pixel tek cihazla sürülebilir?", a: "Cihazın destekleyeceği pixel sayısı etiketinde yazar; tipik Bluetooth üniteler birkaç yüz ile bin pixel arasındadır." },
      { q: "Kesim yapılabilir mi?", a: "İşaretli noktalardan kesilir, ancak kesim veri sırasını değiştirir; kesilen parçanın kendi başlangıcı yeniden tanımlanır." },
      { q: "Dış mekanda kullanılabilir mi?", a: "Bu ürün IP20'dir, iç mekan içindir. Dış mekan için IP65 pixel modeller kullanılmalıdır." },
    ],
    related: ["ip20-rgb-serit-led", "pixel-rgb-kontrol-cihazi-sp110e", "ip20-rgb-cob-serit-led-576-led-mt"],
    img: "/images/products/pixel-serit-led.webp",
    updated: "2026-09-02",
  },
  // ——— COB LED Şerit ————————————————————————————————————————————
  {
    slug: "ip20-8mm-cob-480-mt",
    categorySlug: "cob-led-serit",
    name: "IP20 8mm COB 480/mt",
    metaTitle: "COB Şerit LED Fiyatı | 8mm 480 LED/mt IP20",
    metaDesc:
      "IP20 8mm COB şerit LED, 480 LED/mt: 24V, tek tek nokta görünmeyen kesintisiz ışık hattı. İç mekan dekoratif aydınlatma için toptan fiyat.",
    keywords: ["cob şerit led", "480 led/mt cob", "noktasız şerit led", "kesintisiz led hattı", "24v cob şerit"],
    h1: "IP20 8mm COB Şerit LED (480 LED/mt)",
    intro:
      "24V, IP20, 8 mm genişliğinde COB şerit. Ayrı ayrı LED noktaları yerine kesintisiz bir ışık çizgisi verir — difüzör kullanılamayan ya da yeterli olmayan yerlerde tercih edilen çözümdür.",
    specs: [
      ["Çip tipi", "COB (Chip on Board)"],
      ["Yoğunluk", "480 LED / metre"],
      ["Genişlik", "8 mm"],
      ["Besleme", "24V DC"],
      ["Koruma sınıfı", "IP20 — iç mekan"],
      ["Işık karakteri", "Noktasız, sürekli hat"],
    ],
    useCases: [
      "Kartonpiyer ve gizli aydınlatma bantları",
      "Difüzörsüz açıkta kalan hatlar",
      "Mobilya ve raf altı çizgi aydınlatma",
      "Yakından bakılan dekoratif detaylar",
    ],
    blocks: [
      { type: "h2", text: "COB tam olarak neyi çözer" },
      {
        type: "p",
        text:
          "SMD şeritte çipler ayrı ayrı durur; aralarındaki boşluk difüzörsüz bakıldığında nokta nokta okunur. COB'da çipler tek bir taşıyıcı üzerine bitişik dizilir ve üstü ortak fosforla kapatılır, sonuç kesintisiz bir ışık çizgisidir. Fark, kartonpiyer içi gibi şeridin yansımasının duvarda göründüğü yerlerde en belirgindir: SMD'de duvara noktalı bir iz düşer, COB'da düz bir bant.",
      },
      {
        type: "p",
        text:
          "İki teknolojinin maliyet ve verim karşılaştırması [COB mu SMD şerit mi](/blog/cob-vs-smd-led-serit/) yazısında ayrıntılı olarak yapılıyor.",
      },
      { type: "h2", text: "Neden 24V" },
      {
        type: "p",
        text:
          "COB şeritler yoğun dizilim nedeniyle metre başına daha fazla güç çeker. Aynı gücü 12V ile taşımak yüksek akım ve buna bağlı belirgin voltaj düşümü demektir; 24V bu sorunu baştan azaltır ve tek beslemeyle daha uzun hat mümkün olur. Trafonun 24V olması zorunludur — 12V trafo bu şeridi sürmez.",
      },
      { type: "h2", text: "Isı ve kanal" },
      {
        type: "p",
        text:
          "Bitişik çip dizilimi ısıyı dar bir alanda toplar. COB şeritte alüminyum kanal, SMD'de olduğu gibi estetik bir tercih değil ömür meselesidir. Kanalsız ve havasız kapatılan hatlarda parlaklık ilk yılda gözle görülür biçimde düşer.",
      },
    ],
    faq: [
      { q: "COB şerit 12V trafoyla çalışır mı?", a: "Bu ürün 24V'tur, 12V trafoyla çalışmaz. Şeridin etiketindeki voltajı trafonun çıkışıyla eşleştirin." },
      { q: "COB şeritte hiç nokta görünmez mi?", a: "Şeridin kendisi nokta göstermez. Yalnızca çok yakından bakıldığında hafif bir doku fark edilebilir." },
      { q: "Kaç metre tek besleme yapılabilir?", a: "24V olduğu için 12V'a göre belirgin biçimde daha uzun; pratik sınır tipik olarak 8-10 metredir. Metrajdan trafoyu [güç hesaplama aracıyla](/araclar/led-serit-guc-hesaplama/) çıkarabilirsiniz." },
      { q: "COB şerit kesilebilir mi?", a: "İşaretli noktalardan kesilir. Kesim aralığı SMD'ye göre daha kısadır, bu da ölçüye oturtmayı kolaylaştırır." },
      { q: "Alüminyum kanal şart mı?", a: "Kısa dekoratif hatlarda şart değil, uzun ve sürekli yanan hatlarda evet. Isı atmayan COB hattın ömrü belirgin biçimde kısalır." },
    ],
    related: ["ip65-10mm-cob-480-mt", "ip20-rgb-cob-serit-led-576-led-mt", "ip20-8mm-eco-2835-120-led-mt"],
    img: "/images/products/ip20-8mm-cob-480-mt.png",
    updated: "2026-09-02",
  },
  {
    slug: "ip65-10mm-cob-480-mt",
    categorySlug: "cob-led-serit",
    name: "IP65 10mm COB 480/mt",
    metaTitle: "IP65 COB Şerit LED Fiyatı | 10mm Dış Mekan",
    metaDesc:
      "IP65 10mm COB şerit LED, 480 LED/mt: 24V, su geçirmez kaplama ile dış mekanda kesintisiz ışık çizgisi. Toptan fiyat, metrede kesim.",
    keywords: ["ip65 cob şerit", "dış mekan cob led", "su geçirmez cob şerit", "10mm cob 480", "cephe çizgi aydınlatma"],
    h1: "IP65 10mm COB Şerit LED (480 LED/mt)",
    intro:
      "Silikon kaplı, 24V, 10 mm genişliğinde COB şerit. İç mekan COB'un noktasız ışığını dış mekana taşır: cephe konturlarında ve saçak altlarında kesintisiz bir çizgi verir.",
    specs: [
      ["Çip tipi", "COB"],
      ["Yoğunluk", "480 LED / metre"],
      ["Genişlik", "10 mm"],
      ["Besleme", "24V DC"],
      ["Koruma sınıfı", "IP65 — dış mekan"],
      ["Işık karakteri", "Noktasız, sürekli hat"],
      ["Renk sıcaklığı", "6000K beyaz / 4000K nötr / 3000K gün ışığı"],
      ["Güç", "12 W / metre"],
      ["Seri", "Fortune Plus"],
    ],
    useCases: [
      "Cephe kontur ve çizgi aydınlatması",
      "Saçak altı ve balkon bantları",
      "Dış mekan mimari detay vurguları",
      "Neon görünümü istenen ama daha ince hat gereken işler",
    ],
    blocks: [
      { type: "h2", text: "Dış mekanda COB'un yeri" },
      {
        type: "p",
        text:
          "Dış mekan kontur işlerinde iki seçenek yarışır: neon flex ve IP65 COB şerit. Neon daha kalın, daha dolgun bir hat verir ve uzaktan okunur. COB şerit daha ince, daha keskin bir çizgi bırakır ve dar kanallara girer. Mimari detayın kendisini vurgulamak isteyen, hattın kalın görünmesini istemeyen işlerde COB tercih edilir.",
      },
      { type: "h2", text: "Kaplama ve uçlar" },
      {
        type: "p",
        text:
          "IP65 koruma şeridin gövdesine aittir; kesilen uç çıplaktır. Dış mekan arızalarının çoğu buradan başlar. Her uç silikon kapak ve yapıştırıcı ile kapatılmalı, kablo giriş noktası ayrıca sızdırmaz hâle getirilmelidir. Su altında kalacak hatlar için IP65 yeterli değildir; sınıf farkları [IP65 mi IP67 mi](/blog/ip65-mi-ip67-mi-tabela-led/) yazısında.",
      },
      { type: "h2", text: "Hangi renk sıcaklığı" },
      {
        type: "p",
        text:
          "Bu şerit üç kademede gelir: 6000K beyaz, 4000K nötr beyaz ve 3000K gün ışığı. Seçim cephenin malzemesine ve işin amacına bağlıdır. Cam, metal ve beton cephelerde, tabela ve güvenlik hatlarında [6000K soğuk beyaz](/urunler/cob-led-serit/dis-mekan-cob-beyaz-6000k/) daha parlak algılandığı için öne çıkar. Ahşap, tuğla ve taş cephelerde, teras ve bahçe gibi oturulan alanlarda ise [3000K gün ışığı](/urunler/cob-led-serit/dis-mekan-cob-gunisigi-3000k/) yüzeyin kendi rengini canlandırır. 4000K ikisi arasında güvenli bir orta yoldur.",
      },
      {
        type: "p",
        text:
          "Tek kural: aynı yüzeyde iki farklı renk sıcaklığı yan yana gelmesin. Gündüz fark edilmeyen küçük ton farkı gece leke gibi okunur ve düzeltmesi çoğu zaman hattın tamamını sökmeyi gerektirir.",
      },
      { type: "h2", text: "Trafo dışarıda mı kalacak" },
      {
        type: "p",
        text:
          "Şeridi IP65 seçip trafoyu iç mekan tipi bırakmak sık yapılan bir hatadır ve arıza şeritten değil trafodan gelir. Dış mekanda kalacak besleme için [metal kasa dış mekan adaptör](/urunler/trafo-led-surucu/metal-kasa-dis-mekan-adaptor/) veya IP67 sınıfı bir model kullanın.",
      },
    ],
    faq: [
      { q: "IP65 COB şerit yağmurda kalabilir mi?", a: "Gövdesi yağmura dayanır. Uçların kapatılmış olması ve suyun birikmediği bir montaj şarttır." },
      { q: "Silikon kaplama ısıyı hapsetmez mi?", a: "Bir miktar hapseder. Uzun hatlarda alüminyum kanal kullanmak ısıyı alır ve parlaklık kaybını yavaşlatır." },
      { q: "Neon yerine COB şerit kullanılabilir mi?", a: "Kullanılabilir; hat daha ince ve daha keskin görünür. Kalın ve dolgun bir neon görüntüsü isteniyorsa [neon LED](/urunler/neon-led/) daha doğrudur." },
      { q: "24V zorunlu mu?", a: "Bu ürün için evet. 24V ayrıca uzun cephe hatlarında daha az besleme noktası demektir." },
      { q: "Kesim yaparsam garanti düşer mi?", a: "İşaretli noktalardan kesim normal kullanımdır. Uçların kurallara göre kapatılmaması durumunda oluşan su hasarı kapsam dışıdır." },
    ],
    related: ["dis-mekan-cob-beyaz-6000k", "dis-mekan-cob-gunisigi-3000k", "ip20-8mm-cob-480-mt"],
    img: "/images/products/ip65-10mm-cob-480-mt.png",
    updated: "2026-09-02",
  },
  {
    slug: "ip20-rgb-cob-serit-led-576-led-mt",
    categorySlug: "cob-led-serit",
    name: "IP20 RGB COB Şerit LED 576 LED/mt",
    metaTitle: "RGB COB Şerit LED Fiyatı | 576 LED/mt Noktasız",
    metaDesc:
      "IP20 RGB COB şerit LED, 576 LED/mt: 24V, tam renk ve noktasız hat bir arada. Dekoratif iç mekan aydınlatması için toptan fiyat.",
    keywords: ["rgb cob şerit", "renk değiştiren cob led", "576 led/mt rgb", "noktasız rgb şerit", "24v rgb cob"],
    h1: "IP20 RGB COB Şerit LED (576 LED/mt)",
    intro:
      "COB'un kesintisiz ışığı ile RGB'nin renk kontrolünü birleştiren 24V iç mekan şeridi. Renk değişimi isteyip nokta görüntüsü istemeyen dekoratif işlerin çözümüdür.",
    specs: [
      ["Çip tipi", "RGB COB"],
      ["Yoğunluk", "576 LED / metre"],
      ["Besleme", "24V DC"],
      ["Koruma sınıfı", "IP20 — iç mekan"],
      ["Kablo", "4 damar (V+, R, G, B)"],
      ["Kontrol", "RGB kontrol ünitesi gerekir"],
    ],
    useCases: [
      "Kafe, bar ve otel lobisi dekoratif hatları",
      "Difüzörsüz görünen renkli kartonpiyer bantları",
      "Vitrin ve teşhir alanı renk vurguları",
      "Renk değişen gizli aydınlatma detayları",
    ],
    blocks: [
      { type: "h2", text: "Neden RGB COB" },
      {
        type: "p",
        text:
          "Sıradan RGB şeritte renkli noktalar difüzörsüz bakıldığında tek tek okunur ve özellikle kırmızı ile mavide bu daha belirgindir. RGB COB'da çipler bitişik olduğu için renk boydan boya yayılır. Şeridin kendisinin göründüğü, difüzör konulamayan dekoratif hatlarda aradaki fark doğrudan görünür kalitedir.",
      },
      { type: "h2", text: "Sistem gereksinimi ve yük" },
      {
        type: "p",
        text:
          "Metrede 576 çip yüksek bir yoğunluktur; metre başına watt değeri sıradan RGB şeritten belirgin biçimde yüksektir. Bu, hem trafoyu hem kontrolörü yukarı çeker. Kontrolörün kanal başına amperi hesaplanan yükün altında kalıyorsa araya repeater girer — seçimin ayrıntısı [RGB LED kontrol ünitesi seçimi](/blog/rgb-led-kontrol-unitesi-secimi/) yazısında.",
      },
      { type: "h2", text: "Sınırı: efekt yok" },
      {
        type: "p",
        text:
          "RGB COB da sıradan RGB gibi tek renkli bir bütündür; hattın tamamı aynı anda aynı rengi alır. Akan ve dalgalanan efektler isteniyorsa [pixel şeride](/urunler/led-serit/ip20-pixel-serit-led/) ya da pixel COB modellerine geçmek gerekir.",
      },
      {
        type: "p",
        text:
          "Renk hiç değişmeyecekse RGB gereksiz bir katmandır: tek renk çipler daha parlaktır, kontrol ünitesi istemez ve hat boyunca ton kaydırmaz. Aynı seride [mor](/urunler/cob-led-serit/mor-cob-serit-led/), [pembe](/urunler/cob-led-serit/pembe-cob-serit-led/) ve [buz mavisi](/urunler/cob-led-serit/buz-mavisi-cob-serit-led/) tek renk kademeleri bulunur.",
      },
    ],
    faq: [
      { q: "RGB COB ile RGB SMD arasındaki fark nedir?", a: "Işık karakteri. COB kesintisiz bir renk hattı verir, SMD'de renkli noktalar ayırt edilir. Kontrol yöntemi ikisinde de aynıdır." },
      { q: "Hangi kontrol ünitesi gerekir?", a: "24V destekleyen bir RGB kontrol ünitesi. Yükün kontrolörün amper kapasitesini aşmadığından emin olun." },
      { q: "Beyaz elde edilir mi?", a: "Üç rengin karışımıyla beyaza yakın bir ton çıkar ama temiz değildir. Hem renk hem düzgün beyaz gerekiyorsa RGB+W modellere bakın." },
      { q: "Dış mekanda kullanılır mı?", a: "Bu ürün IP20'dir, iç mekan içindir." },
      { q: "Kaç metre tek hat çekilebilir?", a: "Yüksek watt nedeniyle metraj sınırı diğer COB şeritlerden kısadır; hattı ikiye bölüp paralel beslemek en güvenli yöntemdir." },
    ],
    related: ["ip20-8mm-cob-480-mt", "ip20-rgb-serit-led", "44-tuslu-rgb-kontrol-cihazi"],
    img: "/images/products/rgb-cob-serit-led-576led-mt.webp",
    updated: "2026-09-02",
  },
  {
    slug: "mor-cob-serit-led",
    categorySlug: "cob-led-serit",
    name: "Mor COB Şerit LED 520/mt",
    metaTitle: "Mor COB Şerit LED Fiyatı | 24V 520 LED/mt",
    metaDesc:
      "Mor COB şerit LED: 24V, IP20, 8mm, 520 LED/mt, 12W. Noktasız mor ışık hattı — bar, gece kulübü ve dekoratif iç mekan için toptan fiyat.",
    keywords: ["mor cob şerit led", "mor led şerit", "renkli cob şerit", "24v mor şerit led", "noktasız mor led", "425nm mor led"],
    h1: "Mor COB Şerit LED — 24V IP20 520 LED/mt",
    intro:
      "Tek renk mor COB şerit: 24V, 8 mm genişlik, metrede 520 çip. RGB'de karışımla elde edilen mordan farklı olarak tek dalga boyunda üretilir — hat boyunca renk sapmaz ve kontrol ünitesi gerektirmez.",
    specs: [
      ["Renk", "Mor — tek renk"],
      ["Katalog dalga boyu", "425 nm"],
      ["Çip tipi", "COB"],
      ["Yoğunluk", "520 LED / metre"],
      ["Genişlik", "8 mm"],
      ["Besleme", "24V DC"],
      ["Güç", "12 W / metre"],
      ["Koruma sınıfı", "IP20 — iç mekan"],
      ["Işık karakteri", "Noktasız, sürekli hat"],
      ["Kontrol", "Gerekmez — tek renk"],
      ["Seri", "Fortune Plus"],
      ["Ürün kodu", "ŞL12C520-TL08"],
    ],
    useCases: [
      "Bar, gece kulübü ve eğlence mekanı hatları",
      "Oyun odası ve bilgisayar kasası dekoratif aydınlatma",
      "Vitrin ve teşhir alanında renk vurgusu",
      "Kartonpiyer ve niş içi gizli aydınlatma",
      "Etkinlik ve stant dekorasyonu",
    ],
    blocks: [
      { type: "h2", text: "Tek renk mor ile RGB moru arasındaki fark" },
      {
        type: "p",
        text:
          "RGB şeritte mor, kırmızı ile mavinin karışımından elde edilir. Bu karışım hat boyunca birebir aynı kalmaz: kanal dengeleri, kablo uzunluğu ve kontrolörün çıkışı arasındaki küçük farklar renk tonunu kaydırır, uzun hatlarda bir uç diğerinden hafif farklı görünür. Tek renk mor çip ise tek dalga boyunda üretilir — kayacak bir karışım yoktur.",
      },
      {
        type: "p",
        text:
          "İkinci fark maliyet ve kurulum tarafındadır. Tek renk model kontrol ünitesi istemez; iki damar kablo ve bir trafo yeterlidir. Renk değişimi gerekmeyen, mor rengin sabit kalacağı işlerde bu hem daha ucuz hem daha az arıza noktası demektir. Renk değiştirebilmek şartsa [RGB COB şerit](/urunler/cob-led-serit/ip20-rgb-cob-serit-led-576-led-mt/) modele geçilir.",
      },
      { type: "h2", text: "Mor rengin gözle görünen davranışı" },
      {
        type: "p",
        text:
          "Mor, insan gözünün en az duyarlı olduğu bölgeye yakındır. Aynı watt'taki beyaz ya da yeşil bir şeritle yan yana konduğunda gözle daha sönük algılanır — bu bir kalite sorunu değil, görme fizyolojisinin sonucudur. Mor hattın istenen etkiyi vermesi için ortam ışığının düşük olması gerekir; aydınlık bir mağaza içinde mor bant çoğu zaman kaybolur.",
      },
      {
        type: "p",
        text:
          "Buna karşılık karanlık ortamda mor, beyaz ve açık renkli yüzeylerde belirgin bir parlama yaratır. Bar tezgâhı, beyaz gömlek, açık renk duvar — mor ışık altında bu yüzeyler öne çıkar. Etkiyi isteyerek kullanmak mümkün; istemiyorsanız hattı bu yüzeylerden uzağa, gizli bir niş içine almak gerekir.",
      },
      { type: "h2", text: "Noktasız hat neden önemli" },
      {
        type: "p",
        text:
          "Renkli SMD şeritlerde tek tek noktalar difüzörsüz bakıldığında ayırt edilir ve bu, kırmızı ile mor gibi tonlarda daha belirgindir. COB'da çipler bitişik dizildiği için renk boydan boya yayılır. Şeridin kendisinin göründüğü, difüzör konulamayan dekoratif hatlarda aradaki fark doğrudan görünür kalitedir — karşılaştırma [COB mu SMD mi](/blog/cob-vs-smd-led-serit/) yazısında.",
      },
      { type: "h2", text: "Besleme ve metraj" },
      {
        type: "p",
        text:
          "Metrede 12 W çeker. 10 metrelik bir hat 120 W eder; %25 pay ile 24V 150 W trafo uygundur. Kendi metrajınız için [LED şerit güç hesaplama aracını](/araclar/led-serit-guc-hesaplama/) kullanabilirsiniz.",
      },
      {
        type: "p",
        text:
          "IP20'dir, iç mekan içindir: mutfak tezgâhı arkası, banyo ve dış cephe gibi nemli noktalara uygun değildir. Şerit alüminyum kanala alınırsa hem ısı çekilir hem hiza yıllarca bozulmaz; uzun hatlarda kanal kullanmak parlaklık kaybını da yavaşlatır.",
      },
      { type: "h2", text: "Kesim, kanal ve difüzör" },
      {
        type: "p",
        text:
          "COB şeritte kesim aralığı SMD'ye göre belirgin biçimde sıktır — hattı ölçüye göre bitirmek kolaydır. Buna karşılık kesilen yüzeydeki bakır pedler dardır ve lehimsiz konnektör kullanılacaksa şeridin genişliğine uygun 8 mm aparat seçilmelidir; dar pede zorlanan geniş aparat temas etmez ya da kısa devre yapar.",
      },
      {
        type: "p",
        text:
          "Alüminyum kanal uzun hatlarda ısıyı alır ve hizayı tutar, ancak kapak seçimi renkli şeritlerde ayrı bir karardır: opal difüzör kapak parlaklığın bir kısmını yutar. Mor, gözün zaten en az duyarlı olduğu bölgeye yakındır; bu kayıp orada gözle net biçimde fark edilir. Şeffaf kapak ya da kapaksız kanal, renkli hatlarda çoğu zaman daha doğru sonuç verir.",
      },
      {
        type: "p",
        text:
          "Arka yapışkan bant tek başına kalıcı bir çözüm değildir. Yüzey tozlu, yağlı ya da pürüzlüyse bant birkaç ay içinde bırakır; montajdan önce alkolle silinmiş, kuru ve düz bir yüzey şarttır. Tavan ve dikey uygulamalarda banda ek olarak klips veya kanal kullanın.",
      },
      { type: "h2", text: "Sipariş ederken" },
      {
        type: "p",
        text:
          "Metrajı ölçtükten sonra üzerine kayıp payı ekleyin: köşe dönüşleri, kesim artıkları ve besleme uçları hesabı her zaman birkaç metre yukarı çeker. Mor gibi tek renk çiplerde de üretim partileri arasında küçük ton farkları olabilir; hattı bölerek almanız gerekiyorsa tüm metrajı tek seferde ve aynı partiden isteyin.",
      },
      {
        type: "p",
        text:
          "Yanında gerekecek kalemleri aynı siparişte çıkarın: 24V trafo, lehimsiz konnektör ve gerekiyorsa alüminyum kanal. Sahada eksik kalan tek bir konnektör işin tamamını bekletir.",
      },
    ],
    faq: [
      { q: "Mor COB şerit neden daha sönük görünüyor?", a: "Mor, gözün en az duyarlı olduğu bölgeye yakındır. Aynı watt'taki beyaz şeritle yan yana daha sönük algılanır; bu ürün kusuru değildir." },
      { q: "RGB şeritle mor yapmak yerine neden bunu alayım?", a: "Tek renk mor hat boyunca sapmaz, kontrol ünitesi istemez ve daha az arıza noktası taşır. Renk değişimi gerekiyorsa RGB doğru tercihtir." },
      { q: "Dış mekanda kullanılır mı?", a: "Hayır. Bu ürün IP20'dir, iç mekan içindir. Dış mekan için IP65 sınıfı bir model gerekir." },
      { q: "Kontrol ünitesi gerekir mi?", a: "Gerekmez. İki damar kablo ve 24V trafo yeterlidir. Kısmak isterseniz tek kanallı bir dimmer eklenebilir." },
      { q: "Kaç metre tek hat çekilebilir?", a: "24V ve 12 W/m için pratik sınır 8-10 metredir. Daha uzunda hattı ikiye bölüp paralel besleyin." },
      { q: "Beyaz yüzeylerde parlama yapar mı?", a: "Karanlık ortamda beyaz ve açık renkli yüzeylerde belirgin bir parlama oluşur. Bu etkiyi istemiyorsanız hattı gizli bir nişe alın." },
      { q: "Kesim yapılabilir mi?", a: "Evet, şerit üzerindeki işaretli noktalardan kesilir. COB şeritlerde kesim aralığı SMD'ye göre daha sıktır." },
      { q: "Diğer renkler mevcut mu?", a: "Aynı seride pembe, buz mavisi, kırmızı, yeşil, mavi ve altın sarısı tek renk seçenekleri bulunur." },
    ],
    related: ["pembe-cob-serit-led", "buz-mavisi-cob-serit-led", "ip20-rgb-cob-serit-led-576-led-mt"],
    img: "/images/products/mor-cob-serit-led-520-mt.jpg",
    updated: "2026-09-08",
  },
  {
    slug: "pembe-cob-serit-led",
    categorySlug: "cob-led-serit",
    name: "Pembe COB Şerit LED 520/mt",
    metaTitle: "Pembe COB Şerit LED Fiyatı | 24V 520 LED/mt",
    metaDesc:
      "Pembe COB şerit LED: 24V, IP20, 8mm, 520 LED/mt, 12W. Noktasız pembe ışık hattı — tekstil, kozmetik ve vitrin aydınlatması için toptan fiyat.",
    keywords: ["pembe cob şerit led", "pembe led şerit", "renkli cob şerit led", "24v pembe şerit", "vitrin pembe led", "noktasız pembe led"],
    h1: "Pembe COB Şerit LED — 24V IP20 520 LED/mt",
    intro:
      "Tek renk pembe COB şerit: 24V, 8 mm genişlik, metrede 520 çip. Tekstil, kozmetik ve güzellik sektöründe ten rengini ve pastel ürünleri öne çıkarmak için kullanılan sabit renkli hat.",
    specs: [
      ["Renk", "Pembe — tek renk"],
      ["Katalog dalga boyu", "400 nm"],
      ["Çip tipi", "COB"],
      ["Yoğunluk", "520 LED / metre"],
      ["Genişlik", "8 mm"],
      ["Besleme", "24V DC"],
      ["Güç", "12 W / metre"],
      ["Koruma sınıfı", "IP20 — iç mekan"],
      ["Işık karakteri", "Noktasız, sürekli hat"],
      ["Kontrol", "Gerekmez — tek renk"],
      ["Seri", "Fortune Plus"],
      ["Ürün kodu", "ŞL12C520-TL09"],
    ],
    useCases: [
      "Tekstil ve hazır giyim vitrini",
      "Kozmetik, parfüm ve güzellik salonu teşhiri",
      "Kuaför ve makyaj aynası çevresi",
      "Pastane, çiçekçi ve hediyelik eşya vitrini",
      "Etkinlik, düğün ve organizasyon dekorasyonu",
    ],
    blocks: [
      { type: "h2", text: "Pembe ışığın ürün üzerindeki etkisi" },
      {
        type: "p",
        text:
          "Pembe ışık, altındaki yüzeyin rengini değiştirir — bu bazen istenen şeydir, bazen sorun. Ten rengi, pastel tonlar, açık pembe ve krem yüzeyler pembe ışık altında daha canlı ve sıcak görünür; tekstil, kozmetik ve güzellik sektöründe tercih edilme sebebi budur. Buna karşılık yeşil ve mavi ürünler donuklaşır, beyaz kumaş pembeye kaçar.",
      },
      {
        type: "p",
        text:
          "Pratik kural: ürünün gerçek rengi satın alma kararında belirleyiciyse pembe hattı ana aydınlatma olarak değil, vurgu olarak kullanın. Vitrinin genel aydınlatması nötr beyaz kalır, pembe hat raf altına ya da çerçeveye gizlenir. Bu kurgu hem atmosferi verir hem ürünü yanlış göstermez.",
      },
      { type: "h2", text: "Tek renk pembe mi, RGB mi" },
      {
        type: "p",
        text:
          "RGB şeritte pembe, kırmızı ile mavinin belirli oranda karışmasıyla elde edilir ve bu oran hat boyunca birebir korunmaz — uzun hatlarda tonun kaydığı görülür. Tek renk pembe çipte kayacak bir karışım yoktur, hat başından sonuna aynı tonda kalır.",
      },
      {
        type: "p",
        text:
          "Ayrıca tek renk model kontrol ünitesi istemez: iki damar kablo ve bir trafo yeterlidir. Vitrin gibi yıl boyu aynı renkte kalacak işlerde bu hem daha ucuz hem bakımı daha basittir. Renk değişimi şartsa [RGB COB şerit](/urunler/cob-led-serit/ip20-rgb-cob-serit-led-576-led-mt/) doğru tercihtir.",
      },
      { type: "h2", text: "Noktasız hattın vitrindeki karşılığı" },
      {
        type: "p",
        text:
          "Vitrinde şerit çoğu zaman doğrudan görünür; cam yüzey ve parlak raflar hattı yansıtır. Sıradan renkli SMD şeritte tek tek noktalar bu yansımalarda tek tek okunur. COB'da çipler bitişiktir, hat kesintisiz bir çizgi olarak yansır. Difüzör konulamayan yerlerde aradaki fark doğrudan görünür kalitedir — karşılaştırma [COB mu SMD mi](/blog/cob-vs-smd-led-serit/) yazısında.",
      },
      { type: "h2", text: "Besleme, metraj ve montaj" },
      {
        type: "p",
        text:
          "Metrede 12 W çeker; 10 metre 120 W eder ve %25 pay ile 24V 150 W trafo uygundur. Metrajınıza göre hesabı [LED şerit güç hesaplama aracıyla](/araclar/led-serit-guc-hesaplama/) çıkarabilirsiniz.",
      },
      {
        type: "p",
        text:
          "IP20'dir, iç mekan içindir. Vitrin camına yakın montajlarda yoğuşma riskine dikkat edin: soğuk havada cam iç yüzeyinde biriken nem şeride ulaşırsa IP20 gövde bunu tolere etmez. Camdan birkaç santim içeride, alüminyum kanal içinde ilerlemek hem bu riski hem ısıyı çözer.",
      },
      { type: "h2", text: "Kesim, kanal ve difüzör" },
      {
        type: "p",
        text:
          "COB şeritte kesim aralığı SMD'ye göre belirgin biçimde sıktır — hattı ölçüye göre bitirmek kolaydır. Buna karşılık kesilen yüzeydeki bakır pedler dardır ve lehimsiz konnektör kullanılacaksa şeridin genişliğine uygun 8 mm aparat seçilmelidir; dar pede zorlanan geniş aparat temas etmez ya da kısa devre yapar.",
      },
      {
        type: "p",
        text:
          "Alüminyum kanal uzun hatlarda ısıyı alır ve hizayı tutar, ancak kapak seçimi renkli şeritlerde ayrı bir karardır: opal difüzör kapak parlaklığın bir kısmını yutar. Vitrin gibi hattın parlaklığının belirleyici olduğu yerlerde bu kayıp doğrudan görünür. Şeffaf kapak ya da kapaksız kanal, renkli hatlarda çoğu zaman daha doğru sonuç verir.",
      },
      {
        type: "p",
        text:
          "Arka yapışkan bant tek başına kalıcı bir çözüm değildir. Yüzey tozlu, yağlı ya da pürüzlüyse bant birkaç ay içinde bırakır; montajdan önce alkolle silinmiş, kuru ve düz bir yüzey şarttır. Tavan ve dikey uygulamalarda banda ek olarak klips veya kanal kullanın.",
      },
      { type: "h2", text: "Sipariş ederken" },
      {
        type: "p",
        text:
          "Metrajı ölçtükten sonra üzerine kayıp payı ekleyin: köşe dönüşleri, kesim artıkları ve besleme uçları hesabı her zaman birkaç metre yukarı çeker. Pembe gibi tek renk çiplerde de üretim partileri arasında küçük ton farkları olabilir; hattı bölerek almanız gerekiyorsa tüm metrajı tek seferde ve aynı partiden isteyin.",
      },
      {
        type: "p",
        text:
          "Yanında gerekecek kalemleri aynı siparişte çıkarın: 24V trafo, lehimsiz konnektör ve gerekiyorsa alüminyum kanal. Sahada eksik kalan tek bir konnektör işin tamamını bekletir.",
      },
    ],
    faq: [
      { q: "Pembe ışık ürünün rengini bozar mı?", a: "Ten rengi ve pastel tonları canlandırır; yeşil ve mavi ürünleri donuklaştırır, beyaz kumaşı pembeye kaydırır. Ürün rengi kritikse vurgu olarak kullanın." },
      { q: "RGB ile pembe yapmak yerine neden bunu alayım?", a: "Tek renk pembe hat boyunca ton kaydırmaz ve kontrol ünitesi istemez. Renk değişimi gerekiyorsa RGB doğru tercihtir." },
      { q: "Dış mekanda veya vitrin dışında kullanılır mı?", a: "Hayır. IP20'dir, iç mekan içindir. Nemli ortam ve dış cephe için IP65 sınıfı bir model gerekir." },
      { q: "Kaç metre tek hat çekilebilir?", a: "24V ve 12 W/m için pratik sınır 8-10 metredir. Daha uzun hatlarda ikiye bölüp paralel besleyin." },
      { q: "Kısılabilir mi?", a: "Evet. Tek kanallı bir 24V dimmer ile parlaklık ayarlanabilir; RGB kontrolörüne gerek yoktur." },
      { q: "Kesim aralığı nedir?", a: "Şerit üzerindeki işaretli noktalardan kesilir; COB şeritlerde bu aralık SMD'ye göre daha sıktır." },
      { q: "Vitrin camına yapıştırılabilir mi?", a: "Önerilmez. Soğuk havada camda yoğuşan nem IP20 gövdeye zarar verir; camdan birkaç santim içeride kanal içinde ilerleyin." },
      { q: "Diğer renkler mevcut mu?", a: "Aynı seride mor, buz mavisi, kırmızı, yeşil, mavi ve altın sarısı tek renk seçenekleri bulunur." },
    ],
    related: ["mor-cob-serit-led", "buz-mavisi-cob-serit-led", "ip20-8mm-cob-480-mt"],
    img: "/images/products/pembe-cob-serit-led-520-mt.jpg",
    updated: "2026-09-08",
  },
  {
    slug: "buz-mavisi-cob-serit-led",
    categorySlug: "cob-led-serit",
    name: "Buz Mavisi COB Şerit LED 520/mt",
    metaTitle: "Buz Mavisi COB Şerit LED Fiyatı | 24V IP20",
    metaDesc:
      "Buz mavisi (açık mavi) COB şerit LED: 24V, IP20, 8mm, 520 LED/mt, 12W. Noktasız açık mavi hat — soğutucu reyon ve teknoloji vitrini için toptan fiyat.",
    keywords: ["buz mavisi cob şerit led", "açık mavi cob şerit", "açık mavi led şerit", "24v buz mavisi led", "soğutucu reyon led", "485nm led şerit"],
    h1: "Buz Mavisi COB Şerit LED — 24V IP20 520 LED/mt",
    intro:
      "Tek renk buz mavisi (açık mavi) COB şerit: 24V, 8 mm genişlik, metrede 520 çip. Koyu maviden farklı olarak turkuaza yakın, yüksek görünürlüklü bir tondur — soğuk ve temiz izlenim istenen işlerde kullanılır.",
    specs: [
      ["Renk", "Buz mavisi (açık mavi) — tek renk"],
      ["Katalog dalga boyu", "485 nm"],
      ["Çip tipi", "COB"],
      ["Yoğunluk", "520 LED / metre"],
      ["Genişlik", "8 mm"],
      ["Besleme", "24V DC"],
      ["Güç", "12 W / metre"],
      ["Koruma sınıfı", "IP20 — iç mekan"],
      ["Işık karakteri", "Noktasız, sürekli hat"],
      ["Kontrol", "Gerekmez — tek renk"],
      ["Seri", "Fortune Plus"],
      ["Ürün kodu", "ŞL12C520-TL07"],
    ],
    useCases: [
      "Market soğutucu reyonu ve dolap içi aydınlatma",
      "Teknoloji ve beyaz eşya mağazası teşhiri",
      "Su, buz ve deniz temalı dekorasyonlar",
      "Havuz çevresi iç mekan detayları ve spa alanları",
      "Klinik, laboratuvar ve showroom vurgu hatları",
    ],
    blocks: [
      { type: "h2", text: "Buz mavisi ile koyu mavi aynı şey değil" },
      {
        type: "p",
        text:
          "Standart mavi LED derin, koyu bir tondur ve gözün duyarlılığının düşük olduğu bölgede kalır: aynı watt'ta sönük algılanır. Buz mavisi ise turkuaza yakın, gözün belirgin biçimde daha duyarlı olduğu bir tondur. Pratik sonucu şudur — aynı 12 W ile buz mavisi hat, koyu mavi bir hattan gözle çok daha parlak okunur.",
      },
      {
        type: "p",
        text:
          "Bu yüzden ikisi farklı işlerde kullanılır. Koyu mavi karanlık ortamda derinlik ve atmosfer için tercih edilir; buz mavisi aydınlık ortamda bile görünürlüğünü koruduğu için mağaza içi teşhirde ve reyon aydınlatmasında işe yarar.",
      },
      { type: "h2", text: "Soğuk ve temiz izlenimi" },
      {
        type: "p",
        text:
          "Buz mavisi ışık, altındaki yüzeyi soğuk ve temiz gösterir. Market soğutucu reyonlarında, dondurma ve içecek dolaplarında bu izlenim doğrudan satın alma kararına dokunur: ürün daha soğuk, daha taze algılanır. Aynı sebeple beyaz eşya, klima ve teknoloji teşhirinde de sık kullanılır.",
      },
      {
        type: "p",
        text:
          "Sınırı da burada: gıdanın kendi rengi öne çıkacaksa buz mavisi yanlış tercihtir. Et, ekmek, ahşap ve sıcak tonlu ürünler bu ışık altında soluk ve cansız görünür. Bu ürünlerde 3000K gün ışığı ya da nötr beyaz doğru seçimdir.",
      },
      { type: "h2", text: "Tek renk olmanın avantajı" },
      {
        type: "p",
        text:
          "RGB şeritte buz mavisini yakalamak mavi ile yeşilin ince bir karışımını tutturmayı gerektirir ve bu oran hat boyunca kaymaya açıktır. Tek renk çipte böyle bir ayar yoktur: hat başından sonuna aynı tonda kalır, kontrol ünitesi de gerekmez. İki damar kablo ve 24V trafo yeterlidir.",
      },
      {
        type: "p",
        text:
          "COB olması ayrı bir kazanım: çipler bitişik dizildiği için renk boydan boya yayılır, difüzörsüz bakıldığında tek tek noktalar okunmaz. Reyon içi gibi şeridin doğrudan göründüğü yerlerde bu fark doğrudan görünür kalitedir — ayrıntısı [COB mu SMD mi](/blog/cob-vs-smd-led-serit/) yazısında.",
      },
      { type: "h2", text: "Besleme ve nem uyarısı" },
      {
        type: "p",
        text:
          "Metrede 12 W çeker; 10 metrelik hat 120 W eder, %25 pay ile 24V 150 W trafo uygundur. Hesabı kendi metrajınız için [LED şerit güç hesaplama aracıyla](/araclar/led-serit-guc-hesaplama/) çıkarabilirsiniz.",
      },
      {
        type: "p",
        text:
          "Bu ürün IP20'dir ve buradaki en önemli uyarı soğutucu uygulamalarıyla ilgilidir: soğuk yüzeylerde yoğuşma olur ve IP20 gövde bunu tolere etmez. Dolap içi ve reyon montajlarında ya nemin ulaşmayacağı bir hat seçilmeli ya da IP65 sınıfı bir modele geçilmelidir.",
      },
      { type: "h2", text: "Kesim, kanal ve difüzör" },
      {
        type: "p",
        text:
          "COB şeritte kesim aralığı SMD'ye göre belirgin biçimde sıktır — hattı ölçüye göre bitirmek kolaydır. Buna karşılık kesilen yüzeydeki bakır pedler dardır ve lehimsiz konnektör kullanılacaksa şeridin genişliğine uygun 8 mm aparat seçilmelidir; dar pede zorlanan geniş aparat temas etmez ya da kısa devre yapar.",
      },
      {
        type: "p",
        text:
          "Alüminyum kanal uzun hatlarda ısıyı alır ve hizayı tutar, ancak kapak seçimi renkli şeritlerde ayrı bir karardır: opal difüzör kapak parlaklığın bir kısmını yutar. Buz mavisi gözün duyarlı olduğu bölgede kaldığı için kaybı en iyi tolere eden renklerden biridir, yine de aydınlık ortamlarda hesaba katın. Şeffaf kapak ya da kapaksız kanal, renkli hatlarda çoğu zaman daha doğru sonuç verir.",
      },
      {
        type: "p",
        text:
          "Arka yapışkan bant tek başına kalıcı bir çözüm değildir. Yüzey tozlu, yağlı ya da pürüzlüyse bant birkaç ay içinde bırakır; montajdan önce alkolle silinmiş, kuru ve düz bir yüzey şarttır. Tavan ve dikey uygulamalarda banda ek olarak klips veya kanal kullanın.",
      },
      { type: "h2", text: "Sipariş ederken" },
      {
        type: "p",
        text:
          "Metrajı ölçtükten sonra üzerine kayıp payı ekleyin: köşe dönüşleri, kesim artıkları ve besleme uçları hesabı her zaman birkaç metre yukarı çeker. Buz mavisi gibi tek renk çiplerde de üretim partileri arasında küçük ton farkları olabilir; hattı bölerek almanız gerekiyorsa tüm metrajı tek seferde ve aynı partiden isteyin.",
      },
      {
        type: "p",
        text:
          "Yanında gerekecek kalemleri aynı siparişte çıkarın: 24V trafo, lehimsiz konnektör ve gerekiyorsa alüminyum kanal. Sahada eksik kalan tek bir konnektör işin tamamını bekletir.",
      },
    ],
    faq: [
      { q: "Buz mavisi ile mavi arasındaki fark nedir?", a: "Buz mavisi turkuaza yakın açık bir tondur ve gözün daha duyarlı olduğu bölgede kalır; aynı watt'ta koyu maviden belirgin biçimde parlak görünür." },
      { q: "Soğutucu dolap içinde kullanılır mı?", a: "IP20 olduğu için yoğuşma riski vardır. Nemin ulaşmayacağı bir hat seçilmeli ya da IP65 sınıfı bir modele geçilmelidir." },
      { q: "Gıda reyonunda uygun mu?", a: "Soğuk ürünlerde uygundur. Et, ekmek ve ahşap gibi sıcak tonlu ürünleri soluk gösterir; oralarda 3000K gün ışığı daha doğrudur." },
      { q: "Kontrol ünitesi gerekir mi?", a: "Gerekmez. İki damar kablo ve 24V trafo yeterlidir; kısmak için tek kanallı dimmer eklenebilir." },
      { q: "Kaç metre tek hat çekilebilir?", a: "24V ve 12 W/m için pratik sınır 8-10 metredir. Daha uzun hatlarda ikiye bölüp paralel besleyin." },
      { q: "RGB ile aynı ton elde edilir mi?", a: "Yaklaşık olarak elde edilir ama mavi-yeşil karışımı hat boyunca kaymaya açıktır. Tek renk çipte ton sabittir." },
      { q: "Alüminyum kanal şart mı?", a: "Şart değil ama uzun hatlarda önerilir; ısıyı alır, hizayı tutar ve parlaklık kaybını yavaşlatır." },
      { q: "Diğer renkler mevcut mu?", a: "Aynı seride mor, pembe, kırmızı, yeşil, mavi ve altın sarısı tek renk seçenekleri bulunur." },
    ],
    related: ["mor-cob-serit-led", "pembe-cob-serit-led", "ip20-8mm-cob-480-mt"],
    img: "/images/products/buz-mavisi-cob-serit-led-520-mt.jpg",
    updated: "2026-09-08",
  },
  {
    slug: "dis-mekan-cob-beyaz-6000k",
    categorySlug: "cob-led-serit",
    name: "IP65 10mm COB 480/mt Beyaz 6000K",
    metaTitle: "Dış Mekan COB Şerit LED Fiyatı | Beyaz 6000K",
    metaDesc:
      "6000K soğuk beyaz dış mekan COB şerit LED: IP65, 24V, 10mm, 480 LED/mt, 12W. Cephe konturu ve tabela için noktasız hat. Toptan fiyat.",
    keywords: ["dış mekan cob şerit led beyaz", "6000k cob şerit", "soğuk beyaz cob led", "ip65 beyaz cob şerit", "cephe kontur led", "24v beyaz cob"],
    h1: "Dış Mekan COB Şerit LED — Beyaz 6000K",
    intro:
      "IP65 10 mm COB şeridin soğuk beyaz kademesi: 6000K, 24V, metrede 480 çip ve 12 W. Gündüz de okunması gereken cephe konturlarında ve tabela hatlarında kullanılan renk sıcaklığıdır.",
    specs: [
      ["Renk sıcaklığı", "6000K — soğuk beyaz"],
      ["Çip tipi", "COB"],
      ["Yoğunluk", "480 LED / metre"],
      ["Genişlik", "10 mm"],
      ["Besleme", "24V DC"],
      ["Güç", "12 W / metre"],
      ["Koruma sınıfı", "IP65 — dış mekan"],
      ["Kaplama", "Silikon dolgulu"],
      ["Işık karakteri", "Noktasız, sürekli hat"],
      ["Kontrol", "Gerekmez — tek renk sıcaklığı"],
      ["Seri", "Fortune Plus"],
      ["Ürün kodu", "ŞL12C480-TL01"],
    ],
    useCases: [
      "Cephe kontur ve çizgi aydınlatması",
      "Tabela ve kutu harf çevre hattı",
      "Saçak altı, giriş ve kapı üstü bantları",
      "Otopark, geçiş ve merdiven güvenlik aydınlatması",
      "Cam, metal ve beton cepheli modern yapılar",
    ],
    blocks: [
      { type: "h2", text: "6000K neden ticari işlerin varsayılanı" },
      {
        type: "p",
        text:
          "Soğuk beyaz, aynı watt'ta sıcak tonlardan daha parlak algılanır. Tabelada ve cephe konturunda amaç gece atmosferi değil gündüz de sürebilen okunurluksa, bu fark doğrudan işe yarar. Aynı sebeple otopark girişi, merdiven ve geçiş gibi güvenlik amaçlı hatlarda da 6000K tercih edilir.",
      },
      {
        type: "p",
        text:
          "Cephenin malzemesi de tercihi belirler. Cam, alüminyum kompozit, beton ve açık renk boya soğuk beyazla uyumludur; hat temiz ve keskin durur. Ahşap, tuğla ve taş cephelerde ise aynı ton yüzeyi soluklaştırır — orada [3000K gün ışığı](/urunler/cob-led-serit/dis-mekan-cob-gunisigi-3000k/) kademesi daha doğru sonuç verir.",
      },
      { type: "h2", text: "Karar: 6000K mı, 4000K mı, 3000K mı" },
      {
        type: "ul",
        items: [
          "6000K soğuk beyaz — tabela, kontur, güvenlik hatları; en yüksek algılanan parlaklık",
          "4000K nötr beyaz — karma cepheler ve kurumsal binalar; iki uç arasında güvenli orta yol",
          "3000K gün ışığı — ahşap, taş ve restoran terası; sıcak ve konforlu görünüm",
        ],
      },
      {
        type: "p",
        text:
          "Tek kural şudur: aynı yüzeyde iki farklı renk sıcaklığı yan yana gelmesin. Gündüz fark edilmeyen küçük ton farkı gece leke gibi okunur ve sonradan düzeltmek çoğu zaman hattın tamamını sökmeyi gerektirir. İşi bölerek alacaksanız tüm metrajı tek seferde ve aynı partiden isteyin.",
      },
      { type: "h2", text: "Dış mekanda COB'un yeri" },
      {
        type: "p",
        text:
          "Dış mekan kontur işlerinde iki seçenek yarışır: neon flex ve IP65 COB şerit. Neon daha kalın, daha dolgun bir hat verir ve uzaktan okunur. COB şerit daha ince, daha keskin bir çizgi bırakır ve dar kanallara girer. Mimari detayın kendisini vurgulamak isteyen, hattın kalın görünmesini istemeyen işlerde COB tercih edilir — kalın hat gerekiyorsa [neon LED](/urunler/neon-led/) tarafına bakın. Ürünün genel teknik anlatımı [IP65 10mm COB 480/mt](/urunler/cob-led-serit/ip65-10mm-cob-480-mt/) sayfasında.",
      },
      { type: "h2", text: "Besleme ve uç kapatma" },
      {
        type: "p",
        text:
          "Metrede 12 W çeker; 20 metrelik bir hat 240 W eder ve %25 pay ile 24V 300 W trafo gerekir. Metrajınıza göre hesabı [LED şerit güç hesaplama aracıyla](/araclar/led-serit-guc-hesaplama/) çıkarabilirsiniz.",
      },
      {
        type: "p",
        text:
          "IP65 koruma şeridin gövdesine aittir; kesilen uç çıplaktır ve dış mekan arızalarının çoğu buradan başlar. Her uç silikon kapak ve yapıştırıcı ile kapatılmalı, kablo giriş noktası ayrıca sızdırmaz hâle getirilmelidir. Trafo da dışarıda kalacaksa iç mekan tipi bir adaptör yerine [metal kasa dış mekan adaptör](/urunler/trafo-led-surucu/metal-kasa-dis-mekan-adaptor/) kullanın.",
      },
      { type: "h2", text: "Montaj yüzeyi ve ısı" },
      {
        type: "p",
        text:
          "Silikon kaplama suyu dışarıda tutar ama ısıyı da bir miktar içeride tutar. Kısa hatlarda bu sorun değildir; uzun cephe hatlarında alüminyum kanal ya da alüminyum profil üzerine montaj, ısıyı alarak parlaklık kaybını yıllar boyunca yavaşlatır. Doğrudan ahşap ya da plastik üzerine uzun metraj çekmek, aynı şeridin ömrünü belirgin biçimde kısaltır.",
      },
      {
        type: "p",
        text:
          "Arka yapışkan bant dış mekanda tek başına güvenilmez: sıcaklık farkı ve nem bandı zamanla bırakır. Cephede klips, kanal ya da uygun bir yapıştırıcı ile mekanik sabitleme yapın. Şerit yatay bir yüzeye monte ediliyorsa, suyun birikmeyeceği bir eğim ya da montaj yönü seçilmelidir — IP65 birikmiş suda uzun süre kalmaya göre tasarlanmamıştır.",
      },
      { type: "h2", text: "Sipariş ederken" },
      {
        type: "p",
        text:
          "Metraja köşe dönüşleri ve kesim artıkları için pay ekleyin. Renk sıcaklığı seçimini siparişten önce netleştirin: aynı yüzeye sonradan farklı bir kademe eklemek, hattın tamamını sökmeyi gerektiren tek hatadır. Beyaz LED'lerde partiler arası küçük ton farkları olabildiği için tüm metrajı tek seferde ve aynı partiden isteyin.",
      },
      {
        type: "p",
        text:
          "Yanında gerekecek kalemleri de aynı siparişte çıkarın: dış mekan tipi 24V trafo, silikon uç kapağı, yapıştırıcı ve lehimsiz konnektör. Bu kalemlerden biri eksik kaldığında hat çekilmiş olsa bile iş teslim edilemez.",
      },
    ],
    faq: [
      { q: "6000K mı 3000K mı seçmeliyim?", a: "Cam, metal ve beton cephelerde ve tabela işlerinde 6000K; ahşap, taş ve restoran terası gibi sıcak yüzeylerde 3000K daha doğrudur." },
      { q: "6000K daha mı parlak?", a: "Aynı watt'ta gözle daha parlak algılanır. Lümen değeri birebir aynı olsa bile soğuk beyaz daha aydınlık görünür." },
      { q: "Aynı cephede iki renk sıcaklığı kullanılır mı?", a: "Kullanılmamalı. Küçük ton farkı gece aynı yüzeyde leke gibi okunur ve düzeltmesi hattı sökmeyi gerektirir." },
      { q: "IP65 yağmurda kalabilir mi?", a: "Gövdesi yağmura dayanır. Uçların kapatılmış olması ve suyun birikmediği bir montaj şarttır; su altında kalacak hatlar için IP65 yeterli değildir." },
      { q: "Kaç metre tek hat çekilebilir?", a: "24V ve 12 W/m için pratik sınır 8-10 metredir. Uzun cephelerde hattı bölüp iki uçtan besleyin." },
      { q: "Trafo iç mekan tipi olabilir mi?", a: "Şerit dışarıdaysa olmaz. Arıza çoğu zaman şeritten değil beslemeden gelir; dış mekan veya IP67 sınıfı bir model kullanın." },
      { q: "Neon yerine kullanılabilir mi?", a: "Kullanılabilir; hat daha ince ve keskin görünür. Kalın ve dolgun bir neon görüntüsü isteniyorsa neon LED daha doğrudur." },
      { q: "Sonradan hat uzatırsam renk tutar mı?", a: "Aynı seri ve mümkünse aynı parti istenirse tutar. Farklı partiler arasında küçük ton farkları olabilir." },
    ],
    related: ["dis-mekan-cob-gunisigi-3000k", "ip65-10mm-cob-480-mt", "metal-kasa-dis-mekan-adaptor"],
    img: "/images/products/ip65-10mm-cob-480-mt.png",
    updated: "2026-09-08",
  },
  {
    slug: "dis-mekan-cob-gunisigi-3000k",
    categorySlug: "cob-led-serit",
    name: "IP65 10mm COB 480/mt Günışığı 3000K",
    metaTitle: "Dış Mekan COB Şerit LED Fiyatı | Günışığı 3000K",
    metaDesc:
      "3000K gün ışığı dış mekan COB şerit LED: IP65, 24V, 10mm, 480 LED/mt, 12W. Ahşap cephe, teras ve peyzaj için sıcak tonlu noktasız hat. Toptan fiyat.",
    keywords: ["dış mekan cob şerit günışığı", "3000k cob şerit led", "sıcak beyaz cob led", "ip65 günışığı şerit", "ahşap cephe led", "teras aydınlatma led"],
    h1: "Dış Mekan COB Şerit LED — Günışığı 3000K",
    intro:
      "IP65 10 mm COB şeridin sıcak kademesi: 3000K, 24V, metrede 480 çip ve 12 W. Ahşap ve taş cephelerde, teras ve peyzaj hatlarında göz yormayan, mekânı sıcak gösteren renk sıcaklığıdır.",
    specs: [
      ["Renk sıcaklığı", "3000K — gün ışığı (sıcak beyaz)"],
      ["Çip tipi", "COB"],
      ["Yoğunluk", "480 LED / metre"],
      ["Genişlik", "10 mm"],
      ["Besleme", "24V DC"],
      ["Güç", "12 W / metre"],
      ["Koruma sınıfı", "IP65 — dış mekan"],
      ["Kaplama", "Silikon dolgulu"],
      ["Işık karakteri", "Noktasız, sürekli hat"],
      ["Kontrol", "Gerekmez — tek renk sıcaklığı"],
      ["Seri", "Fortune Plus"],
      ["Ürün kodu", "ŞL12C480-TL03"],
    ],
    useCases: [
      "Ahşap, tuğla ve taş cephe aydınlatması",
      "Restoran, kafe ve otel terası",
      "Pergole, çardak ve bahçe kontur hatları",
      "Peyzaj, yürüyüş yolu ve havuz çevresi",
      "Butik otel ve villa dış mekan detayları",
    ],
    blocks: [
      { type: "h2", text: "3000K neyi değiştirir" },
      {
        type: "p",
        text:
          "Gün ışığı tonu, altındaki yüzeyin sıcak renklerini öne çıkarır. Ahşabın sarı-kahve damarı, tuğlanın kırmızısı, doğal taşın bej tonu 3000K altında canlı görünür; aynı yüzey 6000K soğuk beyaz altında gri ve cansız kalır. Bu yüzden malzemesi sıcak olan her cephede tercih 3000K'dan yana yapılır.",
      },
      {
        type: "p",
        text:
          "İkinci etken, mekânın işlevi. Restoran terası, otel bahçesi ve villa girişi gibi insanların oturduğu yerlerde amaç okunurluk değil konfordur. Soğuk beyaz bu alanlarda klinik bir his verir; gün ışığı tonu ise akşam saatlerinde göz yormayan, davetkâr bir ortam kurar. Okunurluğun öncelik olduğu tabela ve kontur işlerinde ise [6000K soğuk beyaz](/urunler/cob-led-serit/dis-mekan-cob-beyaz-6000k/) kademesi doğru seçimdir.",
      },
      { type: "h2", text: "Sıcak tonun iki yan faydası" },
      {
        type: "p",
        text:
          "Dış mekanda 3000K'nın soğuk beyaza göre iki pratik avantajı vardır. Birincisi böcek: gece uçan böcekler kısa dalga boylu, maviye kaçan ışığa belirgin biçimde daha fazla toplanır. Yemek servisi yapılan teraslarda sıcak ton seçmek bu sorunu tamamen bitirmez ama gözle görülür ölçüde azaltır.",
      },
      {
        type: "p",
        text:
          "İkincisi komşuluk. Konut bölgelerinde ve villa bahçelerinde soğuk beyaz hatlar, cepheden taşıp yan parselleri rahatsız eden bir keskinlik yaratır. Gün ışığı tonu aynı metrajda daha az rahatsız edicidir; ışığın yönünü aşağı çeviren bir montajla birleştiğinde şikâyet riski büyük ölçüde ortadan kalkar.",
      },
      { type: "h2", text: "Noktasız hattın peyzajdaki karşılığı" },
      {
        type: "p",
        text:
          "Peyzaj ve teras işlerinde şerit çoğu zaman gizlenmez; basamak kenarında, pergole profilinde ve duvar nişinde doğrudan görünür. Sıradan SMD şeritte tek tek noktalar bu mesafede okunur ve hat teknik bir aparat gibi durur. COB'da çipler bitişiktir; hat kesintisiz bir çizgi olarak görünür ve mimari detayın parçası hâline gelir. Ürünün genel teknik anlatımı [IP65 10mm COB 480/mt](/urunler/cob-led-serit/ip65-10mm-cob-480-mt/) sayfasında.",
      },
      { type: "h2", text: "Besleme, uç kapatma ve montaj" },
      {
        type: "p",
        text:
          "Metrede 12 W çeker; 20 metre 240 W eder ve %25 pay ile 24V 300 W trafo gerekir. Kendi metrajınız için [LED şerit güç hesaplama aracını](/araclar/led-serit-guc-hesaplama/) kullanabilirsiniz.",
      },
      {
        type: "p",
        text:
          "IP65 gövdeye aittir, kesilen uca değil: her uç silikon kapak ve yapıştırıcı ile kapatılmalı, kablo giriş noktası ayrıca sızdırmaz hâle getirilmelidir. Bahçe ve peyzaj hatlarında su birikmeyen bir montaj ayrıca önemlidir — sulama ve yağmur suyunun toplandığı yatay yüzeylerde IP65 yeterli olmaz. Trafo dışarıda kalacaksa [metal kasa dış mekan adaptör](/urunler/trafo-led-surucu/metal-kasa-dis-mekan-adaptor/) kullanın.",
      },
      { type: "h2", text: "Montaj yüzeyi ve ısı" },
      {
        type: "p",
        text:
          "Silikon kaplama suyu dışarıda tutar ama ısıyı da bir miktar içeride tutar. Kısa hatlarda bu sorun değildir; uzun cephe hatlarında alüminyum kanal ya da alüminyum profil üzerine montaj, ısıyı alarak parlaklık kaybını yıllar boyunca yavaşlatır. Doğrudan ahşap ya da plastik üzerine uzun metraj çekmek, aynı şeridin ömrünü belirgin biçimde kısaltır.",
      },
      {
        type: "p",
        text:
          "Arka yapışkan bant dış mekanda tek başına güvenilmez: sıcaklık farkı ve nem bandı zamanla bırakır. Cephede klips, kanal ya da uygun bir yapıştırıcı ile mekanik sabitleme yapın. Şerit yatay bir yüzeye monte ediliyorsa, suyun birikmeyeceği bir eğim ya da montaj yönü seçilmelidir — IP65 birikmiş suda uzun süre kalmaya göre tasarlanmamıştır.",
      },
      { type: "h2", text: "Sipariş ederken" },
      {
        type: "p",
        text:
          "Metraja köşe dönüşleri ve kesim artıkları için pay ekleyin. Renk sıcaklığı seçimini siparişten önce netleştirin: aynı yüzeye sonradan farklı bir kademe eklemek, hattın tamamını sökmeyi gerektiren tek hatadır. Beyaz LED'lerde partiler arası küçük ton farkları olabildiği için tüm metrajı tek seferde ve aynı partiden isteyin.",
      },
      {
        type: "p",
        text:
          "Yanında gerekecek kalemleri de aynı siparişte çıkarın: dış mekan tipi 24V trafo, silikon uç kapağı, yapıştırıcı ve lehimsiz konnektör. Bu kalemlerden biri eksik kaldığında hat çekilmiş olsa bile iş teslim edilemez.",
      },
    ],
    faq: [
      { q: "3000K mı 6000K mı seçmeliyim?", a: "Ahşap, taş ve tuğla cephelerde, teras ve bahçe gibi oturulan alanlarda 3000K; tabela, kontur ve güvenlik hatlarında 6000K daha doğrudur." },
      { q: "3000K daha mı sönük?", a: "Lümen değeri yakın olsa da soğuk beyaza göre gözle biraz daha sönük algılanır. Okunurluk öncelikse 6000K seçin." },
      { q: "Böcek sorununu azaltır mı?", a: "Azaltır. Gece uçan böcekler maviye kaçan ışığa daha fazla toplanır; sıcak ton bu etkiyi gözle görülür ölçüde düşürür." },
      { q: "Pergole ve çardakta kullanılır mı?", a: "Uygundur. Profil içine veya altına monte edilir; su birikmeyen bir montaj ve kapatılmış uçlar şarttır." },
      { q: "Aynı cephede 3000K ve 6000K birlikte olur mu?", a: "Aynı yüzeyde olmamalı. İki ton yan yana geldiğinde gece leke gibi okunur." },
      { q: "Kaç metre tek hat çekilebilir?", a: "24V ve 12 W/m için pratik sınır 8-10 metredir. Uzun hatlarda bölüp iki uçtan besleyin." },
      { q: "Havuz kenarında kullanılabilir mi?", a: "Su sıçramasının olduğu ama suyun birikmediği noktalarda kullanılır. Su altında kalacak yerler için IP65 yeterli değildir." },
      { q: "Nötr beyaz seçeneği var mı?", a: "Var. Aynı üründe 4000K nötr beyaz kademesi de bulunur; karma cephelerde iki uç arasında güvenli bir orta yoldur." },
    ],
    related: ["dis-mekan-cob-beyaz-6000k", "ip65-10mm-cob-480-mt", "metal-kasa-dis-mekan-adaptor"],
    img: "/images/products/ip65-10mm-cob-480-mt.png",
    updated: "2026-09-08",
  },
  // ——— LED Trafo / Adaptör ——————————————————————————————————————
  {
    slug: "ultra-slim-ic-mekan-adaptor",
    categorySlug: "trafo-led-surucu",
    name: "Ultra Slim İç Mekan Adaptör",
    metaTitle: "Ultra Slim LED Adaptör Fiyatı | İnce Kasa Trafo",
    metaDesc:
      "Ultra slim iç mekan LED adaptör: 220V giriş, 12V/24V çıkış, dar kasalara sığan ince gövde. Kutu harf ve mobilya içi için toptan fiyat.",
    keywords: ["ultra slim adaptör", "ince led trafo", "iç mekan led adaptör", "slim trafo", "kutu harf trafosu"],
    h1: "Ultra Slim İç Mekan LED Adaptör",
    intro:
      "220V şebekeden düşük voltajlı DC çıkış veren, alışılmış adaptörlerden belirgin biçimde ince bir kasaya sahip iç mekan trafosu. Kutu harf içine, mobilya arkasına ve dar tavan boşluklarına sığması için tasarlanmıştır.",
    specs: [
      ["Giriş", "220V AC"],
      ["Çıkış", "12V / 24V DC (modele göre)"],
      ["Kasa", "Ultra ince metal"],
      ["Kullanım", "Yalnızca iç mekan / kapalı kasa"],
      ["Koruma", "Kısa devre ve aşırı yük koruması"],
      ["Sertifika", "CE"],
    ],
    useCases: [
      "Kutu harf ve tabela kasası içi",
      "Mobilya ve dolap arkası montaj",
      "Asma tavan ve kartonpiyer boşluğu",
      "Vitrin ve teşhir dolabı iç montajı",
    ],
    blocks: [
      { type: "h2", text: "Trafo seçiminin tek kuralı: pay bırakın" },
      {
        type: "p",
        text:
          "Bir adaptörü etiketindeki watt değerinde sürekli çalıştırmak, ömrünü kısaltmanın en hızlı yoludur. Toplam yükü hesapladıktan sonra en az %20, tercihen %30 pay ekleyin: 80 watt çeken bir hat için 100W değil 120W adaptör seçin. Sahada görülen erken trafo arızalarının çoğunun sebebi kalitesizlik değil, sınırda çalıştırılmasıdır. Hesabı [trafo amper hesaplama aracıyla](/araclar/trafo-amper-hesaplama/) doğrudan yapabilirsiniz.",
      },
      { type: "h2", text: "İnce kasanın bedeli: ısı" },
      {
        type: "p",
        text:
          "Aynı gücü daha küçük yüzeyden atmak zorunda olan bir kasa daha çok ısınır. Bu yüzden ultra slim adaptörler kapalı ve havasız bir kutuya sıkıştırılmamalı, mümkünse metal yüzeye temas edecek şekilde yerleştirilmelidir. Yer sorunu yoksa standart kasa modeller ısı açısından daha rahattır.",
      },
      { type: "h2", text: "Bu ürün dış mekan için değildir" },
      {
        type: "p",
        text:
          "Ultra slim kasa sızdırmaz değildir. Tabela dışarıda dursa bile trafo kapalı ve kuru bir kasada olmalıdır; nem alan bir noktaya konulursa kısa sürede arızalanır. Dışarıda kalacak beslemeler için [yağmur korumalı](/urunler/trafo-led-surucu/yagmur-korumali-epoksili-adaptor/) ya da metal kasa dış mekan modelleri kullanılır.",
      },
    ],
    faq: [
      { q: "Kaç watt adaptör almalıyım?", a: "Toplam yükü hesaplayıp %20-30 pay ekleyin. 80W çeken hat için 100-120W adaptör doğru seçimdir." },
      { q: "12V mi 24V mı almalıyım?", a: "Beslenecek ürünün voltajına göre. Uzun hatlarda 24V daha az kayıp verir; karşılaştırma [12V mu 24V mu](/blog/12v-mu-24v-mu-tabela-aydinlatma/) yazısında." },
      { q: "Bir adaptöre birden fazla hat bağlanır mı?", a: "Bağlanır, toplam yük kapasitenin altında kaldığı sürece. Hatları adaptörün çıkışında paralel birleştirin." },
      { q: "Adaptör ısınıyor, normal mi?", a: "Ilık olması normaldir, elle tutulamayacak kadar sıcaksa yük fazla ya da havalandırma yetersizdir." },
      { q: "Tabela dışarıdaysa trafo nereye konur?", a: "Kapalı ve kuru bir kasaya. İç mekan tipi adaptör doğrudan dışarı asılmaz." },
    ],
    related: ["metal-kasa-dis-mekan-adaptor", "yagmur-korumali-epoksili-adaptor", "meanwell-dis-mekan-plus-adaptor"],
    img: "/images/products/ultra-slim-ic-mekan-adaptor.jpg",
    updated: "2026-09-02",
  },
  {
    slug: "metal-kasa-dis-mekan-adaptor",
    categorySlug: "trafo-led-surucu",
    name: "Metal Kasa Dış Mekan Adaptör",
    metaTitle: "Metal Kasa LED Adaptör Fiyatı | Dış Mekan Trafo",
    metaDesc:
      "Metal kasa dış mekan LED adaptör: 220V giriş, 12V/24V çıkış, dış koşullara dayanıklı gövde. Tabela ve cephe aydınlatması için toptan fiyat.",
    keywords: ["dış mekan led adaptör", "metal kasa trafo", "tabela trafosu", "dış mekan led trafo", "dayanıklı led adaptör"],
    h1: "Metal Kasa Dış Mekan LED Adaptör",
    intro:
      "220V girişli, metal gövdeli dış mekan trafosu. Tabela ve cephe aydınlatmasında besleme ünitesinin dışarıda kalacağı kurulumlar için tasarlanmıştır.",
    specs: [
      ["Giriş", "220V AC"],
      ["Çıkış", "12V / 24V DC (modele göre)"],
      ["Kasa", "Metal, dış mekan tipi"],
      ["Kullanım", "Dış mekan"],
      ["Koruma", "Kısa devre, aşırı yük ve aşırı ısınma"],
      ["Sertifika", "CE"],
    ],
    useCases: [
      "Cephe üzeri ışıklı tabela beslemesi",
      "Totem ve yönlendirme tabelaları",
      "Saçak altı ve bahçe aydınlatması",
      "Trafonun kasa dışında kalacağı kurulumlar",
    ],
    blocks: [
      { type: "h2", text: "Dış mekan trafosu neden ayrı bir ürün" },
      {
        type: "p",
        text:
          "Bir LED sisteminin dışarıdaki en kırılgan parçası genellikle şerit değil, trafodur. İç mekan tipi adaptörlerin kasası neme kapalı değildir; içeri giren nem devre üzerinde korozyon yapar ve arıza aylar içinde gelir. Metal kasa dış mekan modelleri hem sızdırmazlık hem ısı dağılımı için tasarlanmıştır ve dışarıda kalacak her beslemede standart seçimdir.",
      },
      { type: "h2", text: "Montaj — su nereden girer" },
      {
        type: "p",
        text:
          "Dayanıklı kasa bile yanlış monte edilirse su alır. İki kural: trafoyu kablo çıkışları aşağı bakacak şekilde monte edin, ve kablo rakorlarını sıkın. Yukarı bakan bir kablo girişi, yağmur suyunu doğrudan kasanın içine taşır. Trafoyu suyun biriktiği bir zemine değil, duvara sabitleyin.",
      },
      { type: "h2", text: "Yük payı burada daha da önemli" },
      {
        type: "p",
        text:
          "Dışarıda trafo yaz aylarında zaten yüksek ortam sıcaklığında çalışır. Sınırda seçilmiş bir adaptör iç mekanda idare ederken dışarıda etmez. Dış mekan kurulumlarında payı %30'un altına düşürmeyin; hesabı [trafo amper hesaplama aracıyla](/araclar/trafo-amper-hesaplama/) yapabilirsiniz.",
      },
    ],
    faq: [
      { q: "Metal kasa adaptör doğrudan yağmurda kalabilir mi?", a: "Modelin IP sınıfına bağlıdır. Doğrudan yağmur alan konumlar için IP67 modeller ya da ek bir koruma kutusu önerilir." },
      { q: "Trafoyu tabela kasasının içine mi koymalıyım?", a: "Mümkünse evet — kasa içi hem korur hem hırsızlığa karşı güvenlidir. Kasa içinde ısınma varsa havalandırma bırakın." },
      { q: "Dış mekanda kaç yıl dayanır?", a: "Payla seçilmiş, kablo girişleri aşağı bakan ve suyun birikmediği bir montajda yıllarca sorunsuz çalışır." },
      { q: "12V mi 24V mı?", a: "Beslenecek ürüne göre. Uzun cephe hatlarında 24V daha az besleme noktası gerektirir." },
      { q: "Meanwell modelinden farkı nedir?", a: "Meanwell markalı modeller daha dar tolerans ve daha uzun beyan ömrü sunar; kritik ve ulaşılması zor kurulumlarda tercih edilir." },
    ],
    related: ["meanwell-dis-mekan-plus-adaptor", "yagmur-korumali-epoksili-adaptor", "ultra-slim-ic-mekan-adaptor"],
    img: "/images/products/metal-kasa-dis-mekan-adaptor-dinamo-light.png",
    updated: "2026-09-02",
  },
  {
    slug: "meanwell-dis-mekan-plus-adaptor",
    categorySlug: "trafo-led-surucu",
    name: "Meanwell Dış Mekan Plus+ Adaptör",
    metaTitle: "Meanwell LED Adaptör Fiyatı | IP67 Dış Mekan",
    metaDesc:
      "Meanwell dış mekan LED adaptör: 220V giriş, IP67 koruma, uzun ömür ve dar tolerans. Kritik tabela ve cephe kurulumları için toptan fiyat.",
    keywords: ["meanwell adaptör", "meanwell led trafo", "ip67 led adaptör", "marka led trafo", "dış mekan meanwell"],
    h1: "Meanwell Dış Mekan Plus+ Adaptör",
    intro:
      "220V girişli, IP67 sınıfı Meanwell dış mekan sürücüsü. Ulaşılması zor, servisin pahalı olduğu ve arızanın kabul edilemediği kurulumlarda tercih edilir.",
    specs: [
      ["Giriş", "220V AC"],
      ["Çıkış", "12V / 24V DC (modele göre)"],
      ["Koruma sınıfı", "IP67"],
      ["Marka", "Meanwell"],
      ["Koruma", "Kısa devre, aşırı yük, aşırı gerilim, aşırı ısınma"],
      ["Kullanım", "Ağır dış mekan koşulları"],
    ],
    useCases: [
      "Yüksek cephe ve çatı üstü kurulumlar",
      "Vinç veya iskele gerektiren, servisi pahalı noktalar",
      "Zincir mağaza ve kurumsal projeler",
      "Sürekli yanan, kesintiye tolerans olmayan tabelalar",
    ],
    blocks: [
      { type: "h2", text: "Marka trafo ne zaman kendini öder" },
      {
        type: "p",
        text:
          "Trafo, LED sisteminin en ucuz ama arızalandığında en pahalı parçasıdır. Yerdeki bir vitrinde trafo değiştirmek on dakikadır; on beş metre yükseklikteki bir tabelada aynı iş vinç, ekip ve trafik izni demektir. Marka ile isimsiz trafo arasındaki fiyat farkı, ikinci durumda tek bir servis ziyaretinden daha küçüktür. Karar ölçütü ürünün kendisi değil, arızanın maliyetidir.",
      },
      { type: "h2", text: "IP67 ne getirir" },
      {
        type: "p",
        text:
          "IP67, toza tam kapalı ve geçici olarak suya batmaya dayanıklı demektir. Çatıda su birikebilen, kar altında kalabilen ya da doğrudan yağmur alan konumlarda IP65 sınıfının ötesine geçmek gerekir. Sınıfların pratik karşılığı [IP65 mi IP67 mi](/blog/ip65-mi-ip67-mi-tabela-led/) yazısında karşılaştırılıyor.",
      },
      { type: "h2", text: "Koruma devreleri" },
      {
        type: "p",
        text:
          "Marka sürücülerin ayırt edici yanı yalnızca kasa değil, koruma devreleridir: aşırı gerilim, aşırı yük ve termal koruma birlikte çalışır. Şebeke dalgalanmasının yüksek olduğu bölgelerde bu devreler arkasındaki tüm LED hattını da korur — yani korunan yalnızca trafo değildir.",
      },
    ],
    faq: [
      { q: "Meanwell trafo gerçekten fark eder mi?", a: "Kolay erişilen bir vitrinde fark küçüktür. Servisi pahalı, yüksek ve kritik kurulumlarda fark doğrudan maliyettir." },
      { q: "IP67 trafo suya batabilir mi?", a: "Geçici batmaya dayanır, sürekli su altı kullanım için tasarlanmamıştır. Suyun biriktiği yerlere monte etmeyin." },
      { q: "Yine de pay bırakmalı mıyım?", a: "Evet. Marka trafo da sürekli tepe yükte çalıştırılırsa erken yaşlanır; %30 pay kuralı burada da geçerlidir." },
      { q: "Kısılabilir (dimlenebilir) modeli var mı?", a: "Meanwell'in dimlenebilir serileri vardır. Kısma gerekiyorsa sipariş öncesi model kodunu belirtin." },
      { q: "Garanti süresi ne kadar?", a: "Marka sürücüler tipik olarak daha uzun garantiyle gelir; kesin süre için model bazında bize danışın." },
    ],
    related: ["metal-kasa-dis-mekan-adaptor", "yagmur-korumali-epoksili-adaptor", "ultra-slim-ic-mekan-adaptor"],
    img: "/images/products/meanwell-dis-mekan-adaptor.jpg",
    updated: "2026-09-02",
  },
  {
    slug: "yagmur-korumali-epoksili-adaptor",
    categorySlug: "trafo-led-surucu",
    name: "Yağmur Korumalı Epoksili Adaptör",
    metaTitle: "Yağmur Korumalı LED Adaptör Fiyatı | Epoksili",
    metaDesc:
      "Yağmur korumalı epoksi dolgulu LED adaptör: 220V giriş, nem ve titreşime karşı dolgulu devre. Saçak altı ve yarı dış mekan için toptan fiyat.",
    keywords: ["yağmur korumalı adaptör", "epoksili led trafo", "rainproof adaptör", "yarı dış mekan trafo", "nem korumalı trafo"],
    h1: "Yağmur Korumalı Epoksili LED Adaptör",
    intro:
      "Devresi epoksi reçineyle doldurulmuş, yağmura karşı korumalı 220V girişli adaptör. Doğrudan yağmur almayan ama neme ve sıcaklık değişimine açık yarı dış mekan konumları için tasarlanmıştır.",
    specs: [
      ["Giriş", "220V AC"],
      ["Çıkış", "12V / 24V DC (modele göre)"],
      ["Dolgu", "Epoksi reçine"],
      ["Koruma", "Yağmura karşı korumalı (rainproof)"],
      ["Kullanım", "Yarı dış mekan / saçak altı"],
      ["Sertifika", "CE"],
    ],
    useCases: [
      "Saçak altı ve balkon beslemeleri",
      "Yarı açık kasa içi montajlar",
      "Nemin yoğun olduğu iç mekanlar",
      "Titreşimin bulunduğu montaj noktaları",
    ],
    blocks: [
      { type: "h2", text: "Epoksi dolgu ne yapar" },
      {
        type: "p",
        text:
          "Epoksi, devre kartını ve bileşenleri boşluk bırakmadan sarar. Bunun iki somut faydası vardır: nem devrenin üzerinde yoğuşamaz, ve titreşim lehim noktalarını yormaz. Sıcaklığın gün içinde belirgin biçimde değiştiği yerlerde asıl aşındırıcı unsur yağmur değil, kasa içinde yoğuşan nemdir — dolgulu adaptörler tam bu sorunu ortadan kaldırır.",
      },
      { type: "h2", text: "Rainproof, waterproof değildir" },
      {
        type: "p",
        text:
          "Bu ürün yağmura karşı korumalıdır; suya batmaya ya da sürekli su almaya karşı değil. Doğrudan ve sürekli yağmur alan, su birikebilen konumlarda IP67 sınıfı bir modele geçin. Kabaca sıralama şöyledir: kapalı kasa içi için ince kasa iç mekan adaptör, saçak altı ve nemli ortam için epoksili yağmur korumalı, açıkta ve zorlu koşullar için IP67.",
      },
      { type: "h2", text: "Isı tarafı" },
      {
        type: "p",
        text:
          "Dolgu ısıyı kasaya taşır, yani kasa daha çabuk ısınır — bu beklenen davranıştır. Yine de adaptörü havasız bir boşluğa sıkıştırmayın ve yük payını %25-30 tutun.",
      },
    ],
    faq: [
      { q: "Epoksili adaptör tamir edilebilir mi?", a: "Pratikte edilemez; dolgu devreye erişimi kapatır. Bu, dayanıklılık karşılığında kabul edilen bir takastır." },
      { q: "Doğrudan yağmur alan yere asabilir miyim?", a: "Önerilmez. Doğrudan yağmur ve su birikmesi olan konumlarda IP67 sınıfı model kullanın." },
      { q: "İç mekanda kullanmakta sakınca var mı?", a: "Yok. Nemli iç mekanlarda ve titreşimli montajlarda standart adaptörden daha uzun ömürlüdür." },
      { q: "Kasa çok ısınıyor, arızalı mı?", a: "Dolgulu modellerde kasanın ılık-sıcak olması normaldir. Elle tutulamayacak sıcaklık yük fazlalığına işaret eder." },
      { q: "Kaç watt seçmeliyim?", a: "Toplam yükün %25-30 üstü. Hesabı [trafo amper hesaplama aracıyla](/araclar/trafo-amper-hesaplama/) yapabilirsiniz." },
    ],
    related: ["metal-kasa-dis-mekan-adaptor", "meanwell-dis-mekan-plus-adaptor", "ultra-slim-ic-mekan-adaptor"],
    img: "/images/products/yagmur-korumali-trafo-dinamo-light.png",
    updated: "2026-09-02",
  },
  // ——— LED Kontrol Üniteleri ————————————————————————————————————
  {
    slug: "44-tuslu-rgb-kontrol-cihazi",
    categorySlug: "led-kontrol-uniteleri",
    name: "44 Tuşlu RGB Kontrol Cihazı",
    metaTitle: "44 Tuşlu RGB Kontrol Cihazı Fiyatı | RF Kumanda",
    metaDesc:
      "44 tuşlu RGB kontrol cihazı: 12-24V, RF uzaktan kumanda, hazır renkler ve geçiş modları. RGB şerit ve modül için toptan fiyat.",
    keywords: ["44 tuşlu rgb kontrol", "rgb kumanda", "led kontrol cihazı", "rf rgb kontrolör", "rgb şerit kumandası"],
    h1: "44 Tuşlu RGB Kontrol Cihazı",
    intro:
      "12-24V RGB şerit ve modülleri süren, RF kumandalı kontrol ünitesi. 44 tuş, hazır renkleri tek dokunuşla seçmeyi ve geçiş modlarını doğrudan çağırmayı sağlar.",
    specs: [
      ["Besleme", "12-24V DC"],
      ["Kumanda", "RF — duvar arkasından çalışır"],
      ["Tuş sayısı", "44"],
      ["Çıkış", "RGB — 3 kanal"],
      ["Modlar", "Sabit renk, geçiş, flash, strobe, fade"],
      ["Bağlantı", "Trafo ile şerit arasına seri"],
    ],
    useCases: [
      "RGB şerit ve modül hatlarının kontrolü",
      "Kafe, bar ve mağaza dekoratif aydınlatması",
      "Kumandanın kullanıcıda kalacağı kurulumlar",
      "Ünitenin gizli, kumandanın erişilebilir olduğu montajlar",
    ],
    blocks: [
      { type: "h2", text: "RF ile kızılötesi arasındaki fark" },
      {
        type: "p",
        text:
          "Ucuz kontrolörlerin çoğu kızılötesi kumandayla gelir ve çalışması için kumandanın alıcıyı görmesi gerekir. Ünite tavan boşluğuna ya da kasa içine gizlendiğinde bu imkânsız hâle gelir. RF kumanda radyo frekansıyla çalışır: duvar ve tavan arkasından, tipik olarak 15-20 metre menzille komut geçirir. Kontrolörün gizleneceği her kurulumda RF tercih edilmelidir.",
      },
      { type: "h2", text: "44 tuş neyi kolaylaştırır" },
      {
        type: "p",
        text:
          "24 tuşlu modellerde renge ulaşmak için tuşlar arasında gezmek gerekir. 44 tuşlu kumandada yaygın renkler doğrudan birer tuştur ve DIY hafıza tuşlarıyla özel renk kaydedilebilir. Rengin gün içinde sık değiştiği işletmelerde bu, personelin cihazı gerçekten kullanmasıyla kullanmaması arasındaki farktır.",
      },
      { type: "h2", text: "Kapasite — asıl seçim ölçütü" },
      {
        type: "p",
        text:
          "Kontrolör seçiminde tuş sayısından önce amper kapasitesine bakın. Toplam yük kanal kapasitesini aşarsa ünite ısınır, renkler kararsızlaşır ve cihaz ömrünü tamamlar. Sınır aşılıyorsa araya RGB repeater konur. Ayrıntı [RGB LED kontrol ünitesi seçimi](/blog/rgb-led-kontrol-unitesi-secimi/) yazısında.",
      },
    ],
    faq: [
      { q: "Kontrolör trafodan önce mi sonra mı bağlanır?", a: "Sonra. Sıra şöyledir: 220V → trafo → kontrol ünitesi → RGB şerit/modül." },
      { q: "Kaç metre şerit sürebilir?", a: "Ünitenin amper değerine bağlıdır. 6A'lık bir ünite 12V'ta yaklaşık 70W, yani 7-8 metre standart RGB şerit taşır." },
      { q: "Kumanda kaybolursa ne olur?", a: "Yedek RF kumanda eşleştirilebilir. Kumandanın kaybolma ihtimali yüksekse duvara sabit dokunmatik panel veya Bluetooth ünite daha güvenlidir." },
      { q: "Pixel şerit sürer mi?", a: "Sürmez. Adreslenebilir pixel şeritler için [pixel kontrol cihazı](/urunler/led-kontrol-uniteleri/pixel-rgb-kontrol-cihazi-sp110e/) gerekir." },
      { q: "İki hattı ayrı ayrı kontrol edebilir miyim?", a: "Aynı üniteye bağlı hatlar hep aynı rengi gösterir. Bağımsız kontrol için her hatta ayrı ünite gerekir." },
    ],
    related: ["bluetooth-rgb-kontrol-unitesi", "pixel-rgb-kontrol-cihazi-sp110e", "ip20-rgb-serit-led"],
    img: "/images/products/44-tuslu-rgb-kontrol-cihazi.jpg",
    updated: "2026-09-02",
  },
  {
    slug: "bluetooth-rgb-kontrol-unitesi",
    categorySlug: "led-kontrol-uniteleri",
    name: "Bluetooth RGB Kontrol Ünitesi",
    metaTitle: "Bluetooth RGB Kontrol Ünitesi Fiyatı | Telefonla",
    metaDesc:
      "Bluetooth RGB kontrol ünitesi: 12-24V, telefon uygulamasıyla renk, parlaklık ve zamanlayıcı kontrolü. RGB şerit ve modül için toptan fiyat.",
    keywords: ["bluetooth rgb kontrol", "telefonla led kontrol", "akıllı led kontrolör", "rgb uygulama kontrol", "bluetooth led ünite"],
    h1: "Bluetooth RGB Kontrol Ünitesi",
    intro:
      "12-24V RGB hatları telefon uygulamasından yöneten kontrol ünitesi. Kumanda taşımayı ortadan kaldırır; renk, parlaklık ve zamanlayıcı ayarları uygulama üzerinden yapılır.",
    specs: [
      ["Besleme", "12-24V DC"],
      ["Bağlantı", "Bluetooth"],
      ["Kontrol", "Telefon uygulaması (iOS / Android)"],
      ["Çıkış", "RGB — 3 kanal"],
      ["Özellikler", "Renk paleti, parlaklık, zamanlayıcı, müzik modu"],
      ["Menzil", "Tipik 10-15 m, kapalı alan"],
    ],
    useCases: [
      "Kumandanın kaybolduğu işletmeler",
      "Renk ve parlaklığın ince ayarlandığı dekoratif işler",
      "Zamanlayıcı ile otomatik açılıp kapanması istenen hatlar",
      "Müziğe tepkili aydınlatma istenen mekanlar",
    ],
    blocks: [
      { type: "h2", text: "Kumandalı üniteye göre ne kazandırır" },
      {
        type: "p",
        text:
          "Kumandalı ünitelerde renk seçimi kumandanın üzerindeki sabit tuşlarla sınırlıdır ve kumanda kaybolduğunda sistem yönetilemez hâle gelir. Bluetooth ünitede kontrol telefondadır: renk paletinden istenen tonu seçebilir, parlaklığı kademesiz ayarlayabilir ve saat kurabilirsiniz. Renk tonunun tam tutturulması gereken kurumsal işlerde bu esneklik belirleyicidir.",
      },
      { type: "h2", text: "Menzil ve çoklu cihaz" },
      {
        type: "p",
        text:
          "Bluetooth menzili kapalı alanda tipik olarak 10-15 metredir ve kalın duvarlar bunu düşürür. Ünite uzak bir tavan boşluğundaysa telefonun ona ulaşamama ihtimalini hesaba katın; bu durumda RF kumandalı bir model ya da WiFi destekli ünite daha uygundur. Aynı mekânda birden fazla ünite varsa her biri ayrı ayrı bağlanır — tek uygulamadan hepsi aynı anda yönetilmez.",
      },
      { type: "h2", text: "Kapasite ve bağlantı sırası" },
      {
        type: "p",
        text:
          "Diğer tüm kontrolörlerde olduğu gibi ünitenin amper kapasitesi toplam yükün üzerinde olmalıdır. Bağlantı sırası değişmez: trafo, ardından kontrol ünitesi, ardından şerit. Yük fazlaysa araya repeater girer.",
      },
    ],
    faq: [
      { q: "İnternet bağlantısı gerekir mi?", a: "Hayır, Bluetooth doğrudan telefonla ünite arasında çalışır. Uzaktan (evden dışarıdan) kontrol için WiFi destekli model gerekir." },
      { q: "Birden fazla telefondan kontrol edilir mi?", a: "Ünite aynı anda tek cihazla eşleşir; diğer telefon bağlanmadan önce mevcut bağlantının kesilmesi gerekir." },
      { q: "Kaç metre şerit sürebilir?", a: "Ünitenin amper değerine bağlı. Toplam yükü hesaplayıp kapasitenin altında kaldığından emin olun." },
      { q: "Pixel şerit sürer mi?", a: "Standart RGB üniteleri sürmez. Pixel için [SP110E gibi pixel üniteler](/urunler/led-kontrol-uniteleri/pixel-rgb-kontrol-cihazi-sp110e/) kullanılır." },
      { q: "Elektrik kesilirse ayarlar kaybolur mu?", a: "Çoğu ünite son durumu hafızada tutar ve enerji gelince aynı renkte açılır." },
    ],
    related: ["44-tuslu-rgb-kontrol-cihazi", "pixel-rgb-kontrol-cihazi-sp110e", "ip20-rgb-serit-led"],
    img: "/images/products/bluetooth-rgb-kontrol-unitesi.jpg",
    updated: "2026-09-02",
  },
  {
    slug: "pixel-rgb-kontrol-cihazi-sp110e",
    categorySlug: "led-kontrol-uniteleri",
    name: "Pixel RGB Kontrol Cihazı (SP110E)",
    metaTitle: "SP110E Pixel Kontrol Cihazı Fiyatı | Bluetooth",
    metaDesc:
      "SP110E pixel RGB kontrol cihazı: 5-24V, Bluetooth, adreslenebilir şeritler için akan ve animasyonlu efektler. Toptan fiyat, aynı gün kargo.",
    keywords: ["sp110e", "pixel kontrol cihazı", "adreslenebilir led kontrolör", "bluetooth pixel kontrol", "ws2812 kontrol"],
    h1: "Pixel RGB Kontrol Cihazı (SP110E)",
    intro:
      "5-24V adreslenebilir pixel şeritleri Bluetooth üzerinden telefondan yöneten kompakt kontrol cihazı. Akan, dalgalanan ve sıralı efektlerin kurulmasını sağlar.",
    specs: [
      ["Besleme", "5-24V DC"],
      ["Bağlantı", "Bluetooth"],
      ["Tip", "Adreslenebilir pixel kontrolörü"],
      ["Protokol desteği", "Yaygın pixel çipleri (uygulamadan seçilir)"],
      ["Kontrol", "Telefon uygulaması"],
      ["Boyut", "Kompakt — şerit ucuna gizlenebilir"],
    ],
    useCases: [
      "Pixel şerit hatlarının efekt kontrolü",
      "Akan ışık ve gökkuşağı geçişli dekoratif işler",
      "Sahne, etkinlik ve vitrin animasyonları",
      "Küçük ve orta ölçekli pixel kurulumları",
    ],
    blocks: [
      { type: "h2", text: "Pixel kontrolörü neden ayrı bir cihaz" },
      {
        type: "p",
        text:
          "Sıradan RGB kontrolörü üç renk kanalını aynı anda sürer; hattın tamamı tek renktir. Pixel şeritte ise tek bir veri hattı üzerinden her LED'e sırayla ayrı komut gönderilir. Bu tamamen farklı bir sürüş biçimidir — RGB kontrolörü pixel şeridi çalıştıramaz, pixel kontrolörü de sıradan RGB şeridi süremez. İki sistemi ürün seçerken baştan ayırmak gerekir.",
      },
      { type: "h2", text: "Kurulumda dikkat edilecek üç şey" },
      {
        type: "p",
        text:
          "Birincisi çip protokolüdür: uygulamadan şeridin çip tipi seçilmezse efektler hatalı ya da hiç çalışmaz. İkincisi pixel sayısıdır; uygulamaya gerçek pixel adedi girilmelidir, yoksa efekt hattın ortasında biter. Üçüncüsü veri yönüdür — şerit üzerindeki oklar kontrolörden uzağa bakmalıdır, ters bağlanan hat hiç yanmaz.",
      },
      { type: "h2", text: "Kapasite ve besleme" },
      {
        type: "p",
        text:
          "SP110E veri sürücüsüdür; şeridin gücünü kendisi taşımaz, besleme trafodan gelir. Uzun hatlarda şeridi yalnızca kontrolör ucundan beslemeyin, ara noktalardan da güç verin — aksi hâlde hattın sonunda hem parlaklık düşer hem renkler kayar. Bağlantı ve efekt ayrıntıları için [pixel şerit](/urunler/led-serit/ip20-pixel-serit-led/) sayfasına da bakabilirsiniz.",
      },
    ],
    faq: [
      { q: "SP110E sıradan RGB şerit sürer mi?", a: "Sürmez. Yalnızca adreslenebilir pixel şeritler içindir." },
      { q: "Kaç pixel sürebilir?", a: "Cihazın desteklediği pixel sayısı uygulamada tanımlanır; büyük kurulumlarda hattı bölüp birden fazla kontrolör kullanmak gerekir." },
      { q: "Efektler yanlış çalışıyor, sebebi ne?", a: "Neredeyse her zaman uygulamadan yanlış çip protokolü seçilmiştir. Şeridin çip tipini kontrol edip yeniden seçin." },
      { q: "Hattın sonunda renkler soluyor?", a: "Besleme yetersizdir. Şeridi ara noktalardan da trafoya bağlayın." },
      { q: "İnternet gerekir mi?", a: "Hayır, Bluetooth doğrudan bağlanır. Menzil sınırlı olduğu için kontrolörü ulaşılabilir bir noktaya yerleştirin." },
    ],
    related: ["ip20-pixel-serit-led", "bluetooth-rgb-kontrol-unitesi", "44-tuslu-rgb-kontrol-cihazi"],
    img: "/images/products/pixel-rgb-kontrol-cihazi-sp110e.png",
    updated: "2026-09-02",
  },
  // ——— Point LED ————————————————————————————————————————————————
  {
    slug: "30mm-sapkali-point-led",
    categorySlug: "point-led",
    name: "30mm Şapkalı Point LED",
    metaTitle: "30mm Şapkalı Point LED Fiyatı | Tabela Nokta LED",
    metaDesc:
      "30mm şapkalı point LED: 12V, IP65, geniş açılı difüzör şapka ile yumuşak nokta ışığı. Tabela yüzü ve kontur dizilimi için toptan fiyat.",
    keywords: ["point led", "30mm point led", "şapkalı point led", "tabela nokta led", "pikselli tabela"],
    h1: "30mm Şapkalı Point LED",
    intro:
      "12V, IP65, 30 mm çapında difüzör şapkalı nokta LED. Şapkası ışığı geniş açıya yayar; tek tek noktaların dizildiği tabelalarda göz alıcı ama sert olmayan bir ışık verir.",
    specs: [
      ["Çap", "30 mm"],
      ["Besleme", "12V DC"],
      ["Koruma sınıfı", "IP65"],
      ["Optik", "Şapkalı difüzör, geniş açı"],
      ["Montaj", "Delik geçmeli, arkadan sabitlemeli"],
      ["Bağlantı", "Zincir — uç uca seri"],
    ],
    useCases: [
      "Nokta dizilimli tabela ve kontur yazılar",
      "Lunapark, eğlence ve gösteri tabelaları",
      "Bina ve çatı kontur işaretlemesi",
      "Yönlendirme ve dikkat çekme panoları",
    ],
    blocks: [
      { type: "h2", text: "Point LED nerede kullanılır" },
      {
        type: "p",
        text:
          "Modül ve şerit bir yüzeyi arkadan aydınlatır; point LED ise noktanın kendisi görünsün diye kullanılır. Harfin konturu boyunca dizilen noktalar, uzaktan kesikli bir ışık hattı oluşturur — klasik lunapark ve sinema tabelası görüntüsü budur. Yüzey aydınlatmasının aksine burada amaç homojenlik değil, tek tek okunan parlak noktalardır. Konu bütünüyle [point LED nedir](/blog/point-led-nedir/) yazısında anlatılıyor.",
      },
      { type: "h2", text: "Şapkanın işlevi" },
      {
        type: "p",
        text:
          "Şapkasız point LED dar açıyla ve sert bir parlaklıkla yanar; yandan bakıldığında sönük görünür. Difüzör şapka ışığı geniş bir açıya yayar, böylece nokta hem yandan da okunur hem göze batmayan yumuşak bir parlaklık verir. Dar bir cephede yandan geçen izleyicinin de görmesi bekleniyorsa şapkalı model tercih edilmelidir.",
      },
      { type: "h2", text: "Dizilim ve besleme" },
      {
        type: "p",
        text:
          "Noktalar uç uca zincir hâlinde bağlanır ve aralık, konturun uzaktan sürekli görünmesini sağlayacak kadar sık tutulur — tipik olarak 10-15 cm. Zincir uzunluğunun üretici sınırını aşmayın; 12V hatlarda uzun zincirlerin sonu sönük kalır. Uzun konturlarda hattı bölüp iki uçtan besleyin.",
      },
    ],
    faq: [
      { q: "30mm ile 50mm point LED arasında nasıl seçim yapılır?", a: "İzleme mesafesine göre. Yakından okunan işlerde 30mm yeterlidir; yüksek ve uzak kurulumlarda 50mm daha görünür." },
      { q: "Nokta aralığı ne kadar olmalı?", a: "Tipik olarak 10-15 cm. Uzaktan sürekli bir hat görünmesi isteniyorsa aralığı kısaltın." },
      { q: "Bir hatta kaç adet bağlanabilir?", a: "Üreticinin zincir sınırını aşmayın. Uzun konturlarda hattı ikiye bölüp iki uçtan beslemek en güvenli yöntemdir." },
      { q: "Point LED dış mekanda kullanılır mı?", a: "IP65 olduğu için kullanılır. Montaj deliklerinin sızdırmaz kapatılması ve trafonun dış mekan tipi olması gerekir." },
      { q: "Renk seçeneği var mı?", a: "Tek renk ve RGB modeller bulunur; RGB kullanımı için ayrıca bir [kontrol ünitesi](/urunler/led-kontrol-uniteleri/) gerekir." },
    ],
    related: ["50mm-point-led", "1-2w-modul-led-fortune-light", "44-tuslu-rgb-kontrol-cihazi"],
    img: "/images/products/30mm-sapkali-point-led.png",
    updated: "2026-09-02",
  },
  {
    slug: "50mm-point-led",
    categorySlug: "point-led",
    name: "50mm Point LED",
    metaTitle: "50mm Point LED Fiyatı | Yüksek Parlaklık Nokta",
    metaDesc:
      "50mm point LED: 12V, IP65, büyük çap ve yüksek parlaklık. Uzaktan okunacak kontur ve büyük ölçekli tabelalar için toptan fiyat.",
    keywords: ["50mm point led", "büyük point led", "yüksek parlaklık nokta led", "uzaktan görünen tabela led", "kontur nokta led"],
    h1: "50mm Point LED",
    intro:
      "12V, IP65, 50 mm çapında yüksek parlaklıklı nokta LED. Büyük çapı ve güçlü ışığıyla uzaktan ve yüksekten okunacak konturlarda kullanılır.",
    specs: [
      ["Çap", "50 mm"],
      ["Besleme", "12V DC"],
      ["Koruma sınıfı", "IP65"],
      ["Işık", "Yüksek parlaklık"],
      ["Montaj", "Delik geçmeli"],
      ["Bağlantı", "Zincir — uç uca seri"],
    ],
    useCases: [
      "Yüksek bina ve çatı konturu",
      "Uzaktan okunan büyük ölçekli tabelalar",
      "Otoyol ve cadde kenarı panolar",
      "Aralığın açık tutulduğu geniş konturlar",
    ],
    blocks: [
      { type: "h2", text: "Büyük çap ne kazandırır" },
      {
        type: "p",
        text:
          "Point LED'de görünürlüğü belirleyen iki şey vardır: parlaklık ve noktanın fiziksel büyüklüğü. Mesafe arttıkça küçük çaplı noktalar birbirine karışır ve kontur bulanıklaşır. 50 mm çap, uzaktan bakıldığında da tek tek ayırt edilebilen bir nokta bırakır; ayrıca aynı görünürlüğü daha az adetle sağladığı için geniş konturlarda toplam maliyeti aşağı çekebilir.",
      },
      { type: "h2", text: "Aralık ve adet dengesi" },
      {
        type: "p",
        text:
          "Büyük nokta, aralığın açılmasına izin verir: 30 mm modelde 10-12 cm uygun olan aralık, 50 mm modelde 15-20 cm'ye çıkabilir. Karar izleme mesafesine göre verilir. Ölçüyü sahada doğrulamanın en güvenilir yolu, birkaç noktayı planlanan aralıkla dizip gerçek izleme mesafesinden bakmaktır.",
      },
      { type: "h2", text: "Yük ve montaj" },
      {
        type: "p",
        text:
          "Yüksek parlaklık daha fazla akım demektir; aynı zincir uzunluğunda 30 mm modelden daha çok yük çeker. Trafo hesabını bu ürünün kendi watt değerinden yapın ve [trafo amper hesaplama aracıyla](/araclar/trafo-amper-hesaplama/) doğrulayın. Yüksekteki kurulumlarda montaj deliklerinin sızdırmaz kapatılması ve kabloların rüzgârda salınmayacak biçimde sabitlenmesi gerekir.",
      },
    ],
    faq: [
      { q: "50mm point LED yakın mesafede fazla parlak olur mu?", a: "Olabilir. Vitrin ve yakından bakılan işlerde 30mm şapkalı model daha dengelidir." },
      { q: "Nokta aralığı ne kadar olmalı?", a: "İzleme mesafesine göre 15-20 cm iyi bir başlangıçtır. Uzaklaştıkça aralık açılabilir." },
      { q: "Kaç adet tek hatta bağlanır?", a: "Üreticinin zincir sınırı geçerlidir ve yüksek watt nedeniyle 30mm modelden daha kısadır. Uzun hatlarda bölüp iki uçtan besleyin." },
      { q: "Rüzgârlı yüksek cephelerde sorun olur mu?", a: "Nokta gövdeleri sabitlendiği sürece sorun olmaz; asıl dikkat edilecek nokta kabloların serbest salınmamasıdır." },
      { q: "Pixel modeli var mı?", a: "50mm pixel point LED modelleri bulunur; sıralı ve akan efektler için pixel kontrol cihazı gerekir." },
    ],
    related: ["30mm-sapkali-point-led", "metal-kasa-dis-mekan-adaptor", "pixel-rgb-kontrol-cihazi-sp110e"],
    img: "/images/products/point-led-50mm.png",
    updated: "2026-09-02",
  },
  // ——— Kesit Aydınlatma ————————————————————————————————————————
  {
    slug: "ip65-kesitten-aydinlatma-led-bar",
    categorySlug: "kesit-aydinlatma-led",
    name: "IP65 Kesitten Aydınlatma LED Bar",
    metaTitle: "IP65 Kesit Aydınlatma LED Bar Fiyatı | Kanal Harf",
    metaDesc:
      "IP65 kesitten aydınlatma LED bar: 12V, hazır bar formu, kanal harf kesitini dıştan aydınlatır. Dış mekan tabela için toptan fiyat.",
    keywords: ["kesit aydınlatma led", "kesitten aydınlatma", "led bar kesit", "kanal harf kesit led", "ip65 led bar"],
    h1: "IP65 Kesitten Aydınlatma LED Bar",
    intro:
      "12V, IP65, hazır bar formunda kesit aydınlatma çözümü. Kanal harfin yüzünü değil kesitini aydınlatır; harfin kenarı boyunca ince ve keskin bir ışık hattı bırakır.",
    specs: [
      ["Besleme", "12V DC"],
      ["Koruma sınıfı", "IP65 — dış mekan"],
      ["Form", "Hazır sert bar"],
      ["Kullanım", "Kanal harf kesiti, dış mekan"],
      ["Montaj", "Kesit içine yerleştirme"],
      ["Boy seçenekleri", "50 cm / 100 cm"],
    ],
    useCases: [
      "Kanal harflerin kesitten aydınlatılması",
      "Ön yüzü kapalı, kenarı ışıklı harf tasarımları",
      "Dış mekan kurumsal tabela detayları",
      "İnce ve keskin ışık hattı istenen mimari işler",
    ],
    blocks: [
      { type: "h2", text: "Kesit aydınlatma neyi farklı yapar" },
      {
        type: "p",
        text:
          "Klasik kutu harfte ışık harfin ön yüzünden çıkar ve harf bütünüyle parlar. Kesit aydınlatmada ise ön yüz kapalıdır — genellikle boyalı metal ya da kompozit — ve ışık yalnızca harfin kenar kesitinden dışarı verilir. Sonuç, gündüz sade ve kurumsal duran, gece kenarları çizgi hâlinde ışıyan bir harftir. Kurumsal kimlik tabelalarında son yılların en çok istenen görünümüdür.",
      },
      { type: "h2", text: "Hazır bar mı, şerit mi" },
      {
        type: "p",
        text:
          "Aynı iş esnek şeritle de yapılabilir ama kesit dar bir kanaldır ve şerit orada hizada durmakta zorlanır; ışık kaçar, hat dalgalanır. Sert bar formu kesite oturur ve hizayı kendi tutar. Kavisli harflerde bar kullanılamaz, orada esnek çözümlere dönülür. Seçimin tamamı [kesit aydınlatma LED rehberinde](/blog/kesit-aydinlatma-led-rehberi/).",
      },
      { type: "h2", text: "Işık kaçağı — işin kalitesini belirleyen detay" },
      {
        type: "p",
        text:
          "Kesit aydınlatmanın temiz görünmesi, ışığın yalnızca istenen kenardan çıkmasına bağlıdır. Harfin arka yüzeyinden ya da birleşim noktalarından sızan ışık, duvarda istenmeyen bir hale oluşturur. Montajda tüm boşlukların kapatılması ve barın kesit içinde geriye kaçmayacak biçimde sabitlenmesi gerekir.",
      },
      {
        type: "p",
        text:
          "IP65 gövde dış mekana uygundur; besleme kablosunun harfe girdiği noktanın sızdırmaz kapatılması ve trafonun dış mekan tipi olması bu üründe de geçerlidir.",
      },
    ],
    faq: [
      { q: "Kesit aydınlatma kutu harf yerine geçer mi?", a: "Farklı bir görünümdür, ikame değildir. Kutu harf bütün yüzeyi ışıtır; kesit aydınlatma yalnızca kenar çizgisini verir." },
      { q: "Kavisli harflerde kullanılır mı?", a: "Sert bar kavise oturmaz. Kavisli harflerde esnek kesit çözümleri ya da IP65 şerit tercih edilir." },
      { q: "50 cm mi 100 cm mi almalıyım?", a: "Harf boylarınıza göre; fireyi azaltmak için ölçüleri planlayıp iki boyu karışık kullanmak yaygındır." },
      { q: "Işık duvara vuruyor, nasıl engellenir?", a: "Barın kesit içindeki konumunu geri çekin ve harf gövdesindeki boşlukları kapatın. Kaçağın kaynağı neredeyse her zaman montaj boşluğudur." },
      { q: "Hangi trafo gerekir?", a: "12V, dış mekan tipi ve %25-30 paylı. Toplam yükü [trafo amper hesaplama aracıyla](/araclar/trafo-amper-hesaplama/) çıkarabilirsiniz." },
    ],
    related: ["1-5w-eco-mercekli-modul-led", "ip65-8mm-dis-mekan-drop-silikon-serit-led", "metal-kasa-dis-mekan-adaptor"],
    img: "/images/products/led-bar-kesitten-aydinlatma-50cm.jpg",
    updated: "2026-09-02",
  },
  {
    slug: "30a-potansli-dimmer",
    categorySlug: "led-kontrol-uniteleri",
    name: "30A Potanslı Dimmer",
    metaTitle: "LED Dimmer 30A Fiyatı | Potanslı Parlaklık Ayarı",
    metaDesc:
      "30A potanslı LED dimmer: 12-24V DC, kademesiz parlaklık ayarı, uzun metrajlı şerit ve COB hatları için. Toptan fiyat, aynı gün kargo.",
    keywords: ["led dimmer", "30a dimmer", "potanslı dimmer", "şerit led dimmer", "led parlaklık ayarı"],
    h1: "30A Potanslı Dimmer",
    intro:
      "12-24V hatlarda ışık seviyesini düğmeyle kademesiz ayarlayan yüksek kapasiteli dimmer. 30A'lik çıkışıyla uzun metrajlı şerit ve COB hatlarını tek cihazdan sürer.",
    specs: [
      ["Besleme", "12-24V DC"],
      ["Akım kapasitesi", "30A"],
      ["Kontrol", "Manuel potansiyometre"],
      ["Dimleme", "Kademesiz (PWM)"],
      ["Bağlantı", "Klemens"],
      ["Ürün kodu", "DGDIMC.FT.030MA"],
    ],
    useCases: [
      "Uzun metrajlı şerit LED hatları",
      "COB şerit aydınlatmaları",
      "Tabela ve reklam uygulamalarında ışık dengeleme",
      "Vitrin ve mağaza içi genel aydınlatma",
    ],
    blocks: [
      { type: "h2", text: "Dimmer amperi nasıl seçilir" },
      {
        type: "p",
        text:
          "Dimmer seçiminde tek belirleyici, hattın çektiği akımdır. Toplam watt'ı besleme voltajına bölerek amperi bulun: 24V'luk 40 metrelik 14.4W/m şerit 576W çeker, bu da 24A eder — 30A'lik dimmer buraya oturur, 8A'lik cihaz yanar. Hesabı elle yapmak istemezseniz [trafo amper hesaplama aracı](/araclar/trafo-amper-hesaplama/) aynı sayıyı çıkarır.",
      },
      { type: "h2", text: "Dimmer trafonun yerine geçmez" },
      {
        type: "p",
        text:
          "Sık karşılaşılan hata, dimmeri trafo sanmaktır. Dimmer 220V'u dönüştürmez; zaten 12V ya da 24V'a düşmüş hattın üzerine, trafo ile şerit arasına takılır. Sıralama şöyledir: 220V → trafo → dimmer → şerit. Trafonun amperi de dimmerinkinden bağımsız olarak ayrıca hesaplanır ve %20-25 pay bırakılır.",
      },
      { type: "h2", text: "Potanslı mı, kumandalı mı" },
      {
        type: "p",
        text:
          "Potanslı dimmer düğmeyle ayarlanır; bir kez kurulup nadiren değiştirilen işlerde en güvenilir çözümdür, pil ve sinyal derdi yoktur. Kumandalı dimmer erişilmesi zor noktalarda işe yarar ama alıcı-verici arızası bir arıza kalemi daha ekler. Tabela ve vitrin işlerinde ışık seviyesi genellikle bir kez ayarlanıp bırakıldığı için potanslı tip tercih edilir. Hat 30A'i aşıyorsa dimmeri büyütmek yerine hattı bölün ve araya [RGB repeater](/urunler/led-kontrol-uniteleri/24a-rgb-repeater/) mantığında ikinci bir sürücü katın.",
      },
    ],
    faq: [
      { q: "30A dimmer kaç metre şerit sürer?", a: "Voltaja ve şeridin W/m değerine bağlı. 24V 14.4W/m şeritte yaklaşık 50 metre, 12V 9.6W/m şeritte yaklaşık 37 metre. Hesabı hattın toplam watt'ından yapın." },
      { q: "Dimmer trafodan önce mi sonra mı bağlanır?", a: "Sonra. Sıralama 220V → trafo → dimmer → şerit şeklindedir." },
      { q: "RGB şeritte kullanılır mı?", a: "Kullanılmaz. Bu dimmer tek renk hatlar içindir; RGB şerit üç kanallı kontrol cihazı ister." },
      { q: "Dimmer ısınıyor, normal mi?", a: "Hafif ısınma normaldir. Elle tutulamayacak kadar ısınıyorsa hat kapasitenin üstündedir, akımı yeniden hesaplayın." },
      { q: "Kademesiz ayar ne demek?", a: "Işık belirli basamaklara atlamadan, sıfırdan tam parlaklığa kadar sürekli olarak değişir." },
    ],
    related: ["6a-mini-dimmer-kontrol-cihazi", "24a-rgb-repeater", "ip20-8mm-eco-2835-120-led-mt"],
    img: "/images/products/30a-potansli-dimmer.png",
    updated: "2026-09-18",
  },
  {
    slug: "6a-mini-dimmer-kontrol-cihazi",
    categorySlug: "led-kontrol-uniteleri",
    name: "6A Mini Dimmer Kontrol Cihazı",
    metaTitle: "Mini LED Dimmer Fiyatı | 6A Kompakt Kontrol",
    metaDesc:
      "6A mini LED dimmer: 12-24V DC, parlaklık ve hız ayarı, farklı ışık modları. Dar montaj alanları ve kısa şerit hatları için. Toptan fiyat.",
    keywords: ["mini dimmer", "6a dimmer", "led dimmer", "kompakt dimmer", "şerit led dimmer"],
    h1: "6A Mini Dimmer Kontrol Cihazı",
    intro:
      "Dar montaj alanlarına sığan kompakt dimmer. 12-24V kısa şerit hatlarında parlaklık, hız ve ışık modu ayarını tek küçük gövdede toplar.",
    specs: [
      ["Besleme", "12-24V DC"],
      ["Akım kapasitesi", "6A"],
      ["Kontrol", "Parlaklık + hız ayarı"],
      ["Mod", "Farklı ışık modları"],
      ["Gövde", "Kompakt — dar alana gizlenir"],
      ["Ürün kodu", "DGDIMC.FT.006MN"],
    ],
    useCases: [
      "Kısa metrajlı şerit LED hatları",
      "Vitrin ve raf aydınlatmaları",
      "Mobilya içi ve dolap LED sistemleri",
      "Küçük dekoratif uygulamalar",
    ],
    blocks: [
      { type: "h2", text: "6A nereye yeter, nereye yetmez" },
      {
        type: "p",
        text:
          "6A, 12V hatta 72W, 24V hatta 144W demektir. 12V 9.6W/m şeritte yaklaşık 7 metre, 24V 14.4W/m şeritte yaklaşık 10 metre eder. Vitrin rafı, dolap içi ve tek harflik işler için rahat; tabela cephesi gibi uzun hatlarda yetmez, oraya [30A potanslı dimmer](/urunler/led-kontrol-uniteleri/30a-potansli-dimmer/) gerekir. Kapasiteyi zorlamak cihazı ısıtır ve ömrünü kısaltır.",
      },
      { type: "h2", text: "Küçük gövdenin asıl faydası" },
      {
        type: "p",
        text:
          "Mini dimmerin değeri amperinde değil, sığdığı yerdedir. Kutu harf içine, raf profiline ya da mobilya kenarına gizlenir; ayrı bir kasa açmayı gerektirmez. Montajda tek dikkat edilecek nokta havalandırmadır — cihazı tamamen kapalı ve yalıtımlı bir boşluğa gömmeyin, ısı çıkışına birkaç milimetre boşluk bırakın.",
      },
      { type: "h2", text: "Hız ayarı ve ışık modları" },
      {
        type: "p",
        text:
          "Cihaz sabit parlaklığın yanında yanıp sönme ve geçiş modları da sunar; hız ayarı bu modların temposunu değiştirir. Tabela işlerinde bu modlar genellikle kullanılmaz, sabit parlaklık tercih edilir. Vitrin ve dekoratif işlerde ise dikkat çekmek için işe yarar. Modun hangi tuşla değiştiğini kurulumda müşteriye göstermek, sonradan gelen \"ışık kendi kendine yanıp sönüyor\" çağrılarını önler.",
      },
    ],
    faq: [
      { q: "6A mini dimmer kaç metre şerit sürer?", a: "12V 9.6W/m şeritte yaklaşık 7 metre, 24V 14.4W/m şeritte yaklaşık 10 metre. Hattın gerçek W/m değerinden hesaplayın." },
      { q: "RGB şeritte çalışır mı?", a: "Çalışmaz. Tek renk hatlar içindir; RGB şerit üç kanallı kontrol cihazı ister." },
      { q: "Kapalı kutu içine gömülür mü?", a: "Gömülür ama tamamen sızdırmaz bir boşluğa değil. Isı çıkabilmesi için birkaç milimetre boşluk bırakın." },
      { q: "Yanıp sönme modunu nasıl kapatırım?", a: "Mod tuşuyla sabit parlaklık konumuna dönülür. Kurulumda müşteriye gösterin." },
      { q: "Trafo yerine kullanılabilir mi?", a: "Kullanılamaz. Dimmer 220V'u dönüştürmez; trafodan sonra, trafo ile şerit arasına bağlanır." },
    ],
    related: ["30a-potansli-dimmer", "ip20-8mm-eco-2835-120-led-mt", "ultra-slim-ic-mekan-adaptor"],
    img: "/images/products/6a-mini-dimmer-kontrol-cihazi.png",
    updated: "2026-09-18",
  },
  {
    slug: "pixel-rgb-kontrol-cihazi-sp107e",
    categorySlug: "led-kontrol-uniteleri",
    name: "Pixel RGB Kontrol Cihazı (SP107E)",
    metaTitle: "SP107E Pixel Kontrol Fiyatı | 36A Bluetooth",
    metaDesc:
      "SP107E pixel RGB kontrol cihazı: 5-24V, 36A, WS2812B/WS2813/SK6812 uyumlu, 200+ efekt ve müzik senkronizasyonu. Toptan fiyat.",
    keywords: ["sp107e", "pixel kontrol cihazı", "adreslenebilir led kontrolör", "ws2812b kontrol", "müzik senkron led"],
    h1: "Pixel RGB Kontrol Cihazı (SP107E)",
    intro:
      "5-24V adreslenebilir pixel hatlarını Bluetooth üzerinden yöneten 36A kapasiteli kontrolör. 200'den fazla hazır efekt ve müzik senkronizasyonu taşır.",
    specs: [
      ["Besleme", "5-24V DC"],
      ["Çıkış kapasitesi", "36A"],
      ["Bağlantı", "Bluetooth"],
      ["Çip desteği", "WS2811, WS2812B, WS2813, SK6812"],
      ["Efekt", "200+ mod, müzik senkronizasyonu"],
      ["Ürün kodu", "DGRGBC.FT.018HC08"],
    ],
    useCases: [
      "Pixel tabela ve cephe uygulamaları",
      "Vitrin ve mağaza animasyonları",
      "Sahne, bar ve etkinlik aydınlatması",
      "Mimari hat aydınlatmalarında efektli işler",
    ],
    blocks: [
      { type: "h2", text: "SP107E'yi SP110E'den ayıran şey" },
      {
        type: "p",
        text:
          "İki cihaz da Bluetooth üzerinden pixel sürer ve aynı çip ailelerini destekler. Fark kapasitede ve efekt havuzundadır: SP107E 36A çıkışı ve 200'ün üzerinde hazır modu ile büyük kurulumlara ve gösteri işlerine yöneliktir. Kısa bir vitrin hattı için [SP110E](/urunler/led-kontrol-uniteleri/pixel-rgb-kontrol-cihazi-sp110e/) yeterli kalır; uzun cephe ve sahne işlerinde SP107E tercih edilir.",
      },
      { type: "h2", text: "Kurulumda üç kritik ayar" },
      {
        type: "p",
        text:
          "Birincisi çip protokolüdür — uygulamadan şeridin çipi (WS2812B, SK6812 vb.) doğru seçilmezse efektler bozuk çalışır ya da hat hiç yanmaz. İkincisi pixel sayısıdır; gerçek adet girilmezse efekt hattın ortasında kesilir. Üçüncüsü veri yönüdür: şerit üzerindeki oklar kontrolörden uzağa bakmalıdır, ters bağlanan hat ölü kalır.",
      },
      { type: "h2", text: "36A kapasite ne anlama gelir" },
      {
        type: "p",
        text:
          "36A cihazın taşıyabileceği toplam akımdır, ama bu gücü kontrolör üretmez — besleme trafodan gelir ve trafo ayrıca hesaplanır. Uzun hatlarda şeridi yalnızca kontrolör ucundan beslemeyin; ara noktalardan da güç verin, aksi hâlde hattın sonunda parlaklık düşer ve renkler kayar. Beslemeyi doğru boyutlandırmak için [trafo amper hesaplama aracını](/araclar/trafo-amper-hesaplama/) kullanabilirsiniz.",
      },
    ],
    faq: [
      { q: "SP107E sıradan RGB şerit sürer mi?", a: "Sürmez. Yalnızca adreslenebilir pixel şeritler içindir; sıradan RGB şerit üç kanallı kontrolör ister." },
      { q: "SP107E mi SP110E mi almalıyım?", a: "Uzun hat, çok efekt ve müzik senkronu gerekiyorsa SP107E. Kısa vitrin hatlarında SP110E yeterlidir." },
      { q: "Efektler bozuk çalışıyor, sebebi ne?", a: "Neredeyse her zaman uygulamadan yanlış çip protokolü seçilmiştir. Şeridin çip tipini kontrol edip yeniden seçin." },
      { q: "Müzik senkronizasyonu nasıl çalışır?", a: "Telefonun mikrofonundan gelen sesi kullanır; ortam gürültüsü yüksek yerlerde tepki düzensizleşir." },
      { q: "İnternet gerekir mi?", a: "Gerekmez, Bluetooth doğrudan bağlanır. Menzil sınırlı olduğu için cihazı ulaşılabilir bir noktaya koyun." },
    ],
    related: ["pixel-rgb-kontrol-cihazi-sp110e", "22-tuslu-pixel-rgb-kontrol-cihazi-sp548e", "ip20-pixel-serit-led"],
    img: "/images/products/pixel-led-kontrol-cihazi.jpg",
    updated: "2026-09-18",
  },
  {
    slug: "22-tuslu-pixel-rgb-kontrol-cihazi-sp548e",
    categorySlug: "led-kontrol-uniteleri",
    name: "22 Tuşlu Pixel RGB Kontrol Cihazı (SP548E)",
    metaTitle: "SP548E Pixel Kontrol Fiyatı | 22 Tuşlu Kumanda",
    metaDesc:
      "SP548E pixel RGB kontrol cihazı: 5-24V, 36A, Bluetooth + 22 tuşlu kumanda, WS2812B/SK6812 uyumlu, 200+ efekt. Toptan fiyat.",
    keywords: ["sp548e", "22 tuşlu pixel kontrol", "pixel kumanda", "adreslenebilir led kontrolör", "bluetooth pixel kontrol"],
    h1: "22 Tuşlu Pixel RGB Kontrol Cihazı (SP548E)",
    intro:
      "Hem telefondan hem fiziksel kumandadan yönetilen 36A pixel kontrolörü. Telefonu açmadan efekt değiştirmek gereken işlerde 22 tuşlu kumanda fark yaratır.",
    specs: [
      ["Besleme", "5-24V DC"],
      ["Çıkış kapasitesi", "36A"],
      ["Bağlantı", "Bluetooth + 22 tuşlu uzaktan kumanda"],
      ["Çip desteği", "WS2811, WS2812B, WS2813, SK6812"],
      ["Efekt", "200+ animasyon, müzik senkronizasyonu, dahili hafıza"],
      ["Ürün kodu", "DGRGBC.FT.006HC14"],
    ],
    useCases: [
      "Personelin efekt değiştirdiği mağaza ve bar işleri",
      "Pixel tabela ve cephe uygulamaları",
      "Sahne ve etkinlik aydınlatması",
      "Vitrin animasyonları",
    ],
    blocks: [
      { type: "h2", text: "Kumandanın gerçek faydası" },
      {
        type: "p",
        text:
          "Telefon uygulaması kurulumu yapan için pratiktir; ama cihazı devraldıktan sonra kullanacak olan mağaza personeli için değildir. Uygulama indirmek, eşleştirmek ve doğru cihazı seçmek her vardiya tekrarlanan bir yük hâline gelir. 22 tuşlu kumanda bu yükü ortadan kaldırır: efekt ve renk tek tuşta değişir. Kurulumdan sonra müşteriye teslim edilen işlerde bu tek fark, destek çağrılarını gözle görülür azaltır.",
      },
      { type: "h2", text: "Dahili hafıza neden önemli" },
      {
        type: "p",
        text:
          "Cihaz son ayarı hafızasında tutar; elektrik kesilip geldiğinde hat en son bırakıldığı efektle yanar. Hafızası olmayan kontrolörlerde her kesintiden sonra ayarı yeniden yapmak gerekir — vitrin ve tabela işlerinde bu, sabah gelip ışığın yanlış modda yandığını görmek demektir.",
      },
      { type: "h2", text: "Kurulum ve besleme" },
      {
        type: "p",
        text:
          "Uygulamadan şeridin çip tipi ve gerçek pixel adedi girilmelidir; yanlış protokol efektleri bozar, yanlış adet efekti hattın ortasında keser. Veri yönü de şerit üzerindeki oklarla kontrol edilir. 36A cihazın taşıma kapasitesidir, gücü trafo verir — uzun hatlarda ara noktalardan besleme yapın. Aynı ailedeki [SP107E](/urunler/led-kontrol-uniteleri/pixel-rgb-kontrol-cihazi-sp107e/) kumandasız çalışır, fark yalnızca fiziksel kumandadadır.",
      },
    ],
    faq: [
      { q: "SP548E WiFi ile mi çalışır?", a: "Hayır. Bağlantı Bluetooth üzerinden, ayrıca 22 tuşlu RF kumandası vardır. İnternet gerekmez." },
      { q: "SP107E ile farkı ne?", a: "Teknik kapasite aynı: 5-24V, 36A, aynı çip desteği. Fark SP548E'nin fiziksel 22 tuşlu kumandasıdır." },
      { q: "Kumanda ve telefon aynı anda kullanılır mı?", a: "Kullanılır. İkisi de aynı cihazı yönetir, son verilen komut geçerlidir." },
      { q: "Elektrik kesintisinden sonra ayar kaybolur mu?", a: "Kaybolmaz. Dahili hafıza son efekti saklar ve enerji gelince onunla yanar." },
      { q: "Sıradan RGB şeritte kullanılır mı?", a: "Kullanılmaz. Yalnızca adreslenebilir pixel şeritler içindir." },
    ],
    related: ["pixel-rgb-kontrol-cihazi-sp107e", "pixel-rgb-kontrol-cihazi-sp110e", "ip20-pixel-serit-led"],
    img: "/images/products/22-tuslu-pixel-rgb-kontrol-cihazi-sp548e.png",
    updated: "2026-09-18",
  },
  {
    slug: "24a-rgb-repeater",
    categorySlug: "led-kontrol-uniteleri",
    name: "24A RGB Repeater",
    metaTitle: "RGB Repeater Fiyatı | 24A LED Sinyal Yükseltici",
    metaDesc:
      "24A RGB repeater (sinyal yükseltici): 12-24V DC, uzun RGB hatlarında renk kaymasını ve parlaklık düşüşünü önler. Alüminyum gövde, toptan fiyat.",
    keywords: ["rgb repeater", "led repeater", "sinyal yükseltici", "rgb amplifier", "led sinyal güçlendirici"],
    h1: "24A RGB Repeater (Sinyal Yükseltici)",
    intro:
      "Uzun RGB hatlarında kontrol sinyalini tazeleyen 24A kapasiteli yükseltici. Hattın sonundaki renk kayması ve parlaklık düşüşünü ortadan kaldırır.",
    specs: [
      ["Besleme", "12-24V DC"],
      ["Çıkış kapasitesi", "24A"],
      ["İşlev", "RGB kontrol sinyali yükseltme"],
      ["Tip", "RGB amplifier — senkron kontrol"],
      ["Gövde", "Alüminyum, ısı dağıtımlı"],
      ["Montaj", "Pano içi ve dar alan"],
    ],
    useCases: [
      "Uzun metrajlı RGB şerit hatları",
      "Tabela ve cephe RGB uygulamaları",
      "Mimari aydınlatmada çok bölümlü hatlar",
      "Otel, restoran ve mağaza RGB sistemleri",
    ],
    blocks: [
      { type: "h2", text: "Repeater ne zaman gerekir" },
      {
        type: "p",
        text:
          "İki ayrı belirti repeater ihtiyacına işaret eder. Birincisi renk kaymasıdır: hattın başı düzgün mor yanarken sonu maviye çalıyorsa kontrol sinyali zayıflamıştır. İkincisi senkron kaybıdır — hattın bölümleri efektte birbirini geriden takip eder. İkisi de kablo kalınlaştırarak çözülmez; sinyalin yolun ortasında tazelenmesi gerekir.",
      },
      { type: "h2", text: "Repeater sinyali yeniler, gücü taşımaz" },
      {
        type: "p",
        text:
          "En sık yapılan hata repeater'ı tek başına araya takmaktır. Cihaz kontrol cihazından gelen zayıf sinyali okur ve temiz bir kopyasını üretir, ama bu kopyayı sürecek gücü kendi beslemesinden alır. Yani repeater'ın giriş ucuna ayrıca trafodan besleme çekilmelidir. Beslemesiz bağlanan repeater sonrasındaki hattı hiç yakmaz.",
      },
      { type: "h2", text: "Hattı nereden bölmeli" },
      {
        type: "p",
        text:
          "Pratik ölçü, sorunun başladığı noktadan biraz öncesidir — genellikle hattın ortası. Çok uzun cephelerde birden fazla repeater zincirlenebilir; her biri kendi beslemesini alır. Tek renk hatlarda ise RGB değil PWM tipi yükseltici gerekir, ikisi birbirinin yerine geçmez. Hat başındaki toplam yükü [trafo amper hesaplama aracıyla](/araclar/trafo-amper-hesaplama/) çıkarıp besleme noktalarını ona göre planlayın.",
      },
    ],
    faq: [
      { q: "Repeater ile trafo aynı şey mi?", a: "Değil. Trafo 220V'u düşürür, repeater kontrol sinyalini tazeler. Repeater'ın kendisi de trafodan beslenir." },
      { q: "Repeater'a ayrı besleme şart mı?", a: "Şart. Beslemesi bağlanmayan repeater sonrasındaki hattı hiç yakmaz." },
      { q: "Tek renk şeritte kullanılır mı?", a: "Kullanılmaz. Tek renk hatlarda PWM tipi dimmer yükseltici gerekir." },
      { q: "Kaç metrede bir repeater gerekir?", a: "Sabit bir rakam yok; hattın voltajına, kesitine ve şeridin gücüne bağlı. Renk kayması başladığı noktadan biraz önce takın." },
      { q: "Birden fazla repeater zincirlenir mi?", a: "Zincirlenir. Her biri kendi beslemesini almak kaydıyla art arda bağlanabilir." },
    ],
    related: ["30a-potansli-dimmer", "ip20-rgb-serit-led", "ip20-rgb-cob-serit-led-576-led-mt"],
    img: "/images/products/24a-rgb-repeater.jpg",
    updated: "2026-09-18",
  },
  {
    slug: "radar-sensor",
    categorySlug: "led-kontrol-uniteleri",
    name: "Radar Sensör",
    metaTitle: "LED Radar Sensör Fiyatı | Otomatik Yanan Işık",
    metaDesc:
      "12-24V LED radar hareket sensörü: geniş algılama alanı, PIR'a göre daha hassas, otomatik açma-kapama. Şerit LED hatları için toptan fiyat.",
    keywords: ["led radar sensör", "hareket sensörü led", "şerit led sensör", "otomatik led anahtarı", "radar sensör 12v"],
    h1: "Radar Sensör (LED Hareket Anahtarı)",
    intro:
      "12-24V şerit hatlarını hareket algıladığında otomatik yakan, kimse yokken söndüren radar sensörü. PIR sensörlere göre daha geniş ve hassas algılar.",
    specs: [
      ["Besleme", "12-24V DC"],
      ["Algılama", "Radar (mikrodalga)"],
      ["İşlev", "Otomatik açma / kapama"],
      ["Algılama alanı", "Geniş — PIR'a göre hassas"],
      ["Uyum", "Düşük voltajlı LED sistemleri"],
      ["Ürün kodu", "DGSENS.FT.01224IR"],
    ],
    useCases: [
      "Koridor ve merdiven aydınlatmaları",
      "Dolap içi ve giyinme odası LED sistemleri",
      "Depo ve arşiv odaları",
      "Vitrin ve mağaza girişlerinde dikkat çekme",
    ],
    blocks: [
      { type: "h2", text: "Radar ile PIR arasındaki fark" },
      {
        type: "p",
        text:
          "PIR sensör vücut ısısını görür; bu yüzden ince bir camın, dolap kapağının ya da alçıpanın arkasından çalışmaz ve yaz aylarında ortam sıcaklığı vücut sıcaklığına yaklaştıkça duyarlılığı düşer. Radar sensör mikrodalga yansımasıyla hareketi algılar — ısıya bakmaz, ince yüzeylerin arkasından çalışır ve geniş bir alanı tarar. Gizli montaj gereken işlerde tercih sebebi budur.",
      },
      { type: "h2", text: "Sensör trafodan sonra bağlanır" },
      {
        type: "p",
        text:
          "Bu sensör 220V hat anahtarı değildir; 12-24V DC tarafında, trafo ile şerit arasına takılır. Sıralama 220V → trafo → sensör → şerit şeklindedir. Sensörün akım kapasitesi hattın çektiği amperden büyük olmalıdır; uzun hatlarda sensörü doğrudan yüke bağlamak yerine araya röle koymak daha güvenli bir kurulumdur.",
      },
      { type: "h2", text: "Yanlış tetiklemeyi önlemek" },
      {
        type: "p",
        text:
          "Radar duvarın arkasındaki hareketi de görebildiği için, koridora bakan bir sensör yandaki odadan tetiklenebilir. Çözüm sensörün yönünü ve konumunu ayarlamaktır — algılama alanını asıl geçiş hattına bakacak şekilde daraltın. Dolap içi uygulamalarda ise kapak açıldığında tetiklenmesi istenir; sensörü kapak menteşesine değil, kapağın açıldığı yöne bakacak biçimde yerleştirin. Hattın toplam yükünü [trafo amper hesaplama aracıyla](/araclar/trafo-amper-hesaplama/) çıkarmayı unutmayın.",
      },
    ],
    faq: [
      { q: "Radar sensör cam veya ahşabın arkasından çalışır mı?", a: "Çalışır. Mikrodalga yansımasını kullandığı için ince yüzeylerin arkasından algılar — PIR sensörün çalışmadığı yer burasıdır." },
      { q: "220V hatta takılır mı?", a: "Takılmaz. 12-24V DC tarafında, trafo ile şerit arasına bağlanır." },
      { q: "Yandaki odadan tetikleniyor, ne yapmalı?", a: "Sensörün yönünü asıl geçiş hattına çevirin ve algılama alanını daraltın. Radar duvar arkasını da görebilir." },
      { q: "Kaç amperlik hattı sürebilir?", a: "Sensörün kapasitesi hattın çektiği amperden büyük olmalı. Uzun hatlarda araya röle koyun." },
      { q: "Işık ne kadar süre yanık kalır?", a: "Hareket kesildikten sonra sensörün gecikme süresi kadar yanık kalır, ardından söner." },
    ],
    related: ["30a-potansli-dimmer", "ip20-8mm-eco-2835-120-led-mt", "ultra-slim-ic-mekan-adaptor"],
    img: "/images/products/radar-sensor.png",
    updated: "2026-09-18",
  },
];

/** Bir kategorinin kendi sayfası olan kalemleri. */
export function getItemsForCategory(categorySlug: string) {
  return items.filter((i) => i.categorySlug === categorySlug);
}

/** Katalog adından sayfası olan kalemi bulur; yoksa undefined. */
export function getItemByName(categorySlug: string, name: string) {
  return items.find((i) => i.categorySlug === categorySlug && i.name === name);
}

export function getItem(categorySlug: string, slug: string) {
  return items.find((i) => i.categorySlug === categorySlug && i.slug === slug);
}

/** related listesindeki slug'ları gerçek kayıtlara çevirir. */
export function getRelatedItems(item: ItemPage) {
  return item.related
    .map((slug) => items.find((i) => i.slug === slug))
    .filter((i): i is ItemPage => Boolean(i));
}
