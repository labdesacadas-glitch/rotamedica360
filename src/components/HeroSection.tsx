import { ArrowDown } from "lucide-react";
import React from "react";
import CtaButton from "./CtaButton";

const VIDEO_ID = "whmdkEzLNJ0";
const YOUTUBE_EMBED_URL = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=0&modestbranding=1&rel=0`;

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
          {/* Video Embed */}
          <div className="w-full max-w-4xl relative rounded-xl overflow-hidden shadow-2xl border-2 border-gold/50 transition-all duration-500 hover:scale-[1.01]">
            <div className="relative" style={{ paddingBottom: '56.25%' /* 16:9 Aspect Ratio */ }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={YOUTUBE_EMBED_URL}
                title="Vídeo de Vendas Rota Médica 360"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          {/* CTA Button */}
          <CtaButton size="lg" className="px-12 py-7 text-xl mt-12">
            Quero Minha Rota Médica 360
          </CtaButton>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 z-10 flex flex-col items-center mt-4">
        <p className="text-white/70 text-sm mb-2 font-sans uppercase tracking-widest">Role para saber mais</p>
        <ArrowDown className="h-6 w-6 text-gold animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;