import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export function SiteShell({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
