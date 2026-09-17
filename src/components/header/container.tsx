import Image from "next/image";
import Title from "./title";

export default function HeaderContainer() {
    return (
        <header className="flex items-center justify-between gap-16">
            <Title />
            <Image
                src={`/man.webp`}
                alt="me frfr"
                width={1980}
                height={1080}
                className="saturate-0 hidden sm:block sm:w-24 lg:w-32 aspect-square object-cover md:hover:shadow-[6px_6px_0px_white] md:hover:-translate-y-px md:shadow-[0px_0px_0px_white] duration-75 rounded-full"
            />
        </header>
    );
}
