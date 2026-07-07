import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Phone,
  Calendar,
  Scale,
  BookOpen,
  Landmark,
  Gavel,
  ShieldCheck,
  Award,
  Clock,
  Users,
  HeartHandshake,
  Star,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { SiteLayout } from "@/components/site/SiteLayout";
import { site, telLink, waLink } from "@/lib/site";
import { practiceAreas, testimonials } from "@/lib/legal-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adv. Atul Kumar Jha — Experienced High Court Advocate" },
      { name: "description", content: "Trusted High Court Advocate offering civil, criminal, writ, bail, family, property and constitutional legal services. Book a confidential consultation." },
      { property: "og:title", content: "Adv. Atul Kumar Jha — Experienced High Court Advocate" },
      { property: "og:description", content: "Professional legal representation with integrity, dedication and years of courtroom experience." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const stats = [
  { icon: Landmark, label: "High Court Practice" },
  { icon: Gavel, label: "Civil & Criminal Matters" },
  { icon: HeartHandshake, label: "Client-Focused Services" },
  { icon: ShieldCheck, label: "Professional Consultation" },
];

const whyChoose = [
  { icon: Award, title: "Experienced Representation", desc: "Years of active courtroom practice at the High Court and subordinate courts." },
  { icon: ShieldCheck, title: "Transparent Advice", desc: "Honest opinions, realistic timelines and clear fee structures — no false promises." },
  { icon: Users, title: "Confidential Consultation", desc: "Every discussion is protected under strict attorney-client privilege." },
  { icon: HeartHandshake, title: "Personal Attention", desc: "Every matter is handled personally, not passed down through associates." },
  { icon: Clock, title: "Quick Response", desc: "Prompt replies via call, WhatsApp and email — including urgent bail matters." },
  { icon: Scale, title: "Professional Ethics", desc: "Strict adherence to Bar Council rules and highest ethical standards." },
  { icon: BookOpen, title: "Strong Legal Strategy", desc: "Well-researched, precedent-driven case preparation and courtroom argument." },
  { icon: CheckCircle2, title: "Affordable Consultation", desc: "Reasonable, transparent fees to make quality legal advice accessible." },
];

const processSteps = [
  { title: "Book Consultation", desc: "Reach out via phone, WhatsApp or the contact form." },
  { title: "Discuss Your Case", desc: "Share facts and documents in a confidential meeting." },
  { title: "Legal Opinion", desc: "Receive an honest assessment of merits and options." },
  { title: "Case Preparation", desc: "Detailed drafting, research and evidence review." },
  { title: "Court Representation", desc: "Focused, well-prepared arguments before the court." },
  { title: "Resolution", desc: "Judgment, settlement or successful closure of your matter." },
];

function FloatingIcon({
  Icon,
  className,
  delay = 0,
}: {
  Icon: typeof Scale;
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -16, 0] }}
      transition={{ duration: 6, repeat: Infinity, delay, ease: "easeInOut" }}
      className={`absolute pointer-events-none ${className}`}
    >
      <Icon className="w-full h-full text-primary/10" strokeWidth={1.2} />
    </motion.div>
  );
}

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[color:var(--color-surface)] via-white to-white">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 20%, #1E3A8A 0px, transparent 40%), radial-gradient(circle at 90% 80%, #D4AF37 0px, transparent 35%)",
          }}
        />
        <FloatingIcon Icon={Scale} className="top-20 left-8 w-28 h-28 hidden md:block" />
        <FloatingIcon Icon={BookOpen} className="top-40 right-16 w-24 h-24 hidden md:block" delay={1.5} />
        <FloatingIcon Icon={Landmark} className="bottom-24 left-24 w-32 h-32 hidden lg:block" delay={2.5} />
        <FloatingIcon Icon={Gavel} className="bottom-16 right-10 w-24 h-24 hidden md:block" delay={0.8} />

        <div className="container-x relative pt-20 pb-24 md:pt-28 md:pb-32 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 text-[color:var(--color-gold-foreground)] text-xs font-ui font-semibold uppercase tracking-[0.18em]"
            >
              <Scale className="w-3.5 h-3.5 text-gold" /> {site.role}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-5 font-display text-4xl md:text-6xl font-bold leading-[1.05] text-ink"
            >
              Experienced <span className="text-primary">High Court</span> Advocate
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground max-w-xl"
            >
              Professional legal representation with integrity, dedication, transparency and years of courtroom experience — for individuals, families and businesses.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link to="/contact" className="btn-primary">
                <Calendar className="w-4 h-4" /> Book Consultation
              </Link>
              <a href={waLink()} target="_blank" rel="noopener" className="btn-gold">
                <WhatsAppIcon className="w-4 h-4" /> WhatsApp Now
              </a>
              <a href={telLink} className="btn-outline">
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } } }}
              className="mt-10 grid grid-cols-2 gap-3 max-w-lg"
            >
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                  className="flex items-center gap-3 p-3 rounded-xl glass-card"
                >
                  <span className="grid place-items-center w-9 h-9 rounded-lg bg-primary/10 text-primary">
                    <s.icon className="w-4 h-4" />
                  </span>
                  <span className="text-sm font-ui font-medium text-ink">{s.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/20 via-gold/20 to-transparent blur-2xl" />
              <div className="relative rounded-[2rem] overflow-hidden border border-border shadow-2xl aspect-[4/5] bg-gradient-to-br from-[color:var(--color-surface)] to-white">
                <img
                  src="/advokate.png"
                  alt={site.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-4 flex items-center gap-3 shadow-xl">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-gold border-2 border-white" />
                  ))}
                </div>
                <div>
                  <p className="text-xs font-ui font-semibold text-ink">Trusted by clients</p>
                  <div className="flex items-center gap-1 text-gold">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRACTICE PREVIEW */}
      <section className="container-x py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.28em] text-gold font-ui font-semibold mb-3">Practice Areas</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-ink">Comprehensive Legal Services</h2>
          <p className="mt-4 text-muted-foreground">Full-spectrum representation across civil, criminal, constitutional and commercial matters.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.slice(0, 9).map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.04 }}
              className="group relative p-6 rounded-2xl border border-border bg-white hover:border-primary/40 hover:shadow-[0_25px_60px_-25px_rgba(30,58,138,0.35)] hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary grid place-items-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <p.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg text-ink">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              <Link to="/practice-areas" className="mt-4 inline-flex items-center gap-1 text-sm font-ui font-semibold text-primary hover:text-hover">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/practice-areas" className="btn-outline">
            View All Practice Areas <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-[color:var(--color-surface)] py-20 md:py-28">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.28em] text-gold font-ui font-semibold mb-3">Why Clients Choose</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-ink">Trusted, Ethical, Effective</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="p-6 rounded-2xl bg-white border border-border hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-gold/15 text-[color:var(--color-gold)] grid place-items-center mb-4">
                  <w.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg text-ink">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTATION PROCESS */}
      <section className="container-x py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.28em] text-gold font-ui font-semibold mb-3">Consultation Process</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-ink">How We Work Together</h2>
        </div>
        <div className="relative grid gap-6 md:grid-cols-3 lg:grid-cols-6">
          {processSteps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="relative p-5 rounded-2xl border border-border bg-white text-center"
            >
              <div className="mx-auto w-10 h-10 rounded-full bg-primary text-primary-foreground grid place-items-center font-ui font-bold shadow-lg">
                {i + 1}
              </div>
              <h3 className="mt-3 font-display text-base text-ink">{s.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[color:var(--color-surface)] py-20 md:py-28">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.28em] text-gold font-ui font-semibold mb-3">Client Testimonials</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-ink">Words From Those We've Served</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 6).map((t, i) => (
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
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-20">
        <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 text-center">
          <div aria-hidden className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-gold/25 blur-3xl" />
          <div aria-hidden className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-hover/40 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-5xl font-bold">Ready to Discuss Your Case?</h2>
            <p className="mt-4 text-white/80 max-w-2xl mx-auto">
              Confidential, obligation-free consultation. Speak directly with the advocate.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="btn-gold">
                <Calendar className="w-4 h-4" /> Book Consultation
              </Link>
              <a href={waLink()} target="_blank" rel="noopener" className="btn-outline !border-white/40 !text-white hover:!bg-white/10">
                <WhatsAppIcon className="w-4 h-4" /> WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
