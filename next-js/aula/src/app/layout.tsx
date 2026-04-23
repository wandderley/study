import "./globals.css";

import { Header } from "../components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aula Next Js do Zero!",
  description: "Aprendendo Next Js do zero como Sujeito Programador!",
  openGraph: {
    title: "Aprendendo Next Js com Sujeoto no Youtube",
    description: "Aprendendo Next Js do zero como Sujeito Programador!",
    // images: ['url here']
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />

        {children}
      </body>
    </html>
  );
}
