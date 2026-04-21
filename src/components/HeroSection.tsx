import heroBrain from "@/assets/hero-brain.jpg";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={heroBrain}
          alt="Neurofeedback NeurOptimal Tresses Bordeaux"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(185_60%_10%/0.75)] via-[hsl(185_60%_10%/0.55)] to-[hsl(185_60%_10%/0.85)]" />
      </div>

      <div id="main-content" className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
          <span className="font-body text-xs tracking-[0.35em] uppercase text-primary-foreground/60 mb-6 inline-block">
            Méthode NeurOptimal® Dynamique · Tresses, Gironde
          </span>
        </div>

        <h1
          className="font-display text-6xl md:text-8xl font-light text-primary-foreground mb-6 leading-none animate-fade-up opacity-0"
          style={{ animationDelay: "0.4s" }}
        >
          Retrouvez votre
          <br />
          équilibre intérieur
        </h1>

        <p
          className="font-body text-lg md:text-xl font-light text-primary-foreground/75 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up opacity-0"
          style={{ animationDelay: "0.6s" }}
        >
          Le neurofeedback entraîne votre cerveau à s'autoréguler. Réduisez le stress, retrouvez un sommeil réparateur et améliorez votre concentration — naturellement. Cabinet à Tresses, proche Bordeaux.
        </p>

      </div>

      <a
        href="#bienfaits"
        aria-label="Défiler vers les bienfaits"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary-foreground/50 hover:text-primary-foreground transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
