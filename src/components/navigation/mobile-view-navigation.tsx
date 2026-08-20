import Image from "next/image";
import { Card } from "../ui/card";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";

export default function MobileViewNavigation() {
  return (
    <div className="py-4 lg:hidden flex justify-between items-center border-b sticky top-0 bg-background z-50">
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
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>This action cannot be undone.</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
