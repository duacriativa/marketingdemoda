"use client";

import { motion } from "framer-motion";

export default function QuoteBanner() {
  return (
    <section className="py-20 bg-duabg px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto max-w-4xl text-center"
      >
        <span className="inline-block w-12 h-0.5 bg-dualime mb-8" />
        <p className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
          Mais do que posts, nosso foco é construir um{" "}
          <span className="text-dualime">posicionamento forte</span>{" "}
          para a sua marca e gerar resultado.
        </p>
        <span className="inline-block w-12 h-0.5 bg-dualime mt-8" />
      </motion.div>
    </section>
  );
}
