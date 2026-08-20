import { Card, CardContent } from "@/components/ui/card";
import GuestbookForm from "@/components/guestbook/form";
import GuestbookMessage from "@/components/guestbook/message";
import { PinIcon } from "lucide-react";

export default async function GuestBook() {
  const res = await fetch(`${process.env.APP_URL}/api/guestbook`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch guestbook");
  }

  const guestbookMsgs = await res.json();
  // console.log(guestbookMsgs);

  return (
    <div className="mt-20">
      <section className="flex-1 min-h-0 h-[80vh] lg:h-[60vh] grid grid-cols-9 gap-2">
        {/* Left Card */}
        <Card className="hidden lg:flex lg:col-span-3">
          <CardContent className="flex items-center justify-center h-full group">
            <h1 className="group-hover:animate-ping">commin{"'"} soon.</h1>
          </CardContent>
        </Card>

        {/* Right Card (Chat UI) */}
        <Card className="col-span-9 lg:col-span-6 flex flex-col overflow-hidden p-0">
          <CardContent className="flex-1 flex flex-col h-full overflow-hidden pt-3">
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4 border-b border-border pb-2">
              guestbook
              <pre className="flex items-end hover:tracking-tighter duration-100 hover:scale-99 group">
                ᓚ₍ ^. ̫ .^₎
                <span className="text-[10px] group-hover:rotate-6 group-hover:text-xs opacity-0 group-hover:opacity-100 duration-75">
                  meow
                </span>
              </pre>
            </div>
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden text-sm pr-2">
              {/* Dummy Message 1 */}

              <div className="duration-100 hover:bg-accent py-2 relative group text-justify hover:px-2 cursor-default space-x-2 overflow-hidden truncate">
                <span className="text-xs shrink-0 text-muted-foreground">
                  8/20/2026 14:14
                </span>
                <span className="text-primary font-bold inline">noone:</span>
                <p className="text-foreground inline whitespace-break-spaces">
                  hi
                </p>
                <span className="rotate-45 absolute right-0 top-1/2 -translate-y-1/2 group-hover:right-2 duration-100">
                  <PinIcon className="size-4" />
                </span>
              </div>
              {guestbookMsgs.map((msg) => (
                <GuestbookMessage msg={msg} key={msg._id} />
              ))}
            </div>
            <GuestbookForm />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
