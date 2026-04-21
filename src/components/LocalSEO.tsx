const cities = [
  // Bordeaux Métropole — cœur
  "Bordeaux", "Tresses", "Cenon", "Lormont", "Floirac", "Bouliac", "Bègles", "Talence",
  "Pessac", "Mérignac", "Eysines", "Bruges", "Le Bouscat", "Gradignan", "Villenave-d'Ornon",
  "Saint-Médard-en-Jalles", "Blanquefort", "Le Haillan", "Saint-Aubin-de-Médoc",
  "Carbon-Blanc", "Artigues-près-Bordeaux", "Yvrac", "Bassens", "Sainte-Eulalie",
  "Ambarès-et-Lagrave", "Saint-Loubès", "Saint-Sulpice-et-Cameyrac", "Cadaujac",
  "Cestas", "Canéjan", "Léognan", "Martillac", "La Brède", "Fargues-Saint-Hilaire",
  "Pompignac", "Camblanes-et-Meynac", "Carignan-de-Bordeaux", "Latresne",
  // Rive droite & Est Gironde — rayon 25 km
  "Saint-André-de-Cubzac", "Libourne", "Saint-Émilion", "Branne", "Créon",
  "Saint-Caprais-de-Bordeaux", "Quinsac", "Beautiran", "Podensac",
  // Sud Gironde — rayon 25 km
  "Langon", "Saint-Selve", "Villenave-d'Ornon", "Léognan",
  // Nord & Médoc — rayon 25 km
  "Pauillac", "Saint-Laurent-Médoc", "Castelnau-de-Médoc", "Lesparre-Médoc",
  "Lacanau", "Carcans",
  // Bassin d'Arcachon — rayon 25 km
  "Andernos-les-Bains", "Arcachon", "La Teste-de-Buch", "Gujan-Mestras",
  "Le Teich", "Biganos", "Audenge",
];

export { cities };

export default function LocalSEO() {
  return (
    <div aria-hidden="true" className="sr-only">
      <p>Cabinet à Tresses — accompagnement des personnes de Bordeaux Métropole et des communes voisines.</p>
      <p>Neurofeedback Tresses · Neurofeedback Bordeaux · Neurofeedback Gironde — Séances disponibles pour : {cities.join(" · ")}</p>
    </div>
  );
}
