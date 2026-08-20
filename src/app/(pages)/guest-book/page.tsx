"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// 1. Create the form schema
const formSchema = z.object({
  username: z.string().min(1, "is required.").max(8, "Max 8 characters."),
  message: z
    .string()
    .min(1, "Message cannot be empty.")
    .max(200, "Max 200 characters."),
  human: z
    .boolean()
    .refine((val) => val === true, "Please verify you are human."),
});

export default function GuestBook() {
  // 2. Initialize the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      message: "",
      human: false,
    },
  });

  // 3. Dummy submit function (UI only)
  function onSubmit(data: z.infer<typeof formSchema>) {
    toast("Guestbook submission:", {
      description: (
        <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
    });
    form.reset();
  }

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

            {/* Input Area - Wrapped in Form */}
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-4 pt-4 border-t border-border space-y-3"
            >
              {/* Row 1: Username & Bot Check */}
              <div className="flex items-center gap-2">
                <div className="flex flex-col w-full max-w-30">
                  <Controller
                    name="username"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <>
                        <Input
                          {...field}
                          type="text"
                          placeholder="username"
                          className={`h-8 text-sm focus-visible:ring-0 ${fieldState.invalid ? "border-destructive" : ""}`}
                          aria-invalid={fieldState.invalid}
                        />
                        {/*{fieldState.invalid && (
                          <span className="text-xs text-destructive mt-1 absolute bottom-0 left-32 ">
                            {fieldState.error?.message}
                          </span>
                        )}*/}
                      </>
                    )}
                  />
                </div>

                <div className={`flex flex-col items-end`}>
                  <Controller
                    name="human"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Card
                        className={`p-2 ${fieldState.invalid ? "border-destructive ring-destructive outline-destructive" : ""}`}
                      >
                        <label className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer select-none">
                          <Input
                            type="checkbox"
                            checked={field.value}
                            onChange={field.onChange}
                            className={`accent-primary h-3 w-3 cursor-pointer ${fieldState.invalid ? "border-destructive" : ""}`}
                            aria-invalid={fieldState.invalid}
                          />
                          human?
                        </label>
                      </Card>
                    )}
                  />
                  {/*{form.formState.errors.human && (
                    <span className="text-xs text-destructive mt-1">
                      {form.formState.errors.human.message}
                    </span>
                  )}*/}
                </div>
              </div>

              {/* Row 2: Message & Send */}
              <div className="flex flex-col gap-2 pb-3 relative">
                <Controller
                  name="message"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <>
                      <div className="flex gap-2">
                        <Input
                          {...field}
                          type="text"
                          placeholder="type a message..."
                          className={`h-8 flex-1 text-sm focus-visible:ring-0 ${fieldState.invalid ? "border-destructive" : ""}`}
                          aria-invalid={fieldState.invalid}
                        />
                        <Button
                          type="submit"
                          variant="outline"
                          size="sm"
                          className="h-8 text-sm"
                        >
                          send -&gt;
                        </Button>
                      </div>
                      {/*{fieldState.invalid && (
                        <span className="text-xs text-destructive absolute right-24 bottom-5">
                          {fieldState.error?.message}
                        </span>
                      )}*/}
                    </>
                  )}
                />
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
