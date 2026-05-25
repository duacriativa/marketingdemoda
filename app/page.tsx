"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import { Suspense } from "react";

// Below-fold sections lazy-loaded — each becomes a separate JS chunk
const Services     = dynamic(() => import("@/components/Services"));
const Bastidores   = dynamic(() => import("@/components/Bastidores"));
const FeedPortfolio = dynamic(() => import("@/components/FeedPortfolio"));
const QuoteBanner  = dynamic(() => import("@/components/QuoteBanner"));
const Feedback     = dynamic(() => import("@/components/Feedback"));
const ParaQuem     = dynamic(() => import("@/components/ParaQuem"));
const Methodology  = dynamic(() => import("@/components/Methodology"));
const MiniCases    = dynamic(() => import("@/components/MiniCases"));
const Footer       = dynamic(() => import("@/components/Footer"));
const LeadForm     = dynamic(() => import("@/components/LeadForm"), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-duabg text-white selection:bg-dualime selection:text-black">
      <div className="bg-dualime text-black text-center py-3 px-4 text-sm font-bold tracking-wide relative z-50">
        ⚡ Apenas 2 vagas disponíveis para Junho 2026 — garanta a sua agora
      </div>

      {/* Above-fold — loaded immediately */}
      <Hero />
      <Clients />

      {/* Below-fold — lazy loaded */}
      <Services />
      <Bastidores />
      <FeedPortfolio />
      <QuoteBanner />
      <Feedback />
      <ParaQuem />
      <Methodology />
      <MiniCases />

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-dualime text-duabg text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter">
            Sua marca merece<br />vender mais.
          </h2>
          <p className="text-xl md:text-2xl font-medium mb-10 max-w-2xl mx-auto">
            Não deixe dinheiro na mesa. Agende uma reunião estratégica gratuita com nosso time.
          </p>
          <div className="max-w-xl mx-auto bg-black text-white p-10 rounded-3xl shadow-2xl text-left">
            <h3 className="text-2xl font-black mb-2">Saiba como a Dua pode ajudar a sua marca de moda!</h3>
            <p className="text-gray-400 text-sm mb-8">
              Preencha os dados e vamos te chamar no WhatsApp em até 10 minutos.
            </p>
            <Suspense fallback={<div className="h-40 flex items-center justify-center animate-pulse text-dualime">Carregando...</div>}>
              <LeadForm clientSlug="dua-criativa" />
            </Suspense>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
