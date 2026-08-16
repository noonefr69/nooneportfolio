import LilNavigator from "@/components/navigation/lil-navigator";
import { Button } from "@/components/ui/button";
import { RedoIcon } from "lucide-react";
import { Pixelify_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-svh h-400 gap-4 p-2">
      <LilNavigator />
      <div className="grid grid-cols-6 gap-4 mt-16">
        <div className="col-span-6 lg:col-span-4">
          <h1
            className={`text-xl md:text-3xl lg:text-4xl font-semibold lg:font-extrabold lg:text-start text-center ${pixelifySans.className}`}
          >
            Senior front-end engineer {`(nope, I'm junior/mid-level)`} with a
            lot of passion for computers, who likes FOSS and Linux.
          </h1>
          <p className="mt-8 lg:text-start text-center">
            I{`'`}m Kasra M. Hosseini, early 20s. Started coding at 16 to land a
            job by 18, but life threw wars and internet blackouts my way. Still
            locked in—learned React/NextJs, now building open-source to make
            life a lil easier.
          </p>
          <div className="mt-8 flex items-center justify-center lg:justify-start gap-2 flex-wrap">
            <Button asChild size={"lg"} variant={"secondary"}>
              <Link
                className="flex items-center"
                href={`https://t.me/noonefr69`}
                target="_blank"
              >
                <Image
                  src={`/telegram.svg`}
                  alt="github"
                  width={16}
                  height={16}
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
                  src={`/github.svg`}
                  alt="github"
                  width={16}
                  height={16}
                />
                GitHub
              </Link>
            </Button>
          </div>
        </div>
        <div className="col-span-6 lg:col-span-2 flex flex-col relative">
          <span className="absolute top-8 lg:right-2 sm:right-1/4 right-2 rotate-130">
            <RedoIcon />
          </span>
          <span className="absolute top-0 lg:right-4 sm:right-1/4 right-2">
            Me
          </span>
          <Image
            src={`/me.jpg`}
            alt="me.JPG"
            width={1980}
            height={1080}
            className="sm:w-1/2 lg:w-full mx-auto scale-75 shadow-[10px_10px_0px_0px_black] dark:shadow-[10px_10px_0px_0px_#f2eede]"
          />
        </div>
      </div>

      {/*<Image
        src="https://ghchart.rshah.org/noonefr69"
        alt="github action chart"
        width={1980}
        height={1080}
      />*/}
    </div>
  );
}
