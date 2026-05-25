"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Clients() {
    const logos = [
        "/client-logo-1.png",
        "/client-logo-2.png",
        "/client-logo-3.png",
        "/client-logo-4.png",
        "/client-logo-5.png",
        "/IMG_9361-removebg-preview.png",
        "/images-removebg-preview.png",
        "/MYSLA%20vinho.png",
        "/logo%20amofrozinha%20pink.png",
        "/ID%20VISUAL%20NARA%20PAIVA_LOGO%20PRINCIPAL%20FUNDO%20CLARO%20RETANGULAR_SEM%20FUNDO.png",
        "/LOGO-AMICHE---2024---PNG---BLACK.png",
        "/NOVA%20MARCA-VERMELHA.png",
    ];

    return (
        <section className="w-full bg-black py-12 overflow-hidden">
            <div className="relative w-full overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

                <motion.div
                    className="flex items-center gap-12 md:gap-20 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20,
                    }}
                >
                    {[...logos, ...logos].map((logo, index) => (
                        <div key={index} className="relative w-[120px] h-[60px] md:w-[150px] md:h-[80px] brightness-0 invert opacity-50 hover:opacity-90 transition-all flex-shrink-0">
                            <Image
                                src={logo}
                                alt={`Client Logo ${index}`}
                                fill
                                sizes="(max-width: 768px) 120px, 150px"
                                className="object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
