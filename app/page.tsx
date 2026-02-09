import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import Team from "@/components/Team";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";

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
          <a
            href="https://duacriativa.com.br/quillforms/form-lp-dua"
            className="inline-block px-10 py-5 bg-black text-white font-bold text-xl rounded-full hover:scale-105 transition-transform shadow-xl"
          >
            Solicitar Orçamento
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
