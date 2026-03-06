"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import Team from "@/components/Team";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import { pushEvent } from "@/lib/gtm";

import { Suspense } from 'react';
import LeadForm from '@/components/LeadForm';

export default function Home() {

  return (
    <main className="min-h-screen bg-duabg text-white selection:bg-dualime selection:text-black">
      <Navbar />
      <Hero />
      <Clients />
      <Methodology />
      <Services />
      <Team />
      <Feedback />

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-dualime text-duabg text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter">
            Sua marca merece<br />vender mais.
          </h2>
          <p className="text-xl md:text-2xl font-medium mb-10 max-w-2xl mx-auto">
            Não deixe dinheiro na mesa. Agende uma reunião estratégica com nosso time comercial.
          </p>
          <div className="max-w-xl mx-auto bg-black text-white p-10 rounded-3xl shadow-2xl text-left">
            <h3 className="text-2xl font-black mb-2">Solicitar Orçamento</h3>
            <p className="text-gray-400 text-sm mb-8">Preencha os dados e entramos em contato em até 24h.</p>
            <Suspense fallback={<div className="h-40 flex items-center justify-center animate-pulse text-lime-400">Carregando...</div>}>
              <LeadForm clientSlug="dua-criativa" />
            </Suspense>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
