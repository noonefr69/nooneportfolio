import Mades from "./mades";
import Quote from "./quote";

export default function FooterSection() {
  return (
    <footer className="py-32 flex lg:flex-row flex-col gap-6 lg:gap-0 items-center justify-between">
      <Mades />
      <Quote />
    </footer>
  );
}
