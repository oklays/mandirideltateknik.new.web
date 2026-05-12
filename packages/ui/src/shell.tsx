import type { HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "./utils";

export function Shell({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-4 md:px-6", className)} {...props}>
      {children}
    </div>
  );
}

