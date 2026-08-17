import HeroSection from "@/components/landing/hero-section";
import LilNavigator from "@/components/navigation/lil-navigator";
import GitHubContainer from "@/components/landing/github/github-container";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
                <div className="flex items-center gap-2 relative -left-1">
                  <span className="text-xl font-semibold">
                    Online super market
                  </span>
                  <span>-</span>
                  <Button
                    asChild
                    variant={"link"}
                    className="opacity-60 duration-100 hover:opacity-100 p-0 underline"
                    size={"sm"}
                  >
                    <Link
                      href={`https://mohosseinimarket.vercel.app/`}
                      target="_blank"
                    >
                      mohosseinimarket.vercel.app
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="mt-2 pl-2 flex flex-col gap-1">
                <p className="text-muted-foreground text-sm">
                  Developed a full-featured e-commerce platform with Next.js,
                  including performance optimization (Lighthouse 90+ and bundle
                  reduction via RSC), secure authentication (next-auth) with
                  route protection using a proxy, multi-layer filtering and
                  search with shareable URL parameters and pagination, and a
                  persistent shopping cart powered by Zustand with a clean UI
                  for instant feedback and reduced latency.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
