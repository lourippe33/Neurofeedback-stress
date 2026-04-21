import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-display text-2xl font-semibold text-foreground mb-4">{title}</h2>
      <div className="font-body text-sm text-muted-foreground leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section id="main-content" className="bg-gradient-hero pt-36 pb-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="font-display text-5xl font-light text-primary-foreground">Politique de confidentialité</h1>
        </div>
      </section>
      <section className="py-16 bg-background flex-1">
        <div className="container mx-auto px-6 max-w-3xl">

          <PolicySection title="1. Responsable du traitement">
            <p>Eric GATA, 9 galerie marchande, 33370 Tresses.</p>
            <p>Contact : <a href="mailto:eric.gata@gmail.com" className="text-primary hover:underline">eric.gata@gmail.com</a></p>
          </PolicySection>

          <PolicySection title="2. Données collectées et finalités">
            <ul className="list-disc ml-5 space-y-2">
              <li><strong className="text-foreground">Formulaire de contact</strong> : Nom, email, téléphone. Utilisés uniquement pour répondre à vos demandes.</li>
              <li><strong className="text-foreground">Prise de rendez-vous</strong> : Historique des séances, objectifs de bien-être. Ces données sont nécessaires au suivi personnalisé.</li>
              <li><strong className="text-foreground">Cookies</strong> : Analyse d'audience et fonctionnement du site.</li>
            </ul>
          </PolicySection>

          <PolicySection title="3. Base légale">
            <p>Le traitement de vos données repose sur votre <strong className="text-foreground">consentement</strong> (formulaire) et sur l'<strong className="text-foreground">exécution du contrat</strong> de prestation de service (suivi des séances).</p>
          </PolicySection>

          <PolicySection title="4. Données de bien-être et confidentialité">
            <p>Bien que le Neurofeedback ne soit pas médical, les informations partagées sur votre état général (sommeil, stress) sont considérées comme sensibles. Elles sont traitées avec la plus stricte confidentialité et ne sont <strong className="text-foreground">jamais cédées à des tiers</strong>.</p>
          </PolicySection>

          <PolicySection title="5. Durées de conservation">
            <ul className="list-disc ml-5 space-y-1">
              <li><strong className="text-foreground">Données de contact</strong> : 3 ans après le dernier échange.</li>
              <li><strong className="text-foreground">Données de suivi client</strong> : 5 ans après la fin de l'accompagnement.</li>
              <li><strong className="text-foreground">Cookies</strong> : 13 mois maximum.</li>
            </ul>
          </PolicySection>

          <PolicySection title="6. Vos droits">
            <p>Conformément au RGPD, vous disposez des droits d'accès, de rectification, de suppression et de portabilité de vos données. Vous pouvez retirer votre consentement à tout moment en écrivant à :</p>
            <p><a href="mailto:eric.gata@gmail.com" className="text-primary hover:underline">eric.gata@gmail.com</a></p>
            <p>Vous pouvez également introduire une réclamation auprès de la CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a></p>
          </PolicySection>

          <PolicySection title="7. Sécurité">
            <p>Le site dispose d'un certificat SSL (HTTPS) et les accès aux données clients sont sécurisés par mot de passe complexe.</p>
          </PolicySection>

          <PolicySection title="8. Contenu embarqué depuis d'autres sites">
            <p>Les articles de ce site peuvent inclure des contenus intégrés (images, vidéos…). Ces contenus se comportent comme si le visiteur se rendait directement sur l'autre site. Ces sites peuvent collecter des données, utiliser des cookies ou embarquer des outils de suivi.</p>
          </PolicySection>

        </div>
      </section>
      <Footer />
    </div>
  );
}
