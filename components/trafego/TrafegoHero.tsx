"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const TrafegoHero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center bg-duabg overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 right-10 w-96 h-96 bg-dualime/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-20 left-10 w-72 h-72 bg-duaorange/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                            <span className="w-2 h-2 rounded-full bg-dualime animate-pulse" />
                            <span className="text-gray-300 text-sm font-medium tracking-wide">Especialistas em Moda</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-8 tracking-tight">
                            VEJA SUA MARCA VENDER <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-dualime to-white">TODOS OS DIAS</span>
                        </h1>

                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                            Gestão de Tráfego Pago especializada em moda.
                            Transformamos seus anúncios em uma máquina de vendas previsível e escalável.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                            <a
                                href="https://wa.me/5585989011558?text=Ola!%20Vi%20a%20pagina%20de%20Trafego%20Pago%20da%20Dua%20e%20gostaria%20de%20saber%20mais."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group px-8 py-4 bg-dualime text-duabg font-bold text-lg rounded-full hover:bg-white transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:shadow-[0_0_30px_rgba(204,255,0,0.5)]"
                            >
                                Quero Vender Mais
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>

                        {/* Social Proof / Trust Indicators */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
                            {[
                                "Foco 100% em Moda",
                                "Estratégias Validada",
                                "Relatórios em Tempo Real",
                                "Suporte Próximo"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center justify-center gap-2 text-gray-400 text-sm font-medium">
                                    <CheckCircle2 className="w-4 h-4 text-dualime" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TrafegoHero;
