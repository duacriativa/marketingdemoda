"use client";

import { CheckCircle } from "lucide-react";

const services = [
    {
        title: "Meta Ads (Instagram & Facebook)",
        items: [
            "Campanhas de Carrossel e Vídeo",
            "Integração com Catálogo (Sacolinha)",
            "Públicos Personalizados (Lookalike)",
            "Remarketing Dinâmico"
        ]
    },
    {
        title: "Google Ads (Pesquisa & Shopping)",
        items: [
            "Rede de Pesquisa (Fundo de Funil)",
            "Google Shopping para E-commerce",
            "Youtube Ads para Branding",
            "Performance Max"
        ]
    },
    {
        title: "TikTok Ads",
        items: [
            "Anúncios Nativos (UGC)",
            "Parcerias com Creators",
            "Desafios e Trends",
            "Spark Ads"
        ]
    }
];

const TrafegoServices = () => {
    return (
        <section className="py-24 bg-duagrey relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        O que vamos <span className="text-dualime">implementar</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Dominamos as principais plataformas de anúncios para garantir que sua marca esteja onde seu cliente está.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-duabg p-8 rounded-2xl border border-white/5 hover:border-dualime/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-6 pb-4 border-b border-white/10">
                                {service.title}
                            </h3>
                            <ul className="space-y-4">
                                {service.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                                        <CheckCircle className="w-5 h-5 text-dualime shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrafegoServices;
