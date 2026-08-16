import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SettingsIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function GithubSetting() {
  return (
    <Card className="flex flex-col items-center justify-between w-16 bg-transparent">
      <Tooltip>
        <TooltipTrigger className="hover:scale-95 duration-100">
          <div className="w-6 h-6 rounded-full! bg-primary" />
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>{"Color"}</p>
        </TooltipContent>
      </Tooltip>
      <Dialog>
        <Tooltip>
          <DialogTrigger className="cursor-pointer">
            <TooltipTrigger asChild className="hover:scale-95 duration-100">
              <div className=" flex items-center justify-center ">
                <SettingsIcon />
              </div>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Settings</p>
            </TooltipContent>
          </DialogTrigger>
        </Tooltip>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </Card>
  );
}
