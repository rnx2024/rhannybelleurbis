import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl space-y-3", className)}>
      {eyebrow ? <div className="text-xs font-semibold uppercase tracking-[0.32em] text-foreground/60">{eyebrow}</div> : null}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">{title}</h2>
      {description ? <p className="text-base leading-7 text-muted-foreground">{description}</p> : null}
    </div>
  );
}
