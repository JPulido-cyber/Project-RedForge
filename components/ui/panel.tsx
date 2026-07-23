import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib";

export interface PanelProps
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  actions?: ReactNode;
  description?: ReactNode;
  title?: ReactNode;
}

export function Panel({
  actions,
  children,
  className,
  description,
  title,
  ...props
}: PanelProps) {
  return (
    <section
      className={cn(
        "overflow-hidden rounded-lg border border-border bg-surface-raised shadow-sm",
        className,
      )}
      {...props}
    >
      {title || description || actions ? (
        <header className="flex items-start justify-between gap-6 border-b border-border px-6 py-5">
          <div className="space-y-1">
            {title ? (
              <h2 className="font-semibold text-text">{title}</h2>
            ) : null}
            {description ? (
              <p className="text-sm text-text-muted">{description}</p>
            ) : null}
          </div>
          {actions}
        </header>
      ) : null}
      <div className="p-6">{children}</div>
    </section>
  );
}
