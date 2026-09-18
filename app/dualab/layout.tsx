import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DUA LAB — Marketing 360° para Marcas de Moda | Dua Criativa",
  description:
    "100% focados em moda. Social media, tráfego pago e CRM integrados para levar sua marca do zero aos 100k/mês. Reunião estratégica gratuita.",
  openGraph: {
    title: "DUA LAB — Marketing 360° para Marcas de Moda",
    description:
      "100% focados em moda. Social media, tráfego pago e CRM integrados para levar sua marca do zero aos 100k/mês.",
    url: "https://duacriativa.com/dualab",
    siteName: "Dua Criativa",
    images: [
      {
        url: "https://duacriativa.com/og-dualab.jpg",
        width: 980,
        height: 1225,
        alt: "DUA LAB — Dua Criativa, agência de marketing para marcas de moda",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DUA LAB — Marketing 360° para Marcas de Moda",
    description: "100% focados em moda. Social media, tráfego pago e CRM integrados.",
    images: ["https://duacriativa.com/og-dualab.jpg"],
  },
};

export default function DuaLabLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
