"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";

// ⚠️ Substitua pelos dados reais dos seus clientes antes de publicar
const CASES = [
  {
    brand: "Marca de Moda Feminina · CE",
    tag: "Meta Ads + Social",
    before: { label: "Faturamento", value: "R$ 18k/mês" },
    after: { label: "Faturamento", value: "R$ 64k/mês" },
    metric: "3,5× em 90 dias",
    quote: "A Dua entendeu nossa marca desde o primeiro dia. Os resultados vieram rápido.",
  },
  {
    brand: "Atacado de Moda · SP",
    tag: "Tráfego Pago",
    before: { label: "ROAS", value: "1.8×" },
    after: { label: "ROAS", value: "6.2×" },
    metric: "Custo por lead ÷ 4",
    quote: "Finalmente uma agência que não precisa de aula sobre o mercado de moda.",
  },
  {
    brand: "E-commerce Moda Praia · RJ",
    tag: "Google + Meta",
    before: { label: "CPA", value: "R$ 320" },
    after: { label: "CPA", value: "R$ 87" },
    metric: "−73% no custo por venda",
    quote: "Triplicamos o faturamento sem triplicar o investimento em mídia.",
  },
];

export default function MiniCases() {
  return (
    <section className="py-24 bg-duagrey px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Resultados que <span className="text-dualime">provam</span> o método
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Marcas reais. Números reais. Sem achismo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {CASES.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-duabg rounded-2xl overflow-hidden border border-white/10"
            >
              {/* Card Header */}
              <div className="bg-dualime px-5 py-4 flex items-center justify-between">
                <span className="font-black text-black text-sm">{c.brand}</span>
                <span className="text-xs font-bold text-black/60">{c.tag}</span>
              </div>

              {/* Before/After */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="text-center">
                    <div className="text-xs text-gray-500 mb-1 uppercase tracking-wide">Antes</div>
                    <div className="font-bold text-gray-500 line-through text-lg">{c.before.value}</div>
                    <div className="text-xs text-gray-600">{c.before.label}</div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-dualime flex-shrink-0" />
                  <div className="text-center">
                    <div className="text-xs text-gray-400 mb-1 uppercase tracking-wide">Depois</div>
                    <div className="font-black text-dualime text-2xl">{c.after.value}</div>
                    <div className="text-xs text-gray-400">{c.after.label}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-dualime/10 rounded-xl px-3 py-2 mb-4">
                  <TrendingUp className="w-4 h-4 text-dualime flex-shrink-0" />
                  <span className="text-dualime text-sm font-bold">{c.metric}</span>
                </div>

                <p className="text-gray-400 text-sm italic">"{c.quote}"</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-dualime text-duabg font-black text-lg rounded-full hover:bg-white transition-all duration-300"
          >
            Quero resultados assim
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
