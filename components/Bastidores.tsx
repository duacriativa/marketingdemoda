"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const photos = [
  "/bastidor-01.jpg",
  "/bastidor-02.jpg",
  "/bastidor-03.jpg",
  "/bastidor-04.jpg",
  "/bastidor-05.jpg",
  "/bastidor-06.jpg",
  "/bastidor-07.jpg",
  "/bastidor-08.jpg",
  "/bastidor-09.jpg",
  "/bastidor-10.jpg",
  "/bastidor-11.jpg",
  "/bastidor-12.jpg",
  "/bastidor-13.jpg",
  "/bastidor-14.jpg",
];

export default function Bastidores() {
  return (
    <section className="py-24 bg-black px-6">
      <div className="container mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-dualime text-xs font-bold tracking-widest uppercase mb-4 block">
            Nossa estrutura
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
            Por dentro da Dua.
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            240m² em Novo Hamburgo dedicados a uma coisa só: fazer marcas de moda venderem todos os dias.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3"
        >
          {/* Featured large photo */}
          <div className="col-span-2 row-span-2 relative aspect-square md:aspect-auto md:h-[500px] overflow-hidden rounded-2xl">
            <Image
              src={photos[0]}
              alt="Bastidores Dua Criativa"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Top right 2 photos */}
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image src={photos[1]} alt="Bastidores Dua Criativa" fill className="object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image src={photos[2]} alt="Bastidores Dua Criativa" fill className="object-cover hover:scale-105 transition-transform duration-500" />
          </div>

          {/* Bottom right 2 photos (complete the 2x2 alongside featured) */}
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image src={photos[3]} alt="Bastidores Dua Criativa" fill className="object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image src={photos[4]} alt="Bastidores Dua Criativa" fill className="object-cover hover:scale-105 transition-transform duration-500" />
          </div>

          {/* Bottom row: 4 equal photos */}
          {photos.slice(5, 9).map((photo, i) => (
            <div key={i} className="relative aspect-square overflow-hidden rounded-2xl">
              <Image src={photo} alt="Bastidores Dua Criativa" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}

          {/* Last row: 5 photos in 4-col grid (last spans 2 on mobile) */}
          {photos.slice(9, 13).map((photo, i) => (
            <div key={i} className="relative aspect-square overflow-hidden rounded-2xl">
              <Image src={photo} alt="Bastidores Dua Criativa" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}

          {/* Last photo wide */}
          <div className="col-span-2 md:col-span-4 relative aspect-[4/1] overflow-hidden rounded-2xl">
            <Image src={photos[13]} alt="Bastidores Dua Criativa" fill className="object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
