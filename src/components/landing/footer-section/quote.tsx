import Image from "next/image";

export default function Quote() {
  return (
    <p className="flex flex-col">
      <span>No copyright. You ask why? </span>
      <span className="ml-8 flex text-center items-center lg:flex-row flex-col gap-2">
        Because the things you own end up owning you
        <Image
          src={`/tyler-durden.jpg`}
          alt="tyler"
          width={1980}
          height={1080}
          className="object-cover w-16 h-10 duration-100 hover:scale-95 border-2 border-primary"
        />
      </span>
    </p>
  );
}
