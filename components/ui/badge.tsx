import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

const badgeVariants = {
  neutral: "bg-surface-subtle text-text-muted",
  brand: "bg-brand/10 text-brand",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  danger: "bg-danger/10 text-danger",
} as const;

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: keyof typeof badgeVariants;
}

export function Badge({
  className,
  variant = "neutral",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide",
        badgeVariants[variant],
        className,
      )}
      {...props}
    />
  );
}
