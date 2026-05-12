import type { TextareaHTMLAttributes } from "react";
import { cn } from "./utils";

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-[140px] w-full rounded-xl border border-bms-divider bg-white px-4 py-3 text-sm text-bms-primary outline-none transition-colors placeholder:text-bms-secondary focus:border-primary focus:ring-2 focus:ring-primary/20",
        className
      )}
      {...props}
    />
  );
}

