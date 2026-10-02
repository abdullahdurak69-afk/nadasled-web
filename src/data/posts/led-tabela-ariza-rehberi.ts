import type { BlogPost } from "../blog";

export const ledTabelaArizaRehberi: BlogPost = {
  slug: "led-tabela-ariza-rehberi",
  title: "LED Tabela Yanmıyor mu? Belirtiden Sebebe Arıza Rehberi",
  metaTitle: "LED Tabela Arızaları — Yanmıyor, Yanıp Sönüyor, Sönük",
  metaDesc:
    "LED tabela hiç yanmıyor, yanıp sönüyor, bir harfi ya da hattın sonu sönük mü? Belirtiye göre sebep tablosu, multimetreyle trafo kontrolü ve çözüm adımları.",
  excerpt: "Tabela yanmıyor, yanıp sönüyor ya da bir bölümü sönük: belirtiye göre sebebi bulmanın sırası.",
  date: "2026-10-02",
  readMins: 8,
  categorySlug: "trafo-led-surucu",
  categoryName: "Trafo & LED Sürücü",
  blocks: [
    {
      type: "p",
      text: "LED tabela arızalarının çok azı LED'in kendisinden çıkar. Sebep çoğu zaman trafo, kablo, bir bağlantı noktası ya da kasaya giren sudur. Bu yüzden arızalı tabelada ilk iş modül ya da şerit değiştirmek değil, belirtiye bakmaktır: tabelanın tamamı mı sönük, bir bölümü mü, yoksa yanıp mı sönüyor?",
    },
    {
      type: "p",
      text: "Bu rehber belirtiden sebebe giden sırayı izliyor. Her belirtinin ayrıntılı çözümü için ilgili yazımıza link var.",
    },

    { type: "h2", text: "Önce güvenlik: hangi tarafa dokunulur?" },
    {
      type: "p",
      text: "Bir LED tabelada iki ayrı elektrik tarafı vardır. Trafonun girişi 220V şebekedir ve bu taraftaki her iş bir elektrikçiye aittir. Trafonun çıkışı ise 12V ya da 24V doğru akımdır; bu tarafta multimetreyle ölçüm yapmak güvenlidir. Trafo terminallerinde giriş ve çıkış yan yana durur. Ölçüme başlamadan önce hangi vidanın hangi taraf olduğunu trafonun etiketinden okuyun.",
    },
    {
      type: "p",
      text: "Arıza aramanın tek aleti DC volt kademesindeki bir multimetredir. Üç ölçüm çoğu arızayı ayırır:",
    },
    {
      type: "ul",
      items: [
        "Trafo çıkışı, hat bağlı değilken — trafonun kendisi çalışıyor mu?",
        "Trafo çıkışı, hat bağlıyken — yük bağlanınca gerilim çöküyor mu?",
        "Sorunlu bölümün girişi — gerilim oraya kadar geliyor mu?",
      ],
    },

    { type: "h2", text: "Belirti tablosu" },
    {
      type: "table",
      headers: ["Belirti", "En olası sebep", "İlk kontrol"],
      rows: [
        ["Tabelanın tamamı yanmıyor", "220V gelmiyor ya da trafo arızalı", "Sigorta, zaman saati, trafo çıkışı"],
        ["Birkaç saniyede bir yanıp sönüyor", "Trafo aşırı yük ya da kısa devre korumasında", "Hattı söküp trafoyu boşta ölçün"],
        ["Bir harf ya da bölüm yanmıyor", "O bölümün kablosu, konnektörü ya da ilk modülü", "Bölümün girişindeki gerilim"],
        ["Hattın sonu sönük ve sarımsı", "Voltaj düşümü: uzun zincir ya da ince kablo", "Hattın başı ile sonu arasındaki fark"],
        ["Tek tek modüller sönük ya da yanmıyor", "Nem, kopuk lehim, arızalı modül", "Su izi ve oksitlenme"],
        ["Yağmurdan sonra arıza, kuruyunca düzeliyor", "Bir ek noktasından ya da kasa altından su", "Kasanın alt kenarı ve ekler"],
        ["Hızlı titreme, kamerada çizgiler", "Düşük kaliteli trafo ya da dimmer, gevşek bağlantı", "Dimmer var mı, bağlantılar sıkı mı"],
        ["Trafo çok ısınıyor ya da vızıldıyor", "Trafo tam yükte, havalandırma yok", "Toplam gücü yeniden hesaplayın"],
        ["RGB'de renkler karışık", "Renk kanallarının sırası", "Kontrol ünitesi çıkış sırası"],
        ["Pixel'de bir noktadan sonrası çalışmıyor", "Veri yönü ters ya da veri hattı kopuk", "Ok yönü ve o pikselin girişi"],
      ],
    },

    { type: "h2", text: "Tabelanın tamamı yanmıyorsa" },
    {
      type: "ul",
      items: [
        "1 · Sigortayı ve varsa zaman saatini ya da fotoseli kontrol edin. Tabelalarda en sık atlanan sebep, yanlış kurulmuş ya da elektrik kesintisinden sonra saati kaymış bir zaman rölesidir.",
        "2 · Trafonun girişine 220V geldiğini bir elektrikçiye doğrulatın.",
        "3 · Trafonun çıkış kablolarını söküp çıkışı boşta ölçün. 12V bir trafoda 12 volta yakın bir değer görmelisiniz. Hiç gerilim yoksa ya da çok düşükse trafo arızalıdır.",
        "4 · Trafo boşta doğru gerilim veriyor ama hat bağlanınca gerilim çöküyorsa sorun trafoda değil hattadır: ya bir yerde kısa devre vardır ya da hat trafonun gücünü aşıyordur.",
      ],
    },
    {
      type: "p",
      text: "Dördüncü durumda hatları tek tek bağlayarak deneyin. Hangi hat bağlandığında gerilim çöküyorsa sorun o hattadır. Ezilmiş bir kablo, su almış bir ek ya da birbirine değen iki uç en olası sebeptir.",
    },

    { type: "h2", text: "Yanıp sönüyorsa: trafo korumaya geçiyor" },
    {
      type: "p",
      text: "Kaliteli trafolar kısa devre ya da aşırı yük gördüğünde çıkışı keser, birkaç saniye sonra yeniden dener. Sorun sürüyorsa yine keser. Sonuç, tabelanın birkaç saniyede bir ritmik olarak yanıp sönmesidir. Bu titremeyle karıştırılmamalıdır: titreme hızlı ve süreklidir, koruma döngüsü ise saniyeler sürer.",
    },
    {
      type: "p",
      text: "İki yaygın sebebi vardır. Birincisi hat trafonun gücünü aşmıştır; tabelaya sonradan harf eklenmiş, SMD şerit daha çok watt çeken COB ile değiştirilmiş ya da trafo baştan sınırında seçilmiştir. Gerçek gücü [trafo amper hesaplama aracıyla](/araclar/trafo-amper-hesaplama/) bulup trafonun etiketiyle karşılaştırın. İkincisi bir yerde artı ile eksi birbirine değiyordur. Hattı söktüğünüzde trafo boşta düzgün çalışıyorsa sebep hattadır.",
    },

    { type: "h2", text: "Bir harf ya da bölüm yanmıyorsa" },
    {
      type: "p",
      text: "Modüller ve şerit segmentleri hatta paralel bağlıdır. Tek bir modülün arızası genellikle yalnızca o modülü söndürür. Bir noktadan sonrasının tamamı yanmıyorsa ise sorun o noktadaki bağlantıdadır: kopmuş bir kablo, gevşemiş bir konnektör ya da kırılmış bir lehim.",
    },
    {
      type: "p",
      text: "Yanmayan bölümün ilk elemanının girişindeki gerilimi ölçün. Gerilim varsa sorun o elemanın kendisindedir. Gerilim yoksa bir önceki bağlantıya doğru geriye gidin; sorun, gerilimin kaybolduğu iki nokta arasındadır. Şeritte bakır yollar kesim noktasının dışından zarar gördüyse o segment değiştirilir.",
    },

    { type: "h2", text: "Hattın sonu sönükse" },
    {
      type: "p",
      text: "Hattın başı normal, sonu sönük ve sarımsıysa bu bir arıza değil voltaj düşümüdür. Ölçüm bunu iki dakikada doğrular: hattın başı ile sonu arasındaki gerilim farkı 12V sistemde yarım voltu geçiyorsa hat fazla uzun ya da kablo fazla incedir. Modül zincirlerinde üreticinin verdiği azami adet aşılmış olabilir; çoğu seride bu sınır 20-25 modüldür.",
    },
    {
      type: "p",
      text: "Çözümleri [LED şeritte voltaj düşümü](/blog/led-serit-voltaj-dusumu/) yazısında, besleme kablosunun kesit hesabını [LED kablo kesiti hesaplama](/blog/led-kablo-kesiti-hesaplama/) yazısında anlattık.",
    },

    { type: "h2", text: "Yağmurdan sonra başlayan arızalar" },
    {
      type: "p",
      text: "Yağmurdan sonra sönen, kuruyunca kendiliğinden düzelen bir tabela su alıyordur. Su çoğu zaman ürünün kendisinden değil, yalıtılmamış bir ek noktasından ya da kasanın alt kenarında biriken yoğuşmadan girer. Kasa kapalı olsa bile sızdırmaz değildir; gece-gündüz sıcaklık farkı içeride yoğuşma yaratır.",
    },
    {
      type: "p",
      text: "Kontrol sırası: kasanın alt kenarındaki modüller, kesilip yeniden bağlanmış şerit uçları ve trafoya giren kablo ağzı. Kalıcı çözüm IP67 ürün, yeniden yalıtılmış ekler ve kasanın altına açılan tahliye delikleridir; ayrıntısı [IP65 mi IP67 mi](/blog/ip65-mi-ip67-mi-tabela-led/) yazısında.",
    },

    { type: "h2", text: "Titreme, ısınma ve renk sorunları" },
    {
      type: "ul",
      items: [
        "Titreme ve kamerada çizgiler — dimmerli hatlarda düşük PWM frekansı ve yetersiz kablo en sık sebeptir; [LED dimmer seçimi](/blog/led-dimmer-secimi/) yazısında anlattık. Dimmer yoksa ucuz bir trafonun dalgalanması ya da gevşek bir bağlantı akla gelir.",
        "Trafonun aşırı ısınması — trafo tam yükte ya da havasız bir kutuda çalışıyordur. Isınan trafonun ömrü hızla kısalır; [LED trafo hesaplama](/blog/led-trafo-hesaplama/) yazısındaki %20 payı kontrol edin, kapalı kasada %30'a çıkın.",
        "RGB'de renklerin karışması — kontrol ünitesinin çıkış sırası şeritle tutmuyordur; [RGB kontrol ünitesi](/blog/rgb-led-kontrol-unitesi-secimi/) yazısında bağlantı sırası var.",
        "Pixel'de bir noktadan sonrasının çalışmaması — veri tek yönlü akar; o pikselin veri girişi ve ok yönü kontrol edilir. Ayrıntısı [pixel LED](/blog/pixel-led-nedir/) yazısında.",
      ],
    },

    { type: "h2", text: "Tamir mi, değişim mi?" },
    {
      type: "ul",
      items: [
        "Trafo — arızalı bir LED trafoyu tamir ettirmek nadiren ekonomiktir. Değiştirirken eskisinin etiketini kopyalamak yerine gücü yeniden hesaplayın; eski trafo zaten sınırında çalıştığı için bozulmuş olabilir.",
        "Tek modül — zincirden kesilip yerine yenisi bağlanabilir. Bağlantıyı lehim ve ısıyla daralan makaronla yapın; dış mekanda açık bırakılan ek yeni bir arıza noktasıdır.",
        "Şerit — arızalı segment kesim işaretlerinden kesilip değiştirilir.",
        "Yaygın nem hasarı — bir harfin içindeki modüllerin çoğunda oksitlenme varsa tek tek değiştirmek yerine harfin LED'ini toptan yenilemek ve suyun girdiği yeri kapatmak daha kalıcıdır.",
      ],
    },
    {
      type: "p",
      text: "Arızalı ürünün etiket fotoğrafını ve tabelanın ölçüsünü WhatsApp'tan gönderirseniz uyumlu trafo, modül ya da şeridi birlikte belirleyelim. Trafo çeşitleri için [trafo ve LED sürücü](/urunler/trafo-led-surucu/) kategorisine bakabilirsiniz.",
    },
  ],
  faq: [
    {
      q: "LED tabela neden yanıp söner?",
      a: "Birkaç saniyede bir ritmik yanıp sönme genellikle trafonun koruma döngüsüdür: hat trafonun gücünü aşmıştır ya da bir yerde kısa devre vardır. Trafo çıkışı keser, birkaç saniye sonra yeniden dener. Hattı söküp trafoyu boşta ölçerek sebebin trafoda mı hatta mı olduğunu ayırabilirsiniz.",
    },
    {
      q: "LED trafo bozuk mu, nasıl anlarım?",
      a: "Trafonun çıkış kablolarını söküp çıkışı multimetrenin DC volt kademesiyle ölçün. 12V bir trafoda 12 volta yakın değer görmelisiniz. Gerilim yoksa trafo arızalıdır. Boşta doğru ama hat bağlanınca çöküyorsa sorun hattadır. Trafonun 220V girişine ilişkin kontroller bir elektrikçi tarafından yapılmalıdır.",
    },
    {
      q: "Tabelanın bir harfi neden yanmıyor?",
      a: "Modüller paralel bağlı olduğu için tek modül arızası genelde yalnızca kendisini söndürür. Bir harfin tamamı yanmıyorsa o harfe giden kablo, konnektör ya da ilk bağlantı kopmuştur. Harfin girişindeki gerilimi ölçüp geriye doğru giderek kopuk noktayı bulun.",
    },
    {
      q: "Yağmurdan sonra tabela neden yanmıyor?",
      a: "Su alıyordur. Su çoğu zaman yalıtılmamış bir ek noktasından ya da kasanın alt kenarında biriken yoğuşmadan girer. Ekleri yeniden yalıtın, dış mekanda IP67 ürün kullanın ve kasanın alt kenarına tahliye delikleri açın.",
    },
    {
      q: "Hattın sonundaki LED'ler neden sönük?",
      a: "Bu bir arıza değil voltaj düşümüdür. Hat fazla uzun, modül zinciri üreticinin sınırını aşmış ya da besleme kablosu fazla incedir. Hattı bölmek, iki uçtan beslemek ya da kablo kesitini büyütmek çözer.",
    },
    {
      q: "LED trafo neden ısınır?",
      a: "Tam yükte ya da havalandırmasız bir kutuda çalışıyordur. Trafonun gücü hesaplanan yükün en az %20 üzerinde olmalı, kapalı kasada bu pay %30'a çıkarılmalıdır. Isınan trafonun ömrü hızla kısalır.",
    },
  ],
};
