import Image from "next/image";
import { Card } from "../ui/card";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";
import { navLinks } from "@/consts/navLinks";
import { Separator } from "../ui/separator";
import React from "react";
import { ToggleTheme } from "../toggle-theme";

export default function MobileViewNavigation() {
  return (
    <div className="py-4 lg:hidden flex justify-between items-center border-b px-2 sticky top-0 bg-background z-50">
      <Card className="bg-transparent p-0">
        <Link href={`/`}>
          <Image
            src={`/trans.png`}
            alt="logo.png"
            width={1980}
            height={1080}
            className="object-cover w-10 duration-100 scale-125 aspect-square"
          />
        </Link>
      </Card>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="w-10 h-10" size={"icon-lg"} variant={"outline"}>
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-xl">˙𐃷˙</SheetTitle>
            <div className="flex gap-0.5 flex-col mt-8">
              {navLinks.map((link) => (
                <React.Fragment key={link.href}>
                  <Button
                    asChild
                    variant={"ghost"}
                    className="w-full flex items-center text-xl font-semibold h-fit py-2 justify-start"
                  >
                    <Link href={link.href}>
                      {<link.icon className="size-8" />}
                      {link.label}
                    </Link>
                  </Button>
                  <Separator />
                </React.Fragment>
              ))}
            </div>
          </SheetHeader>
          <SheetFooter className="flex flex-row items-center">
            <ToggleTheme />
            <Button variant={"ghost"} size={"default"} asChild>
              <Link
                target="_blank"
                href={`https://github.com/noonefr69/portfoliopaper`}
              >
                Source
              </Link>
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
