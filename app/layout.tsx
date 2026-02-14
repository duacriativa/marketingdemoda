import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Changed from Geist to Montserrat
import Script from "next/script";
import FacebookPixel from "@/components/FacebookPixel";
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1TF1L4L29R"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-1TF1L4L29R');
          `}
        </Script>
        <FacebookPixel />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2344835272651307&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html >
  );
}
