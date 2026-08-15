// /araclar altındaki hesaplama araçlarının içerik katmanı.
//
// Hesabın kendisi client bileşenlerde (components/tools) ve saf matematik
// lib/led-calc.ts'te durur; burada yalnızca sayfanın metni, meta'sı ve iç
// linkleri var. Blog yazılarıyla aynı Block/FaqItem tiplerini kullanır ki iki
// sayfa tipi aynı Prose bileşeninden geçsin.

import type { Block, FaqItem } from "./content";

export interface Tool {
  slug: string;
  /** H1 — sayfanın kendi başlığı. */
  title: string;
  /** Kart ve navigasyonda kullanılan kısa ad. */
  shortTitle: string;
  metaTitle: string;
  metaDesc: string;
  excerpt: string;
  /** Hesap makinesinin hemen üstünde duran tek paragraf. */
  intro: string;
  /** Aracın son güncellenme tarihi (ISO). */
  updated: string;
  categorySlug: string;
  categoryName: string;
  /** Aracın altında gösterilecek blog yazıları (slug). */
  relatedPosts: string[];
  /** Aracın altındaki açıklama gövdesi. */
  blocks: Block[];
  faq: FaqItem[];
}

export const tools: Tool[] = [
  {
    slug: "trafo-amper-hesaplama",
    title: "Trafo Amper Hesaplama",
    shortTitle: "Trafo amper hesaplama",
    metaTitle: "Trafo Amper Hesaplama — Kaç Amper Trafo Gerekir?",
    metaDesc:
      "Modül adedi veya şerit metrajını girin; gereken watt, amper, trafo kademesi, kaç trafoya bölüneceği ve kablo kesiti anında çıksın.",
    excerpt: "Modül adedi ya da şerit metrajından gereken amperi, trafo kademesini ve kablo kesitini bulun.",
    intro:
      "Modül adedinizi veya şerit metrajınızı girin; araç güvenlik payını ekleyip gereken amperi, uygun trafo kademesini ve besleme kablosu kesitini verir. Hesabın her adımı sonucun altında yazılı — çıkan sayıyı sahada savunabilmeniz için.",
    updated: "2026-08-16",
    categorySlug: "trafo-led-surucu",
    categoryName: "LED Trafo / Adaptör",
    relatedPosts: [
      "led-trafo-hesaplama",
      "12v-mu-24v-mu-tabela-aydinlatma",
      "led-serit-watt-ve-trafo-secimi",
      "power-led-surucu-secimi",
      "point-led-nedir",
    ],
    blocks: [
      { type: "h2", text: "Araç hangi formülü kullanıyor?" },
      {
        type: "p",
        text: "Hesap üç adımdan ibarettir: toplam güç = adet × birim güç, güvenlik paylı güç = toplam güç × 1,2 ve amper = paylı güç ÷ voltaj. Aracın yaptığı ek iş, çıkan watt değerine piyasada gerçekten bulunan bir trafo kademesi eşleştirmek, 250 watt'ı aşan sistemlerde yükü bölmek ve akıma uygun kablo kesitini söylemektir.",
      },
      {
        type: "p",
        text: "Formülün ayrıntılı anlatımı, örnekleri ve sahada en sık yapılan altı hata için [LED trafo hesaplama rehberine](/blog/led-trafo-hesaplama) bakabilirsiniz.",
      },

      { type: "h2", text: "Neden %20 güvenlik payı ekleniyor?" },
      {
        type: "p",
        text: "Bir trafonun etiketindeki değer sürekli değil azami güçtür. Sürekli tam yükte çalışan trafo ısınır; ısınan elektrolitik kondansatörün ömrü sıcaklıkla birlikte hızla kısalır. Pratik kural olarak her 10 °C sıcaklık artışı kondansatör ömrünü yaklaşık yarıya indirir. %20 pay bırakmak trafoyu yaklaşık %80 yükte çalıştırmak demektir; bu hem ısıyı hem de şebeke dalgalanmalarında oluşan ani yük artışlarını karşılar.",
      },
      {
        type: "p",
        text: "Dış mekan tabelalarında ve yaz aylarında kapalı kasa içine giren trafolarda payı %30'a çıkarın. Kapalı hacimde çalışan trafo, ortam sıcaklığının üzerine kendi ısısını da ekler.",
      },

      { type: "h2", text: "Tek büyük trafo mu, birkaç orta boy mu?" },
      {
        type: "p",
        text: "Araç 250 watt'ın üzerindeki sistemlerde yükü otomatik olarak böler. Bu teknik bir zorunluluk değil, sahada işe yarayan bir tercihtir: arıza anında tabelanın tamamı sönmez, sadece o segment kararır; her trafo daha kısa hat beslediği için voltaj düşümü azalır; ısı tek noktada birikmez; servis sırasında ağır tek parça yerine küçük bir ünite değiştirilir.",
      },
      {
        type: "p",
        text: "Bölerken tek kural, farklı trafoların çıkışlarını birbirine paralel bağlamamaktır. Her trafo kendi segmentini besler; segmentler arasında yalnızca ortak eksi hattı kurulur.",
      },

      { type: "h2", text: "Sonucun yanında bakılması gereken üç şey" },
      {
        type: "ul",
        items: [
          "IP sınıfı — hesap doğru olsa bile yanlış IP sınıfı seçilirse trafo aylar içinde bozulur. Kasa içi sızdırmaz bir hacim değildir; gece-gündüz farkı yoğuşma yaratır, bu yüzden kasa içinde bile IP67 tercih edilir.",
          "Sürücü tipi — bu araç sabit voltajlı sistemler içindir (modül, şerit, neon). [Power LED çipleri](/urunler/power-led) sabit akım sürücü ister; sabit voltajlı trafoya bağlanan power LED ilk saniyelerde yanar.",
          "Kablo kesiti — düşük voltajlı sistemlerde akım yüksektir. Hattın sonundaki modüller sönük yanıyorsa suçlu genellikle trafo değil kablodur.",
        ],
      },
      {
        type: "p",
        text: "Hesap sonucuna uyan IP67, ultra slim ve yağmur korumalı modeller için [trafo ve LED sürücü kategorimize](/urunler/trafo-led-surucu) göz atabilirsiniz.",
      },
    ],
    faq: [
      {
        q: "100 modül için kaç amper trafo gerekir?",
        a: "1,5 W'lık 100 modül 150 W eder; %20 güvenlik payıyla 180 W olur. 12V sistemde 180 ÷ 12 = 15 amper, yani 12V 200W sınıfı bir trafo gerekir. Modül watt'ınız farklıysa aracı kendi değerinizle çalıştırın.",
      },
      {
        q: "Araç neden bazen tek trafo yerine iki trafo öneriyor?",
        a: "Toplam güç 250 watt'ı aştığında yük bölünüyor. Bölmek zorunlu değildir ama arıza anında tabelanın tamamının sönmesini önler, voltaj düşümünü azaltır ve ısıyı dağıtır.",
      },
      {
        q: "12V mi 24V mi seçmeliyim?",
        a: "Watt olarak ihtiyaç aynıdır, değişen amperdir: 24V sistem aynı güçte yarı akım çeker, böylece daha düşük amperli trafo ve daha ince kablo yeterli olur. Uzun hatlarda 24V voltaj düşümünü de azaltır. Ayrıntı için 12V mı 24V mı karşılaştırmasına bakın.",
      },
      {
        q: "Sonuç power LED için de geçerli mi?",
        a: "Hayır. Bu araç sabit voltajlı sistemler (modül, şerit, neon) içindir. Power LED çipleri sabit akım sürücü ister; sabit voltajlı trafoya bağlandıklarında geri döndürülemez biçimde zarar görürler.",
      },
      {
        q: "Trafoyu olduğundan büyük almanın zararı var mı?",
        a: "Teknik bir zararı yoktur; trafo yalnızca çekilen kadar güç verir. Zarar maliyet ve yer tarafındadır. Bazı modellerde çok düşük yükte çıkış kararsızlaşabildiği için aşırıya kaçmadan bir üst kademeyi seçmek en doğrusudur.",
      },
      {
        q: "Kablo kesiti önerisi neye göre çıkıyor?",
        a: "Akıma göre: 5 ampere kadar 0,75 mm², 10 ampere kadar 1 mm², 16 ampere kadar 1,5 mm², 25 ampere kadar 2,5 mm². Mesafe 10 metreyi aştıkça bir kademe kalın kesit kullanın.",
      },
    ],
  },

  {
    slug: "kutu-harf-modul-hesaplama",
    title: "Kutu Harf LED Modül Hesaplama",
    shortTitle: "Kutu harf modül hesaplama",
    metaTitle: "Kutu Harf LED Modül Hesaplama — Kaç Modül Gerekir?",
    metaDesc:
      "Harf yüksekliği ve adedinden tahmini LED modül sayısını, toplam gücü, trafo kademesini ve harf derinliğine uygun mercek açısını hesaplayın.",
    excerpt: "Harf ölçüsünden modül adedini, gücü ve derinliğe uygun mercek açısını çıkarın.",
    intro:
      "Harf yüksekliğini, harf adedini ve derinliği girin; araç tahmini modül sayısını, toplam gücü, uygun trafoyu ve harf derinliğine göre mercek açısını verir. Çıkan adet bir tahmindir — kesin sayı dizilim çiziminde belli olur, ama sipariş ve teklif için doğru mertebeyi verir.",
    updated: "2026-08-16",
    categorySlug: "led-modul",
    categoryName: "LED Modül",
    relatedPosts: [
      "kutu-harf-icin-led-modul-secimi",
      "led-trafo-hesaplama",
      "tabela-yapiminda-kullanilan-malzemeler",
      "ip65-mi-ip67-mi-tabela-led",
    ],
    blocks: [
      { type: "h2", text: "Modül adedi nasıl tahmin ediliyor?" },
      {
        type: "p",
        text: "Araç iki ayrı tahmin yapar ve büyük olanı kullanır. Alan tabanlı tahmin, harf gövdesinin alanını modül aralığının karesine böler; büyük harflerde gövde kalınlığı modül aralığını aştığı için modüller iki boyutlu ızgaraya yerleşir ve doğru olan bu tahmindir. Hat tabanlı tahmin ise gövde uzunluğunu modül aralığına böler; küçük harflerde gövde tek sıra modül aldığı için alan tahmini gerçeğin çok altında kalır, orada bu tahmin devreye girer.",
      },
      {
        type: "p",
        text: "Harf gövdesinin alanı, seçtiğiniz yazı tipi kalınlığından çıkar: ince bir yazı tipi harfi çevreleyen dikdörtgenin yaklaşık %30'unu, normal kalınlık %42'sini, kalın (bold) bir tip ise %58'ini doldurur.",
      },

      { type: "h2", text: "Modül aralığı sonucu nasıl değiştirir?" },
      {
        type: "p",
        text: "Modül aralığı hem maliyeti hem yüzey kalitesini belirler. 10 cm aralık metrekareye 100 modül düşürür ve en homojen yüzeyi verir; 15 cm aralıkta bu sayı 44'e iner, maliyet yarıdan aza düşer ama sığ harflerde nokta nokta parlama riski artar. 12 cm, tabela sektöründe en sık kullanılan orta yoldur.",
      },
      {
        type: "table",
        headers: ["Modül aralığı", "Metrekareye düşen modül", "Uygun olduğu yer"],
        rows: [
          ["10 cm", "~100 adet", "Sığ harfler, 5-8 cm derinlik, yüksek kalite beklentisi"],
          ["12 cm", "~69 adet", "Standart kutu harf, 8-12 cm derinlik"],
          ["15 cm", "~44 adet", "Derin harfler, ışıklı kutu (light box), maliyet odaklı işler"],
        ],
      },

      { type: "h2", text: "Derinlik ve mercek açısı" },
      {
        type: "p",
        text: "Harf derinliği, ışığın ön yüzeye ulaşmadan önce yayılabileceği mesafedir. Sığ harfte bu mesafe yoktur; geniş açılı mercek ve sık modül aralığı gerekir, yoksa pleksinin üstünde modüllerin yeri tek tek görünür. Derin harfte ise tam tersi geçerlidir: geniş açılı mercek yan duvarları aydınlatır, ön yüzey sönük kalır.",
      },
      {
        type: "table",
        headers: ["Harf derinliği", "Önerilen mercek açısı", "Not"],
        rows: [
          ["6 cm altı", "170°", "Aralığı 8-10 cm'e düşürün"],
          ["6-10 cm", "160°", "En yaygın tabela derinliği"],
          ["10-15 cm", "145-160°", "Aralık 15 cm'e kadar açılabilir"],
          ["15 cm üstü", "120-140°", "Dar açı; geniş açı ön yüzeyi sönük bırakır"],
        ],
      },
      {
        type: "p",
        text: "Mercek açısı, renk sıcaklığı ve IP sınıfı seçimi için [kutu harf modül seçimi rehberimize](/blog/kutu-harf-icin-led-modul-secimi) bakabilir, uygun modelleri [LED modül kategorisinde](/urunler/led-modul) görebilirsiniz.",
      },

      { type: "h2", text: "Çıkan adedi sipariş etmeden önce" },
      {
        type: "ul",
        items: [
          "%10 yedek ekleyin. Montaj sırasında kırılan, kablosu kopan veya dizilimde fazladan gereken modüller bu yedekten çıkar.",
          "Zincir uzunluğunu kontrol edin. Üreticinin tek hatta izin verdiği azami modül sayısını aşarsanız hattın sonundaki modüller sönük yanar.",
          "Toplam gücü trafoya taşıyın. Araç trafo önerisini veriyor; ayrıntılı bölme ve kablo hesabı için [trafo amper hesaplama aracını](/araclar/trafo-amper-hesaplama) kullanın.",
          "Harf şekillerini gözden geçirin. Aynı kutuda 'O' ile 'İ' çok farklı gövde uzunluğu verir; çok sayıda dar harfi olan bir metinde gerçek adet tahminin altında kalabilir.",
        ],
      },
    ],
    faq: [
      {
        q: "50 cm harf için kaç modül gerekir?",
        a: "Normal kalınlıkta 50 cm'lik bir harf, 12 cm modül aralığında yaklaşık 9 modül alır. İnce yazı tipinde bu sayı düşer, kalın (bold) bir tipte artar. Araç harf adedini de sorduğu için toplam siparişi doğrudan verir.",
      },
      {
        q: "Modül aralığı 12 cm mi 15 cm mi olmalı?",
        a: "Harf derinliği 8 cm ve üzerindeyse 12 cm aralık dengeli bir yüzey verir. 15 cm aralık maliyeti düşürür ama yalnızca 10 cm ve üstü derinlikte, mercek açısı da uygun seçilirse leke yapmaz.",
      },
      {
        q: "Hesap logolu tabelada da çalışır mı?",
        a: "Logo bir harf gibi sayılamaz. Pratik yaklaşım, logonun kapladığı alanı harf yüksekliğine göre 2-3 harfe denk saymaktır. Karmaşık logolarda dizilim çizimi yapmadan kesin sayı çıkmaz.",
      },
      {
        q: "Neden harf başına en az 2 modül öneriliyor?",
        a: "Tek modülle aydınlatılan bir harfte ışık merkezde toplanır, uçlar karanlık kalır. Küçük harflerde bile en az iki modül, gövde boyunca dağılım için gereken alt sınırdır.",
      },
      {
        q: "Modül watt'ını bilmiyorum, ne yapmalıyım?",
        a: "Ürün etiketinde yazar. Tabela modüllerinde en sık karşılaşılan değerler 0,72 W, 1,2 W, 1,44 W ve 1,5 W'tır. Araçtaki hazır seçeneklerden birini seçebilir veya kendi değerinizi girebilirsiniz.",
      },
      {
        q: "Sonuçtaki güç değerine göre trafo seçebilir miyim?",
        a: "Evet, araç %20 güvenlik payı ekleyip uygun trafo kademesini veriyor. Kaç trafoya bölüneceği, kablo kesiti ve IP sınıfı için trafo amper hesaplama aracını da çalıştırın.",
      },
    ],
  },

  {
    slug: "led-serit-guc-hesaplama",
    title: "LED Şerit Güç ve Metraj Hesaplama",
    shortTitle: "LED şerit güç hesaplama",
    metaTitle: "LED Şerit Güç Hesaplama — Watt, Metraj ve Besleme",
    metaDesc:
      "LED şerit metrajından toplam gücü, gereken amperi, trafo kademesini, makara adedini ve kaç noktadan beslenmesi gerektiğini hesaplayın.",
    excerpt: "Metrajdan veya çevre ölçüsünden toplam gücü, trafoyu ve besleme noktası sayısını bulun.",
    intro:
      "Metrajı doğrudan girin ya da pano ölçüsünden hesaplatın; araç toplam gücü, gereken amperi, trafo kademesini, makara adedini ve hattın kaç noktadan beslenmesi gerektiğini verir. Şerit işlerinde sorun genelde watt'ta değil, tek uçtan beslenen fazla uzun hatta çıkar.",
    updated: "2026-08-16",
    categorySlug: "led-serit",
    categoryName: "LED Şerit",
    relatedPosts: [
      "led-serit-voltaj-dusumu",
      "led-serit-watt-ve-trafo-secimi",
      "cob-vs-smd-led-serit",
      "neon-flex-secim-ve-montaj",
      "kesit-aydinlatma-led-rehberi",
      "rgb-led-kontrol-unitesi-secimi",
    ],
    blocks: [
      { type: "h2", text: "Besleme noktası neden ayrıca hesaplanıyor?" },
      {
        type: "p",
        text: "LED şerit, bakır yolları üzerinden akım taşır ve bu yollar bir dirence sahiptir. Hat uzadıkça hattın sonuna ulaşan gerilim düşer; 12V bir şeritte 5 metreden sonra, 24V bir şeritte 10 metreden sonra bu düşüş gözle görülür hale gelir. Sonuç, hattın sonunda sönük ve sarımsı yanan bir bölümdür — ve bu, trafo ne kadar büyük seçilirse seçilsin düzelmez.",
      },
      {
        type: "p",
        text: "Çözüm hattı segmentlere bölmek ve her segmenti kendi besleme kablosuyla trafoya bağlamaktır. Araç, seçtiğiniz voltaja göre kaç besleme noktası gerektiğini doğrudan söyler.",
      },

      { type: "h2", text: "Şerit güç tablosu" },
      {
        type: "table",
        headers: ["Şerit tipi", "Tipik güç", "Voltaj", "10 metre için (+%20)"],
        rows: [
          ["2835 · 60 LED/m", "7 W/m", "12V", "84 W"],
          ["2835 · 120 LED/m", "11 W/m", "12V", "132 W"],
          ["2835 · 240 LED/m", "19 W/m", "24V", "228 W"],
          ["5050 · 60 LED/m", "13 W/m", "12V", "156 W"],
          ["5050 RGB · 60 LED/m", "14,4 W/m", "12V", "173 W"],
          ["COB · 480 LED/m", "12 W/m", "24V", "144 W"],
          ["COB · 720 LED/m", "16 W/m", "24V", "192 W"],
        ],
      },
      {
        type: "p",
        text: "Tablodaki değerler tipik ortalamalardır. Aynı LED sayısına sahip iki şerit arasında %20'ye varan güç farkı olabilir; kesin hesap için elinizdeki ürünün etiket değerini araca özel değer olarak girin. Şerit tiplerinin karşılaştırması için [COB ve SMD şerit karşılaştırmamıza](/blog/cob-vs-smd-led-serit) bakabilirsiniz.",
      },

      { type: "h2", text: "Metrajı çevreden hesaplamak" },
      {
        type: "p",
        text: "Işıklı kutu, vitrin nişi ve pano çerçevesi gibi işlerde şerit çevre boyunca döner. Aracın çevre modu, pano ölçüsünü metraja çevirir: 2 × (en + boy) formülüyle tek panonun çevresini bulur ve adet ile çarpar. Köşe dönüşlerinde şerit kesilip konnektörle eklendiği için hesaba küçük bir fire payı eklemek yerinde olur.",
      },
      {
        type: "p",
        text: "Şeritler standart olarak 5 metrelik makaralarda gelir. Araç makara adedini yukarı yuvarlar; 12 metrelik bir iş 3 makara demektir ve elinizde 3 metre artar. Bu artık genelde yedek olarak ayrılır.",
      },

      { type: "h2", text: "Montajda gücü boşa harcayan üç hata" },
      {
        type: "ul",
        items: [
          "Şeridi makaradan açmadan yakmak. Sarılı haldeki şerit ürettiği ısıyı atamaz; birkaç dakikada LED'ler ve yapıştırıcı zarar görür.",
          "Alüminyum profil kullanmamak. Yüksek güçlü şeritlerde profil bir dekorasyon değil soğutucudur; profilsiz montajda ışık akısı ilk yıl içinde belirgin biçimde düşer.",
          "Farklı marka veya farklı partiden şeritleri aynı yüzeyde birleştirmek. Renk sıcaklığındaki küçük fark, iki şerit yan yana geldiğinde net biçimde görünür.",
        ],
      },
      {
        type: "p",
        text: "Uygun profil, konnektör ve besleme kabloları için [yardımcı ürünler kategorisine](/urunler/yardimci-urunler), şerit çeşitleri için [LED şerit](/urunler/led-serit) ve [COB LED şerit](/urunler/cob-led-serit) kategorilerine bakabilirsiniz.",
      },
    ],
    faq: [
      {
        q: "10 metre LED şerit için kaç amperlik trafo gerekir?",
        a: "Şeridin W/m değerine bağlıdır. 12 W/m bir COB şeritte 10 metre 120 W eder; %20 payla 144 W olur ve 24V sistemde 6 amper çeker, yani 24V 150W sınıfı bir trafo yeterlidir. Aracı kendi şerit tipinizle çalıştırın.",
      },
      {
        q: "20 metrelik hattı tek trafodan besleyebilir miyim?",
        a: "Trafo yeterli güçteyse evet, ama hattı tek noktadan besleyemezsiniz. 24V sistemde yaklaşık her 10 metrede, 12V sistemde her 5 metrede bir yeni besleme kablosu çekilmelidir. Trafo tek olabilir; besleme noktaları birden fazla olmalıdır.",
      },
      {
        q: "Şeridi istediğim yerden kesebilir miyim?",
        a: "Yalnızca üzerindeki makas işaretli kesim noktalarından. Bu noktalar SMD şeritlerde tipik olarak 3 LED'de bir, COB şeritlerde çoğu üründe her 2,5 cm'de bir gelir. Kesim noktası dışından kesilen şeritte o segment hiç yanmaz.",
      },
      {
        q: "Neden 24V şerit öneriliyor?",
        a: "Aynı güçte 24V sistem yarı akım çeker. Bu, daha uzun tek parça hat, daha az besleme noktası ve daha ince kablo demektir. Uzun cephe hatlarında fark belirgindir.",
      },
      {
        q: "Makara adedi neden yukarı yuvarlanıyor?",
        a: "Şerit 5 metrelik makaralarda satılır. 12 metrelik iş için 3 makara alınır ve 3 metre artar; bu artık genelde yedek olarak ayrılır. Ara metrajda kesilmiş şerit talebiniz varsa teklif alırken belirtin.",
      },
      {
        q: "RGB şeritte hesap değişir mi?",
        a: "Güç hesabı aynıdır ama RGB şeritte tüm renkler aynı anda yandığında (beyaz) tam güç çekilir; hesap bu en yüksek duruma göre yapılmalıdır. Ayrıca araya kontrol ünitesi ve uzun hatlarda amplifikatör girer.",
      },
    ],
  },

  {
    slug: "tabela-maliyet-hesaplama",
    title: "Tabela Maliyet Hesaplama",
    shortTitle: "Tabela maliyet hesaplama",
    metaTitle: "Tabela Maliyet Hesaplama — Malzeme Listesi ve Maliyet",
    metaDesc:
      "Kutu harf, ışıklı kutu veya neon tabela ölçünüzü girin; malzeme listesi miktarlarıyla çıksın, kendi birim fiyatlarınızla toplam maliyeti görün.",
    excerpt: "Ölçüden malzeme listesini çıkarın, kendi alış fiyatlarınızla toplam maliyeti hesaplayın.",
    intro:
      "Tabela tipini ve ölçüsünü girin; araç gereken malzemeleri miktarlarıyla listeler. Birim fiyat alanları boş gelir — kendi alış fiyatlarınızı yazdığınızda toplam maliyet ve KDV dahil tutar çıkar. Listeyi olduğu gibi WhatsApp'tan gönderip güncel toptan fiyat da isteyebilirsiniz.",
    updated: "2026-08-16",
    categorySlug: "led-modul",
    categoryName: "LED Modül",
    relatedPosts: [
      "isikli-tabela-maliyeti",
      "tabela-yapiminda-kullanilan-malzemeler",
      "light-box-led-secimi",
      "kutu-harf-icin-led-modul-secimi",
    ],
    blocks: [
      { type: "h2", text: "Neden birim fiyatlar hazır gelmiyor?" },
      {
        type: "p",
        text: "Tabela malzemesinde fiyat, miktara ve projeye göre değişir; 20 modüllük bir işle 2.000 modüllük bir işin birim fiyatı aynı değildir. Siteye sabit bir fiyat listesi gömmek, birkaç ay içinde herkesin yanlış hesap yaptığı bir sayfa üretir. Bunun yerine araç miktarları çıkarır, fiyatı siz koyarsınız — ya kendi alış fiyatınızla maliyeti görürsünüz ya da listeyi gönderip güncel toptan fiyatı alırsınız.",
      },

      { type: "h2", text: "Miktarlar nereden çıkıyor?" },
      {
        type: "ul",
        items: [
          "Kutu harfte modül adedi, harf yüksekliği ve yazı tipi kalınlığından 12 cm modül aralığına göre tahmin edilir; sırt ve ön yüz alanı harf kutusundan, kenar bandı harf çevresinden çıkar.",
          "Işıklı kutuda modül adedi, pano alanı × 15 cm aralık yoğunluğu (metrekareye ~44 modül) ile bulunur; profil çevreden, opal pleksi ve baskı vinil alandan hesaplanır.",
          "Neon ve şerit işlerinde metraj doğrudan girilir; montaj kanalı metraja eşit, konnektör ve uç kapağı ise her makara için iki adet sayılır.",
          "Trafo her üç tipte de aynı formülden geçer: toplam güç × 1,2, ardından piyasadaki standart kademeye yuvarlama ve 250 watt üstünde bölme.",
        ],
      },
      {
        type: "p",
        text: "Modül adedini daha ayrıntılı ayarlamak isterseniz (aralık, mercek açısı, derinlik) [kutu harf modül hesaplama aracını](/araclar/kutu-harf-modul-hesaplama), trafo tarafını derinleştirmek için [trafo amper hesaplama aracını](/araclar/trafo-amper-hesaplama) kullanın.",
      },

      { type: "h2", text: "Maliyeti asıl belirleyen kalemler" },
      {
        type: "p",
        text: "Tabela maliyetinde LED tarafı çoğu zaman toplamın küçük bir kısmıdır; asıl yükü kasa malzemesi, ön yüzey ve işçilik oluşturur. Buna rağmen en sık burada tasarruf edilmeye çalışılır — ve arızaların büyük kısmı da buradan çıkar. Ekonomik bir trafo da ilk gün çalışır; fark ikinci yılda ortaya çıkar.",
      },
      {
        type: "ul",
        items: [
          "Ön yüzey — opal pleksi ile ekonomik lexan arasındaki fark, hem ışık dağılımında hem de birkaç yıl sonraki sararmada görünür.",
          "Kasa ve sırt malzemesi — alüminyum kompozit ile DKP sac arasındaki seçim, dış mekanda korozyon ve ağırlık farkı yaratır.",
          "Trafo ve sürücü — dalgalanması yüksek ekonomik sürücülerde kamera altında bant, gözle titreme görülür.",
          "İşçilik ve montaj — yükseklik, vinç ihtiyacı ve ruhsat süreçleri çoğu projede malzemeden büyük kalemdir.",
        ],
      },
      {
        type: "p",
        text: "Hangi malzemenin nerede kullanıldığı ve seçim kriterleri için [tabela yapımında kullanılan malzemeler rehberine](/blog/tabela-yapiminda-kullanilan-malzemeler) bakabilirsiniz.",
      },

      { type: "h2", text: "Listeyi teklife çevirmek" },
      {
        type: "p",
        text: "Sonuç tablosunun altındaki WhatsApp butonu, malzeme listesini miktarlarıyla birlikte hazır mesaj olarak taşır. Elle liste yazmanıza gerek kalmaz; aynı gün toptan fiyat alırsınız. Fire ve yedek için modül ve şeritte %10 pay eklemek yaygın pratiktir.",
      },
    ],
    faq: [
      {
        q: "Araç tabela fiyatını söylüyor mu?",
        a: "Hazır fiyat vermiyor. Malzeme listesini miktarlarıyla çıkarıyor; birim fiyatları siz giriyorsunuz ve toplam otomatik hesaplanıyor. Güncel toptan fiyat için listeyi WhatsApp'tan gönderebilirsiniz.",
      },
      {
        q: "Toplam tutara KDV dahil mi?",
        a: "Tablodaki toplam KDV hariçtir. Sonuç panelinde ayrıca %20 KDV dahil tutar da gösterilir.",
      },
      {
        q: "İşçilik kalemi neden boş geliyor?",
        a: "İşçilik; yükseklik, erişim zorluğu, vinç ihtiyacı ve şehre göre çok değişir. Bu kalemi kendi maliyetinizle doldurmanız gerekir.",
      },
      {
        q: "Miktarlar ne kadar güvenilir?",
        a: "Ölçüden çıkarılan tahminlerdir ve teklif hazırlamak için yeterli mertebeyi verir. Harf şekilleri, fire ve dizilim tercihleri gerçek adedi bir miktar değiştirir; sipariş öncesi %10 yedek eklemek yerinde olur.",
      },
      {
        q: "Işıklı kutuda modül aralığı neden 15 cm?",
        a: "Işıklı kutularda derinlik genellikle 10 cm ve üzeridir; bu derinlikte ışık yayılacak mesafeyi bulduğu için 15 cm aralık leke yapmadan maliyeti düşürür. Sığ kasalarda aralığı 12 cm'e çekmek gerekir.",
      },
      {
        q: "Listeye kendi malzememi ekleyebilir miyim?",
        a: "Tabloda 'Diğer' satırı bu iş için var; nakliye, vinç, ruhsat gibi kalemleri oraya tek tutar olarak girebilirsiniz.",
      },
    ],
  },
];

export function getTool(slug: string) {
  return tools.find((t) => t.slug === slug);
}

/** Bir ürün kategorisi sayfasında gösterilecek araçlar. */
export function getToolsForCategory(categorySlug: string, limit = 2) {
  const matching = tools.filter((t) => t.categorySlug === categorySlug);
  const rest = tools.filter((t) => t.categorySlug !== categorySlug);
  return [...matching, ...rest].slice(0, limit);
}

/** Bir blog yazısının altında gösterilecek araçlar. */
export function getToolsForPost(postSlug: string, limit = 2) {
  const matching = tools.filter((t) => t.relatedPosts.includes(postSlug));
  const rest = tools.filter((t) => !t.relatedPosts.includes(postSlug));
  return [...matching, ...rest].slice(0, limit);
}
