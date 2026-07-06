import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Landmark, Scale, ShieldCheck, FileSearch, MessageSquare, Gavel, BookOpen } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/high-court")({
  head: () => ({
    meta: [
      { title: "High Court Practice — Writs, Appeals, Bail & Constitutional Law" },
      { name: "description", content: "Independent High Court practice covering writ petitions, criminal appeals, bail matters, service and constitutional law with rigorous preparation and ethical advocacy." },
      { property: "og:title", content: "High Court Practice" },
      { property: "og:description", content: "Court experience, legal expertise and ethical advocacy at the High Court." },
      { property: "og:url", content: "/high-court" },
    ],
    links: [{ rel: "canonical", href: "/high-court" }],
  }),
  component: HighCourtPage,
});

const items = [
  { icon: Landmark, title: "Court Experience", desc: "Regular appearances before the High Court — writs, appeals, revisions and constitutional matters." },
  { icon: BookOpen, title: "Legal Expertise", desc: "Deep grounding in constitutional, criminal, service and civil laws with current jurisprudence." },
  { icon: ShieldCheck, title: "Professional Ethics", desc: "Strict adherence to Bar Council rules — no false assurances, no compromise on integrity." },
  { icon: FileSearch, title: "Case Preparation", desc: "Meticulous research, precedent analysis and drafting of pleadings, synopses and written submissions." },
  { icon: Gavel, title: "Court Representation", desc: "Focused, well-structured oral arguments — respectful to the bench, firm on client interest." },
  { icon: MessageSquare, title: "Client Consultation", desc: "Regular updates, honest opinions and clear explanations of every procedural step." },
  { icon: Scale, title: "Legal Strategy", desc: "Case strategy built around long-term client interests — trial, appeal, review or settlement." },
];

function HighCourtPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="High Court Practice"
        title="Focused, Ethical High Court Advocacy"
        subtitle="Rigorous preparation, principled representation and respectful courtroom presence."
        crumbs={[{ label: "High Court Practice" }]}
      />

      <section className="container-x py-20">
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative pl-20 pb-10 last:pb-0"
            >
              <span className="absolute left-0 top-0 w-16 h-16 rounded-2xl bg-white border border-border shadow-md grid place-items-center text-primary">
                <it.icon className="w-6 h-6" />
              </span>
              <span className="absolute left-6 md:left-8 top-16 bottom-0 w-px bg-border" />
              <h3 className="font-display text-xl text-ink">{it.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm max-w-xl">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}