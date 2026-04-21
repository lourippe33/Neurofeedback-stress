import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <p className="font-body text-8xl font-light text-primary mb-4">404</p>
        <h1 className="mb-4 font-display text-2xl font-light text-foreground">Page introuvable</h1>
        <p className="mb-8 font-body text-sm text-muted-foreground">Cette page n'existe pas ou a été déplacée.</p>
        <Link to="/" className="font-body text-sm text-primary underline hover:text-primary/90">
          ← Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
