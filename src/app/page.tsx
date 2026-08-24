import HeroSection from "@/components/landing/hero-section";
import GitHubContainer from "@/components/landing/github/github-container";
import ExpSection from "@/components/landing/experiment/exp";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <HeroSection />
      <GitHubContainer />
      <ExpSection />
    </div>
  );
}
