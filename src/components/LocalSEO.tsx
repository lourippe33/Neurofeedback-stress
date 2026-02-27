const cities = [
  "Bordeaux", "Tresses", "Cenon", "Lormont", "Floirac", "Bouliac", "Bègles", "Talence",
  "Pessac", "Mérignac", "Eysines", "Bruges", "Le Bouscat", "Gradignan", "Villenave-d'Ornon",
  "Saint-Médard-en-Jalles", "Blanquefort", "Le Haillan", "Saint-Aubin-de-Médoc",
  "Carbon-Blanc", "Artigues-près-Bordeaux", "Yvrac", "Bassens", "Sainte-Eulalie",
  "Ambarès-et-Lagrave", "Saint-Loubès", "Saint-Sulpice-et-Cameyrac", "Cadaujac",
  "Cestas", "Canéjan", "Léognan", "Martillac", "La Brède", "Fargues-Saint-Hilaire",
  "Pompignac", "Camblanes-et-Meynac", "Carignan-de-Bordeaux", "Latresne",
];

export { cities };

export default function LocalSEO() {
  return (
    <div className="py-6 border-t border-border/30">
      <div className="container mx-auto px-6">
        <p className="font-body text-xs text-primary-foreground/30 text-center mb-3">
          Cabinet à Tresses — accompagnement des personnes de Bordeaux Métropole et des communes voisines.
        </p>
        <p className="font-body text-[10px] text-primary-foreground/20 text-center leading-relaxed max-w-4xl mx-auto">
          Neurofeedback Tresses · Neurofeedback Bordeaux · Neurofeedback Gironde — Séances disponibles pour :{" "}
          {cities.join(" · ")}
        </p>
      </div>
    </div>
  );
}
