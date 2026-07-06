import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";
import { ScrollProgress } from "./ScrollProgress";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground pb-20 md:pb-0">
      <ScrollProgress />
      <Navbar />
      <main className="pt-24">{children}</main>
      <Footer />
      <FloatingActions />
    </div>
  );
}