"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

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

export default function FeedPortfolio() {
  const [wordIndex, setWordIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % WORDS.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  /* Physics-based horizontal scroll: accumulates velocity + friction */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let velocity = 0;
    let rafId = 0;
    let ticking = false;

    const friction = 0.88; // 0 = instant stop, 1 = never stops

    const animate = () => {
      velocity *= friction;
      el.scrollLeft += velocity;

      if (Math.abs(velocity) > 0.3) {
        rafId = requestAnimationFrame(animate);
      } else {
        ticking = false;
      }
    };

    const onWheel = (e: WheelEvent) => {
      // Let pure horizontal trackpad swipes pass through
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      const maxScroll = el.scrollWidth - el.clientWidth;
      const atStart = el.scrollLeft <= 0 && e.deltaY < 0;
      const atEnd = el.scrollLeft >= maxScroll - 1 && e.deltaY > 0;

      // At boundaries, let page scroll normally
      if (atStart || atEnd) return;

      e.preventDefault();

      // Accumulate velocity (slower = lower multiplier)
      velocity += e.deltaY * 0.4;

      if (!ticking) {
        ticking = true;
        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(animate);
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
      cancelAnimationFrame(rafId);
    };
  }, []);

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

      {/* Horizontal scroll carousel — no scroll-snap so physics feel natural */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide pl-6 pb-4"
        style={{ overscrollBehaviorX: "none" }}
      >
        {clients.map((client, i) => (
          <div
            key={i}
            className="flex-shrink-0 group"
            style={{ width: "clamp(300px, 30vw, 430px)" }}
          >
            {/* Image */}
            <div
              className="relative overflow-hidden rounded-2xl bg-white/5 mb-4"
              style={{ height: "clamp(380px, 38vw, 540px)" }}
            >
              <Image
                src={client.image}
                alt={client.name}
                fill
                sizes="(max-width: 768px) 300px, 430px"
                className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
              />
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-1">
              <span className="text-white font-black text-xl">{client.name}</span>
              <div className="flex gap-2">
                {client.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1.5 text-sm text-white border border-white/20 bg-white/5 px-3 py-1.5 rounded-full font-medium"
                  >
                    <span className="w-2 h-2 rounded-full bg-dualime flex-shrink-0" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Trailing spacer */}
        <div className="flex-shrink-0 w-6" />
      </div>

    </section>
  );
}
