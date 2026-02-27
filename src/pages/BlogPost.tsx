import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articles } from "@/data/articles";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) { i++; continue; }
    if (line.startsWith("### ")) {
      elements.push(<h3 key={i} className="font-display text-2xl font-semibold text-foreground mt-8 mb-3">{line.slice(4)}</h3>);
    } else if (line.startsWith("## ")) {
      elements.push(<h2 key={i} className="font-display text-3xl font-light text-foreground mt-10 mb-4">{line.slice(3)}</h2>);
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        items.push(lines[i].trim().slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="space-y-2 mb-4 ml-4">
          {items.map((item, j) => (
            <li key={j} className="font-body text-sm text-muted-foreground flex items-start gap-2">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-medium">$1</strong>') }} />
            </li>
          ))}
        </ul>
      );
      continue;
    } else {
      const html = line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-medium">$1</strong>');
      elements.push(<p key={i} className="font-body text-sm text-muted-foreground leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: html }} />);
    }
    i++;
  }
  return elements;
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);
  const currentIndex = articles.findIndex((a) => a.slug === slug);
  const prev = articles[currentIndex - 1];
  const next = articles[currentIndex + 1];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-body text-muted-foreground mb-4">Article introuvable.</p>
          <Link to="/blog" className="text-primary font-body text-sm">← Retour au blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero image */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(185_60%_10%/0.8)] via-[hsl(185_60%_10%/0.4)] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-6 pb-12">
          <Link to="/blog" className="inline-flex items-center gap-2 font-body text-xs text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors">
            <ArrowLeft size={14} /> Retour au blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-body text-xs px-3 py-1 rounded-full bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/30">
              {article.category}
            </span>
            <span className="font-body text-xs text-primary-foreground/50">{article.date}</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-light text-primary-foreground max-w-3xl leading-tight">
            {article.title}
          </h1>
        </div>
      </div>

      {/* Article content */}
      <section className="py-16 bg-background flex-1">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            {/* Excerpt */}
            <p className="font-body text-base text-muted-foreground leading-relaxed border-l-2 border-accent pl-6 mb-10 italic">
              {article.excerpt}
            </p>

            {/* Body */}
            <div>{renderContent(article.content)}</div>

            {/* CTA */}
            <div className="mt-16 bg-gradient-cta rounded-3xl p-10 text-center">
              <h3 className="font-display text-3xl font-light text-primary-foreground mb-3">
                Envie d'en savoir plus ?
              </h3>
              <p className="font-body text-sm text-primary-foreground/70 mb-6">
                Prenez rendez-vous pour une séance découverte — sans engagement.
              </p>
              <Link
                to="/contact"
                className="inline-block font-body text-sm px-8 py-3 rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-colors"
              >
                Réserver une séance
              </Link>
            </div>

            {/* Navigation prev/next */}
            {(prev || next) && (
              <div className="mt-12 grid grid-cols-2 gap-6">
                {prev ? (
                  <Link to={`/blog/${prev.slug}`} className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors">
                    <div className="flex items-center gap-2 font-body text-xs text-muted-foreground mb-2">
                      <ArrowLeft size={13} /> Article précédent
                    </div>
                    <div className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {prev.title}
                    </div>
                  </Link>
                ) : <div />}
                {next ? (
                  <Link to={`/blog/${next.slug}`} className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors text-right">
                    <div className="flex items-center justify-end gap-2 font-body text-xs text-muted-foreground mb-2">
                      Article suivant <ArrowRight size={13} />
                    </div>
                    <div className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {next.title}
                    </div>
                  </Link>
                ) : <div />}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
