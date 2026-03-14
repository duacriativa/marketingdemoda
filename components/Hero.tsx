"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center bg-duabg overflow-hidden px-6 pt-24 bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(204,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(204,255,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="container mx-auto max-w-5xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-dualime/10 border border-dualime/30 text-dualime text-xs font-bold px-4 py-2 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-dualime rounded-full animate-pulse" />
            Especialistas em Moda · Tráfego · CRM · Social
          </motion.div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tighter text-white mb-8 uppercase">
            SUA MARCA DE MODA<br />
            <span className="text-dualime">VENDENDO</span><br />
            TODOS OS DIAS.
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-10 font-medium mx-auto">
            Agência especializada em marcas de moda. Tráfego pago, social media e CRM integrados para escalar seu faturamento com previsibilidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contato">
              <button className="bg-dualime text-duabg font-black px-8 py-4 rounded-lg hover:bg-dualime/90 transition flex items-center gap-2">
                Agendar Consulta
                <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
              </button>
            </a>
            <a href="#cases">
              <button className="bg-white/10 text-white font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition">
                Conhecer Agência
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
