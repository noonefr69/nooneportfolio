import AboutHero from "@/components/about/hero";
import RicesFootage from "@/components/about/rices-footage";
import TechUsed from "@/components/about/tech-used";

export default function AboutMe() {
  return (
    <div className="flex flex-col gap-4 pt-8 lg:pt-16">
      <AboutHero />
      <TechUsed />

      <div className="mb-18 mt-16 relative group">
        <div className="duration-100 group-hover:-left-80 bg-linear-to-r from-background to-transparent absolute left-0 top-1/2 -translate-y-1/2 h-full w-1/2" />
        <svg
          className="mt-18 h-4 w-full text-primary"
          viewBox="0 0 1440 24"
          preserveAspectRatio="none"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          vectorEffect="non-scaling-stroke"
          aria-hidden="true"
        >
          <path d="M0,12 C120,0 240,24 360,12 C480,0 600,24 720,12 C840,0 960,24 1080,12 C1200,0 1320,24 1440,12" />
        </svg>
        <div className="duration-100 group-hover:-right-80 bg-linear-to-l from-background to-transparent absolute right-0 top-1/2 -translate-y-1/2 h-full w-1/2" />
      </div>

      <RicesFootage />
    </div>
  );
}
