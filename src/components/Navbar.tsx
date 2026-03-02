import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Accueil", href: "/", isRoute: true },
  { label: "Le Neurofeedback", href: "/#neurofeedback", isRoute: false },
  { label: "Tarifs", href: "/tarifs", isRoute: true },
  { label: "Blog", href: "/blog", isRoute: true },
  { label: "À propos", href: "/a-propos", isRoute: true },
  { label: "Contact", href: "/contact", isRoute: true },
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
        <Link to="/" className="flex items-center gap-3 leading-none">
          <img src={logo} alt="Logo Neurofeedback Stress" className="h-14 w-14 object-contain drop-shadow-md" />
          <div className="flex flex-col">
            <span className={`font-display text-xl font-semibold tracking-wide transition-colors duration-500 ${scrolled ? "text-primary" : "text-primary-foreground"}`}>
              Neurofeedback
            </span>
            <span className={`font-body text-xs tracking-[0.2em] uppercase transition-colors duration-500 ${textColorMuted}`}>
              Tresses · NeurOptimal®
            </span>
          </div>
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
        </div>
      )}
    </header>
  );
}
