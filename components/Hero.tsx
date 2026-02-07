"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-duabg overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-dualime/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-duaorange/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-dualime font-bold text-lg md:text-xl tracking-widest mb-4 uppercase">
                        Especialistas em Moda
                    </h2>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-8 tracking-tight">
                        AGÊNCIA DE MARKETING DE MODA QUE PENSA COMO <span className="text-transparent bg-clip-text bg-gradient-to-r from-dualime to-white">SÓCIA</span>.
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        Do estratégico ao tráfego pago. Executamos como seu time interno ponta a ponta!
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="#contact"
                            className="group px-8 py-4 bg-dualime text-duabg font-bold text-lg rounded-full hover:bg-white transition-all duration-300 flex items-center gap-2"
                        >
                            Começar Agora
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#services"
                            className="px-8 py-4 border border-white/20 text-white font-medium text-lg rounded-full hover:bg-white/10 transition-colors"
                        >
                            Nossos serviços
                        </Link>
                    </div>
                </motion.div>

                {/* Stats Strip */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12"
                >
                    {[
                        { label: "Marcas Atendidas", value: "100+" },
                        { label: "Vendas Geradas", value: "R$ 30M+" },
                        { label: "Lojistas Acelerados", value: "250+" },
                        { label: "Foco Total", value: "100% Moda" },
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</div>
                            <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
