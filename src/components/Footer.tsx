export default function Footer() {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-display text-xl font-semibold text-primary-foreground">
              Neurofeedback-stress
            </div>
            <div className="font-body text-xs text-primary-foreground/40 tracking-widest uppercase mt-1">
              Centre NeurOptimal® · Tresses
            </div>
          </div>
          <nav className="flex flex-wrap gap-6 justify-center">
            {["Accueil", "Bienfaits", "La méthode", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="font-body text-xs text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors tracking-wide"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="font-body text-xs text-primary-foreground/30">
            © 2025 Neurofeedback-stress
          </div>
        </div>
      </div>
    </footer>
  );
}
