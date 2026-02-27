import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { articles } from "@/data/articles";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const latestArticles = articles.slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Benefits />
      <Process />

      {/* Blog preview */}
      <section className="py-24 bg-gradient-section">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-3 inline-block">
                Ressources
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
                Derniers articles
              </h2>
            </div>
            <Link
              to="/blog"
              className="hidden md:flex items-center gap-2 font-body text-sm text-primary hover:opacity-70 transition-opacity"
            >
              Voir tout <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {latestArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft border border-border hover:shadow-card hover:-translate-y-1 transition-all duration-400"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <span className="font-body text-xs px-3 py-1 rounded-full bg-secondary text-primary inline-block mb-3">
                    {article.category}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors leading-snug mb-2">
                    {article.title}
                  </h3>
                  <p className="font-body text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center md:hidden">
            <Link to="/blog" className="font-body text-sm text-primary">Voir tous les articles →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-cta">
        <div className="container mx-auto px-6 text-center">
          <span className="font-body text-xs tracking-[0.3em] uppercase text-primary-foreground/60 mb-4 inline-block">
            Commencez votre transformation
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-light text-primary-foreground mb-6">
            Réservez votre
            <br />
            <em>première séance</em>
          </h2>
          <p className="font-body text-base text-primary-foreground/70 max-w-xl mx-auto mb-10">
            Chaque parcours commence par un premier pas. Contactez-nous pour une consultation initiale — sans engagement.
          </p>
          <Link
            to="/contact"
            className="inline-block font-body text-sm tracking-wide px-10 py-4 rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all duration-300 shadow-lg"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
