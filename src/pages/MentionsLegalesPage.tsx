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
          <LegalSection title="1 – Édition du site">
            <p>Conformément à l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site les informations suivantes :</p>
            <ul className="list-disc ml-5 space-y-1">
              <li><strong className="text-foreground">Propriétaire du site</strong> : Eric GATA</li>
              <li>Contact : <a href="mailto:eric.gata@gmail.com" className="text-primary hover:underline">eric.gata@gmail.com</a> – <a href="tel:+33782386621" className="text-primary hover:underline">07 82 38 66 21</a></li>
              <li>Adresse : 9 galerie marchande, 33370 Tresses</li>
            </ul>
            <ul className="list-disc ml-5 space-y-1 mt-3">
              <li><strong className="text-foreground">Statut juridique</strong> : EI (Entreprise Individuelle)</li>
              <li><strong className="text-foreground">Nom commercial</strong> : Neurofeedback-Stress</li>
              <li><strong className="text-foreground">SIREN</strong> : 813 904 729</li>
              <li><strong className="text-foreground">RCS</strong> : Bordeaux</li>
              <li><strong className="text-foreground">Directeur de la publication</strong> : Eric GATA</li>
            </ul>
            <p className="mt-3"><strong className="text-foreground">Hébergeur</strong> : OVH SAS — 2 rue Kellermann, BP 80157, 59053 Roubaix Cedex 1 — Tél. : 1007</p>
            <p><strong className="text-foreground">Délégué à la protection des données (DPO)</strong> : Pour toute demande relative aux données personnelles, contactez Eric GATA à l'adresse : <a href="mailto:eric.gata@gmail.com" className="text-primary hover:underline">eric.gata@gmail.com</a>.</p>
          </LegalSection>

          <LegalSection title="2 – Propriété intellectuelle et contrefaçons">
            <p>Eric GATA est propriétaire des droits de propriété intellectuelle et détient les droits d'usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logos, vidéos, architecture, icônes et sons.</p>
            <p>Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Eric GATA.</p>
          </LegalSection>

          <LegalSection title="3 – Limitations de responsabilité">
            <p>Eric GATA ne pourra être tenu pour responsable des dommages directs ou indirects causés au matériel de l'utilisateur lors de l'accès au site.</p>
            <p>Eric GATA décline toute responsabilité quant à l'utilisation qui pourrait être faite des informations et des contenus présents sur le site.</p>
          </LegalSection>

          <LegalSection title="4 – CNIL et gestion des données personnelles">
            <p>Conformément à la loi 78-17 du 6 janvier 1978 modifiée et au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc ml-5 space-y-1">
              <li><strong className="text-foreground">Droit d'accès</strong> : Obtenir une copie des données vous concernant.</li>
              <li><strong className="text-foreground">Droit de rectification</strong> : Corriger les données inexactes ou incomplètes.</li>
              <li><strong className="text-foreground">Droit à l'effacement</strong> : Demander la suppression de vos données.</li>
              <li><strong className="text-foreground">Droit à la limitation</strong> : Restreindre temporairement l'utilisation de vos données.</li>
              <li><strong className="text-foreground">Droit à la portabilité</strong> : Recevoir vos données dans un format lisible par machine.</li>
              <li><strong className="text-foreground">Droit d'opposition</strong> : Vous opposer au traitement de vos données.</li>
            </ul>
            <p>Pour exercer ces droits : <a href="mailto:eric.gata@gmail.com" className="text-primary hover:underline">eric.gata@gmail.com</a></p>
          </LegalSection>

          <LegalSection title="5 – Liens hypertextes et cookies">
            <p>Le site peut contenir des liens vers d'autres sites. Eric GATA décline toute responsabilité concernant le contenu de ces sites externes.</p>
            <p>Le site peut utiliser des cookies pour améliorer l'expérience utilisateur. Aucun cookie non essentiel n'est installé sans votre consentement explicite. Les cookies sont conservés pour une durée maximale de 13 mois.</p>
          </LegalSection>

          <LegalSection title="6 – Droit applicable">
            <p>Tout litige en relation avec l'utilisation du site est soumis au droit français. Attribution exclusive de juridiction aux tribunaux compétents de Bordeaux.</p>
          </LegalSection>
        </div>
      </section>
      <Footer />
    </div>
  );
}
