"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Camera, BarChart3, ShoppingBag, BrainCircuit, Clapperboard, PenTool } from "lucide-react";

const services = [
  {
    icon: <Camera className="w-7 h-7 text-white" />,
    title: "Gestão de Redes Sociais",
    description: "Criação de conteúdo estratégico que conecta e engaja. Transformamos seguidores em fãs da marca."
  },
  {
    icon: <BarChart3 className="w-7 h-7 text-white" />,
    title: "Tráfego Pago (Ads)",
    description: "Criação e otimização de campanhas no Meta e Google Ads focadas em ROI e vendas reais.",
    link: "/trafegopago"
  },
  {
    icon: <BrainCircuit className="w-7 h-7 text-white" />,
    title: "CRM e Inteligência",
    description: "Gestão de relacionamento com cliente e automação de atendimento com IA para não perder vendas."
  },
  {
    icon: <ShoppingBag className="w-7 h-7 text-white" />,
    title: "Consultoria E-commerce",
    description: "Análise profunda da sua loja online para melhorar a conversão e a experiência do usuário."
  },
  {
    icon: <PenTool className="w-7 h-7 text-white" />,
    title: "Páginas de vendas",
    description: "Qualificamos seu cliente de atacado junto com automações com método exclusivo."
  },
  {
    icon: <Clapperboard className="w-7 h-7 text-white" />,
    title: "Produção de Foto e Vídeo",
    description: "Editoriais de moda, lookbooks e vídeos para Reels/TikTok."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-duabg relative overflow-hidden">
      {/* Purple glow blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-700/15 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-900/20 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-6">
            Tudo o que sua marca precisa para{" "}
            <span className="text-dualime">vender mais</span>.
          </h2>
          <p className="text-gray-400 text-lg">
            Nossa esteira de serviços cobre todas as pontas do marketing de moda, garantindo consistência e resultado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const cardContent = (
              <>
                <div className="mb-6 w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-800 shadow-lg shadow-purple-900/40">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </>
            );

            const cardClass =
              "h-full p-8 rounded-2xl bg-[#13111e] border border-purple-600/25 transition-all duration-300 group-hover:border-purple-500/60 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-purple-700/20";

            // @ts-ignore
            if (service.link) {
              return (
                <Link key={index} href={service.link} className="block group">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={cardClass}
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
                className={`group ${cardClass}`}
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
