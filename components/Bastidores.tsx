"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

const photos = Array.from({ length: 14 }, (_, i) => ({
  src: `/bastidor${i + 1}.jpg`,
  alt: "Bastidores Dua Criativa",
}));

const loop = [...photos, ...photos];

export default function Bastidores() {
  const [paused, setPaused] = useState(false);
  const [lightbox, setLightbox] = useState<typeof photos[0] | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <section className="bg-duabg">
      <div className="bg-white rounded-t-[48px] overflow-hidden pt-20 pb-12">

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center px-6 mb-14"
        >
          <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter mb-4">
            É isso que constrói a <span className="text-dualime">Dua.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Por trás de cada resultado, tem um time que escolheu não aceitar o aceitável.
          </p>
        </motion.div>

        {/* Marquee carousel */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex gap-4 pl-6"
            style={{
              width: "max-content",
              animation: "marquee-x 50s linear infinite",
              animationPlayState: paused ? "paused" : "running",
            }}
          >
            {loop.map((photo, i) => (
              <div
                key={i}
                className="flex-shrink-0 group cursor-pointer"
                style={{ width: "clamp(220px, 22vw, 320px)" }}
                onClick={() => setLightbox(photos[i % photos.length])}
              >
                <div
                  className="relative overflow-hidden rounded-2xl"
                  style={{ height: "clamp(290px, 30vw, 420px)" }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="320px"
                    className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
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
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                style={{ maxHeight: "88vh", maxWidth: "88vw", objectFit: "contain", display: "block" }}
                className="rounded-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
