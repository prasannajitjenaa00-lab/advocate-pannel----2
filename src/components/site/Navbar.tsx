import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calendar, Scale } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { site, telLink, waLink } from "@/lib/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/practice-areas", label: "Practice Areas" },
  { to: "/high-court", label: "High Court" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_8px_30px_-15px_rgba(30,58,138,0.25)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2.5 group shrink-0">
          <span className="grid place-items-center w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-md">
            <Scale className="w-5 h-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-base sm:text-lg font-bold text-ink whitespace-nowrap">
              {site.name}
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-gold font-ui font-semibold">
              {site.role}
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-ui font-medium text-ink/80 hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              activeProps={{ className: "text-primary after:w-full" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener"
            className="btn-outline !py-2 !px-4 text-sm !border-[color:var(--color-gold)] !text-[color:var(--color-gold)] hover:!bg-[color:var(--color-gold)] hover:!text-[color:var(--color-gold-foreground)]"
          >
            <WhatsAppIcon className="w-4 h-4" /> WhatsApp
          </a>
          <Link to="/contact" className="btn-primary !py-2 !px-4 text-sm">
            <Calendar className="w-4 h-4" /> Book Consultation
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid place-items-center w-10 h-10 rounded-full border border-border text-ink"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-white border-t border-border shadow-xl"
          >
            <div className="container-x py-4 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="py-3 px-2 rounded-lg text-ink font-ui hover:bg-surface"
                  activeProps={{ className: "text-primary bg-surface" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-3">
                <a href={waLink()} target="_blank" rel="noopener" className="btn-gold w-full text-sm">
                  <WhatsAppIcon className="w-4 h-4" /> WhatsApp
                </a>
                <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary w-full text-sm">
                  <Calendar className="w-4 h-4" /> Book Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
