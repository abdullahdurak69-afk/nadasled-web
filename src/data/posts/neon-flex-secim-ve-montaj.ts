import type { BlogPost } from "../blog";

export const neonFlexSecimVeMontaj: BlogPost = {
  slug: "neon-flex-secim-ve-montaj",
  title: "Neon LED (Neon Flex) Nedir? Seçim ve Montaj Rehberi",
  metaTitle: "Neon LED (Neon Flex) Nedir? Seçim ve Montaj",
  metaDesc:
    "Neon flex rehberi: cam neondan farkı, tip seçimi, bükülme yönü, kesme ve uç kapama, montaj adımları ve sık yapılan hatalar. Toptan neon LED çeşitleri.",
  excerpt:
    "Cam neonun esnek ve dayanıklı alternatifi: neon flex seçimi, kesimi ve montajı.",
  date: "2026-06-07",
  readMins: 9,
  categorySlug: "neon-led",
  categoryName: "Neon LED",
  blocks: [
    {
      type: "p",
      text: "Neon flex, silikon gövdeye gömülü LED şeridin klasik cam neon görünümünü vermesidir. Kırılmaz, 12V güvenli voltajla çalışır, cam neonun onda biri enerji harcar ve ustalarımızın tabiriyle 'makasla neon çekilmesini' sağlar.",
    },
    {
      type: "p",
      text: "Ancak neon flex'i cam neondan ayıran şey yalnızca kolaylık değil; kendine özgü kuralları da var. Bunların en önemlisi bükülme yönüdür ve sahada en çok hasar bu kuralın bilinmemesinden doğar.",
    },

    { type: "h2", text: "Cam neon ile neon flex karşılaştırması" },
    {
      type: "table",
      headers: ["Özellik", "Cam neon", "Neon flex"],
      rows: [
        ["Dayanıklılık", "Kırılgan", "Esnek, kırılmaz"],
        ["Voltaj", "Yüksek gerilim (trafo riski)", "12V / 24V güvenli"],
        ["Tüketim", "Yüksek", "Düşük (LED)"],
        ["Montaj", "Usta işi, yavaş", "Kes-yapıştır hızında"],
        ["Renk değişimi", "Gaz tipine bağlı", "36 renk + RGB seçenekleri"],
        ["Onarım", "Tüp değişimi gerekir", "Bozuk segment kesilip değiştirilir"],
      ],
    },

    { type: "h2", text: "Tip seçimi: hangi neon nerede?" },
    {
      type: "p",
      text: "Neon flex tek bir ürün değil, birkaç farklı profil ailesidir. Seçim, ışığın hangi yönden görüneceğine göre yapılır.",
    },
    {
      type: "ul",
      items: [
        "Flat neon: önden bakışta düz ve geniş bir ışık bandı verir. Tabela yazısı ve logo konturu için en yaygın tip.",
        "Silikon neon: daha yumuşak ve esnektir, dar yarıçaplı dönüşleri kaldırır. Yoğun kavisli yazılarda tercih edilir.",
        "D-Shape: yan yüzeyden montaja uygundur; duvara dik yerleşimlerde ve raf kenarlarında kullanılır.",
        "360° neon: her yönden ışık verir. Asılı yazılar ve arkası da görünen uygulamalar için.",
        "Mix ve RGB seriler: renk değişimi gereken dekoratif işlerde; [kontrol ünitesi](/urunler/led-kontrol-uniteleri) ile birlikte çalışır.",
        "220V seriler: doğrudan şebekeye bağlanır, trafo gerektirmez. Uzun düz hatlarda pratiktir ama kesim aralıkları çok uzundur.",
      ],
    },

    { type: "h2", text: "En kritik konu: bükülme yönü" },
    {
      type: "p",
      text: "Her neon profili tek bir yönde bükülmek üzere üretilir. Flat neon yatay düzlemde bükülür; dikey bükülmeye zorlanırsa içindeki PCB çatlar ve o noktadan sonrası söner. Bu arıza çoğu zaman montaj sırasında değil, birkaç hafta sonra ortaya çıkar — yani iş teslim edildikten sonra.",
    },
    {
      type: "p",
      text: "Harf tasarımında keskin köşe varsa, köşe bükülerek değil kesilip birleştirme aparatıyla dönülür. Minimum bükülme yarıçapı her seride farklıdır ve zorlanmaz. Soğuk havada silikon sertleşir; bükmeden önce ürünü oda sıcaklığına getirin.",
    },

    { type: "h2", text: "Nasıl kesilir ve uçlar nasıl kapatılır?" },
    {
      type: "ul",
      items: [
        "Sadece üzerindeki kesim işaretlerinden kesin. Bu aralık seriye göre 2,5 cm ile 10 cm arasında değişir; işaret dışından kesilen parça çalışmaz.",
        "Kesilen uca pin konnektör takıp uç kapağını silikonlayın; dış mekanda bu adım şarttır.",
        "Uç kapağını takarken silikonu hem kapağın içine hem profilin ağzına sürün; tek yüzeye sürülen silikon zamanla ayrılır.",
        "Silikonun tam kürlenmesi için montajdan önce en az 4-6 saat bekleyin.",
        "Yazı ve logo bükümlerinde modele göre 1-2 cm çapa kadar inilebilir; zorlamayın.",
      ],
    },
    {
      type: "p",
      text: "Açık bırakılan tek bir uç, dış mekanda tüm parçayı bitirmeye yeter. Nem profil içinde ilerler ve arıza kesik uçtan metrelerce ötede ortaya çıkabilir. IP65 koruma sınıfı, en zayıf noktadaki tek bir açık uç yüzünden anlamsız hale gelir.",
    },

    { type: "h2", text: "Montaj: profil, klips ve yapıştırma" },
    {
      type: "p",
      text: "Neon flex'i doğrudan yüzeye yapıştırmak kısa vadede işe yarar, uzun vadede dalgalanma yapar. Doğru yöntem alüminyum veya PVC kanal profil kullanmaktır: profil hem düz bir hat verir hem neonu mekanik olarak tutar. Kavisli yazılarda kanal yerine klips kullanılır; klipsler 15-20 cm aralıklarla, dönüşlerde daha sık yerleştirilir.",
    },
    {
      type: "p",
      text: "Arkalık kullanılan işlerde (pleksi veya kompozit üzerine monte edilen yazılarda) neonun oturacağı kanal CNC ile açılır. Bu, en temiz görünümü veren yöntemdir ve neonu darbeye karşı da korur.",
    },

    { type: "h2", text: "Besleme ve maksimum uzunluk" },
    {
      type: "table",
      headers: ["Voltaj", "Tek beslemeyle azami uzunluk", "Not"],
      rows: [
        ["12V", "~5 metre", "Kısa yazı ve logo işleri"],
        ["24V", "~10 metre", "Uzun kontur ve cephe hatları"],
        ["220V", "20-50 metre (seriye göre)", "Trafo gerekmez, kesim aralığı uzun"],
      ],
    },
    {
      type: "p",
      text: "Bu sınır aşıldığında hattın sonunda renk sararması ve gözle görülür sönükleşme oluşur. Çözüm, hattı segmentlere bölüp her segmenti [trafodan](/urunler/trafo-led-surucu) ayrı beslemektir. Uzun cephe işlerinde 24V seri seçmek hem kablo hem trafo tarafında işi kolaylaştırır.",
    },

    { type: "h2", text: "İç mekan mı, dış mekan mı?" },
    {
      type: "p",
      text: "Silikon gövdeli neon flex IP65 su geçirmezdir; dış cephe yazıları, bahçe ve teras hatları, vitrin çerçeveleri için uygundur. UV dayanımlı silikon güneşte sararmaz — ancak bu her seride standart değildir, dış mekan işlerinde UV dayanımını mutlaka teyit edin. İç mekanda ise duvar yazıları, ayna arkası ve raf altı uygulamaları en popüler kullanımlardır.",
    },

    { type: "h2", text: "Sık yapılan hatalar" },
    {
      type: "ul",
      items: [
        "Profilin bükülme yönüne aykırı montaj — kalıcı hasarın birinci sebebi.",
        "Kesik uçları silikonlamadan dış mekana montaj.",
        "Kanal profil veya klips kullanmadan doğrudan yapıştırma.",
        "Uzun hattı tek uçtan beslemek.",
        "Makara üzerindeyken uzun süre yakarak test etmek; sarılı haldeki ısı birikimi silikonu ve LED'i yorar.",
        "İç mekan serisini dış cepheye monte etmek.",
      ],
    },

    {
      type: "p",
      text: "36 farklı renk ve kesit seçeneğini [Neon LED kategorimizde](/urunler/neon-led) bulabilirsiniz. Projenizin metrajını ve yazı tasarımını iletin; trafo, konnektör ve uç kapaklarıyla komple set halinde fiyatlandıralım.",
    },
  ],
  faq: [
    {
      q: "Neon LED nereden kesilir?",
      a: "Yalnızca profil üzerindeki işaretli kesim noktalarından. Bu aralık seriye göre 2,5 cm ile 10 cm arasında değişir. İşaret dışından kesilen parça çalışmaz ve geri dönüşü yoktur.",
    },
    {
      q: "Neon flex hangi yöne bükülür?",
      a: "Her profil tek bir yönde bükülmek üzere üretilir. Flat neon yatay düzlemde bükülür; dikey zorlandığında içindeki PCB çatlar ve o noktadan sonrası söner. Keskin köşelerde bükmek yerine kesip birleştirme aparatı kullanın.",
    },
    {
      q: "Tek trafoya kaç metre neon bağlanır?",
      a: "12V serilerde tek beslemeyle yaklaşık 5 metre, 24V serilerde yaklaşık 10 metre. Daha uzun hatlar segmentlere bölünüp her segment ayrı beslenmelidir; aksi halde hattın sonunda sararma ve sönükleşme olur.",
    },
    {
      q: "Neon LED dış mekanda kullanılabilir mi?",
      a: "Evet, IP65 silikon gövdeli seriler dış mekan için üretilir. Ancak kesilen tüm uçların kapak ve silikonla kapatılması şarttır; açık bırakılan tek bir uç nedeniyle profil içine giren nem tüm parçayı bitirir. Dış mekan işlerinde UV dayanımını da teyit edin.",
    },
    {
      q: "Neon LED mi cam neon mu daha ekonomik?",
      a: "Neon flex hem ilk yatırımda hem işletmede daha ekonomiktir: yaklaşık onda bir enerji harcar, montajı çok daha hızlıdır ve arızalanan segment tüm tüpü değiştirmeden onarılabilir. Cam neonun tek üstünlüğü, çok özel tasarımlarda usta işi kıvrım kalitesidir.",
    },
    {
      q: "220V neon LED için trafo gerekir mi?",
      a: "Hayır, 220V seriler doğrudan şebekeye bağlanır ve kendi fişli kontrol ünitesiyle gelir. Buna karşılık kesim aralıkları çok daha uzundur (genellikle 1 metre), bu yüzden hassas ölçü isteyen yazı işlerinde 12V veya 24V seriler tercih edilir.",
    },
  ],
};
