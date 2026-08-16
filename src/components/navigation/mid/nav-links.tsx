import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { navLinks } from "@/consts/navLinks";
import Link from "next/link";

export default function NavLinks() {
  return (
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
  );
}
