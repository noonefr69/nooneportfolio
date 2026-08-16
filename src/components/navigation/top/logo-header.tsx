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
          src={`/trans.png`}
          width={1980}
          height={1080}
          alt="logo.png"
          className="aspect-square scale-200 object-cover"
        />
      </Link>
    </Card>
  );
}
