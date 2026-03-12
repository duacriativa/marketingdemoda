"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Megaphone, Users, Brain } from "lucide-react";

const PILLARS = [
  {
    icon: Megaphone,
    title: "Social Media",
    desc: "Conteúdo estratégico, calendário editorial e produção visual alinhados à identidade da sua marca.",
  },
  {
    icon: BarChart3,
    title: "Tráfego Pago",
    desc: "Campanhas no Meta, Google e TikTok com gestão especializada para marcas de moda.",
  },
  {
    icon: Users,
    title: "CRM & Comercial",
    desc: "Estrutura de vendas ativa: reativação de leads, follow-up e fluxo de prospecção no Kommo.",
  },
  {
    icon: Brain,
    title: "Inteligência de Dados",
    desc: "Dashboard com os KPIs que importam: ROAS, CAC, ticket médio e relatórios mensais em tempo real.",
  },
];

export default function DuaLab() {
  return (
    <section className="py-24 bg-duabg px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-duagrey rounded-3xl overflow-hidden border border-dualime/20">
            {/* Header */}
            <div className="bg-dualime px-8 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <span className="text-black/60 text-xs font-bold uppercase tracking-widest">Solução completa</span>
                <h2 className="text-3xl md:text-4xl font-black text-black mt-1">
                  DUA LAB — Marketing 360°
                </h2>
                <p className="text-black/70 text-sm mt-1">
                  Uma equipe dedicada para a sua marca de moda.
                </p>
              </div>
              <div className="bg-black text-dualime rounded-2xl px-6 py-4 text-center flex-shrink-0">
                <div className="text-3xl font-black">R$ 5.200</div>
                <div className="text-xs text-dualime/70 mt-1">por mês · contrato flexível</div>
              </div>
            </div>

            {/* Pillars */}
            <div className="p-8 grid md:grid-cols-2 gap-6">
              {PILLARS.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-dualime/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-dualime" />
                    </div>
                    <div>
                      <h3 className="font-black text-white text-lg mb-1">{pillar.title}</h3>
                      <p className="text-gray-400 text-sm">{pillar.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="px-8 pb-8">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-dualime text-duabg font-black text-lg rounded-full hover:bg-white transition-all duration-300"
              >
                Quero conhecer o DUA LAB
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-gray-600 text-xs mt-3">
                * Reunião estratégica gratuita · Análise personalizada da sua marca
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
