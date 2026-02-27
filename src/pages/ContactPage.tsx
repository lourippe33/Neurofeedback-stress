import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "", rgpd: false });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.rgpd) return;
    setSent(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-hero pt-36 pb-24 text-center">
        <div className="container mx-auto px-6">
          <span className="font-body text-xs tracking-[0.3em] uppercase text-primary-foreground/60 mb-4 inline-block">
            Prendre rendez-vous
          </span>
          <h1 className="font-display text-6xl md:text-7xl font-light text-primary-foreground mb-6">
            Contact
          </h1>
          <p className="font-body text-lg text-primary-foreground/70 max-w-xl mx-auto mb-8">
            Une question, une envie de commencer ? Répondons-nous rapidement.
          </p>
          {/* CTA direct */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+33782386621"
              className="inline-flex items-center justify-center gap-2 rounded-full font-body text-sm tracking-wide px-8 py-4 bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all shadow-lg"
            >
              <Phone size={16} />
              Appeler — 07 82 38 66 21
            </a>
            <a
              href="mailto:eric.gata@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-full font-body text-sm tracking-wide px-8 py-4 border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 transition-all"
            >
              <Mail size={16} />
              eric.gata@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-background flex-1">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">

            {/* Info */}
            <div>
              <h2 className="font-display text-4xl font-light text-foreground mb-8">Nous trouver</h2>
              <div className="space-y-6 mb-10">
                {[
                  { icon: Phone, label: "Téléphone", value: "07 82 38 66 21", href: "tel:+33782386621" },
                  { icon: Mail, label: "Email", value: "eric.gata@gmail.com", href: "mailto:eric.gata@gmail.com" },
                  { icon: MapPin, label: "Adresse", value: "9 galerie marchande, 33370 Tresses\n(proche Bordeaux)", href: null },
                  { icon: Clock, label: "Horaires", value: "Lun–Ven : 9h–19h · Sam : 9h–13h", href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-secondary flex items-center justify-center">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-body text-xs text-muted-foreground mb-1">{label}</div>
                      {href ? (
                        <a href={href} className="font-body text-sm text-foreground hover:text-primary transition-colors">
                          {value}
                        </a>
                      ) : (
                        <div className="font-body text-sm text-foreground whitespace-pre-line">{value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-section rounded-2xl p-6 border border-border">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Première séance découverte
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  La première consultation est un entretien sans engagement pour comprendre vos besoins et vous présenter la méthode NeurOptimal®. Durée : environ 1h.
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="font-display text-4xl font-light text-foreground mb-8">
                Envoyer un message
              </h2>
              {sent ? (
                <div className="bg-secondary rounded-2xl p-10 text-center">
                  <div className="font-display text-3xl font-semibold text-primary mb-3">Merci !</div>
                  <p className="font-body text-sm text-muted-foreground">
                    Votre message a bien été envoyé. Nous vous répondrons dans les 24h.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { name: "name", label: "Prénom & Nom", type: "text", placeholder: "Marie Dupont" },
                    { name: "email", label: "Email", type: "email", placeholder: "marie@exemple.fr" },
                    { name: "phone", label: "Téléphone (optionnel)", type: "tel", placeholder: "06 12 34 56 78" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="font-body text-xs text-muted-foreground mb-2 block tracking-wide">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formData[field.name as keyof typeof formData] as string}
                        onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="font-body text-xs text-muted-foreground mb-2 block tracking-wide">Votre message</label>
                    <textarea
                      rows={4}
                      placeholder="Décrivez votre situation ou posez vos questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                    />
                  </div>

                  {/* RGPD */}
                  <div className="flex items-start gap-3 bg-muted rounded-xl p-4">
                    <input
                      type="checkbox"
                      id="rgpd"
                      required
                      checked={formData.rgpd}
                      onChange={(e) => setFormData({ ...formData, rgpd: e.target.checked })}
                      className="mt-0.5 flex-shrink-0 w-4 h-4 accent-primary cursor-pointer"
                    />
                    <label htmlFor="rgpd" className="font-body text-xs text-muted-foreground leading-relaxed cursor-pointer">
                      J'accepte que mes informations soient utilisées pour me recontacter. Aucune publicité.{" "}
                      <Link to="/politique-confidentialite" className="text-primary hover:underline">
                        Voir la politique de confidentialité
                      </Link>.{" "}
                      <span className="text-destructive">*</span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-primary text-primary-foreground font-body text-sm tracking-wide hover:bg-accent transition-colors duration-300 disabled:opacity-50"
                    disabled={!formData.rgpd}
                  >
                    Envoyer le message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
