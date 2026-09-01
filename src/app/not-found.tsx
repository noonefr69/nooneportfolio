import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex min-h-0 h-[80vh] w-full flex-col items-center justify-center gap-8 mt-16">
      <div className="flex flex-col items-center gap-1 text-center">
        <Image
          src={`/webps/not-found.webp`}
          alt="ahhh"
          width={1071}
          height={1200}
          className="object-cover w-48 aspect-square ring-4 ring-primary duration-100 hover:scale-95"
        />

        <h2 className={`text-xl md:text-3xl font-bold font-mono mt-4`}>
          404, page not found.
        </h2>

        <p className="max-w-md text-sm md:text-base text-muted-foreground text-justify">
          like my life...
        </p>
      </div>

      <div className="flex items-center gap-2">
        <Button
          asChild
          size="lg"
          variant="secondary"
          className="group flex items-center gap-2 active:translate-y-0.5 hover:scale-95 transition-transform duration-100"
        >
          <Link href="/">
            <HomeIcon className="size-4 group-hover:-rotate-12 transition-transform duration-300" />
            return home
          </Link>
        </Button>
      </div>
    </div>
  );
}
