import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function CGVSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-display text-2xl font-semibold text-foreground mb-4">{title}</h2>
      <div className="font-body text-sm text-muted-foreground leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

export default function CGVPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section id="main-content" className="bg-gradient-hero pt-36 pb-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="font-display text-5xl font-light text-primary-foreground">Conditions Générales de Vente</h1>
        </div>
      </section>
      <section className="py-16 bg-background flex-1">
        <div className="container mx-auto px-6 max-w-3xl">

          <CGVSection title="Article 1 – Objet">
            <p>Les présentes CGV définissent les conditions de vente des prestations de Neurofeedback dynamique proposées par Eric GATA. Toute prise de rendez-vous implique l'acceptation sans réserve des présentes conditions.</p>
          </CGVSection>

          <CGVSection title="Article 2 – Avertissement légal">
            <p className="p-4 bg-muted rounded-xl border-l-4 border-primary">
              Le Neurofeedback dynamique <strong className="text-foreground">n'est pas une pratique médicale</strong>. Eric GATA n'est ni médecin, ni psychiatre. Les séances visent exclusivement le bien-être et l'optimisation des capacités personnelles. Elles ne remplacent en aucun cas un suivi médical ou psychologique.
            </p>
          </CGVSection>

          <CGVSection title="Article 3 – Tarifs et Paiement">
            <p>Les tarifs sont indiqués en Euros nets (TVA non applicable, art. 293 B du CGI) :</p>
            <ul className="list-disc ml-5 space-y-1">
              <li><strong className="text-foreground">Séance à l'unité</strong> : 40 €</li>
              <li><strong className="text-foreground">Forfait 10 séances</strong> : 320 € (32 €/séance)</li>
            </ul>
            <p>Le paiement s'effectue au comptant après chaque séance par chèque ou espèces. Pour les forfaits, le paiement s'effectue lors de la première séance (facilités de paiement possibles sur demande).</p>
          </CGVSection>

          <CGVSection title="Article 4 – Droit de rétractation">
            <p>Conformément à l'article L221-18 du Code de la consommation, pour toute réservation effectuée à distance, le client dispose d'un délai de <strong className="text-foreground">14 jours pour se rétracter</strong>.</p>
            <p>Toutefois, si la prestation est exécutée avant la fin de ce délai avec l'accord du client, le droit de rétractation ne peut plus être exercé.</p>
          </CGVSection>

          <CGVSection title="Article 5 – Politique d'annulation">
            <p>Par respect pour le praticien et les autres clients, toute annulation doit intervenir <strong className="text-foreground">au moins 24 heures avant le rendez-vous</strong>.</p>
            <p>Dans le cas contraire, la séance sera facturée ou décomptée du forfait.</p>
          </CGVSection>

          <CGVSection title="Article 6 – Responsabilité">
            <p>Eric GATA met en œuvre tous les moyens nécessaires pour assurer une prestation de qualité. Toutefois, il ne peut être tenu à une obligation de résultat, l'efficacité de la méthode dépendant de la réceptivité propre à chaque individu.</p>
          </CGVSection>

          <CGVSection title="Article 7 – Protection des données">
            <p>Les données collectées lors des séances sont soumises à la <a href="/politique-confidentialite" className="text-primary hover:underline">Politique de Confidentialité</a> du site.</p>
          </CGVSection>

          <CGVSection title="Article 8 – Médiation">
            <p>En cas de litige, et après tentative de résolution amiable écrite, le client peut saisir gratuitement le médiateur de la consommation dont relève Eric GATA.</p>
            <p>Coordonnées du médiateur : à préciser selon l'organisme de médiation choisi (ex : CNPM Médiation Consommation — <a href="https://www.cnpm-mediation-consommation.eu" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cnpm-mediation-consommation.eu</a>).</p>
            <p className="text-xs italic">Note : En tant que praticien bien-être, vous avez l'obligation légale d'indiquer les coordonnées de votre médiateur à la consommation. Veuillez compléter cette information avec votre médiateur référencé.</p>
          </CGVSection>

        </div>
      </section>
      <Footer />
    </div>
  );
}
