import { Check, MapPin } from "lucide-react";
import { useEffect } from "react";

export default function Pricing() {
  useEffect(() => {
    if (!document.querySelector('script[src="//tinder.thrivecart.com/embed/v1/thrivecart.js"]')) {
      const script = document.createElement("script");
      script.src = "//tinder.thrivecart.com/embed/v1/thrivecart.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);
  return (
    <section id="tarifs" className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4 inline-block">
            Transparence tarifaire
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-light text-foreground">
            Tarifs
          </h2>
          <div className="w-16 h-px bg-accent mx-auto mt-8" />
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
          {/* Séance unité */}
          <div className="bg-card rounded-3xl p-10 border border-border shadow-card">
            <div className="mb-6">
              <div className="font-display text-5xl font-light text-foreground mb-1">40 <span className="text-3xl">€</span></div>
              <div className="font-body text-sm text-muted-foreground">par séance</div>
            </div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Séance à l'unité</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
              Idéale pour découvrir le neurofeedback ou pour un suivi flexible selon vos disponibilités.
            </p>
            <div className="space-y-3">
              {["Accueil & installation", "Séance de neurofeedback (33 min)", "Point rapide en fin de séance"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary flex items-center justify-center">
                    <Check size={11} className="text-primary" />
                  </div>
                  <span className="font-body text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Forfait 10 */}
          <div className="bg-gradient-cta rounded-3xl p-10 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-primary-foreground/20 rounded-full px-3 py-1">
              <span className="font-body text-xs text-primary-foreground">Économie 20%</span>
            </div>
            <div className="mb-6">
              <div className="font-display text-5xl font-light text-primary-foreground mb-1">320 <span className="text-3xl">€</span></div>
              <div className="font-body text-sm text-primary-foreground/60">soit 32 €/séance</div>
            </div>
            <h3 className="font-display text-2xl font-semibold text-primary-foreground mb-4">Forfait 10 séances</h3>
            <p className="font-body text-sm text-primary-foreground/70 leading-relaxed mb-6">
              Recommandé pour un accompagnement complet et des résultats durables.
            </p>
            <div className="space-y-3">
              {["Accueil & installation", "Séance de neurofeedback (33 min)", "Point rapide en fin de séance", "Paiement en plusieurs fois possible"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                    <Check size={11} className="text-primary-foreground" />
                  </div>
                  <span className="font-body text-sm text-primary-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lieu + paiement */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-muted rounded-2xl p-6 border border-border flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
              <MapPin size={18} className="text-primary" />
            </div>
            <div>
              <div className="font-body text-sm font-medium text-foreground mb-1">Cabinet à Tresses</div>
              <div className="font-body text-xs text-muted-foreground">9 galerie marchande, 33370 Tresses · Proche Bordeaux (15 min)</div>
            </div>
          </div>
          <div className="bg-muted rounded-2xl p-6 border border-border">
            <div className="font-body text-sm font-medium text-foreground mb-2">Paiement en plusieurs fois</div>
            <div className="font-body text-xs text-muted-foreground">
              Un échelonnement est possible sur demande pour le forfait 10 séances. Contactez-nous pour en discuter.
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="font-body text-sm text-muted-foreground mb-6">Prêt(e) à commencer ? Réglez votre séance en ligne :</p>
          <a
            data-thrivecart-account="ericgata"
            data-thrivecart-tpl="v2"
            data-thrivecart-product="3"
            className="thrivecart-button thrivecart-button-styled thrivecart-button_style-rounded thrivecart-button-custom inline-flex items-center justify-center gap-2 font-body text-sm tracking-wide px-8 py-4 rounded-full bg-primary text-primary-foreground hover:bg-accent transition-colors duration-300 shadow-lg cursor-pointer"
          >
            Régler ma séance en ligne — Eric GATA
          </a>
        </div>
      </div>
    </section>
  );
}
