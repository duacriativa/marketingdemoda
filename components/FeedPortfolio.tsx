"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

const WORDS = ["posicionada.", "atrativa.", "alto nível.", "atualizada."];

const clients = [
  { name: "Amiche",     image: "/feed_amiche.jpg",    tags: ["Conteúdo", "Design"] },
  { name: "Aya",        image: "/feed_aya.jpeg",       tags: ["Conteúdo", "Design"] },
  { name: "Del Carmen", image: "/feed_delcarmen.jpeg", tags: ["Conteúdo", "Design"] },
  { name: "Doce Caju",  image: "/feed_docecaju.jpeg",  tags: ["Conteúdo", "Design"] },
  { name: "Flora",      image: "/feed_flora.jpeg",     tags: ["Conteúdo", "Design"] },
  { name: "Jenni Pink", image: "/feed_jennipink.jpeg", tags: ["Conteúdo", "Design"] },
  { name: "Kyrefh",     image: "/feed_kyrefh.jpeg",    tags: ["Conteúdo", "Design"] },
  { name: "Mandi",      image: "/feed_mandi.jpeg",     tags: ["Conteúdo", "Design"] },
  { name: "Mysla",      image: "/feed_mysla.jpeg",     tags: ["Conteúdo", "Design"] },
  { name: "Naromo",     image: "/feed_naromo.jpeg",    tags: ["Conteúdo", "Design"] },
  { name: "Umi",        image: "/feed_umi.jpeg",       tags: ["Conteúdo", "Design"] },
];

// Duplicate for seamless infinite loop
const loop = [...clients, ...clients];

type Client = typeof clients[0];

export default function FeedPortfolio() {
  const [wordIndex, setWordIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [lightbox, setLightbox] = useState<Client | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % WORDS.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <section id="portfolio" className="pt-24 pb-16 bg-duabg overflow-hidden">

      {/* Headline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center px-6 mb-16"
      >
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[1.05]">
          Sua marca mais
          <br />
          <span className="relative inline-block overflow-hidden" style={{ minHeight: "1.15em" }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={WORDS[wordIndex]}
                initial={{ y: 56, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -56, opacity: 0 }}
                transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                className="block text-dualime"
              >
                {WORDS[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h2>
      </motion.div>

      {/* Marquee carousel */}
      <div
        className="overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="flex gap-5 pl-6"
          style={{
            width: "max-content",
            animation: "marquee-x 55s linear infinite",
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {loop.map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 group cursor-pointer"
              style={{ width: "clamp(280px, 28vw, 400px)" }}
              onClick={() => setLightbox(clients[i % clients.length])}
            >
              {/* Image */}
              <div
                className="relative overflow-hidden rounded-2xl bg-white/5 mb-4"
                style={{ height: "clamp(350px, 36vw, 500px)" }}
              >
                <Image
                  src={client.image}
                  alt={client.name}
                  fill
                  sizes="400px"
                  className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-500"
                />
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between px-1">
                <span className="text-white font-black text-lg">{client.name}</span>
                <div className="flex gap-2">
                  {client.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1.5 text-xs text-white border border-white/20 bg-white/5 px-3 py-1.5 rounded-full font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-dualime flex-shrink-0" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/92 z-50 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-5 right-5 text-white bg-white/10 hover:bg-white/20 transition p-2.5 rounded-full"
              onClick={() => setLightbox(null)}
              aria-label="Fechar"
            >
              <X size={22} />
            </button>

            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-4 max-w-[90vw] max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative overflow-hidden rounded-2xl" style={{ maxHeight: "80vh", maxWidth: "85vw" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={lightbox.image}
                  alt={lightbox.name}
                  style={{ maxHeight: "80vh", maxWidth: "85vw", objectFit: "contain", display: "block" }}
                  className="rounded-2xl"
                />
              </div>
              <div className="flex items-center justify-between w-full px-1">
                <span className="text-white font-black text-xl">{lightbox.name}</span>
                <div className="flex gap-2">
                  {lightbox.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1.5 text-sm text-white border border-white/20 bg-white/10 px-3 py-1.5 rounded-full"
                    >
                      <span className="w-2 h-2 rounded-full bg-dualime" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
