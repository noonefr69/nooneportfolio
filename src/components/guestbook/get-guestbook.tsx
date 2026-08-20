import { PinIcon } from "lucide-react";
import GuestbookMessage, { GuestbookMsgProps } from "./message";

export default async function GetGuestbook() {
  const res = await fetch(`${process.env.APP_URL}/api/guestbook`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch guestbook");
  }

  const guestbookMsgs: GuestbookMsgProps[] = await res.json();

  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden text-sm pr-2">
      <div className="group duration-100 hover:bg-accent cursor-default flex gap-2 py-2 hover:px-2 items-baseline">
        <span className="text-xs shrink-0 text-muted-foreground">
          8/20/2026 12:12
        </span>
        <span className="text-primary font-bold">noone</span>
        <p className="w-full flex items-center justify-between text-foreground whitespace-break-spaces text-justify truncate">
          hi, no sign-in required. please be nice :)
          <PinIcon className="group-hover:rotate-45 sm:flex hidden duration-100 size-4 rotate-0" />
        </p>
      </div>
      {guestbookMsgs.map((msg) => (
        <GuestbookMessage msg={msg} key={msg._id} />
      ))}
    </div>
  );
}
