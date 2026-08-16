import { ToggleTheme } from "@/components/toggle-theme";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LanguagesIcon } from "lucide-react";
import Link from "next/link";

export default function LilNavigator() {
  return (
    <Card className="h-16 bg-transparent w-fit gap-2 px-4 hidden lg:flex flex-row items-center mt-6">
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
        className="w-16 object-cover my-6 h-10 hover:scale-95 duration-100"
        muted
        autoPlay
        loop
      >
        <source src="/gifs/vid3.MP4" type="video/mp4" />
        format error.
      </video>
      <Button variant={"secondary"} size={"icon-xs"}>
        <LanguagesIcon />
      </Button>
    </Card>
  );
}
