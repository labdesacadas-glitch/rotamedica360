import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import CtaButton from "./CtaButton";
import { Button } from "./ui/button";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "O Programa", href: "#programa" },
    { name: "Como Funciona", href: "#como-funciona" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Investimento", href: "#investimento" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-navy/90 backdrop-blur-sm border-b border-gold/20">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img
            src="/logo-rota-medica.jpeg"
            alt="Rota Médica Logo"
            className="h-8 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white/80 hover:text-gold transition-colors duration-300 font-sans text-sm uppercase tracking-wider"
            >
              {item.name}
            </a>
          ))}
          <CtaButton size="sm">
            Inscreva-se Agora
          </CtaButton>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className="md:hidden text-gold hover:bg-navy-dark"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-navy-dark/95 p-4 border-t border-gold/20">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-white/80 hover:text-gold transition-colors duration-300 font-sans text-lg uppercase tracking-wider p-2 border-b border-gold/10"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4">
              <CtaButton className="w-full" onClick={() => setIsMenuOpen(false)}>
                Inscreva-se Agora
              </CtaButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;