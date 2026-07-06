import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { blogPosts } from "@/lib/legal-data";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Legal Blog — Insights, Guides & Case Law" },
      { name: "description", content: "Practical legal awareness articles on bail, cheque bounce, writs, divorce, property, cybercrime and more — written by a practicing High Court advocate." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("All");
  const categories = useMemo(() => ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))], []);
  const filtered = blogPosts.filter(
    (p) =>
      (cat === "All" || p.category === cat) &&
      (p.title.toLowerCase().includes(q.toLowerCase()) || p.excerpt.toLowerCase().includes(q.toLowerCase())),
  );
  const featured = blogPosts[0];
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Legal Blog"
        title="Legal Awareness & Insights"
        subtitle="Explaining law in plain language — what your rights are and how the courts work."
        crumbs={[{ label: "Blog" }]}
      />

      <section className="container-x py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary to-hover text-white p-8 md:p-12 mb-14"
        >
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] font-ui font-semibold text-gold">Featured Article</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">{featured.title}</h2>
          <p className="mt-3 text-white/80 max-w-2xl">{featured.excerpt}</p>
          <div className="mt-5 flex items-center gap-4 text-xs text-white/70">
            <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{featured.date}</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featured.read}</span>
            <span className="px-2 py-0.5 rounded-full bg-white/15">{featured.category}</span>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-10">
          <div className="relative w-full md:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-3 rounded-full border border-border bg-white text-sm font-ui focus:outline-none focus:border-primary"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-1.5 rounded-full text-xs font-ui font-semibold border transition-colors ${
                  cat === c ? "bg-primary text-primary-foreground border-primary" : "bg-white text-ink/70 border-border hover:border-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-white overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all"
            >
              <div className="h-40 bg-gradient-to-br from-primary/15 via-gold/15 to-transparent grid place-items-center">
                <span className="px-3 py-1 rounded-full text-[11px] font-ui font-semibold bg-white/70 backdrop-blur text-primary">{p.category}</span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{p.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{p.read}</span>
                </div>
                <h3 className="font-display text-lg text-ink">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                <button className="mt-4 inline-flex items-center gap-1 text-sm font-ui font-semibold text-primary hover:text-hover">
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground mt-16">No articles match your search.</p>
        )}
      </section>
    </SiteLayout>
  );
}