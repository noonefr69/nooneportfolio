import { Button } from "@/components/ui/button";
import { techIUse } from "@/consts/tech-i-use";
import Image from "next/image";

export default function TechUsed() {
  return (
    <section className="mt-16">
      <h1 className="text-xl lg:text-2xl font-semibold">Tech stack I use:</h1>
      <div className="grid grid-cols-3 lg:grid-cols-5 mt-6 gap-1">
        {techIUse.map((tech) => (
          <Button
            className="cursor-default flex flex-col sm:flex-row w-full h-fit text-start justify-start py-2"
            key={tech._id}
          >
            <Image
              src={tech.icon}
              alt={tech.label}
              width={1980}
              height={1080}
              className="object-cover h-10 w-10 scale-75 filter-[invert(1)_saturate(0)] dark:filter-[saturate(0)]"
            />
            <span className="flex flex-col items-start min-w-0 flex-1">
              <h2 className="truncate w-full">{tech.label}</h2>
              <h4 className="truncate hidden sm:block w-full text-start">
                {tech.description}
              </h4>
            </span>
          </Button>
        ))}
      </div>
    </section>
  );
}
