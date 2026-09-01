"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { HeadsetIcon, RotateCcw } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";

export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-0 h-[80vh] w-full flex-col items-center justify-center gap-8 mt-16">
      <div className="flex flex-col items-center gap-3 text-center">
        <Image
          src={`/webps/error.webp`}
          alt="error image"
          width={480}
          height={360}
          className="object-cover w-48 aspect-square ring-4 ring-destructive duration-100 hover:ring-primary active:translate-y-px hover:scale-95"
        />

        <h2 className={`text-xl md:text-3xl font-bold font-mono mt-4`}>
          Oops! Something broke.
        </h2>

        <p className="max-w-md text-center text-sm md:text-base text-muted-foreground">
          {error.message ||
            "An unexpected error occurred while rendering this page."}
        </p>

        {error.digest && (
          <span className="mt-2 text-[10px] md:text-xs text-muted-foreground/60 font-mono">
            Error ID: {error.digest}
          </span>
        )}
      </div>

      <div className="flex items-center gap-2">
        <Button
          onClick={() => retry()}
          size="lg"
          variant="secondary"
          className="group flex items-center gap-2 active:translate-y-0.5 hover:scale-98 transition-transform duration-100"
        >
          <RotateCcw className="-scale-x-100 size-4 group-hover:rotate-180 transition-transform duration-300" />
          Try again
        </Button>
        <Separator orientation="vertical" />
        <Button
          onClick={() => retry()}
          size="lg"
          variant="secondary"
          className="group flex items-center gap-2 active:translate-y-0.5 hover:scale-98 transition-transform duration-100"
          asChild
        >
          <Link href={`/#socials`}>
            Contact
            <HeadsetIcon className="size-4 group-hover:rotate-12 transition-transform duration-300" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
