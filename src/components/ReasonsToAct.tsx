import { Award, Clock, Gem, ShieldCheck, TrendingUp } from "lucide-react";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import CtaButton from "./CtaButton";

const reasons = [
  {
    icon: Clock,
    title: "Economize Anos",
    description: "Evite o desperdício de tempo e dinheiro em especialidades erradas.",
  },
  {
    icon: Award,
    title: "Metodologia Validada",
    description: "Acesso a um diagnóstico vocacional médico exclusivo e cientificamente comprovado.",
  },
  {
    icon: ShieldCheck,
    title: "Garantia de Satisfação",
    description: "Sua satisfação é nossa prioridade. Risco zero para você.",
  },
  {
    icon: TrendingUp,
    title: "Clareza Imediata",
    description: "Saiba exatamente quais são os próximos passos para alavancar sua carreira.",
  },
];

const ReasonsToAct: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-light-blue overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy-dark text-center mb-4">
          Por Que Você Deve Agir <span className="text-gold">Agora</span>
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto font-sans">
          O futuro da sua carreira não pode esperar.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 mb-16">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="bg-white shadow-xl border-t-4 border-navy-dark transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl group"
            >
              <CardHeader className="flex flex-row items-center space-x-4">
                <reason.icon className="h-8 w-8 text-navy-dark group-hover:text-gold transition-colors duration-300" />
                <CardTitle className="text-xl font-serif text-navy-dark">
                  {reason.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-sans">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <CtaButton size="lg">
            Faça o Seu Diagnóstico Agora
          </CtaButton>
        </div>
      </div>
    </section>
  );
};

export default ReasonsToAct;