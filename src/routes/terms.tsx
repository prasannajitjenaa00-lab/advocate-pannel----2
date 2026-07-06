import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { site } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions" },
      { name: "description", content: "Terms governing your use of this website." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Legal" title="Terms & Conditions" crumbs={[{ label: "Terms" }]} />
      <section className="container-x py-14 max-w-3xl">
        <p className="text-muted-foreground">Last updated: {new Date().getFullYear()}</p>
        <Section title="Bar Council of India Disclaimer">
          As per the rules of the Bar Council of India, advocates are not permitted to solicit work or advertise. By continuing to use this website, you acknowledge that you are seeking information about {site.name} for your own information and use.
        </Section>
        <Section title="No Attorney-Client Relationship">
          Nothing on this website constitutes legal advice or creates an attorney-client relationship. For advice on any specific matter, please schedule a consultation.
        </Section>
        <Section title="Accuracy of Information">
          While every effort is made to ensure the accuracy of information on this website, no warranty is given as to its correctness or completeness.
        </Section>
        <Section title="Intellectual Property">
          All content, design and material on this website is the intellectual property of {site.name} and may not be reproduced without prior written consent.
        </Section>
        <Section title="Jurisdiction">
          Any disputes arising from the use of this website shall be governed by the laws of India and subject to the exclusive jurisdiction of the local courts.
        </Section>
      </section>
    </SiteLayout>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-8">
      <h2 className="font-display text-xl text-ink">{title}</h2>
      <p className="mt-2 text-muted-foreground leading-relaxed">{children}</p>
    </div>
  );
}