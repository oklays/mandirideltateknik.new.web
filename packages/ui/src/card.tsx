import type { HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "./utils";

export function Card({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      className={cn(
        "rounded-xl border border-bms-divider bg-white p-6 shadow-card transition-shadow hover:shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

