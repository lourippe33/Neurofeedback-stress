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
      <section className="bg-gradient-hero pt-36 pb-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="font-display text-5xl font-light text-primary-foreground">Politique de confidentialité</h1>
        </div>
      </section>
      <section className="py-16 bg-background flex-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <PolicySection title="Qui sommes-nous ?">
            <p>Le site <strong className="text-foreground">neurofeedback-stress.fr</strong> est édité par Eric GATA, cabinet Neurofeedback-Stress, 9 galerie marchande, 33370 Tresses.</p>
            <p>Contact DPO : <a href="mailto:eric.gata@gmail.com" className="text-primary hover:underline">eric.gata@gmail.com</a></p>
          </PolicySection>

          <PolicySection title="Données collectées">
            <p>Lorsque vous utilisez le formulaire de contact, nous collectons : votre nom, votre adresse email, votre numéro de téléphone (optionnel) et le contenu de votre message.</p>
            <p>Ces données sont utilisées <strong className="text-foreground">uniquement pour vous recontacter</strong> suite à votre demande. Elles ne sont jamais transmises à des tiers ni utilisées à des fins publicitaires.</p>
          </PolicySection>

          <PolicySection title="Cookies">
            <p>Le site peut utiliser des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire ou de traçage n'est utilisé sans votre consentement explicite.</p>
            <p>Si vous déposez un commentaire sur notre site, il vous sera proposé d'enregistrer votre nom, adresse e-mail dans des cookies pour votre confort. Ces cookies expirent au bout d'un an.</p>
            <p>Les cookies sont conservés pour une durée maximale de 13 mois.</p>
          </PolicySection>

          <PolicySection title="Contenu embarqué depuis d'autres sites">
            <p>Les articles de ce site peuvent inclure des contenus intégrés (images, vidéos…). Ces contenus se comportent comme si le visiteur se rendait directement sur l'autre site. Ces sites peuvent collecter des données, utiliser des cookies ou embarquer des outils de suivi.</p>
          </PolicySection>

          <PolicySection title="Durées de stockage de vos données">
            <p>Les messages reçus via le formulaire de contact sont conservés le temps nécessaire à leur traitement, et au maximum 3 ans.</p>
            <p>Vous pouvez à tout moment demander la suppression de vos données en contactant : <a href="mailto:eric.gata@gmail.com" className="text-primary hover:underline">eric.gata@gmail.com</a></p>
          </PolicySection>

          <PolicySection title="Vos droits">
            <p>Conformément au RGPD, vous disposez des droits d'accès, de rectification, d'effacement, de limitation, de portabilité et d'opposition sur vos données personnelles.</p>
            <p>Pour exercer ces droits ou pour toute question relative à la protection de vos données, contactez : <a href="mailto:eric.gata@gmail.com" className="text-primary hover:underline">eric.gata@gmail.com</a></p>
            <p>Vous pouvez également introduire une réclamation auprès de la CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a></p>
          </PolicySection>

          <PolicySection title="Où vos données sont-elles envoyées ?">
            <p>Les données transmises via le formulaire de contact sont destinées exclusivement à Eric GATA, responsable du cabinet Neurofeedback-Stress. Elles ne sont pas transmises à des sous-traitants ou des partenaires commerciaux.</p>
          </PolicySection>
        </div>
      </section>
      <Footer />
    </div>
  );
}
