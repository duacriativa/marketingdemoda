"use client";

import { ArrowRight, CheckCircle, Star } from "lucide-react";

const WA_LINK = "https://wa.me/5585989011558?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Dua%20e%20gostaria%20de%20uma%20reuni%C3%A3o%20estrat%C3%A9gica%20para%20minha%20marca%20de%20moda.";

function trackLead(source: string) {
  if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
    (window as any).fbq("track", "Lead", { content_name: "trafegopago-lp", content_category: source });
  }
}

export default function TrafegoPageV2() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-[#ccff00] selection:text-black">
      <div className="bg-[#ccff00] text-black text-center py-3 px-4 text-sm font-bold tracking-wide">
        ⚡ Apenas 3 vagas disponíveis para abril 2026 — garanta a sua agora
      </div>
      <section className="min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#ccff00]/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ff6600]/10 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block bg-[#ccff00]/10 text-[#ccff00] border border-[#ccff00]/30 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            Especialistas em moda — Meta Ads · Google · TikTok
          </span>
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6">
            Sua marca de moda<br />
            <span className="text-[#ccff00]">vendendo todos os dias</span><br />
            com tráfego pago.
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-10">
            Sem improviso. Campanhas estratégicas no Meta Ads, Google e TikTok geridas por quem só atende marcas de moda.
          </p>
          <a href={WA_LINK} onClick={() => trackLead("hero-cta")} target="_blank" rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-10 py-5 bg-[#ccff00] text-black font-black text-lg rounded-full hover:bg-white transition-all duration-300">
            Quero minha reunião estratégica gratuita
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-gray-500 text-sm mt-4">Sem compromisso · 100% gratuito · Respondemos em até 1h</p>
        </div>
      </section>
      <section className="bg-[#1a1a1a] py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[{value:"100+",label:"Marcas atendidas"},{value:"R$ 30M+",label:"Em vendas geradas"},{value:"250+",label:"Lojistas acelerados"},{value:"100%",label:"Foco em moda"}].map((s,i)=>(
            <div key={i}><div className="text-3xl font-black text-[#ccff00]">{s.value}</div><div className="text-sm text-gray-400 mt-1">{s.label}</div></div>
          ))}
        </div>
      </section>
      <section className="py-24 px-6 bg-[#ccff00] text-black text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">Pronto para escalar<br />sua marca de moda?</h2>
          <p className="text-black/70 text-xl mb-10">Fale com um especialista em tráfego para moda. Sem compromisso.</p>
          <a href={WA_LINK} onClick={() => trackLead("final-cta")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-black text-[#ccff00] font-black text-xl px-12 py-6 rounded-full hover:bg-[#1a1a1a] transition-all duration-300">
            Quero minha reunião estratégica gratuita <ArrowRight className="w-6 h-6" />
          </a>
          <p className="text-black/60 text-sm mt-6">⚡ Apenas 3 vagas em abril · Resposta em até 1h</p>
        </div>
      </section>
      <footer className="py-8 px-6 bg-black border-t border-white/10 text-center">
        <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Dua Criativa · <a href="https://duacriativa.com" className="hover:text-[#ccff00] transition-colors">duacriativa.com</a></p>
      </footer>
    </main>
  );
}