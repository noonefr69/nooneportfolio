import HeroSection from "@/components/landing/hero-section";
import LilNavigator from "@/components/navigation/lil-navigator";
import GitHubContainer from "@/components/landing/github/github-container";
import ExpSection from "@/components/landing/experiment/exp";

export default function Home() {
  return (
    <div className="flex flex-col min-h-svh h-400 gap-4 p-2">
      <LilNavigator />
      <HeroSection />
      <GitHubContainer />
      <ExpSection />
    </div>
  );
}
