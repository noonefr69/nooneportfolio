"use client";

import "react-activity-calendar/tooltips.css";
import { Spinner } from "@/components/ui/spinner";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ActivityCalendar } from "react-activity-calendar";
import { BirdIcon, SnailIcon } from "lucide-react";

const LIGHT_COLORS = ["#ebedf0", "#BCD5A1", "#7BAE54", "#42830F", "#216609"];
const DARK_COLORS = ["#2B2B2B", "#BCD5A1", "#7BAE54", "#42830F", "#216609"];

type Activity = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

export default function GitHubContainer() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const currentDay = new Date().getDate();
  const { resolvedTheme } = useTheme();
  const [year, setYear] = useState(currentYear);
  const [data, setData] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await fetch(`/api/github?year=${year}`);
      const result = await res.json();
      setData(result);
      setLoading(false);
    }
    fetchData();
  }, [year]);

  const years = Array.from(
    { length: currentYear - 2023 },
    (_, i) => currentYear - i,
  );

  return (
    <section className="mt-10">
      <h1 className="text-lg sm:text-2xl lg:text-3xl font-extrabold mb-6">
        Contribution Graph{" "}
        <span className="lg:text-xl text-muted-foreground opacity-60">
          (
          {`${currentYear}/${(currentMonth + 1).toLocaleString().padStart(2, "0")}/${currentDay.toLocaleString().padStart(2, "0")}`}
          )
        </span>
      </h1>
      <div className="flex gap-4">
        <Card className="relative min-w-0 overflow-visible flex-1 min-h-56 justify-center ">
          <span className="absolute flex items-end gap-2 group left-4 bottom-0 duration-100 hover:left-5">
            <SnailIcon className="group-hover:rotate-6 duration-200" />
            <i className="text-sm group-hover:opacity-100 opacity-0 duration-200">
              Turbo!
            </i>
          </span>
          <span className="absolute flex items-start gap-2 group right-2 -top-6 duration-100 hover:right-3">
            <i className="text-sm group-hover:-rotate-3 group-hover:opacity-100 opacity-0 duration-200">
              Jick Jick
            </i>
            <BirdIcon className="group-hover:rotate-6 duration-200 -scale-x-90" />
          </span>
          <CardContent className="pt-6 flex items-center justify-center">
            {loading ? (
              <Spinner className="size-10" />
            ) : (
              <>
                <ActivityCalendar
                  data={data}
                  theme={{
                    light: LIGHT_COLORS,
                    dark: DARK_COLORS,
                  }}
                  colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
                  tooltips={{
                    activity: {
                      text: ({ level, date }) =>
                        `${level} activities on ${new Date(date).toLocaleDateString("en-US")}`,
                      placement: "top",
                      offset: 6,
                      hoverRestMs: 300,
                      transitionStyles: {
                        duration: 100,
                        common: { fontFamily: "monospace" },
                      },
                      withArrow: true,
                    },
                  }}
                />
              </>
            )}
          </CardContent>
        </Card>
        <div className="hidden md:flex flex-col gap-2">
          {years
            .map((y) => (
              <Button
                key={y}
                className="flex-1 font-bold transition-none"
                onClick={() => setYear(y)}
                variant={year === y ? "default" : "outline"}
              >
                {y}
              </Button>
            ))
            .slice(0, 5)}
        </div>
      </div>
    </section>
  );
}
