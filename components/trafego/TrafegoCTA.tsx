"use client";

import { ArrowRight } from "lucide-react";

const TrafegoCTA = () => {
    return (
        <section className="py-24 bg-dualime text-duabg text-center">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter">
                    Pronto para <br />escalar suas vendas?
                </h2>
                <p className="text-xl md:text-2xl font-medium mb-10 max-w-2xl mx-auto">
                    Não perca mais tempo tentando adivinhar. Fale com um especialista agora mesmo.
                </p>
                <a
                    href="https://wa.me/5585989011558?text=Ola!%20Vi%20a%20pagina%20de%20Trafego%20Pago%20da%20Dua%20e%20gostaria%20de%20saber%20mais."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-10 py-5 bg-black text-white font-bold text-xl rounded-full hover:scale-105 transition-transform shadow-xl"
                >
                    Falar no WhatsApp
                    <ArrowRight className="w-6 h-6" />
                </a>
                <p className="mt-6 text-sm font-medium opacity-80">
                    Resposta em até alguns minutos durante horário comercial.
                </p>
            </div>
        </section>
    );
};

export default TrafegoCTA;
