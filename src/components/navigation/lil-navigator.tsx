import { ToggleTheme } from "@/components/toggle-theme";
import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { LanguagesIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function LilNavigator() {
  return (
    <Card className="min-h-16 ml-2 h-16 bg-transparent w-fit gap-2 px-4 hidden lg:flex flex-row items-center mt-6">
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
      {/*<DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"secondary"} size={"icon-xs"}>
            <LanguagesIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center" sideOffset={10}>
          <DropdownMenuGroup>
            <DropdownMenuLabel>Languages</DropdownMenuLabel>
            <DropdownMenuItem className="p-0">
              <Link href={`/`} className="w-full p-2 h-full">
                En
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="p-0">
              <Link href={`/`} className="w-full p-2 h-full flex items-center">
                Fa{" "}
                <span className="text-sm text-muted-foreground">
                  (underdevelopment)
                </span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>*/}
    </Card>
  );
}
