import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cities } from "@/components/LocalSEO";
import { MapPin, Phone } from "lucide-react";
import CTAButtons from "@/components/CTAButtons";

export default function ZonesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="bg-gradient-hero pt-36 pb-24 text-center">
        <div className="container mx-auto px-6">
          <span className="font-body text-xs tracking-[0.3em] uppercase text-primary-foreground/60 mb-4 inline-block">
            Neurofeedback · Bordeaux Métropole · Gironde
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-light text-primary-foreground mb-6">
            Zones desservies
          </h1>
          <p className="font-body text-lg text-primary-foreground/70 max-w-xl mx-auto">
            Cabinet à Tresses — accompagnement des personnes de Bordeaux Métropole et des communes voisines.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background flex-1">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex gap-4 items-start bg-muted rounded-2xl p-6 border border-border mb-12">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
              <MapPin size={18} className="text-primary" />
            </div>
            <div>
              <div className="font-body text-sm font-medium text-foreground mb-1">Cabinet Neurofeedback-stress</div>
              <div className="font-body text-sm text-muted-foreground">9 galerie marchande, 33370 Tresses · À 15 min de Bordeaux centre</div>
              <a href="tel:+33782386621" className="font-body text-sm text-primary hover:underline mt-1 inline-flex items-center gap-1">
                <Phone size={13} /> 07 82 38 66 21
              </a>
            </div>
          </div>

          <h2 className="font-display text-3xl font-light text-foreground mb-6">
            Communes accompagnées
          </h2>
          <p className="font-body text-sm text-muted-foreground mb-8 leading-relaxed">
            Le centre Neurofeedback-stress à Tresses accueille des patients de <strong className="text-foreground">Bordeaux</strong>, de la <strong className="text-foreground">Gironde</strong> et de toute la Bordeaux Métropole pour des séances de neurofeedback dynamique NeurOptimal®.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-12">
            {cities.map((city) => (
              <div
                key={city}
                className="bg-card rounded-xl px-4 py-3 border border-border text-center hover:border-primary/30 hover:bg-secondary transition-all duration-200"
              >
                <span className="font-body text-xs text-foreground">{city}</span>
              </div>
            ))}
          </div>

          <div className="bg-gradient-cta rounded-3xl p-10 text-center">
            <h3 className="font-display text-3xl font-light text-primary-foreground mb-3">
              Neurofeedback proche de chez vous
            </h3>
            <p className="font-body text-sm text-primary-foreground/70 mb-6 max-w-lg mx-auto">
              Accessible depuis toute la Bordeaux Métropole, le cabinet de Tresses vous accueille dans un cadre calme et professionnel.
            </p>
            <CTAButtons variant="light" size="md" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
