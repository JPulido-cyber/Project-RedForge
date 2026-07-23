import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib";

export interface SectionHeaderProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  description?: ReactNode;
  eyebrow?: ReactNode;
  title: ReactNode;
}

export function SectionHeader({
  className,
  description,
  eyebrow,
  title,
  ...props
}: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl space-y-3", className)} {...props}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-brand">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-text">{title}</h2>
      {description ? (
        <p className="text-base leading-7 text-text-muted">{description}</p>
      ) : null}
    </div>
  );
}
