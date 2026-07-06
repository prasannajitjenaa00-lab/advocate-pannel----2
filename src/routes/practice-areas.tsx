import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { practiceAreas } from "@/lib/legal-data";

export const Route = createFileRoute("/practice-areas")({
  head: () => ({
    meta: [
      { title: "Practice Areas — Civil, Criminal, Writ, Family & More" },
      { name: "description", content: "Comprehensive legal services: civil litigation, criminal law, writ petitions, bail, family & divorce, property, cheque bounce, cyber, labour, service, arbitration and more." },
      { property: "og:title", content: "Practice Areas — High Court Advocate" },
      { property: "og:description", content: "Full-spectrum legal representation across 18+ practice areas." },
      { property: "og:url", content: "/practice-areas" },
    ],
    links: [{ rel: "canonical", href: "/practice-areas" }],
  }),
  component: PracticeAreasPage,
});

function PracticeAreasPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Practice Areas"
        title="Comprehensive Legal Services"
        subtitle="Focused expertise across 18+ areas of law — matched with the personal attention every case deserves."
        crumbs={[{ label: "Practice Areas" }]}
      />

      <section className="container-x py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: (i % 6) * 0.04 }}
              className="group relative p-6 rounded-2xl border border-border bg-white hover:border-primary/40 hover:shadow-[0_25px_60px_-25px_rgba(30,58,138,0.35)] hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary grid place-items-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <p.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg text-ink">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              <Link to="/contact" className="mt-4 inline-flex items-center gap-1 text-sm font-ui font-semibold text-primary hover:text-hover">
                Discuss This Matter <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/contact" className="btn-primary">
            <Calendar className="w-4 h-4" /> Book a Consultation
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}