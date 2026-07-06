import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { testimonials } from "@/lib/legal-data";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Testimonials — What Clients Say" },
      { name: "description", content: "Read authentic client experiences from those the advocate has represented in civil, criminal, family and constitutional matters." },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Testimonials"
        title="Voices of Trust"
        subtitle="Honest words from clients we've had the privilege to represent."
        crumbs={[{ label: "Testimonials" }]}
      />
      <section className="container-x py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-1 text-gold mb-3">
                {[...Array(t.stars)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-sm text-ink/80 leading-relaxed">"{t.quote}"</p>
              <div className="mt-5 flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-gold grid place-items-center text-white font-ui font-semibold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-ui font-semibold text-sm text-ink">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}