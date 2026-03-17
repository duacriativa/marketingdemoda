"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Unbounded } from "next/font/google";

const unbounded = Unbounded({ subsets: ["latin"], weight: ["700"] });

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-duabg overflow-hidden px-6 pt-16">
      {/* Background fashion photo */}
      <Image
        src="/Prancheta%201%20copiar%209.jpg"
        alt="Fashion photoshoot background"
        fill
        priority
        quality={75}
        className="object-cover object-center"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65 z-[1]" />
      {/* Purple blob PNG - invert(white bg -> black = transparent) + hue-rotate keeps purple */}
      <div className="absolute z-[2] pointer-events-none" style={{ top: "-5%", right: "-8%", width: "52%", height: "90%" }}>
        <Image
          src="/2%202.PNG"
          alt=""
          fill
          className="object-contain object-right-top"
          style={{
            filter: "invert(1) hue-rotate(180deg)",
            mixBlendMode: "screen",
            opacity: 0.85,
          }}
        />
      </div>
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(204,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(204,255,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px] z-[3]" />

      <div className="container mx-auto max-w-3xl relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className={`flex items-end justify-center gap-1 mb-8 ${unbounded.className}`}
          >
            <span className="text-3xl font-bold text-white leading-none">dua</span>
            <span className="w-2.5 h-2.5 rounded-full bg-dualime mb-1 shrink-0" aria-hidden="true" />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-dualime/10 border border-dualime/30 text-dualime text-xs font-bold px-4 py-2 rounded-full mb-10"
          >
            <span className="w-2 h-2 bg-dualime rounded-full animate-pulse" aria-hidden="true" />
            Especialistas em Moda · Tráfego · CRM · Social
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tighter text-white mb-8">
            Sua marca de moda<br />
            <span className="text-dualime">vendendo</span><br />
            todos os dias.
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-10 font-medium mx-auto">
            Agência especializada em marcas de moda. Tráfego pago, social media e CRM integrados para escalar seu faturamento com previsibilidade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contato" aria-label="Agendar uma consulta gratuita">
              <button className="bg-dualime text-duabg font-black px-8 py-4 rounded-lg hover:bg-dualime/90 transition flex items-center gap-2">
                Agendar Consulta
                <ArrowRight size={20} aria-hidden="true" />
              </button>
            </a>
            <a href="#cases" aria-label="Conhecer a agência Dua Criativa">
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
