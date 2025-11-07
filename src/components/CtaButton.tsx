import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import React from "react";

interface CtaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

const CTA_LINK = "https://pay.kiwify.com.br/7qar1zX";

const CtaButton: React.FC<CtaButtonProps> = ({
  href = CTA_LINK,
  children,
  variant = "primary",
  size = "lg",
  className,
  ...props
}) => {
  // Ajuste para mobile: text-base (1rem) com padding py-3 px-6.
  // Ajuste para desktop: md:text-xl (1.25rem) com padding py-4 px-8.
  const baseClasses = "uppercase font-bold tracking-widest transition-all duration-300 text-base py-3 px-6 md:text-xl md:py-4 md:px-8 h-auto";

  // Estilo primário ajustado para ser mais discreto.
  const primaryClasses = cn(
    "bg-gradient-to-r from-gold-light to-gold-default text-navy-dark shadow-xl shadow-gold-default/30",
    "hover:from-gold-default hover:to-gold-light hover:shadow-gold-default/50",
    "relative overflow-hidden",
    // Shimmer effect on hover
    "before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent)] before:transition-transform before:duration-700 before:translate-x-[-100%] hover:before:translate-x-[100%]"
  );

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cn(size === 'lg' && 'w-full md:w-auto')}>
      <Button
        size={size}
        className={cn(baseClasses, primaryClasses, className)}
        {...props}
      >
        {children}
      </Button>
    </a>
  );
};

export default CtaButton;