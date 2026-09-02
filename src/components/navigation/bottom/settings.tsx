"use client";

import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SettingsIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useVideoPlaying } from "@/store/useVideoPlaying";
import { Button } from "@/components/ui/button";

export default function Settings() {
  const togglePlaying = useVideoPlaying((state) => state.togglePlaying);
  return (
    <Card className="flex flex-col items-center justify-between w-16 bg-transparent">
      <Tooltip>
        <TooltipTrigger className="hover:scale-95 duration-100">
          <div className="w-6 h-6 rounded-full! bg-primary" />
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Color</p>
        </TooltipContent>
      </Tooltip>
      <Dialog>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger className="cursor-pointer hover:scale-95 duration-100">
              <div className="flex items-center justify-center">
                <SettingsIcon />
              </div>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Settings</p>
          </TooltipContent>
        </Tooltip>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              Settings
            </DialogTitle>
          </DialogHeader>
          <Button onClick={() => togglePlaying()}>Play / Pause</Button>
        </DialogContent>
      </Dialog>
    </Card>
  );
}
