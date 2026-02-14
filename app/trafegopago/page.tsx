import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrafegoHero from "@/components/trafego/TrafegoHero";
import TrafegoBenefits from "@/components/trafego/TrafegoBenefits";
import TrafegoServices from "@/components/trafego/TrafegoServices";
import TrafegoCTA from "@/components/trafego/TrafegoCTA";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Tráfego Pago para Moda | Dua Criativa",
    description: "Escale as vendas da sua marca de moda com campanhas de alta performance no Meta Ads, Google Ads e TikTok Ads.",
};

export default function TrafegoPage() {
    return (
        <main className="min-h-screen bg-duabg text-white selection:bg-dualime selection:text-black">
            <Navbar />
            <TrafegoHero />
            <TrafegoBenefits />
            <TrafegoServices />
            <TrafegoCTA />
            <Footer />
        </main>
    );
}
