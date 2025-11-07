import React from "react";
import { Quote } from "lucide-react";

const StorytellingBlock: React.FC = () => {
  return (
    <section className="relative h-[600px] md:h-[800px] overflow-hidden bg-navy-dark">
      {/* Parallax Image Simulation */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
        style={{
          backgroundImage: `url('/dra-alli-yasmin.jpeg')`,
          backgroundAttachment: 'fixed', // Simula o parallax
          backgroundPosition: 'center 30%',
        }}
      >
        {/* Overlay Gradiente Azul-Dourado */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy to-navy/50 opacity-90"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto h-full flex items-center justify-center px-4">
        <div className="max-w-4xl text-center p-8 md:p-12 glass-card rounded-xl border-gold/30">
          <Quote className="h-12 w-12 text-gold mx-auto mb-4" />
          <h3 classNameName="text-2xl md:text-4xl font-serif italic text-white leading-relaxed mb-6">
            "A medicina é uma jornada, não um destino. Nosso papel é garantir que sua rota seja a mais gratificante e bem-sucedida possível, evitando o burnout e a frustração."
          </h3>
          <p className="text-lg font-sans text-gold font-semibold">
            Dra. Alli Gomber e Dra. Yasmin
          </p>
          <p className="text-sm font-sans text-white/70">
            Fundadoras do Rota Médica 360
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorytellingBlock;