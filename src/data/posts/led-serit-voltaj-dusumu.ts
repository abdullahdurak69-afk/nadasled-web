import type { BlogPost } from "../blog";

export const ledSeritVoltajDusumu: BlogPost = {
  slug: "led-serit-voltaj-dusumu",
  title: "LED Şeritte Voltaj Düşümü: Hattın Sonu Neden Sönük Yanar?",
  metaTitle: "LED Şeritte Voltaj Düşümü — Hattın Sonu Neden Sönük?",
  metaDesc:
    "LED şeritte voltaj düşümünün sebebi, azami besleme uzunlukları, çift uçtan besleme ve ana hat çekme yöntemi. Sönük yanan hattı düzeltmenin yolları.",
  excerpt: "Hattın sonundaki sönüklüğün sebebi neredeyse hiç trafo değildir — voltaj düşümü ve çözümleri.",
  date: "2026-08-16",
  readMins: 8,
  categorySlug: "led-serit",
  categoryName: "LED Şerit",
  blocks: [
    {
      type: "p",
      text: "Şerit LED montajı bittikten sonra en sık duyulan cümle şudur: \"Baş taraf güzel yanıyor da sonu sönük kalmış.\" Bu neredeyse hiçbir zaman trafo sorunu değildir. Daha büyük bir trafo takmak da düzeltmez. Sorun, şeridin kendi bakır yollarında kaybolan gerilimdir.",
    },

    { type: "h2", text: "Voltaj düşümü nasıl oluşur?" },
    {
      type: "p",
      text: "LED şerit, esnek devre kartı üzerindeki ince bakır yollardan akım taşır. Bu yolların kesiti küçük olduğu için belirgin bir direnci vardır. Akım bu direnç üzerinden geçerken bir miktar gerilim kaybolur ve ısıya dönüşür; kaybolan gerilim hat boyunca birikerek artar.",
    },
    {
      type: "p",
      text: "İki şey durumu ağırlaştırır. Birincisi, hattın başındaki LED'ler tüm hattın akımını kendi üzerlerinden geçirir, sonundakiler yalnızca kendi akımını çeker — yani yük dağılımı baştan sona azalır. İkincisi, gerilim düştükçe LED'in ışık akısı orantısız biçimde azalır; %10'luk bir gerilim kaybı gözle çok daha büyük bir sönüklük olarak görünür.",
    },
    {
      type: "p",
      text: "Gerilim düşünce renk de kayar. Beyaz şeritlerde hattın sonu sarımsı bir tona döner; RGB hatlarda kanallar eşit oranda düşmediği için renk dengesi bozulur.",
    },

    { type: "h2", text: "Azami besleme uzunlukları" },
    {
      type: "table",
      headers: ["Sistem", "Tek uçtan azami", "Çift uçtan azami", "Not"],
      rows: [
        ["12V standart SMD", "5 m", "8-10 m", "Makara uzunluğu da 5 m"],
        ["24V standart SMD", "10 m", "15-20 m", "Aynı watt'ta yarı akım"],
        ["24V COB", "5-8 m", "10-14 m", "Yüksek güçlü tiplerde daha kısa"],
        ["24V neon flex", "10-15 m", "20-25 m", "Üretici verisine bakın"],
      ],
    },
    {
      type: "p",
      text: "Tablodaki değerler tipik sınırlardır; yüksek güçlü (16 W/m üzeri) şeritlerde daha da kısalır. Kendi işiniz için besleme noktası sayısını [LED şerit güç hesaplama aracıyla](/araclar/led-serit-guc-hesaplama) doğrudan çıkarabilirsiniz.",
    },

    { type: "h2", text: "Dört çözüm yöntemi" },
    {
      type: "ul",
      items: [
        "Çift uçtan besleme — hattın iki ucuna da besleme kablosu çekmek, azami uzunluğu neredeyse ikiye katlar. En ucuz ve en hızlı çözüm budur.",
        "Ana hat (bus) çekmek — şeridin arkasından kalın kesitli bir besleme hattı geçirip belirli aralıklarla şeride bağlanmak. Uzun cephe işlerinde standart yöntemdir.",
        "Segmentlere bölmek — hattı azami uzunluğun altında parçalara ayırıp her parçayı ayrı besleme kablosuyla trafoya bağlamak. Şeritler görsel olarak devam eder ama elektriksel olarak bağımsızdır.",
        "24V sisteme geçmek — aynı watt'ta yarı akım çekildiği için kayıp da düşer. Yeni projelerde uzun hat varsa doğrudan 24V seçmek en temiz çözümdür.",
      ],
    },
    {
      type: "p",
      text: "Bunların hiçbiri işe yaramıyorsa suçlu besleme kablosudur. Düşük voltajlı sistemlerde akım yüksektir; ince kablo hem ısınır hem kendi üzerinde gerilim düşürür. Pratik yaklaşım 5 ampere kadar 0,75 mm², 10 ampere kadar 1 mm², üzerinde 1,5 mm² ve daha kalın kesittir; mesafe 10 metreyi aştıkça bir kademe artırın.",
    },

    { type: "h2", text: "Ana hat yöntemi nasıl uygulanır?" },
    {
      type: "p",
      text: "Uzun cephe hatlarında en temiz çözüm budur. Trafodan çıkan kalın kesitli artı ve eksi kabloları şerit boyunca paralel çekilir; şerit bu ana hatta belirli aralıklarla (12V'ta her 2-3 metrede, 24V'ta her 5 metrede) bağlanır. Böylece her bağlantı noktası kendi bölgesini neredeyse tam gerilimle besler.",
    },
    {
      type: "p",
      text: "Bağlantılarda kutupların doğru olması ve tüm bağlantıların aynı trafodan gelmesi şarttır. Farklı trafoların çıkışlarını aynı ana hatta paralel bağlamayın; çıkış gerilimleri tam eşit olmadığı için biri diğerinden daha fazla yüklenir.",
    },

    { type: "h2", text: "Montajda hattı zayıflatan üç alışkanlık" },
    {
      type: "ul",
      items: [
        "Kesim noktası dışından kesmek — o segment hiç yanmaz ve devrenin devamı bozulur. Kesim yalnızca makas işaretli noktalardan yapılır.",
        "Lehim yerine yalnızca klips konnektör kullanmak — uzun hatlarda ve dış mekanda klips bağlantı zamanla oksitlenir, direnci artar ve tam o noktada ek bir gerilim düşümü yaratır.",
        "Profilsiz montaj — alüminyum profil bir dekorasyon değil soğutucudur. Isınan şeritte hem ışık akısı düşer hem bakır yolun direnci bir miktar artar.",
      ],
    },
    {
      type: "p",
      text: "Şerit tipleri ve güç değerleri için [LED şerit watt ve trafo seçimi rehberine](/blog/led-serit-watt-ve-trafo-secimi), COB ve SMD farkı için [karşılaştırma yazımıza](/blog/cob-vs-smd-led-serit) bakabilirsiniz. Profil, konnektör ve kablo için [yardımcı ürünler](/urunler/yardimci-urunler), şerit çeşitleri için [LED şerit](/urunler/led-serit) kategorisi.",
    },
  ],
  faq: [
    {
      q: "LED şeridin sonu neden sönük yanıyor?",
      a: "Şeridin bakır yollarındaki direnç yüzünden hat boyunca gerilim düşer. Kayıp hattın sonunda birikir; gerilim düştükçe ışık akısı orantısız biçimde azaldığı için son bölüm gözle belirgin şekilde sönük görünür. Daha büyük trafo bu sorunu çözmez.",
    },
    {
      q: "12V şeritte azami kaç metre tek hat çekebilirim?",
      a: "Tek uçtan yaklaşık 5 metre. Hattın iki ucundan da beslerseniz 8-10 metreye çıkabilirsiniz. Daha uzun mesafelerde hattı segmentlere bölmek veya ana hat çekmek gerekir.",
    },
    {
      q: "Çift uçtan besleme nasıl yapılır?",
      a: "Hattın başına ve sonuna aynı trafodan iki ayrı besleme kablosu çekilir; kutuplar her iki uçta da doğru bağlanır. Bu, azami uzunluğu neredeyse ikiye katlayan en ucuz çözümdür.",
    },
    {
      q: "24V şerit voltaj düşümünü gerçekten azaltır mı?",
      a: "Evet. Aynı güçte 24V sistem yarı akım çeker; kayıp akımla arttığı için düşüm belirgin biçimde azalır. Uzun hatlarda 24V seçmek en temiz çözümdür.",
    },
    {
      q: "Ana hat (bus) yöntemi nedir?",
      a: "Trafodan çıkan kalın kesitli artı ve eksi kablolarının şerit boyunca paralel çekilip şeride belirli aralıklarla bağlanmasıdır. 12V'ta her 2-3 metrede, 24V'ta her 5 metrede bir bağlantı yapılır.",
    },
    {
      q: "Kablo kesiti voltaj düşümünü etkiler mi?",
      a: "Doğrudan etkiler. İnce kablo kendi üzerinde gerilim düşürür ve ısınır. 5 ampere kadar 0,75 mm², 10 ampere kadar 1 mm², üzerinde 1,5 mm² ve daha kalın kesit kullanın; 10 metreyi aşan mesafelerde bir kademe artırın.",
    },
  ],
};
