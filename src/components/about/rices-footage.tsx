import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function RicesFootage() {
  return (
    <section className="mt-16">
      <h1 className="lg:text-2xl font-semibold mb-4 lg:mb-8">Linux journey:</h1>
      <div className="">
        <Tabs defaultValue="mint" className="w-full">
          <TabsList className="w-full py-4 sm:py-7 px-1 sm:px-2 flex overflow-x-auto">
            <TabsTrigger
              className="cursor-pointer py-3 sm:py-5 text-sm sm:text-base lg:text-lg lg:font-semibold whitespace-nowrap"
              value="mint"
            >
              Mint Xfce
            </TabsTrigger>
            <TabsTrigger
              className="cursor-pointer py-3 sm:py-5 text-sm sm:text-base lg:text-lg lg:font-semibold whitespace-nowrap"
              value="debianLight"
            >
              Light Debian
            </TabsTrigger>
            <TabsTrigger
              className="cursor-pointer py-3 sm:py-5 text-sm sm:text-base lg:text-lg lg:font-semibold whitespace-nowrap"
              value="debianDark"
            >
              Dark Debian{" "}
              <span className="text-muted-foreground text-xs hidden sm:inline">
                (current)
              </span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="mint">
            <Carousel className="sm:mx-20">
              <CarouselContent className="sm:p-10 gap-6 sm:gap-6 m-4 sm:mx-6">
                <CarouselItem className="sm:p-4 sm:ring-4 border ring p-1 sm:border-4 hover:border-primary hover:ring-border hover:scale-98 duration-100 cursor-grab active:cursor-grabbing">
                  <Image
                    src={`/rices/mint-xfce/rice1.jpg`}
                    alt="mint-xfce"
                    width={1980}
                    height={1080}
                    className="border-4 hover:border-primary duration-100"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </TabsContent>
          <TabsContent value="debianLight">
            <Carousel className="sm:mx-20">
              <CarouselContent className="sm:p-10 gap-6 sm:gap-6 m-4 sm:mx-6">
                <CarouselItem className="sm:p-4 sm:ring-4 border ring p-1 sm:border-4 hover:border-primary hover:ring-border hover:scale-98 duration-100 cursor-grab active:cursor-grabbing">
                  <Image
                    src={`/rices/debian-light/rice1.png`}
                    alt="mint-xfce"
                    width={1980}
                    height={1080}
                    className="border-4 hover:border-primary duration-100"
                  />
                </CarouselItem>
                <CarouselItem className="sm:p-4 sm:ring-4 border ring p-1 sm:border-4 hover:border-primary hover:ring-border hover:scale-98 duration-100 cursor-grab active:cursor-grabbing">
                  <Image
                    src={`/rices/debian-light/rice2.png`}
                    alt="mint-xfce"
                    width={1980}
                    height={1080}
                    className="border-4 hover:border-primary duration-100"
                  />
                </CarouselItem>
                <CarouselItem className="sm:p-4 sm:ring-4 border ring p-1 sm:border-4 hover:border-primary hover:ring-border hover:scale-98 duration-100 cursor-grab active:cursor-grabbing">
                  <Image
                    src={`/rices/debian-light/rice3.png`}
                    alt="mint-xfce"
                    width={1980}
                    height={1080}
                    className="border-4 hover:border-primary duration-100"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </TabsContent>
          <TabsContent value="debianDark">
            <Carousel className="sm:mx-20">
              <CarouselContent className="sm:p-10 gap-6 sm:gap-6 m-4 sm:mx-6">
                <CarouselItem className="sm:p-4 sm:ring-4 border ring p-1 sm:border-4 hover:border-primary hover:ring-border hover:scale-98 duration-100 cursor-grab active:cursor-grabbing">
                  <Image
                    src={`/rices/debian-dark/rice1.png`}
                    alt="mint-xfce"
                    width={1980}
                    height={1080}
                    className="border-4 hover:border-primary duration-100"
                  />
                </CarouselItem>
                <CarouselItem className="sm:p-4 sm:ring-4 border ring p-1 sm:border-4 hover:border-primary hover:ring-border hover:scale-98 duration-100 cursor-grab active:cursor-grabbing">
                  <Image
                    src={`/rices/debian-dark/rice2.png`}
                    alt="mint-xfce"
                    width={1980}
                    height={1080}
                    className="border-4 hover:border-primary duration-100"
                  />
                </CarouselItem>
                <CarouselItem className="sm:p-4 sm:ring-4 border ring p-1 sm:border-4 hover:border-primary hover:ring-border hover:scale-98 duration-100 cursor-grab active:cursor-grabbing">
                  <Image
                    src={`/rices/debian-dark/rice3.png`}
                    alt="mint-xfce"
                    width={1980}
                    height={1080}
                    className="border-4 hover:border-primary duration-100"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
