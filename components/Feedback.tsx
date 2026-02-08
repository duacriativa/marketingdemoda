import Image from "next/image";

export default function Feedback() {
    return (
        <section className="w-full bg-black py-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">
                    O QUE DIZEM <br />
                    <span className="text-[#ccff00]">NOSSOS CLIENTES</span>
                </h2>

                <div className="relative w-full max-w-4xl mx-auto h-[300px] md:h-[500px]">
                    <Image
                        src="/feedback-v2.png"
                        alt="Feedback de clientes Dua Criativa"
                        fill
                        sizes="(max-width: 1024px) 100vw, 896px"
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
