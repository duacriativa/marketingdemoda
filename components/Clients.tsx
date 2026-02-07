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
        // Duplicating for infinite effect
        "/client-logo-1.png",
        "/client-logo-2.png",
        "/client-logo-3.png",
        "/client-logo-4.png",
        "/client-logo-5.png",
    ];

    return (
        <section className="w-full bg-black py-10 border-b border-zinc-900 overflow-hidden">
            <div className="container mx-auto px-4 text-center mb-8">
                <h2 className="text-[#ccff00] text-sm md:text-base font-bold tracking-widest uppercase">
                    + DE 100 MARCAS CRESCENDO JUNTO COM A DUA
                </h2>
            </div>

            <div className="relative w-full overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />

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
                        <div key={index} className="relative w-[120px] h-[60px] md:w-[150px] md:h-[80px] grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100 flex-shrink-0">
                            <Image
                                src={logo}
                                alt={`Client Logo ${index}`}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
