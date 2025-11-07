import { BookOpen, Briefcase, Users, Zap } from "lucide-react";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import CtaButton from "./CtaButton";

const bonuses = [
  {
    icon: Zap,
    title: "Bônus Exclusivo: Entrevistas com Médicos",
    description: "Acesso a duas entrevistas gravadas com profissionais, contando sobre o dia-a-dia de duas especialidades médicas.",
    badge: "CLAREZA",
  },
];

const BonusCard: React.FC<{ bonus: typeof bonuses[0]; index: number }> = ({
  bonus,
  index,
}) => (
  <Card
    className="relative bg-navy-dark border-2 border-gold/50 shadow-2xl transition-all duration-500 hover:scale-[1.02] group"
  >
    <CardHeader className="flex flex-row items-center justify-between">
      <div className="flex items-center space-x-4">
        <bonus.icon className="h-8 w-8 text-gold group-hover:scale-110 transition-transform duration-300" />
        <CardTitle className="text-xl font-serif text-white">
          {bonus.title}
        </CardTitle>
      </div>
      <span className="bg-gold text-navy-dark text-xs font-bold uppercase px-3 py-1 rounded-full tracking-wider">
        {bonus.badge}
      </span>
    </CardHeader>
    <CardContent>
      <p className="text-white/80 font-sans">{bonus.description}</p>
    </CardContent>
  </Card>
);

const ExclusiveBonuses: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-navy overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white text-center mb-4">
          Bônus <span className="text-shimmer-gold">Exclusivo</span> para Sua Inscrição
        </h2>
        <p className="text-xl text-white/70 text-center mb-16 max-w-3xl mx-auto font-sans">
          Acelere seu sucesso com este presente de alto valor.
        </p>

        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          {bonuses.map((bonus, index) => (
            <BonusCard key={index} bonus={bonus} index={index} />
          ))}
        </div>

        <div className="text-center">
          <CtaButton size="lg">
            Quero Fazer o Rota Médica
          </CtaButton>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveBonuses;