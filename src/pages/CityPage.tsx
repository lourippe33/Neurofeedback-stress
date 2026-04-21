import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { MapPin, Phone, Clock, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAButtons from "@/components/CTAButtons";
import { cityPages } from "@/data/cityPages";

export default function CityPage() {
  const { citySlug } = useParams<{ citySlug: string }>();
  const city = cityPages.find((c) => c.slug === citySlug);

  useEffect(() => {
    if (!city) return;
    const SITE_URL = "https://www.neurofeedback-stress.fr";

    document.title = city.metaTitle;

    let descTag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!descTag) { descTag = document.createElement("meta"); descTag.name = "description"; document.head.appendChild(descTag); }
    descTag.content = city.metaDescription;

    let canonicalTag = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalTag) { canonicalTag = document.createElement("link"); canonicalTag.rel = "canonical"; document.head.appendChild(canonicalTag); }
    canonicalTag.href = `${SITE_URL}/${city.slug}`;

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": `Neurofeedback-Stress — Cabinet NeurOptimal® près de ${city.name}`,
      "description": city.metaDescription,
      "url": `${SITE_URL}/${city.slug}`,
      "telephone": "+33782386621",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "9 galerie marchande",
        "addressLocality": "Tresses",
        "postalCode": "33370",
        "addressCountry": "FR",
      },
      "areaServed": { "@type": "City", "name": city.name },
      "priceRange": "€€",
    };

    let scriptTag = document.querySelector<HTMLScriptElement>(`script[data-page="${city.slug}"]`);
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.type = "application/ld+json";
      scriptTag.setAttribute("data-page", city.slug);
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(jsonLd);

    return () => {
      document.title = "Neurofeedback Dynamique NeurOptimal® – Bien-être & Performance";
      document.querySelector(`script[data-page="${city.slug}"]`)?.remove();
    };
  }, [city]);

  if (!city) return <Navigate to="/zones" replace />;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section id="main-content" className="bg-gradient-hero pt-36 pb-24 text-center">
        <div className="container mx-auto px-6">
          <span className="font-body text-xs tracking-[0.3em] uppercase text-primary-foreground/60 mb-4 inline-block">
            Neurofeedback dynamique NeurOptimal® · {city.distance} de {city.name}
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-light text-primary-foreground mb-6">
            Neurofeedback<br />près de {city.name}
          </h1>
          <p className="font-body text-lg text-primary-foreground/70 max-w-xl mx-auto">
            Cabinet à Tresses, Gironde — {city.distance} depuis {city.name}
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-20 bg-background flex-1">
        <div className="container mx-auto px-6 max-w-4xl">

          {/* Intro */}
          <div className="max-w-2xl mb-16">
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
              {city.description}
            </p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {city.specificContext}
            </p>
          </div>

          {/* Infos cabinet */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
              <h2 className="font-display text-2xl font-light text-foreground mb-6">Le cabinet</h2>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-body text-sm font-medium text-foreground">9 galerie marchande, 33370 Tresses</div>
                    <div className="font-body text-xs text-muted-foreground">{city.distance} depuis {city.name} · Parking gratuit</div>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Phone size={16} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <a href="tel:+33782386621" className="font-body text-sm font-medium text-foreground hover:text-primary transition-colors">07 82 38 66 21</a>
                    <div className="font-body text-xs text-muted-foreground">Eric GATA</div>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Phone size={16} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <a href="tel:+33783358869" className="font-body text-sm font-medium text-foreground hover:text-primary transition-colors">07 83 35 88 69</a>
                    <div className="font-body text-xs text-muted-foreground">Sylvia RUI</div>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Clock size={16} className="text-primary mt-1 flex-shrink-0" />
                  <div className="font-body text-xs text-muted-foreground">Lun–Ven : 9h30–18h · Sam : 9h30–12h30</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-section rounded-2xl p-8 border border-border">
              <h2 className="font-display text-2xl font-light text-foreground mb-6">Ce que le neurofeedback traite</h2>
              <div className="space-y-3">
                {[
                  "Stress chronique & anxiété",
                  "Troubles du sommeil",
                  "Manque de concentration",
                  "Épuisement & burn-out",
                  "Chocs émotionnels",
                  "Bien-être général",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary flex items-center justify-center">
                      <Check size={11} className="text-primary" />
                    </div>
                    <span className="font-body text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pourquoi NeurOptimal */}
          <div className="mb-16">
            <h2 className="font-display text-3xl font-light text-foreground mb-6">
              Pourquoi choisir le neurofeedback NeurOptimal® ?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "100% naturel", desc: "Aucun médicament, aucune impulsion électrique. Le cerveau s'autorégule de lui-même." },
                { title: "Résultats durables", desc: "Les bénéfices s'ancrent dans le temps. Un parcours de 10 à 20 séances suffit souvent." },
                { title: "Adapté à tous", desc: "Adultes, adolescents, seniors — la méthode NeurOptimal® s'adapte à chaque cerveau." },
              ].map((item) => (
                <div key={item.title} className="bg-card rounded-2xl p-6 border border-border shadow-soft">
                  <div className="font-display text-xl font-semibold text-primary mb-3">{item.title}</div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tarif */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-soft mb-16">
            <h2 className="font-display text-2xl font-light text-foreground mb-4">Tarifs</h2>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="font-display text-5xl font-light text-foreground">40</span>
              <span className="font-display text-2xl text-foreground">€</span>
              <span className="font-body text-sm text-muted-foreground">par séance</span>
            </div>
            <p className="font-body text-sm text-muted-foreground mb-4">Forfait 10 séances : 320 € (soit 32 €/séance). Paiement en plusieurs fois possible.</p>
            <Link to="/tarifs" className="font-body text-sm text-primary hover:underline">Voir tous les tarifs →</Link>
          </div>

          {/* CTA */}
          <div className="bg-gradient-cta rounded-3xl p-10 text-center">
            <h3 className="font-display text-3xl font-light text-primary-foreground mb-3">
              Vous êtes {city.direction} ?
            </h3>
            <p className="font-body text-sm text-primary-foreground/70 mb-8 max-w-lg mx-auto">
              Prenez rendez-vous pour une séance découverte sans engagement. Réponse sous 24h.
            </p>
            <CTAButtons variant="light" size="md" />
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
