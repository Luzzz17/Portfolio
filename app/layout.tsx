import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leofernandez.fr"),
  title: "Léo FERNANDEZ | Alternance Ingénieur Informatique - Hauts-de-France & Mobilité Nationale",
  description: "Étudiant en BUT Informatique (RACA) à la recherche d'une alternance de 3 ans en conception logicielle. Basé dans les Hauts-de-France, mobile nationalement (Amiens, Beauvais, Compiègne, Paris, IDF).",
  keywords: ["Alternance", "Informatique", "Ingénieur", "Hauts-de-France", "Mobilité Nationale", "Paris", "IDF", "Amiens", "Beauvais", "Compiègne", "Développeur", "BUT RACA", "Software Engineer"],
  authors: [{ name: "Léo Fernandez" }],
  creator: "Léo Fernandez",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://leofernandez.fr",
    title: "Léo FERNANDEZ | Alternance Ingénieur Informatique",
    description: "Futur ingénieur en conception logicielle. Recherche alternance de 3 ans. Hauts-de-France & Mobilité Nationale.",
    siteName: "Portfolio Léo Fernandez",
    images: [
      {
        url: "/leo.png",
        width: 800,
        height: 800,
        alt: "Léo Fernandez - Futur Ingénieur Informatique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Léo FERNANDEZ | Alternance Ingénieur Informatique",
    description: "Recherche alternance de 3 ans en informatique (Hauts-de-France & Mobilité Nationale).",
    images: ["/leo.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-slate-50 dark:bg-black text-slate-900 dark:text-slate-100 relative transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {/* Grain Overlay */}
          <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.03] dark:opacity-[0.03] opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-multiply dark:mix-blend-normal"></div>

          {/* Global Technical Grid */}
          <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

          <Navbar />
          <main className="relative z-10">
            {children}
          </main>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
