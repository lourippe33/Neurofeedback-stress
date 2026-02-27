import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Award, Heart, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-hero pt-36 pb-24 text-center">
        <div className="container mx-auto px-6">
          <span className="font-body text-xs tracking-[0.3em] uppercase text-primary-foreground/60 mb-4 inline-block">
            Notre histoire
          </span>
          <h1 className="font-display text-6xl md:text-7xl font-light text-primary-foreground mb-6">
            À propos
          </h1>
          <p className="font-body text-lg text-primary-foreground/70 max-w-xl mx-auto">
            Un centre dédié à votre équilibre mental, ancré en Gironde.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-24 bg-background flex-1">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <h2 className="font-display text-4xl font-light text-foreground mb-6">
                Notre mission
              </h2>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                Le centre <strong className="text-foreground font-medium">Neurofeedback-stress</strong> est né d'une conviction profonde : chaque cerveau possède la capacité naturelle de retrouver son équilibre. Notre rôle est de l'accompagner dans cette démarche, sans forcer, sans médicaments.
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                Situé à Tresses, en Gironde, notre centre accueille des personnes de tous âges et de tous horizons, unies par un même besoin : retrouver de la sérénité dans un monde qui va trop vite.
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Nous utilisons exclusivement la méthode <strong className="text-foreground font-medium">NeurOptimal® Dynamique</strong>, reconnue internationalement pour son efficacité et sa sécurité.
              </p>
            </div>
            <div className="bg-gradient-card rounded-3xl p-10 shadow-card border border-border">
              <div className="space-y-8">
                {[
                  { icon: MapPin, title: "Tresses, Gironde", desc: "Un cadre apaisant, facilement accessible depuis Bordeaux" },
                  { icon: Award, title: "NeurOptimal® certifié", desc: "Utilisation de la meilleure technologie de neurofeedback au monde" },
                  { icon: Heart, title: "Approche bienveillante", desc: "Chaque séance est adaptée à vos besoins spécifiques" },
                  { icon: Users, title: "Tous publics", desc: "Adultes, adolescents, seniors — le neurofeedback s'adapte à chacun" },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-body text-sm font-medium text-foreground mb-1">{title}</div>
                      <div className="font-body text-xs text-muted-foreground">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { value: "+3 000", label: "séances réalisées" },
              { value: "20+", label: "ans d'expérience" },
              { value: "100%", label: "non invasif" },
              { value: "NeurOptimal®", label: "technologie certifiée" },
            ].map((stat) => (
              <div key={stat.label} className="text-center py-8 px-6 bg-card rounded-2xl shadow-soft border border-border">
                <div className="font-display text-3xl font-semibold text-primary mb-2">{stat.value}</div>
                <div className="font-body text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="bg-gradient-cta rounded-3xl p-12 text-center">
            <p className="font-display text-3xl italic font-light text-primary-foreground leading-relaxed mb-6">
              "Votre cerveau sait comment guérir — nous lui rappelons simplement comment faire."
            </p>
            <div className="w-12 h-px bg-primary-foreground/30 mx-auto" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
