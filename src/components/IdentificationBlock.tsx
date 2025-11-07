import { CheckCircle, GraduationCap, Heart, Zap } from "lucide-react";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import CtaButton from "./CtaButton";

const features = [
  {
    icon: GraduationCap,
    title: "Clareza Vocacional",
    description: "Defina com precisão a área médica que te trará realização e sucesso.",
  },
  {
    icon: Zap,
    title: "Estratégia 360",
    description: "7 Ferramentas integradas para te ajudar a decidir com clareza.",
  },
  {
    icon: Heart,
    title: "Realização Profissional",
    description: "Alinhe seus valores e paixões com sua prática médica diária.",
  },
];

const IdentificationBlock: React.FC = () => {
  return (
    <section id="programa" className="py-20 md:py-32 bg-light-blue overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy-dark text-center mb-4">
          O Rota Médica 360 é para você que busca...
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto font-sans">
          Um diagnóstico completo e exclusivo para traçar a rota da sua carreira médica.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white/80 backdrop-blur-sm border-t-4 border-gold shadow-xl hover:shadow-2xl transition-all duration-500 group"
            >
              <CardHeader className="flex flex-row items-center space-x-4">
                <feature.icon className="h-8 w-8 text-gold group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-xl font-serif text-navy-dark">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-sans">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <CtaButton size="lg" className="px-10 py-6 text-lg">
            Quero Fazer o Rota Médica
          </CtaButton>
        </div>
      </div>
    </section>
  );
};

export default IdentificationBlock;