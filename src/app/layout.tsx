import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nadasled.com.tr"),
  title: {
    default: "Nadasled | Tabela Malzemeleri Toptan Tedarikçisi",
    template: "%s | Nadasled",
  },
  description:
    "LED modül, LED şerit, trafo, kablo ve tabela malzemelerinin toptan tedarikçisi. Türkiye geneli hızlı kargo. Tabelacılara özel toptan fiyatlar.",
  keywords: ["led modül", "led şerit", "tabela malzemeleri", "led trafo", "kablo toptan", "tabelacı malzemesi"],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Nadasled",
  },
  robots: { index: true, follow: true },
};

// TODO: GTM ID'nizi buraya girin
const GTM_ID = "GTM-XXXXXXX";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
