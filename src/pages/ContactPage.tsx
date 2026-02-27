import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


import { Link } from "react-router-dom";

const practitioners = [
  {
    name: "Eric GATA",
    phone: "07 82 38 66 21",
    tel: "tel:+33782386621",
    email: "eric.gata@gmail.com",
    mailto: "mailto:eric.gata@gmail.com",
    schedule: [
      { day: "Lundi", hours: "9h30–12h30 · 15h00–17h30" },
      { day: "Mardi", hours: "9h30–12h30 · 15h00–17h30" },
      { day: "Mercredi", hours: "9h30–12h30" },
      { day: "Jeudi", hours: "9h30–12h30" },
      { day: "Vendredi", hours: "9h30–12h30 · 15h00–17h30" },
    ],
  },
  {
    name: "Sylvia RUI",
    phone: "07 83 35 88 69",
    tel: "tel:+33783358869",
    email: "sylvia.rui33@gmail.com",
    mailto: "mailto:sylvia.rui33@gmail.com",
    schedule: [
      { day: "Mercredi", hours: "13h00–18h00" },
      { day: "Jeudi", hours: "13h00–18h00" },
    ],
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "", rgpd: false });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.title = "Contact — Cabinet Neurofeedback-Stress à Tresses, Bordeaux | NeurOptimal®";
    let descTag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!descTag) { descTag = document.createElement("meta"); descTag.name = "description"; document.head.appendChild(descTag); }
    descTag.content = "Contactez le cabinet Neurofeedback-Stress à Tresses (Gironde). Réservez votre séance découverte de neurofeedback dynamique NeurOptimal®. Tél : 07 82 38 66 21. Réponse sous 24h.";
    let canonicalTag = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalTag) { canonicalTag = document.createElement("link"); canonicalTag.rel = "canonical"; document.head.appendChild(canonicalTag); }
    canonicalTag.href = "https://www.neurofeedback-stress.fr/contact";
    return () => { document.title = "Neurofeedback Dynamique NeurOptimal® – Bien-être & Performance"; };
  }, []);

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
            Une question, une envie de commencer ? Nous vous répondons rapidement.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+33782386621"
              className="inline-flex items-center justify-center gap-2 rounded-full font-body text-sm tracking-wide px-8 py-4 bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all shadow-lg"
            >
              <Phone size={16} />
              Appeler Eric — 07 82 38 66 21
            </a>
            <a
              href="tel:+33783358869"
              className="inline-flex items-center justify-center gap-2 rounded-full font-body text-sm tracking-wide px-8 py-4 border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 transition-all"
            >
              <Phone size={16} />
              Appeler Sylvia — 07 83 35 88 69
            </a>
          </div>
        </div>
      </section>

      {/* Practitioners */}
      <section className="py-16 bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-display text-3xl font-light text-foreground mb-10 text-center">
            Nos praticiens &amp; horaires
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {practitioners.map((p) => (
              <div key={p.name} className="bg-background rounded-2xl border border-border p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-display text-primary font-semibold text-sm">
                    {p.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">{p.name}</h3>
                </div>

                {/* Schedule */}
                <div className="rounded-xl overflow-hidden border border-border mb-5">
                  {p.schedule.map((s, i) => (
                    <div
                      key={s.day}
                      className={`flex justify-between px-4 py-2.5 font-body text-sm ${i % 2 === 0 ? "bg-secondary/50" : "bg-background"}`}
                    >
                      <span className="text-muted-foreground">{s.day}</span>
                      <span className="text-foreground">{s.hours}</span>
                    </div>
                  ))}
                </div>

                {/* Contact links */}
                <div className="flex flex-col gap-2">
                  <a href={p.tel} className="inline-flex items-center gap-2 font-body text-sm text-foreground hover:text-primary transition-colors">
                    <Phone size={14} className="text-primary" /> {p.phone}
                  </a>
                  <a href={p.mailto} className="inline-flex items-center gap-2 font-body text-sm text-foreground hover:text-primary transition-colors">
                    <Mail size={14} className="text-primary" /> {p.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map + Info + Form */}
      <section className="py-24 bg-background flex-1">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">

            {/* Info + Map */}
            <div>
              <h2 className="font-display text-4xl font-light text-foreground mb-8">Nous trouver</h2>
              <div className="space-y-4 mb-8">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-secondary flex items-center justify-center">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-body text-xs text-muted-foreground mb-1">Adresse</div>
                    <div className="font-body text-sm text-foreground">9 galerie marchande, 33370 Tresses<br />(proche Bordeaux)</div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-secondary flex items-center justify-center">
                    <Clock size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-body text-xs text-muted-foreground mb-1">Horaires cabinet</div>
                    <div className="font-body text-sm text-foreground">Lun–Ven : 9h30–18h · Sam : 9h30–12h30</div>
                  </div>
                </div>
              </div>

              {/* Google Maps embed */}
              <div className="rounded-2xl overflow-hidden border border-border mb-8 shadow-sm">
                <iframe
                  title="Cabinet Neurofeedback-stress Tresses"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2832.3!2d-0.4687!3d44.8230!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527e0000000001%3A0x1!2s9+Galerie+Marchande%2C+33370+Tresses!5e0!3m2!1sfr!2sfr!4v1700000000000"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
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
