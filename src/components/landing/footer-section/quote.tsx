import Image from "next/image";

export default function Quote() {
  return (
    <p className="flex flex-col">
      <span>No copyright. You ask why? </span>
      <span className="ml-8 flex text-end items-center lg:flex-row flex-col gap-2">
        Because the things you own end up owning you
        <Image
          src={`/webps/tyler.webp`}
          alt="Tyler Durden"
          width={1400}
          height={700}
          className="object-cover w-16 h-10 duration-100 hover:scale-95"
        />
      </span>
    </p>
  );
}
