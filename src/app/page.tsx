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

      <section className="mt-8 grid lg:grid-cols-2 gap-4">
        <div className="flex flex-col order-2 lg:order-1">
          <h1 className="text-lg sm:text-xl lg:text-2xl mb-4 font-extrabold">
            Projects
          </h1>
          <ul className="border-l flex flex-col gap-4 relative py-4 ml-5 lg:ml-6">
            <li className="flex flex-col">
              <div className="flex items-center">
                <span className="shrink-0 duration-100 hover:scale-95 bg-primary font-bold text-secondary relative -left-6 w-12 h-12 flex items-center justify-center">
                  1
                </span>
                <div className="flex flex-col items-start relative -left-1">
                  <span className="text-base lg:text-xl font-semibold">
                    Tech book club landing page
                  </span>
                  <Button
                    asChild
                    variant={"link"}
                    className="opacity-60 duration-100 lg:text-xs text-[10px] hover:opacity-100 p-0 underline"
                  >
                    <Link
                      href={`https://tech-landing-page-blue.vercel.app/`}
                      target="_blank"
                    >
                      tech-landing-page-blue.vercel.app
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="mt-2 pl-2 flex flex-col gap-1">
                <p className="text-muted-foreground text-xs lg:text-sm text-justify">
                  Built a pixel-perfect landing page, delivering a fully
                  responsive interface that adapts flawlessly across all devices
                  (from desktops to smart refrigerators), with comprehensive
                  hover and focus states for every interactive element to ensure
                  a polished and accessible user experience.
                </p>
              </div>
            </li>
            <li className="flex flex-col">
              <div className="flex items-center">
                <span className="shrink-0 duration-100 hover:scale-95 bg-primary font-bold text-secondary relative -left-6 w-12 h-12 flex items-center justify-center">
                  2
                </span>
                <div className="flex flex-col items-start relative -left-1">
                  <span className="text-base lg:text-xl font-semibold">
                    wtia, media player with vim key binding
                  </span>
                  <Button
                    asChild
                    variant={"link"}
                    className="opacity-60 duration-100 lg:text-xs text-[10px] hover:opacity-100 p-0 underline"
                  >
                    <Link href={`https://wtia.vercel.app/`} target="_blank">
                      https://wtia.vercel.app
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="mt-2 pl-2 flex flex-col gap-1">
                <p className="text-muted-foreground text-xs lg:text-sm text-justify">
                  Developed an open-source terminal-style web music player with
                  Vite, TypeScript, and React for client-side local file
                  playback; built a modular Zustand architecture with
                  independent stores for library, controls, and settings to
                  reduce re-renders and improve maintainability; and enhanced UX
                  with vim-style keyboard shortcuts, fast metadata extraction
                  via music-metadata, along with Optimistic UI and Suspense for
                  optimized performance.
                </p>
              </div>
            </li>
            <li className="flex flex-col">
              <div className="flex items-center">
                <span className="shrink-0 duration-100 hover:scale-95 bg-primary font-bold text-secondary relative -left-6 w-12 h-12 flex items-center justify-center">
                  3
                </span>
                <div className="flex flex-col items-start relative -left-1">
                  <span className="text-base lg:text-xl font-semibold">
                    Twit the clone of X (twitter)
                  </span>
                  <Button
                    asChild
                    variant={"link"}
                    className="opacity-60 duration-100 lg:text-xs text-[10px] hover:opacity-100 p-0 underline"
                  >
                    <Link href={`https://twit-drab.vercel.app`} target="_blank">
                      https://twit-drab.vercel.app
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="mt-2 pl-2 flex flex-col gap-1">
                <p className="text-muted-foreground text-xs lg:text-sm text-justify">
                  Built a full-stack Twitter clone with Next.js 15, TypeScript,
                  MongoDB, and Tailwind, featuring secure authentication
                  (NextAuth.js), global state with Zustand, server actions for
                  posts/comments/likes, follow system, personalized feeds,
                  Cloudinary media uploads, search, responsive mobile-first UI,
                  and route protection (requiring sign-in) with strict type
                  safety and scalable architecture.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col order-1 lg:order-2">
          <h1 className="text-lg sm:text-xl lg:text-2xl mb-4 font-extrabold">
            Work EXP
          </h1>
          <ul className="border-l flex flex-col gap-4 relative py-4 ml-5 lg:ml-6">
            <li className="flex flex-col">
              <div className="flex items-center">
                <span className="shrink-0 bg-primary duration-100 hover:scale-95 font-bold text-secondary relative -left-6 w-12 h-12 flex items-center justify-center">
                  1
                </span>
                <div className="flex flex-col items-start relative -left-1">
                  <span className="text-base lg:text-xl font-semibold">
                    Online super market
                  </span>
                  <Button
                    asChild
                    variant={"link"}
                    className="opacity-60 duration-100 lg:text-xs text-[10px] hover:opacity-100 p-0 underline"
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
                <p className="text-muted-foreground text-xs lg:text-sm text-justify">
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
