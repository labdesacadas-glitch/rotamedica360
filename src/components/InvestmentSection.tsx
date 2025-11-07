import { BadgeCheck, DollarSign } from "lucide-react";
import React from "react";
import CtaButton from "./CtaButton";

const InvestmentSection: React.FC = () => {
  const originalPrice = "R$ 597,00";
  const currentPrice = "R$ 147,00";
  const installment = "12x de R$ 15,20";

  return (
    <section id="investimento" className="py-20 md:py-32 bg-light-blue overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy-dark text-center mb-4">
          Seu Investimento na <span className="text-gold">Carreira dos Sonhos</span>
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto font-sans">
          O valor de ter clareza e sucesso profissional é incalculável.
        </p>

        <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-2xl border-t-8 border-gold relative">
          {/* Selo de Garantia Animado */}
          <div className="absolute -top-16 right-4 md:-right-16">
            <div className="bg-navy p-4 rounded-full shadow-xl border-4 border-gold animate-spin-slow">
              <BadgeCheck className="h-10 w-10 text-gold" />
            </div>
            <p className="text-xs text-navy-dark font-bold mt-2 text-center">7 Dias de Garantia</p>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-500 line-through mb-2 font-sans">
              De {originalPrice}
            </p>
            <h3 className="text-5xl md:text-7xl font-serif font-extrabold text-navy-dark mb-4">
              Por Apenas
            </h3>
            <div className="flex items-center justify-center mb-6">
              <DollarSign className="h-10 w-10 text-gold" />
              <span className="text-shimmer-gold text-7xl md:text-9xl font-serif font-extrabold leading-none">
                {currentPrice.replace('R$ ', '').split(',')[0]}
              </span>
              <span className="text-4xl text-gold font-serif font-extrabold self-end mb-2">
                ,{currentPrice.split(',')[1]}
              </span>
            </div>
            <p className="text-2xl text-navy-dark font-bold mb-8 font-sans">
              Ou em {installment}
            </p>

            <CtaButton size="lg" className="px-16 py-8 text-2xl shadow-gold-default/80">
              Quero Minha Vaga Exclusiva
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;