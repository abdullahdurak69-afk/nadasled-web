import type { BlogPost } from "../blog";

export const kesitAydinlatmaLedRehberi: BlogPost = {
  slug: "kesit-aydinlatma-led-rehberi",
  title: "Kesit Aydınlatma LED Rehberi: Harf Kenarından Işık Vermek",
  metaTitle: "Kesit Aydınlatma LED Rehberi — Harf Kenarından Işık",
  metaDesc:
    "Kesit aydınlatma nedir, hangi harf derinliğinde çalışır, kaç metre LED gerekir ve kenar ışığı neden kutu harften farklı hesaplanır?",
  excerpt: "Harfin ön yüzü yerine kesitinden ışık veren uygulamanın kuralları ve metraj hesabı.",
  date: "2026-08-16",
  readMins: 7,
  categorySlug: "kesit-aydinlatma-led",
  categoryName: "Kesit Aydınlatma LED",
  blocks: [
    {
      type: "p",
      text: "Kesit aydınlatma, harfin ön yüzeyini değil kenarını (kesitini) aydınlatan uygulamadır. Sonuç, klasik kutu harften tamamen farklıdır: harfin gövdesi gündüz olduğu gibi kalır, gece ise yalnızca kenar boyunca ince bir ışık çizgisi görünür. Kurumsal kimliğin gündüz de net okunması istenen işlerde tercih edilir.",
    },
    {
      type: "p",
      text: "Bu rehberde kesit aydınlatmanın hangi durumlarda çalıştığını, metrajın nasıl hesaplandığını ve montajda dikkat edilmesi gereken noktaları ele alıyoruz.",
    },

    { type: "h2", text: "Kesit aydınlatma nerede işe yarar?" },
    {
      type: "ul",
      items: [
        "Gündüz görünümü öncelikli işlerde — paslanmaz, alüminyum veya boyalı harf gündüz malzeme dokusuyla, gece kenar ışığıyla okunur.",
        "İnce ve zarif kimliklerde — kutu harfin dolgun ışığı yerine ince bir ışık hattı, kurumsal ve sakin bir görünüm verir.",
        "İç mekan resepsiyon ve mağaza duvarlarında — yakından bakılan yüzeylerde kenar ışığı hem az kamaştırır hem daha temiz durur.",
        "Ters aydınlatmayla birlikte — arka duvara vuran ışıkla kesit ışığı birlikte kullanıldığında harfe hacim kazandırır.",
      ],
    },

    { type: "h2", text: "Derinlik ve kesit genişliği" },
    {
      type: "p",
      text: "Kesit aydınlatmanın çalışması için harfin kenarında ışık kaynağını gizleyecek bir derinlik olmalıdır. Çok sığ bir harfte LED doğrudan görünür ve nokta nokta parlama ortaya çıkar; çok derin bir harfte ise ışık kenar yüzeyine ulaşmadan içeride kaybolur.",
    },
    {
      type: "table",
      headers: ["Harf derinliği", "Sonuç", "Öneri"],
      rows: [
        ["2-3 cm", "LED noktaları görünür", "Difüzörlü profil şart"],
        ["4-6 cm", "En dengeli sonuç", "Standart tercih"],
        ["7-10 cm", "Işık hattı incelir", "Yüksek yoğunluklu şerit kullanın"],
        ["10 cm üzeri", "Kenar ışığı zayıflar", "Kutu harf veya ters aydınlatma düşünün"],
      ],
    },
    {
      type: "p",
      text: "Kesit genişliği (harfin kenar kalınlığı) ışık hattının kalınlığını belirler. 2 cm'lik bir kesitte ışık ince bir çizgi olarak görünür; 5 cm'lik bir kesitte belirgin bir bant olur. Kesit genişledikçe kullanılan LED'in ışık dağılımının da genişlemesi gerekir, aksi halde bandın ortası parlak, kenarları sönük kalır.",
    },

    { type: "h2", text: "Metraj nasıl hesaplanır?" },
    {
      type: "p",
      text: "Kutu harfte modül adedi harfin alanından çıkar; kesit aydınlatmada ise metraj harfin çevresinden çıkar. Bu ikisi çok farklı sayılardır ve karıştırıldığında sipariş ciddi biçimde şaşar.",
    },
    {
      type: "ul",
      items: [
        "1. Adım — Harf çevresini bulun. Pratik yaklaşım: harf çevresi ≈ 3,2 × harf yüksekliği. 50 cm'lik bir harf yaklaşık 1,6 metre çevre demektir.",
        "2. Adım — Harf adediyle çarpın. 8 harflik 50 cm'lik bir yazı yaklaşık 12,8 metre eder.",
        "3. Adım — İç boşluklu harfleri (O, A, D, P, R) ikinci bir çevre olarak sayın; bu harflerde iç kontur da aydınlatılıyorsa metraj artar.",
        "4. Adım — Köşe dönüşleri ve kesim fireleri için %10 pay ekleyin.",
      ],
    },
    {
      type: "p",
      text: "Çıkan metrajdan güç ve trafo hesabı için [LED şerit güç hesaplama aracını](/araclar/led-serit-guc-hesaplama) kullanabilirsiniz; hesap kesit aydınlatmada da aynı yürür.",
    },

    { type: "h2", text: "Ürün seçimi" },
    {
      type: "p",
      text: "Kesit aydınlatmada iki yaklaşım vardır. Birincisi, harfin kenarına özel üretilmiş kesit aydınlatma modülleri veya profilleri yerleştirmektir; bunlar zaten kenar geometrisine göre tasarlandığı için en temiz sonucu verir. İkincisi, ince COB şerit ile difüzörlü profil kullanmaktır — COB şeridin nokta yapmayan sürekli ışık çizgisi bu iş için özellikle uygundur.",
    },
    {
      type: "p",
      text: "SMD şerit kullanılacaksa yüksek LED yoğunluklu (120 LED/m ve üzeri) bir tip seçilmelidir; 60 LED/m şeritte kenar boyunca noktalar tek tek okunur. COB ile SMD arasındaki farkın ayrıntısı için [karşılaştırma yazımıza](/blog/cob-vs-smd-led-serit) bakabilirsiniz.",
    },

    { type: "h2", text: "Montajda dikkat edilecekler" },
    {
      type: "ul",
      items: [
        "Difüzör kullanın — kaynak doğrudan görünürse tüm etki kaybolur. Difüzörlü profil, ışığı bir çizgi haline getirir.",
        "Kenar yüzeyini açık renk bırakın — koyu boyalı bir kesit ışığın önemli bir kısmını yutar.",
        "Şeridi profile yapıştırın, harfin gövdesine değil — alüminyum profil aynı zamanda soğutucudur, profilsiz montajda ışık akısı ilk yıl içinde düşer.",
        "Besleme kablosunu harfin arkasından çıkarın — kenardan çıkan kablo hem görünür hem su yolu açar.",
        "Dış mekanda IP67 ürün kullanın ve kesim uçlarını yalıtın — yalıtılmamış kesim ucu ürünün IP sınıfını o noktada geçersiz kılar.",
      ],
    },
    {
      type: "p",
      text: "Kesit aydınlatma ürünleri için [Kesit Aydınlatma LED kategorimize](/urunler/kesit-aydinlatma-led), profil ve difüzör için [yardımcı ürünlere](/urunler/yardimci-urunler), COB şerit alternatifleri için [COB LED şerit kategorisine](/urunler/cob-led-serit) bakabilirsiniz.",
    },
  ],
  faq: [
    {
      q: "Kesit aydınlatma nedir?",
      a: "Harfin ön yüzeyini değil kenarını (kesitini) aydınlatan uygulamadır. Harf gündüz kendi malzeme dokusuyla, gece ise kenar boyunca ince bir ışık çizgisiyle okunur.",
    },
    {
      q: "Kesit aydınlatma için harf derinliği kaç cm olmalı?",
      a: "4-6 cm en dengeli sonucu verir. 2-3 cm derinlikte LED noktaları görünür ve difüzörlü profil şart olur; 10 cm üzerinde kenar ışığı zayıflar, kutu harf veya ters aydınlatma daha uygun olur.",
    },
    {
      q: "Kesit aydınlatmada metraj nasıl hesaplanır?",
      a: "Harf çevresinden. Pratik yaklaşım harf çevresi ≈ 3,2 × harf yüksekliği; bu değer harf adediyle çarpılır. İç boşluklu harflerde iç kontur ayrıca sayılır ve fire için %10 pay eklenir.",
    },
    {
      q: "Hangi şerit tipi uygun?",
      a: "COB şerit, nokta yapmayan sürekli ışık çizgisi verdiği için en uygunudur. SMD kullanılacaksa 120 LED/m ve üzeri yoğunlukta bir tip seçilmelidir; 60 LED/m şeritte noktalar tek tek okunur.",
    },
    {
      q: "Kesit aydınlatma kutu harften pahalı mı?",
      a: "Malzeme tarafında genellikle daha ekonomiktir çünkü metraj alan yerine çevreden çıkar. Ancak harf gövdesi gündüz de göründüğü için gövde malzemesi ve işçilik kalitesi daha yüksek tutulur; toplam maliyet çoğu işte benzer çıkar.",
    },
    {
      q: "Kenar ışığının ortası parlak, kenarları sönük görünüyor. Neden?",
      a: "Kullanılan ürünün ışık dağılımı kesit genişliğine göre dar kalmıştır. Kesit genişledikçe daha geniş dağılımlı bir ürün veya difüzörlü profil gerekir.",
    },
  ],
};
