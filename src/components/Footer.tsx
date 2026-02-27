import { Link } from "react-router-dom";
import LocalSEO from "@/components/LocalSEO";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground">
      <div className="container mx-auto px-6 pt-12 pb-6">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-display text-xl font-semibold text-primary-foreground mb-1">
              Neurofeedback-stress
            </div>
            <div className="font-body text-xs text-primary-foreground/40 tracking-widest uppercase mb-4">
              Centre NeurOptimal® · Tresses, Gironde
            </div>
            <div className="space-y-2">
              <a href="tel:+33782386621" className="flex items-center gap-2 font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Phone size={14} /> 07 82 38 66 21
              </a>
              <a href="mailto:eric.gata@gmail.com" className="flex items-center gap-2 font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Mail size={14} /> eric.gata@gmail.com
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-body text-xs text-primary-foreground/40 tracking-widest uppercase mb-4">Navigation</div>
            <nav className="space-y-2">
              {[
                { label: "Accueil", to: "/" },
                { label: "Le Neurofeedback", to: "/#neurofeedback" },
                { label: "Tarifs", to: "/tarifs" },
                { label: "Blog", to: "/blog" },
                { label: "À propos", to: "/a-propos" },
                { label: "Contact", to: "/contact" },
              ].map((item) => (
                <Link key={item.to} to={item.to} className="block font-body text-xs text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Légal */}
          <div>
            <div className="font-body text-xs text-primary-foreground/40 tracking-widest uppercase mb-4">Informations</div>
            <nav className="space-y-2">
              {[
                { label: "Zones desservies", to: "/zones" },
                { label: "Mentions légales", to: "/mentions-legales" },
                { label: "CGV", to: "/cgv" },
                { label: "Politique de confidentialité", to: "/politique-confidentialite" },
              ].map((item) => (
                <Link key={item.to} to={item.to} className="block font-body text-xs text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="font-body text-xs text-primary-foreground/30">
            © 2025 Neurofeedback-stress · SIREN 813 904 729
          </div>
          <div className="font-body text-xs text-primary-foreground/30">
            9 galerie marchande, 33370 Tresses
          </div>
        </div>
      </div>
      <LocalSEO />
    </footer>
  );
}
