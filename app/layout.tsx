import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Changed from Geist to Montserrat
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"], // Added weights for design flexibility
});

export const metadata: Metadata = {
  title: "Dua Criativa - Agência de Marketing para Moda",
  description: "A Dua é a agência que pensa como sócia, executa como time interno e estrutura marcas de moda para escalar sem improviso.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
