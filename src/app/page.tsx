import HeroSection from "@/components/landing/hero-section";
import GitHubContainer from "@/components/landing/github/github-container";
import ExpSection from "@/components/landing/experiment/exp";
import FooterSection from "@/components/landing/footer-section/footer";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-2">
      <HeroSection />
      <GitHubContainer />
      <ExpSection />
      <FooterSection />
    </div>
  );
}
