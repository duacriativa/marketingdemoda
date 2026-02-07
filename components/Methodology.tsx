"use client";

import { motion } from "framer-motion";
import { Zap, Heart } from "lucide-react";

const Methodology = () => {
    return (
        <section id="methodology" className="py-24 bg-duabg relative border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <span className="text-dualime font-bold tracking-widest uppercase text-sm mb-2 block">Nosso Método</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Conheça o DUA LAB</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Pillar 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative p-10 rounded-3xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-transparent border border-white/10"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-[60px]" />
                        <Heart className="w-12 h-12 text-purple-400 mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">Posicionamento & Desejo</h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Construímos a alma da sua marca. Trabalhamos a estética, o tom de voz e o branding para que sua loja não seja apenas mais uma, mas sim a *escolha óbvia* do cliente.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex items-center gap-2">✓ Identidade Visual Premium</li>
                            <li className="flex items-center gap-2">✓ Produção de Conteúdo Viral</li>
                            <li className="flex items-center gap-2">✓ Conexão Emocional</li>
                        </ul>
                    </motion.div>

                    {/* Pillar 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative p-10 rounded-3xl overflow-hidden bg-gradient-to-br from-dualime/10 to-transparent border border-white/10"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-dualime/20 rounded-full blur-[60px]" />
                        <Zap className="w-12 h-12 text-dualime mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">Escala & Performance</h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Levamos sua marca para as pessoas certas. Utilizamos tráfego pago avançado e análise de dados para transformar desejo em vendas reais e recorrentes.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex items-center gap-2">✓ Tráfego Pago Otimizado</li>
                            <li className="flex items-center gap-2">✓ CRM & Recuperação de Vendas</li>
                            <li className="flex items-center gap-2">✓ Análise de Métricas em Tempo Real</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Methodology;
