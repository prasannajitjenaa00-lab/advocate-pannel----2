import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { GraduationCap, Award, Target, Eye, Users, Landmark, Scale, Briefcase } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { site } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About ${site.name} — High Court Advocate` },
      { name: "description", content: "Learn about the advocate's background, education, courtroom experience, mission and areas of practice at the High Court and subordinate courts." },
      { property: "og:title", content: `About ${site.name}` },
      { property: "og:description", content: "Background, education, experience and legal philosophy of a trusted High Court Advocate." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const timeline = [
  { year: "Education", title: "LL.B. & LL.M.", desc: "Graduated in Law with specialisation in Constitutional and Criminal Law from a reputed National Law University." },
  { year: "Bar Enrolment", title: "Enrolled with State Bar Council", desc: "Officially enrolled as an Advocate and began independent practice in trial courts." },
  { year: "Trial Practice", title: "Civil & Criminal Trial Experience", desc: "Extensive first-hand experience in evidence, cross-examination and trial strategy." },
  { year: "High Court", title: "Regular High Court Practice", desc: "Advanced to independent High Court practice — writs, appeals, bail and constitutional matters." },
  { year: "Today", title: "Chamber Practice & Advisory", desc: "Trusted chamber counsel for individuals, families, startups and businesses across India." },
];

const membership = [
  "Bar Council of India",
  "State Bar Council",
  "High Court Bar Association",
  "District Bar Association",
];

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About the Advocate"
        title="Committed to Justice, Dedicated to Clients"
        subtitle="A brief introduction to the advocate's background, values and courtroom philosophy."
        crumbs={[{ label: "About" }]}
      />

      <section className="container-x py-20 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/15 via-gold/15 to-transparent blur-2xl" />
          <div className="relative rounded-[2rem] overflow-hidden border border-border shadow-2xl aspect-[4/5] bg-gradient-to-br from-[color:var(--color-surface)] to-white">
            <img
              src="/advokate.png"
              alt={site.name}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">A Practitioner First, Always</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {site.name} is an experienced High Court Advocate practicing across civil, criminal, constitutional and commercial law. With a foundation built on rigorous research, ethical conduct and clear communication, every case is approached with the same commitment — no matter the stakes.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Clients receive honest legal opinions, transparent fee structures and consistent personal attention throughout the life of their matter.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              { icon: GraduationCap, label: "Education", value: "LL.B., LL.M." },
              { icon: Briefcase, label: "Experience", value: "10+ Years" },
              { icon: Landmark, label: "Court", value: "High Court" },
              { icon: Users, label: "Clients Served", value: "500+" },
            ].map((s) => (
              <div key={s.label} className="p-4 rounded-xl bg-white border border-border flex items-center gap-3">
                <span className="grid place-items-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                  <s.icon className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-ui">{s.label}</p>
                  <p className="font-display text-lg text-ink">{s.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--color-surface)] py-20">
        <div className="container-x grid md:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl bg-white border border-border">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary grid place-items-center mb-4">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl text-ink">Mission</h3>
            <p className="mt-3 text-muted-foreground">
              To provide accessible, honest and result-oriented legal representation to every client — protecting their rights with diligence, integrity and empathy.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white border border-border">
            <div className="w-12 h-12 rounded-xl bg-gold/15 text-[color:var(--color-gold)] grid place-items-center mb-4">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl text-ink">Vision</h3>
            <p className="mt-3 text-muted-foreground">
              To be recognised as a trusted counsel known for meticulous preparation, strong advocacy and unwavering ethical practice at every level of the judiciary.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.28em] text-gold font-ui font-semibold mb-3">Journey</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-ink">Professional Timeline</h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
          {timeline.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-10 md:items-center mb-8 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}
            >
              <div className={`absolute left-6 md:left-1/2 top-4 w-3 h-3 rounded-full bg-gold ring-4 ring-white md:-translate-x-1/2`} />
              <div className={`${i % 2 === 0 ? "md:text-right md:pr-10" : "md:text-left md:pl-10 md:[direction:ltr]"}`}>
                <p className="text-xs uppercase tracking-[0.2em] text-gold font-ui font-semibold">{t.year}</p>
                <h3 className="font-display text-xl text-ink mt-1">{t.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{t.desc}</p>
              </div>
              <div className="hidden md:block" />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[color:var(--color-surface)] py-20">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-xs uppercase tracking-[0.28em] text-gold font-ui font-semibold mb-3">Memberships</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">Professional Affiliations</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {membership.map((m) => (
              <div key={m} className="p-5 rounded-2xl bg-white border border-border text-center">
                <Award className="w-6 h-6 text-gold mx-auto mb-2" />
                <p className="font-ui font-semibold text-ink text-sm">{m}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}