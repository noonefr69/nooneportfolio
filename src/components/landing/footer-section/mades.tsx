import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Mades() {
  return (
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
              src={`/techs/vercel.svg`}
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
              src={`/techs/nextjs.svg`}
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
              src={`/techs/tailwindcss.svg`}
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
  );
}
