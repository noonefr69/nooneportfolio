import AboutHero from "@/components/about/hero";
import TechUsed from "@/components/about/tech-used";

export default function AboutMe() {
  return (
    <div className="flex flex-col gap-4 pt-16">
      <AboutHero />
      <TechUsed />
    </div>
  );
}
