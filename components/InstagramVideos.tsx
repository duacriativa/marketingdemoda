"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const VIDEOS = [
  { code: "DbePWAfuB_E", caption: "Conteúdo estratégico para marcas de moda" },
  { code: "DcmIuzBuW71", caption: "Bastidores da nossa metodologia" },
  { code: "DbtGRu1xhFo", caption: "Resultados reais, estratégia real" },
];

export default function InstagramVideos() {
  return (
    <section className="py-24 bg-duagrey px-6" aria-label="Conteúdo da Dua Criativa no Instagram">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-10"
        >
          <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-dualime/70">
            Conteúdo
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-black text-white leading-tight">
            Estratégia que aparece<br />
            <span className="text-dualime">no feed.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {VIDEOS.map((v, i) => (
            <motion.div
              key={v.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="flex flex-col gap-3"
            >
              <div
                className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-duabg"
                style={{ paddingBottom: "125%" }}
              >
                <iframe
                  src={`https://www.instagram.com/p/${v.code}/embed/`}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  title={v.caption}
                  allowFullScreen
                  scrolling="no"
                />
              </div>
              <p className="text-gray-500 text-xs leading-snug px-1">{v.caption}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mt-8"
        >
          <a
            href="https://www.instagram.com/duacriativa/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/15 text-white/70 font-semibold px-6 py-3 rounded-xl hover:border-white/40 hover:text-white transition-colors text-sm min-h-[44px] touch-manipulation"
          >
            <ArrowUpRight size={16} aria-hidden="true" />
            Ver mais no Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
