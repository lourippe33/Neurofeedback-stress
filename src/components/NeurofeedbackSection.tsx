import { Brain, Moon, Zap, Heart, Shield, Smile, Headphones, MessageCircle, Plug, Music } from "lucide-react";

const benefits = [
  { icon: Brain, title: "Stress & Anxiété", description: "Apprenez à votre cerveau à ne plus se laisser submerger par les pensées anxieuses et la pression du quotidien." },
  { icon: Moon, title: "Sommeil réparateur", description: "Retrouvez un endormissement naturel et des nuits plus profondes, sans médicaments." },
  { icon: Zap, title: "Concentration & clarté", description: "Améliorez votre focus, votre clarté mentale et vos performances cognitives." },
  { icon: Heart, title: "Équilibre émotionnel", description: "Renforcez votre résilience face aux situations difficiles et retrouvez de la sérénité." },
  { icon: Shield, title: "Trauma & PTSD", description: "Une approche douce pour accompagner la guérison des blessures émotionnelles profondes." },
  { icon: Smile, title: "Bien-être & lâcher-prise", description: "Sentiment de légèreté, d'énergie retrouvée et de connexion avec soi-même." },
];

const steps = [
  { icon: MessageCircle, number: "01", title: "Accueil & Échange", duration: "5-10 min", description: "Nous faisons le point sur votre état actuel, votre sommeil, votre niveau de stress et ce que vous souhaitez améliorer." },
  { icon: Plug, number: "02", title: "Installation", duration: "5 min", description: "Confortablement installé(e) dans un fauteuil, deux petits capteurs sont posés sur le cuir chevelu et deux pinces sur les oreilles. C'est totalement indolore — le système ne fait qu'écouter, sans envoyer aucune électricité." },
  { icon: Music, number: "03", title: "La séance de musique", duration: "33 min", description: "Vous écoutez une musique relaxante (ou regardez un paysage vidéo). Le système détecte les turbulences cérébrales et crée de micro-coupures dans le son — votre cerveau s'en aperçoit et se réajuste de lui-même vers un état plus calme." },
  { icon: Headphones, number: "04", title: "Fin de séance", duration: "5 min", description: "Un bref échange sur vos ressentis. Les premiers effets (détachement, apaisement, sommeil amélioré) se font souvent sentir dès les premières séances. Une série de 10 séances ancre durablement les bénéfices." },
];

export default function NeurofeedbackSection() {
  return (
    <section id="neurofeedback" className="bg-background">
      {/* ── Bloc "Qu'est-ce que c'est ?" ── */}
      <div className="py-28 bg-gradient-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4 inline-block">
              Comprendre la méthode
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-light text-foreground">
              Qu'est-ce que le
              <br />
              <em>Neurofeedback Dynamique ?</em>
            </h2>
            <div className="w-16 h-px bg-accent mx-auto mt-8" />
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                Imaginez votre cerveau comme un orchestre qui joue une symphonie. Parfois, à cause du stress, de la fatigue ou des émotions, certains instruments jouent trop fort ou trop vite, créant des <strong className="text-foreground font-medium">turbulences</strong>.
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground font-medium">NeurOptimal® fonctionne comme un miroir très sophistiqué</strong> pour votre cerveau. Dès qu'il détecte une turbulence, il interrompt très brièvement la musique que vous écoutez. Votre cerveau remarque cette interruption et se réajuste de lui-même pour revenir à un état plus calme et efficace.
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                C'est un processus <strong className="text-foreground font-medium">100% naturel, non-invasif et sans effort</strong>, qui permet à votre cerveau de retrouver sa flexibilité et sa résilience naturelle.
              </p>
              <p className="font-body text-xs text-muted-foreground/60 mt-6 italic border-l-2 border-border pl-4">
                Note : NeurOptimal® est un outil d'entraînement au bien-être et ne remplace en aucun cas un traitement médical.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { step: "Observation", desc: "Le système écoute votre activité cérébrale en temps réel." },
                { step: "Miroir", desc: "Dès qu'il détecte une turbulence, il interrompt très brièvement le son de la musique." },
                { step: "Auto-régulation", desc: "Votre cerveau remarque l'interruption, comprend qu'il fait fausse route, et se réajuste de lui-même." },
              ].map(({ step, desc }) => (
                <div key={step} className="bg-card rounded-2xl p-6 shadow-soft border border-border flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <div className="font-display text-base font-semibold text-foreground mb-1">{step}</div>
                    <div className="font-body text-xs text-muted-foreground leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Vidéo explicative ── */}
      <div className="py-16 bg-gradient-section border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4 inline-block">
              En vidéo
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
              Le neurofeedback
              <br />
              <em>expliqué simplement</em>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-card border border-border">
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe
                src="https://player.vimeo.com/video/1142362792?h=36874df46f&badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                title="Explication neurofeedback"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Bienfaits ── */}
      <div className="py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl font-light text-foreground">
              Les bienfaits du
              <br />
              <em>Neurofeedback</em>
            </h2>
            <div className="w-16 h-px bg-accent mx-auto mt-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-[0_12px_50px_-8px_hsl(185_60%_22%/0.2)] transition-all duration-500 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Icon size={20} className="text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-3">{b.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{b.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Déroulement d'une séance ── */}
      <div className="py-28 bg-gradient-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4 inline-block">
              Votre expérience
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-light text-foreground">
              Le déroulement
              <br />
              <em>d'une séance</em>
            </h2>
            <div className="w-16 h-px bg-accent mx-auto mt-8" />
          </div>

          <div className="max-w-4xl mx-auto">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="flex flex-col md:flex-row gap-8 md:gap-16 items-start mb-16 last:mb-0">
                  <div className="flex-shrink-0 flex flex-col items-center md:items-end gap-1">
                    <span className="font-display text-8xl font-light text-primary/15 select-none leading-none">{step.number}</span>
                    <span className="font-body text-xs text-accent">{step.duration}</span>
                  </div>
                  <div className="flex-1 pt-3 border-t border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                        <Icon size={16} className="text-primary" />
                      </div>
                      <h3 className="font-display text-3xl font-semibold text-foreground">{step.title}</h3>
                    </div>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
