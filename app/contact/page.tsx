import { FinalCTA } from "@/components/final-cta";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title="Start a project with Kapa Software Group."
        subtitle="Share the website, app, automation, or platform you want to build and we can shape the right starting point."
      />
      <FinalCTA />
    </SiteShell>
  );
}
