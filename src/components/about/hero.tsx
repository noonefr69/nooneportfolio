import { MapPinIcon } from "lucide-react";
import { Pixelify_Sans } from "next/font/google";
import Image from "next/image";

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
});

export default function AboutHero() {
  return (
    <section className="grid lg:grid-cols-6 gap-4">
      <div className="lg:col-span-4">
        <h1
          className={`flex items-center justify-center lg:justify-start text-xl md:text-3xl lg:text-4xl font-semibold lg:font-bold ${pixelifySans.className}`}
        >
          <span className="font-thin text-3xl lg:text-5xl">~</span>$ whoami?
        </h1>
        <h2
          className={`text-2xl md:text-4xl text-center lg:text-start lg:text-5xl font-semibold lg:font-bold ${pixelifySans.className}`}
        >
          Kasra M. Hosseini
        </h2>
        <h3
          className={`mt-2 mb-4 lg:mb-0 flex justify-center lg:justify-start items-center gap-1 text-base md:text-lg lg:text-xl font-semibold lg:font-bold lg:text-start text-center ${pixelifySans.className}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 aspect-square text-black dark:text-[#f2eede]"
            role="img"
            aria-label="pin"
          >
            <path d="M13 23h-2v-2h2v2Zm-2-2H9v-2h2v2Zm4 0h-2v-2h2v2Zm-6-2H7v-2h2v2Zm8 0h-2v-2h2v2ZM7 17H5v-3h2v3Zm12 0h-2v-3h2v3ZM5 14H3V6h2v8Zm9 0h-4v-2h4v2Zm7 0h-2V6h2v8Zm-11-2H8V8h2v4Zm6 0h-2V8h2v4Zm-2-4h-4V6h4v2ZM7 6H5V4h2v2Zm12 0h-2V4h2v2Zm-2-2H7V2h10v2Z" />
          </svg>
          Iran, East Azerbaijan, Tabriz
        </h3>
        <p className="lg:text-base text-sm mt-2 lg:text-start text-center text-muted-foreground">
          I don’t have much to say about myself, but at least I know that I’m a
          self-learner. I try to contribute. I started programming ’cause why
          not.
        </p>
        <p className="lg:text-base text-sm mt-2 lg:text-start text-center text-muted-foreground">
          Then I noticed programming is not just code, so I kinda cooked. But
          since I love math, it doesn’t matter.
        </p>
        <p className="lg:text-base text-sm mt-2 text-muted-foreground lg:text-start text-center">
          I’m a CS student at Azad University, Tabriz. Maybe if I study a little
          bit more, I might get into a good university.
        </p>
        <p className="lg:text-base text-sm mt-2 text-muted-foreground lg:text-start text-center">
          My mess-ups keep leveling up day by day. I’m looking for interesting
          projects to contribute to.
        </p>
        <p className="lg:text-base text-sm mt-2 text-muted-foreground lg:text-start text-center">
          Maybe in another life, I’m happy.
        </p>
      </div>
      <div className="lg:col-span-2 relative">
        <span className="absolute -left-1 -top-1 sm:left-1/4 lg:-left-2 lg:-top-2 duration-100 hover:tracking-widest -rotate-6 hover:-rotate-12">
          fr
        </span>
        <Image
          src={`/me2.jpg`}
          alt="mefr"
          width={1980}
          height={1080}
          className="lg:w-full sm:w-1/2 mx-auto duration-100 hover:scale-88 object-cover scale-90 dark:opacity-80 active:shadow-none active:translate-y-1 dark:hover:shadow-[-10px_-10px_0px_#f2eede] hover:shadow-[-10px_-10px_0px_black] shadow-[10px_10px_0px_0px_black] dark:shadow-[10px_10px_0px_0px_#f2eede]"
        />
        <p className="text-center lg:text-end text-muted-foreground text-xs lg:text-sm font-semibold duration-100 hover:opacity-100 opacity-70">
          Don{`'`}t wait for the moon, because I don{`'`}t go out of my room...
        </p>
      </div>
    </section>
  );
}
