import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import dbConnect from "@/lib/db";

export default async function GuestBook() {
  await dbConnect();

  return (
    <div className="mt-20">
      <section className="flex-1 min-h-0 h-[80vh] lg:h-[60vh] grid grid-cols-9 gap-2">
        {/* Left Card */}
        <Card className="hidden lg:flex lg:col-span-3">
          <CardContent className="flex items-center justify-center h-full group">
            <h1 className="group-hover:animate-ping">commin{"'"} soon.</h1>
          </CardContent>
        </Card>

        <Card className="col-span-9 lg:col-span-6 flex flex-col overflow-hidden p-0">
          <CardContent className="flex-1 flex flex-col h-full overflow-hidden pt-3">
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4 border-b border-border pb-2">
              guestbook
              <pre className="flex items-end hover:tracking-tighter duration-100 hover:scale-99 group">
                ᓚ₍ ^. ̫ .^₎
                <pre className="text-[10px] group-hover:rotate-6 group-hover:text-xs opacity-0 group-hover:opacity-100 duration-75">
                  meow
                </pre>
              </pre>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto space-y-3 text-sm pr-2">
              {/* Dummy Message 1 */}
              <div className="flex gap-2 items-baseline">
                <span className="text-xs text-muted-foreground">14:02</span>
                <span className="text-primary font-bold">anon_1</span>
                <span className="text-foreground">
                  Love this minimal setup.
                </span>
              </div>
            </div>

            {/* Input Area */}
            <div className="mt-4 pt-4 border-t border-border space-y-3">
              {/* Row 1: Username & Bot Check */}
              <div className="flex justify-between items-center gap-4">
                <Input
                  type="text"
                  placeholder="username"
                  className="h-8 max-w-[120px] text-sm"
                />
                <label className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer select-none">
                  <Input
                    type="checkbox"
                    className="accent-primary h-3 w-3 cursor-pointer"
                  />
                  human?
                </label>
              </div>

              {/* Row 2: Message & Send */}
              <div className="flex gap-2 pb-3">
                <Input
                  type="text"
                  placeholder="type a message..."
                  className="h-8 flex-1 text-sm"
                />
                <Button variant="outline" size="sm" className="h-8 text-sm">
                  send -&gt;
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
