import type { Metadata } from "next";
import { Alexandria } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";

const alexandria = Alexandria({
  variable: "--font-alexandria",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gustavo Desenvolvedor",
  description: "Developer Full stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${alexandria.variable} ${alexandria.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
