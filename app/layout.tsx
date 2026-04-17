import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Changed from Geist to Montserrat
import Script from "next/script";
import FacebookPixel from "@/components/FacebookPixel";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});
export const metadata: Metadata = {
  title: "Dua Criativa - Agência de Marketing para Moda",
  description: "A Dua é a agência que pensa como sócia, executa como time interno e estrutura marcas de moda para escalar sem improviso.",
  verification: {
    google: "2JeGSizER7sVoZ7Iz709zxnxIxCEaefY5rfqrE9IClg",
  },
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
        {/* Google Tag Manager - Fixed JS Syntax Error + Direct Analytics */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T9WQ7M65');
          `}
        </Script>
        {/* Google Analytics GA4 */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1TF1L4L29R');
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1TF1L4L29R"
          strategy="afterInteractive"
        />
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
        >
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "vdwfpnyqd7");`}
        </Script>
        <FacebookPixel />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T9WQ7M65"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
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
        <WhatsAppButton />
      </body>
    </html >
  );
}
