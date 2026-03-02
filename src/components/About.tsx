export default function About() {
  return (
    <section id="apropos" className="py-28 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4 inline-block">
              Notre centre à Tresses
            </span>
            <h2 className="font-display text-5xl font-light text-foreground mb-8 leading-tight">
              Une approche
              <br />
              non invasive
              <br />& naturelle
            </h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
              Le centre Neurofeedback-stress utilise la méthode <strong className="text-foreground font-medium">NeurOptimal® Dynamique</strong>, reconnue internationalement pour son approche douce et efficace. Contrairement aux autres méthodes, elle ne force pas le cerveau — elle l'informe simplement.
            </p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8">
              Votre cerveau possède une capacité naturelle à s'autoréguler. Le neurofeedback l'aide à retrouver cet équilibre, sans médicaments, sans douleur, sans effets secondaires.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "+3 000", label: "séances réalisées" },
                { value: "100%", label: "naturel & non invasif" },
                { value: "NeurOptimal®", label: "technologie certifiée" },
                { value: "Personnalisé", label: "pour chaque patient" },
              ].map((stat, i) => (
                <div key={i} className="border-l-2 border-accent pl-4">
                  <div className="font-display text-2xl font-semibold text-foreground">
                    {stat.value}
                  </div>
                  <div className="font-body text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-hero overflow-hidden flex items-end p-10">
              <div className="text-primary-foreground">
                <p className="font-display text-3xl italic font-light leading-snug mb-4">
                  "Votre cerveau sait comment retrouver son équilibre — nous lui rappelons simplement comment faire."
                </p>
                <div className="w-10 h-px bg-primary-foreground/40" />
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -top-6 -right-6 bg-card rounded-2xl p-5 shadow-card">
              <div className="font-display text-3xl font-semibold text-primary">20+</div>
              <div className="font-body text-xs text-muted-foreground">ans d'expérience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
