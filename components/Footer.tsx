import Link from "next/link";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-3xl font-bold text-white mb-6 block">
                            DUA<span className="text-dualime">.</span>
                        </Link>
                        <p className="text-gray-400 max-w-sm mb-6">
                            A agência de marketing de moda que respira estratégia e resultados.
                            Crescemos marcas com autenticidade e métricas reais.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://instagram.com/duacriativa" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-dualime hover:text-black transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="https://www.linkedin.com/company/duacriativa" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-dualime hover:text-black transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://wa.me/5585989011558" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-dualime hover:text-black transition-colors">
                                <MessageCircle size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
                        <ul className="space-y-3">
                            <li><Link href="#about" className="text-gray-400 hover:text-dualime transition-colors">Sobre Nós</Link></li>
                            <li><Link href="#services" className="text-gray-400 hover:text-dualime transition-colors">Nossos Serviços</Link></li>
                            <li><Link href="#methodology" className="text-gray-400 hover:text-dualime transition-colors">Método Dua LAB</Link></li>
                            <li><Link href="#contact" className="text-gray-400 hover:text-dualime transition-colors">Fale Conosco</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Contato</h4>
                        <address className="not-italic text-gray-400 space-y-3">
                            <p>Av. Santos Dumont, 5335<br />Papicu, Sala 817</p>
                            <p>Fortaleza - CE</p>
                            <p className="pt-2 text-dualime">suporte@duacriativa.com</p>
                        </address>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Dua Criativa. Todos os direitos reservados.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">Privacidade</Link>
                        <Link href="#" className="hover:text-white transition-colors">Termos</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
