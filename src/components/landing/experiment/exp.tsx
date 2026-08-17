import Work from "./work";
import Projects from "./projects";

export default function ExpSection() {
  return (
    <section className="mt-16 grid lg:grid-cols-2 gap-4">
      <Projects />
      <Work />
    </section>
  );
}
