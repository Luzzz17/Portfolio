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
  title: "Portfolio - Léo FERNANDEZ",
  description: "Portfolio de Léo Fernandez, Ingénieur Informatique (BUT RACA). À la recherche d'une alternance de 3 ans en conception logicielle et systèmes sécurisés.",
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="h-full bg-black overflow-hidden">
        <style dangerouslySetInnerHTML={{ __html: `
          ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
          }
          ::-webkit-scrollbar-track {
            background: transparent;
          }
          ::-webkit-scrollbar-thumb {
            background: #1e293b;
            border-radius: 20px;
            border: 2px solid #000;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #10b981;
          }
          * {
            scrollbar-width: thin;
            scrollbar-color: #1e293b transparent;
          }
        `}} />
        {children}
      </body>
    </html>
  );
}
