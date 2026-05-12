import type { HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "./utils";

export function Badge({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLSpanElement>>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

