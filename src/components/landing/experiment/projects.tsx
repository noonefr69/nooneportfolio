import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Projects() {
  return (
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
              Built a pixel-perfect landing page, delivering a fully responsive
              interface that adapts flawlessly across all devices (from desktops
              to smart refrigerators), with comprehensive hover and focus states
              for every interactive element to ensure a polished and accessible
              user experience.
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
              Vite, TypeScript, and React for client-side local file playback;
              built a modular Zustand architecture with independent stores for
              library, controls, and settings to reduce re-renders and improve
              maintainability; and enhanced UX with vim-style keyboard
              shortcuts, fast metadata extraction via music-metadata, along with
              Optimistic UI and Suspense for optimized performance.
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
              Cloudinary media uploads, search, responsive mobile-first UI, and
              route protection (requiring sign-in) with strict type safety and
              scalable architecture.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
