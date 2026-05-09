import { PageHero } from "@/components/page-hero";
import { ProcessSection } from "@/components/process-section";

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="A practical path from first idea to live product."
        subtitle="The process keeps scope clear, design focused, and development moving toward a launch-ready system."
      />
      <ProcessSection />
    </>
  );
}
