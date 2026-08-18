import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-svh lg:h-[89vh] flex flex-col items-center justify-center pt-16">
      <Image
        src={`/ah.jpg`}
        alt="ahhhhh"
        width={1980}
        height={1080}
        className="w-32 aspect-square ring-2 ring-primary mb-4 duration-100 hover:scale-95 hover:ring-4 active:top-1 relative hover:-scale-x-90 hover:-top-1"
      />
      <p className="lg:text-2xl text-xl font-semibold">404, page not found.</p>
      <p className="lg:text-lg font-semibold">like my life...</p>
      <div className="flex items-center mt-2 gap-2">
        <Button asChild variant={"secondary"}>
          <Link href="/">return home</Link>
        </Button>
      </div>
    </div>
  );
}
