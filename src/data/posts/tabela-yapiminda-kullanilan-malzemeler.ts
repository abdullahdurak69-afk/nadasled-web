import type { BlogPost } from "../blog";

export const tabelaYapimindaKullanilanMalzemeler: BlogPost = {
  slug: "tabela-yapiminda-kullanilan-malzemeler",
  title: "Tabela Yapımında Kullanılan Malzemeler: Eksiksiz Liste",
  metaTitle: "Tabela Yapımında Kullanılan Malzemeler",
  metaDesc:
    "Kutu harf ve ışıklı tabela için tüm malzemeler: LED modül, trafo, pleksi, alüminyum, kablo, silikon. Tedarik listesi, ölçüler ve seçim ipuçları.",
  excerpt:
    "Kutu harften totem tabelaya: ışıklı tabela üretiminin tam malzeme listesi.",
  date: "2026-06-01",
  updated: "2026-08-16",
  readMins: 9,
  categorySlug: "led-modul",
  categoryName: "LED Modül",
  blocks: [
    {
      type: "p",
      text: "Işıklı tabela üretimi; gövde, ışık kaynağı, güç ve montaj olmak üzere dört malzeme grubundan oluşur. Bu rehber, kutu harf ve ışıklı pano işleri için eksiksiz bir tedarik listesi sunar — hangi malzemenin neden gerektiğini ve seçerken nelere bakılacağını da içerir.",
    },

    { type: "h2", text: "1. Işık kaynağı" },
    {
      type: "ul",
      items: [
        "[LED modül](/urunler/led-modul): kutu harf ve derin kasalarda standart çözüm (mercekli, 12V, IP65).",
        "[LED şerit](/urunler/led-serit): ince kasa, çerçeve ve lineer hatlarda.",
        "[Neon LED](/urunler/neon-led): kontur yazılar ve dekoratif hatlar için.",
        "[Point LED](/urunler/point-led): kontur ve animasyon uygulamaları.",
        "[Kesit aydınlatma LED](/urunler/kesit-aydinlatma-led): kanal harfin kesitinden ışık veren işlerde.",
        "[Light box LED](/urunler/light-box-led): ışıklı kutu ve vitrin panolarında geniş açılı modül ve bar.",
      ],
    },
    {
      type: "p",
      text: "Işık kaynağı seçimi harfin derinliğine ve yüzey genişliğine göre yapılır. Bu kararın ayrıntısı için [kutu harf modül seçimi rehberimize](/blog/kutu-harf-icin-led-modul-secimi) bakabilirsiniz.",
    },

    { type: "h2", text: "2. Güç ve kontrol" },
    {
      type: "ul",
      items: [
        "[Trafo / LED sürücü](/urunler/trafo-led-surucu): toplam watt + %20 pay kuralıyla seçilir, dışarıda IP67 şart.",
        "[Kontrol üniteleri](/urunler/led-kontrol-uniteleri): RGB, dimmer ve animasyonlu işlerde.",
        "Sigorta ve pano malzemesi: şebeke girişinde koruma.",
        "Fotosel veya zaman saati: tabelanın otomatik açılıp kapanması için.",
      ],
    },
    {
      type: "p",
      text: "Trafo hesabını göz kararı yapmayın; formül ve hazır tablolar için [LED trafo hesaplama rehberimiz](/blog/led-trafo-hesaplama) yeterli olacaktır.",
    },

    { type: "h2", text: "3. Gövde malzemeleri" },
    {
      type: "table",
      headers: ["Malzeme", "Tipik ölçü", "Kullanım yeri"],
      rows: [
        ["Opal pleksi (akrilik)", "3 mm", "Harf yüzeyi — en homojen ışık"],
        ["Şeffaf pleksi", "3-5 mm", "Folyo kaplanacak yüzeyler"],
        ["Alüminyum kutu harf bandı", "0,5-0,8 mm", "Harf yan duvarı"],
        ["DKP / galvaniz sac", "0,6-1 mm", "Kasa sırtı ve gövde"],
        ["Kompozit panel", "3 mm", "Totem ve pano yüzeyi"],
        ["Alüminyum profil", "kesite göre", "Çerçeve ve şerit yatağı"],
      ],
    },
    {
      type: "p",
      text: "Pleksi kalınlığı doğrudan ışık dağılımını etkiler: 3 mm opal pleksi ışığı iyi dağıtır ama bir kısmını yutar; daha ince levhalarda difüzyon azalır ve modül izi belirginleşir. Şeffaf pleksi üzerine folyo kaplanan işlerde difüzyon neredeyse yoktur, bu yüzden modül yerleşimini sıklaştırmak gerekir.",
    },

    { type: "h2", text: "4. Montaj ve sarf malzemeleri" },
    {
      type: "ul",
      items: [
        "Kablo (0,75-2,5 mm², dış mekan tipi), klemens ve konnektörler.",
        "[WAGO ve hızlı bağlantı aparatları](/urunler/yardimci-urunler): sökülebilir, servis dostu bağlantı.",
        "Silikon: hem yapıştırma hem yalıtım için. Nötr silikon tercih edin; asetik silikon metal yüzeyde korozyon yapar.",
        "Çift taraflı bant: modül sabitlemede; yüzey mutlaka önce temizlenmeli.",
        "Dübel, vida, askı aparatı ve distans (harfi duvardan ayıran mesafe parçası).",
        "Makaron ve kablo sonlandırıcı: açık uçların yalıtımı için.",
      ],
    },

    { type: "h2", text: "Kutu harf için örnek malzeme listesi" },
    {
      type: "p",
      text: "1 metre yüksekliğinde, 10 cm derinliğinde, 6 harflik önden ışıklı bir tabela için tipik ihtiyaç:",
    },
    {
      type: "table",
      headers: ["Kalem", "Yaklaşık miktar"],
      rows: [
        ["1,5W mercekli LED modül", "180-220 adet"],
        ["12V trafo", "2 × 16,5A (2 × 200W)"],
        ["Opal pleksi 3 mm", "1,2 m²"],
        ["Alüminyum harf bandı 10 cm", "22-26 metre"],
        ["Kablo 1 mm²", "35-45 metre"],
        ["Nötr silikon", "3-4 kartuş"],
        ["Distans + dübel + vida", "24 set"],
      ],
    },
    {
      type: "p",
      text: "Miktarlar harf tipografisine göre değişir; geniş gövdeli fontlar (M, W, B) hem daha fazla modül hem daha fazla bant ister. Fire payı olarak bant ve pleksiye %10-15 eklemek yerinde olur.",
    },

    { type: "h2", text: "Tabela tipine göre farklılıklar" },
    {
      type: "ul",
      items: [
        "Önden ışıklı kutu harf: opal pleksi yüzey + mercekli modül. En yaygın tip.",
        "Arkadan ışıklı (halo) harf: pleksi yüzey ışık geçirmez, modüller arkaya bakar. Harf ile duvar arası 3-5 cm distans şart.",
        "Kesit aydınlatmalı kanal harf: ışık harfin yan kesitinden çıkar; ince ve modern görünüm verir.",
        "Işıklı kutu (light box): geniş açılı modül veya LED bar; derinlik-aralık oranı kritik.",
        "Totem tabela: çift yüzlü kasa, iç aydınlatma ve rüzgâr yükünü taşıyacak gövde hesabı gerekir.",
      ],
    },

    { type: "h2", text: "Malzeme seçerken sık yapılan hatalar" },
    {
      type: "ul",
      items: [
        "Asetik silikon kullanmak — metal ve elektronik yüzeylerde korozyon yapar, nötr silikon tercih edin.",
        "Kaplama (CCA) kablo almak; direnci yüksek olduğu için ısınır ve voltaj düşümü yaratır.",
        "Pleksi kalınlığını ışık hesabından bağımsız seçmek.",
        "Dış mekan işinde iç mekan trafosu kullanmak.",
        "Modülleri farklı partilerden tamamlamak; renk sıcaklığı tutmaz.",
        "Fire payı bırakmadan sipariş vermek; eksik kalan malzeme işi günlerce bekletir.",
      ],
    },

    {
      type: "p",
      text: "Nadasled olarak ışık, güç ve sarf gruplarının tamamını tek kargoda gönderiyoruz. Malzeme listenizi veya tabela ölçülerinizi WhatsApp'tan iletin; eksiksiz listeyi çıkarıp toptan fiyatla tek seferde tedarik edelim.",
    },
  ],
  faq: [
    {
      q: "Kutu harf yapımında hangi malzemeler gerekir?",
      a: "Dört grup: ışık kaynağı (LED modül), güç (trafo ve kablo), gövde (opal pleksi, alüminyum harf bandı, sırt sacı) ve sarf malzemeleri (silikon, konnektör, distans, vida). Bunların hepsi olmadan iş tamamlanmaz.",
    },
    {
      q: "Kutu harfte hangi kalınlıkta pleksi kullanılır?",
      a: "Standart 3 mm opal pleksidir; ışığı en homojen dağıtan seçenektir. Şeffaf pleksi üzerine folyo kaplanan işlerde 3-5 mm kullanılır, ancak difüzyon azaldığı için modül yerleşimi sıklaştırılmalıdır.",
    },
    {
      q: "Tabelada hangi silikon kullanılmalı?",
      a: "Nötr (oksim) silikon kullanın. Asetik silikon kürlenirken asetik asit açığa çıkarır ve metal yüzeylerde, LED bacaklarında korozyona yol açar. Fiyat farkı küçük, sonuç farkı büyüktür.",
    },
    {
      q: "Işıklı tabela için ne kadar kablo gerekir?",
      a: "Harf sayısı ve trafo konumuna bağlıdır. 6 harflik bir tabelada 35-45 metre 1 mm² kablo tipik bir değerdir. Kesit akıma göre seçilir: 5 A'e kadar 0,75 mm², 10 A'e kadar 1 mm².",
    },
    {
      q: "Arkadan ışıklı (halo) harfte ne değişir?",
      a: "Pleksi yüzey ışık geçirmez hale gelir, modüller harfin arkasına bakacak şekilde yerleştirilir ve harf duvardan 3-5 cm distansla ayrılır. Işık duvardan yansıyarak göründüğü için duvar rengi ve dokusu sonucu doğrudan etkiler.",
    },
    {
      q: "Malzemeleri tek yerden tedarik etmenin avantajı ne?",
      a: "Modül, trafo ve kablo birbirine uyumlu seçilir; renk sıcaklığı aynı partiden gelir ve tek kargoda ulaşır. Parça parça alınan malzemelerde en sık görülen sorun, sonradan tamamlanan modüllerin renk tutmaması ve eksik kalemin işi bekletmesidir.",
    },
  ],
};
