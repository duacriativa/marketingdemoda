"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-duabg overflow-hidden px-6 pt-24">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(204,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(204,255,0,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
      <section 
            className="relative min-h-screen flex flex-col justify-center bg-duabg overflow-hidden px-6 pt-24 bg-cover bg-center"
                  style={{ backgroundImage: "url('/hero-bg.jpg')" }}
                      >
                            {/* Background grid */}
                                  <div className="absolute inset-0 bg-[linear-gradient(rgba(204,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(204,255,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
                                  
                                        {/* Dark overlay */}
                                              <div className="absolute inset-0 bg-black/65" />
                                              
                                                    <div className="container mx-auto max-w-5xl relative z-10 text-center">
                                                            <motion.div
                                                                      initial={{ opacity: 0, y: 40 }}
                                                                                animate={{ opacity: 1, y: 0 }}
                                                                                          transition={{ duration: 0.8 }}
                                                                                                  >
                                                                                                            {/* Badge */}
                                                                                                                      <motion.div
                                                                                                                                  initial={{ opacity: 0, scale: 0.9 }}
                                                                                                                                              animate={{ opacity: 1, scale: 1 }}
                                                                                                                                                          transition={{ duration: 0.5 }}
                                                                                                                                                                      className="inline-flex items-center gap-2 bg-dualime/10 border border-dualime/30 text-dualime text-xs font-bold px-4 py-2 rounded-full mb-8 mx-auto"
                                                                                                                                                                                >
                                                                                                                                                                                            <span className="w-2 h-2 bg-dualime rounded-full animate-pulse" />
                                                                                                                                                                                                        Especialistas em Moda · Tráfego · CRM · Social
                                                                                                                                                                                                                  </motion.div>
                                                                                                                                                                                                                  
                                                                                                                                                                                                                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tighter text-white mb-8 uppercase">
                                                                                                                                                                                                                                        SUA MARCA DE MODA<br />
                                                                                                                                                                                                                                                    <span className="text-dualime">VENDENDO</span><br />
                                                                                                                                                                                                                                                                TODOS OS DIAS.
                                                                                                                                                                                                                                                                          </h1>
                                                                                                                                                                                                                                                                          
                                                                                                                                                                                                                                                                                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 font-medium">
                                                                                                                                                                                                                                                                                                Agência especializada em marcas de moda. Tráfego pago, social media e CRM integrados para escalar seu faturamento com previsibilidade.
                                                                                                                                                                                                                                                                                                          </p>
                                                                                                                                                                                                                                                                                                          
                                                                                                                                                                                                                                                                                                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                                                                                                                                                                                                                                                                                                                <button className="bg-dualime text-duabg font-black px-8 py-4 rounded-lg hover:bg-dualime/90 transition flex items-center justify-center gap-2 group">
                                                                                                                                                                                                                                                                                                                                              Agendar Consulta
                                                                                                                                                                                                                                                                                                                                                            <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
                                                                                                                                                                                                                                                                                                                                                                        </button>
                                                                                                                                                                                                                                                                                                                                                                                    <button className="bg-white/10 text-white font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition border border-white/20">
                                                                                                                                                                                                                                                                                                                                                                                                  Conhecer Agência
                                                                                                                                                                                                                                                                                                                                                                                                              </button>
                                                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                </motion.div>
                                                                                                                                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                          </section>
                                                                                                                                                                                                                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                                                                                                                                                                                                                            }           className="inline-flex items-center gap-2 bg-dualime/10 border border-dualime/30 text-dualime text-xs font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-widest"
          >
            <span className="w-2 h-2 bg-dualime rounded-full animate-pulse" />
            Especialistas em Moda · Tráfego · CRM · Social
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tighter text-white mb-8 uppercase">
            SUA MARCA DE MODA<br />
            <span className="text-dualime">VENDENDO</span><br />
            TODOS OS DIAS.
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-10 font-medium">
            Agência especializada em marcas de moda. Tráfego pago, social media e CRM integrados para escalar seu faturamento com previsibilidade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-dualime text-duabg font-black text-lg rounded-full hover:bg-white transition-all duration-300"
            >
              Quero vender mais
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#cases"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-bold text-lg rounded-full hover:border-dualime hover:text-dualime transition-all duration-300"
            >
              Ver resultados
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
