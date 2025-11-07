import { Brain, Compass, Lightbulb, Map, Target } from "lucide-react";
import React from "react";
import CtaButton from "./CtaButton";

const steps = [
  {
    number: 1,
    title: "Diagnóstico Profundo",
    description: "Análise completa de suas habilidades, valores e perfil psicológico.",
    icon: Brain,
  },
  {
    number: 2,
    title: "Mapeamento de Opções",
    description: "Exploração detalhada das áreas médicas mais alinhadas ao seu perfil.",
    icon: Map,
  },
  {
    number: 3,
    title: "Definição da Rota",
    description: "Criação do seu plano de carreira 360, com metas claras e estratégicas.",
    icon: Compass,
  },
  {
    number: 4,
    title: "Mentoria Exclusiva",
    description: "Sessões individuais para refinar sua estratégia e superar desafios.",
    icon: Lightbulb,
  },
  {
    number: 5,
    title: "Execução e Sucesso",
    description: "Acompanhamento para garantir que você atinja seus objetivos profissionais.",
    icon: Target,
  },
];

interface StepCardProps {
  step: typeof steps[0];
}

const StepCard: React.FC<StepCardProps> = ({ step }) => (
  <div className="relative p-6 bg-white rounded-xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-navy text-gold rounded-full h-12 w-12 flex items-center justify-center text-2xl font-serif font-bold border-4 border-gold/50 shadow-lg">
      {step.number}
    </div>
    <div className="mt-8 text-center">
      <step.icon className="h-8 w-8 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
      <h3 className="text-xl font-serif font-bold text-navy-dark mb-2">
        {step.title}
      </h3>
      <p className="text-gray-600 font-sans">{step.description}</p>
    </div>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-20 md:py-32 bg-light-blue overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy-dark text-center mb-4">
          Como o Rota Médica 360 Funciona
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto font-sans">
          Um processo exclusivo e cientificamente validado para o seu sucesso.
        </p>

        <div className="relative">
          {/* Animated Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gold/30 transform -translate-y-1/2">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold to-transparent animate-pulse" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative z-10">
                <StepCard step={step} />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <CtaButton size="lg" className="px-10 py-6 text-lg">
            Começar Minha Transformação
          </CtaButton>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;