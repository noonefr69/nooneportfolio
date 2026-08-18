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
          className={`text-xl md:text-3xl lg:text-4xl font-semibold lg:font-bold ${pixelifySans.className}`}
        >
          ~$ whoami?
        </h1>
        <h2
          className={`text-2xl md:text-4xl lg:text-5xl font-semibold lg:font-bold ${pixelifySans.className}`}
        >
          Kasra M. Hosseini
        </h2>
        <h3 className="mt-2 mb-4 lg:mb-0 flex items-center gap-2 text-base md:text-lg lg:text-xl font-semibold lg:font-bold lg:text-start text-center ${pixelifySans.className}">
          <MapPinIcon /> Iran, East Azerbaijan, Tabriz
        </h3>
        <p className="lg:text-base text-sm mt-2 text-muted-foreground">
          I don’t have much to say about myself, but at least I know that I’m a
          self-learner. I try to contribute. I started programming ’cause why
          not.
        </p>
        <p className="lg:text-base text-sm mt-2 text-muted-foreground">
          Then I noticed programming is not just code, so I kinda cooked. But
          since I love math, it doesn’t matter.
        </p>
        <p className="lg:text-base text-sm mt-2 text-muted-foreground">
          I’m a CS student at Azad University, Tabriz. Maybe if I study a little
          bit more, I might get into a good university.
        </p>
        <p className="lg:text-base text-sm mt-2 text-muted-foreground">
          My mess-ups keep leveling up day by day. I’m looking for interesting
          projects to contribute to. If something happens to me, it’s my fault.
        </p>
        <p className="lg:text-base text-sm mt-2 text-muted-foreground">
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
        <p className="text-end text-muted-foreground text-xs lg:text-sm font-semibold duration-100 hover:opacity-100 opacity-70">
          Don{`'`}t wait for the moon, because I don{`'`}t go out of my room...
        </p>
      </div>
    </section>
  );
}
