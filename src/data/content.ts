// Blog yazıları ve araç sayfalarının ortak metin tipleri.
//
// Blok listesi hem /blog/[slug] hem /araclar/[slug] tarafından aynı Prose
// bileşeniyle render edilir; tip burada durur ki iki veri dosyası birbirini
// import etmek zorunda kalmasın.

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] };

export interface FaqItem {
  q: string;
  a: string;
}
