import HeroSection from "@/components/landing/hero-section";
import LilNavigator from "@/components/navigation/lil-navigator";
import GitHubContainer from "@/components/landing/github/github-container";
import ExpSection from "@/components/landing/experiment/exp";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-svh h-400 gap-4 p-2">
      <LilNavigator />
      <HeroSection />
      <GitHubContainer />
      <ExpSection />
      <footer className="py-32 flex lg:flex-row flex-col gap-6 lg:gap-0 items-center justify-between">
        <h1 className="flex items-center sm:flex-row flex-col gap-2">
          Made with:
          <div className="flex items-center flex-wrap gap-1">
            <Button
              asChild
              variant={"secondary"}
              className="flex items-center flex-row"
              size={"sm"}
            >
              <Link href={`https://vercel.com`} target="_blank">
                <Image
                  src={`/vercel.svg`}
                  alt="vercel.svg"
                  width={1980}
                  height={1080}
                  className="h-3 w-3 dark:invert invert-0"
                />
                vercel
              </Link>
            </Button>
            <Button asChild variant={"outline"}>
              <Link href={`https://nextjs.org`} target="_blank">
                <Image
                  src={`/nextjs.svg`}
                  alt="nextjs.svg"
                  width={1980}
                  height={1080}
                  className="h-5 w-5 dark:invert invert-0"
                />
                nextjs
              </Link>
            </Button>
            <Button
              asChild
              variant={"default"}
              className="flex items-center flex-row"
              size={"xs"}
            >
              <Link href={`https://tailwindcss.com`} target="_blank">
                <Image
                  src={`/tailwindcss.svg`}
                  alt="tailwindcss.svg"
                  width={1980}
                  height={1080}
                  className="h-2 w-2 invert dark:invert-0"
                />
                tailwindcss
              </Link>
            </Button>
          </div>
        </h1>
        <p className="flex flex-col">
          <span>No copyright. You ask why? </span>
          <span className="ml-8 flex text-center items-center lg:flex-row flex-col gap-2">
            Because the things you own end up owning you
            <Image
              src={`/tyler-durden.jpg`}
              alt="tyler"
              width={1980}
              height={1080}
              className="object-cover w-16 h-10 duration-100 hover:scale-95 border-2 border-primary"
            />
          </span>
        </p>
      </footer>
    </div>
  );
}
