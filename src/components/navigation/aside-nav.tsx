"use client";

import { Card } from "@/components/ui/card";
import {
  CircleUserRoundIcon,
  FolderOpenDotIcon,
  HomeIcon,
  SettingsIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const navLinks = [
  { label: "Home", href: "/", icon: HomeIcon },
  { label: "Projects", href: "/projects", icon: FolderOpenDotIcon },
  { label: "About me", href: "/about-me", icon: CircleUserRoundIcon },
];

export default function AsideNav() {
  return (
    <div className="fixed top-0 bottom-0 flex flex-col items-center justify-between py-6">
      <Card className="w-16 aspect-square bg-transparent">
        <Link
          href={`/`}
          className="h-full w-full flex items-center justify-center hover:animate-spin"
        >
          <Image
            src={`/trans.png`}
            width={1980}
            height={1080}
            alt="logo.png"
            className="aspect-square scale-200 object-cover"
          />
        </Link>
      </Card>
      <Card className="flex flex-col items-center w-16 justify-between bg-transparent">
        {navLinks.map((link) => (
          <Tooltip key={link.href}>
            <TooltipTrigger className="hover:scale-95 duration-100">
              <Link href={link.href}>{<link.icon />}</Link>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>{link.label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </Card>
      <Card className="flex flex-col items-center justify-between w-16 bg-transparent">
        <Tooltip>
          <TooltipTrigger className="hover:scale-95 duration-100">
            <Link
              href={`https://github.com/noonefr69/portfoliopaper`}
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
            <p>{"kir"}</p>
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
            <p>{"kir"}</p>
          </TooltipContent>
        </Tooltip>
      </Card>
    </div>
  );
}
