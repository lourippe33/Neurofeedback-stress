import { Phone, Mail } from "lucide-react";

interface CTAButtonsProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  column?: boolean;
}

export default function CTAButtons({ variant = "dark", size = "md", column = false }: CTAButtonsProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-xs",
    md: "px-7 py-3.5 text-sm",
    lg: "px-10 py-4 text-sm",
  };

  const isLight = variant === "light";

  return (
    <div className={`flex ${column ? "flex-col" : "flex-col sm:flex-row"} gap-3`}>
      <a
        href="tel:+33782386621"
        className={`inline-flex items-center justify-center gap-2 rounded-full font-body tracking-wide transition-all duration-300 shadow-lg ${sizeClasses[size]} ${
          isLight
            ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            : "bg-primary text-primary-foreground hover:bg-accent"
        }`}
      >
        <Phone size={15} />
        Appeler — 07 82 38 66 21
      </a>
      <a
        href="mailto:eric.gata@gmail.com"
        className={`inline-flex items-center justify-center gap-2 rounded-full font-body tracking-wide transition-all duration-300 ${sizeClasses[size]} ${
          isLight
            ? "border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
            : "border border-primary text-primary hover:bg-secondary"
        }`}
      >
        <Mail size={15} />
        Envoyer un email
      </a>
    </div>
  );
}
