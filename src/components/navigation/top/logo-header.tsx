import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function LogoHeader() {
  return (
    <Card className="w-16 aspect-square bg-transparent">
      <Link
        href={`/`}
        className="h-full w-full flex items-center justify-center hover:animate-spin hover:scale-95 duration-100"
      >
        <Image
          src={`/webps/logo.webp`}
          width={1920}
          height={1080}
          alt="logo.png"
          className="aspect-square scale-x-125 object-cover"
        />
      </Link>
    </Card>
  );
}
