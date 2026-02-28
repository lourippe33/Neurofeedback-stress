import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NeurofeedbackSection from "@/components/NeurofeedbackSection";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { articles } from "@/data/articles";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const latestArticles = [...articles].reverse().slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <NeurofeedbackSection />

      {/* Blog preview */}
      <section className="py-24 bg-gradient-section">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-3 inline-block">Ressources</span>
              <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">Derniers articles</h2>
            </div>
            <Link to="/blog" className="hidden md:flex items-center gap-2 font-body text-sm text-primary hover:opacity-70 transition-opacity">
              Voir tout <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {latestArticles.map((article) => (
              <Link key={article.slug} to={`/blog/${article.slug}`}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft border border-border hover:shadow-card hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <span className="font-body text-xs px-3 py-1 rounded-full bg-secondary text-primary inline-block mb-3">{article.category}</span>
                  <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors leading-snug mb-2">{article.title}</h3>
                  <p className="font-body text-xs text-muted-foreground line-clamp-2 leading-relaxed">{article.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center md:hidden">
            <Link to="/blog" className="font-body text-sm text-primary">Voir tous les articles →</Link>
          </div>
        </div>
      </section>

      {/* CTA final */}
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
            Cabinet à Tresses, proche Bordeaux. Première consultation sans engagement. Réponse sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+33782386621"
              className="inline-flex items-center justify-center gap-2 font-body text-sm tracking-wide px-10 py-4 rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all duration-300 shadow-lg">
              📞 Appeler — 07 82 38 66 21
            </a>
            <a href="mailto:eric.gata@gmail.com"
              className="inline-flex items-center justify-center gap-2 font-body text-sm tracking-wide px-10 py-4 rounded-full border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300">
              ✉️ Envoyer un email
            </a>
          </div>
          <p className="font-body text-xs text-primary-foreground/40 mt-4">
            Première séance découverte · Réponse sous 24h
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
