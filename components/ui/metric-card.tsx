import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib";

export interface MetricCardProps extends HTMLAttributes<HTMLDivElement> {
  detail?: ReactNode;
  label: ReactNode;
  trend?: "down" | "neutral" | "up";
  value: ReactNode;
}

const trendStyles = {
  down: "text-danger",
  neutral: "text-text-muted",
  up: "text-success",
} as const;

export function MetricCard({
  className,
  detail,
  label,
  trend = "neutral",
  value,
  ...props
}: MetricCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-surface-raised p-5 shadow-sm",
        className,
      )}
      {...props}
    >
      <p className="text-sm font-medium text-text-muted">{label}</p>
      <p className="mt-2 text-3xl font-semibold tracking-tight text-text">
        {value}
      </p>
      {detail ? (
        <p className={cn("mt-2 text-sm", trendStyles[trend])}>{detail}</p>
      ) : null}
    </div>
  );
}
