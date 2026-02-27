const steps = [
  {
    number: "01",
    title: "Évaluation initiale",
    description:
      "Un entretien personnalisé pour comprendre vos besoins, vos objectifs et votre situation. Chaque parcours est unique.",
  },
  {
    number: "02",
    title: "La séance de neurofeedback",
    description:
      "Confortablement installé(e), des capteurs lisent l'activité de votre cerveau en temps réel. Vous regardez un film, écoutez de la musique — votre cerveau reçoit discrètement des informations pour s'autoréguler.",
  },
  {
    number: "03",
    title: "Transformation progressive",
    description:
      "Comme un entraînement sportif, les effets s'accumulent. Dès les premières séances : détachement, apaisement, sommeil amélioré. Au fil des séances, votre cerveau devient plus efficient.",
  },
];

export default function Process() {
  return (
    <section id="processus" className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4 inline-block">
            La méthode NeurOptimal®
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-light text-foreground">
            Comment ça
            <br />
            <em>fonctionne ?</em>
          </h2>
          <div className="w-16 h-px bg-accent mx-auto mt-8" />
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row gap-8 md:gap-16 items-start mb-16 last:mb-0"
            >
              <div className="flex-shrink-0">
                <span className="font-display text-8xl font-light text-primary/15 select-none leading-none">
                  {step.number}
                </span>
              </div>
              <div className="flex-1 pt-3 border-t border-border">
                <h3 className="font-display text-3xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
