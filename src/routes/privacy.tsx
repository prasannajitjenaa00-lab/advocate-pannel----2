import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { site } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy" },
      { name: "description", content: "How this website collects, uses and protects your information." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Legal" title="Privacy Policy" crumbs={[{ label: "Privacy" }]} />
      <section className="container-x py-14 max-w-3xl prose-legal">
        <p className="text-muted-foreground">Last updated: {new Date().getFullYear()}</p>
        <Section title="Introduction">
          This Privacy Policy describes how {site.name} ("we", "our") handles information collected through this website. We are committed to protecting your privacy and maintaining the confidentiality of every visitor and client.
        </Section>
        <Section title="Information We Collect">
          When you use the contact form, WhatsApp or email, we may receive your name, phone number, email address and details of the matter you wish to discuss. This information is used solely to respond to your enquiry.
        </Section>
        <Section title="No Solicitation">
          The contents of this website are intended for general informational purposes only and do not amount to solicitation of work in any manner. Visiting this website does not create an attorney-client relationship.
        </Section>
        <Section title="Confidentiality">
          Any information shared during a consultation is protected under attorney-client privilege and will not be disclosed except as required by law.
        </Section>
        <Section title="Cookies & Analytics">
          We may use basic analytics tools to understand website usage. No personally identifiable information is sold or shared with third parties for marketing.
        </Section>
        <Section title="Contact">
          For any privacy-related queries, please write to {site.email}.
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