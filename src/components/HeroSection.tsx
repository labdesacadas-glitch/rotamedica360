import { ArrowDown, Play } from "lucide-react";
import React from "react";
import CtaButton from "./CtaButton";
import { Button } from "./ui/button";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-navy overflow-hidden">
      {/* Background Effects (Subtle Hexagonal Mesh/Particles) */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[url('/public/placeholder.svg')] bg-repeat" style={{
            backgroundImage: `radial-gradient(circle at center, #1A2942 0%, #0A1628 100%)`,
            backgroundSize: '100% 100%',
          }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl lg:text-[64px] font-serif font-extrabold leading-tight mb-6 text-white">
          O <span className="text-shimmer-gold">Diagnóstico Vocacional</span> que
          Transforma sua Carreira Médica em <span className="text-shimmer-gold">360 Graus</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-10 font-sans max-w-3xl mx-auto">
          Descubra seu caminho único e alcance a excelência profissional com o Rota Médica 360.
        </p>

        <div className="flex flex-col items-center space-y-6">
          <CtaButton size="lg" className="px-12 py-7 text-xl">
            Quero Minha Rota Médica 360
          </CtaButton>

          {/* Video Placeholder */}
          <div className="w-full max-w-4xl mt-12 relative group cursor-pointer rounded-xl overflow-hidden shadow-2xl border-2 border-gold/50 transition-all duration-500 hover:scale-[1.01]">
            <img
              src="/public/placeholder.svg"
              alt="Vídeo de Vendas Rota Médica 360"
              className="w-full h-auto object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
              style={{ aspectRatio: '16/9' }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-navy/50 group-hover:bg-navy/30 transition-colors duration-500">
              <Button
                variant="ghost"
                className="h-20 w-20 rounded-full bg-gold/90 hover:bg-gold text-navy-dark transition-all duration-300 shadow-xl hover:scale-110"
              >
                <Play className="h-8 w-8 fill-current" />
              </Button>
            </div>
            <p className="absolute bottom-4 left-4 text-white/90 text-sm font-sans">Assista ao vídeo de apresentação (12:30)</p>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 z-10 flex flex-col items-center">
        <p className="text-white/70 text-sm mb-2 font-sans uppercase tracking-widest">Role para saber mais</p>
        <ArrowDown className="h-6 w-6 text-gold animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;