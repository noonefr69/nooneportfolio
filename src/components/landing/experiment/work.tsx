import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Work() {
  return (
    <div className="flex flex-col order-1 lg:order-2">
      <h1 className="text-lg sm:text-xl lg:text-2xl mb-4 font-extrabold">
        Work EXP
      </h1>
      <ul className="border-l flex flex-col gap-4 relative py-4 ml-5 lg:ml-6">
        <li className="flex flex-col">
          <div className="flex items-center">
            <span className="shrink-0 bg-primary duration-100 hover:scale-95 font-bold text-secondary relative -left-6 w-12 h-12 flex items-center justify-center">
              1
            </span>
            <div className="flex flex-col items-start relative -left-1">
              <span className="text-base lg:text-xl font-semibold">
                Online super market
              </span>
              <Button
                asChild
                variant={"link"}
                className="opacity-60 duration-100 lg:text-xs text-[10px] hover:opacity-100 p-0 underline"
              >
                <Link
                  href={`https://mohosseinimarket.vercel.app/`}
                  target="_blank"
                >
                  mohosseinimarket.vercel.app
                </Link>
              </Button>
            </div>
          </div>
          <div className="mt-2 pl-2 flex flex-col gap-1">
            <p className="text-muted-foreground text-xs lg:text-sm text-justify">
              Developed a full-featured e-commerce platform with Next.js,
              including performance optimization (Lighthouse 90+ and bundle
              reduction via RSC), secure authentication (next-auth) with route
              protection using a proxy, multi-layer filtering and search with
              shareable URL parameters and pagination, and a persistent shopping
              cart powered by Zustand with a clean UI for instant feedback and
              reduced latency.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
