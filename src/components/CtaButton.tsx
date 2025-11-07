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
  const baseClasses = "uppercase font-bold tracking-widest transition-all duration-300";

  const primaryClasses = cn(
    "bg-gradient-to-r from-gold-light to-gold-default text-navy-dark shadow-2xl shadow-gold-default/50",
    "hover:from-gold-default hover:to-gold-light hover:shadow-gold-default/70",
    "animate-pulse-soft",
    "relative overflow-hidden",
    // Shimmer effect on hover
    "before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent)] before:transition-transform before:duration-700 before:translate-x-[-100%] hover:before:translate-x-[100%]"
  );

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
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