import HeroSection from "@/components/landing/hero-section";
import LilNavigator from "@/components/navigation/lil-navigator";

export default function Home() {
  return (
    <div className="flex flex-col min-h-svh h-400 gap-4 p-2">
      <LilNavigator />
      <HeroSection />

      {/*<Image
        src="https://ghchart.rshah.org/noonefr69"
        alt="github action chart"
        width={1980}
        height={1080}
      />*/}
    </div>
  );
}
