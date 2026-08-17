"use client";

import "react-activity-calendar/tooltips.css";
import { Spinner } from "@/components/ui/spinner";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ActivityCalendar } from "react-activity-calendar";
import { BirdIcon, CatIcon, SnailIcon } from "lucide-react";

type Activity = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

export default function GitHubContainer() {
  const currentYear = new Date().getFullYear();
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
    <section className="mt-8">
      <h1 className="text-lg sm:text-2xl lg:text-3xl font-extrabold mb-6">
        Contribution Graph
      </h1>
      <div className="flex gap-4">
        <Card className="relative min-w-0 overflow-visible flex-1 min-h-56 justify-center ">
          <span className="absolute left-4 bottom-0">
            <SnailIcon />
          </span>
          <span className="absolute -top-6 right-0 -scale-x-90">
            <BirdIcon />
          </span>
          <CardContent className="pt-6 flex items-center justify-center">
            {loading ? (
              <Spinner className="size-10" />
            ) : (
              <>
                <ActivityCalendar
                  data={data}
                  theme={{
                    light: [
                      "#E8E1C8",
                      "#BCD5A1",
                      "#7BAE54",
                      "#42830F",
                      "#216609",
                    ],
                    dark: [
                      "#2B2B2B",
                      "#BCD5A1",
                      "#7BAE54",
                      "#42830F",
                      "#216609",
                    ],
                  }}
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
        <div className="flex flex-col gap-2">
          {years
            .map((y) => (
              <Button
                key={y}
                className="flex-1 font-bold"
                onClick={() => setYear(y)}
                // variant={(year === y ? "default" : "outline") ?? "outline"}
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
