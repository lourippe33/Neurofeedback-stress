import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articles } from "@/data/articles";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const categoryColors: Record<string, string> = {
  Sommeil: "bg-secondary text-primary",
  Stress: "bg-secondary text-primary",
  Anxiété: "bg-secondary text-primary",
  "Bien-être": "bg-secondary text-primary",
  "Burn-out": "bg-secondary text-primary",
};

export default function BlogPage() {
  const [featured, ...rest] = articles;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-hero pt-36 pb-24 text-center">
        <div className="container mx-auto px-6">
          <span className="font-body text-xs tracking-[0.3em] uppercase text-primary-foreground/60 mb-4 inline-block">
            Ressources & conseils
          </span>
          <h1 className="font-display text-6xl md:text-7xl font-light text-primary-foreground mb-6">
            Blog
          </h1>
          <p className="font-body text-lg text-primary-foreground/70 max-w-xl mx-auto">
            Articles, conseils et témoignages sur le neurofeedback et le bien-être mental.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background flex-1">
        <div className="container mx-auto px-6 max-w-6xl">

          {/* Featured article */}
          <Link to={`/blog/${featured.slug}`} className="group block mb-16">
            <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-card border border-border hover:shadow-[0_16px_60px_-10px_hsl(185_60%_22%/0.2)] transition-all duration-500">
              <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
                <img
                  src={featured.imageUrl}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="bg-card p-10 flex flex-col justify-center">
                <span className="font-body text-xs tracking-[0.25em] uppercase text-accent mb-4 inline-block">
                  Article à la une
                </span>
                <span className="inline-flex items-center font-body text-xs px-3 py-1 rounded-full bg-secondary text-primary w-fit mb-4">
                  {featured.category}
                </span>
                <h2 className="font-display text-3xl font-semibold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                  {featured.title}
                </h2>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-2 font-body text-sm text-primary">
                  Lire l'article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>

          {/* Articles grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article) => (
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
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-body text-xs px-3 py-1 rounded-full bg-secondary text-primary">
                      {article.category}
                    </span>
                    <span className="font-body text-xs text-muted-foreground">{article.date}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-1 font-body text-xs text-primary">
                    Lire <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
