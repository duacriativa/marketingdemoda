import Image from "next/image";

export default function Team() {
    return (
        <section className="w-full bg-black py-20">
            <div className="container mx-auto px-4 mb-8">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    QUEM FAZ <br />
                    <span className="text-zinc-500">ACONTECER</span>
                </h2>
            </div>

            <div className="w-full h-[300px] md:h-[600px] relative">
                <Image
                    src="/team-photo.png"
                    alt="Equipe Dua Criativa"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
            </div>
        </section>
    );
}
