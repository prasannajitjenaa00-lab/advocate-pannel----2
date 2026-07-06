import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { site, telLink, mailLink, waLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Book a Legal Consultation" },
      { name: "description", content: "Contact the advocate's chamber to book a confidential consultation. Call, WhatsApp, email or use the contact form." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };
  const info = [
    { icon: MapPin, label: "Office Address", value: site.address },
    { icon: Phone, label: "Phone", value: site.phoneDisplay, href: telLink },
    { icon: Mail, label: "Email", value: site.email, href: mailLink },
    { icon: Clock, label: "Office Timing", value: site.hours },
  ];
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        subtitle="Confidential, obligation-free — we'll respond promptly and honestly."
        crumbs={[{ label: "Contact" }]}
      />

      <section className="container-x py-16 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-4">
          {info.map((it) => (
            <div key={it.label} className="p-5 rounded-2xl bg-white border border-border flex gap-4">
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-primary/10 text-primary shrink-0">
                <it.icon className="w-5 h-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest font-ui text-muted-foreground">{it.label}</p>
                {it.href ? (
                  <a href={it.href} className="font-ui text-ink hover:text-primary">{it.value}</a>
                ) : (
                  <p className="font-ui text-ink text-sm">{it.value}</p>
                )}
              </div>
            </div>
          ))}
          <a href={waLink()} target="_blank" rel="noopener" className="btn-gold w-full">
            <WhatsAppIcon className="w-4 h-4" /> Chat on WhatsApp
          </a>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 p-8 rounded-2xl bg-white border border-border shadow-sm"
        >
          <h2 className="font-display text-2xl text-ink">Send a Message</h2>
          <p className="text-sm text-muted-foreground mt-1">Share brief details of your matter — everything is kept confidential.</p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <Field label="Name" name="name" required />
            <Field label="Phone" name="phone" type="tel" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Subject" name="subject" required />
          </div>
          <div className="mt-4">
            <label className="block text-xs uppercase tracking-widest font-ui text-muted-foreground mb-2">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:border-primary"
            />
          </div>
          <button type="submit" className="btn-primary mt-6">
            {sent ? <><CheckCircle2 className="w-4 h-4" /> Message Sent</> : <><Send className="w-4 h-4" /> Send Message</>}
          </button>
        </motion.form>
      </section>

      <section className="container-x pb-20">
        <div className="rounded-3xl overflow-hidden border border-border shadow-lg">
          <iframe
            src={site.mapEmbed}
            title="Chamber location"
            className="w-full h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest font-ui text-muted-foreground mb-2">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:border-primary"
      />
    </div>
  );
}