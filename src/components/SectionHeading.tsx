import ScrollReveal from "./ScrollReveal";

export default function SectionHeading({ title }: { title: string }) {
  return (
    <ScrollReveal>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
    </ScrollReveal>
  );
}
