import { Link } from "@tanstack/react-router";
import {
  Scale,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  ArrowUp,
} from "lucide-react";
import { site, telLink, mailLink } from "@/lib/site";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Advocate" },
  { to: "/practice-areas", label: "Practice Areas" },
  { to: "/high-court", label: "High Court Practice" },
  { to: "/blog", label: "Legal Blog" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

const practice = [
  "Civil Litigation",
  "Criminal Law",
  "Writ Petitions",
  "Bail Matters",
  "Family Law",
  "Property Disputes",
  "Cheque Bounce",
  "Consumer Court",
];

export function Footer() {
  return (
    <footer className="relative bg-[color:var(--color-ink)] text-white/80 pt-20 pb-6 mt-24 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #D4AF37 0px, transparent 40%), radial-gradient(circle at 80% 60%, #2563EB 0px, transparent 40%)",
        }}
      />
      <div className="container-x relative grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid place-items-center w-10 h-10 rounded-full bg-gold text-[color:var(--color-gold-foreground)]">
              <Scale className="w-5 h-5" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-base sm:text-lg font-bold text-white whitespace-nowrap">{site.name}</span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-gold font-semibold">{site.role}</span>
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Professional legal representation with integrity, dedication and transparency. Trusted counsel for civil, criminal and constitutional matters.
          </p>
          <div className="flex gap-2 mt-5">
            {[
              { Icon: Facebook, href: site.social.facebook },
              { Icon: Linkedin, href: site.social.linkedin },
              { Icon: Instagram, href: site.social.instagram },
              { Icon: Twitter, href: site.social.twitter },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener"
                className="grid place-items-center w-9 h-9 rounded-full bg-white/10 hover:bg-gold hover:text-[color:var(--color-gold-foreground)] transition-colors"
                aria-label="Social link"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-display text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-gold transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display text-lg mb-4">Practice Areas</h4>
          <ul className="space-y-2 text-sm">
            {practice.map((p) => (
              <li key={p}>
                <Link to="/practice-areas" className="hover:text-gold transition-colors">
                  {p}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display text-lg mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" />
              <span>{site.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-4 h-4 mt-0.5 text-gold shrink-0" />
              <a href={telLink} className="hover:text-gold">{site.phoneDisplay}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="w-4 h-4 mt-0.5 text-gold shrink-0" />
              <a href={mailLink} className="hover:text-gold">{site.email}</a>
            </li>
            <li className="flex gap-3">
              <Clock className="w-4 h-4 mt-0.5 text-gold shrink-0" />
              <span>{site.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-x relative mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/60">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <Link to="/privacy" className="hover:text-gold">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-gold">Terms & Conditions</Link>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="grid place-items-center w-9 h-9 rounded-full bg-gold text-[color:var(--color-gold-foreground)] hover:brightness-110"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
