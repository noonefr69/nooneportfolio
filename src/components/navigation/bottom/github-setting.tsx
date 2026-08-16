import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SettingsIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function GithubSetting() {
  return (
    <Card className="flex flex-col items-center justify-between w-16 bg-transparent">
      <Tooltip>
        <TooltipTrigger className="hover:scale-95 duration-100">
          <Link
            href={`https://github.com/noonefr69`}
            target="_blank"
            className="h-full w-full flex items-center justify-center"
          >
            <Image
              src={`/github.svg`}
              width={1980}
              height={1080}
              alt="logo.png"
              className="aspect-square max-w-6 object-cover"
            />
          </Link>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>{"GitHub"}</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger className="hover:scale-95 duration-100">
          <Link
            href={`/`}
            className="h-full w-full flex items-center justify-center"
          >
            <SettingsIcon />
          </Link>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Settings</p>
        </TooltipContent>
      </Tooltip>
    </Card>
  );
}
