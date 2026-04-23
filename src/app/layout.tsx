import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import SiteFooter from "@/components/SiteFooter";
import FloatWhatsapp from "@/components/FloatWhatsapp";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400","500","600","700"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["400","500"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nadasled.com.tr"),
  title: {
    default: "Nadasled | Tabela Malzemeleri Toptan Tedarikçisi",
    template: "%s | Nadasled",
  },
  description: "LED modül, LED şerit, trafo, kablo ve tabela malzemelerinin toptan tedarikçisi. Türkiye geneli hızlı kargo. Tabelacılara özel toptan fiyatlar.",
  keywords: ["led modül", "led şerit", "tabela malzemeleri", "led trafo", "kablo toptan", "tabelacı malzemesi"],
  openGraph: { type: "website", locale: "tr_TR", siteName: "Nadasled" },
  robots: { index: true, follow: true },
};

const GA_ID = "G-4VYW0MWY61";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${bebasNeue.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');` }} />
      </head>
      <body className="nadas-body-bg nadas-grid-texture min-h-screen flex flex-col" style={{ fontFamily: 'var(--font-sans), DM Sans, system-ui, sans-serif' }}>
        <Nav />
        <main className="flex-1 relative z-[2]">{children}</main>
        <SiteFooter />
        <FloatWhatsapp />
      </body>
    </html>
  );
}
