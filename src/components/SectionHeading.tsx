import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  label: string;
  title: string;
}

export default function SectionHeading({ label, title }: SectionHeadingProps) {
  return (
    <ScrollReveal>
      <p className="text-xs font-medium tracking-[0.2em] text-fg-muted uppercase">{label}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
    </ScrollReveal>
  );
}
