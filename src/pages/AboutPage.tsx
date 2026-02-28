import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Award, Heart, Users } from "lucide-react";
import ericPhoto from "@/assets/eric-gata.jpg";
import sylviaPhoto from "@/assets/sylvia-rui.jpg";

export default function AboutPage() {
  useEffect(() => {
    const PAGE_URL = "https://www.neurofeedback-stress.fr/a-propos";
    const TITLE = "À propos — Cabinet Neurofeedback-Stress à Tresses, Bordeaux | NeurOptimal®";
    const DESC = "Rencontrez Eric GATA et Sylvia RUI, praticiens certifiés NeurOptimal® à Tresses (Gironde), près de Bordeaux. Neurofeedback dynamique pour le stress, l'anxiété, le sommeil et la concentration.";

    document.title = TITLE;

    const setMeta = (sel: string, attr: string, val: string) => {
      let el = document.querySelector<HTMLMetaElement>(sel);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr.split("=")[0], attr.split("=")[1] ?? attr); document.head.appendChild(el); }
      el.content = val;
    };

    // Standard
    setMeta('meta[name="description"]', 'name=description', DESC);
    setMeta('meta[name="keywords"]', 'name=keywords', "neurofeedback Tresses, neurofeedback Bordeaux, NeurOptimal Gironde, Eric GATA praticien, Sylvia RUI orthophoniste neurofeedback, cabinet bien-être Tresses 33370");

    // Open Graph
    setMeta('meta[property="og:title"]', 'property=og:title', TITLE);
    setMeta('meta[property="og:description"]', 'property=og:description', DESC);
    setMeta('meta[property="og:url"]', 'property=og:url', PAGE_URL);
    setMeta('meta[property="og:type"]', 'property=og:type', "website");
    setMeta('meta[property="og:locale"]', 'property=og:locale', "fr_FR");
    setMeta('meta[property="og:site_name"]', 'property=og:site_name', "Neurofeedback-Stress — Cabinet NeurOptimal® Tresses");

    // Twitter Card
    setMeta('meta[name="twitter:card"]', 'name=twitter:card', "summary");
    setMeta('meta[name="twitter:title"]', 'name=twitter:title', TITLE);
    setMeta('meta[name="twitter:description"]', 'name=twitter:description', DESC);

    // Canonical
    let canonicalTag = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalTag) { canonicalTag = document.createElement("link"); canonicalTag.rel = "canonical"; document.head.appendChild(canonicalTag); }
    canonicalTag.href = PAGE_URL;

    // JSON-LD — Person schema for both practitioners
    const jsonLd = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": "https://www.neurofeedback-stress.fr/#eric-gata",
          "name": "Eric GATA",
          "jobTitle": "Praticien en neurofeedback dynamique NeurOptimal®",
          "description": "Praticien certifié NeurOptimal® depuis 2015, ancien collaborateur en laboratoire pharmaceutique reconverti dans l'accompagnement bien-être. Accompagne le stress, l'anxiété, les troubles du sommeil et la charge mentale.",
          "telephone": "+33782386621",
          "email": "eric.gata@gmail.com",
          "worksFor": {
            "@type": "LocalBusiness",
            "name": "Neurofeedback-Stress",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "9 galerie marchande",
              "addressLocality": "Tresses",
              "postalCode": "33370",
              "addressCountry": "FR"
            }
          },
          "url": "https://www.neurofeedback-stress.fr/a-propos"
        },
        {
          "@type": "Person",
          "@id": "https://www.neurofeedback-stress.fr/#sylvia-rui",
          "name": "Sylvia RUI",
          "jobTitle": "Praticienne en neurofeedback dynamique NeurOptimal® et orthophoniste",
          "description": "Orthophoniste et praticienne certifiée NeurOptimal® depuis 2020. Accompagne la concentration, les fonctions cognitives, la gestion de l'anxiété et le bien-être au quotidien.",
          "telephone": "+33783358869",
          "email": "sylvia.rui33@gmail.com",
          "worksFor": {
            "@type": "LocalBusiness",
            "name": "Neurofeedback-Stress",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "9 galerie marchande",
              "addressLocality": "Tresses",
              "postalCode": "33370",
              "addressCountry": "FR"
            }
          },
          "url": "https://www.neurofeedback-stress.fr/a-propos"
        }
      ]
    };

    let scriptTag = document.querySelector<HTMLScriptElement>('script[data-page="about"]');
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.type = "application/ld+json";
      scriptTag.setAttribute("data-page", "about");
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(jsonLd);

    return () => {
      document.title = "Neurofeedback Dynamique NeurOptimal® – Bien-être & Performance";
      document.querySelector('script[data-page="about"]')?.remove();
    };
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
              {/* Eric GATA */}
              <div className="bg-card rounded-3xl overflow-hidden shadow-card border border-border">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={ericPhoto}
                    alt="Eric GATA, praticien certifié NeurOptimal® en neurofeedback dynamique à Tresses près de Bordeaux, Gironde"
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

              {/* Sylvia RUI */}
              <div className="bg-card rounded-3xl overflow-hidden shadow-card border border-border">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={sylviaPhoto}
                    alt="Sylvia RUI, praticienne en neurofeedback dynamique NeurOptimal® et orthophoniste, cabinet de Tresses près de Bordeaux, Gironde"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="font-display text-2xl font-light text-foreground">Sylvia RUI</h3>
                    <p className="font-body text-xs tracking-widest uppercase text-accent mt-1">Praticienne en neurofeedback depuis 2020 · Orthophoniste</p>
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3">
                    Orthophoniste depuis plusieurs années, je me suis lancée dans l'aventure du neurofeedback en 2020. J'ai tout de suite été touchée par le potentiel de cette approche : une méthode d'entraînement du cerveau, douce et progressive, qui peut soutenir la concentration, les fonctions cognitives, la gestion de l'anxiété et, plus largement, le bien-être au quotidien.
                  </p>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    Le neurofeedback m'a paru être un complément naturel à ma pratique d'orthophoniste : il s'intègre dans une vision globale de la personne, en respectant son rythme et ses objectifs. Mon intention est de proposer un accompagnement sérieux, humain et personnalisé, avec un cadre clair et un suivi régulier.
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
