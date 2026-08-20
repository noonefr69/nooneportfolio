import { Card, CardContent } from "@/components/ui/card";
import GuestbookForm from "@/components/guestbook/form";
import GetGuestbook from "@/components/guestbook/get-guestbook";
import { Suspense } from "react";
import { Spinner } from "@/components/ui/spinner";
import Ascii from "@/components/guestbook/ascii";

export default function GuestBook() {
  return (
    <div className="mt-20">
      <section className="flex-1 min-h-0 h-[80vh] lg:h-[60vh] grid grid-cols-9 gap-2">
        {/* Left Card */}
        <Ascii />

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
            <Suspense
              fallback={
                <div className="flex items-center justify-center flex-1 overflow-y-auto overflow-x-hidden text-sm pr-2">
                  <Spinner className="lg:size-10" />
                </div>
              }
            >
              <GetGuestbook />
            </Suspense>
            <GuestbookForm />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
