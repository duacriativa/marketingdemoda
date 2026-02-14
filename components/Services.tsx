"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Camera, BarChart3, Users, MessageSquare, ShoppingBag, BrainCircuit, Clapperboard, PenTool } from "lucide-react";

const services = [
    {
        icon: <Camera className="w-8 h-8 text-dualime" />,
        title: "Gestão de Redes Sociais",
        description: "Criação de conteúdo estratégico que conecta e engaja. Transformamos seguidores em fãs da marca."
    },
    {
        icon: <BarChart3 className="w-8 h-8 text-dualime" />,
        title: "Tráfego Pago (Ads)",
        description: "Criação e otimização de campanhas no Meta e Google Ads focadas em ROI e vendas reais.",
        link: "/trafegopago"
    },
    {
        icon: <BrainCircuit className="w-8 h-8 text-dualime" />,
        title: "CRM e Inteligência",
        description: "Gestão de relacionamento com cliente e automação de atendimento com IA para não perder vendas."
    },
    {
        icon: <ShoppingBag className="w-8 h-8 text-dualime" />,
        title: "Consultoria E-commerce",
        description: "Análise profunda da sua loja online para melhorar a conversão e a experiência do usuário."
    },
    {
        icon: <Users className="w-8 h-8 text-dualime" />,
        title: "Branding & Posicionamento",
        description: "Definição da identidade visual e verbal da sua marca para se destacar no mercado de moda."
    },
    {
        icon: <MessageSquare className="w-8 h-8 text-dualime" />,
        title: "Lançamento de Coleções",
        description: "Estratégias completas para lançamentos de alto impacto e picos de vendas."
    },
    {
        icon: <PenTool className="w-8 h-8 text-dualime" />,
        title: "Criação de Criativos",
        description: "Design de alta performance para anúncios e posts. Artes que chamam atenção e convertem."
    },
    {
        icon: <Clapperboard className="w-8 h-8 text-dualime" />,
        title: "Produção de Foto e Vídeo",
        description: "Editoriais de moda, lookbooks e vídeos para Reels/TikTok."
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-duabg relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-dualime/5 rounded-full blur-[150px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-white text-3xl md:text-5xl font-bold mb-6">
                        Tudo o que sua marca precisa para <span className="text-dualime">vender mais</span>.
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Nossa esteira de serviços cobre todas as pontas do marketing de moda, garantindo consistência e resultado.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const cardContent = (
                            <>
                                <div className="mb-6 p-4 rounded-full bg-white/5 w-fit group-hover:bg-dualime/20 transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                    {service.title}
                                    {/* @ts-ignore */}
                                    {service.link && <span className="text-xs bg-dualime text-black px-2 py-0.5 rounded-full">Novo</span>}
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {service.description}
                                </p>
                            </>
                        );

                        // @ts-ignore
                        if (service.link) {
                            return (
                                <Link key={index} href={service.link} className="block group">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 group-hover:border-dualime/50 transition-colors group-hover:-translate-y-2 duration-300 cursor-pointer"
                                    >
                                        {cardContent}
                                    </motion.div>
                                </Link>
                            );
                        }

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-dualime/50 transition-colors group hover:-translate-y-2 duration-300"
                            >
                                {cardContent}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
