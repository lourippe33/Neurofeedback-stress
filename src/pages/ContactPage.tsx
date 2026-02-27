import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
          <p className="font-body text-lg text-primary-foreground/70 max-w-xl mx-auto">
            Une question, une envie de commencer ? Nous vous répondons sous 24h.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-background flex-1">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">

            {/* Info */}
            <div>
              <h2 className="font-display text-4xl font-light text-foreground mb-8">
                Nous trouver
              </h2>
              <div className="space-y-6 mb-10">
                {[
                  { icon: MapPin, label: "Adresse", value: "Tresses, 33370, Gironde" },
                  { icon: Mail, label: "Email", value: "contact@neurofeedback-stress.fr" },
                  { icon: Clock, label: "Horaires", value: "Lun–Ven : 9h–19h · Sam : 9h–13h" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-secondary flex items-center justify-center">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-body text-xs text-muted-foreground mb-1">{label}</div>
                      <div className="font-body text-sm text-foreground">{value}</div>
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
                    Votre message a été envoyé. Nous vous répondrons dans les 24h.
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
                        value={formData[field.name as keyof typeof formData]}
                        onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="font-body text-xs text-muted-foreground mb-2 block tracking-wide">
                      Votre message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Décrivez votre situation ou posez vos questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-primary text-primary-foreground font-body text-sm tracking-wide hover:bg-accent transition-colors duration-300"
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
