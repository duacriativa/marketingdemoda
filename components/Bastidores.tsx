"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const photos = Array.from({ length: 14 }, (_, i) => `/bastidor${i + 1}.jpg`);

export default function Bastidores() {
  return (
    <section className="bg-duabg">
      <div className="bg-white rounded-t-[48px] overflow-hidden pt-20 pb-12">

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

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-8"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {photos.map((photo, i) => (
            <div
              key={i}
              className="flex-shrink-0 relative rounded-2xl overflow-hidden"
              style={{
                width: "clamp(260px, 30vw, 420px)",
                aspectRatio: "3/4",
                scrollSnapAlign: "start",
              }}
            >
              <Image
                src={photo}
                alt="Bastidores Dua Criativa"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
          {/* Trailing spacer so last photo isn't flush against edge */}
          <div className="flex-shrink-0 w-4" />
        </motion.div>

      </div>
    </section>
  );
}
