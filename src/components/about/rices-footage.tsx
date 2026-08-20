import Image from "next/image";

export default function RicesFootage() {
  return (
    <section className="mt-16">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8 sm:gap-10 lg:gap-2 px-2">
        <Image
          src={`/rices/rice1.png`}
          alt="rice1"
          width={1980}
          height={1080}
          className="lg:hover:flex-3 flex-1 lg:min-w-0 lg:w-100 relative lg:translate-y-2 duration-100 hover:scale-95 active:translate-y-px active:shadow-none shadow-[-8px_8px_0px_black] dark:shadow-[#f2eede] dark:opacity-80"
        />
        <Image
          src={`/rices/rice3.png`}
          alt="rice1"
          width={1980}
          height={1080}
          className="lg:hover:flex-3 flex-1 lg:min-w-0 lg:w-100 relative lg:-translate-y-2 duration-100 hover:scale-95 dark:shadow-[#f2eede] dark:opacity-80 shadow-[0px_10px_0px_black] active:translate-y-px active:shadow-[0px_-10px_0px_black]"
        />
        <Image
          src={`/rices/rice2.png`}
          alt="rice1"
          width={1980}
          height={1080}
          className="lg:hover:flex-3 flex-1 lg:min-w-0 lg:w-100 relative lg:translate-y-2 duration-100 hover:scale-95 dark:shadow-[#f2eede] dark:opacity-80 shadow-[10px_10px_0px_black] active:translate-y-1 active:shadow-none"
        />
      </div>

      <h1 className="lg:text-xl font-semibold text-lg mt-16 sm:mt-20 text-center ">
        cool right. right???
      </h1>
    </section>
  );
}
