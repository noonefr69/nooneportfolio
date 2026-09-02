"use client";

import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaceSlightlyFrowningIcon, SettingsIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useVideoPlaying } from "@/store/useVideoPlaying";
import { Button } from "@/components/ui/button";

export default function Settings() {
  const startPlying = useVideoPlaying((state) => state.startPlaying);
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
            <DialogTitle className="flex items-center gap-2">
              settings
            </DialogTitle>
            <DialogDescription>
              <Button onClick={startPlying}>play/pause</Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </Card>
  );
}
