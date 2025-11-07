import { Minus, Plus } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import CtaButton from "./CtaButton";

const faqItems = [
  {
    question: "O Rota Médica 360 é apenas para estudantes de medicina?",
    answer:
      "Não. O programa é ideal para estudantes (a partir do 3º ano), residentes e médicos generalistas que buscam clareza, transição de carreira ou excelência profissional.",
  },
  {
    question: "Qual a diferença entre este programa e uma mentoria comum?",
    answer:
      "O Rota Médica 360 é um diagnóstico vocacional completo, baseado em metodologias científicas e exclusivas, seguido de um plano de ação 360. Não é apenas conselho, é um mapa estratégico.",
  },
  {
    question: "Quanto tempo dura o acesso ao conteúdo?",
    answer:
      "O acesso à plataforma e aos materiais de apoio é vitalício. As sessões de mentoria individual têm duração definida no seu pacote de inscrição.",
  },
  {
    question: "Existe garantia de satisfação?",
    answer:
      "Sim. Oferecemos uma garantia incondicional de 7 dias. Se você não sentir que o programa é para você, devolvemos 100% do seu investimento.",
  },
];

const FaqSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy-dark text-center mb-4">
          Perguntas Frequentes
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto font-sans">
          Tire suas dúvidas e comece sua jornada com total confiança.
        </p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-200 bg-light-blue/50 px-4 rounded-lg mb-4 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <AccordionTrigger className="text-lg font-serif text-navy-dark hover:no-underline py-4">
                  <div className="flex justify-between items-center w-full pr-4">
                    {item.question}
                    <Plus className="h-5 w-5 shrink-0 transition-transform duration-200 data-[state=open]:hidden" />
                    <Minus className="h-5 w-5 shrink-0 transition-transform duration-200 data-[state=closed]:hidden" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 font-sans pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-16">
          <CtaButton size="lg" className="px-10 py-6 text-lg">
            Ainda Tem Dúvidas? Fale Conosco
          </CtaButton>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;