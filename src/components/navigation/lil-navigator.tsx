import { ToggleTheme } from "@/components/toggle-theme";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import VideoPlaying from "./lil-na/video-playing";

export default function LilNavigator() {
  return (
    <Card className="min-h-16 h-16 bg-transparent w-fit gap-2 px-4 hidden lg:flex flex-row items-center mt-6">
      <ToggleTheme />
      <Button variant={"ghost"} size={"sm"} asChild>
        <Link
          target="_blank"
          href={`https://github.com/noonefr69/nooneportfolio`}
        >
          Source
        </Link>
      </Button>
      <VideoPlaying />
    </Card>
  );
}
