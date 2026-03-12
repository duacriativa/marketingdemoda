"use client";

import { motion } from "framer-motion";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";

const SIM = [
  "Fatura acima de R$ 15k/mês com sua marca",
  "Quer escalar com previsibilidade e estratégia",
  "Já investe em marketing mas quer mais resultado",
  "Busca uma agência que entenda de moda de verdade",
  "Quer crescer sem depender só de indicação",
];

const NAO = [
  "Quer a agência mais barata do mercado",
  "Ainda está montando o produto para vender",
  "Espera resultado em 7 dias sem investir em mídia",
  "Prefere não acompanhar os números com a agência",
  "Não tem interesse em crescimento sustentável",
];

export default function ParaQuem() {
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
            A Dua é para <span className="text-dualime">você?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Somos seletivos porque queremos entregar resultado de verdade. Veja se você se encaixa:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* SIM */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-duabg rounded-2xl p-8 border border-dualime/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-7 h-7 text-dualime" />
              <h3 className="font-black text-xl text-dualime">Sim, é para mim se…</h3>
            </div>
            <ul className="space-y-3">
              {SIM.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 bg-dualime/20 text-dualime rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-black">✓</span>
                  <span className="text-gray-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* NÃO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-duabg rounded-2xl p-8 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-7 h-7 text-gray-500" />
              <h3 className="font-black text-xl text-gray-400">Não é para mim se…</h3>
            </div>
            <ul className="space-y-3">
              {NAO.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 bg-white/5 text-gray-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-black">×</span>
                  <span className="text-gray-500 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <p className="text-white text-xl font-black mb-6">
            Se você se identificou com o lado SIM — <span className="text-dualime">a gente precisa conversar.</span>
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-dualime text-duabg font-black text-lg rounded-full hover:bg-white transition-all duration-300"
          >
            Quero conhecer a Dua
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
