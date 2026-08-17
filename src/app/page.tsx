import HeroSection from "@/components/landing/hero-section";
import LilNavigator from "@/components/navigation/lil-navigator";
import GitHubContainer from "@/components/landing/github/github-container";

export default function Home() {
  return (
    <div className="flex flex-col min-h-svh h-400 gap-4 p-2">
      <LilNavigator />
      <HeroSection />
      <GitHubContainer />

      <section className="mt-8 grid lg:grid-cols-2">
        <div>
          <h1 className="text-lg sm:text-xl lg:text-2xl mb-4 font-semibold">
            Projects
          </h1>
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg sm:text-xl lg:text-2xl mb-4 font-semibold">
            Work EXP
          </h1>
        </div>
      </section>
    </div>
  );
}
