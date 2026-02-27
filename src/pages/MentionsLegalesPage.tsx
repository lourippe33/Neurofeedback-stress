import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-display text-2xl font-semibold text-foreground mb-4">{title}</h2>
      <div className="font-body text-sm text-muted-foreground leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="bg-gradient-hero pt-36 pb-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="font-display text-5xl font-light text-primary-foreground">Mentions légales</h1>
        </div>
      </section>
      <section className="py-16 bg-background flex-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-10">
            Conformément aux dispositions de l'article 6 de la Loi n°2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN), il est précisé l'identité des intervenants du site :
          </p>

          <LegalSection title="1 – Identité de l'éditeur">
            <ul className="list-disc ml-5 space-y-1">
              <li><strong className="text-foreground">Propriétaire</strong> : Eric GATA – Entreprise Individuelle (EI)</li>
              <li><strong className="text-foreground">Nom commercial</strong> : Neurofeedback-Stress</li>
              <li><strong className="text-foreground">Adresse</strong> : 9 galerie marchande, 33370 Tresses</li>
              <li><strong className="text-foreground">SIREN</strong> : 813 904 729</li>
              <li><strong className="text-foreground">RCS</strong> : Inscrit au Registre du Commerce et des Sociétés de Bordeaux</li>
              <li><strong className="text-foreground">Contact</strong> : <a href="mailto:eric.gata@gmail.com" className="text-primary hover:underline">eric.gata@gmail.com</a> | <a href="tel:+33782386621" className="text-primary hover:underline">07 82 38 66 21</a></li>
              <li><strong className="text-foreground">Directeur de la publication</strong> : Eric GATA</li>
            </ul>
          </LegalSection>

          <LegalSection title="2 – Hébergeur">
            <p>OVH SAS – 2 rue Kellermann, 59100 Roubaix (Tél : 1007)</p>
          </LegalSection>

          <LegalSection title="3 – Délégué à la Protection des Données (DPO)">
            <p>Eric GATA – <a href="mailto:eric.gata@gmail.com" className="text-primary hover:underline">eric.gata@gmail.com</a></p>
          </LegalSection>

          <LegalSection title="4 – Propriété intellectuelle et contrefaçons">
            <p>Eric GATA est propriétaire des droits de propriété intellectuelle et détient les droits d'usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logos, vidéos, architecture, icônes et sons.</p>
            <p>Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Eric GATA.</p>
          </LegalSection>

          <LegalSection title="5 – Limitations de responsabilité">
            <p>Eric GATA ne pourra être tenu pour responsable des dommages directs ou indirects causés au matériel de l'utilisateur lors de l'accès au site.</p>
            <p>Eric GATA décline toute responsabilité quant à l'utilisation qui pourrait être faite des informations et des contenus présents sur le site.</p>
          </LegalSection>

          <LegalSection title="6 – Liens hypertextes et cookies">
            <p>Le site peut contenir des liens vers d'autres sites. Eric GATA décline toute responsabilité concernant le contenu de ces sites externes.</p>
            <p>Le site peut utiliser des cookies techniques nécessaires à son bon fonctionnement. Les cookies sont conservés pour une durée maximale de 13 mois.</p>
          </LegalSection>

          <LegalSection title="7 – Droit applicable">
            <p>Tout litige en relation avec l'utilisation du site est soumis au droit français. Attribution exclusive de juridiction aux tribunaux compétents de Bordeaux.</p>
          </LegalSection>
        </div>
      </section>
      <Footer />
    </div>
  );
}
