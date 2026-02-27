import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Accueil", href: "/", isRoute: true },
  { label: "Le Neurofeedback", href: "/#neurofeedback", isRoute: false },
  { label: "Tarifs", href: "/tarifs", isRoute: true },
  { label: "Blog", href: "/blog", isRoute: true },
  { label: "À propos", href: "/a-propos", isRoute: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [ctaOpen, setCtaOpen] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ctaRef.current && !ctaRef.current.contains(e.target as Node)) {
        setCtaOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const textColor = scrolled ? "text-foreground" : "text-primary-foreground";
  const textColorMuted = scrolled ? "text-muted-foreground" : "text-primary-foreground/70";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-card/95 backdrop-blur-md shadow-soft border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="flex flex-col leading-none">
          <span className={`font-display text-xl font-semibold tracking-wide transition-colors duration-500 ${scrolled ? "text-primary" : "text-primary-foreground"}`}>
            Neurofeedback
          </span>
          <span className={`font-body text-xs tracking-[0.2em] uppercase transition-colors duration-500 ${textColorMuted}`}>
            Tresses · NeurOptimal®
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) =>
            item.isRoute ? (
              <Link key={item.href} to={item.href} className={`font-body text-sm tracking-wide transition-colors duration-300 hover:opacity-70 ${textColor}`}>
                {item.label}
              </Link>
            ) : (
              <a key={item.href} href={item.href} className={`font-body text-sm tracking-wide transition-colors duration-300 hover:opacity-70 ${textColor}`}>
                {item.label}
              </a>
            )
          )}

          {/* CTA dropdown */}
          <div className="relative" ref={ctaRef}>
            <button
              onClick={() => setCtaOpen(!ctaOpen)}
              className={`flex items-center gap-1 font-body text-sm px-5 py-2 rounded-full border transition-all duration-300 ${
                scrolled
                  ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  : "border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            >
              Réserver <ChevronDown size={14} className={`transition-transform ${ctaOpen ? "rotate-180" : ""}`} />
            </button>
            {ctaOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-card rounded-2xl shadow-card border border-border overflow-hidden">
                <a
                  href="tel:+33782386621"
                  className="flex items-center gap-3 px-5 py-4 font-body text-sm text-foreground hover:bg-secondary transition-colors border-b border-border"
                  onClick={() => setCtaOpen(false)}
                >
                  <Phone size={15} className="text-primary" />
                  <div>
                    <div className="font-medium">Appeler</div>
                    <div className="text-xs text-muted-foreground">07 82 38 66 21</div>
                  </div>
                </a>
                <a
                  href="mailto:eric.gata@gmail.com"
                  className="flex items-center gap-3 px-5 py-4 font-body text-sm text-foreground hover:bg-secondary transition-colors"
                  onClick={() => setCtaOpen(false)}
                >
                  <Mail size={15} className="text-primary" />
                  <div>
                    <div className="font-medium">Envoyer un email</div>
                    <div className="text-xs text-muted-foreground">eric.gata@gmail.com</div>
                  </div>
                </a>
              </div>
            )}
          </div>
        </nav>

        <button className={`md:hidden transition-colors ${textColor}`} onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card border-t border-border">
          {navItems.map((item) =>
            item.isRoute ? (
              <Link key={item.href} to={item.href} onClick={() => setOpen(false)}
                className="block px-6 py-4 font-body text-sm text-foreground border-b border-border/50 hover:bg-muted transition-colors">
                {item.label}
              </Link>
            ) : (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}
                className="block px-6 py-4 font-body text-sm text-foreground border-b border-border/50 hover:bg-muted transition-colors">
                {item.label}
              </a>
            )
          )}
          <div className="p-4 space-y-3">
            <a href="tel:+33782386621" className="flex items-center justify-center gap-2 w-full font-body text-sm px-5 py-3 rounded-full bg-primary text-primary-foreground">
              <Phone size={15} /> Appeler — 07 82 38 66 21
            </a>
            <a href="mailto:eric.gata@gmail.com" className="flex items-center justify-center gap-2 w-full font-body text-sm px-5 py-3 rounded-full border border-primary text-primary">
              <Mail size={15} /> Envoyer un email
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
