import { Clock, Users } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Progress } from "./ui/progress";
import CtaButton from "./CtaButton";

const MAX_SLOTS = 100;
const INITIAL_OCCUPIED = 85;
const END_DATE = new Date();
END_DATE.setDate(END_DATE.getDate() + 3); // 3 dias de escassez

const ScarcityCounter: React.FC = () => {
  const [occupiedSlots, setOccupiedSlots] = useState(INITIAL_OCCUPIED);
  const [timeLeft, setTimeLeft] = useState(END_DATE.getTime() - new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(END_DATE.getTime() - new Date().getTime());
    }, 1000);

    // Simulação de decremento de vagas (apenas visual)
    const slotTimer = setInterval(() => {
      if (occupiedSlots < MAX_SLOTS) {
        setOccupiedSlots((prev) => Math.min(prev + 1, MAX_SLOTS));
      }
    }, 60000); // Aumenta 1 vaga por minuto

    return () => {
      clearInterval(timer);
      clearInterval(slotTimer);
    };
  }, [occupiedSlots]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const slotsRemaining = MAX_SLOTS - occupiedSlots;
  const progressValue = (occupiedSlots / MAX_SLOTS) * 100;
  const progressColor = progressValue > 90 ? "bg-red-600 animate-pulse" : "bg-gold";

  return (
    <section className="py-16 bg-navy-dark overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto p-6 md:p-8 rounded-xl bg-navy shadow-2xl border-2 border-gold/50">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-white text-center mb-8">
            <span className="text-gold">ATENÇÃO:</span> Vagas Limitadas e Bônus Expirando
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Contador de Tempo */}
            <div className="flex flex-col items-center p-4 bg-navy-dark rounded-lg border border-gold/30">
              <Clock className="h-8 w-8 text-gold mb-2" />
              <p className="text-lg text-white/80 font-sans">Tempo Restante para Bônus:</p>
              <div className="flex space-x-4 mt-2">
                <div className="text-center">
                  <span className="text-3xl font-bold text-gold font-serif">{days.toString().padStart(2, '0')}</span>
                  <p className="text-sm text-white/70">Dias</p>
                </div>
                <div className="text-center">
                  <span className="text-3xl font-bold text-gold font-serif">{hours.toString().padStart(2, '0')}</span>
                  <p className="text-sm text-white/70">Horas</p>
                </div>
                <div className="text-center">
                  <span className="text-3xl font-bold text-gold font-serif">{minutes.toString().padStart(2, '0')}</span>
                  <p className="text-sm text-white/70">Minutos</p>
                </div>
                <div className="text-center">
                  <span className="text-3xl font-bold text-gold font-serif">{seconds.toString().padStart(2, '0')}</span>
                  <p className="text-sm text-white/70">Segundos</p>
                </div>
              </div>
            </div>

            {/* Contador de Vagas */}
            <div className="flex flex-col p-4 bg-navy-dark rounded-lg border border-gold/30">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-gold mr-2" />
                <p className="text-lg text-white/80 font-sans">Vagas Preenchidas:</p>
              </div>
              <p className="text-center text-3xl font-bold text-gold font-serif mb-2">
                {slotsRemaining} Vagas Restantes
              </p>
              <Progress value={progressValue} className="h-3 bg-white/20" indicatorClassName={progressColor} />
              <p className="text-sm text-white/70 mt-2 text-center">
                {occupiedSlots} de {MAX_SLOTS} vagas já preenchidas.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <CtaButton size="lg" className="px-12 py-7 text-xl">
              Garantir Minha Vaga Antes que Acabe
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScarcityCounter;