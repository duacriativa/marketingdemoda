"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const WORDS = ["posicionada.", "atrativa.", "alto nível.", "atualizada."];

const clients = [
  { name: "Amiche",     image: "/feed_amiche.jpg",     tags: ["Conteúdo", "Design"] },
  { name: "Aya",        image: "/feed_aya.jpeg",        tags: ["Conteúdo", "Design"] },
  { name: "Del Carmen", image: "/feed_delcarmen.jpeg",  tags: ["Conteúdo", "Design"] },
  { name: "Doce Caju",  image: "/feed_docecaju.jpeg",   tags: ["Conteúdo", "Design"] },
  { name: "Flora",      image: "/feed_flora.jpeg",      tags: ["Conteúdo", "Design"] },
  { name: "Jenni Pink", image: "/feed_jennipink.jpeg",  tags: ["Conteúdo", "Design"] },
  { name: "Kyrefh",     image: "/feed_kyrefh.jpeg",     tags: ["Conteúdo", "Design"] },
  { name: "Mandi",      image: "/feed_mandi.jpeg",      tags: ["Conteúdo", "Design"] },
  { name: "Mysla",      image: "/feed_mysla.jpeg",      tags: ["Conteúdo", "Design"] },
  { name: "Naromo",     image: "/feed_naromo.jpeg",     tags: ["Conteúdo", "Design"] },
  { name: "Umi",        image: "/feed_umi.jpeg",        tags: ["Conteúdo", "Design"] },
];

export default function FeedPortfolio() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % WORDS.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="portfolio" className="py-24 bg-duabg px-6">
      <div className="container mx-auto max-w-6xl">

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[1.05]">
            Sua marca mais
            <br />
            <span className="relative inline-block" style={{ minHeight: "1.1em" }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={WORDS[wordIndex]}
                  initial={{ y: 48, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -48, opacity: 0 }}
                  transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-dualime"
                >
                  {WORDS[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h2>
          <p className="text-gray-400 text-lg mt-6 max-w-xl mx-auto">
            Veja o que a Dua já construiu para marcas de moda que escolheram crescer de verdade.
          </p>
        </motion.div>

        {/* Feed grid */}
        {clients.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {clients.map((client, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="group"
              >
                <div className="relative aspect-square overflow-hidden rounded-2xl mb-3 bg-white/5">
                  <Image
                    src={client.image}
                    alt={client.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center justify-between px-1">
                  <span className="text-white font-bold text-sm">{client.name}</span>
                  <div className="flex gap-1">
                    {client.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-gray-400 bg-white/10 px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : null}

      </div>
    </section>
  );
}
