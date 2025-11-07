import { Facebook, Instagram, Linkedin } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-dark py-12 md:py-16 border-t border-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gold/30 pb-8 mb-8">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <img
              src="/logo-rota-medica.jpeg"
              alt="Rota Médica Logo"
              className="h-10 w-auto object-contain opacity-90"
            />
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center space-x-6 md:space-x-10 text-sm font-sans uppercase tracking-wider">
            <a
              href="#programa"
              className="text-white/70 hover:text-gold transition-colors duration-300 mb-2 md:mb-0"
            >
              O Programa
            </a>
            <a
              href="#investimento"
              className="text-white/70 hover:text-gold transition-colors duration-300 mb-2 md:mb-0"
            >
              Investimento
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-gold transition-colors duration-300 mb-2 md:mb-0"
            >
              Termos de Uso
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6 md:mt-0">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors duration-300">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors duration-300">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors duration-300">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="text-center text-sm text-white/50 font-sans">
          <p>&copy; {new Date().getFullYear()} Rota Médica 360. Todos os direitos reservados.</p>
          <p className="mt-1">CNPJ: 00.000.000/0001-00 | Contato: contato@rotamedica360.com.br</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;