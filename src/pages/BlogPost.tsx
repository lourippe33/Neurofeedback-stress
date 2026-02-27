import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articles } from "@/data/articles";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

function bold(text: string) {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-medium">$1</strong>');
}

function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  // Detect FAQ section
  const faqStartIndex = lines.findIndex(l => l.trim().startsWith("## FAQ"));

  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) { i++; continue; }

    // FAQ block
    if (i === faqStartIndex) {
      const faqItems: { q: string; a: string }[] = [];
      i++; // skip the FAQ h2 line, we'll render it separately
      while (i < lines.length) {
        const fl = lines[i].trim();
        if (fl.startsWith("? ")) {
          const q = fl.slice(2);
          i++;
          const answerLines: string[] = [];
          while (i < lines.length && lines[i].trim() && !lines[i].trim().startsWith("? ")) {
            answerLines.push(lines[i].trim());
            i++;
          }
          faqItems.push({ q, a: answerLines.join(" ") });
        } else {
          i++;
        }
      }
      elements.push(
        <div key="faq" className="mt-10">
          <h2 className="font-display text-3xl font-light text-foreground mb-6">FAQ — Vos questions sur le neurofeedback et le sommeil</h2>
          <div className="space-y-4">
            {faqItems.map((item, j) => (
              <details key={j} className="group bg-card border border-border rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none font-body text-sm font-medium text-foreground hover:text-primary transition-colors">
                  <span>{item.q}</span>
                  <span className="flex-shrink-0 w-5 h-5 rounded-full border border-border flex items-center justify-center text-muted-foreground group-open:rotate-45 transition-transform duration-200 text-base leading-none">+</span>
                </summary>
                <div className="px-6 pb-5">
                  <p className="font-body text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: bold(item.a) }} />
                </div>
              </details>
            ))}
          </div>
        </div>
      );
      continue;
    }

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
              <span dangerouslySetInnerHTML={{ __html: bold(item) }} />
            </li>
          ))}
        </ul>
      );
      continue;
    } else {
      elements.push(<p key={i} className="font-body text-sm text-muted-foreground leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: bold(line) }} />);
    }
    i++;
  }
  return elements;
}

// Extract FAQ items from article content
function extractFaqItems(content: string): { q: string; a: string }[] {
  const lines = content.trim().split("\n");
  const faqStartIndex = lines.findIndex(l => l.trim().startsWith("## FAQ"));
  if (faqStartIndex === -1) return [];
  const items: { q: string; a: string }[] = [];
  let i = faqStartIndex + 1;
  while (i < lines.length) {
    const fl = lines[i].trim();
    if (fl.startsWith("? ")) {
      const q = fl.slice(2);
      i++;
      const answerLines: string[] = [];
      while (i < lines.length && lines[i].trim() && !lines[i].trim().startsWith("? ")) {
        answerLines.push(lines[i].trim());
        i++;
      }
      items.push({ q, a: answerLines.join(" ") });
    } else {
      i++;
    }
  }
  return items;
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);
  const currentIndex = articles.findIndex((a) => a.slug === slug);
  const prev = articles[currentIndex - 1];
  const next = articles[currentIndex + 1];

  // --- Dynamic meta tags ---
  useEffect(() => {
    if (!article) return;
    const metaTitle = article.metaTitle || article.title;
    const metaDesc = article.metaDescription || article.excerpt;

    document.title = metaTitle;

    let descTag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement("meta");
      descTag.name = "description";
      document.head.appendChild(descTag);
    }
    descTag.content = metaDesc;

    // Clean up on unmount
    return () => {
      document.title = "Neurofeedback Dynamique NeurOptimal® – Bien-être & Performance";
      if (descTag) descTag.content = "";
    };
  }, [article]);

  // --- JSON-LD FAQPage schema ---
  const faqItems = article ? extractFaqItems(article.content) : [];
  const faqJsonLd = faqItems.length > 0
    ? JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a,
          },
        })),
      })
    : null;

  // --- JSON-LD Article schema ---
  const SITE_URL = "https://www.neurofeedback-stress.fr";

  // Map human-readable dates to ISO format
  const dateMap: Record<string, string> = {
    "Mars 2025": "2025-03-01",
    "Janvier 2025": "2025-01-01",
    "Novembre 2024": "2024-11-01",
    "Octobre 2024": "2024-10-01",
    "Septembre 2024": "2024-09-01",
  };
  const isoDate = article ? (dateMap[article.date] ?? "2025-01-01") : "2025-01-01";

  const articleJsonLd = article
    ? JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": article.title,
        "description": article.metaDescription || article.excerpt,
        "image": article.imageUrl?.startsWith("http")
          ? article.imageUrl
          : `${SITE_URL}${article.imageUrl}`,
        "datePublished": isoDate,
        "dateModified": isoDate,
        "url": `${SITE_URL}/blog/${article.slug}`,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `${SITE_URL}/blog/${article.slug}`,
        },
        "publisher": {
          "@type": "Organization",
          "name": "neurofeedback-stress.fr",
          "url": SITE_URL,
        },
        "author": {
          "@type": "Organization",
          "name": "neurofeedback-stress.fr",
        },
      })
    : null;

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
      {/* JSON-LD Article schema.org */}
      {articleJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: articleJsonLd }}
        />
      )}
      {/* JSON-LD FAQPage schema.org */}
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: faqJsonLd }}
        />
      )}
      <Navbar />

      {/* Hero image */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img src={article.imageUrl} alt={article.imageAlt || article.title} title={article.title} className="w-full h-full object-cover" />
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
                {article.slug === "neurofeedback-sommeil-nuits-reparatrices"
                  ? "Envie de retrouver un sommeil qui vous ressource vraiment ?"
                  : "Envie d'en savoir plus ?"}
              </h3>
              <p className="font-body text-sm text-primary-foreground/70 mb-6">
                {article.slug === "neurofeedback-sommeil-nuits-reparatrices"
                  ? "Si les nuits difficiles font partie de votre quotidien depuis un moment, le neurofeedback dynamique peut être une piste sérieuse à explorer."
                  : "Prenez rendez-vous pour une séance découverte — sans engagement."}
              </p>
              <Link
                to="/contact"
                className="inline-block font-body text-sm px-8 py-3 rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-colors"
              >
                {article.slug === "neurofeedback-sommeil-nuits-reparatrices"
                  ? "Découvrir l'accompagnement →"
                  : "Réserver une séance"}
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
