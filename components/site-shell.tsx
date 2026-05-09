import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { PageTransition } from "@/components/page-transition";

export function SiteShell({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Navbar />
      <PageTransition>{children}</PageTransition>
      <Footer />
    </main>
  );
}
