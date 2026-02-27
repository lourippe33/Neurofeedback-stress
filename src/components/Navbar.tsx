import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Accueil", href: "#accueil" },
  { label: "Bienfaits", href: "#bienfaits" },
  { label: "Comment ça marche", href: "#processus" },
  { label: "À propos", href: "#apropos" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#accueil" className="flex flex-col leading-none">
          <span
            className={`font-display text-xl font-semibold tracking-wide transition-colors duration-500 ${
              scrolled ? "text-primary" : "text-primary-foreground"
            }`}
          >
            Neurofeedback
          </span>
          <span
            className={`font-body text-xs tracking-[0.2em] uppercase transition-colors duration-500 ${
              scrolled ? "text-muted-foreground" : "text-primary-foreground/70"
            }`}
          >
            Tresses · NeurOptimal®
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`font-body text-sm tracking-wide transition-colors duration-300 hover:opacity-70 ${
                scrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`font-body text-sm px-5 py-2 rounded-full border transition-all duration-300 ${
              scrolled
                ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                : "border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground/10"
            }`}
          >
            Réserver
          </a>
        </nav>

        <button
          className={`md:hidden transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card border-t border-border">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 font-body text-sm text-foreground border-b border-border/50 hover:bg-muted transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="p-4">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block text-center font-body text-sm px-5 py-3 rounded-full bg-primary text-primary-foreground"
            >
              Réserver une séance
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
