"use client";

import Image from "next/image";
import { useState } from "react";

function YouTubeFacade({ videoId }: { videoId: string }) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="Dua Criativa - Resultados reais de clientes"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    );
  }

  return (
    <button
      onClick={() => setActive(true)}
      className="absolute inset-0 w-full h-full group"
      aria-label="Reproduzir vídeo"
    >
      {/* Thumbnail via Next.js Image */}
      <Image
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt="Reproduzir depoimento"
        fill
        className="object-cover"
      />
      {/* Play button overlay */}
      <span className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
        <span className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <svg viewBox="0 0 24 24" className="w-7 h-7 text-black fill-current ml-1">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  );
}

export default function Feedback() {
  return (
    <section className="w-full bg-black py-20" aria-label="Depoimentos de clientes">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">
          O QUE DIZEM <br />
          <span className="text-[#ccff00]">NOSSOS CLIENTES</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Coluna esquerda */}
          <div className="flex items-center justify-center">
            <Image
              src="/01.png"
              alt="Depoimentos de clientes da Dua Criativa sobre resultados e parceria"
              width={400}
              height={700}
              loading="lazy"
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>

          {/* Coluna central: facade do YouTube — iframe só carrega ao clicar */}
          <div className="flex items-center justify-center">
            <div
              className="relative w-full max-w-[300px] mx-auto rounded-xl overflow-hidden"
              style={{ aspectRatio: "9/16" }}
            >
              <YouTubeFacade videoId="dHfeH66dL8k" />
            </div>
          </div>

          {/* Coluna direita */}
          <div className="flex items-center justify-center">
            <Image
              src="/02.png"
              alt="Mais depoimentos de clientes da Dua Criativa sobre crescimento digital"
              width={400}
              height={700}
              loading="lazy"
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
