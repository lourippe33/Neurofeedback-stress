import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Award, Heart, Users } from "lucide-react";
import ericPhoto from "@/assets/eric-gata.jpg";

export default function AboutPage() {
  useEffect(() => {
    document.title = "À propos — Cabinet Neurofeedback-Stress à Tresses, Bordeaux | NeurOptimal®";
    let descTag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!descTag) { descTag = document.createElement("meta"); descTag.name = "description"; document.head.appendChild(descTag); }
    descTag.content = "Découvrez le cabinet Neurofeedback-Stress à Tresses (Gironde), proche Bordeaux. Accompagnement par la méthode NeurOptimal® pour retrouver équilibre, sérénité et bien-être naturellement.";
    let canonicalTag = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalTag) { canonicalTag = document.createElement("link"); canonicalTag.rel = "canonical"; document.head.appendChild(canonicalTag); }
    canonicalTag.href = "https://www.neurofeedback-stress.fr/a-propos";
    return () => { document.title = "Neurofeedback Dynamique NeurOptimal® – Bien-être & Performance"; };
  }, []);

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

          {/* Practitioners */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4 inline-block">
                L'équipe
              </span>
              <h2 className="font-display text-4xl font-light text-foreground">
                Nos praticiens
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Eric GATA */}
              <div className="bg-card rounded-3xl overflow-hidden shadow-card border border-border">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={ericPhoto}
                    alt="Eric GATA — Praticien en neurofeedback"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="font-display text-2xl font-light text-foreground">Eric GATA</h3>
                    <p className="font-body text-xs tracking-widest uppercase text-accent mt-1">Praticien en neurofeedback depuis 2015</p>
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3">
                    Fort de plusieurs années d'expérience dans l'accompagnement bien-être, j'ai eu à cœur d'élargir mes domaines de compétences pour proposer un accompagnement encore plus complet. Je suis devenu praticien en neurofeedback en 2015.
                  </p>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3">
                    Après une carrière en laboratoire pharmaceutique et des soucis de santé qui m'ont amené à revoir mes priorités, j'ai choisi de me reconvertir : non pas par hasard, mais par envie profonde d'aider les autres à traverser leurs difficultés et à retrouver un équilibre plus serein.
                  </p>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    Aujourd'hui, j'accompagne des personnes qui se sentent submergées par le stress, la charge mentale, l'anxiété ou les troubles du sommeil. Mon objectif est simple : vous aider à reprendre la main, avec un cadre clair, un suivi régulier, et des avancées concrètes.
                  </p>
                </div>
              </div>

              {/* Sylvia RUI — placeholder */}
              <div className="bg-card rounded-3xl overflow-hidden shadow-card border border-border">
                <div className="aspect-[4/3] bg-gradient-section flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center">
                    <Users size={32} className="text-primary" />
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="font-display text-2xl font-light text-foreground">Sylvia RUI</h3>
                    <p className="font-body text-xs tracking-widest uppercase text-accent mt-1">Praticienne en neurofeedback</p>
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed italic">
                    Présentation à venir…
                  </p>
                </div>
              </div>
            </div>
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
