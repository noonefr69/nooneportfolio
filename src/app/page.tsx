import { ToggleTheme } from "@/components/toggle-theme";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-svh h-400 gap-4">
      <Card className="h-16 bg-transparent w-fit gap-2 px-4 flex flex-row items-center mt-6">
        <ToggleTheme />
        <Button variant={"ghost"} size={"sm"} asChild>
          <Link
            target="_blank"
            href={`https://github.com/noonefr69/portfoliopaper`}
          >
            Source
          </Link>
        </Button>
        <video
          className="w-16 object-cover my-6 h-10 hover:ring"
          muted
          autoPlay
          loop
        >
          <source src="/gifs/vid3.MP4" type="video/mp4" />
          format error.
        </video>
      </Card>
      Page
    </div>
  );
}
