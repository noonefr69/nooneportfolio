import HeroSection from "@/components/landing/hero-section";
import LilNavigator from "@/components/navigation/lil-navigator";

export default function Home() {
  return (
    <div className="flex flex-col min-h-svh h-400 gap-4 p-2">
      <LilNavigator />
      <HeroSection />

      <section className="mt-8">
        <h1 className="lg:text-3xl font-extrabold">Contribution Graph</h1>
      </section>
    </div>
  );
}
