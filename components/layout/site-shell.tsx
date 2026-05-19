import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { PageTransition } from "@/components/layout/page-transition";

export function SiteShell({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Navbar />
      <PageTransition>{children}</PageTransition>
      <Footer />
    </main>
  );
}
