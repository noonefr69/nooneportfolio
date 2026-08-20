import { Button } from "@/components/ui/button";
import { CodeXmlIcon, RedoIcon } from "lucide-react";
import { Pixelify_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
});

export default function HeroSection() {
  return (
    <div className="grid grid-cols-6 gap-4 mt-16">
      <div className="col-span-6 lg:col-span-4">
        <h1
          className={`text-xl md:text-3xl lg:text-4xl font-semibold lg:font-bold lg:text-start text-center ${pixelifySans.className}`}
        >
          Senior front-end engineer with a lot of la passion for computers, FOSS
          and Linux.
          <span className="font-mono text-xs lg:text-sm text-muted-foreground block">{`(don't tell anyone but I'm mid level >-<)`}</span>
        </h1>

        <p className="mt-8 lg:text-start text-center">
          I{`'`}m Kasra M. Hosseini, early 20s. Started coding at 16 to land a
          job by 18, but life threw wars and internet blackouts my way. Still
          locked in—learned React/NextJs, now building open-source to make life
          a lil easier.
        </p>
        <div className="mt-8 flex items-center justify-center lg:justify-start gap-2 flex-wrap">
          <Button asChild size={"lg"} variant={"secondary"}>
            <Link
              className="flex items-center"
              href={`https://t.me/noonefr69`}
              target="_blank"
            >
              <Image
                src={`/socials/telegram.svg`}
                alt="telegram"
                width={16}
                height={16}
                className="dark:invert"
              />
              Telegram
            </Link>
          </Button>
          <Button asChild size={"lg"} variant={"secondary"}>
            <Link
              className="flex items-center"
              href={`https://github.com/noonefr69`}
              target="_blank"
            >
              <Image
                src={`/socials/github.svg`}
                alt="github"
                width={16}
                height={16}
                className="dark:invert"
              />
              GitHub
            </Link>
          </Button>
          <Button asChild size={"lg"} variant={"secondary"}>
            <Link
              className="flex items-center"
              href={`https://pin.it/7suieUJXH`}
              target="_blank"
            >
              <Image
                src={`/socials/pinterest.svg`}
                alt="github"
                width={16}
                height={16}
                className="dark:invert"
              />
              Pinterest
            </Link>
          </Button>
          <Button asChild size={"lg"} variant={"secondary"}>
            <Link
              className="flex items-center"
              href={`https://x.com/noonefr69`}
              target="_blank"
            >
              <Image
                src={`/socials/xicon.svg`}
                alt="github"
                width={16}
                height={16}
                className="dark:invert"
              />
              Twitter
            </Link>
          </Button>
        </div>
      </div>
      <div className="col-span-6 lg:col-span-2 flex flex-col relative">
        <span className="absolute top-8 lg:right-2 sm:right-1/4 right-2 duration-100 hover:rotate-140 hover:scale-110 rotate-130">
          <RedoIcon />
        </span>
        <span className="absolute top-0 lg:right-4 sm:right-1/4 right-2 duration-100 hover:-rotate-12">
          Me
        </span>
        <span className="absolute bottom-6 sm:left-1/4 left-4 lg:left-6 hover:rotate-12 hover:scale-110 duration-100 -rotate-12">
          <CodeXmlIcon />
        </span>
        <Image
          src={`/me.JPG`}
          alt="me.JPG"
          width={1980}
          height={1080}
          className="sm:w-1/2 lg:w-full mx-auto scale-75 hover:shadow-none hover:scale-73 dark:hover:shadow-none duration-100 shadow-[10px_10px_0px_0px_black] dark:shadow-[10px_10px_0px_0px_#f2eede]"
        />
      </div>
    </div>
  );
}
