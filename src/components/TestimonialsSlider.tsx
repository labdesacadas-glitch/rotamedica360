import { Star } from "lucide-react";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import CtaButton from "./CtaButton";

const testimonials = [
  {
    name: "Dr. Lucas Ferreira",
    specialty: "Residente em Cirurgia",
    quote:
      "Eu estava perdido entre várias especialidades. O Rota Médica 360 me deu a clareza e a confiança para escolher a Cirurgia e traçar um plano de sucesso. Investimento que vale cada centavo.",
    rating: 5,
    avatar: "/public/placeholder.svg",
  },
  {
    name: "Dra. Camila Mendes",
    specialty: "Estudante de Medicina (5º ano)",
    quote:
      "O diagnóstico vocacional foi um divisor de águas. Entendi que minha paixão era a Pediatria e recebi um mapa de como chegar lá. Sinto-me 100% mais motivada.",
    rating: 5,
    avatar: "/public/placeholder.svg",
  },
  {
    name: "Dr. Rafael Souza",
    specialty: "Médico Generalista",
    quote:
      "Após anos de frustração, o programa me ajudou a pivotar minha carreira para a área de Gestão em Saúde. A exclusividade e o suporte são inigualáveis.",
    rating: 5,
    avatar: "/public/placeholder.svg",
  },
];

const TestimonialCard: React.FC<{ testimonial: typeof testimonials[0] }> = ({
  testimonial,
}) => (
  <Card className="glass-card bg-white/10 border-gold/30 shadow-2xl h-full flex flex-col justify-between transition-all duration-500 hover:scale-[1.02]">
    <CardContent className="p-6 md:p-8">
      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-gold text-gold" />
        ))}
      </div>
      <p className="text-lg italic text-white/90 mb-6 font-serif relative">
        <span className="text-4xl text-gold absolute -top-4 -left-4 opacity-50">“</span>
        {testimonial.quote}
      </p>
      <div className="flex items-center mt-4 pt-4 border-t border-gold/20">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="h-12 w-12 rounded-full object-cover mr-4 border-2 border-gold"
        />
        <div>
          <p className="font-bold text-gold font-sans">{testimonial.name}</p>
          <p className="text-sm text-white/70 font-sans">
            {testimonial.specialty}
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const TestimonialsSlider: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-navy overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white text-center mb-4">
          O que dizem nossos <span className="text-shimmer-gold">Alunos de Elite</span>
        </h2>
        <p className="text-xl text-white/70 text-center mb-16 max-w-3xl mx-auto font-sans">
          Resultados reais de médicos que encontraram sua verdadeira vocação.
        </p>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-gold border-gold hover:bg-gold hover:text-navy-dark" />
          <CarouselNext className="text-gold border-gold hover:bg-gold hover:text-navy-dark" />
        </Carousel>

        <div className="text-center mt-16">
          <CtaButton size="lg" className="px-10 py-6 text-lg">
            Junte-se à Elite Médica
          </CtaButton>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;