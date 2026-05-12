import { Inbox } from "lucide-react";
import { Card } from "./card";

type EmptyStateProps = {
  title: string;
  description: string;
};

export function EmptyState({ description, title }: EmptyStateProps) {
  return (
    <Card className="flex min-h-64 flex-col items-center justify-center gap-4 text-center">
      <div className="rounded-full border border-bms-divider bg-bms-section p-4">
        <Inbox className="h-6 w-6 text-primary" />
      </div>
      <div className="space-y-2">
        <h3 className="font-display text-2xl uppercase tracking-[0.08em] text-bms-primary">{title}</h3>
        <p className="max-w-md text-sm leading-6 text-bms-secondary">
          {description}
        </p>
      </div>
    </Card>
  );
}

