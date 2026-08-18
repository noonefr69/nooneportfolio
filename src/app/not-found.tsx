import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-svh lg:h-[89vh] flex flex-col items-center justify-center pt-16">
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
