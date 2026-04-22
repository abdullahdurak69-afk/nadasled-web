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

const GA_ID = "G-4VYW0MWY61";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`,
          }}
        />
      </head>
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
