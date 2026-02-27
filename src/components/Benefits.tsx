import { Brain, Moon, Zap, Heart, Shield, Smile } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Stress & Anxiété",
    description: "Apprenez à votre cerveau à ne plus se laisser submerger par les pensées anxieuses et la pression du quotidien.",
  },
  {
    icon: Moon,
    title: "Sommeil réparateur",
    description: "Retrouvez un endormissement naturel et des nuits plus profondes, sans médicaments.",
  },
  {
    icon: Zap,
    title: "Concentration",
    description: "Améliorez votre focus, votre clarté mentale et vos performances cognitives.",
  },
  {
    icon: Heart,
    title: "Équilibre émotionnel",
    description: "Renforcez votre résilience face aux situations difficiles et retrouvez de la sérénité.",
  },
  {
    icon: Shield,
    title: "Trauma & PTSD",
    description: "Une approche douce pour accompagner la guérison des blessures émotionnelles profondes.",
  },
  {
    icon: Smile,
    title: "Bien-être global",
    description: "Sentiment de légèreté, d'énergie retrouvée et de connexion avec soi-même.",
  },
];

export default function Benefits() {
  return (
    <section id="bienfaits" className="py-28 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4 inline-block">
            Ce que vous allez ressentir
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-light text-foreground">
            Les bienfaits du
            <br />
            <em>Neurofeedback</em>
          </h2>
          <div className="w-16 h-px bg-accent mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-[0_12px_50px_-8px_hsl(185_60%_22%/0.2)] transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Icon size={20} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                  {b.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {b.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
