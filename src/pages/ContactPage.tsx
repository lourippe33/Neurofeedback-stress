import { useEffect } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const practitioners = [
  {
    name: "Eric GATA",
    initials: "EG",
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
    initials: "SR",
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
            Une question, une envie de commencer ? Contactez directement l'un de nos praticiens.
          </p>
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
                    {p.initials}
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
                      <span className="text-foreground font-medium">{s.hours}</span>
                    </div>
                  ))}
                </div>

                {/* Contact actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={p.tel}
                    className="flex-1 inline-flex items-center justify-center gap-2 font-body text-sm tracking-wide px-5 py-3 rounded-full bg-primary text-primary-foreground hover:bg-accent transition-colors duration-300"
                  >
                    <Phone size={14} /> {p.phone}
                  </a>
                  <a
                    href={p.mailto}
                    className="flex-1 inline-flex items-center justify-center gap-2 font-body text-sm tracking-wide px-5 py-3 rounded-full border border-border text-foreground hover:bg-secondary transition-colors duration-300"
                  >
                    <Mail size={14} /> Email
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map + Info */}
      <section className="py-24 bg-background flex-1">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">

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

              <div className="rounded-2xl overflow-hidden border border-border mb-8 shadow-sm">
                <iframe
                  title="Cabinet Neurofeedback-stress Tresses"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2832.3!2d-0.4687!3d44.8230!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527e0000000001%3A0x1!2s9+Galerie+Marchande%2C+33370+Tresses!5e0!3m2!1sfr!2sfr!4v1700000000000"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Première séance + réassurance */}
            <div className="space-y-6">
              <h2 className="font-display text-4xl font-light text-foreground">Première séance</h2>
              <div className="bg-gradient-section rounded-2xl p-7 border border-border">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Séance découverte sans engagement
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
                  La première consultation est un entretien pour comprendre vos besoins et vous présenter la méthode NeurOptimal®. Durée : environ 1h.
                </p>
                <div className="space-y-3">
                  {[
                    "Aucun engagement après la première séance",
                    "Résultats souvent ressentis dès les premières séances",
                    "Approche 100% naturelle, sans médicaments",
                    "Réponse sous 24h à toute demande",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 font-body text-sm text-muted-foreground">
                      <div className="flex-shrink-0 w-4 h-4 mt-0.5 rounded-full bg-primary/15 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card rounded-2xl p-7 border border-border shadow-soft">
                <p className="font-body text-sm text-muted-foreground mb-5 leading-relaxed">
                  Choisissez votre praticien et contactez-le directement par téléphone ou email :
                </p>
                <div className="space-y-4">
                  {practitioners.map((p) => (
                    <div key={p.name} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                      <span className="font-body text-sm font-medium text-foreground">{p.name}</span>
                      <div className="flex gap-2">
                        <a href={p.tel} className="w-9 h-9 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors" title={`Appeler ${p.name}`}>
                          <Phone size={14} className="text-primary group-hover:text-primary-foreground" />
                        </a>
                        <a href={p.mailto} className="w-9 h-9 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors" title={`Écrire à ${p.name}`}>
                          <Mail size={14} className="text-primary" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

