import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-gradient-cta">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="font-body text-xs tracking-[0.3em] uppercase text-primary-foreground/60 mb-4 inline-block">
            Commencez votre transformation
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-light text-primary-foreground mb-6">
            Réservez votre
            <br />
            <em>première séance</em>
          </h2>
          <p className="font-body text-base text-primary-foreground/70 max-w-xl mx-auto">
            Chaque parcours commence par un premier pas. Contactez-nous pour une consultation initiale — sans engagement.
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Phone, label: "Téléphone", value: "Contactez-nous" },
            { icon: Mail, label: "Email", value: "contact@neurofeedback-stress.fr" },
            { icon: MapPin, label: "Adresse", value: "Tresses, Gironde" },
          ].map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="bg-primary-foreground/10 backdrop-blur rounded-2xl p-6 text-center border border-primary-foreground/20"
            >
              <Icon size={20} className="text-primary-foreground/70 mx-auto mb-3" />
              <div className="font-body text-xs text-primary-foreground/50 mb-1">{label}</div>
              <div className="font-body text-sm text-primary-foreground">{value}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="mailto:contact@neurofeedback-stress.fr"
            className="inline-block font-body text-sm tracking-wide px-10 py-4 rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all duration-300 shadow-lg"
          >
            Prendre rendez-vous
          </a>
          <p className="font-body text-xs text-primary-foreground/40 mt-4">
            Première séance de découverte — réponse sous 24h
          </p>
        </div>
      </div>
    </section>
  );
}
