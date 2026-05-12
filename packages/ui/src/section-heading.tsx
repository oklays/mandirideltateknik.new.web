import type { PropsWithChildren } from "react";
import { cn } from "./utils";

type SectionHeadingProps = PropsWithChildren<{
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}>;

export function SectionHeading({
  align = "left",
  className,
  description,
  eyebrow,
  title,
  children
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-4",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-4xl uppercase tracking-[0.06em] text-bms-primary md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-7 text-bms-secondary">
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}

