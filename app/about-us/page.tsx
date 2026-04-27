import SiteShell from "@/components/layout/SiteShell";
import AboutPageContent from "@/components/pages/about-page-content";

export const metadata = { title: "About Us — Ecofy Africa" };

export default function AboutUsPage() {
  return (
    <SiteShell>
      <AboutPageContent />
    </SiteShell>
  );
}
