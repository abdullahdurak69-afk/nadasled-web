import type { BlogPost } from "../blog";

export const pergolaAydinlatmasiNasilYapilir: BlogPost = {
  slug: "pergola-aydinlatmasi-nasil-yapilir",
  title: "Pergola Aydınlatması Nasıl Yapılır? Ölçüden Montaja Adım Adım",
  metaTitle: "Pergola Aydınlatması Nasıl Yapılır? Adım Adım",
  metaDesc:
    "Pergola ve tente aydınlatması adım adım: ışığın yeri, dış mekan LED seçimi, trafo ve besleme hesabı, dimmer, su yalıtımı ve örnek malzeme listesi.",
  excerpt: "Pergola ve tentede ölçü almaktan trafo yerleşimine kadar dış mekan LED uygulaması, örnek hesapla.",
  date: "2026-09-25",
  readMins: 8,
  categorySlug: "pergole-led",
  categoryName: "Pergola LED",
  blocks: [
    {
      type: "p",
      text: "Pergola aydınlatması ilk bakışta basit bir şerit LED işi gibi görünür. Aslında tabeladan daha zorlu bir dış mekan uygulamasıdır. Hat yıl boyunca yağmur, güneş, yoğuşma ve gece-gündüz sıcaklık farkı altında çalışır; üstelik oturma alanının hemen üstünde olduğu için ışığın kalitesi de göz önündedir.",
    },
    {
      type: "p",
      text: "Bu rehber bir pergolayı baştan sona aydınlatmanın sırasını izliyor: ışığın nereye konacağı, ürün seçimi, güç ve besleme hesabı, trafo yerleşimi ve su yalıtımı. Sonunda 4 × 3 metrelik bir pergola için örnek malzeme listesi var.",
    },

    { type: "h2", text: "1. Işığın nereye konacağına karar verin" },
    {
      type: "table",
      headers: ["Yerleşim", "Etki", "Dikkat"],
      rows: [
        ["Kiriş altı, aşağı bakan", "Masa ve oturma alanını doğrudan aydınlatır", "Göz almaması için difüzörlü profil şart"],
        ["Kiriş içi / profil kanalı", "Kaynak görünmez, temiz çizgi", "Profil derinliği ve ısı atımı kontrol edilmeli"],
        ["Çevre konturu, dışa bakan", "Pergolanın siluetini gece belirginleştirir", "Doğrudan yağmur alır, IP sınıfı yüksek olmalı"],
        ["Dolaylı, yukarı bakan", "Tavanı yıkayan yumuşak ortam ışığı", "Açık tavanlı pergolada etkisi azdır"],
      ],
    },
    {
      type: "p",
      text: "Çoğu pergolada iki katman birlikte kullanılır: kiriş altında aşağı bakan ana ışık ve çevrede düşük seviyede kontur. İki katmanı ayrı hatlar olarak kurmak, ileride ikisini ayrı dimmerle kontrol etmeyi mümkün kılar.",
    },

    { type: "h2", text: "2. Ürünü dış mekana göre seçin" },
    {
      type: "p",
      text: "Pergolada alt sınır IP65'tir. Doğrudan yağmur alan dış yüzeylerde ve suyun birikebileceği yatay kanallarda IP67 tercih edilir. İç mekan şeridini silikon hortuma geçirip dışarıda kullanmak sık yapılan bir hatadır: hortumun içinde yoğuşma birikir ve şerit birkaç ay içinde kararır. IP sınıflarının farkını [IP65 mi IP67 mi yazımızda](/blog/ip65-mi-ip67-mi-tabela-led/) anlattık.",
    },
    {
      type: "ul",
      items: [
        "Kesintisiz, noktasız çizgi isteniyorsa: [IP65 10 mm COB günışığı 3000K](/urunler/cob-led-serit/dis-mekan-cob-gunisigi-3000k/). 24V çalışır, metrede 12 W çeker ve difüzörsüz bakıldığında bile nokta izi vermez.",
        "Modern, metal ve beyaz tonlu pergolalarda: aynı serinin [6000K beyaz versiyonu](/urunler/cob-led-serit/dis-mekan-cob-beyaz-6000k/) veya 4000K civarı nötr beyaz.",
        "Kısa ve saçak altında kalan hatlarda: [IP65 drop silikon şerit](/urunler/led-serit/ip65-8mm-dis-mekan-drop-silikon-serit-led/). 12V olduğu için uzun pergola hatlarında besleme noktası sayısı artar.",
      ],
    },
    {
      type: "p",
      text: "Renk sıcaklığında genel kural: ahşap pergolada 3000K, metal ve modern yapılarda 4000K. 6000K dinlenme alanında soğuk ve sert durur; daha çok kontur ve görünürlük amaçlı hatlarda kullanılır. Ürün seçenekleri için [pergola LED kategorimize](/urunler/pergole-led/) bakabilirsiniz.",
    },

    { type: "h2", text: "3. Metrajı ve gücü hesaplayın" },
    {
      type: "p",
      text: "Metraj, ışığın gideceği kirişlerin toplam uzunluğudur. Çevre konturu için pergolanın çevresi alınır; kiriş altı hatlar için her kirişin boyu ayrı ayrı toplanır. Kesim ve dönüşler için %5-10 pay eklemek iyi bir alışkanlıktır.",
    },
    {
      type: "table",
      headers: ["Pergola", "Hat", "Metraj", "Güç (12 W/m)", "%20 payla", "Trafo (24V)"],
      rows: [
        ["3 × 3 m", "Çevre", "12 m", "144 W", "173 W", "200 W"],
        ["4 × 3 m", "Çevre", "14 m", "168 W", "202 W", "250 W"],
        ["4 × 4 m", "Çevre", "16 m", "192 W", "230 W", "250 W"],
        ["5 × 4 m", "Çevre + 2 iç kiriş", "26 m", "312 W", "374 W", "2 × 200 W"],
      ],
    },
    {
      type: "p",
      text: "Son satırda yük tek trafoya verilmiyor, ikiye bölünüyor. 250 W'ın üzerindeki yükleri bölmek, bir trafo arızalandığında pergolanın tamamen karanlıkta kalmasını önler ve ısıyı dağıtır. Kendi ölçünüzü [trafo amper hesaplama aracına](/araclar/trafo-amper-hesaplama/) girerek aynı hesabı yapabilirsiniz.",
    },

    { type: "h2", text: "4. Besleme noktalarını planlayın" },
    {
      type: "p",
      text: "24V bir şerit tek uçtan yaklaşık 10 metre beslenebilir; 12V'ta bu mesafe 5 metreye iner. Daha uzun hatlarda hattın sonu sönük ve sarımsı yanar. 14 metrelik bir çevre hattını 7'şer metrelik iki segmente bölüp her segmenti trafodan ayrı kabloyla beslemek, ışığın baştan sona eşit görünmesini sağlar.",
    },
    {
      type: "p",
      text: "Besleme kablolarını pergolanın taşıyıcı dikmesinden aşağı indirip trafoya toplamak hem düzenli hem de servis açısından pratiktir. Mesafe ve kablo kesiti hesabı için [LED şeritte voltaj düşümü](/blog/led-serit-voltaj-dusumu/) ve [12V mu 24V mu](/blog/12v-mu-24v-mu-tabela-aydinlatma/) yazılarımıza bakabilirsiniz.",
    },

    { type: "h2", text: "5. Trafoyu doğru yere koyun" },
    {
      type: "p",
      text: "Pergola arızalarının çoğu LED'den değil, ıslanan veya ısınan trafodan çıkar. Trafo mümkünse saçak altı, depo veya teknik dolap gibi doğrudan yağmur almayan bir yere alınır. Seçim, trafonun duracağı konuma göre yapılır:",
    },
    {
      type: "table",
      headers: ["Trafonun konumu", "Uygun tip"],
      rows: [
        ["Doğrudan yağmur ve güneş alan açık alan", "IP67 dış mekan adaptör"],
        ["Saçak altı, yağmur almayan ama nemli yer", "Yağmur korumalı epoksili adaptör"],
        ["Pano veya kutu içi, dış mekan", "Metal kasa dış mekan adaptör, havalandırmalı kutuda"],
      ],
    },
    {
      type: "p",
      text: "Bu üç tipin teknik detayları ürün sayfalarında: [IP67 Meanwell dış mekan adaptör](/urunler/trafo-led-surucu/meanwell-dis-mekan-plus-adaptor/), [yağmur korumalı epoksili adaptör](/urunler/trafo-led-surucu/yagmur-korumali-epoksili-adaptor/) ve [metal kasa dış mekan adaptör](/urunler/trafo-led-surucu/metal-kasa-dis-mekan-adaptor/). Yaz aylarında güneş alan kapalı bir kutunun içi çok yüksek sıcaklıklara çıkar ve trafonun ömrünü kısaltır. Kutu kullanılacaksa gölgede olmalı ve havalandırma bırakılmalıdır.",
    },

    { type: "h2", text: "6. Dimmer ekleyin" },
    {
      type: "p",
      text: "Pergolada akşam yemeği ile gece geç saat için farklı ışık seviyesi istenir; dimmer bu yüzden neredeyse her işte eklenir. Dimmer trafonun çıkışına bağlanır ve amperi hattın akımına %20 pay eklenerek seçilir. 250 W / 24V ≈ 10,4 A eder; bu yükte 30A potanslı dimmer rahat çalışır. Ayrıntılar için [LED dimmer seçimi rehberimize](/blog/led-dimmer-secimi/) bakın.",
    },

    { type: "h2", text: "7. Bağlantıları suya karşı yalıtın" },
    {
      type: "ul",
      items: [
        "Kesilen her şerit ucunu silikon uç kapağı ve nötr silikonla kapatın. Açık kalan tek bir uç, suyun şerit boyunca ilerlemesi için yeterlidir.",
        "Kablo girişlerini aşağı bakacak şekilde yönlendirin ve girişten önce kabloya küçük bir sarkma (damla payı) bırakın. Kablo boyunca akan su böylece bağlantıya ulaşmadan damlar.",
        "Ekleri açıkta bırakmayın; su geçirmez konnektör veya bağlantı kutusu kullanın.",
        "Şeridi mutlaka alüminyum profile yerleştirin. COB şeritte profil hem soğutucu hem de mekanik korumadır; opal difüzör de ışığın göz almasını önler.",
      ],
    },

    { type: "h2", text: "Örnek malzeme listesi: 4 × 3 m pergola, çevre hattı" },
    {
      type: "table",
      headers: ["Kalem", "Miktar", "Not"],
      rows: [
        ["IP65 10 mm COB şerit, 3000K, 24V", "15 m", "14 m hat + %5-10 kesim payı"],
        ["Alüminyum profil + opal difüzör", "14 m", "Uç kapakları ve montaj klipsleriyle"],
        ["24V 250 W dış mekan trafo", "1 adet", "Konuma göre IP67 veya yağmur korumalı"],
        ["30A potanslı dimmer", "1 adet", "Trafo çıkışına, korunaklı kutuya"],
        ["Besleme kablosu", "Mesafeye göre", "2 segment, her biri trafoya ayrı hat"],
        ["Su geçirmez konnektör, uç kapağı, silikon", "Hat başına", "Her kesim ve ek noktası için"],
      ],
    },
    {
      type: "p",
      text: "Maliyeti kalem kalem çıkarmak isterseniz [ışıklı tabela maliyeti rehberimizdeki](/blog/isikli-tabela-maliyeti/) yöntem pergola için de geçerlidir: metrajdan listeyi çıkarın, sonra atlanan küçük kalemleri ekleyin.",
    },

    { type: "h2", text: "Sık yapılan hatalar" },
    {
      type: "ul",
      items: [
        "İç mekan şeridini hortuma geçirip dışarıda kullanmak. Hortumun içinde yoğuşma birikir ve şerit kısa sürede arızalanır.",
        "12V ile uzun hat çekmek. Pergola hatları genelde 10 metreyi geçer; 12V'ta hattın sonu belirgin şekilde söner.",
        "Trafoyu güneş alan, havasız bir kutuya koymak.",
        "Kesim uçlarını kapatmamak. Arızaların büyük çoğunluğu eklerden ve açık uçlardan başlar.",
        "Profilsiz montaj. Şerit ısınır, ışık göz alır ve kiriş yüzeyinde çıplak şerit görüntüsü kalır.",
      ],
    },
  ],
  faq: [
    {
      q: "Pergola aydınlatmasında hangi LED kullanılır?",
      a: "En az IP65 dış mekan şerit kullanılır; uzun hatlarda 24V tercih edilir. Kesintisiz ve noktasız bir çizgi isteniyorsa IP65 COB şerit en temiz sonucu verir. Şerit alüminyum profil ve opal difüzörle monte edilmelidir.",
    },
    {
      q: "4 × 3 metre pergola için kaç watt trafo gerekir?",
      a: "Çevre hattı 14 metredir. Metrede 12 W çeken COB şeritle 168 W eder; %20 payla yaklaşık 202 W. Bu yük için 24V 250 W dış mekan trafo uygundur.",
    },
    {
      q: "Pergola LED'inde 3000K mı 4000K mı seçilmeli?",
      a: "Ahşap pergola ve dinlenme alanlarında 3000K sıcak beyaz, metal ve modern yapılarda 4000K nötr beyaz daha uyumlu görünür. 6000K oturma alanında soğuk ve sert durur.",
    },
    {
      q: "Pergola LED trafosu nereye konmalı?",
      a: "Mümkünse doğrudan yağmur almayan bir yere: saçak altı, depo veya teknik dolap. Açık alanda kalacaksa IP67 dış mekan trafo kullanılmalıdır. Kapalı kutu kullanılıyorsa gölgede olmalı ve havalandırması bulunmalıdır.",
    },
    {
      q: "Pergola ışığının parlaklığı ayarlanabilir mi?",
      a: "Evet. Tek renk hatlarda trafonun çıkışına bağlanan bir LED dimmer kullanılır. Dimmerin amperi hattın akımına %20 pay eklenerek seçilir; 250 W / 24V hat için 30A potanslı dimmer rahat çalışır.",
    },
    {
      q: "Pergolada LED neden kısa sürede arızalanır?",
      a: "En sık üç sebep: iç mekan şeridinin dışarıda kullanılması, kesim uçlarının ve eklerin su yalıtımının yapılmaması ve trafonun ıslanması ya da havasız kutuda aşırı ısınması.",
    },
  ],
};
