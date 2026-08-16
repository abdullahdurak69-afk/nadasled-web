/**
 * Sitenin tek kanonik varlık (entity) tanımı.
 *
 * Neden tek dosya: daha önce işletme bilgisi üç ayrı yerde, üç ayrı JSON-LD
 * düğümü olarak duruyordu (ana sayfada LocalBusiness, /iletisim'de Store, blog
 * yazılarında author/publisher olarak Organization). Arama motorları ve dil
 * modelleri açısından bunlar birbirine bağlanmamış üç ayrı işletme demekti ve
 * her birinde bilginin farklı bir kısmı eksikti.
 *
 * Çözüm: tek bir düğüm sabit bir `@id` ile root layout'ta yayınlanır, diğer
 * şemalar yalnızca `{"@id": ORG_ID}` diye referans verir. Düğüm her sayfada
 * bulunduğu için referanslar aynı sayfa içinde çözülür.
 *
 * Store tipi seçildi: Organization → LocalBusiness → Store zincirinin en alt
 * halkası olduğu için üst tiplerin anlamını da taşır ve işletmeyi olduğu gibi
 * tarif eder (Ümraniye'de toptan satış noktası).
 *
 * Bilerek yok: Product / Offer / makesOffer. Fiyat proje bazlı verildiği için
 * Google'ın zorunlu tuttuğu offers ve review alanları doldurulamıyor; daha önce
 * Product tipi Search Console'da tam bu yüzden hata vermişti (bkz. 9946f22).
 */

export const SITE = "https://www.nadasled.com.tr";

/** İşletme düğümünün kalıcı kimliği. Referans veren her şema bunu kullanır. */
export const ORG_ID = `${SITE}/#organization`;

/** Site düğümünün kalıcı kimliği. */
export const SITE_ID = `${SITE}/#website`;

/** Başka şemaların işletmeye bağlanmak için gömdüğü kısa referans. */
export const orgRef = { "@id": ORG_ID };

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Store",
  "@id": ORG_ID,
  name: "Nadasled",
  url: SITE,
  logo: { "@type": "ImageObject", url: `${SITE}/logo.png` },
  image: `${SITE}/images/og.jpg`,
  description:
    "İstanbul merkezli tabela malzemeleri toptancısı. LED modül, LED şerit, neon LED, " +
    "trafo ve yardımcı ekipmanı tabelacılara, reklam ajanslarına ve uygulamacılara " +
    "faturalı toptan satar; Türkiye geneli kargo gönderir.",
  foundingDate: "2016",
  telephone: "+905414696966",
  email: "nadasled@gmail.com",
  priceRange: "₺₺",
  currenciesAccepted: "TRY",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Çakmak, Yeşilbahar Sokağı No:15/A",
    addressLocality: "Ümraniye",
    addressRegion: "İstanbul",
    postalCode: "34774",
    addressCountry: "TR",
  },
  areaServed: { "@type": "Country", name: "Türkiye" },
  // sameAs, aynı adı taşıyan başka işletmelerden ayrışmayı sağlayan asıl
  // sinyal: doğrulanabilir bir dış profil işletmeyi gerçek bir varlığa bağlar.
  sameAs: ["https://www.instagram.com/nadasled/"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+905414696966",
    email: "nadasled@gmail.com",
    contactType: "sales",
    areaServed: "TR",
    availableLanguage: ["Turkish"],
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:30",
    closes: "19:00",
  },
  // knowsAbout, işletmeyi konu başlıklarına bağlar. Dil modelleri "kim bu
  // konuda kaynak" sorusunu yanıtlarken bu alanı kullanır; fiyat verisi
  // gerektirmediği için Product tipinin sorununu da yaşatmaz.
  knowsAbout: [
    "LED modül",
    "LED şerit",
    "COB LED şerit",
    "Neon LED",
    "LED trafo ve sürücü seçimi",
    "Kutu harf tabela aydınlatması",
    "Işıklı tabela üretimi",
    "Kesit aydınlatma",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": SITE_ID,
  url: SITE,
  name: "Nadasled",
  inLanguage: "tr-TR",
  publisher: orgRef,
};
