import { useEffect, useState } from "react";
import { Phone, Calendar, ArrowUp } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Link } from "@tanstack/react-router";
import { telLink, waLink } from "@/lib/site";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onS = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onS, { passive: true });
    return () => window.removeEventListener("scroll", onS);
  }, []);
  return (
    <>
      {/* Floating WhatsApp (all devices) */}
      <a
        href={waLink()}
        target="_blank"
        rel="noopener"
        className="fixed bottom-24 right-4 md:bottom-6 md:right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full text-white shadow-2xl group"
        aria-label="WhatsApp"
      >
        {/* Glowing/pulsing ripples (bloom effect) */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-ping [animation-delay:0.5s]" />
        
        {/* Main button background */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] transition-transform duration-300 group-hover:scale-110 shadow-lg" />
        
        {/* WhatsApp Icon */}
        <WhatsAppIcon className="w-7 h-7 relative z-10 transition-transform duration-300 group-hover:scale-110" />
      </a>
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="hidden md:grid fixed bottom-24 right-6 z-40 place-items-center w-11 h-11 rounded-full bg-primary text-primary-foreground shadow-xl hover:bg-hover"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Mobile bottom action bar */}
      <div className="md:hidden fixed inset-x-0 bottom-0 z-40 bg-white/95 backdrop-blur-md border-t border-border shadow-[0_-8px_30px_-15px_rgba(30,58,138,0.25)]">
        <div className="grid grid-cols-3 gap-1 p-2">
          <a href={telLink} className="flex flex-col items-center gap-1 py-2 rounded-xl bg-surface text-ink">
            <Phone className="w-5 h-5 text-primary" />
            <span className="text-[11px] font-ui font-semibold">Call</span>
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener"
            className="flex flex-col items-center gap-1 py-2 rounded-xl text-white"
            style={{ background: "#25D366" }}
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span className="text-[11px] font-ui font-semibold">WhatsApp</span>
          </a>
          <Link to="/contact" className="flex flex-col items-center gap-1 py-2 rounded-xl bg-primary text-primary-foreground">
            <Calendar className="w-5 h-5" />
            <span className="text-[11px] font-ui font-semibold">Book</span>
          </Link>
        </div>
      </div>
    </>
  );
}
