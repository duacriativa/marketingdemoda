import Image from "next/image";

export default function Feedback() {
  return (
    <section className="w-full bg-black py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">
          O QUE DIZEM <br />
          <span className="text-[#ccff00]">NOSSOS CLIENTES</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Coluna esquerda: print de conversa */}
          <div className="flex items-center justify-center">
            <Image
              src="/feedback.png"
              alt="Feedback de clientes Dua Criativa"
              width={400}
              height={600}
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>

          {/* Coluna central: vídeo YouTube Shorts */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[300px] mx-auto rounded-xl overflow-hidden" style={{ aspectRatio: "9/16" }}>
              <iframe
                src="https://www.youtube.com/embed/dHfeH66dL8k"
                title="Dua Criativa - Resultados"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>

          {/* Coluna direita: outro print de conversa */}
          <div className="flex items-center justify-center">
            <Image
              src="/feedback-v2.png"
              alt="Feedback de clientes Dua Criativa"
              width={400}
              height={600}
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
