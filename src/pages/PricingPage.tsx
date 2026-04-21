import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";

export default function PricingPage() {
  useEffect(() => {
    document.title = "Tarifs neurofeedback à Tresses, Bordeaux — Séance à 40 € | NeurOptimal®";
    let descTag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!descTag) { descTag = document.createElement("meta"); descTag.name = "description"; document.head.appendChild(descTag); }
    descTag.content = "Séance de neurofeedback dynamique NeurOptimal® à 40 € à Tresses, proche Bordeaux. Tarifs dégressifs, forfaits disponibles. Première séance découverte sans engagement.";
    let canonicalTag = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalTag) { canonicalTag = document.createElement("link"); canonicalTag.rel = "canonical"; document.head.appendChild(canonicalTag); }
    canonicalTag.href = "https://www.neurofeedback-stress.fr/tarifs";
    return () => { document.title = "Neurofeedback Dynamique NeurOptimal® – Bien-être & Performance"; };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section id="main-content" className="bg-gradient-hero pt-36 pb-24 text-center">
        <div className="container mx-auto px-6">
          <span className="font-body text-xs tracking-[0.3em] uppercase text-primary-foreground/60 mb-4 inline-block">
            Transparence tarifaire
          </span>
          <h1 className="font-display text-6xl md:text-7xl font-light text-primary-foreground mb-6">
            Tarifs
          </h1>
          <p className="font-body text-lg text-primary-foreground/70 max-w-xl mx-auto">
            Des séances accessibles, sans surprise. Paiement en plusieurs fois disponible sur demande.
          </p>
        </div>
      </section>
      <div className="flex-1 bg-background">
        <Pricing />
      </div>
      <Footer />
    </div>
  );
}
