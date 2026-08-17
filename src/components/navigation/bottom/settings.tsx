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

export default function Settings() {
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
              Help me <FaceSlightlyFrowningIcon />
            </DialogTitle>
            <DialogDescription>
              I don{`'`}t know what should I put here :)
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </Card>
  );
}
