import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

export type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-surface-raised p-6 text-text shadow-sm",
        className,
      )}
      {...props}
    />
  );
}
