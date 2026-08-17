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
          <h1 className="text-lg sm:text-xl lg:text-2xl mb-4 font-extrabold">
            Work EXP
          </h1>
          <ul className="border-l flex flex-col gap-4 relative py-4">
            <li className="flex flex-col">
              <div className="flex items-center">
                <span className="bg-primary font-bold text-secondary relative -left-5 w-10 h-10 flex items-center justify-center">
                  1
                </span>
                <span className="text-xl font-semibold">
                  Online super market
                </span>
              </div>
              <div className="mt-2 pl-2 flex flex-col gap-1">
                <span>number one</span>
                <span>number one</span>
                <span>number one</span>
                <span>number one</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
