"use client";

import { motion } from "framer-motion";
import { TrendingUp, Target, RefreshCw } from "lucide-react";

const benefits = [
    {
        icon: <TrendingUp className="w-12 h-12 text-dualime" />,
        title: "Escala Previsível",
        description: "Saia do 'boca a boca' e tenha um fluxo constante de novos clientes todos os dias."
    },
    {
        icon: <Target className="w-12 h-12 text-dualime" />,
        title: "Público Qualificado",
        description: "Chega de curiosos. Anunciamos para quem realmente tem interesse e poder de compra."
    },
    {
        icon: <RefreshCw className="w-12 h-12 text-dualime" />,
        title: "Remarketing Inteligente",
        description: "Recupere quem visitou seu site e não comprou com estratégias avançadas de perseguição."
    }
];

const TrafegoBenefits = () => {
    return (
        <section className="py-24 bg-duabg relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Por que contratar uma <span className="text-dualime">gestão profissional</span>?
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        O mercado de moda é competitivo. Sem estratégia, você está apenas gastando dinheiro.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {benefits.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-dualime/50 transition-colors group"
                        >
                            <div className="mb-6 p-4 bg-duabg rounded-full w-fit group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrafegoBenefits;
